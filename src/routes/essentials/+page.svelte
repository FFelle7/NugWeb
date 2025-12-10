<script lang="ts">
  import { essentialCategories } from "$lib/data/essentials";
  import type { EssentialApp } from "$lib/data/essentials";
  import Card from "$lib/components/Card.svelte";
  import SearchBar from "$lib/components/SearchBar.svelte";
  import { searchQuery } from "$lib/stores/search";

  type CategoryWithApps = {
    name: string;
    description: string;
    apps: EssentialApp[];
  };

  let filteredCategories: CategoryWithApps[] = essentialCategories;

  $: {
    const q = $searchQuery.toLowerCase();
    if (!q) {
      filteredCategories = essentialCategories;
    } else {
      filteredCategories = essentialCategories
        .map((cat) => ({
          ...cat,
          apps: cat.apps.filter(
            (app) =>
              app.title.toLowerCase().includes(q) ||
              app.description.toLowerCase().includes(q) ||
              app.tags?.some((t) => t.toLowerCase().includes(q))
          ),
        }))
        .filter((cat) => cat.apps.length > 0);
    }
  }
</script>

<svelte:head>
  <title>Essential Apps - NugWeb</title>
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-6 text-ink">
  <div class="mb-8">
    <p class="text-sm uppercase tracking-[0.25em] text-purple-secondary">
      Collection
    </p>
    <h1 class="mb-3 text-4xl font-extrabold">Essential Apps</h1>
    <p class="text-lg text-ink/70">
      Grouped starter kits: programming setup, system utilities, browsers,
      communication and more.
    </p>
  </div>

  <SearchBar />

  <div class="space-y-8">
    {#each filteredCategories as category}
      <section>
        <header class="mb-4 flex items-baseline justify-between gap-4">
          <div>
            <h2 class="text-xl font-extrabold text-ink">{category.name}</h2>
            <p class="text-sm text-ink/65">{category.description}</p>
          </div>
        </header>
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {#each category.apps as app (app.title)}
            <Card {app} />
          {/each}
        </div>
      </section>
    {/each}
  </div>

  {#if filteredCategories.length === 0}
    <div class="py-12 text-center text-ink/60">
      <p>No apps found matching your search.</p>
    </div>
  {/if}
</div>
