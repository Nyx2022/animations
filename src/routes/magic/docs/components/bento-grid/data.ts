import BentoGridRaw from "$lib/components/magic-ui/bento-grid/bento-grid.svelte?raw";
import BentoCardRaw from "$lib/components/magic-ui/bento-grid/bento-card.svelte?raw";
import IndexTs from "$lib/components/magic-ui/bento-grid/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

// Example
import BentoGridExample from "./examples/bento-grid-example.svelte";
import BentoGridExampleRaw from "./examples/bento-grid-example.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "bento-grid",
	title: "Bento Grid",
	description:
		"Bento grid is a layout used to showcase the features of a product in a simple and elegant way.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [
	{
		name: "Bento Grid Example",
		preview: BentoGridExample,
		code: {
			filename: "bento-grid-example.svelte",
			filecode: BentoGridExampleRaw,
			lang: "svelte",
			highlight: [2],
		},
	},
];

const seo: SEO = {
	title: "Bento Grid",
	description:
		"Learn how to create Bento Grid effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Bento Grid", "Svelte 5 Animations", "Animation", "Web Design"],
};

let installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "bento-grid.svelte",
			filecode: BentoGridRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "bento-card.svelte",
			filecode: BentoCardRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTs,
			lang: "typescript",
		},
	],
	folderStructure: ``,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "bento-grid.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "BentoGrid",
			desc: "A component for Bento Grid.",
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
