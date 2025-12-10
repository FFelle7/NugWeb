export type EssentialApp = {
	title: string;
	description: string;
	link: string;
	icon?: string;
	tags?: string[];
};

export type EssentialCategory = {
	name: string;
	description: string;
	apps: EssentialApp[];
};

export const essentialCategories: EssentialCategory[] = [
	{
		name: 'Programming',
		description: 'Everything you need for coding and development.',
		apps: [
			{
				title: 'Node.js',
				description: 'Runtime for JavaScript and TypeScript tooling and backends.',
				link: 'https://nodejs.org',
				icon: 'https://nodejs.org/static/images/favicons/favicon-32x32.png',
				tags: ['runtime', 'javascript']
			},
			{
				title: 'Python',
				description: 'Popular general-purpose language used for scripts, data and backends.',
				link: 'https://www.python.org',
				icon: 'https://www.python.org/static/favicon.ico',
				tags: ['language']
			},
			{
				title: 'Git',
				description: 'Version control for code and configuration.',
				link: 'https://git-scm.com',
				icon: 'https://git-scm.com/favicon.ico',
				tags: ['vcs']
			},
			{
				title: 'Cursor',
				description: 'AI-first code editor built on VS Code with inline assistance.',
				link: 'https://cursor.com',
				icon: 'https://cursor.com/favicon.ico',
				tags: ['editor', 'ai']
			},
			{
				title: 'Visual Studio Code',
				description: 'Extensible code editor with a huge ecosystem of extensions.',
				link: 'https://code.visualstudio.com',
				icon: 'https://code.visualstudio.com/favicon.ico',
				tags: ['editor']
			},
			{
				title: 'IntelliJ IDEA',
				description: 'Powerful IDE for Java, Kotlin, and Minecraft modding.',
				link: 'https://www.jetbrains.com/idea/',
				icon: 'https://www.jetbrains.com/favicon-32x32.png',
				tags: ['ide', 'minecraft', 'modding']
			},
			{
				title: 'Antigravity',
				description: 'Python easter egg that makes things float. Import antigravity in Python!',
				link: 'https://docs.python.org/3/library/antigravity.html',
				icon: 'https://www.python.org/static/favicon.ico',
				tags: ['python', 'easter-egg']
			}
		]
	},
	{
		name: 'Must Have Apps',
		description: 'Essential applications everyone should have installed.',
		apps: [
			{
				title: 'Google Chrome',
				description: 'Fast browser with great dev tools and extensions.',
				link: 'https://www.google.com/chrome/',
				icon: 'https://www.google.com/favicon.ico',
				tags: ['browser', 'web']
			},
			{
				title: 'Discord',
				description: 'Communities, calls, and screen sharing for projects and friends.',
				link: 'https://discord.com',
				icon: 'https://discord.com/favicon.ico',
				tags: ['chat', 'voice', 'communication']
			},
			{
				title: 'Steam',
				description: 'The ultimate gaming platform with thousands of games.',
				link: 'https://store.steampowered.com',
				icon: 'https://store.steampowered.com/favicon.ico',
				tags: ['gaming', 'store']
			},
			{
				title: 'Epic Games',
				description: 'Epic Games Store with free games every week.',
				link: 'https://www.epicgames.com/store',
				icon: 'https://www.epicgames.com/favicon.ico',
				tags: ['gaming', 'store']
			},
			{
				title: 'WinRAR',
				description: 'Powerful archive manager for extracting and creating compressed files.',
				link: 'https://www.win-rar.com',
				icon: 'https://www.win-rar.com/favicon.ico',
				tags: ['utility', 'compression']
			},
			{
				title: 'NVIDIA App',
				description: 'Control your NVIDIA GPU, optimize games, and record gameplay.',
				link: 'https://www.nvidia.com/en-us/geforce/geforce-experience/',
				icon: 'https://www.nvidia.com/favicon.ico',
				tags: ['gpu', 'gaming', 'optimization']
			}
		]
	},
	{
		name: 'Gaming',
		description: 'Tools and platforms for gamers.',
		apps: [
			{
				title: 'SteelSeries GG',
				description: 'Clipping software, improved mic and headset controls.',
				link: 'https://steelseries.com/gg',
				icon: 'https://steelseries.com/favicon-32x32.png',
				tags: ['clipping', 'audio', 'hardware']
			},
			{
				title: 'Medal',
				description: 'More clipping options for recording your gameplay moments.',
				link: 'https://medal.tv',
				icon: 'https://medal.tv/favicon.ico',
				tags: ['clipping', 'recording']
			},
			{
				title: 'WeMod',
				description: 'Cheats and trainers for single-player games.',
				link: 'https://www.wemod.com',
				icon: 'https://www.wemod.com/favicon.ico',
				tags: ['cheats', 'trainers']
			},
			{
				title: 'Modrinth',
				description: 'Modern Minecraft mod platform with better discovery.',
				link: 'https://modrinth.com',
				icon: 'https://modrinth.com/favicon.ico',
				tags: ['minecraft', 'mods']
			},
			{
				title: 'CurseForge',
				description: 'Popular Minecraft mod and modpack platform.',
				link: 'https://www.curseforge.com',
				icon: 'https://www.curseforge.com/favicon.ico',
				tags: ['minecraft', 'mods']
			},
			{
				title: 'Lunar Client',
				description: 'Optimized Minecraft client with built-in mods and cosmetics.',
				link: 'https://lunarclient.com',
				icon: 'https://lunarclient.com/favicon.ico',
				tags: ['minecraft', 'client']
			}
		]
	},
	{
		name: 'Creative',
		description: 'Tools for design, art, and creative work.',
		apps: [
			{
				title: 'Affinity Photo',
				description: 'Professional photo editing software - free alternative to Photoshop.',
				link: 'https://affinity.serif.com/en-us/photo/',
				icon: 'https://affinity.serif.com/favicon.ico',
				tags: ['photo-editing', 'design']
			},
			{
				title: 'Upscayl',
				description: 'Free AI-powered image upscaler for enhancing image quality.',
				link: 'https://www.upscayl.org',
				icon: 'https://www.upscayl.org/favicon.ico',
				tags: ['ai', 'image-enhancement']
			},
			{
				title: 'Blender',
				description: 'Free and open-source 3D modeling, animation, and rendering software.',
				link: 'https://www.blender.org',
				icon: 'https://www.blender.org/favicon.ico',
				tags: ['3d', 'modeling', 'animation']
			}
		]
	},
	{
		name: 'VPN',
		description: 'Free VPN services for privacy and security.',
		apps: [
			{
				title: 'Hotspot VPN',
				description: 'Free VPN service for secure browsing and privacy.',
				link: 'https://www.hotspotshield.com',
				icon: 'https://www.hotspotshield.com/favicon.ico',
				tags: ['vpn', 'privacy', 'security']
			},
			{
				title: 'Proton VPN',
				description: 'Free VPN with strong privacy protection and no data logging.',
				link: 'https://protonvpn.com',
				icon: 'https://protonvpn.com/favicon.ico',
				tags: ['vpn', 'privacy', 'security']
			}
		]
	},
	{
		name: 'Utilities',
		description: 'Useful tools that enhance your Windows experience.',
		apps: [
			{
				title: 'Voicemod',
				description: 'Real-time voice changer and soundboard for Discord and streaming.',
				link: 'https://www.voicemod.net',
				icon: 'https://www.voicemod.net/favicon.ico',
				tags: ['audio', 'voice-changer']
			},
			{
				title: 'Windhawk',
				description: 'Customize Windows with powerful tweaks and modifications.',
				link: 'https://windhawk.net',
				icon: 'https://windhawk.net/favicon.ico',
				tags: ['windows', 'customization']
			},
			{
				title: 'Mechvibes',
				description: 'Satisfying keyboard sound effects for a better typing experience.',
				link: 'https://mechvibes.com',
				icon: 'https://mechvibes.com/favicon.ico',
				tags: ['audio', 'keyboard']
			}
		]
	}
];

