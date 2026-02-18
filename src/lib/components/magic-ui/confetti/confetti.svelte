<script lang="ts">
  import { confetti as neoconfetti } from "@neoconfetti/svelte";
  import type { ConfettiOptions } from "@neoconfetti/svelte";
  import type { Snippet } from "svelte";

  interface ConfettiProps {
    /** Whether to trigger confetti automatically */
    manualstart?: boolean;
    /** Confetti configuration options */
    options?: Partial<ConfettiOptions>;
    /** Additional CSS classes */
    class?: string;
    /** Children content */
    children?: Snippet;
  }

  let {
    manualstart = false,
    options = {},
    class: className = "",
    children,
  }: ConfettiProps = $props();

  let isActive = $state(false);

  $effect(() => {
    if (!manualstart) {
      isActive = true;
    }
  });

  // Default options
  const defaultOptions: Partial<ConfettiOptions> = {
    particleCount: 50,
    force: 0.5,
    stageHeight: 800,
    stageWidth: 1600,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
  };

  const mergedOptions = $derived({ ...defaultOptions, ...options });

  /** Fire confetti programmatically */
  export function fire(customOptions?: Partial<ConfettiOptions>) {
    isActive = false;
    setTimeout(() => {
      isActive = true;
    }, 10);
  }
</script>

<div class={className}>
  {#if isActive}
    <div use:neoconfetti={mergedOptions}></div>
  {/if}
  {#if children}
    {@render children()}
  {/if}
</div>

