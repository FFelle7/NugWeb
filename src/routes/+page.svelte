<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import { base } from "$app/paths";

  const collections = [
    {
      title: "AI Tools",
      description:
        "Assistants, generators, and copilots to speed up daily tasks.",
      href: `${base}/ai-tools`,
    },
    {
      title: "Essential Apps",
      description: "Core utilities you install first on any fresh machine.",
      href: `${base}/essentials`,
    },
    {
      title: "Optimization",
      description:
        "Performance and workflow tuning tools to shave off friction.",
      href: `${base}/optimization`,
    },
    {
      title: "Felles Projects",
      description: "Shared project picks for collaboration and delivery.",
      href: `${base}/projects`,
    },
    {
      title: "Quality of Life",
      description: "Handy helpers that make everyday work smoother.",
      href: `${base}/quality-of-life`,
    },
    {
      title: "Visuals",
      description: "Design, illustration, and visual polish resources.",
      href: `${base}/visuals`,
    },
  ];
</script>

<svelte:head>
  <title>NugWeb</title>
  <meta
    name="description"
    content="Curated tools for productivity and quality of life"
  />
</svelte:head>

<main class="max-w-6xl mx-auto px-4 pb-16 pt-4 text-ink">
  <div class="mb-10 space-y-3">
    <p class="text-sm uppercase tracking-[0.25em] text-purple-secondary">
      Curated stacks
    </p>
    <h1 class="text-4xl md:text-5xl font-extrabold">NugWeb</h1>
    <p class="text-lg text-ink/70 max-w-3xl">
      A lightweight SvelteKit site for quickly jumping into trusted tools.
      Browse the categories below to find the kit you need.
    </p>
  </div>

  <div class="grid gap-4 md:grid-cols-2">
    {#each collections as collection}
      <a class="block" href={collection.href}>
        <Card
          app={{
            title: collection.title,
            description: collection.description,
            link: collection.href,
            tags: ["Collection"],
          }}
        />
      </a>
    {/each}
  </div>
</main>
