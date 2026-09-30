const configuredApiUrl = import.meta.env.VITE_API_URL;

if (!configuredApiUrl) {
  throw new Error('VITE_API_URL is not defined. Set it in your .env.development.local (dev) or Vercel environment variables (production).');
}

const API_URL = configuredApiUrl.endsWith('/')
  ? configuredApiUrl.slice(0, -1)
  : configuredApiUrl;

export default API_URL;
