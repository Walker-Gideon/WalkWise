import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("firebase")) {
              return "vendor-firebase";
            }
            if (id.includes("@tanstack")) {
              return "vendor-query";
            }
            if (id.includes("date-fns")) {
              return "vendor-date";
            }
            if (id.includes("react-icons") || id.includes("lucide")) {
              return "vendor-icons";
            }
            return "vendor-misc";
          }
        },
      },
    },
  },
})
