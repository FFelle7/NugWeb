<script lang="ts">
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import { derived } from "svelte/store";
  import {
    Sparkles,
    Boxes,
    Zap,
    FolderKanban,
    HeartHandshake,
    Palette,
  } from "lucide-svelte";

  const navItems = [
    { title: "AI Tools", href: `${base}/ai-tools`, icon: Sparkles },
    { title: "Essential Apps", href: `${base}/essentials`, icon: Boxes },
    { title: "Optimization", href: `${base}/optimization`, icon: Zap },
    {
      title: "Quality of Life",
      href: `${base}/quality-of-life`,
      icon: HeartHandshake,
    },
    { title: "Visuals", href: `${base}/visuals`, icon: Palette },
    { title: "Felles Projects", href: `${base}/projects`, icon: FolderKanban },
  ];

  export let open = true;
  export let onNavigate: () => void = () => {};

  const currentPath = derived(page, ($page) => $page.url.pathname);

  const isActive = (path: string, href: string) =>
    path === href || (href !== "/" && path.startsWith(href));
</script>

<aside
  class={`surface h-full w-full rounded-2xl border border-black/5 p-4 shadow-soft transition-all duration-200 ${
    open
      ? "translate-x-0 opacity-100"
      : "-translate-x-2 opacity-0 md:opacity-100"
  }`}
  aria-label="Sidebar"
>
  <div class="mb-6 px-2">
    <div class="text-xs uppercase tracking-[0.3em] text-purple-secondary">
      Collections
    </div>
  </div>

  <nav class="space-y-2">
    {#each navItems as item}
      {#if $currentPath !== undefined}
        {@const active = isActive($currentPath, item.href)}
        <a
          href={item.href}
          class={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-primary ${
            active
              ? "bg-purple-primary/10 text-ink border border-purple-primary/20 shadow-glow"
              : "text-ink/80 hover:bg-white hover:shadow-soft"
          }`}
          on:click={onNavigate}
        >
          <svelte:component
            this={item.icon}
            class="h-5 w-5 text-purple-primary"
          />
          <span class="flex-1 text-left">{item.title}</span>
          {#if active}
            <span
              aria-hidden="true"
              class="h-2 w-2 rounded-full bg-purple-primary shadow-glow"
            />
          {/if}
        </a>
      {/if}
    {/each}
  </nav>
</aside>
