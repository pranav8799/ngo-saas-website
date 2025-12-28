// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";
// import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// export default defineConfig({
//   plugins: [
//     react(),
//     runtimeErrorOverlay(),
//     ...(process.env.NODE_ENV !== "production" &&
//     process.env.REPL_ID !== undefined
//       ? [
//           await import("@replit/vite-plugin-cartographer").then((m) =>
//             m.cartographer(),
//           ),
//           await import("@replit/vite-plugin-dev-banner").then((m) =>
//             m.devBanner(),
//           ),
//         ]
//       : []),
//   ],
//   resolve: {
//     alias: {
//       "@": path.resolve(import.meta.dirname, "client", "src"),
//       "@shared": path.resolve(import.meta.dirname, "shared"),
//       "@assets": path.resolve(import.meta.dirname, "attached_assets"),
//     },
//   },
//   root: path.resolve(import.meta.dirname, "client"),
// build: {
//   outDir: "dist",
//   emptyOutDir: true,
// },

//   server: {
//     fs: {
//       strict: true,
//       deny: ["**/.*"],
//     },
//   },
// });




import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const isReplitDev =
    mode === "development" && process.env.REPL_ID !== undefined;

  return {
    plugins: [
      react(),

      // Replit plugins – ONLY in Replit development
      ...(isReplitDev
        ? [
            require("@replit/vite-plugin-runtime-error-modal").default(),
            require("@replit/vite-plugin-cartographer").cartographer(),
            require("@replit/vite-plugin-dev-banner").devBanner(),
          ]
        : []),
    ],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },

    // React app lives in /client
    root: path.resolve(__dirname, "client"),

    // Output expected by Vercel
    build: {
      outDir: "dist",
      emptyOutDir: true,
    },

    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
