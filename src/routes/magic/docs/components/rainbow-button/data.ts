import RainbowButtonRaw from "$lib/components/magic-ui/rainbow-button/rainbow-button.svelte?raw";
import IndexTs from "$lib/components/magic-ui/rainbow-button/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "rainbow-button",
	title: "Rainbow Button",
	description: "A description for Rainbow Button component.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "Rainbow Button - Svelte 5 Animations",
	description:
		"Learn how to create Rainbow Button effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Rainbow Button", "Svelte 5 Animations", "Animation", "Web Design"],
};

let installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "rainbow-button.svelte",
			filecode: RainbowButtonRaw,
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
            â””â”€â”€ rainbow-button/
                â”œâ”€â”€ rainbow-button.svelte
                â””â”€â”€ index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "rainbow-button.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "RainbowButton",
			desc: "A component for Rainbow Button.",
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
