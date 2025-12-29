// Umami analytics tracking utility

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, string | number>) => void;
    };
  }
}

/**
 * Track a custom event in Umami analytics
 * @param eventName - Name of the event to track
 * @param eventData - Optional data to attach to the event
 */
export function trackEvent(eventName: string, eventData?: Record<string, string | number>) {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track(eventName, eventData);
  }
}

/**
 * Track WhatsApp button click
 * @param location - Where the button was clicked (e.g., 'contact', 'private-training')
 */
export function trackWhatsAppClick(location: string) {
  trackEvent('whatsapp_click', {
    location,
    timestamp: Date.now(),
  });
}

