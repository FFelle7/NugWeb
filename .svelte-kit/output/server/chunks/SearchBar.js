import { c as create_ssr_component, v as validate_component, b as add_attribute } from "./ssr.js";
import { w as writable } from "./index.js";
import { I as Icon } from "./Icon.js";
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "11", "cy": "11", "r": "8" }],
    ["path", { "d": "m21 21-4.3-4.3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "search" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const searchQuery = writable("");
const SearchBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value = "";
  {
    searchQuery.set(value.trim());
  }
  return `<label class="mb-6 block"><span class="sr-only" data-svelte-h="svelte-i8o1un">Search apps</span> <div class="surface flex items-center gap-3 rounded-xl border border-purple-primary/10 px-4 py-3 shadow-soft focus-within:border-purple-primary/50 focus-within:shadow-glow transition">${validate_component(Search, "Search").$$render($$result, { class: "h-4 w-4 text-purple-primary" }, {}, {})} <input class="w-full bg-transparent text-sm text-ink placeholder:text-ink/50 outline-none" type="search" placeholder="Search tools..."${add_attribute("value", value, 0)}></div></label>`;
});
export {
  SearchBar as S,
  searchQuery as s
};
