export type AiTool = {
	title: string;
	description: string;
	link: string;
	tags?: string[];
};

export const aiTools: AiTool[] = [
	{
		title: 'ChatGPT',
		description: 'Versatile conversational assistant and code helper.',
		link: 'https://chat.openai.com',
		tags: ['assistant', 'general']
	},
	{
		title: 'Claude',
		description: 'Helpful writing and analysis copilot with strong reasoning.',
		link: 'https://claude.ai',
		tags: ['writing', 'analysis']
	},
	{
		title: 'Cursor',
		description: 'AI-first code editor built on VS Code with inline assistance.',
		link: 'https://cursor.com',
		tags: ['coding', 'editor']
	},
	{
		title: 'Suno',
		description: 'AI music studio for generating full tracks, vocals and stems from text prompts.',
		link: 'https://suno.com',
		tags: ['music', 'audio']
	},
	{
		title: 'Perplexity',
		description: 'Answer engine with live sources and citations.',
		link: 'https://www.perplexity.ai',
		tags: ['search', 'research']
	},
	{
		title: 'Midjourney',
		description: 'High-quality text-to-image generation with stylized outputs.',
		link: 'https://www.midjourney.com',
		tags: ['images', 'creative']
	},
	{
		title: 'GitHub Copilot',
		description: 'Code generation assistant integrated directly into popular IDEs.',
		link: 'https://github.com/features/copilot',
		tags: ['coding', 'pair-programmer']
	},
	{
		title: 'Gemini',
		description: 'Google’s multimodal AI for reasoning, coding, and search.',
		link: 'https://gemini.google.com',
		tags: ['assistant', 'multimodal']
	},
	{
		title: 'Stable Diffusion',
		description: 'Open ecosystem for local and cloud-based image generation.',
		link: 'https://stability.ai',
		tags: ['images', 'open-source']
	}
];

