import ShineBorderRaw from "$lib/components/magic-ui/shine-border/shine-border.svelte?raw";
import IndexTs from "$lib/components/magic-ui/shine-border/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import Example1 from "./examples/shine-border-example-1.svelte";
import Example1Raw from "./examples/shine-border-example-1.svelte?raw";
import Example2 from "./examples/shine-border-example-2.svelte";
import Example2Raw from "./examples/shine-border-example-2.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
  id: "shine-border",
  title: "ShineBorder",
  description: "A description for ShineBorder component.",
  category: "animation",
  badge: "new",
};

const examples: Example[] = [
  {
    name: "Example 1",
    preview: Example1,
    code: {
      filename: "shine-border-example-1.svelte",
      filecode: Example1Raw,
      lang: "svelte",
    },
  },
  {
    name: "Example 2",
    preview: Example2,
    code: {
      filename: "shine-border-example-2.svelte",
      filecode: Example2Raw,
      lang: "svelte",
    },
  },
];

const seo: SEO = {
  title: " - Svelte 5 Animations",
  description: "Learn how to create  effects in Svelte using the Svelte 5 Animations library.",
  keywords: ["Svelte", "", "Svelte 5 Animations", "Animation", "Web Design"],
};

let installBlock : InstallComponentDocs={
  installCode:[
    {
      filename: "shine-border.svelte",
      filecode: ShineBorderRaw,
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
└── lib/
    └── components/
        └── magic-ui/
            └── shine-border/
                ├── shine-border.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
  ...meta,
  preview: Preview,
  previewCode: {
    filename: "shine-border.svelte",
    filecode: PreviewCode,
    lang: "svelte",
    hideLines: true,
    highlight: [2],
  },
  examples,
  seo,
  props: [
    {
      name: "ShineBorder",
      desc: "A component for ShineBorder.",
      props: [
        { name: "class", type: "string", default: '""', description: "Additional CSS classes to apply" },
      ],
    },
  ],
  installBlock,
};
