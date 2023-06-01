import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import ssr from "vite-plugin-ssr/plugin";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react(), tsconfigPaths(), ssr()],
  plugins: [react(), tsconfigPaths(), ssr({ prerender: true })],
  ssr: {
    noExternal: ["styled-components", "@emotion/*"],
  },
});
