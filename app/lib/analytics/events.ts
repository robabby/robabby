/**
 * Analytics event catalog — the single source of truth for GA4 custom event
 * names and their payload shapes. Pure types and constants with no runtime
 * import of `@next/third-parties`, so it's safe to import from anywhere.
 *
 * GA4 enhanced measurement already captures page views, scrolls, and outbound
 * clicks on its own, so this catalog only covers interactions GA can't infer.
 */

/**
 * Canonical GA4 event names. The string *values* are the live event names in
 * GA4 — renaming a value splits historical data, so treat them as stable. The
 * `satisfies` clause is a compile-time guard (every value must be a known event
 * name), while `as const` preserves the literal types so `THEME_CHANGED` is
 * `"theme_changed"`, not `string`.
 */
export const ANALYTICS_EVENTS = {
  THEME_CHANGED: "theme_changed",
} as const satisfies Record<string, AnalyticsEventName>;

/** Maps each event name to the exact properties recorded with it. */
export interface AnalyticsEventProperties {
  /** Visitor toggled the color theme via the header toggle. */
  theme_changed: {
    /** Theme the visitor switched to. */
    theme: "light" | "dark";
  };
}

export type AnalyticsEventName = keyof AnalyticsEventProperties;
