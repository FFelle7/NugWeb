<script lang="ts">
	import { optimizationTools } from '$lib/data/optimization';
	import Card from '$lib/components/Card.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import { searchQuery } from '$lib/stores/search';

	let filtered = optimizationTools;

	$: {
		const q = $searchQuery.toLowerCase();
		filtered = q
			? optimizationTools.filter(
					(tool) =>
						tool.title.toLowerCase().includes(q) ||
						tool.description.toLowerCase().includes(q)
				)
			: optimizationTools;
	}
</script>

<svelte:head>
	<title>Optimization - NugWeb</title>
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-6 text-ink">
	<div class="mb-8">
		<p class="text-sm uppercase tracking-[0.25em] text-purple-secondary">Collection</p>
		<h1 class="text-4xl font-extrabold mb-3">Optimization</h1>
		<p class="text-lg text-ink/70">
			Performance and workflow tuning tools to shave off friction.
		</p>
	</div>

	<SearchBar />

	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each filtered as app (app.title)}
			<Card app={app} />
		{/each}
	</div>

	{#if filtered.length === 0}
		<div class="text-center py-12 text-ink/60">
			<p>No tools found matching your search.</p>
		</div>
	{/if}
</div>

