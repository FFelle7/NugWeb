<script lang="ts">
	import { projects } from '$lib/data/projects';
	import Card from '$lib/components/Card.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import { searchQuery } from '$lib/stores/search';

	let filtered = projects;

	$: {
		const q = $searchQuery.toLowerCase();
		filtered = q
			? projects.filter(
					(app) =>
						app.title.toLowerCase().includes(q) ||
						app.description.toLowerCase().includes(q)
				)
			: projects;
	}
</script>

<svelte:head>
	<title>Felles Projects - NugWeb</title>
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-6 text-ink">
	<div class="mb-8">
		<p class="text-sm uppercase tracking-[0.25em] text-purple-secondary">Collection</p>
		<h1 class="text-4xl font-extrabold mb-3">Felles Projects</h1>
		<p class="text-lg text-ink/70">Shared project picks for collaboration and delivery.</p>
	</div>

	<SearchBar />

	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each filtered as app (app.title)}
			<Card {app} />
		{/each}
	</div>

	{#if filtered.length === 0}
		<div class="text-center py-12 text-ink/60">
			<p>No apps found matching your search.</p>
		</div>
	{/if}
</div>

