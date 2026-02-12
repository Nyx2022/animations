export type BadgeType = "New" | "Updated" | "Beta";

export interface MagicComponent {
	id: string;
	name: string;
	href: string;
	badge?: BadgeType;
	desc?: string;
}

export const magicUIComponents: MagicComponent[] = [
	{
		id: "animated-beam",
		name: "Animated Beam",
		href: "/magic/docs/components/animated-beam",
		desc: "An animated beam of light which travels along a path.",
	},
	{
		id: "animated-circular-progress-bar",
		name: "Animated Circular Progress Bar",
		href: "/magic/docs/components/animated-circular-progress-bar",
		desc: "A component that displays a circular gauge with a percentage value",
	},
	{
		id: "animated-gradient-text",
		name: "Animated Gradient Text",
		href: "/magic/docs/components/animated-gradient-text",
		desc: "An animated gradient background which transitions between colors for text.",
	},
	{
		id: "animated-grid-pattern",
		name: "Animated Grid Pattern",
		href: "/magic/docs/components/animated-grid-pattern",
		desc: "A animated background grid pattern made with SVGs, fully customizable using Tailwind CSS.",
	},
	{
		id: "animated-list",
		name: "Animated List",
		href: "/magic/docs/components/animated-list",
		desc: "A component that animates list items with staggered entrance animations.",
	},
	{
		id: "animated-shiny-text",
		name: "Animated Shiny Text",
		href: "/magic/docs/components/animated-shiny-text",
		desc: "A text component with an animated shiny/shimmer effect that travels across the text.",
	},
	{
		id: "animated-theme-toggler",
		name: "Animated Theme Toggler",
		href: "/magic/docs/components/animated-theme-toggler",
		desc: "An Animated theme toggler component, fully customizable using Tailwind CSS.",
	},
	{
		id: "aurora-text",
		name: "Aurora Text",
		href: "/magic/docs/components/aurora-text",
		desc: "A text component with an animated aurora/northern lights effect.",
	},
	{
		id: "avatar-circles",
		name: "Avatar Circles",
		href: "/magic/docs/components/avatar-circles",
		desc: "A component to display overlapping avatar circles, commonly used for showing multiple users.",
	},
	{
		id: "blur-fade",
		name: "Blur Fade",
		href: "/magic/docs/components/blur-fade",
		desc: "Blur fade in and out animation. Used to smoothly fade in and out content.",
	},
	{
		id: "border-beam",
		name: "Border Beam",
		href: "/magic/docs/components/border-beam",
		desc: "An animated beam of light which travels along the border of its container.",
	},
	{
		id: "cool-mode",
		name: "Cool Mode",
		href: "/magic/docs/components/cool-mode",
		desc: "Add a fun particle effect that follows mouse interactions, with support for emojis, images, and custom shapes.",
	},
	{
		id: "dot-pattern",
		name: "Dot Pattern",
		href: "/magic/docs/components/dot-pattern",
		desc: "A customizable dot pattern background component with optional glow animations and mask effects.",
	},
	{
		id: "dotted-map",
		name: "Dotted Map",
		href: "/magic/docs/components/dotted-map",
		desc: "A component for creating dotted map with custom dots and lines.",
	},
	{
		id: "file-tree",
		name: "File Tree",
		href: "/magic/docs/components/file-tree",
		desc: "A component for creating file tree views with folder and file icons.",
	},
	{
		id: "flickering-grid",
		name: "Flickering Grid",
		href: "/magic/docs/components/flickering-grid",
		badge: "Beta",
		desc: "",
	},
	{
		id: "grid-pattern",
		name: "Grid Pattern",
		href: "/magic/docs/components/grid-pattern",
		badge: "Beta",
		desc: "",
	},
	{
		id: "hero-video-dialog",
		name: "Hero Video Dialog",
		href: "/magic/docs/components/hero-video-dialog",
		badge: "Beta",
		desc: "",
	},
	{
		id: "hyper-text",
		name: "Hyper Text",
		href: "/magic/docs/components/hyper-text",
		badge: "Beta",
		desc: "",
	},
	{
		id: "interactive-hover-button",
		name: "Interactive Hover Button",
		href: "/magic/docs/components/interactive-hover-button",
		badge: "Beta",
		desc: "",
	},
	{
		id: "light-rays",
		name: "Light Rays",
		href: "/magic/docs/components/light-rays",
		badge: "Beta",
		desc: "",
	},
	{
		id: "line-shadow-text",
		name: "Line Shadow Text",
		href: "/magic/docs/components/line-shadow-text",
		badge: "Beta",
		desc: "",
	},
	{
		id: "marquee",
		name: "Marquee",
		href: "/magic/docs/components/marquee",
		badge: "New",
		desc: "An infinite scrolling component that can be used to display text, images, or videos.",
	},
	{
		id: "morphing-text",
		name: "Morphing Text",
		href: "/magic/docs/components/morphing-text",
		badge: "Beta",
		desc: "",
	},
	{
		id: "neon-gradient-card",
		name: "Neon Gradient Card",
		href: "/magic/docs/components/neon-gradient-card",
		badge: "Beta",
		desc: "",
	},
	{
		id: "number-ticker",
		name: "Number Ticker",
		href: "/magic/docs/components/number-ticker",
		badge: "Beta",
		desc: "",
	},
	{
		id: "pixel-image",
		name: "Pixel Image",
		href: "/magic/docs/components/pixel-image",
		badge: "New",
		desc: "A component that displays your image with a pixelated effect, enhancing the visual appeal of any image in your website.",
	},
	{
		id: "pulsating-button",
		name: "Pulsating Button",
		href: "/magic/docs/components/pulsating-button",
		badge: "Beta",
		desc: "",
	},
	{
		id: "rainbow-button",
		name: "Rainbow Button",
		href: "/magic/docs/components/rainbow-button",
		badge: "Beta",
		desc: "",
	},
	{
		id: "ripple",
		name: "Ripple",
		href: "/magic/docs/components/ripple",
		badge: "Beta",
		desc: "",
	},
	{
		id: "ripple-button",
		name: "Ripple Button",
		href: "/magic/docs/components/ripple-button",
		badge: "Beta",
		desc: "",
	},
	{
		id: "scroll-progress",
		name: "Scroll Progress",
		href: "/magic/docs/components/scroll-progress",
		badge: "Beta",
		desc: "",
	},
	{
		id: "shimmer-button",
		name: "Shimmer Button",
		href: "/magic/docs/components/shimmer-button",
		badge: "Beta",
		desc: "",
	},
	{
		id: "shine-border",
		name: "Shine Border",
		href: "/magic/docs/components/shine-border",
		badge: "New",
		desc: "Shine border is an animated background border effect.",
	},
	// {
	// 	id: "shiny-button",
	// 	name: "Shiny Button",
	// 	href: "/magic/docs/components/shiny-button",
	// 	badge: "Beta",
	// 	desc: "",
	// },
	{
		id: "striped-pattern",
		name: "Striped Pattern",
		href: "/magic/docs/components/striped-pattern",
		badge: "New",
		desc: "A background striped pattern made with SVGs, fully customizable using Tailwind CSS.",
	},
	// {
	// 	id: "terminal",
	// 	name: "Terminal",
	// 	href: "/magic/docs/components/terminal",
	// 	badge: "Beta",
	// 	desc: "",
	// },
	{
		id: "text-animate",
		name: "Text Animate",
		href: "/magic/docs/components/text-animate",
		desc: "A text animation component that animates text using a variety of different animations.",
	},
	{
		id: "typing-animation",
		name: "Typing Animation",
		href: "/magic/docs/components/typing-animation",
		badge: "New",
		desc: "A text component that displays a typewriter animation effect.",
	},
	{
		id: "video-text",
		name: "Video Text",
		href: "/magic/docs/components/video-text",
		badge: "Beta",
		desc: "",
	},
	{
		id: "warp-background",
		name: "Warp Background",
		href: "/magic/docs/components/warp-background",
		badge: "Beta",
		desc: "",
	},
	{
		id: "word-rotate",
		name: "Word Rotate",
		href: "/magic/docs/components/word-rotate",
		badge: "Beta",
		desc: "",
	},
];

/**
 * Get prev/next components for navigation
 */
export function getPrevNext(currentId: string) {
	const index = magicUIComponents.findIndex((c) => c.id === currentId);
	return {
		prev: index > 0 ? magicUIComponents[index - 1] : null,
		next: index < magicUIComponents.length - 1 ? magicUIComponents[index + 1] : null,
	};
}

/**
 * Get component by ID
 */
export function getComponentById(id: string) {
	return magicUIComponents.find((c) => c.id === id) ?? null;
}
