import { c as create_ssr_component, a as subscribe, v as validate_component, d as each } from "../../../chunks/ssr.js";
import { C as Card } from "../../../chunks/Card.js";
import { s as searchQuery, S as SearchBar } from "../../../chunks/SearchBar.js";
const optimizationTools = [
  {
    title: "CleanMyMac X",
    description: "Storage cleanup, malware removal, and performance tuning for macOS.",
    link: "https://macpaw.com/cleanmymac",
    tags: ["cleanup", "macOS"]
  },
  {
    title: "Sensei",
    description: "Mac performance dashboard with GPU/CPU stats and trim tools.",
    link: "https://sensei.app",
    tags: ["performance", "macOS"]
  },
  {
    title: "Rectangle",
    description: "Window management with keyboard-driven tiling.",
    link: "https://rectangleapp.com",
    tags: ["productivity", "windows"]
  },
  {
    title: "Alfred",
    description: "Launcher and automation utility with workflows.",
    link: "https://www.alfredapp.com",
    tags: ["automation", "launcher"]
  },
  {
    title: "BetterTouchTool",
    description: "Custom gestures and shortcuts for trackpads, mice, and keyboards.",
    link: "https://folivora.ai",
    tags: ["shortcuts", "macOS"]
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchQuery, $$unsubscribe_searchQuery;
  $$unsubscribe_searchQuery = subscribe(searchQuery, (value) => $searchQuery = value);
  let filtered = optimizationTools;
  {
    {
      const q = $searchQuery.toLowerCase();
      filtered = q ? optimizationTools.filter((tool) => tool.title.toLowerCase().includes(q) || tool.description.toLowerCase().includes(q)) : optimizationTools;
    }
  }
  $$unsubscribe_searchQuery();
  return `${$$result.head += `<!-- HEAD_svelte-97s4lu_START -->${$$result.title = `<title>Optimization - NugWeb</title>`, ""}<!-- HEAD_svelte-97s4lu_END -->`, ""} <div class="max-w-7xl mx-auto px-4 py-6 text-ink"><div class="mb-8" data-svelte-h="svelte-3gdd30"><p class="text-sm uppercase tracking-[0.25em] text-purple-secondary">Collection</p> <h1 class="text-4xl font-extrabold mb-3">Optimization</h1> <p class="text-lg text-ink/70">Performance and workflow tuning tools to shave off friction.</p></div> ${validate_component(SearchBar, "SearchBar").$$render($$result, {}, {}, {})} <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">${each(filtered, (app) => {
    return `${validate_component(Card, "Card").$$render($$result, { app }, {}, {})}`;
  })}</div> ${filtered.length === 0 ? `<div class="text-center py-12 text-ink/60" data-svelte-h="svelte-7ao4kc"><p>No tools found matching your search.</p></div>` : ``}</div>`;
});
export {
  Page as default
};
