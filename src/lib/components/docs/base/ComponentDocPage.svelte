<script lang="ts" module>
	import type { Component } from "svelte";
	import type { SEO } from "$lib/types/seo";
	import type { Example } from "$lib/types/examples";
	import type { PropsTable } from "$lib/types/structure";
	import type { CodeBlock } from "$lib/components/ui/code";

	export type ComponentDocPageProps = {
		id: string;
		title: string;
		description: string;
		seo: SEO;
		preview?: Component;
		previewCode?: CodeBlock | CodeBlock[];
		installCodeBlocks?: CodeBlock | CodeBlock[];
		installPackages?: string[];
		installFolderStructure?: string;
		installTailwindCode?: CodeBlock;
		examples?: Example[];
		propsTables?: PropsTable[];
		descriptionClass?: string;
	};
</script>

<script lang="ts">
	import { page } from "$app/state";
	import { H1, H2, Paragraph, H3 } from "$lib/components/docs/markdown/index";
	import { PreviewComponent } from "$lib/components/ui/preview-component";
	import InstallComponent from "$lib/components/docs/base/InstallComponent.svelte";
	import PackageBadges from "$lib/components/docs/base/PackageBadges.svelte";
	import APITable from "$lib/components/docs/base/APITable.svelte";
	import { CopyPageDropdown } from "$lib/components/docs/copy-page-dropdown";
	import SEOComponent from "$lib/seo/SEO.svelte";

	let {
		id,
		title,
		description,
		seo,
		preview,
		previewCode,
		installCodeBlocks,
		installPackages = [],
		installFolderStructure,
		installTailwindCode,
		examples = [],
		propsTables = [],
		descriptionClass = "",
	}: ComponentDocPageProps = $props();

	let PreviewComp = $derived(preview);
	let installUrl = $derived(`${page.url.origin}/r/${id}.json`);
	let llmsTxtUrl = $derived(`${page.url}/llms.txt`);
</script>

<SEOComponent title={seo.title} description={seo.description} keywords={seo.keywords} />
<div>
	<div class="flex flex-col justify-between gap-4 md:flex-row md:items-center">
		<H1 id="introduction">{title}</H1>
		<CopyPageDropdown componentName={title} {llmsTxtUrl} />
	</div>
	<Paragraph class={descriptionClass}>
		{description}
	</Paragraph>
	<PackageBadges packages={installPackages} />

	<div class="my-6">
		<PreviewComponent code={previewCode}>
			{#if PreviewComp}
				<PreviewComp />
			{/if}
		</PreviewComponent>
	</div>

	<H2 id="installation">Installation</H2>
	<InstallComponent
		{installUrl}
		tailwindConfig={installTailwindCode ? { code: installTailwindCode } : undefined}
		codeBlocks={installCodeBlocks}
		packages={installPackages}
		folderStructure={installFolderStructure}
		class="my-4"
	/>

	{#if examples.length > 0}
		<H2 id="examples">Examples</H2>
		{#each examples as example}
			<div class="my-6">
				<H3 id={example.name.toLowerCase().replace(/\s+/g, "-")}>{example.name}</H3>
				<PreviewComponent code={example.code}>
					<example.preview />
				</PreviewComponent>
			</div>
		{/each}
	{/if}

	{#if propsTables.length > 0}
		<H2 id="props">Props</H2>
		{#each propsTables as prop}
			<APITable data={prop} />
		{/each}
	{/if}
</div>
