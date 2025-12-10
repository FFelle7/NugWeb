<script lang="ts">
	import { aiTools } from '$lib/data/aiTools';
	import Card from '$lib/components/Card.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import { searchQuery } from '$lib/stores/search';

	let filtered = aiTools;

	$: {
		const q = $searchQuery.toLowerCase();
		filtered = q
			? aiTools.filter(
					(tool) =>
						tool.title.toLowerCase().includes(q) ||
						tool.description.toLowerCase().includes(q)
				)
			: aiTools;
	}
</script>

<svelte:head>
	<title>AI Tools - NugWeb</title>
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-6 text-ink">
	<div class="mb-8">
		<p class="text-sm uppercase tracking-[0.25em] text-purple-secondary">Collection</p>
		<h1 class="text-4xl font-extrabold mb-3">AI Tools</h1>
		<p class="text-lg text-ink/70">Assistants, generators, and copilots to speed up daily tasks.</p>
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

