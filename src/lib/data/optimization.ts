export type OptimizationStep = {
	id: string;
	title: string;
	description: string;
	category: string;
};

export const optimizationSteps: OptimizationStep[] = [
	{
		id: 'gpu-drivers',
		title: 'Update GPU & chipset drivers',
		description: 'Always update drivers first - download from NVIDIA/AMD/Intel website or use GeForce Experience/Radeon Software.',
		category: 'Drivers'
	},
	{
		id: 'game-mode',
		title: 'Enable Game Mode in Windows',
		description: 'Settings → Gaming → Game Mode → Turn on. Also set GPU to high performance in system settings.',
		category: 'Windows Settings'
	},
	{
		id: 'power-plan',
		title: 'Set power plan to High Performance',
		description: 'Control Panel → Power Options → Select High Performance (or create custom plan).',
		category: 'Windows Settings'
	},
	{
		id: 'startup-apps',
		title: 'Disable unnecessary startup apps',
		description: 'Task Manager → Startup tab → Disable apps you don\'t need at boot.',
		category: 'Windows Settings'
	},
	{
		id: 'gpu-power-profile',
		title: 'Use FPS-friendly power profile in GPU drivers',
		description: 'NVIDIA Control Panel → Manage 3D Settings → Power management mode → Prefer maximum performance. AMD: Radeon Software → Performance → Tuning.',
		category: 'GPU Settings'
	},
	{
		id: 'disable-overlays',
		title: 'Disable overlays if they cause stutters',
		description: 'Turn off Discord overlay, GeForce Experience overlay, Steam overlay if experiencing frame drops.',
		category: 'Performance'
	},
	{
		id: 'check-temps',
		title: 'Check temperatures',
		description: 'Use HWMonitor or MSI Afterburner to monitor temps. Thermal throttling kills FPS - ensure proper cooling.',
		category: 'Monitoring'
	},
	{
		id: 'ssd-health',
		title: 'SSD health and TRIM',
		description: 'Ensure TRIM is enabled (usually automatic). Keep 10-20% free space on SSD for optimal performance.',
		category: 'Storage'
	},
	{
		id: 'hdd-defrag',
		title: 'Defragment HDDs occasionally',
		description: 'For traditional hard drives, run defragmentation tool (Windows built-in) periodically.',
		category: 'Storage'
	},
	{
		id: 'in-game-settings',
		title: 'Adjust in-game settings',
		description: 'Lower shadows, view distance, bloom, and other demanding effects. Use DLSS/FSR if available.',
		category: 'Gaming'
	},
	{
		id: 'network-tweaks',
		title: 'Network optimizations',
		description: 'Use wired connection if possible. Disable background sync/cloud backup during play. Close bandwidth-heavy apps.',
		category: 'Network'
	},
	{
		id: 'advanced-tweaks',
		title: 'Optional advanced tweaks',
		description: 'Lightweight anti-cheat safe tweaks, driver-level optimizations, undervolt/overclock carefully (at your own risk).',
		category: 'Advanced'
	}
];

export const optimizationCategories = [
	'Drivers',
	'Windows Settings',
	'GPU Settings',
	'Performance',
	'Monitoring',
	'Storage',
	'Gaming',
	'Network',
	'Advanced'
];
