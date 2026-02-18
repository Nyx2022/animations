import ProgressiveBlurRaw from "$lib/components/magic-ui/progressive-blur/progressive-blur.svelte?raw";
import IndexTs from "$lib/components/magic-ui/progressive-blur/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
  id: "progressive-blur",
  title: "Progressive Blur",
  description: "A description for Progressive Blur component.",
  category: "animation",
  badge: "new",
};

const examples: Example[] = [
];

const seo: SEO = {
  title: "Progressive Blur",
  description: "Learn how to create Progressive Blur effects in Svelte using the Svelte 5 Animations library.",
  keywords: ["Svelte", "Progressive Blur", "Svelte 5 Animations", "Animation", "Web Design"],
};

let installBlock : InstallComponentDocs={
  installCode:[
    {
      filename: "progressive-blur.svelte",
      filecode: ProgressiveBlurRaw,
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
            â””â”€â”€ progressive-blur/
                â”œâ”€â”€ progressive-blur.svelte
                â””â”€â”€ index.ts`,
};

export const data: ComponentDoc = {
  ...meta,
  preview: Preview,
  previewCode: {
    filename: "progressive-blur.svelte",
    filecode: PreviewCode,
    lang: "svelte",
    hideLines: true,
    highlight: [2],
  },
  examples,
  seo,
  props: [
    {
      name: "ProgressiveBlur",
      desc: "A component for Progressive Blur.",
      props: [
        { name: "class", type: "string", default: '""', description: "Additional CSS classes to apply" },
      ],
    },
  ],
  installBlock,
};
