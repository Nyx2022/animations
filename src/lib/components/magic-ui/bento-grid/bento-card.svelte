<script lang="ts">
  import { motion } from "motion-sv";
  import { cn } from "$lib/utils";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import type { Component } from "svelte";

  interface BentoCardProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
    className?: string;
    background: Snippet;
    Icon: Component<any>;
    description: string;
    href: string;
    cta: string;
  }

  let {
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
    ...props
  }: BentoCardProps = $props();
</script>

<div
  class={cn(
    "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
    // light styles
    "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
    // dark styles
    "dark:bg-background transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
    className
  )}
  {...props}
>
  <div>{@render background()}</div>
  <div class="p-4">
    <motion.div
      class="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10"
      animate={{ y: 0 }}
      whileHover={{ y: -40 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        animate={{ scale: 1 }}
        whileHover={{ scale: 0.75 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        class="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out"
      >
        <Icon class="h-12 w-12" />
      </motion.div>
      <h3 class="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
        {name}
      </h3>
      <p class="max-w-lg text-neutral-400">{description}</p>
    </motion.div>

    <div
      class={cn(
        "pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden"
      )}
    >
      <a
        {href}
        class="pointer-events-auto p-0 text-sm font-medium underline-offset-4 hover:underline inline-flex items-center gap-2"
      >
        {cta}
        <svg
          class="ms-2 h-4 w-4 rtl:rotate-180"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>
  </div>

  <motion.div
    class={cn(
      "pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex"
    )}
    initial={{ y: 40, opacity: 0 }}
    whileHover={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <a
      {href}
      class="pointer-events-auto p-0 text-sm font-medium underline-offset-4 hover:underline inline-flex items-center gap-2"
    >
      {cta}
      <svg
        class="ms-2 h-4 w-4 rtl:rotate-180"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </motion.div>

  <div class="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10"></div>
</div>

