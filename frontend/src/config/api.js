// In production (Vercel monorepo), API is same-origin — always use ''.
// In local dev, VITE_API_URL=http://localhost:5000 from .env.development.local.
const API_URL = import.meta.env.PROD
  ? ''
  : (import.meta.env.VITE_API_URL?.trim().replace(/\/+$/, '') || '');

export const isApiConfigured = true;
export const API_CONFIGURATION_ERROR = '';

export default API_URL;
