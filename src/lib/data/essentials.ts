export type EssentialApp = {
	title: string;
	description: string;
	link: string;
	tags?: string[];
};

export type EssentialCategory = {
	name: string;
	description: string;
	apps: EssentialApp[];
};

export const essentialCategories: EssentialCategory[] = [
	{
		name: 'Programming setup',
		description: 'Core tools to start coding quickly.',
		apps: [
			{
				title: 'Node.js',
				description: 'Runtime for JavaScript and TypeScript tooling and backends.',
				link: 'https://nodejs.org',
				tags: ['runtime', 'javascript']
			},
			{
				title: 'Python',
				description: 'Popular general-purpose language used for scripts, data and backends.',
				link: 'https://www.python.org',
				tags: ['language']
			},
			{
				title: 'Git',
				description: 'Version control for code and configuration.',
				link: 'https://git-scm.com',
				tags: ['vcs']
			},
			{
				title: 'Cursor',
				description: 'AI-first code editor built on VS Code with inline assistance.',
				link: 'https://cursor.com',
				tags: ['editor', 'ai']
			},
			{
				title: 'Visual Studio Code',
				description: 'Extensible code editor with a huge ecosystem of extensions.',
				link: 'https://code.visualstudio.com',
				tags: ['editor']
			}
		]
	},
	{
		name: 'System utilities',
		description: 'Must-have tools that keep your system healthy and tidy.',
		apps: [
			{
				title: '1Password',
				description: 'Secure password manager with strong autofill and sharing.',
				link: 'https://1password.com',
				tags: ['security', 'passwords']
			},
			{
				title: 'Dropbox',
				description: 'Reliable cloud storage and file sync.',
				link: 'https://dropbox.com',
				tags: ['storage', 'sync']
			},
			{
				title: 'Rectangle',
				description: 'Window management for macOS using simple keyboard shortcuts.',
				link: 'https://rectangleapp.com',
				tags: ['windows', 'productivity']
			}
		]
	},
	{
		name: 'Browsers & communication',
		description: 'Everything you need for browsing and staying in sync with people.',
		apps: [
			{
				title: 'Google Chrome',
				description: 'Fast browser with great dev tools.',
				link: 'https://www.google.com/chrome/',
				tags: ['browser', 'web']
			},
			{
				title: 'Firefox',
				description: 'Privacy-focused browser with powerful extension support.',
				link: 'https://www.mozilla.org/firefox',
				tags: ['browser']
			},
			{
				title: 'Slack',
				description: 'Team messaging with channels and integrations.',
				link: 'https://slack.com',
				tags: ['communication', 'team']
			},
			{
				title: 'Discord',
				description: 'Communities, calls, and screen sharing for projects and friends.',
				link: 'https://discord.com',
				tags: ['chat', 'voice']
			}
		]
	},
	{
		name: 'Quality of life',
		description: 'Small tools that make everyday usage nicer.',
		apps: [
			{
				title: 'Vencord',
				description: 'Customizable Discord client mod that adds quality-of-life features.',
				link: 'https://vencord.dev',
				tags: ['discord', 'qol']
			},
			{
				title: 'Raycast',
				description: 'Command palette launcher speeding up actions on macOS.',
				link: 'https://www.raycast.com',
				tags: ['launcher']
			},
			{
				title: 'Notion',
				description: 'Workspace for notes, docs, tasks, and wikis in one.',
				link: 'https://www.notion.so',
				tags: ['notes', 'tasks']
			}
		]
	}
];

