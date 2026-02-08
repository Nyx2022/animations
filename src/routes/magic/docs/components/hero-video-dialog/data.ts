import HeroVideoDialogRaw from "$lib/components/magic-ui/hero-video-dialog/hero-video-dialog.svelte?raw";
import IndexTs from "$lib/components/magic-ui/hero-video-dialog/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "hero-video-dialog",
	title: "Hero Video Dialog",
	description: "A description for Hero Video Dialog component.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "Hero Video Dialog - Svelte 5 Animations",
	description:
		"Learn how to create Hero Video Dialog effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Hero Video Dialog", "Svelte 5 Animations", "Animation", "Web Design"],
};

let installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "hero-video-dialog.svelte",
			filecode: HeroVideoDialogRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTs,
			lang: "typescript",
		},
	],
	folderStructure: `src/
â””â”€â”€ lib/
    â””â”€â”€ components/
        â””â”€â”€ magic-ui/
            â””â”€â”€ hero-video-dialog/
                â”œâ”€â”€ hero-video-dialog.svelte
                â””â”€â”€ index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "hero-video-dialog.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "HeroVideoDialog",
			desc: "A component for Hero Video Dialog.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
			],
		},
	],
	installBlock,
};
