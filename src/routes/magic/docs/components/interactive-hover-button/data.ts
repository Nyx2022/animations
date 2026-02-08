import InteractiveHoverButtonRaw from "$lib/components/magic-ui/interactive-hover-button/interactive-hover-button.svelte?raw";
import IndexTs from "$lib/components/magic-ui/interactive-hover-button/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "interactive-hover-button",
	title: "Interactive Hover Button",
	description: "A description for Interactive Hover Button component.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "Interactive Hover Button - Svelte 5 Animations",
	description:
		"Learn how to create Interactive Hover Button effects in Svelte using the Svelte 5 Animations library.",
	keywords: [
		"Svelte",
		"Interactive Hover Button",
		"Svelte 5 Animations",
		"Animation",
		"Web Design",
	],
};

let installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "interactive-hover-button.svelte",
			filecode: InteractiveHoverButtonRaw,
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
            â””â”€â”€ interactive-hover-button/
                â”œâ”€â”€ interactive-hover-button.svelte
                â””â”€â”€ index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "interactive-hover-button.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "InteractiveHoverButton",
			desc: "A component for Interactive Hover Button.",
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
