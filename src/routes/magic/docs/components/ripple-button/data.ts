import RippleButtonRaw from "$lib/components/magic-ui/ripple-button/ripple-button.svelte?raw";
import IndexTs from "$lib/components/magic-ui/ripple-button/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "ripple-button",
	title: "Ripple Button",
	description: "A description for Ripple Button component.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "Ripple Button - Svelte 5 Animations",
	description:
		"Learn how to create Ripple Button effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Ripple Button", "Svelte 5 Animations", "Animation", "Web Design"],
};

let installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "ripple-button.svelte",
			filecode: RippleButtonRaw,
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
            â””â”€â”€ ripple-button/
                â”œâ”€â”€ ripple-button.svelte
                â””â”€â”€ index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "ripple-button.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "RippleButton",
			desc: "A component for Ripple Button.",
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
