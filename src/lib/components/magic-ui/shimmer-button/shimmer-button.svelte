<script lang="ts">
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";

	interface ShimmerButtonProps extends HTMLButtonAttributes {
		/**
		 * Button content
		 */
		children: Snippet;
		/**
		 * Additional CSS classes
		 */
		class?: string;
		/**
		 * Shimmer color
		 */
		shimmerColor?: string;
		/**
		 * Shimmer size
		 */
		shimmerSize?: string;
		/**
		 * Border radius
		 */
		borderRadius?: string;
		/**
		 * Shimmer duration
		 */
		shimmerDuration?: string;
		/**
		 * Background color
		 */
		background?: string;
	}

	let {
		children,
		class: className,
		shimmerColor = "#ffffff",
		shimmerSize = "0.05em",
		shimmerDuration = "3s",
		borderRadius = "100px",
		background = "rgba(0, 0, 0, 1)",
		...props
	}: ShimmerButtonProps = $props();

	const buttonStyle = $derived({
		"--spread": "90deg",
		"--shimmer-color": shimmerColor,
		"--radius": borderRadius,
		"--speed": shimmerDuration,
		"--cut": shimmerSize,
		"--bg": background,
	} as any);
</script>

<button
	style={buttonStyle}
	class={cn(
		"group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] border border-white/10 px-6 py-3 whitespace-nowrap text-white [background:var(--bg)]",
		"transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
		className
	)}
	{...props}
>
	<!-- spark container -->
	<div class={cn("-z-30 blur-[2px]", "[container-type:size] absolute inset-0 overflow-visible")}>
		<!-- spark -->
		<div
			class="animate-shimmer-slide absolute inset-0 [aspect-ratio:1] h-[100cqh] [border-radius:0] [mask:none]"
		>
			<!-- spark before -->
			<div
				class="animate-spin-around absolute -inset-full w-auto [translate:0_0] rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]"
			/>
		</div>
	</div>
	{@render children()}

	<!-- Highlight -->
	<div
		class={cn(
			"absolute inset-0 size-full",

			"rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",

			// transition
			"transform-gpu transition-all duration-300 ease-in-out",

			// on hover
			"group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",

			// on click
			"group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
		)}
	/>

	<!-- backdrop -->
	<div
		class={cn(
			"absolute [inset:var(--cut)] -z-20 [border-radius:var(--radius)] [background:var(--bg)]"
		)}
	/>
</button>
