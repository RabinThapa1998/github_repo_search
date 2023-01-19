import * as dotenv from "dotenv";

dotenv.config();

const config = {
  app: {
    name: process.env.APP_NAME || "Github Search",
    url: process.env.APP_URL || "http://localhost:8000",
    host: process.env.APP_HOST || "localhost",
    port: process.env.APP_PORT || 8000,
    isDev: process.env.NODE_ENV === "development",
    isProd: process.env.NODE_ENV === "production",
  },
};

export default config;
