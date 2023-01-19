const dev = process.env.NODE_ENV !== 'production';
export const BASE_URL = dev ? `http://localhost:8000` : process.env.BASE_URL;
