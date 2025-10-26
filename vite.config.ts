import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  define: {
    "process.env.VITE_APP_ENV": JSON.stringify(
      process.env.VITE_APP_ENV || "production"
    ),
  },
  base: "/",
  plugins: [react()],
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    origin: "web.localhost.com",
  },
});
