"use client";

import { useRef, useState, type FormEvent } from "react";
import styles from "./contact.module.css";

export default function ContactForm() {
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);
  const submitting = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    setPending(true);
    setResult(null);
    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
        signal: AbortSignal.timeout(15_000),
      });
      const body = await response.json().catch(() => null);
      const message = body?.message ?? (response.status === 429
        ? "Too many attempts just now. Please wait a few minutes or email me directly."
        : "Your message could not be sent. It is still here — please try again or email me directly.");
      setResult({ ok: response.ok, message });
      if (response.ok) form.reset();
    } catch {
      setResult({ ok: false, message: "I couldn’t confirm that your message was sent. It is still here — please check your connection or email me directly." });
    } finally {
      submitting.current = false;
      setPending(false);
    }
  }

  return (
    <form action="/api/contact" method="post" onSubmit={submit} className={styles.form} aria-label="Send Rob a message">
      <noscript><p className={styles.notice}>This form needs JavaScript to send. You can always <a href="mailto:robabby23@gmail.com">email me directly</a>.</p></noscript>
      <div className={styles.paired}>
        <div className={styles.field}><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" autoComplete="name" readOnly={pending} required maxLength={120} /></div>
        <div className={styles.field}><label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" readOnly={pending} required maxLength={254} /></div>
      </div>
      <div className={styles.field}>
        <label htmlFor="contact-message">What would you like to talk about?</label>
        <p id="message-hint" className={styles.hint}>A few sentences is plenty. You don’t need a finished plan.</p>
        <textarea id="contact-message" name="message" aria-describedby="message-hint" readOnly={pending} required maxLength={5000} rows={5} />
      </div>
      <div className={styles.trap} aria-hidden="true"><label htmlFor="contact-website">Leave this empty</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <button className={`button ${styles.send}`} type="submit" disabled={pending}>{pending ? "Sending…" : "Send message"}</button>
      <p className={styles.reply}>I’ll reply by email.</p>
      <div role="status" aria-live="polite" aria-atomic="true" className={styles.status}>
        {result && <p>{result.message}{!result.ok && <> <a href="mailto:robabby23@gmail.com">Email Rob</a>.</>}</p>}
      </div>
    </form>
  );
}
