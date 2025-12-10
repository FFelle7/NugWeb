import { c as create_ssr_component, a as subscribe, v as validate_component, d as each } from "../../../chunks/ssr.js";
import { C as Card } from "../../../chunks/Card.js";
import { s as searchQuery, S as SearchBar } from "../../../chunks/SearchBar.js";
const projects = [
  {
    title: "QOOL (Fabric 1.21.8)",
    description: "Helper / trainer Minecraft mod for Fabric 1.21.8 that makes practicing and improving easier.",
    link: "#qool",
    tags: ["minecraft", "fabric", "helper"]
  },
  {
    title: "Felle Studio",
    description: "Desktop app for downloading and organising videos and audio from TikTok, YouTube, Instagram and more, with a built-in simple editor.",
    link: "#felle-studio",
    tags: ["video", "downloader", "editor"]
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchQuery, $$unsubscribe_searchQuery;
  $$unsubscribe_searchQuery = subscribe(searchQuery, (value) => $searchQuery = value);
  let filtered = projects;
  {
    {
      const q = $searchQuery.toLowerCase();
      filtered = q ? projects.filter((app) => app.title.toLowerCase().includes(q) || app.description.toLowerCase().includes(q)) : projects;
    }
  }
  $$unsubscribe_searchQuery();
  return `${$$result.head += `<!-- HEAD_svelte-151usyy_START -->${$$result.title = `<title>Felles Projects - NugWeb</title>`, ""}<!-- HEAD_svelte-151usyy_END -->`, ""} <div class="max-w-7xl mx-auto px-4 py-6 text-ink"><div class="mb-8" data-svelte-h="svelte-z4ccrv"><p class="text-sm uppercase tracking-[0.25em] text-purple-secondary">Collection</p> <h1 class="text-4xl font-extrabold mb-3">Felles Projects</h1> <p class="text-lg text-ink/70">Shared project picks for collaboration and delivery.</p></div> ${validate_component(SearchBar, "SearchBar").$$render($$result, {}, {}, {})} <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">${each(filtered, (app) => {
    return `${validate_component(Card, "Card").$$render($$result, { app }, {}, {})}`;
  })}</div> ${filtered.length === 0 ? `<div class="text-center py-12 text-ink/60" data-svelte-h="svelte-1gkazm3"><p>No apps found matching your search.</p></div>` : ``}</div>`;
});
export {
  Page as default
};
