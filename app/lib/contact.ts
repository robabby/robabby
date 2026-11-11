export type ContactConfig = {
  apiKey?: string;
  sender?: string;
  recipient: string;
  allowedOrigins: string[];
};

const MAX_BYTES = 32_768;
const emailPattern = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
const response = (status: number, message: string) =>
  Response.json({ message }, { status, headers: { "Cache-Control": "no-store" } });

/** Fixed recipient, bounded input, and no message content in logs. */
export async function handleContact(request: Request, config: ContactConfig, send: typeof fetch = fetch) {
  if (!config.allowedOrigins.includes(request.headers.get("origin") ?? "")) {
    return response(403, "Please send your message from the contact page.");
  }
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return response(415, "Please use the contact form to send your message.");
  }
  if (Number(request.headers.get("content-length")) > MAX_BYTES) {
    return response(413, "Your message is too long. Please keep it under 5,000 characters.");
  }
  let data: Record<string, unknown>;
  try {
    const reader = request.body?.getReader();
    if (!reader) return response(400, "Please fill in the form before sending.");
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BYTES) {
        await reader.cancel();
        return response(413, "Your message is too long. Please keep it under 5,000 characters.");
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
    data = JSON.parse(new TextDecoder().decode(bytes));
    if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("Invalid body");
  } catch {
    return response(400, "Please check the form and try again.");
  }
  // A hidden field catches simple automated submissions without a visitor challenge.
  if (typeof data.website === "string" && data.website.trim()) {
    return response(400, "Your message could not be sent. Please email me directly instead.");
  }
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";
  if (!name || name.length > 120 || /[\r\n\x00-\x1f\x7f]/.test(name)) {
    return response(400, "Please enter your name (up to 120 characters).");
  }
  if (email.length > 254 || !emailPattern.test(email) || /[\x00-\x1f\x7f]/.test(email)) {
    return response(400, "Please enter an email address I can reply to.");
  }
  if (!message || message.length > 5000 || /\x00/.test(message)) {
    return response(400, "Please write a message of up to 5,000 characters.");
  }
  if (!config.apiKey || !config.sender) {
    return response(503, "The form is unavailable right now. Your message is still here. Please try again or email me directly.");
  }
  try {
    const result = await send("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "api-key": config.apiKey, "Content-Type": "application/json", accept: "application/json" },
      body: JSON.stringify({
        sender: { name: "Rob Abby website", email: config.sender },
        to: [{ email: config.recipient, name: "Rob Abby" }],
        replyTo: { name, email },
        subject: `Website inquiry from ${name}`,
        textContent: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        tags: ["website-contact"],
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!result.ok) return response(502, "Your message could not be sent. It is still here — please try again or email me directly.");
    const accepted = await result.json();
    if (typeof accepted.messageId !== "string") throw new Error("No delivery receipt");
    return response(200, "Thanks for reaching out. Your message has been submitted, and I’ll reply by email.");
  } catch {
    return response(502, "I couldn’t confirm that your message was sent. It is still here — please email me directly if you need to follow up.");
  }
}
