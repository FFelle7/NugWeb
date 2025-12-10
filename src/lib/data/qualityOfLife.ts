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
		description: 'Discord client mod that adds tons of quality-of-life improvements.',
		link: 'https://vencord.dev',
		icon: 'https://vencord.dev/favicon.ico',
		tags: ['discord', 'qol']
	},
	{
		title: 'Raycast',
		description: 'A fast command palette for macOS that accelerates everyday tasks.',
		link: 'https://www.raycast.com/',
		icon: 'https://www.raycast.com/favicon.ico',
		tags: ['launcher', 'macOS']
	},
	{
		title: 'Notion',
		description: 'All-in-one workspace for notes, docs, tasks, and wikis.',
		link: 'https://www.notion.so/',
		icon: 'https://www.notion.so/images/favicon.ico',
		tags: ['notes', 'tasks']
	},
	{
		title: 'Obsidian',
		description: 'Markdown-based knowledge base with powerful graph and plugins.',
		link: 'https://obsidian.md/',
		icon: 'https://obsidian.md/favicon.ico',
		tags: ['notes', 'markdown']
	},
	{
		title: 'Cron',
		description: 'Beautiful calendar app with multi-timezone scheduling.',
		link: 'https://cron.com/',
		icon: 'https://cron.com/favicon.ico',
		tags: ['calendar', 'scheduling']
	},
	{
		title: 'Linear',
		description: 'Issue tracking that feels fast; built for product teams.',
		link: 'https://linear.app/',
		icon: 'https://linear.app/favicon.ico',
		tags: ['projects', 'issues']
	}
];

