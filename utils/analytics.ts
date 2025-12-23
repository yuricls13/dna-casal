/**
 * Utilitário para rastreamento de eventos (Facebook Pixel / Meta Ads & Google Analytics)
 * Documentação Meta: https://developers.facebook.com/docs/meta-pixel/reference
 */

type StandardEvent = 
  | 'PageView'
  | 'ViewContent'
  | 'Lead'
  | 'InitiateCheckout'
  | 'Purchase'
  | 'CustomizeProduct'
  | 'AddToCart'
  | 'Contact';

interface EventParams {
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
  [key: string]: any;
}

export const trackEvent = (eventName: StandardEvent, params?: EventParams) => {
  try {
    // Rastreamento Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', eventName, params);
    }

    // Rastreamento Google Analytics (gtag)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        event_category: 'engagement',
        event_label: params?.content_name,
        ...params
      });
    }

    // Log em desenvolvimento para facilitar debug
    // @ts-ignore
    if (import.meta.env.DEV) {
      console.log(`📡 [Tracking] ${eventName}`, params);
    }
  } catch (error) {
    console.error("Erro ao disparar evento de tracking:", error);
  }
};