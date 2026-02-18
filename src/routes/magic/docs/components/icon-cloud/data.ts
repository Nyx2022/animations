import IconCloudRaw from "$lib/components/magic-ui/icon-cloud/icon-cloud.svelte?raw";
import IndexTs from "$lib/components/magic-ui/icon-cloud/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
  id: "icon-cloud",
  title: "Icon Cloud",
  description: "A description for Icon Cloud component.",
  category: "animation",
  badge: "new",
};

const examples: Example[] = [
];

const seo: SEO = {
  title: "Icon Cloud",
  description: "Learn how to create Icon Cloud effects in Svelte using the Svelte 5 Animations library.",
  keywords: ["Svelte", "Icon Cloud", "Svelte 5 Animations", "Animation", "Web Design"],
};

let installBlock : InstallComponentDocs={
  installCode:[
    {
      filename: "icon-cloud.svelte",
      filecode: IconCloudRaw,
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
            â””â”€â”€ icon-cloud/
                â”œâ”€â”€ icon-cloud.svelte
                â””â”€â”€ index.ts`,
};

export const data: ComponentDoc = {
  ...meta,
  preview: Preview,
  previewCode: {
    filename: "icon-cloud.svelte",
    filecode: PreviewCode,
    lang: "svelte",
    hideLines: true,
    highlight: [2],
  },
  examples,
  seo,
  props: [
    {
      name: "IconCloud",
      desc: "A component for Icon Cloud.",
      props: [
        { name: "class", type: "string", default: '""', description: "Additional CSS classes to apply" },
      ],
    },
  ],
  installBlock,
};
