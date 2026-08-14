import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteFooter-CJy_VbvI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var links = [
	{
		label: "Menu",
		href: "/menu"
	},
	{
		label: "Our Story",
		href: "/#story"
	},
	{
		label: "Experience",
		href: "/#experience"
	},
	{
		label: "Gallery",
		href: "/#gallery"
	},
	{
		label: "Contact",
		href: "/#contact"
	}
];
function SiteNav({ solid = false } = {}) {
	const [scrolled, setScrolled] = (0, import_react.useState)(solid);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(solid || window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [solid]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-colors duration-500", scrolled ? "bg-cream/92 border-b border-border backdrop-blur-md" : "border-b border-transparent"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: cn("font-display text-[1.35rem] leading-none tracking-[0.3em] transition-colors duration-500", scrolled ? "text-cocoa" : "text-cream"),
					children: "TANGERRINE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-9 lg:flex",
					children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: cn("text-[0.78rem] font-medium tracking-[0.16em] uppercase transition-colors duration-300", scrolled ? "text-cocoa hover:text-burnt" : "text-cream/85 hover:text-tangerine"),
						children: link.label
					}) }, link.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/menu",
						className: "btn-base btn-outline hidden px-5 py-3 text-[0.7rem] sm:inline-flex lg:hidden",
						children: "Menu"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "tel:+919000000000",
						className: cn("btn-base px-6 py-3.5 text-[0.7rem]", scrolled ? "btn-primary" : "btn-ghost-light"),
						children: "Reserve a Table"
					})]
				})
			]
		})
	});
}
/** Reveals an element once it scrolls into view. */
function useReveal() {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") {
			setShown(true);
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				setShown(true);
				observer.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -8% 0px"
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return {
		ref,
		shown
	};
}
function Reveal({ children, className, delay = 0 }) {
	const { ref, shown } = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", shown && "reveal-in", className),
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-espresso grain",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1400px] flex-wrap items-end justify-between gap-10 px-6 py-16 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-cream font-display text-2xl tracking-[0.3em]",
				children: "TANGERRINE"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-cream/45 font-mono mt-3 text-[0.68rem] tracking-[0.22em] uppercase",
				children: "Coffee · Food · Conversations"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-wrap gap-x-8 gap-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/menu",
						className: "text-cream/70 hover:text-tangerine text-[0.78rem] tracking-[0.16em] uppercase transition-colors",
						children: "Menu"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#story",
						className: "text-cream/70 hover:text-tangerine text-[0.78rem] tracking-[0.16em] uppercase transition-colors",
						children: "Our Story"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#contact",
						className: "text-cream/70 hover:text-tangerine text-[0.78rem] tracking-[0.16em] uppercase transition-colors",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://instagram.com/tangerrine_pune",
						className: "text-cream/70 hover:text-tangerine text-[0.78rem] tracking-[0.16em] uppercase transition-colors",
						children: "Instagram"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-cream/10 border-t",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-cream/35 mx-auto max-w-[1400px] px-6 py-6 text-[0.7rem] lg:px-12",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Tangerrine, Pune. All rights reserved."
				]
			})
		})]
	});
}
//#endregion
export { cn as i, SiteFooter as n, SiteNav as r, Reveal as t };
