// app.config.ts
import { defineConfig } from "@solidjs/start/config";
import { resolve } from "vinxi";
var app_config_default = defineConfig({
  server: {
    preset: "vercel"
  },
  vite: {
    resolve: {
      alias: {
        "@": resolve.relative(__dirname, "./src")
      }
    }
  }
});
export {
  app_config_default as default
};
