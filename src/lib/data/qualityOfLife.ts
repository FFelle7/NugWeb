export type QualityApp = {
	title: string;
	description: string;
	link: string;
	tags?: string[];
};

export const qualityOfLife: QualityApp[] = [
	{
		title: 'Raycast',
		description: 'A fast command palette for macOS that accelerates everyday tasks.',
		link: 'https://www.raycast.com/',
		tags: ['launcher', 'macOS']
	},
	{
		title: 'Notion',
		description: 'All-in-one workspace for notes, docs, tasks, and wikis.',
		link: 'https://www.notion.so/',
		tags: ['notes', 'tasks']
	},
	{
		title: 'Obsidian',
		description: 'Markdown-based knowledge base with powerful graph and plugins.',
		link: 'https://obsidian.md/',
		tags: ['notes', 'markdown']
	},
	{
		title: 'Cron',
		description: 'Beautiful calendar app with multi-timezone scheduling.',
		link: 'https://cron.com/',
		tags: ['calendar', 'scheduling']
	},
	{
		title: 'Linear',
		description: 'Issue tracking that feels fast; built for product teams.',
		link: 'https://linear.app/',
		tags: ['projects', 'issues']
	},
	{
		title: 'Vencord',
		description: 'Discord client mod that adds tons of quality-of-life improvements.',
		link: 'https://vencord.dev',
		tags: ['discord', 'qol']
	}
];

