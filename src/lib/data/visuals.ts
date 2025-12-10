export type VisualTool = {
	title: string;
	description: string;
	link: string;
	tags?: string[];
};

export const visuals: VisualTool[] = [
	{
		title: 'Windhawk',
		description: 'Free tool to tweak and customize Windows UI behaviour and visuals.',
		link: 'https://windhawk.net',
		tags: ['windows', 'tweaks', 'free']
	},
	{
		title: 'Wallpaper Engine',
		description: 'Premium live wallpaper engine with animated and interactive backgrounds.',
		link: 'https://www.wallpaperengine.io',
		tags: ['wallpapers', 'premium']
	},
	{
		title: 'Lively Wallpaper',
		description: 'Open-source live wallpaper app for Windows with performance controls.',
		link: 'https://www.rocksdanister.com/lively',
		tags: ['wallpapers', 'free']
	},
	{
		title: 'Rainmeter',
		description: 'Highly customizable desktop widgets and skins for Windows.',
		link: 'https://www.rainmeter.net',
		tags: ['widgets', 'customization']
	},
	{
		title: 'TranslucentTB',
		description: 'Neat customization for the Windows taskbar with blur and transparency.',
		link: 'https://github.com/TranslucentTB/TranslucentTB',
		tags: ['taskbar', 'free']
	}
];

