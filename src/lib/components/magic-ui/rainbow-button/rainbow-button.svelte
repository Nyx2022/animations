<script lang="ts">
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";

	interface RainbowButtonProps extends HTMLButtonAttributes {
		/**
		 * Button content
		 */
		children: Snippet;
		/**
		 * Additional CSS classes
		 */
		class?: string;
		/**
		 * Button variant
		 */
		variant?: "default" | "outline";
		/**
		 * Button size
		 */
		size?: "default" | "sm" | "lg" | "icon";
	}

	let {
		children,
		class: className,
		variant = "default",
		size = "default",
		...props
	}: RainbowButtonProps = $props();

	const baseClasses = cn(
		"group animate-rainbow relative cursor-pointer transition-all",
		"inline-flex shrink-0 items-center justify-center gap-2",
		"aria-invalid:border-destructive rounded-sm outline-none focus-visible:ring-[3px]",
		"text-sm font-medium whitespace-nowrap",
		"disabled:pointer-events-none disabled:opacity-50",
		"[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
	);

	const variantClasses = $derived(
		variant === "default"
			? "border-0 bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] bg-[length:200%] text-primary-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.125rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] before:[filter:blur(0.75rem)] dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]"
			: "border border-input border-b-transparent bg-[linear-gradient(#ffffff,#ffffff),linear-gradient(#ffffff_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] bg-[length:200%] text-accent-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] before:[filter:blur(0.75rem)] dark:bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(#0a0a0a_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]"
	);

	const sizeClasses = $derived(
		size === "sm"
			? "h-8 rounded-xl px-3 text-xs"
			: size === "lg"
				? "h-11 rounded-xl px-8"
				: size === "icon"
					? "size-9"
					: "h-9 px-4 py-2"
	);
</script>

<button
	data-slot="button"
	class={cn(baseClasses, variantClasses, sizeClasses, className)}
	{...props}
>
	{@render children()}
</button>
