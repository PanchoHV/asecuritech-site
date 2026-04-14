declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(
  event: string,
  params?: Record<string, unknown>
): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...params
  });
}

export function trackScrollDepth(depth: number): void {
  trackEvent("scroll_depth", { depth });
}
