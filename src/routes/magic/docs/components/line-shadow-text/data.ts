import LineShadowTextRaw from "$lib/components/magic-ui/line-shadow-text/line-shadow-text.svelte?raw";
import IndexTs from "$lib/components/magic-ui/line-shadow-text/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "line-shadow-text",
	title: "Line Shadow Text",
	description: "A description for Line Shadow Text component.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "Line Shadow Text - Svelte 5 Animations",
	description:
		"Learn how to create Line Shadow Text effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Line Shadow Text", "Svelte 5 Animations", "Animation", "Web Design"],
};

let installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "line-shadow-text.svelte",
			filecode: LineShadowTextRaw,
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
            â””â”€â”€ line-shadow-text/
                â”œâ”€â”€ line-shadow-text.svelte
                â””â”€â”€ index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "line-shadow-text.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "LineShadowText",
			desc: "A component for Line Shadow Text.",
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
