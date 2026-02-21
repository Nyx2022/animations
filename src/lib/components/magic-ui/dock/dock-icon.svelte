<script lang="ts" module>
	export interface DockIconProps {
		class?: string;
		children: Snippet;
	}
</script>

<script lang="ts">
	import { motion } from "motion-sv";
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";
	import { getContext } from "svelte";

	let { class: className, children }: DockIconProps = $props();

	const DEFAULT_SIZE = 40;
	const DEFAULT_MAGNIFICATION = 60;
	const DEFAULT_DISTANCE = 140;

	// Get context from parent Dock component
	const dockContext = getContext<{
		mouseX: number;
		iconSize: number;
		iconMagnification: number;
		disableMagnification: boolean;
		iconDistance: number;
	}>("dock");

	let ref: HTMLDivElement | null = $state(null);
	let size = $derived(dockContext?.iconSize ?? DEFAULT_SIZE);
	let magnification = $derived(dockContext?.iconMagnification ?? DEFAULT_MAGNIFICATION);
	let disableMagnification = $derived(dockContext?.disableMagnification ?? false);
	let distance = $derived(dockContext?.iconDistance ?? DEFAULT_DISTANCE);

	let scaleSize = $state(DEFAULT_SIZE);
	let padding = $derived(Math.max(6, size * 0.2));

	// Calculate distance from mouse and update scale
	$effect(() => {
		if (!ref || !dockContext) return;

		const mouseXValue = dockContext.mouseX;
		const bounds = ref.getBoundingClientRect();
		const distanceCalc = mouseXValue - bounds.x - bounds.width / 2;

		const targetSize = disableMagnification ? size : magnification;

		// Calculate size based on distance using smooth interpolation
		let newSize: number;
		if (Math.abs(distanceCalc) > distance) {
			newSize = size;
		} else {
			// Smooth interpolation with easing
			const factor = 1 - Math.abs(distanceCalc) / distance;
			const easedFactor = factor * factor * (3 - 2 * factor); // Smoothstep easing
			newSize = size + (targetSize - size) * easedFactor;
		}

		// Smooth transition using spring-like interpolation
		scaleSize = scaleSize + (newSize - scaleSize) * 0.2;
	});
</script>

<motion.div
	bind:ref
	style={{ width: `${scaleSize}px`, height: `${scaleSize}px`, padding: `${padding}px` }}
	class={cn(
		"flex aspect-square cursor-pointer items-center justify-center rounded-full transition-colors",
		disableMagnification && "hover:bg-muted-foreground",
		className
	)}
>
	<div>
		{@render children()}
	</div>
</motion.div>
