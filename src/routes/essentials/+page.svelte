<script lang="ts">
  import { essentialCategories } from "$lib/data/essentials";
  import type { EssentialApp, EssentialCategory } from "$lib/data/essentials";
  import Card from "$lib/components/Card.svelte";
  import SearchBar from "$lib/components/SearchBar.svelte";
  import { searchQuery } from "$lib/stores/search";

  type CategoryWithApps = {
    name: string;
    description: string;
    apps: EssentialApp[];
  };

  let selectedCategory: string | null = null;

  $: {
    const q = $searchQuery.toLowerCase();
    let categoriesToShow = essentialCategories;

    // Filter by selected category
    if (selectedCategory) {
      categoriesToShow = essentialCategories.filter(
        (cat) => cat.name === selectedCategory
      );
    }

    // Filter by search query
    if (q) {
      categoriesToShow = categoriesToShow
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

    filteredCategories = categoriesToShow;
  }

  let filteredCategories: CategoryWithApps[] = essentialCategories;

  function selectCategory(categoryName: string | null) {
    selectedCategory = selectedCategory === categoryName ? null : categoryName;
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

  <!-- Category Tabs -->
  <div class="mb-6 flex flex-wrap gap-2">
    <button
      class="rounded-full px-4 py-2 text-sm font-semibold transition-all {selectedCategory ===
      null
        ? 'bg-purple-primary text-white shadow-glow'
        : 'bg-purple-primary/15 text-purple-primary hover:bg-purple-primary/25'}"
      on:click={() => selectCategory(null)}
    >
      All
    </button>
    {#each essentialCategories as category}
      <button
        class="rounded-full px-4 py-2 text-sm font-semibold transition-all {selectedCategory ===
        category.name
          ? 'bg-purple-primary text-white shadow-glow'
          : 'bg-purple-primary/15 text-purple-primary hover:bg-purple-primary/25'}"
        on:click={() => selectCategory(category.name)}
      >
        {category.name}
      </button>
    {/each}
  </div>

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
