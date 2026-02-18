import RetroGridRaw from "$lib/components/magic-ui/retro-grid/retro-grid.svelte?raw";
import IndexTs from "$lib/components/magic-ui/retro-grid/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
  id: "retro-grid",
  title: "Retro Grid",
  description: "A description for Retro Grid component.",
  category: "animation",
  badge: "new",
};

const examples: Example[] = [
];

const seo: SEO = {
  title: "Retro Grid",
  description: "Learn how to create Retro Grid effects in Svelte using the Svelte 5 Animations library.",
  keywords: ["Svelte", "Retro Grid", "Svelte 5 Animations", "Animation", "Web Design"],
};

let installBlock : InstallComponentDocs={
  installCode:[
    {
      filename: "retro-grid.svelte",
      filecode: RetroGridRaw,
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
            â””â”€â”€ retro-grid/
                â”œâ”€â”€ retro-grid.svelte
                â””â”€â”€ index.ts`,
};

export const data: ComponentDoc = {
  ...meta,
  preview: Preview,
  previewCode: {
    filename: "retro-grid.svelte",
    filecode: PreviewCode,
    lang: "svelte",
    hideLines: true,
    highlight: [2],
  },
  examples,
  seo,
  props: [
    {
      name: "RetroGrid",
      desc: "A component for Retro Grid.",
      props: [
        { name: "class", type: "string", default: '""', description: "Additional CSS classes to apply" },
      ],
    },
  ],
  installBlock,
};
