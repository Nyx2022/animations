import NeonGradientCardRaw from "$lib/components/magic-ui/neon-gradient-card/neon-gradient-card.svelte?raw";
import IndexTs from "$lib/components/magic-ui/neon-gradient-card/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "neon-gradient-card",
	title: "Neon Gradient Card",
	description: "A description for Neon Gradient Card component.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "Neon Gradient Card - Svelte 5 Animations",
	description:
		"Learn how to create Neon Gradient Card effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Neon Gradient Card", "Svelte 5 Animations", "Animation", "Web Design"],
};

let installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "neon-gradient-card.svelte",
			filecode: NeonGradientCardRaw,
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
            â””â”€â”€ neon-gradient-card/
                â”œâ”€â”€ neon-gradient-card.svelte
                â””â”€â”€ index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "neon-gradient-card.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "NeonGradientCard",
			desc: "A component for Neon Gradient Card.",
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
