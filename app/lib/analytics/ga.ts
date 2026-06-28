import { sendGAEvent } from "@next/third-parties/google";
import type { AnalyticsEventName, AnalyticsEventProperties } from "./events";

/**
 * GA4 measurement ID, inlined at build time from the environment. When it's
 * unset (local dev without a key, or a preview without the var), `track()`
 * no-ops — so analytics calls are safe to leave in components everywhere.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Send a typed custom event to GA4. Event names and payload shapes live in
 * `./events`, so callers can't pass an unknown event or a mismatched payload.
 * No-ops during SSR and whenever GA isn't configured.
 */
export function track<E extends AnalyticsEventName>(
  event: E,
  properties: AnalyticsEventProperties[E],
) {
  if (!GA_ID || typeof window === "undefined") return;
  sendGAEvent("event", event, properties);
}
