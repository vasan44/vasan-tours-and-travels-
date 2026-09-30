const API_URL = import.meta.env.VITE_API_URL;
if (!API_URL) {
  throw new Error('VITE_API_URL is not defined. Set it in your .env.local (dev) or Vercel environment variables (production).');
}
export default API_URL;
