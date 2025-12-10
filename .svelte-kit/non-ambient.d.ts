
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/ai-tools" | "/essentials" | "/optimization" | "/projects" | "/quality-of-life" | "/visuals";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/ai-tools": Record<string, never>;
			"/essentials": Record<string, never>;
			"/optimization": Record<string, never>;
			"/projects": Record<string, never>;
			"/quality-of-life": Record<string, never>;
			"/visuals": Record<string, never>
		};
		Pathname(): "/" | "/ai-tools" | "/ai-tools/" | "/essentials" | "/essentials/" | "/optimization" | "/optimization/" | "/projects" | "/projects/" | "/quality-of-life" | "/quality-of-life/" | "/visuals" | "/visuals/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): string & {};
	}
}