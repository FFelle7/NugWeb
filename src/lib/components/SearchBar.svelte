<script lang="ts">
	import { onMount } from 'svelte';
	import { Search } from 'lucide-svelte';
	import { searchQuery } from '$lib/stores/search';

	let value = '';

	$: searchQuery.set(value.trim());

	onMount(() => {
		value = '';
		searchQuery.set('');
	});
</script>

<label class="mb-6 block">
	<span class="sr-only">Search apps</span>
	<div class="surface flex items-center gap-3 rounded-xl border border-purple-primary/10 px-4 py-3 shadow-soft focus-within:border-purple-primary/50 focus-within:shadow-glow transition">
		<Search class="h-4 w-4 text-purple-primary" />
		<input
			class="w-full bg-transparent text-sm text-ink placeholder:text-ink/50 outline-none"
			bind:value
			type="search"
			placeholder="Search tools..."
		/>
	</div>
</label>

