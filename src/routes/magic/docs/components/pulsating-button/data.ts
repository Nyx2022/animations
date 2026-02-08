import PulsatingButtonRaw from "$lib/components/magic-ui/pulsating-button/pulsating-button.svelte?raw";
import IndexTs from "$lib/components/magic-ui/pulsating-button/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "pulsating-button",
	title: "Pulsating Button",
	description: "A description for Pulsating Button component.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "Pulsating Button - Svelte 5 Animations",
	description:
		"Learn how to create Pulsating Button effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Pulsating Button", "Svelte 5 Animations", "Animation", "Web Design"],
};

let installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "pulsating-button.svelte",
			filecode: PulsatingButtonRaw,
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
            â””â”€â”€ pulsating-button/
                â”œâ”€â”€ pulsating-button.svelte
                â””â”€â”€ index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "pulsating-button.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "PulsatingButton",
			desc: "A component for Pulsating Button.",
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
