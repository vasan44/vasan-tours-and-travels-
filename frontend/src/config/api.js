const configuredApiUrl = import.meta.env.VITE_API_URL?.trim();

const API_URL = configuredApiUrl ? configuredApiUrl.replace(/\/+$/, '') : '';

export const isApiConfigured = Boolean(API_URL);
export const API_CONFIGURATION_ERROR = 'VITE_API_URL is not configured. Set it to the deployed backend URL in Vercel Environment Variables, then redeploy.';

export default API_URL;
