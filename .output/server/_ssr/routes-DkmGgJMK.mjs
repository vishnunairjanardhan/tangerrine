import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteFooter, r as SiteNav, t as Reveal } from "./SiteFooter-CJy_VbvI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DkmGgJMK.js
var import_jsx_runtime = require_jsx_runtime();
var hero_cafe_default = "/assets/hero-cafe-DJNgxM9Z.jpg";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grain relative flex min-h-[100svh] items-end overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_cafe_default,
				alt: "The double-height dining room at Tangerrine, Bibwewadi, Pune",
				width: 1600,
				height: 2133,
				className: "hero-zoom absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "var(--gradient-hero)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-[1400px] px-6 pb-20 lg:px-12 lg:pb-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-tangerine",
						children: "Bibwewadi · Pune"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-cream mt-6 max-w-4xl text-[3.25rem] leading-[0.95] sm:text-7xl lg:text-[6rem]",
						children: ["An inviting table in", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-tangerine italic",
							children: " the heart of Pune"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-cream/80 mt-7 max-w-md text-base leading-relaxed",
						children: "Coffee, food and conversations — served slowly, from first light through late evening."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+919000000000",
							className: "btn-base btn-primary",
							children: "Reserve a Table"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/menu",
							className: "btn-base btn-ghost-light",
							children: "Explore the Menu"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-cream/60 font-mono mt-14 flex flex-wrap gap-x-10 gap-y-2 text-[0.7rem] tracking-[0.18em] uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mon–Sun · 08:00 — 23:00" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "4.9 · 167 Google reviews" })]
					})
				]
			})
		]
	});
}
var phrases = [
	"Good food",
	"Good mood",
	"Good company",
	"Slow mornings",
	"Late conversations",
	"Fresh citrus"
];
function Statement() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grain bg-cream py-24 lg:py-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1400px] px-6 lg:px-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Our brand statement"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-cocoa mt-6 text-[2.25rem] leading-[1.1] sm:text-5xl lg:text-[3.75rem]",
					children: "We built Tangerrine around the feeling of arriving at your favourite table — a little citrus, a lot of warmth."
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-border mt-20 overflow-hidden border-y py-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "marquee-track",
				children: [0, 1].map((copy) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex shrink-0 items-center",
					children: phrases.map((phrase) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-cocoa/70 font-display flex items-center gap-8 pr-8 text-2xl italic lg:text-3xl",
						children: [phrase, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "bg-tangerine inline-block size-1.5 rounded-full" })]
					}, phrase))
				}, copy))
			})
		})]
	});
}
var dish_1_default = "/assets/dish-1-Cg5zIUyG.jpg";
var dish_2_default = "/assets/dish-2-AvxkaYFC.jpg";
var dishes = [
	{
		name: "Masala Focaccia & Green Salad",
		note: "Herbed focaccia, house chutney, crunchy garden salad",
		inr: "₹380",
		image: dish_1_default,
		alt: "Herbed focaccia sandwich served with a fresh green salad at Tangerrine",
		tag: "Signature"
	},
	{
		name: "Cappuccino for Two",
		note: "Freshly pulled espresso, silky latte art, every time",
		inr: "₹240",
		image: dish_2_default,
		alt: "Two cappuccinos with latte art on a marble table by the window",
		tag: "Bestseller"
	},
	{
		name: "From the Cake Counter",
		note: "Bakes and desserts, changing through the week",
		inr: "₹220",
		image: "/assets/dish-3-Be6A76Rg.jpg",
		alt: "The dessert display counter at Tangerrine stocked with cakes and bakes",
		tag: "Fresh daily"
	}
];
function SignatureDishes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-cream pb-24 lg:pb-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Signature dishes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-cocoa mt-5 text-4xl lg:text-[3.25rem]",
					children: "Three plates worth the trip"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/menu",
						className: "text-cocoa hover:text-burnt border-cocoa/40 hover:border-burnt border-b pb-1 text-[0.78rem] font-semibold tracking-[0.16em] uppercase transition-colors",
						children: "View full menu"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-x-10 gap-y-16 md:grid-cols-3",
				children: dishes.map((dish, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 140,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "zoom-frame rounded-t-[10rem] rounded-b-md",
								style: { boxShadow: "var(--shadow-soft)" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: dish.image,
									alt: dish.alt,
									loading: "lazy",
									width: 1600,
									height: 2133,
									className: "aspect-[4/5] w-full object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mt-7",
								children: dish.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-baseline justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-cocoa text-2xl lg:text-[1.75rem]",
									children: dish.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-burnt font-mono text-sm",
									children: dish.inr
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-2 text-sm leading-relaxed",
								children: dish.note
							})
						]
					})
				}, dish.name))
			})]
		})
	});
}
var story_people_default = "/assets/story-people-Du4CR3KY.jpg";
var experiences = [
	{
		title: "Slow mornings",
		body: "Filter coffee, warm bakes and a corner seat by the window from 8am."
	},
	{
		title: "All-day dining",
		body: "A seasonal kitchen built on fresh produce and generous sharing plates."
	},
	{
		title: "Evenings & celebrations",
		body: "Low light, long tables and private dining for the moments that matter."
	}
];
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		className: "bg-sand grain py-24 lg:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-[0.85fr_1fr] lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "zoom-frame rounded-md",
				style: { boxShadow: "var(--shadow-lift)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: story_people_default,
					alt: "The espresso bar and counter at Tangerrine",
					loading: "lazy",
					width: 1600,
					height: 2133,
					className: "aspect-[4/5] w-full object-cover"
				})
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "The experience"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-cocoa mt-5 text-4xl leading-[1.08] lg:text-[3.25rem]",
				children: "Day to evening, the room changes with you"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 space-y-10",
				children: experiences.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-cocoa/15 border-t pt-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-burnt font-mono text-xs",
								children: ["0", index + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-cocoa text-2xl",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-cocoa/70 mt-2 max-w-md text-sm leading-relaxed",
								children: item.body
							})] })]
						})
					})
				}, item.title))
			})] })]
		})
	});
}
function Story() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "story",
		className: "bg-cocoa grain py-24 lg:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1400px] px-6 lg:px-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-tangerine",
						children: "Our story"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-cream mt-5 text-4xl leading-[1.08] lg:text-[3.25rem]",
						children: "Named after the fruit that starts a good day"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-cream/75 mt-8 max-w-lg leading-relaxed",
						children: "Tangerrine began as a small idea between friends in Bibwewadi: a room where the coffee is taken seriously, the food tastes like someone cooked it for you, and nobody is rushed out of their seat."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-cream/60 mt-5 max-w-lg text-sm leading-relaxed",
						children: "We work with local roasters and neighbourhood growers, change the menu with the season, and keep the citrus on the plate — and in the name."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-cream font-display mt-10 text-2xl italic lg:text-3xl",
						children: "“Good food. Good mood. Good company.”"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 140,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "zoom-frame rounded-t-md rounded-b-[8rem]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: story_people_default,
							alt: "The coffee bar and pastry counter at Tangerrine, Bibwewadi",
							loading: "lazy",
							width: 1600,
							height: 2133,
							className: "aspect-[5/6] w-full object-cover"
						})
					})
				})]
			})
		})
	});
}
var shots = [
	{
		src: "/assets/gallery-exterior-hw65CFsd.jpg",
		alt: "Tangerrine's green framed entrance on the street in Bibwewadi, Pune",
		span: "row-span-2",
		w: 1600,
		h: 2133
	},
	{
		src: "/assets/gallery-detail-79o4bk7X.jpg",
		alt: "Painted staircase wall with hanging plants inside Tangerrine",
		span: "",
		w: 1600,
		h: 2133
	},
	{
		src: dish_2_default,
		alt: "Two cappuccinos on a marble table beside the window",
		span: "",
		w: 1600,
		h: 2133
	},
	{
		src: "/assets/gallery-barista-BW40lU4c.jpg",
		alt: "Outdoor seating with parasols at Tangerrine after sunset",
		span: "md:col-span-2",
		w: 1600,
		h: 2844
	}
];
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "gallery",
		className: "bg-cream grain py-24 lg:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Gallery"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-cocoa mt-5 max-w-xl text-4xl leading-[1.08] lg:text-[3.25rem]",
				children: "The room, the plates, the people"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid auto-rows-[220px] gap-5 md:grid-cols-3 md:auto-rows-[260px]",
				children: shots.map((shot, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 100,
					className: `${shot.span} h-full`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "zoom-frame h-full rounded-md",
						style: { boxShadow: "var(--shadow-soft)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: shot.src,
							alt: shot.alt,
							loading: "lazy",
							width: shot.w,
							height: shot.h,
							className: "h-full w-full object-cover"
						})
					})
				}, shot.alt))
			})]
		})
	});
}
var reviews = [
	{
		quote: "The kind of café you end up staying in for three hours without noticing.",
		name: "Aditi K.",
		source: "Google"
	},
	{
		quote: "Best flat white in Bibwewadi, and the hotcakes are unreal.",
		name: "Rohan M.",
		source: "Instagram"
	},
	{
		quote: "Warm service, beautiful room. We booked it for a family dinner.",
		name: "Sneha & Vikram",
		source: "Google"
	}
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-cream pb-24 lg:pb-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-12 md:grid-cols-3",
				children: reviews.map((review, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-cocoa font-display text-2xl leading-snug italic lg:text-[1.7rem]",
						children: [
							"“",
							review.quote,
							"”"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-cocoa text-sm font-semibold",
							children: review.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground font-mono mt-1 text-[0.68rem] tracking-[0.18em] uppercase",
							children: review.source
						})]
					})] })
				}, review.name))
			})]
		})
	});
}
var details = [
	{
		label: "Address",
		value: "Bibwewadi, Pune 411037, Maharashtra"
	},
	{
		label: "Hours",
		value: "Monday – Sunday · 08:00 — 23:00"
	},
	{
		label: "Phone",
		value: "+91 90000 00000"
	},
	{
		label: "Email",
		value: "hello@tangerrine.cafe"
	}
];
function LocationSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "bg-cocoa grain py-24 lg:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1400px] px-6 lg:px-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 lg:grid-cols-[1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-tangerine",
						children: "Find us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-cream mt-5 text-4xl leading-[1.08] lg:text-[3.25rem]",
						children: "Make it a moment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-cream/70 mt-7 max-w-md leading-relaxed",
						children: "Walk in for coffee, or reserve ahead for dinner, birthdays and private dining. Our team will help you plan the table."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 flex flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+919000000000",
							className: "btn-base btn-primary",
							children: "Reserve a Table"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://wa.me/919000000000",
							className: "btn-base btn-ghost-light",
							children: "WhatsApp us"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 140,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "divide-cream/12 divide-y",
						children: details.map((detail) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap justify-between gap-4 py-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-cream/45 font-mono text-[0.68rem] tracking-[0.22em] uppercase",
								children: detail.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-cream text-sm sm:text-base",
								children: detail.value
							})]
						}, detail.label))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://maps.google.com/?q=Tangerrine+Bibwewadi+Pune",
						className: "text-tangerine hover:text-cream border-tangerine/40 hover:border-cream mt-8 inline-block border-b pb-1 text-[0.78rem] font-semibold tracking-[0.16em] uppercase transition-colors",
						children: "Open in Google Maps"
					})]
				})]
			})
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-cream min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Statement, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignatureDishes, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationSection, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };
