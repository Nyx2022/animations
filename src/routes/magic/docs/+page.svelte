<script lang="ts">
	import {
		H1,
		H2,
		Paragraph,
		UnorderedList,
		ListItem,
		Link,
		Strong,
	} from "$lib/components/docs/markdown";
	import * as Alert from "$lib/components/ui/alert/index.js";
	import AlertCircleIcon from "@lucide/svelte/icons/alert-circle";
	import { MetaTags } from "svelte-meta-tags";

	// Introduction
</script>

<MetaTags
	title="Introduction - Svelte Magic UI"
	description="Svelte Magic UI is a collection of re-usable components built with Svelte, Tailwind CSS and Motion SV."
	keywords={[
		"Svelte Magic UI",
		"Introduction",
		"Landing Pages",
		"Components",
		"Svelte",
		"Tailwind CSS",
		"Motion SV",
	]}
	openGraph={{
		title: "Svelte Magic UI - Introduction",
		description:
			"Svelte Magic UI is a collection of re-usable components built with Svelte, Tailwind CSS and Motion SV.",
		url: "https://sv-animations.vercel.app/og.png",
		type: "website",
	}}
	twitter={{
		title: "Svelte Magic UI - Introduction",
		description:
			"Svelte Magic UI is a collection of re-usable components built with Svelte, Tailwind CSS and Motion SV.",
		image: "https://sv-animations.vercel.app/og.png",
		cardType: "summary_large_image",
		site: "@Sikandar_Bhide",
		creator: "@Sikandar_Bhide",
	}}
></MetaTags>

<div class="flex w-full max-w-4xl items-start gap-x-8 px-4 py-6 sm:px-6 lg:pr-4 lg:pl-8">
	<div>
		<H1>Introduction</H1>

		<Paragraph>
			Create magical landing pages with components that you can copy and paste into your apps.
		</Paragraph>

		<Paragraph>
			<span class="text-primary">Svelte Magic UI</span> is a collection of re-usable components
			built with Svelte, Tailwind CSS and Motion SV.
		</Paragraph>

		<H2 class="mt-8">Features</H2>

		<UnorderedList>
			<ListItem><Strong>50+ components</Strong> ready to use in your projects</ListItem>
			<ListItem><Strong>Open source</Strong> and free forever</ListItem>
			<ListItem><Strong>Easily customizable</Strong> to match your design system</ListItem>
			<ListItem
				><Strong>Install components via Shadcn Svelte CLI</Strong> - Quick integration with your
				project</ListItem
			>
			<ListItem
				><Strong>All components include</Strong> Copy markdown, open in AI tools support</ListItem
			>
			<ListItem><Strong>TypeScript support</Strong> - Fully typed components</ListItem>
		</UnorderedList>

		<Alert.Root class="mt-6">
			<AlertCircleIcon />
			<Alert.Title>Early Access</Alert.Title>
			<Alert.Description>
				Svelte Magic UI is currently in early development. <br />
				We're building this library in the open and actively working on new components and features.
			</Alert.Description>
		</Alert.Root>

		<H2 class="mt-10">Support Our Work</H2>

		<Paragraph>
			If you find this library helpful, please consider supporting the project:
		</Paragraph>

		<UnorderedList>
			<ListItem>
				<Link href="https://github.com/sponsors/SikandarJODD" target="_blank">
					Sponsor Svelte Animations on GitHub
				</Link>
			</ListItem>
			<ListItem>
				<Link href="https://github.com/sponsors/hanielu" target="_blank">
					Sponsor Motion SV on GitHub
				</Link>{" "}
				- Motion SV is built by{" "}
				<Link href="https://github.com/hanielu" target="_blank">@hanielu</Link>
				and powers all the animations in this library
			</ListItem>
			<ListItem>
				<Link
					href="https://twitter.com/intent/tweet?text=Check%20out%20Svelte%20Animations%20%E2%80%93%20a%20collection%20of%2050%2B%20beautiful%20animated%20components%20for%20Svelte!%20https://sv-animations.vercel.app%20by%20@Sikandar_Bhide"
					target="_blank"
				>
					Share it on Twitter
				</Link>
			</ListItem>
		</UnorderedList>

		<!-- <H2 class="mt-10">Inspiration</H2>

		<Paragraph>
			This animations library is built on top of the amazing{" "}
			<Link href="https://github.com/hanielu/motion-svelte" target="_blank">Motion SV</Link>{" "}
			library by{" "}
			<Link href="https://github.com/hanielu" target="_blank">@hanielu</Link>.
		</Paragraph>

		<Paragraph>
			Please consider supporting both projects:
		</Paragraph>

		<UnorderedList>
			<ListItem>
				<Link href="https://github.com/sponsors/SikandarJODD" target="_blank">
					Sponsor Svelte Animations
				</Link>
			</ListItem>
			<ListItem>
				<Link href="https://github.com/sponsors/hanielu" target="_blank">
					Sponsor Motion SV
				</Link>
			</ListItem>
		</UnorderedList> -->
	</div>
</div>
