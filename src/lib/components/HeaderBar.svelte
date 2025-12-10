<script lang="ts">
	import { onMount } from 'svelte';
	import { Menu, X, Moon, Sun } from 'lucide-svelte';

	export let title = 'NugWeb';
	export let navOpen = false;
	export let toggleNav: () => void = () => {};

	let prefersDark = false;

	onMount(() => {
		prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
	});
</script>

<header class="surface mb-6 flex items-center justify-between rounded-2xl px-5 py-3 shadow-soft backdrop-blur">
	<div class="flex items-center gap-3">
		<button
			class="md:hidden rounded-lg border border-black/5 bg-white/80 p-2 shadow-soft transition hover:shadow-glow"
			on:click={toggleNav}
			aria-label="Toggle navigation"
		>
			{#if navOpen}
				<X class="h-5 w-5 text-purple-primary" />
			{:else}
				<Menu class="h-5 w-5 text-purple-primary" />
			{/if}
		</button>
		<div>
			<p class="text-xs uppercase tracking-[0.3em] text-purple-secondary">NugWeb</p>
			<h1 class="text-xl font-extrabold text-ink">{title}</h1>
		</div>
	</div>

	<div class="flex items-center gap-3">
		<button
			class="rounded-lg border border-black/5 bg-white/80 px-3 py-2 text-sm font-medium text-ink shadow-soft transition hover:shadow-glow"
			title="Theme toggle (visual only)"
		>
			{#if prefersDark}
				<Sun class="mr-2 inline h-4 w-4 text-purple-primary" />
				Light
			{:else}
				<Moon class="mr-2 inline h-4 w-4 text-purple-primary" />
				Glow
			{/if}
		</button>
	</div>
</header>


