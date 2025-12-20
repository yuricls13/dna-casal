import React from 'react';
import { CHECKOUT_URL, N8N_WEBHOOK_URL } from '../../constants';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  size?: 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary',
  fullWidth = false,
  size = 'md'
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 transform hover:scale-105 rounded-xl shadow-lg cursor-pointer";
  
  const sizeStyles = size === 'lg' ? "py-5 px-12 text-xl md:text-2xl" : "py-4 px-8 text-lg";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-purple to-brand-pink text-white hover:shadow-brand-purple/40",
    secondary: "bg-white text-brand-purple border-2 border-brand-purple hover:bg-brand-light"
  };

  const widthStyle = fullWidth ? "w-full" : "w-auto";

  const handleTracking = (e: React.MouseEvent) => {
    // 1. Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }

    // 2. Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'begin_checkout', {
        'event_category': 'ecommerce',
        'event_label': 'checkout_click'
      });
    }

    // 3. Webhook n8n
    if (N8N_WEBHOOK_URL && N8N_WEBHOOK_URL.startsWith('http')) {
      const payload = {
        event: 'InitiateCheckout',
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        searchParams: window.location.search
      };

      // Blob 'text/plain' para evitar problemas de CORS no n8n
      const blob = new Blob([JSON.stringify(payload)], { type: 'text/plain' });
      
      if (navigator.sendBeacon) {
        navigator.sendBeacon(N8N_WEBHOOK_URL, blob);
      } else {
        fetch(N8N_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    }
  };

  return (
    <a 
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleTracking}
      className={`${baseStyles} ${sizeStyles} ${variants[variant]} ${widthStyle} ${className}`}
    >
      {children}
    </a>
  );
};