<script lang="ts">
  import { cn } from "$lib/utils";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  interface OrbitingCirclesProps extends HTMLAttributes<HTMLDivElement> {
    children: Snippet;
    class?: string;
    reverse?: boolean;
    duration?: number;
    radius?: number;
    path?: boolean;
    iconSize?: number;
    speed?: number;
    angle?: number;
  }

  let {
    children,
    class: className,
    reverse = false,
    duration = 20,
    radius = 160,
    path = false,
    iconSize = 30,
    speed = 1,
    angle = 0,
    ...props
  }: OrbitingCirclesProps = $props();

  const calculatedDuration = $derived(duration / speed);
</script>

<div
  style:--duration={calculatedDuration}
  style:--radius={radius}
  style:--angle={angle}
  style:--icon-size="{iconSize}px"
  class={cn(
    "animate-orbit absolute flex size-[var(--icon-size)] transform-gpu items-center justify-center rounded-full",
    { "[animation-direction:reverse]": reverse },
    className
  )}
  {...props}
>
  {@render children()}
</div>


