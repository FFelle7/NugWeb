export type QualityApp = {
	title: string;
	description: string;
	link: string;
	icon?: string;
	tags?: string[];
};

export const qualityOfLife: QualityApp[] = [
	{
		title: 'Vencord',
		description: 'Discord client mod that adds tons of quality-of-life improvements. Note: mod/ToS risks - use at your own discretion.',
		link: 'https://vencord.dev',
		icon: 'https://vencord.dev/favicon.ico',
		tags: ['discord', 'qol', 'mod']
	},
	{
		title: 'Notion',
		description: 'All-in-one workspace for notes, docs, tasks, and wikis. Free / Paid.',
		link: 'https://www.notion.so/',
		icon: 'https://www.notion.so/images/favicon.ico',
		tags: ['notes', 'tasks', 'productivity', 'free', 'paid']
	},
	{
		title: 'Obsidian',
		description: 'Markdown-based knowledge base with powerful graph and plugins. Free.',
		link: 'https://obsidian.md/',
		icon: 'https://obsidian.md/favicon.ico',
		tags: ['notes', 'markdown', 'productivity', 'free']
	},
	{
		title: 'PowerToys',
		description: 'Microsoft utilities for power users: FancyZones, PowerRename, and more. Free.',
		link: 'https://github.com/microsoft/PowerToys',
		icon: 'https://github.com/favicon.ico',
		tags: ['productivity', 'utilities', 'free']
	},
	{
		title: 'Everything',
		description: 'Lightning-fast file search tool. Essential for Windows. Free.',
		link: 'https://www.voidtools.com',
		icon: 'https://www.voidtools.com/favicon.ico',
		tags: ['file-search', 'productivity', 'free']
	},
	{
		title: 'Raycast',
		description: 'A fast command palette for macOS that accelerates everyday tasks. Free / Paid.',
		link: 'https://www.raycast.com/',
		icon: 'https://www.raycast.com/favicon.ico',
		tags: ['launcher', 'macOS', 'productivity', 'free', 'paid']
	},
	{
		title: 'Cron',
		description: 'Beautiful calendar app with multi-timezone scheduling. Free / Paid.',
		link: 'https://cron.com/',
		icon: 'https://cron.com/favicon.ico',
		tags: ['calendar', 'scheduling', 'productivity', 'free', 'paid']
	},
	{
		title: 'Linear',
		description: 'Issue tracking that feels fast; built for product teams. Free / Paid.',
		link: 'https://linear.app/',
		icon: 'https://linear.app/favicon.ico',
		tags: ['projects', 'issues', 'productivity', 'free', 'paid']
	}
];
