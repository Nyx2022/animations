import Raw from "$lib/components/magic-ui/grid-pattern/grid-pattern.svelte?raw";
import IndexTs from "$lib/components/magic-ui/grid-pattern/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "grid-pattern",
	title: "",
	description: "A description for  component.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: " - Svelte 5 Animations",
	description: "Learn how to create  effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "", "Svelte 5 Animations", "Animation", "Web Design"],
};

let installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "grid-pattern.svelte",
			filecode: Raw,
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
            â””â”€â”€ grid-pattern/
                â”œâ”€â”€ grid-pattern.svelte
                â””â”€â”€ index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "grid-pattern.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "",
			desc: "A component for .",
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
