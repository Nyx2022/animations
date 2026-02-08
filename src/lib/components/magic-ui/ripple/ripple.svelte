<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	interface RippleProps extends HTMLAttributes<HTMLDivElement> {
		/**
		 * The size of the main circle
		 */
		mainCircleSize?: number;
		/**
		 * The opacity of the main circle
		 */
		mainCircleOpacity?: number;
		/**
		 * The number of ripple circles
		 */
		numCircles?: number;
		/**
		 * Additional CSS classes
		 */
		class?: string;
	}

	let {
		mainCircleSize = 210,
		mainCircleOpacity = 0.24,
		numCircles = 8,
		class: className,
		...props
	}: RippleProps = $props();
</script>

<div
	class={cn(
		"pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent)] select-none",
		className
	)}
	{...props}
>
	{#each Array.from({ length: numCircles }) as _, i}
		{@const size = mainCircleSize + i * 70}
		{@const opacity = mainCircleOpacity - i * 0.03}
		{@const animationDelay = `${i * 0.06}s`}
		<div
			class="animate-ripple bg-foreground/25 absolute rounded-full border shadow-xl"
			style:--i={i}
			style:width="{size}px"
			style:height="{size}px"
			style:opacity
			style:animation-delay={animationDelay}
			style:border-style="solid"
			style:border-width="1px"
			style:border-color="var(--foreground)"
			style:top="50%"
			style:left="50%"
			style:transform="translate(-50%, -50%) scale(1)"
		/>
	{/each}
</div>
