import { c as create_ssr_component, b as add_attribute, e as escape, d as each } from "./ssr.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { app } = $$props;
  if ($$props.app === void 0 && $$bindings.app && app !== void 0) $$bindings.app(app);
  return `<a class="surface card-hover block rounded-xl border border-black/5 p-5 shadow-soft hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-primary"${add_attribute("href", app.link, 0)} target="_blank" rel="noreferrer"><div class="flex items-start justify-between gap-3"><div><h2 class="text-xl font-extrabold text-ink">${escape(app.title)}</h2> <p class="mt-2 text-sm text-ink/70">${escape(app.description)}</p></div> <span aria-hidden="true" class="text-2xl text-purple-primary" data-svelte-h="svelte-1okmz84">↗</span></div> ${app.tags?.length ? `<div class="mt-4 flex flex-wrap gap-2">${each(app.tags, (tag) => {
    return `<span class="rounded-full bg-purple-primary/15 px-3 py-1 text-xs font-semibold text-purple-primary">${escape(tag)} </span>`;
  })}</div>` : ``}</a>`;
});
export {
  Card as C
};
