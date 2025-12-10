export type OptimizationTool = {
	title: string;
	description: string;
	link: string;
	tags?: string[];
};

export const optimizationTools: OptimizationTool[] = [
	{
		title: 'CleanMyMac X',
		description: 'Storage cleanup, malware removal, and performance tuning for macOS.',
		link: 'https://macpaw.com/cleanmymac',
		tags: ['cleanup', 'macOS']
	},
	{
		title: 'Sensei',
		description: 'Mac performance dashboard with GPU/CPU stats and trim tools.',
		link: 'https://sensei.app',
		tags: ['performance', 'macOS']
	},
	{
		title: 'Rectangle',
		description: 'Window management with keyboard-driven tiling.',
		link: 'https://rectangleapp.com',
		tags: ['productivity', 'windows']
	},
	{
		title: 'Alfred',
		description: 'Launcher and automation utility with workflows.',
		link: 'https://www.alfredapp.com',
		tags: ['automation', 'launcher']
	},
	{
		title: 'BetterTouchTool',
		description: 'Custom gestures and shortcuts for trackpads, mice, and keyboards.',
		link: 'https://folivora.ai',
		tags: ['shortcuts', 'macOS']
	}
];


