import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Nemesis Assistant",
        short_name: "NA",
        icons: [
          {
            src: "alien.ico",
            sizes: "64x64",
            type: "image/x-icon",
          },
          {
            src: "alien128.png",
            type: "image/png",
            sizes: "128x128",
          },
          {
            src: "alien512.png",
            type: "image/png",
            sizes: "512x512",
          },
        ],
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        scope: "/",
        orientation: "portrait",
      },
    }),
  ],
});
