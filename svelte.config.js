import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    // Use the static adapter for GitHub Pages
    adapter: adapter({
      // fallback to index.html for SPA-style routing
      fallback: "index.html",
    }),

    // Set base path for GitHub Pages
    paths: {
      base: "/NugWeb",
    },

    // Attempt to prerender all pages
    prerender: {
      entries: ["*"],
      handleHttpError: "warn",
      handleMissingId: "warn",
    },

    // Optional: configure alias if needed
    // alias: {
    //   $lib: 'src/lib'
    // }
  },
};

export default config;
