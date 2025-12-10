<script lang="ts">
  import {
    optimizationSteps,
    optimizationCategories,
  } from "$lib/data/optimization";
  import { onMount } from "svelte";

  let checkedSteps: Set<string> = new Set();
  let selectedCategory: string | null = null;

  onMount(() => {
    // Load saved checkboxes from localStorage
    const saved = localStorage.getItem("optimization-steps");
    if (saved) {
      checkedSteps = new Set(JSON.parse(saved));
    }
  });

  function toggleStep(id: string) {
    if (checkedSteps.has(id)) {
      checkedSteps.delete(id);
    } else {
      checkedSteps.add(id);
    }
    checkedSteps = checkedSteps; // Trigger reactivity
    localStorage.setItem(
      "optimization-steps",
      JSON.stringify(Array.from(checkedSteps))
    );
  }

  function clearAll() {
    checkedSteps.clear();
    checkedSteps = checkedSteps;
    localStorage.setItem("optimization-steps", JSON.stringify([]));
  }

  $: filteredSteps = selectedCategory
    ? optimizationSteps.filter((step) => step.category === selectedCategory)
    : optimizationSteps;

  $: completedCount = checkedSteps.size;
  $: totalCount = optimizationSteps.length;
</script>

<svelte:head>
  <title>Optimization - NugWeb</title>
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-6 text-ink">
  <div class="mb-8">
    <p class="text-sm uppercase tracking-[0.25em] text-purple-secondary">
      Checklist
    </p>
    <h1 class="text-4xl font-extrabold mb-3">Optimization & Tweaks</h1>
    <p class="text-lg text-ink/70">
      Actionable steps to optimize your system for better performance and FPS.
    </p>
    <div class="mt-4 flex items-center gap-4">
      <div class="text-sm text-ink/70">
        Progress: <span class="font-semibold text-purple-primary"
          >{completedCount}/{totalCount}</span
        > completed
      </div>
      {#if completedCount > 0}
        <button
          on:click={clearAll}
          class="text-sm text-purple-primary hover:text-purple-secondary transition-colors"
        >
          Clear all
        </button>
      {/if}
    </div>
  </div>

  <!-- Category Filter -->
  <div class="mb-6 flex flex-wrap gap-2">
    <button
      class="rounded-full px-4 py-2 text-sm font-semibold transition-all {selectedCategory ===
      null
        ? 'bg-purple-primary text-white shadow-glow'
        : 'bg-purple-primary/15 text-purple-primary hover:bg-purple-primary/25'}"
      on:click={() => (selectedCategory = null)}
    >
      All
    </button>
    {#each optimizationCategories as category}
      <button
        class="rounded-full px-4 py-2 text-sm font-semibold transition-all {selectedCategory ===
        category
          ? 'bg-purple-primary text-white shadow-glow'
          : 'bg-purple-primary/15 text-purple-primary hover:bg-purple-primary/25'}"
        on:click={() => (selectedCategory = category)}
      >
        {category}
      </button>
    {/each}
  </div>

  <!-- Checklist -->
  <div class="space-y-3">
    {#each filteredSteps as step (step.id)}
      <label
        class="surface card-hover flex items-start gap-4 rounded-xl border border-black/5 p-5 shadow-soft hover:shadow-glow cursor-pointer transition-all"
      >
        <input
          type="checkbox"
          checked={checkedSteps.has(step.id)}
          on:change={() => toggleStep(step.id)}
          class="mt-1 h-5 w-5 rounded border-purple-primary/30 bg-purple-primary/10 text-purple-primary focus:ring-2 focus:ring-purple-primary focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer"
        />
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between gap-4">
            <div class="flex-1">
              <h3 class="text-lg font-extrabold text-ink mb-1">{step.title}</h3>
              <p class="text-sm text-ink/70">{step.description}</p>
            </div>
            <span
              class="rounded-full bg-purple-primary/15 px-3 py-1 text-xs font-semibold text-purple-primary whitespace-nowrap"
            >
              {step.category}
            </span>
          </div>
        </div>
      </label>
    {/each}
  </div>

  {#if filteredSteps.length === 0}
    <div class="py-12 text-center text-ink/60">
      <p>No steps found in this category.</p>
    </div>
  {/if}
</div>
