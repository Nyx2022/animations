<script lang="ts">
  import { motion, type Transition } from "motion-sv";
  import { cn } from "$lib/utils";

  interface BorderBeamProps {
    /**
     * The size of the border beam.
     */
    size?: number;
    /**
     * The duration of the border beam.
     */
    duration?: number;
    /**
     * The delay of the border beam.
     */
    delay?: number;
    /**
     * The color of the border beam from.
     */
    colorFrom?: string;
    /**
     * The color of the border beam to.
     */
    colorTo?: string;
    /**
     * The motion transition of the border beam.
     */
    transition?: Transition;
    /**
     * The class name of the border beam.
     */
    class?: string;
    /**
     * The style of the border beam.
     */
    style?: string;
    /**
     * Whether to reverse the animation direction.
     */
    reverse?: boolean;
    /**
     * The initial offset position (0-100).
     */
    initialOffset?: number;
    /**
     * The border width of the beam.
     */
    borderWidth?: number;
  }

  let {
    class: className,
    size = 50,
    delay = 0,
    duration = 6,
    colorFrom = "#ffaa40",
    colorTo = "#9c40ff",
    transition,
    reverse = false,
    initialOffset = 0,
    borderWidth = 1,
  }: BorderBeamProps = $props();

  const containerStyle = $derived(`--border-beam-width: ${borderWidth}px;`);

  const beamStyle = $derived({
    width: size,
    offsetPath: `rect(0 auto auto 0 round ${size}px)`,
    "--color-from": colorFrom,
    "--color-to": colorTo,
  } as any);

  const animateConfig = $derived({
    offsetDistance: reverse
      ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
      : [`${initialOffset}%`, `${100 + initialOffset}%`],
  });

  const transitionConfig = $derived({
    repeat: Infinity,
    ease: "linear" as const,
    duration,
    delay: -delay,
    ...transition,
  } as any);
</script>

<div
  class="pointer-events-none absolute inset-0 rounded-[inherit] border-(length:--border-beam-width) border-transparent mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)] mask-intersect [mask-clip:padding-box,border-box]"
  style={containerStyle}
>
  <motion.div
    class={cn(
      "absolute aspect-square",
      "bg-linear-to-l from-(--color-from) via-(--color-to) to-transparent",
      className
    )}
    style={beamStyle}
    initial={{ offsetDistance: `${initialOffset}%` }}
    animate={animateConfig}
    transition={transitionConfig}
  />
</div>

