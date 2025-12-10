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
		name: 'Essentials / Must-haves',
		description: 'Core applications to install right after a fresh Windows setup.',
		apps: [
			{
				title: 'Google Chrome',
				description: 'Mainstream browser with great dev tools and extensions. Free.',
				link: 'https://www.google.com/chrome/',
				icon: 'https://www.google.com/favicon.ico',
				tags: ['browser', 'web', 'free']
			},
			{
				title: 'Firefox',
				description: 'Privacy-friendly browser alternative with powerful extension support. Free.',
				link: 'https://www.mozilla.org/firefox',
				icon: 'https://www.mozilla.org/favicon.ico',
				tags: ['browser', 'privacy', 'free']
			},
			{
				title: '7-Zip',
				description: 'Essential free archive manager. Better alternative to WinRAR. Free.',
				link: 'https://www.7-zip.org',
				icon: 'https://www.7-zip.org/favicon.ico',
				tags: ['archive', 'compression', 'free']
			},
			{
				title: 'WinRAR',
				description: 'Popular archive manager for extracting and creating compressed files. Paid.',
				link: 'https://www.win-rar.com',
				icon: 'https://www.win-rar.com/favicon.ico',
				tags: ['archive', 'compression', 'paid']
			},
			{
				title: 'NVIDIA GeForce Experience',
				description: 'GPU drivers, game optimization, and ShadowPlay recording. Free.',
				link: 'https://www.nvidia.com/en-us/geforce/geforce-experience/',
				icon: 'https://www.nvidia.com/favicon.ico',
				tags: ['gpu', 'drivers', 'gaming', 'free']
			},
			{
				title: 'AMD Radeon Software',
				description: 'AMD GPU drivers and optimization tools. Free.',
				link: 'https://www.amd.com/en/support',
				icon: 'https://www.amd.com/favicon.ico',
				tags: ['gpu', 'drivers', 'gaming', 'free']
			},
			{
				title: 'Steam',
				description: 'The ultimate gaming platform with thousands of games. Free.',
				link: 'https://store.steampowered.com',
				icon: 'https://store.steampowered.com/favicon.ico',
				tags: ['gaming', 'store', 'free']
			},
			{
				title: 'Epic Games',
				description: 'Epic Games Store with free games every week. Free.',
				link: 'https://www.epicgames.com/store',
				icon: 'https://www.epicgames.com/favicon.ico',
				tags: ['gaming', 'store', 'free']
			},
			{
				title: 'Discord',
				description: 'Communities, calls, and screen sharing. Free / Nitro paid.',
				link: 'https://discord.com',
				icon: 'https://discord.com/favicon.ico',
				tags: ['communication', 'chat', 'voice', 'free']
			},
			{
				title: 'CPU-Z',
				description: 'System information tool for CPU, memory, and motherboard details. Free.',
				link: 'https://www.cpuid.com/softwares/cpu-z.html',
				icon: 'https://www.cpuid.com/favicon.ico',
				tags: ['system-info', 'hardware', 'free']
			},
			{
				title: 'Everything',
				description: 'Lightning-fast file search tool. Essential for Windows. Free.',
				link: 'https://www.voidtools.com',
				icon: 'https://www.voidtools.com/favicon.ico',
				tags: ['file-search', 'utility', 'free']
			},
			{
				title: 'PowerToys',
				description: 'Microsoft utilities for power users: FancyZones, PowerRename, and more. Free.',
				link: 'https://github.com/microsoft/PowerToys',
				icon: 'https://github.com/favicon.ico',
				tags: ['productivity', 'utilities', 'free']
			}
		]
	},
	{
		name: 'Developer / Programming',
		description: 'IDEs, runtimes, git, terminals, and development tools.',
		apps: [
			{
				title: 'Node.js',
				description: 'Runtime for JavaScript and TypeScript tooling and backends. Free.',
				link: 'https://nodejs.org',
				icon: 'https://nodejs.org/static/images/favicons/favicon-32x32.png',
				tags: ['runtime', 'javascript', 'free']
			},
			{
				title: 'Python',
				description: 'Popular general-purpose language used for scripts, data and backends. Free.',
				link: 'https://www.python.org',
				icon: 'https://www.python.org/static/favicon.ico',
				tags: ['language', 'runtime', 'free']
			},
			{
				title: 'Git',
				description: 'Version control for code and configuration. Free.',
				link: 'https://git-scm.com',
				icon: 'https://git-scm.com/favicon.ico',
				tags: ['vcs', 'version-control', 'free']
			},
			{
				title: 'GitHub Desktop',
				description: 'User-friendly Git GUI for managing repositories. Free.',
				link: 'https://desktop.github.com',
				icon: 'https://desktop.github.com/favicon.ico',
				tags: ['vcs', 'gui', 'free']
			},
			{
				title: 'Visual Studio Code',
				description: 'Extensible code editor with a huge ecosystem of extensions. Free.',
				link: 'https://code.visualstudio.com',
				icon: 'https://code.visualstudio.com/favicon.ico',
				tags: ['editor', 'ide', 'free']
			},
			{
				title: 'Cursor',
				description: 'AI-first code editor built on VS Code. Code-focused IDE-assistant. Paid tiers.',
				link: 'https://cursor.com',
				icon: 'https://cursor.com/favicon.ico',
				tags: ['editor', 'ai', 'paid']
			},
			{
				title: 'IntelliJ IDEA',
				description: 'Powerful IDE for Java, Kotlin, and Minecraft modding. Community free / Ultimate paid.',
				link: 'https://www.jetbrains.com/idea/',
				icon: 'https://www.jetbrains.com/favicon-32x32.png',
				tags: ['ide', 'java', 'minecraft', 'free', 'paid']
			},
			{
				title: 'Google Antigravity',
				description: 'Agent-first IDE (public preview). Powerful but requires care - agent automation can issue system-level commands. Use with caution.',
				link: 'https://antigravity.google/',
				icon: 'https://www.google.com/favicon.ico',
				tags: ['ide', 'ai', 'agent', 'preview', 'power-user']
			},
			{
				title: 'Windows Terminal',
				description: 'Modern terminal application for Windows. Free.',
				link: 'https://aka.ms/terminal',
				icon: 'https://www.microsoft.com/favicon.ico',
				tags: ['terminal', 'cli', 'free']
			},
			{
				title: 'winget',
				description: 'Windows Package Manager - install apps from command line. Free.',
				link: 'https://learn.microsoft.com/en-us/windows/package-manager/winget/',
				icon: 'https://www.microsoft.com/favicon.ico',
				tags: ['package-manager', 'cli', 'free']
			},
			{
				title: 'Chocolatey',
				description: 'Package manager for Windows. Free / Paid.',
				link: 'https://chocolatey.org',
				icon: 'https://chocolatey.org/favicon.ico',
				tags: ['package-manager', 'free', 'paid']
			}
		]
	},
	{
		name: 'Gaming',
		description: 'Game clients, launchers, overlays, and performance tools.',
		apps: [
			{
				title: 'SteelSeries GG',
				description: 'Clipping software, improved mic and headset controls. Free.',
				link: 'https://steelseries.com/gg',
				icon: 'https://steelseries.com/favicon-32x32.png',
				tags: ['clipping', 'audio', 'hardware', 'free']
			},
			{
				title: 'Medal',
				description: 'Game clipping and sharing tool. Free.',
				link: 'https://medal.tv',
				icon: 'https://medal.tv/favicon.ico',
				tags: ['clipping', 'recording', 'free']
			},
			{
				title: 'OBS Studio',
				description: 'Free and open-source software for video recording and live streaming. Free.',
				link: 'https://obsproject.com',
				icon: 'https://obsproject.com/favicon.ico',
				tags: ['recording', 'streaming', 'free']
			},
			{
				title: 'NVIDIA ShadowPlay',
				description: 'Built-in game recording with GeForce Experience. Free with NVIDIA GPU.',
				link: 'https://www.nvidia.com/en-us/geforce/geforce-experience/',
				icon: 'https://www.nvidia.com/favicon.ico',
				tags: ['recording', 'gpu', 'free']
			},
			{
				title: 'WeMod',
				description: 'Cheats and trainers for single-player games. Free / Paid.',
				link: 'https://www.wemod.com',
				icon: 'https://www.wemod.com/favicon.ico',
				tags: ['cheats', 'trainers', 'free', 'paid']
			},
			{
				title: 'Modrinth',
				description: 'Modern Minecraft mod platform with better discovery. Free.',
				link: 'https://modrinth.com',
				icon: 'https://modrinth.com/favicon.ico',
				tags: ['minecraft', 'mods', 'free']
			},
			{
				title: 'CurseForge',
				description: 'Popular Minecraft mod and modpack platform. Free.',
				link: 'https://www.curseforge.com',
				icon: 'https://www.curseforge.com/favicon.ico',
				tags: ['minecraft', 'mods', 'free']
			},
			{
				title: 'Lunar Client',
				description: 'Optimized Minecraft client with built-in mods and cosmetics. Free.',
				link: 'https://lunarclient.com',
				icon: 'https://lunarclient.com/favicon.ico',
				tags: ['minecraft', 'client', 'free']
			}
		]
	},
	{
		name: 'Creative / Media',
		description: 'Image, video, audio, and 3D creation tools.',
		apps: [
			{
				title: 'Affinity Photo',
				description: 'Professional photo editing software - paid alternative to Photoshop. Paid.',
				link: 'https://affinity.serif.com/en-us/photo/',
				icon: 'https://affinity.serif.com/favicon.ico',
				tags: ['photo-editing', 'design', 'paid']
			},
			{
				title: 'GIMP',
				description: 'Free alternative to Photoshop. Powerful image editing. Free.',
				link: 'https://www.gimp.org',
				icon: 'https://www.gimp.org/favicon.ico',
				tags: ['photo-editing', 'design', 'free']
			},
			{
				title: 'Upscayl',
				description: 'Free AI-powered image upscaler for enhancing image quality. Free.',
				link: 'https://www.upscayl.org',
				icon: 'https://www.upscayl.org/favicon.ico',
				tags: ['ai', 'image-enhancement', 'free']
			},
			{
				title: 'Topaz Gigapixel',
				description: 'Professional AI image upscaling. Paid.',
				link: 'https://www.topazlabs.com/gigapixel-ai',
				icon: 'https://www.topazlabs.com/favicon.ico',
				tags: ['ai', 'image-enhancement', 'paid']
			},
			{
				title: 'Blender',
				description: 'Industry-grade free 3D modeling, animation, and rendering software. Free.',
				link: 'https://www.blender.org',
				icon: 'https://www.blender.org/favicon.ico',
				tags: ['3d', 'modeling', 'animation', 'free']
			},
			{
				title: 'Audacity',
				description: 'Free audio editor and recorder. Free.',
				link: 'https://www.audacityteam.org',
				icon: 'https://www.audacityteam.org/favicon.ico',
				tags: ['audio', 'editing', 'free']
			},
			{
				title: 'Reaper',
				description: 'Professional DAW with low cost license. Paid, low cost.',
				link: 'https://www.reaper.fm',
				icon: 'https://www.reaper.fm/favicon.ico',
				tags: ['audio', 'daw', 'paid']
			}
		]
	},
	{
		name: 'Networking & VPN',
		description: 'VPN services and networking tools.',
		apps: [
			{
				title: 'Proton VPN',
				description: 'Free tier available - trustworthy VPN with strong privacy protection. Free tier / Paid.',
				link: 'https://protonvpn.com',
				icon: 'https://protonvpn.com/favicon.ico',
				tags: ['vpn', 'privacy', 'security', 'free', 'paid']
			},
			{
				title: 'Hotspot VPN',
				description: 'Free VPN service for secure browsing and privacy. Free.',
				link: 'https://www.hotspotshield.com',
				icon: 'https://www.hotspotshield.com/favicon.ico',
				tags: ['vpn', 'privacy', 'security', 'free']
			},
			{
				title: 'NordVPN',
				description: 'Mainstream paid VPN choice. Paid.',
				link: 'https://nordvpn.com',
				icon: 'https://nordvpn.com/favicon.ico',
				tags: ['vpn', 'privacy', 'security', 'paid']
			},
			{
				title: 'ExpressVPN',
				description: 'Mainstream paid VPN choice. Paid.',
				link: 'https://www.expressvpn.com',
				icon: 'https://www.expressvpn.com/favicon.ico',
				tags: ['vpn', 'privacy', 'security', 'paid']
			}
		]
	},
	{
		name: 'Utilities & System',
		description: 'File search, terminal, uninstallers, monitoring, and system tools.',
		apps: [
			{
				title: 'Everything',
				description: 'Lightning-fast file search tool. Essential for Windows. Free.',
				link: 'https://www.voidtools.com',
				icon: 'https://www.voidtools.com/favicon.ico',
				tags: ['file-search', 'utility', 'free']
			},
			{
				title: 'Voicemod',
				description: 'Real-time voice changer and soundboard for Discord and streaming. Free / Paid.',
				link: 'https://www.voicemod.net',
				icon: 'https://www.voicemod.net/favicon.ico',
				tags: ['audio', 'voice-changer', 'free', 'paid']
			},
			{
				title: 'Mechvibes',
				description: 'Satisfying keyboard sound effects for a better typing experience. Free.',
				link: 'https://mechvibes.com',
				icon: 'https://mechvibes.com/favicon.ico',
				tags: ['audio', 'keyboard', 'free']
			},
			{
				title: 'Windhawk',
				description: 'Free tool to tweak and customize Windows UI. Use with caution - shell mods can affect system stability. Free.',
				link: 'https://windhawk.net',
				icon: 'https://windhawk.net/favicon.ico',
				tags: ['windows', 'customization', 'free']
			}
		]
	}
];
