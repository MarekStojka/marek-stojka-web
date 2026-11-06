/** Future analytics boundary. No provider is loaded and no event is sent in V1.
 * Add a consent manager before connecting any analytics adapter here.
 * Never put secrets in PUBLIC_* variables: these are visible in the browser.
 */
export type ConsentCategory = 'analytics' | 'advertising';
export type MarketingEvent = {
  name: 'world_open' | 'project_open' | 'contact_click' | 'conversion';
  properties?: Record<string, string | number | boolean>;
};
export interface MarketingAdapter {
  requiredConsent: ConsentCategory;
  initialize(): Promise<void>;
  track(event: MarketingEvent): void;
  dispose(): void;
}
export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;
/** Pure helper only: no cookies, persistence or automatic URL collection. */
export function parseCampaignParameters(search: string) {
  const params = new URLSearchParams(search);
  return Object.fromEntries(UTM_KEYS.flatMap((key) => params.has(key) ? [[key, params.get(key)!.slice(0, 200)]] : []));
}
