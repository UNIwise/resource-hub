import react from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    Unfonts({
      fontsource: {
        families: [
          {
            name: "Mona Sans",
            weights: [200, 300, 400, 500, 600, 700, 800, 900],
          },
          {
            name: "JetBrains Mono",
            weights: [200],
          },
        ],
      },
    }),
    react(),
  ],
});
