import MagicCardRaw from "$lib/components/magic-ui/magic-card/magic-card.svelte?raw";
import IndexTs from "$lib/components/magic-ui/magic-card/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "magic-card",
	title: "Magic Card",
	description:
		"A spotlight effect that follows your mouse cursor and highlights borders on hover.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "Magic Card",
	description:
		"Learn how to create Magic Card effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Magic Card", "Svelte 5 Animations", "Animation", "Web Design"],
};

let installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "magic-card.svelte",
			filecode: MagicCardRaw,
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
└── lib/
    └── components/
        └── magic-ui/
            └── magic-card/
                ├── magic-card.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: [
		{
			filename: "magic-card.svelte",
			filecode: PreviewCode,
			lang: "svelte",
			hideLines: true,
			highlight: [2],
		},
		{
			filename: "index.ts",
			filecode: IndexTs,
			lang: "typescript",
			hideLines: true,
			highlight: [2],
		},
	],
	examples,
	seo,
	props: [
		{
			name: "MagicCard",
			desc: "A component for Magic Card.",
			props: [
				{
					name: "children",
					type: "Snippet",
					default: "",
					description: "Card content.",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes.",
				},
				{
					name: "gradientSize",
					type: "number",
					default: "0",
					description: "Size of the gradient circle.",
				},
				{
					name: "gradientColor",
					type: "string",
					default: '"#fff"',
					description: "Color of the gradient overlay.",
				},
				{
					name: "gradientOpacity",
					type: "number",
					default: "0",
					description: "Opacity of the gradient overlay.",
				},
				{
					name: "gradientFrom",
					type: "string",
					default: '"#000"',
					description: "Starting color of the border gradient.",
				},
				{
					name: "gradientTo",
					type: "string",
					default: '"#000"',
					description: "Ending color of the border gradient.",
				},
			],
		},
	],
	installBlock,
};
