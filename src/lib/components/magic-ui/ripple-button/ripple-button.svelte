<script lang="ts">
  import { onMount } from "svelte";
  import { cn } from "$lib/utils";
  import type { Snippet } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";

  interface RippleButtonProps extends HTMLButtonAttributes {
    /**
     * Button content
     */
    children: Snippet;
    /**
     * Additional CSS classes
     */
    class?: string;
    /**
     * Ripple color
     */
    rippleColor?: string;
    /**
     * Animation duration
     */
    duration?: string;
  }

  let {
    class: className,
    children,
    rippleColor = "#ffffff",
    duration = "600ms",
    onclick,
    ...props
  }: RippleButtonProps = $props();

  let buttonRipples = $state<
    Array<{ x: number; y: number; size: number; key: number }>
  >([]);

  const handleClick = (event: MouseEvent & { currentTarget: HTMLButtonElement }) => {
    createRipple(event);
    onclick?.(event);
  };

  const createRipple = (event: MouseEvent & { currentTarget: HTMLButtonElement }) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = { x, y, size, key: Date.now() };
    buttonRipples = [...buttonRipples, newRipple];
  };

  $effect(() => {
    if (buttonRipples.length > 0) {
      const lastRipple = buttonRipples[buttonRipples.length - 1];
      const timeout = setTimeout(() => {
        buttonRipples = buttonRipples.filter((ripple) => ripple.key !== lastRipple.key);
      }, parseInt(duration));
      return () => clearTimeout(timeout);
    }
  });
</script>

<button
  class={cn(
    "bg-background text-primary relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 px-4 py-2 text-center",
    className
  )}
  onclick={handleClick}
  {...props}
>
  <div class="relative z-10">
    {@render children()}
  </div>
  <span class="pointer-events-none absolute inset-0">
    {#each buttonRipples as ripple (ripple.key)}
      <span
        class="animate-rippling bg-background absolute rounded-full opacity-30"
        style="
          width: {ripple.size}px;
          height: {ripple.size}px;
          top: {ripple.y}px;
          left: {ripple.x}px;
          background-color: {rippleColor};
          transform: scale(0);
        "
      />
    {/each}
  </span>
</button>

