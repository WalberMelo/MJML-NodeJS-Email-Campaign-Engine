import "@testing-library/jest-dom";
import { loadEnvConfig } from "@next/env";

export default async () => {
  loadEnvConfig(process.env.PWD);
};
