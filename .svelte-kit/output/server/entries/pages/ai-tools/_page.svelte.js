import { c as create_ssr_component, a as subscribe, v as validate_component, d as each } from "../../../chunks/ssr.js";
import { C as Card } from "../../../chunks/Card.js";
import { s as searchQuery, S as SearchBar } from "../../../chunks/SearchBar.js";
const aiTools = [
  {
    title: "ChatGPT",
    description: "Versatile conversational assistant and code helper.",
    link: "https://chat.openai.com",
    tags: ["assistant", "general"]
  },
  {
    title: "Claude",
    description: "Helpful writing and analysis copilot with strong reasoning.",
    link: "https://claude.ai",
    tags: ["writing", "analysis"]
  },
  {
    title: "Cursor",
    description: "AI-first code editor built on VS Code with inline assistance.",
    link: "https://cursor.com",
    tags: ["coding", "editor"]
  },
  {
    title: "Suno",
    description: "AI music studio for generating full tracks, vocals and stems from text prompts.",
    link: "https://suno.com",
    tags: ["music", "audio"]
  },
  {
    title: "Perplexity",
    description: "Answer engine with live sources and citations.",
    link: "https://www.perplexity.ai",
    tags: ["search", "research"]
  },
  {
    title: "Midjourney",
    description: "High-quality text-to-image generation with stylized outputs.",
    link: "https://www.midjourney.com",
    tags: ["images", "creative"]
  },
  {
    title: "GitHub Copilot",
    description: "Code generation assistant integrated directly into popular IDEs.",
    link: "https://github.com/features/copilot",
    tags: ["coding", "pair-programmer"]
  },
  {
    title: "Gemini",
    description: "Google’s multimodal AI for reasoning, coding, and search.",
    link: "https://gemini.google.com",
    tags: ["assistant", "multimodal"]
  },
  {
    title: "Stable Diffusion",
    description: "Open ecosystem for local and cloud-based image generation.",
    link: "https://stability.ai",
    tags: ["images", "open-source"]
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchQuery, $$unsubscribe_searchQuery;
  $$unsubscribe_searchQuery = subscribe(searchQuery, (value) => $searchQuery = value);
  let filtered = aiTools;
  {
    {
      const q = $searchQuery.toLowerCase();
      filtered = q ? aiTools.filter((tool) => tool.title.toLowerCase().includes(q) || tool.description.toLowerCase().includes(q)) : aiTools;
    }
  }
  $$unsubscribe_searchQuery();
  return `${$$result.head += `<!-- HEAD_svelte-1yy7dtu_START -->${$$result.title = `<title>AI Tools - NugWeb</title>`, ""}<!-- HEAD_svelte-1yy7dtu_END -->`, ""} <div class="max-w-7xl mx-auto px-4 py-6 text-ink"><div class="mb-8" data-svelte-h="svelte-1ud1hfn"><p class="text-sm uppercase tracking-[0.25em] text-purple-secondary">Collection</p> <h1 class="text-4xl font-extrabold mb-3">AI Tools</h1> <p class="text-lg text-ink/70">Assistants, generators, and copilots to speed up daily tasks.</p></div> ${validate_component(SearchBar, "SearchBar").$$render($$result, {}, {}, {})} <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">${each(filtered, (app) => {
    return `${validate_component(Card, "Card").$$render($$result, { app }, {}, {})}`;
  })}</div> ${filtered.length === 0 ? `<div class="text-center py-12 text-ink/60" data-svelte-h="svelte-7ao4kc"><p>No tools found matching your search.</p></div>` : ``}</div>`;
});
export {
  Page as default
};
