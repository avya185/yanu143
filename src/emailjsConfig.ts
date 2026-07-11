// Per-form EmailJS configuration. Vite env vars may override these defaults.
export const CONTACT_EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_v44ve1k';
export const CONTACT_EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_duz1bnj';
export const CONTACT_EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'oDZ-OdADS8J7knJIS';

export const CAREERS_EMAILJS_SERVICE_ID = import.meta.env.VITE_CAREERS_EMAILJS_SERVICE_ID || 'service_zs67n1f';
export const CAREERS_EMAILJS_TEMPLATE_ID = import.meta.env.VITE_CAREERS_EMAILJS_TEMPLATE_ID || 'template_hixw055';
export const CAREERS_EMAILJS_PUBLIC_KEY = import.meta.env.VITE_CAREERS_EMAILJS_PUBLIC_KEY || 'ogSGvhwDbUR0oabqR';

// Fallback export names for older imports
export const EMAILJS_SERVICE_ID = CONTACT_EMAILJS_SERVICE_ID;
export const EMAILJS_TEMPLATE_ID = CONTACT_EMAILJS_TEMPLATE_ID;
export const EMAILJS_PUBLIC_KEY = CONTACT_EMAILJS_PUBLIC_KEY;
