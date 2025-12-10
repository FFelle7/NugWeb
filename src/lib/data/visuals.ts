export type VisualTool = {
	title: string;
	description: string;
	link: string;
	icon?: string;
	tags?: string[];
};

export const visuals: VisualTool[] = [
	{
		title: 'Wallpaper Engine',
		description: 'Premium live wallpaper engine with animated and interactive backgrounds. Paid.',
		link: 'https://www.wallpaperengine.io',
		icon: 'https://www.wallpaperengine.io/favicon.ico',
		tags: ['wallpapers', 'premium', 'paid']
	},
	{
		title: 'Lively Wallpaper',
		description: 'Open-source live wallpaper app for Windows with performance controls. Free.',
		link: 'https://www.rocksdanister.com/lively',
		icon: 'https://www.rocksdanister.com/favicon.ico',
		tags: ['wallpapers', 'free']
	},
	{
		title: 'Rainmeter',
		description: 'Highly customizable desktop widgets and skins for Windows. Free.',
		link: 'https://www.rainmeter.net',
		icon: 'https://www.rainmeter.net/favicon.ico',
		tags: ['widgets', 'customization', 'free']
	},
	{
		title: 'TranslucentTB',
		description: 'Neat customization for the Windows taskbar with blur and transparency. Free.',
		link: 'https://github.com/TranslucentTB/TranslucentTB',
		icon: 'https://github.com/favicon.ico',
		tags: ['taskbar', 'customization', 'free']
	},
	{
		title: 'Windhawk',
		description: 'Free tool to tweak and customize Windows UI. Use with caution - shell mods can affect system stability. Free.',
		link: 'https://windhawk.net',
		icon: 'https://windhawk.net/favicon.ico',
		tags: ['windows', 'tweaks', 'ui', 'free']
	}
];
