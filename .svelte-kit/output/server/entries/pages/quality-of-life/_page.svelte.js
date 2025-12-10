import { c as create_ssr_component, a as subscribe, v as validate_component, d as each } from "../../../chunks/ssr.js";
import { C as Card } from "../../../chunks/Card.js";
import { s as searchQuery, S as SearchBar } from "../../../chunks/SearchBar.js";
const qualityOfLife = [
  {
    title: "Raycast",
    description: "A fast command palette for macOS that accelerates everyday tasks.",
    link: "https://www.raycast.com/",
    tags: ["launcher", "macOS"]
  },
  {
    title: "Notion",
    description: "All-in-one workspace for notes, docs, tasks, and wikis.",
    link: "https://www.notion.so/",
    tags: ["notes", "tasks"]
  },
  {
    title: "Obsidian",
    description: "Markdown-based knowledge base with powerful graph and plugins.",
    link: "https://obsidian.md/",
    tags: ["notes", "markdown"]
  },
  {
    title: "Cron",
    description: "Beautiful calendar app with multi-timezone scheduling.",
    link: "https://cron.com/",
    tags: ["calendar", "scheduling"]
  },
  {
    title: "Linear",
    description: "Issue tracking that feels fast; built for product teams.",
    link: "https://linear.app/",
    tags: ["projects", "issues"]
  },
  {
    title: "Vencord",
    description: "Discord client mod that adds tons of quality-of-life improvements.",
    link: "https://vencord.dev",
    tags: ["discord", "qol"]
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchQuery, $$unsubscribe_searchQuery;
  $$unsubscribe_searchQuery = subscribe(searchQuery, (value) => $searchQuery = value);
  let filteredApps = qualityOfLife;
  {
    {
      const query = $searchQuery.toLowerCase();
      if (query) {
        filteredApps = qualityOfLife.filter((app) => app.title.toLowerCase().includes(query) || app.description.toLowerCase().includes(query));
      } else {
        filteredApps = qualityOfLife;
      }
    }
  }
  $$unsubscribe_searchQuery();
  return `${$$result.head += `<!-- HEAD_svelte-bnmd1f_START -->${$$result.title = `<title>Quality of Life Apps - NugWeb</title>`, ""}<!-- HEAD_svelte-bnmd1f_END -->`, ""} <div class="max-w-7xl mx-auto px-4 py-6 text-ink"><div class="mb-8" data-svelte-h="svelte-wt3n77"><p class="text-sm uppercase tracking-[0.25em] text-purple-secondary">Collection</p> <h1 class="text-4xl font-extrabold mb-3">Quality of Life Apps</h1> <p class="text-lg text-ink/70">Tools that improve your workflow and productivity.</p></div> ${validate_component(SearchBar, "SearchBar").$$render($$result, {}, {}, {})} <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">${each(filteredApps, (app) => {
    return `${validate_component(Card, "Card").$$render($$result, { app }, {}, {})}`;
  })}</div> ${filteredApps.length === 0 ? `<div class="text-center py-12 text-ink/60" data-svelte-h="svelte-1gkazm3"><p>No apps found matching your search.</p></div>` : ``}</div>`;
});
export {
  Page as default
};
