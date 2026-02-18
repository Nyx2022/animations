import DitherShaderRaw from "$lib/components/magic-ui/dither-shader/dither-shader.svelte?raw";
import IndexTs from "$lib/components/magic-ui/dither-shader/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
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
];

const seo: SEO = {
  title: "Dither Shader",
  description: "Learn how to create Dither Shader effects in Svelte using the Svelte 5 Animations library.",
  keywords: ["Svelte", "Dither Shader", "Svelte 5 Animations", "Animation", "Web Design"],
};

let installBlock : InstallComponentDocs={
  installCode:[
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
    }
  ],
  folderStructure: `src/
â””â”€â”€ lib/
    â””â”€â”€ components/
        â””â”€â”€ magic-ui/
            â””â”€â”€ dither-shader/
                â”œâ”€â”€ dither-shader.svelte
                â””â”€â”€ index.ts`,
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
        { name: "class", type: "string", default: '""', description: "Additional CSS classes to apply" },
      ],
    },
  ],
  installBlock,
};
