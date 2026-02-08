<script lang="ts">
  import { onMount } from "svelte";
  import { motion, AnimatePresence } from "motion-sv";
  import { cn } from "$lib/utils";

  type ElementType =
    | "div"
    | "span"
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";

  interface MotionProps {
    initial?: Record<string, any>;
    animate?: Record<string, any>;
    exit?: Record<string, any>;
    transition?: Record<string, any>;
  }

  interface WordRotateProps {
    /** Array of words to rotate through */
    words: string[];
    /** Duration between word changes in milliseconds */
    duration?: number;
    /** Motion animation properties */
    motionProps?: MotionProps;
    /** Optional className for styling */
    class?: string;
    /** Component to render as - defaults to h1 */
    as?: ElementType;
  }

  let {
    words,
    duration = 2500,
    motionProps = {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 },
      transition: { duration: 0.25, ease: "easeOut" },
    },
    class: className,
    as = "h1",
  }: WordRotateProps = $props();

  let MotionComponent = $derived(motion[as]);

  let index = $state(0);

  onMount(() => {
    const interval = setInterval(() => {
      index = (index + 1) % words.length;
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  });
</script>

<div class="overflow-hidden py-2">
  <AnimatePresence mode="wait">
    {#key words[index]}
      <MotionComponent
        class={cn(className)}
        initial={motionProps.initial}
        animate={motionProps.animate}
        exit={motionProps.exit}
        transition={motionProps.transition}
      >
        {words[index]}
      </MotionComponent>
    {/key}
  </AnimatePresence>
</div>

