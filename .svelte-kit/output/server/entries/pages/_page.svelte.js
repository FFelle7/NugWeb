import { c as create_ssr_component, d as each, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { C as Card } from "../../chunks/Card.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const collections = [
    {
      title: "AI Tools",
      description: "Assistants, generators, and copilots to speed up daily tasks.",
      href: "/ai-tools"
    },
    {
      title: "Essential Apps",
      description: "Core utilities you install first on any fresh machine.",
      href: "/essentials"
    },
    {
      title: "Optimization",
      description: "Performance and workflow tuning tools to shave off friction.",
      href: "/optimization"
    },
    {
      title: "Felles Projects",
      description: "Shared project picks for collaboration and delivery.",
      href: "/projects"
    },
    {
      title: "Quality of Life",
      description: "Handy helpers that make everyday work smoother.",
      href: "/quality-of-life"
    },
    {
      title: "Visuals",
      description: "Design, illustration, and visual polish resources.",
      href: "/visuals"
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-112oakk_START -->${$$result.title = `<title>NugWeb</title>`, ""}<meta name="description" content="Curated tools for productivity and quality of life"><!-- HEAD_svelte-112oakk_END -->`, ""} <main class="max-w-6xl mx-auto px-4 pb-16 pt-4 text-ink"><div class="mb-10 space-y-3" data-svelte-h="svelte-17e8fyc"><p class="text-sm uppercase tracking-[0.25em] text-purple-secondary">Curated stacks</p> <h1 class="text-4xl md:text-5xl font-extrabold">NugWeb</h1> <p class="text-lg text-ink/70 max-w-3xl">A lightweight SvelteKit site for quickly jumping into trusted tools. Browse the categories
			below to find the kit you need.</p></div> <div class="grid gap-4 md:grid-cols-2">${each(collections, (collection) => {
    return `<a class="block"${add_attribute("href", collection.href, 0)}>${validate_component(Card, "Card").$$render(
      $$result,
      {
        app: {
          title: collection.title,
          description: collection.description,
          link: collection.href,
          tags: ["Collection"]
        }
      },
      {},
      {}
    )} </a>`;
  })}</div></main>`;
});
export {
  Page as default
};
