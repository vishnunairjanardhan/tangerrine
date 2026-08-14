import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-espresso grain">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-end justify-between gap-10 px-6 py-16 lg:px-12">
        <div>
          <p className="text-cream font-display text-2xl tracking-[0.3em]">
            TANGERRINE
          </p>
          <p className="text-cream/45 font-mono mt-3 text-[0.68rem] tracking-[0.22em] uppercase">
            Coffee · Food · Conversations
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          <Link
            to="/menu"
            className="text-cream/70 hover:text-tangerine text-[0.78rem] tracking-[0.16em] uppercase transition-colors"
          >
            Menu
          </Link>
          <a
            href="/#story"
            className="text-cream/70 hover:text-tangerine text-[0.78rem] tracking-[0.16em] uppercase transition-colors"
          >
            Our Story
          </a>
          <a
            href="/#contact"
            className="text-cream/70 hover:text-tangerine text-[0.78rem] tracking-[0.16em] uppercase transition-colors"
          >
            Contact
          </a>
          <a
            href="https://instagram.com/tangerrine_pune"
            className="text-cream/70 hover:text-tangerine text-[0.78rem] tracking-[0.16em] uppercase transition-colors"
          >
            Instagram
          </a>
        </nav>
      </div>
      <div className="border-cream/10 border-t">
        <p className="text-cream/35 mx-auto max-w-[1400px] px-6 py-6 text-[0.7rem] lg:px-12">
          © {new Date().getFullYear()} Tangerrine, Pune. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
