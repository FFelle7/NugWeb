<script lang="ts">
	import '../app.css';
	import HeaderBar from '$lib/components/HeaderBar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { page } from '$app/stores';

	let navOpen = false;

	$: pageTitle = (() => {
		const path = $page.url.pathname;
		if (path.startsWith('/ai-tools')) return 'AI Tools';
		if (path.startsWith('/essentials')) return 'Essential Apps';
		if (path.startsWith('/optimization')) return 'Optimization';
		if (path.startsWith('/projects')) return 'Felles Projects';
		if (path.startsWith('/visuals')) return 'Visuals';
		if (path.startsWith('/quality-of-life')) return 'Quality of Life';
		return 'Home';
	})();

	const toggleNav = () => {
		navOpen = !navOpen;
	};
	const closeNav = () => {
		navOpen = false;
	};
</script>

<div class="min-h-screen px-4 py-6 md:px-8 md:py-8">
	<div class="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row">
		<div class="md:sticky md:top-6 md:h-[calc(100vh-3rem)] md:w-64">
			<Sidebar open={navOpen || typeof window === 'undefined' ? true : navOpen} onNavigate={closeNav} />
		</div>

		<div class="w-full md:flex-1">
			<HeaderBar title={pageTitle} navOpen={navOpen} toggleNav={toggleNav} />
			<main class="rounded-2xl">
				<slot />
			</main>
		</div>
	</div>
</div>

