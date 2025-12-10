<script lang="ts">
	import { qualityOfLife } from '$lib/data/qualityOfLife';
	import Card from '$lib/components/Card.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import { searchQuery } from '$lib/stores/search';

	let filteredApps = qualityOfLife;

	$: {
		const query = $searchQuery.toLowerCase();
		if (query) {
			filteredApps = qualityOfLife.filter(
				(app) =>
					app.title.toLowerCase().includes(query) ||
					app.description.toLowerCase().includes(query)
			);
		} else {
			filteredApps = qualityOfLife;
		}
	}
</script>

<svelte:head>
	<title>Quality of Life Apps - NugWeb</title>
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-6 text-ink">
	<div class="mb-8">
		<p class="text-sm uppercase tracking-[0.25em] text-purple-secondary">Collection</p>
		<h1 class="text-4xl font-extrabold mb-3">Quality of Life Apps</h1>
		<p class="text-lg text-ink/70">
			Tools that improve your workflow and productivity.
		</p>
	</div>

	<SearchBar />

	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each filteredApps as app (app.title)}
			<Card {app} />
		{/each}
	</div>

	{#if filteredApps.length === 0}
		<div class="text-center py-12 text-ink/60">
			<p>No apps found matching your search.</p>
		</div>
	{/if}
</div>
