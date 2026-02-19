import DitherShaderRaw from "$lib/components/magic-ui/dither-shader/dither-shader.svelte?raw";
import IndexTs from "$lib/components/magic-ui/dither-shader/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import DitherShaderExample from "./examples/dither-shader-example.svelte";
import DitherShaderExampleRaw from "./examples/dither-shader-example.svelte?raw";
import DitherSharerDemoDuotone from "./examples/dither-sharer-demo-duotone.svelte";
import DitherSharerDemoDuotoneRaw from "./examples/dither-sharer-demo-duotone.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "dither-shader",
	title: "Dither Shader",
	description: "A description for Dither Shader component.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [
	{
		name: "Dither Shader Demo Simple",
		description: "An example showcasing the Dither Shader component in action.",
		code: {
			filename: "dither-shader-example.svelte",
			filecode: DitherShaderExampleRaw,
			lang: "svelte",
			highlight: [2],
		},
		preview: DitherShaderExample,
	},
	{
		name: "Dither Shader Demo Duotone",
		code: {
			filename: "dither-shader-duotone.svelte",
			filecode: DitherSharerDemoDuotoneRaw,
			lang: "svelte",
			highlight: [2],
		},
		preview: DitherSharerDemoDuotone,
	},
];

const seo: SEO = {
	title: "Dither Shader",
	description:
		"Learn how to create Dither Shader effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Dither Shader", "Svelte 5 Animations", "Animation", "Web Design"],
};

let installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "dither-shader.svelte",
			filecode: DitherShaderRaw,
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
  lib/
    components/
      magic-ui/
        dither-shader/
          dither-shader.svelte
          index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "dither-shader.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "DitherShader",
			desc: "A component for Dither Shader.",
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
