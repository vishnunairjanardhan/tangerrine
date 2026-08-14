import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { Reveal } from "@/components/Reveal";
import { menuCategories, tagLabels, type MenuItem } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Tangerrine Café, Pune" },
      {
        name: "description",
        content:
          "Browse the Tangerrine menu: all-day breakfast, single-origin coffee, sharing plates and desserts, with vegetarian and vegan options.",
      },
      { property: "og:title", content: "Menu | Tangerrine Café, Pune" },
      {
        property: "og:description",
        content:
          "All-day breakfast, single-origin coffee, sharing plates and desserts at Tangerrine, Pune.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

const filters = ["veg", "vegan", "gluten-free", "signature"] as const;

function MenuPage() {
  const [active, setActive] = useState(menuCategories[0]!.id);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number] | null>(null);

  const category = useMemo(
    () => menuCategories.find((c) => c.id === active) ?? menuCategories[0]!,
    [active],
  );

  const items = useMemo(() => {
    const source = query.trim()
      ? menuCategories.flatMap((c) => c.items)
      : category.items;
    const q = query.trim().toLowerCase();
    return source.filter((item) => {
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      const matchesFilter = !filter || item.tags.includes(filter);
      return matchesQuery && matchesFilter;
    });
  }, [category, query, filter]);

  return (
    <div className="bg-cream min-h-screen">
      <SiteNav solid />

      <main className="grain pt-36 pb-24 lg:pt-44 lg:pb-36">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <Reveal>
            <p className="eyebrow">The menu</p>
            <h1 className="text-cocoa mt-5 text-[2.75rem] leading-[1.05] lg:text-[4.5rem]">
              Cooked fresh, all day
            </h1>
            <p className="text-muted-foreground mt-6 max-w-lg leading-relaxed">
              Seasonal produce, local roasters and a kitchen that changes with
              the market. Prices in INR, taxes extra.
            </p>
          </Reveal>

          <div className="border-border mt-14 flex flex-wrap items-center gap-x-7 gap-y-4 border-y py-5">
            {menuCategories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setActive(c.id);
                  setQuery("");
                }}
                className={cn(
                  "text-[0.78rem] font-semibold tracking-[0.16em] uppercase transition-colors",
                  c.id === active && !query
                    ? "text-burnt"
                    : "text-cocoa/55 hover:text-cocoa",
                )}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search dishes"
              aria-label="Search dishes"
              className="border-border bg-card text-cocoa placeholder:text-muted-foreground focus:border-tangerine w-full max-w-xs rounded-full border px-5 py-3 text-sm outline-none transition-colors"
            />
            <div className="flex flex-wrap gap-2">
              {filters.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setFilter(filter === tag ? null : tag)}
                  className={cn(
                    "rounded-full border px-4 py-2 font-mono text-[0.65rem] tracking-[0.16em] uppercase transition-colors",
                    filter === tag
                      ? "border-tangerine bg-tangerine text-cocoa"
                      : "border-border text-cocoa/60 hover:border-cocoa/40",
                  )}
                >
                  {tagLabels[tag]}
                </button>
              ))}
            </div>
          </div>

          <ul className="mt-14 space-y-10">
            {items.map((item, index) => (
              <Reveal key={item.name} delay={Math.min(index * 70, 350)}>
                <MenuRow item={item} />
              </Reveal>
            ))}
            {items.length === 0 && (
              <li className="text-muted-foreground py-10 text-sm">
                Nothing matches that yet — try another search.
              </li>
            )}
          </ul>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

function MenuRow({ item }: { item: MenuItem }) {
  return (
    <li className="border-border border-b pb-8">
      <div className="flex items-baseline gap-5">
        <h2 className="text-cocoa text-2xl lg:text-[1.65rem]">{item.name}</h2>
        <span className="border-border h-px flex-1 border-b border-dashed" />
        <span className="text-burnt font-mono text-sm">₹{item.price}</span>
      </div>
      <p className="text-muted-foreground mt-2 max-w-xl text-sm leading-relaxed">
        {item.description}
      </p>
      {item.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "font-mono rounded-full px-3 py-1 text-[0.6rem] tracking-[0.18em] uppercase",
                tag === "signature"
                  ? "bg-tangerine/20 text-burnt"
                  : "bg-sand text-cocoa/70",
              )}
            >
              {tagLabels[tag]}
            </span>
          ))}
        </div>
      )}
    </li>
  );
}
