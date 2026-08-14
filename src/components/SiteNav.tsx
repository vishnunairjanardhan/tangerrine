import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Menu", href: "/menu" },
  { label: "Our Story", href: "/#story" },
  { label: "Experience", href: "/#experience" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export function SiteNav({ solid = false }: { solid?: boolean } = {}) {
  const [scrolled, setScrolled] = useState(solid);

  useEffect(() => {
    const onScroll = () => setScrolled(solid || window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled
          ? "bg-cream/92 border-b border-border backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-12">
        <Link
          to="/"
          className={cn(
            "font-display text-[1.35rem] leading-none tracking-[0.3em] transition-colors duration-500",
            scrolled ? "text-cocoa" : "text-cream",
          )}
        >
          TANGERRINE
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={cn(
                  "text-[0.78rem] font-medium tracking-[0.16em] uppercase transition-colors duration-300",
                  scrolled
                    ? "text-cocoa hover:text-burnt"
                    : "text-cream/85 hover:text-tangerine",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/menu"
            className="btn-base btn-outline hidden px-5 py-3 text-[0.7rem] sm:inline-flex lg:hidden"
          >
            Menu
          </Link>
          <a
            href="tel:+919000000000"
            className={cn(
              "btn-base px-6 py-3.5 text-[0.7rem]",
              scrolled ? "btn-primary" : "btn-ghost-light",
            )}
          >
            Reserve a Table
          </a>
        </div>
      </nav>
    </header>
  );
}
