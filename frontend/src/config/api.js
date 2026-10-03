const configuredApiUrl = import.meta.env.VITE_API_URL?.trim();

// In production on Vercel (monorepo), API is same-origin so use ''.
// In local dev, VITE_API_URL=http://localhost:5000 from .env.development.local.
const API_URL = configuredApiUrl ? configuredApiUrl.replace(/\/+$/, '') : '';

export const isApiConfigured = true;
export const API_CONFIGURATION_ERROR = '';

export default API_URL;
