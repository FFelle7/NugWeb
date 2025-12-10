import { c as create_ssr_component, v as validate_component, e as escape, a as subscribe, b as add_attribute, d as each, m as missing_component } from "../../chunks/ssr.js";
import { I as Icon } from "../../chunks/Icon.js";
import { p as page } from "../../chunks/stores.js";
import { d as derived } from "../../chunks/index.js";
const Boxes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"
      }
    ],
    ["path", { "d": "m7 16.5-4.74-2.85" }],
    ["path", { "d": "m7 16.5 5-3" }],
    ["path", { "d": "M7 16.5v5.17" }],
    [
      "path",
      {
        "d": "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"
      }
    ],
    ["path", { "d": "m17 16.5-5-3" }],
    ["path", { "d": "m17 16.5 4.74-2.85" }],
    ["path", { "d": "M17 16.5v5.17" }],
    [
      "path",
      {
        "d": "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"
      }
    ],
    ["path", { "d": "M12 8 7.26 5.15" }],
    ["path", { "d": "m12 8 4.74-2.85" }],
    ["path", { "d": "M12 13.5V8" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "boxes" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Folder_kanban = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
      }
    ],
    ["path", { "d": "M8 10v4" }],
    ["path", { "d": "M12 10v2" }],
    ["path", { "d": "M16 10v6" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "folder-kanban" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Heart_handshake = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
      }
    ],
    [
      "path",
      {
        "d": "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"
      }
    ],
    ["path", { "d": "m18 15-2-2" }],
    ["path", { "d": "m15 18-2-2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "heart-handshake" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "18",
        "y2": "18"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "menu" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Moon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "moon" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Palette = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "13.5", "cy": "6.5", "r": ".5" }],
    ["circle", { "cx": "17.5", "cy": "10.5", "r": ".5" }],
    ["circle", { "cx": "8.5", "cy": "7.5", "r": ".5" }],
    ["circle", { "cx": "6.5", "cy": "12.5", "r": ".5" }],
    [
      "path",
      {
        "d": "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "palette" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Sparkles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
      }
    ],
    ["path", { "d": "M5 3v4" }],
    ["path", { "d": "M19 17v4" }],
    ["path", { "d": "M3 5h4" }],
    ["path", { "d": "M17 19h4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "sparkles" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const X = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M18 6 6 18" }], ["path", { "d": "m6 6 12 12" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "x" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Zap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "polygon",
      {
        "points": "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "zap" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const HeaderBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "NugWeb" } = $$props;
  let { navOpen = false } = $$props;
  let { toggleNav = () => {
  } } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.navOpen === void 0 && $$bindings.navOpen && navOpen !== void 0) $$bindings.navOpen(navOpen);
  if ($$props.toggleNav === void 0 && $$bindings.toggleNav && toggleNav !== void 0) $$bindings.toggleNav(toggleNav);
  return `<header class="surface mb-6 flex items-center justify-between rounded-2xl px-5 py-3 shadow-soft backdrop-blur"><div class="flex items-center gap-3"><button class="md:hidden rounded-lg border border-black/5 bg-white/80 p-2 shadow-soft transition hover:shadow-glow" aria-label="Toggle navigation">${navOpen ? `${validate_component(X, "X").$$render($$result, { class: "h-5 w-5 text-purple-primary" }, {}, {})}` : `${validate_component(Menu, "Menu").$$render($$result, { class: "h-5 w-5 text-purple-primary" }, {}, {})}`}</button> <div><p class="text-xs uppercase tracking-[0.3em] text-purple-secondary" data-svelte-h="svelte-xnvngu">NugWeb</p> <h1 class="text-xl font-extrabold text-ink">${escape(title)}</h1></div></div> <div class="flex items-center gap-3"><button class="rounded-lg border border-black/5 bg-white/80 px-3 py-2 text-sm font-medium text-ink shadow-soft transition hover:shadow-glow" title="Theme toggle (visual only)">${`${validate_component(Moon, "Moon").$$render(
    $$result,
    {
      class: "mr-2 inline h-4 w-4 text-purple-primary"
    },
    {},
    {}
  )}
				Glow`}</button></div></header>`;
});
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  const navItems = [
    {
      title: "AI Tools",
      href: "/ai-tools",
      icon: Sparkles
    },
    {
      title: "Essential Apps",
      href: "/essentials",
      icon: Boxes
    },
    {
      title: "Optimization",
      href: "/optimization",
      icon: Zap
    },
    {
      title: "Quality of Life",
      href: "/quality-of-life",
      icon: Heart_handshake
    },
    {
      title: "Visuals",
      href: "/visuals",
      icon: Palette
    },
    {
      title: "Felles Projects",
      href: "/projects",
      icon: Folder_kanban
    }
  ];
  let { open = true } = $$props;
  let { onNavigate = () => {
  } } = $$props;
  const currentPath = derived(page, ($page) => $page.url.pathname);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  const isActive = (path, href) => path === href || href !== "/" && path.startsWith(href);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.onNavigate === void 0 && $$bindings.onNavigate && onNavigate !== void 0) $$bindings.onNavigate(onNavigate);
  $$unsubscribe_currentPath();
  return `<aside${add_attribute(
    "class",
    `surface h-full w-full rounded-2xl border border-black/5 p-4 shadow-soft transition-all duration-200 ${open ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 md:opacity-100"}`,
    0
  )} aria-label="Sidebar"><div class="mb-6 px-2" data-svelte-h="svelte-12a84u1"><div class="text-xs uppercase tracking-[0.3em] text-purple-secondary">Collections</div></div> <nav class="space-y-2">${each(navItems, (item) => {
    return `${$currentPath !== void 0 ? (() => {
      let active = isActive($currentPath, item.href);
      return ` <button${add_attribute(
        "class",
        `flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-primary ${active ? "bg-purple-primary/10 text-ink border border-purple-primary/20 shadow-glow" : "text-ink/80 hover:bg-white hover:shadow-soft"}`,
        0
      )}>${validate_component(item.icon || missing_component, "svelte:component").$$render($$result, { class: "h-5 w-5 text-purple-primary" }, {}, {})} <span class="flex-1 text-left">${escape(item.title)}</span> ${active ? `<span aria-hidden="true" class="h-2 w-2 rounded-full bg-purple-primary shadow-glow"></span>` : ``} </button>`;
    })() : ``}`;
  })}</nav></aside>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageTitle;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let navOpen = false;
  const toggleNav = () => {
    navOpen = !navOpen;
  };
  const closeNav = () => {
    navOpen = false;
  };
  pageTitle = (() => {
    const path = $page.url.pathname;
    if (path.startsWith("/ai-tools")) return "AI Tools";
    if (path.startsWith("/essentials")) return "Essential Apps";
    if (path.startsWith("/optimization")) return "Optimization";
    if (path.startsWith("/projects")) return "Felles Projects";
    if (path.startsWith("/visuals")) return "Visuals";
    if (path.startsWith("/quality-of-life")) return "Quality of Life";
    return "Home";
  })();
  $$unsubscribe_page();
  return `<div class="min-h-screen px-4 py-6 md:px-8 md:py-8"><div class="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row"><div class="md:sticky md:top-6 md:h-[calc(100vh-3rem)] md:w-64">${validate_component(Sidebar, "Sidebar").$$render(
    $$result,
    {
      open: navOpen || typeof window === "undefined" ? true : navOpen,
      onNavigate: closeNav
    },
    {},
    {}
  )}</div> <div class="w-full md:flex-1">${validate_component(HeaderBar, "HeaderBar").$$render($$result, { title: pageTitle, navOpen, toggleNav }, {}, {})} <main class="rounded-2xl">${slots.default ? slots.default({}) : ``}</main></div></div></div>`;
});
export {
  Layout as default
};
