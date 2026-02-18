<script lang="ts">
  import { confetti } from "@neoconfetti/svelte";
  import type { ConfettiOptions } from "@neoconfetti/svelte";
  import type { Snippet } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";

  interface ConfettiButtonProps extends HTMLButtonAttributes {
    /** Confetti configuration options */
    options?: Partial<ConfettiOptions>;
    /** Children content */
    children?: Snippet;
    /** Additional CSS classes */
    class?: string;
  }

  let {
    options = {},
    children,
    class: className = "",
    onclick,
    ...props
  }: ConfettiButtonProps = $props();

  let isActive = $state(false);

  // Default options
  const defaultOptions: Partial<ConfettiOptions> = {
    particleCount: 50,
    force: 0.5,
    stageHeight: 800,
    stageWidth: 1600,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
  };

  const mergedOptions = $derived({ ...defaultOptions, ...options });

  function handleClick(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
    isActive = false;
    setTimeout(() => {
      isActive = true;
    }, 10);

    onclick?.(event);
  }
</script>

<button
  class={cn(
    "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold",
    className
  )}
  onclick={handleClick}
  {...props}
>
  {#if isActive}
    <div use:confetti={mergedOptions}></div>
  {/if}
  {#if children}
    {@render children()}
  {:else}
    Click Me!
  {/if}
</button>

