import dotenv from "dotenv";
dotenv.config();

const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;
const STRIPE_SECRET_KEY =
  "sk_test_51R64hyLrSdQNOahOc8asNTKmF3L3KVoLPKzcLb1KzBshhUk93I6kbgFFwdtesU3ft5EGfa80rYvK2EcpyJfXlVGT00n20nXLOF";

export default {
  JWT_USER_PASSWORD,
  JWT_ADMIN_PASSWORD,
  STRIPE_SECRET_KEY,
};
