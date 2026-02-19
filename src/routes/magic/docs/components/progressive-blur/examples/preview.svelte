<script>
	import { ProgressiveBlur } from "$lib/components/magic-ui/progressive-blur";
	import { ScrollArea } from "$lib/components/ui/scroll-area";
</script>

<div class="relative w-full rounded-xl border">
	<ScrollArea fadeEffect={false} class="relative h-[400px] overflow-hidden">
		<div class="flex flex-col gap-2 p-4">
			<!-- {Array.from({ length: 20 }).map((_, index) => ( -->
			{#each { length: 20 } as _, index}
				<div class="bg-card flex h-20 w-full items-center justify-center rounded-xl border">
					{index}
				</div>
			{/each}
		</div>
		<ProgressiveBlur position="bottom" height="40%" />
	</ScrollArea>
</div>
