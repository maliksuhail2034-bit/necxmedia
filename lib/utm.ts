export const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
] as const;

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

const STORAGE_KEY = 'necx_utm';

/** Reads UTM params from the current URL and persists them (first-touch) for the session. */
export function captureUtmFromLocation(): void {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  const found: UtmParams = {};
  let hasAny = false;
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) {
      found[key] = value;
      hasAny = true;
    }
  }
  if (hasAny) {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
  }
}

/** Returns whatever UTM params were captured earlier in this session, if any. */
export function getStoredUtm(): UtmParams {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UtmParams) : {};
  } catch {
    return {};
  }
}
