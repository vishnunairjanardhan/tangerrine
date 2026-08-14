import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { SignatureDishes } from "@/components/SignatureDishes";
import { Experience } from "@/components/Experience";
import { Story } from "@/components/Story";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { LocationSection } from "@/components/LocationSection";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tangerrine | Café & Dining in Pune" },
      {
        name: "description",
        content:
          "Tangerrine is a warm, contemporary café in Bibwewadi, Pune. Explore the menu, signature dishes and ambience, then reserve your table.",
      },
      { property: "og:title", content: "Tangerrine | Café & Dining in Pune" },
      {
        property: "og:description",
        content:
          "Coffee, food and conversations in the heart of Pune. Reserve a table at Tangerrine.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Tangerrine",
          servesCuisine: ["Café", "Continental", "Coffee"],
          priceRange: "₹₹",
          telephone: "+91 90000 00000",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bibwewadi, Pune",
            addressRegion: "Maharashtra",
            postalCode: "411037",
            addressCountry: "IN",
          },
          openingHours: "Mo-Su 08:00-23:00",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-cream min-h-screen">
      <SiteNav />
      <main>
        <Hero />
        <Statement />
        <SignatureDishes />
        <Experience />
        <Story />
        <Gallery />
        <Testimonials />
        <LocationSection />
      </main>
      <SiteFooter />
    </div>
  );
}
