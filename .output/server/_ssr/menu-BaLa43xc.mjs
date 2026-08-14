import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as cn, n as SiteFooter, r as SiteNav, t as Reveal } from "./SiteFooter-CJy_VbvI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu-BaLa43xc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var menuCategories = [
	{
		id: "breakfast",
		label: "All-day Breakfast",
		items: [
			{
				name: "Tangerine Ricotta Hotcakes",
				description: "Citrus glaze, whipped ricotta, candied peel, maple",
				price: "380",
				tags: ["veg", "signature"]
			},
			{
				name: "Sourdough & Avocado",
				description: "Smashed avocado, chilli oil, soft herbs, lime",
				price: "340",
				tags: ["vegan", "spicy"]
			},
			{
				name: "Masala Scramble",
				description: "Farm eggs, tomato, onion, coriander, buttered toast",
				price: "310",
				tags: ["veg", "spicy"]
			},
			{
				name: "Seasonal Fruit & Curd Bowl",
				description: "Hung curd, honey, toasted seeds, orange segments",
				price: "290",
				tags: ["veg", "gluten-free"]
			}
		]
	},
	{
		id: "coffee",
		label: "Coffee & Brews",
		items: [
			{
				name: "Single-Origin Flat White",
				description: "Chikmagalur beans, roasted weekly in Pune",
				price: "240",
				tags: ["veg", "signature"]
			},
			{
				name: "Cold Brew Tonic",
				description: "18-hour cold brew, tonic, tangerine peel",
				price: "260",
				tags: ["vegan"]
			},
			{
				name: "Filter Coffee",
				description: "South Indian style, jaggery on the side",
				price: "170",
				tags: ["veg"]
			},
			{
				name: "Cocoa & Cardamom",
				description: "Dark chocolate, cardamom, steamed milk",
				price: "250",
				tags: ["veg"]
			}
		]
	},
	{
		id: "plates",
		label: "Plates & Sharing",
		items: [
			{
				name: "The Warm Table Platter",
				description: "Charred vegetables, whipped hummus, sourdough, dukkah",
				price: "520",
				tags: ["veg", "signature"]
			},
			{
				name: "Burnt Chilli Pasta",
				description: "Hand-cut tagliatelle, garlic, burnt chilli, parmesan",
				price: "460",
				tags: ["veg", "spicy"]
			},
			{
				name: "Pune Bowl",
				description: "Millet, roasted pumpkin, greens, tahini, pickled onion",
				price: "420",
				tags: ["vegan", "gluten-free"]
			},
			{
				name: "Slow-Roast Chicken Sandwich",
				description: "Brioche, herb mayo, slaw, house fries",
				price: "480",
				tags: []
			}
		]
	},
	{
		id: "sweet",
		label: "Sweet",
		items: [
			{
				name: "Tangerine Olive Oil Cake",
				description: "Citrus syrup, crème fraîche, candied zest",
				price: "300",
				tags: ["veg", "signature"]
			},
			{
				name: "Dark Chocolate Tart",
				description: "70% ganache, sea salt, cocoa nib crumble",
				price: "320",
				tags: ["veg"]
			},
			{
				name: "Coconut Panna Cotta",
				description: "Seasonal fruit, toasted coconut",
				price: "280",
				tags: ["vegan", "gluten-free"]
			}
		]
	}
];
var tagLabels = {
	veg: "Vegetarian",
	vegan: "Vegan",
	"gluten-free": "Gluten free",
	spicy: "Spicy",
	signature: "Signature"
};
var filters = [
	"veg",
	"vegan",
	"gluten-free",
	"signature"
];
function MenuPage() {
	const [active, setActive] = (0, import_react.useState)(menuCategories[0].id);
	const [query, setQuery] = (0, import_react.useState)("");
	const [filter, setFilter] = (0, import_react.useState)(null);
	const category = (0, import_react.useMemo)(() => menuCategories.find((c) => c.id === active) ?? menuCategories[0], [active]);
	const items = (0, import_react.useMemo)(() => {
		const source = query.trim() ? menuCategories.flatMap((c) => c.items) : category.items;
		const q = query.trim().toLowerCase();
		return source.filter((item) => {
			const matchesQuery = !q || item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
			const matchesFilter = !filter || item.tags.includes(filter);
			return matchesQuery && matchesFilter;
		});
	}, [
		category,
		query,
		filter
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-cream min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, { solid: true }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "grain pt-36 pb-24 lg:pt-44 lg:pb-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1100px] px-6 lg:px-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "The menu"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-cocoa mt-5 text-[2.75rem] leading-[1.05] lg:text-[4.5rem]",
								children: "Cooked fresh, all day"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-6 max-w-lg leading-relaxed",
								children: "Seasonal produce, local roasters and a kitchen that changes with the market. Prices in INR, taxes extra."
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-border mt-14 flex flex-wrap items-center gap-x-7 gap-y-4 border-y py-5",
							children: menuCategories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setActive(c.id);
									setQuery("");
								},
								className: cn("text-[0.78rem] font-semibold tracking-[0.16em] uppercase transition-colors", c.id === active && !query ? "text-burnt" : "text-cocoa/55 hover:text-cocoa"),
								children: c.label
							}, c.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: query,
								onChange: (event) => setQuery(event.target.value),
								placeholder: "Search dishes",
								"aria-label": "Search dishes",
								className: "border-border bg-card text-cocoa placeholder:text-muted-foreground focus:border-tangerine w-full max-w-xs rounded-full border px-5 py-3 text-sm outline-none transition-colors"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: filters.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setFilter(filter === tag ? null : tag),
									className: cn("rounded-full border px-4 py-2 font-mono text-[0.65rem] tracking-[0.16em] uppercase transition-colors", filter === tag ? "border-tangerine bg-tangerine text-cocoa" : "border-border text-cocoa/60 hover:border-cocoa/40"),
									children: tagLabels[tag]
								}, tag))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-14 space-y-10",
							children: [items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: Math.min(index * 70, 350),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuRow, { item })
							}, item.name)), items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-muted-foreground py-10 text-sm",
								children: "Nothing matches that yet — try another search."
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function MenuRow({ item }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "border-border border-b pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-cocoa text-2xl lg:text-[1.65rem]",
						children: item.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "border-border h-px flex-1 border-b border-dashed" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-burnt font-mono text-sm",
						children: ["₹", item.price]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-2 max-w-xl text-sm leading-relaxed",
				children: item.description
			}),
			item.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: item.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("font-mono rounded-full px-3 py-1 text-[0.6rem] tracking-[0.18em] uppercase", tag === "signature" ? "bg-tangerine/20 text-burnt" : "bg-sand text-cocoa/70"),
					children: tagLabels[tag]
				}, tag))
			})
		]
	});
}
//#endregion
export { MenuPage as component };
