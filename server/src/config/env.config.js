import dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.PORT || 4000,
  DATABASE_CONNECTION: process.env.MONGODB_URL,
  JWT_SECRET: process.env.JWT_SECRET_KEY,
  BASE_URL: process.env.BASE_URL,
};

export default config;
