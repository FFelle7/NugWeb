export type ProjectPick = {
	title: string;
	description: string;
	link: string;
	tags?: string[];
};

export const projects: ProjectPick[] = [
	{
		title: 'QOOL (Fabric 1.21.8)',
		description:
			'Helper / trainer Minecraft mod for Fabric 1.21.8 that makes practicing and improving easier.',
		link: '#qool',
		tags: ['minecraft', 'fabric', 'helper']
	},
	{
		title: 'Felle Studio',
		description:
			'Desktop app for downloading and organising videos and audio from TikTok, YouTube, Instagram and more, with a built-in simple editor.',
		link: '#felle-studio',
		tags: ['video', 'downloader', 'editor']
	}
];

