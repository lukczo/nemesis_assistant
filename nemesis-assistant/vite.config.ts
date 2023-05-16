import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import iconsJson from "./icons.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Nemesis Assistant",
        short_name: "Nemesis Assistant",
        icons: iconsJson.icons,
        theme_color: "#242424",
        background_color: "#242424",
        display: "standalone",
        scope: "/",
        orientation: "portrait",
      },
    }),
  ],
});
