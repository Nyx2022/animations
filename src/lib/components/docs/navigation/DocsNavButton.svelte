<script lang="ts">
  import { cn } from "$lib/utils";
  import { ChevronLeftIcon, ChevronRightIcon } from "@lucide/svelte";

  type ComponentProps = {
    label: string;
    title: string;
    href: string;
    align?: "left" | "right";
    forceSecondColumn?: boolean;
  };

  const {
    label,
    title,
    href,
    align = "left",
    forceSecondColumn = false,
    ...rest
  }: ComponentProps = $props();
</script>

<a
  {href}
  {...rest}
  class={cn(
    "group relative flex flex-col rounded-lg border border-border bg-background hover:bg-muted/50 px-4 py-3 shadow-sm transition-[background-color] duration-150 ease-out",
    forceSecondColumn && "col-start-2",
  )}
>
  <div class={cn("flex items-start gap-1", align === "right" && "justify-end")}>
    {#if align === "left"}
      <span>
        <ChevronLeftIcon
          class="h-4 w-4 text-foreground/50 group-hover:text-foreground transition-colors duration-150 ease-out mt-0.5"
        />
      </span>
    {/if}
    <div class={cn("flex flex-col", align === "right" && "text-right")}>
      <span class="text-sm text-foreground py-0 my-0">
        {title}
      </span>
      <span
        class={[
          "mt-1 text-sm line-clamp-1 text-foreground/45",
          align === "left" && "pr-2",
        ]}
      >
        {label}
      </span>
    </div>
    {#if align === "right"}
      <span>
        <ChevronRightIcon
          class="h-4 w-4 text-foreground/50 group-hover:text-foreground transition-colors duration-150 ease-out mt-0.5"
        />
      </span>
    {/if}
  </div>
</a>
