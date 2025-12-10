import { c as create_ssr_component, a as subscribe, v as validate_component, d as each, e as escape } from "../../../chunks/ssr.js";
import { C as Card } from "../../../chunks/Card.js";
import { s as searchQuery, S as SearchBar } from "../../../chunks/SearchBar.js";
const essentialCategories = [
  {
    name: "Programming setup",
    description: "Core tools to start coding quickly.",
    apps: [
      {
        title: "Node.js",
        description: "Runtime for JavaScript and TypeScript tooling and backends.",
        link: "https://nodejs.org",
        tags: ["runtime", "javascript"]
      },
      {
        title: "Python",
        description: "Popular general-purpose language used for scripts, data and backends.",
        link: "https://www.python.org",
        tags: ["language"]
      },
      {
        title: "Git",
        description: "Version control for code and configuration.",
        link: "https://git-scm.com",
        tags: ["vcs"]
      },
      {
        title: "Cursor",
        description: "AI-first code editor built on VS Code with inline assistance.",
        link: "https://cursor.com",
        tags: ["editor", "ai"]
      },
      {
        title: "Visual Studio Code",
        description: "Extensible code editor with a huge ecosystem of extensions.",
        link: "https://code.visualstudio.com",
        tags: ["editor"]
      }
    ]
  },
  {
    name: "System utilities",
    description: "Must-have tools that keep your system healthy and tidy.",
    apps: [
      {
        title: "1Password",
        description: "Secure password manager with strong autofill and sharing.",
        link: "https://1password.com",
        tags: ["security", "passwords"]
      },
      {
        title: "Dropbox",
        description: "Reliable cloud storage and file sync.",
        link: "https://dropbox.com",
        tags: ["storage", "sync"]
      },
      {
        title: "Rectangle",
        description: "Window management for macOS using simple keyboard shortcuts.",
        link: "https://rectangleapp.com",
        tags: ["windows", "productivity"]
      }
    ]
  },
  {
    name: "Browsers & communication",
    description: "Everything you need for browsing and staying in sync with people.",
    apps: [
      {
        title: "Google Chrome",
        description: "Fast browser with great dev tools.",
        link: "https://www.google.com/chrome/",
        tags: ["browser", "web"]
      },
      {
        title: "Firefox",
        description: "Privacy-focused browser with powerful extension support.",
        link: "https://www.mozilla.org/firefox",
        tags: ["browser"]
      },
      {
        title: "Slack",
        description: "Team messaging with channels and integrations.",
        link: "https://slack.com",
        tags: ["communication", "team"]
      },
      {
        title: "Discord",
        description: "Communities, calls, and screen sharing for projects and friends.",
        link: "https://discord.com",
        tags: ["chat", "voice"]
      }
    ]
  },
  {
    name: "Quality of life",
    description: "Small tools that make everyday usage nicer.",
    apps: [
      {
        title: "Vencord",
        description: "Customizable Discord client mod that adds quality-of-life features.",
        link: "https://vencord.dev",
        tags: ["discord", "qol"]
      },
      {
        title: "Raycast",
        description: "Command palette launcher speeding up actions on macOS.",
        link: "https://www.raycast.com",
        tags: ["launcher"]
      },
      {
        title: "Notion",
        description: "Workspace for notes, docs, tasks, and wikis in one.",
        link: "https://www.notion.so",
        tags: ["notes", "tasks"]
      }
    ]
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchQuery, $$unsubscribe_searchQuery;
  $$unsubscribe_searchQuery = subscribe(searchQuery, (value) => $searchQuery = value);
  let filteredCategories = essentialCategories;
  {
    {
      const q = $searchQuery.toLowerCase();
      if (!q) {
        filteredCategories = essentialCategories;
      } else {
        filteredCategories = essentialCategories.map((cat) => ({
          ...cat,
          apps: cat.apps.filter((app) => app.title.toLowerCase().includes(q) || app.description.toLowerCase().includes(q) || app.tags?.some((t) => t.toLowerCase().includes(q)))
        })).filter((cat) => cat.apps.length > 0);
      }
    }
  }
  $$unsubscribe_searchQuery();
  return `${$$result.head += `<!-- HEAD_svelte-d53yx7_START -->${$$result.title = `<title>Essential Apps - NugWeb</title>`, ""}<!-- HEAD_svelte-d53yx7_END -->`, ""} <div class="max-w-7xl mx-auto px-4 py-6 text-ink"><div class="mb-8" data-svelte-h="svelte-1g2qaao"><p class="text-sm uppercase tracking-[0.25em] text-purple-secondary">Collection</p> <h1 class="mb-3 text-4xl font-extrabold">Essential Apps</h1> <p class="text-lg text-ink/70">Grouped starter kits: programming setup, system utilities, browsers, communication and more.</p></div> ${validate_component(SearchBar, "SearchBar").$$render($$result, {}, {}, {})} <div class="space-y-8">${each(filteredCategories, (category) => {
    return `<section><header class="mb-4 flex items-baseline justify-between gap-4"><div><h2 class="text-xl font-extrabold text-ink">${escape(category.name)}</h2> <p class="text-sm text-ink/65">${escape(category.description)}</p> </div></header> <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">${each(category.apps, (app) => {
      return `${validate_component(Card, "Card").$$render($$result, { app }, {}, {})}`;
    })}</div> </section>`;
  })}</div> ${filteredCategories.length === 0 ? `<div class="py-12 text-center text-ink/60" data-svelte-h="svelte-x7s5bv"><p>No apps found matching your search.</p></div>` : ``}</div>`;
});
export {
  Page as default
};
