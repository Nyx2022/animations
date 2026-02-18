import LensRaw from "$lib/components/magic-ui/lens/lens.svelte?raw";
import IndexTs from "$lib/components/magic-ui/lens/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
  id: "lens",
  title: "Lens",
  description: "A description for Lens component.",
  category: "animation",
  badge: "new",
};

const examples: Example[] = [
];

const seo: SEO = {
  title: "Lens",
  description: "Learn how to create Lens effects in Svelte using the Svelte 5 Animations library.",
  keywords: ["Svelte", "Lens", "Svelte 5 Animations", "Animation", "Web Design"],
};

let installBlock : InstallComponentDocs={
  installCode:[
    {
      filename: "lens.svelte",
      filecode: LensRaw,
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
            â””â”€â”€ lens/
                â”œâ”€â”€ lens.svelte
                â””â”€â”€ index.ts`,
};

export const data: ComponentDoc = {
  ...meta,
  preview: Preview,
  previewCode: {
    filename: "lens.svelte",
    filecode: PreviewCode,
    lang: "svelte",
    hideLines: true,
    highlight: [2],
  },
  examples,
  seo,
  props: [
    {
      name: "Lens",
      desc: "A component for Lens.",
      props: [
        { name: "class", type: "string", default: '""', description: "Additional CSS classes to apply" },
      ],
    },
  ],
  installBlock,
};
