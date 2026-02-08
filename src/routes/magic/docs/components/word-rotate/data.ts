import WordRotateRaw from "$lib/components/magic-ui/word-rotate/word-rotate.svelte?raw";
import IndexTs from "$lib/components/magic-ui/word-rotate/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "word-rotate",
	title: "Word Rotate",
	description: "A description for Word Rotate component.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "Word Rotate - Svelte 5 Animations",
	description:
		"Learn how to create Word Rotate effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Word Rotate", "Svelte 5 Animations", "Animation", "Web Design"],
};

let installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "word-rotate.svelte",
			filecode: WordRotateRaw,
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
            â””â”€â”€ word-rotate/
                â”œâ”€â”€ word-rotate.svelte
                â””â”€â”€ index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "word-rotate.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "WordRotate",
			desc: "A component for Word Rotate.",
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
