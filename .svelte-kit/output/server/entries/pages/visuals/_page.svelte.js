import { c as create_ssr_component, a as subscribe, v as validate_component, d as each } from "../../../chunks/ssr.js";
import { C as Card } from "../../../chunks/Card.js";
import { s as searchQuery, S as SearchBar } from "../../../chunks/SearchBar.js";
const visuals = [
  {
    title: "Windhawk",
    description: "Free tool to tweak and customize Windows UI behaviour and visuals.",
    link: "https://windhawk.net",
    tags: ["windows", "tweaks", "free"]
  },
  {
    title: "Wallpaper Engine",
    description: "Premium live wallpaper engine with animated and interactive backgrounds.",
    link: "https://www.wallpaperengine.io",
    tags: ["wallpapers", "premium"]
  },
  {
    title: "Lively Wallpaper",
    description: "Open-source live wallpaper app for Windows with performance controls.",
    link: "https://www.rocksdanister.com/lively",
    tags: ["wallpapers", "free"]
  },
  {
    title: "Rainmeter",
    description: "Highly customizable desktop widgets and skins for Windows.",
    link: "https://www.rainmeter.net",
    tags: ["widgets", "customization"]
  },
  {
    title: "TranslucentTB",
    description: "Neat customization for the Windows taskbar with blur and transparency.",
    link: "https://github.com/TranslucentTB/TranslucentTB",
    tags: ["taskbar", "free"]
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchQuery, $$unsubscribe_searchQuery;
  $$unsubscribe_searchQuery = subscribe(searchQuery, (value) => $searchQuery = value);
  let filtered = visuals;
  {
    {
      const q = $searchQuery.toLowerCase();
      filtered = q ? visuals.filter((app) => app.title.toLowerCase().includes(q) || app.description.toLowerCase().includes(q)) : visuals;
    }
  }
  $$unsubscribe_searchQuery();
  return `${$$result.head += `<!-- HEAD_svelte-ioz0ra_START -->${$$result.title = `<title>Visuals - NugWeb</title>`, ""}<!-- HEAD_svelte-ioz0ra_END -->`, ""} <div class="max-w-7xl mx-auto px-4 py-6 text-ink"><div class="mb-8" data-svelte-h="svelte-36vbh"><p class="text-sm uppercase tracking-[0.25em] text-purple-secondary">Collection</p> <h1 class="text-4xl font-extrabold mb-3">Visuals</h1> <p class="text-lg text-ink/70">Design, illustration, and visual polish resources.</p></div> ${validate_component(SearchBar, "SearchBar").$$render($$result, {}, {}, {})} <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">${each(filtered, (app) => {
    return `${validate_component(Card, "Card").$$render($$result, { app }, {}, {})}`;
  })}</div> ${filtered.length === 0 ? `<div class="text-center py-12 text-ink/60" data-svelte-h="svelte-7ao4kc"><p>No tools found matching your search.</p></div>` : ``}</div>`;
});
export {
  Page as default
};
