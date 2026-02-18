<script lang="ts" module>
  export interface DockProps {
    class?: string;
    iconSize?: number;
    iconMagnification?: number;
    disableMagnification?: boolean;
    iconDistance?: number;
    direction?: "top" | "middle" | "bottom";
    children: Snippet;
  }
</script>

<script lang="ts">
  import { motion } from "motion-sv";
  import { cn } from "$lib/utils";
  import type { Snippet } from "svelte";
  import { setContext } from "svelte";

  const DEFAULT_SIZE = 40;
  const DEFAULT_MAGNIFICATION = 60;
  const DEFAULT_DISTANCE = 140;
  const DEFAULT_DISABLEMAGNIFICATION = false;

  let {
    class: className,
    children,
    iconSize = DEFAULT_SIZE,
    iconMagnification = DEFAULT_MAGNIFICATION,
    disableMagnification = DEFAULT_DISABLEMAGNIFICATION,
    iconDistance = DEFAULT_DISTANCE,
    direction = "middle",
  }: DockProps = $props();

  let mouseX = $state(Infinity);

  // Provide context to child DockIcon components
  setContext("dock", {
    get mouseX() { return mouseX; },
    get iconSize() { return iconSize; },
    get iconMagnification() { return iconMagnification; },
    get disableMagnification() { return disableMagnification; },
    get iconDistance() { return iconDistance; },
  });

  const handleMouseMove = (e: MouseEvent) => {
    mouseX = e.pageX;
  };

  const handleMouseLeave = () => {
    mouseX = Infinity;
  };
</script>

<motion.div
  onmousemove={handleMouseMove}
  onmouseleave={handleMouseLeave}
  class={cn(
    "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max items-center justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md",
    {
      "items-start": direction === "top",
      "items-center": direction === "middle",
      "items-end": direction === "bottom",
    },
    className
  )}
>
  {@render children()}
</motion.div>

