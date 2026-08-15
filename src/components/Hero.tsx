import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cafe.jpg";

export function Hero() {
  return (
    <section className="grain relative flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={heroImage}
        alt="The double-height dining room at Tangerrine, Bibwewadi, Pune"
        width={1600}
        height={2133}
        className="hero-zoom absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-20 lg:px-12 lg:pb-28">
        <p className="eyebrow text-tangerine">Bibwewadi · Pune</p>
        <h1 className="text-cream mt-6 max-w-4xl text-[3.25rem] leading-[0.95] sm:text-7xl lg:text-[6rem]">
          An inviting table in
          <span className="text-tangerine italic"> the heart of Pune</span>
        </h1>
        <p className="text-cream/80 mt-7 max-w-md text-base leading-relaxed">
          Coffee, food and conversations — served slowly, from first light
          through late evening.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="tel:+919000000000" className="btn-base btn-primary">
            Reserve a Table
          </a>
          <Link to="/menu" className="btn-base btn-ghost-light">
            Explore the Menu
          </Link>
        </div>

        <div className="text-cream/60 font-mono mt-14 flex flex-wrap gap-x-10 gap-y-2 text-[0.7rem] tracking-[0.18em] uppercase">
          <span>Mon–Sun · 08:00 — 23:00</span>
          <span>4.9 · 167 Google reviews</span>
        </div>
      </div>
    </section>
  );
}
