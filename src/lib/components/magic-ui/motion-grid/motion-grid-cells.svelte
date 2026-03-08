<script lang="ts">
	import { motion } from "motion-sv";
	import { cn } from "$lib/utils";
	import { useMotionGridContext } from "./use-motion-grid-context.svelte";
	import type { MotionGridCellMotionProps, MotionGridCellsProps } from "./types";

	type StyleValue = MotionGridCellMotionProps["style"];

	function mergeStyles(baseStyle: StyleValue, variantStyle: StyleValue): StyleValue {
		return {
			...(baseStyle ?? {}),
			...(variantStyle ?? {}),
		};
	}

	let { activeProps, inactiveProps, ...props }: MotionGridCellsProps = $props();

	const context = useMotionGridContext();

	const animate = $derived(context.animate());
	const index = $derived(context.index());
	const cols = $derived(context.cols());
	const rows = $derived(context.rows());
	const frames = $derived(context.frames());
	const duration = $derived(context.duration());

	const active = $derived.by(() => {
		return new Set<number>(frames[index]?.map(([x, y]) => y * cols + x) ?? []);
	});

	const totalCells = $derived(cols * rows);

	const baseClass = $derived(props.class);
	const baseStyle = $derived(props.style as StyleValue);
	const baseProps = $derived.by(() => {
		const { class: _class, style: _style, ...rest } = props;
		return rest;
	});
</script>

{#each Array.from({ length: totalCells }) as _, i (i)}
	{@const isActive = active.has(i)}
	{@const variantProps = (isActive ? activeProps : inactiveProps) ?? {}}
	{@const variantClass = variantProps.class}
	{@const variantStyle = variantProps.style}
	{@const mergedClass = cn(baseClass, variantClass)}
	{@const mergedStyle = mergeStyles(baseStyle, variantStyle as StyleValue)}
	{@const restVariantProps = { ...variantProps, class: mergedClass, style: mergedStyle }}

	<motion.div
		data-active={isActive}
		data-animate={animate}
		transition={{ duration, ease: "easeInOut" }}
		{...baseProps}
		{...restVariantProps}
	/>
{/each}
