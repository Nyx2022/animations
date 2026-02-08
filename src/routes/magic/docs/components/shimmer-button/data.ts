import ShimmerButtonRaw from "$lib/components/magic-ui/shimmer-button/shimmer-button.svelte?raw";
import IndexTs from "$lib/components/magic-ui/shimmer-button/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "shimmer-button",
	title: "Shimmer Button",
	description: "A description for Shimmer Button component.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "Shimmer Button - Svelte 5 Animations",
	description:
		"Learn how to create Shimmer Button effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Shimmer Button", "Svelte 5 Animations", "Animation", "Web Design"],
};

let installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "shimmer-button.svelte",
			filecode: ShimmerButtonRaw,
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
            â””â”€â”€ shimmer-button/
                â”œâ”€â”€ shimmer-button.svelte
                â””â”€â”€ index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "shimmer-button.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "ShimmerButton",
			desc: "A component for Shimmer Button.",
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
