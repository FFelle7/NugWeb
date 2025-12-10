export type AiTool = {
	title: string;
	description: string;
	link: string;
	icon?: string;
	tags?: string[];
};

export const aiTools: AiTool[] = [
	{
		title: 'ChatGPT',
		description: 'General conversational assistant, excellent for prompts & coding. Free tier / ChatGPT Plus (paid).',
		link: 'https://chat.openai.com',
		icon: 'https://chat.openai.com/favicon.ico',
		tags: ['chat', 'assistant', 'general', 'free', 'paid']
	},
	{
		title: 'Claude',
		description: 'Good alternative for long-form reasoning and different safety tune. Free tier / Paid plans.',
		link: 'https://claude.ai',
		icon: 'https://claude.ai/favicon.ico',
		tags: ['chat', 'assistant', 'reasoning', 'free', 'paid']
	},
	{
		title: 'Gemini',
		description: 'Strong multimodal model (good for images/code depending on plan). Free / Paid.',
		link: 'https://gemini.google.com',
		icon: 'https://www.google.com/favicon.ico',
		tags: ['chat', 'multimodal', 'assistant', 'free', 'paid']
	},
	{
		title: 'Perplexity',
		description: 'Browsing + citations - great for quick web-based answers. Free / Paid.',
		link: 'https://www.perplexity.ai',
		icon: 'https://www.perplexity.ai/favicon.ico',
		tags: ['search', 'research', 'browsing', 'free', 'paid']
	},
	{
		title: 'Cursor',
		description: 'Code-focused IDE-assistant; good for dev workflows. Free / Paid.',
		link: 'https://cursor.com',
		icon: 'https://cursor.com/favicon.ico',
		tags: ['code', 'ide', 'assistant', 'free', 'paid']
	},
	{
		title: 'Suno',
		description: 'TTS/music generation. Free / Paid.',
		link: 'https://suno.com',
		icon: 'https://suno.com/favicon.ico',
		tags: ['tts', 'voice', 'music', 'audio', 'free', 'paid']
	},
	{
		title: 'Midjourney',
		description: 'High-quality text-to-image generation with stylized outputs. Paid.',
		link: 'https://www.midjourney.com',
		icon: 'https://www.midjourney.com/favicon.ico',
		tags: ['image', 'generation', 'paid']
	},
	{
		title: 'Stable Diffusion',
		description: 'Open ecosystem for local and cloud-based image generation. Free (self-hosted) / Paid.',
		link: 'https://stability.ai',
		icon: 'https://stability.ai/favicon.ico',
		tags: ['image', 'generation', 'open-source', 'free', 'paid']
	},
	{
		title: 'GitHub Copilot',
		description: 'In-editor code completion; invaluable for dev productivity. Paid after trial.',
		link: 'https://github.com/features/copilot',
		icon: 'https://github.com/favicon.ico',
		tags: ['code', 'completion', 'paid']
	},
	{
		title: 'Google Antigravity',
		description: 'Agent-first IDE (public preview). Powerful but requires care - agent automation can issue system-level commands. Power user tool.',
		link: 'https://antigravity.google/',
		icon: 'https://www.google.com/favicon.ico',
		tags: ['agent', 'ide', 'code', 'preview', 'power-user']
	}
];
