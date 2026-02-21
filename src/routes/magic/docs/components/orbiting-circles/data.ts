import OrbitingCirclesRaw from "$lib/components/magic-ui/orbiting-circles/orbiting-circles.svelte?raw";
import IndexTs from "$lib/components/magic-ui/orbiting-circles/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "orbiting-circles",
	title: "Orbiting Circles",
	description: "A description for Orbiting Circles component.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "Orbiting Circles",
	description:
		"Learn how to create Orbiting Circles effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Orbiting Circles", "Svelte 5 Animations", "Animation", "Web Design"],
};

let installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "orbiting-circles.svelte",
			filecode: OrbitingCirclesRaw,
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
            â””â”€â”€ orbiting-circles/
                â”œâ”€â”€ orbiting-circles.svelte
                â””â”€â”€ index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "orbiting-circles.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "OrbitingCircles",
			desc: "A component for Orbiting Circles.",
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
