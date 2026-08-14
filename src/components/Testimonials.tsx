import { Reveal } from "@/components/Reveal";

const reviews = [
  {
    quote:
      "The kind of café you end up staying in for three hours without noticing.",
    name: "Aditi K.",
    source: "Google",
  },
  {
    quote: "Best flat white in Bibwewadi, and the hotcakes are unreal.",
    name: "Rohan M.",
    source: "Instagram",
  },
  {
    quote: "Warm service, beautiful room. We booked it for a family dinner.",
    name: "Sneha & Vikram",
    source: "Google",
  },
];

export function Testimonials() {
  return (
    <section className="bg-cream pb-24 lg:pb-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="hairline" />
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={index * 120}>
              <blockquote>
                <p className="text-cocoa font-display text-2xl leading-snug italic lg:text-[1.7rem]">
                  “{review.quote}”
                </p>
                <footer className="mt-6">
                  <p className="text-cocoa text-sm font-semibold">
                    {review.name}
                  </p>
                  <p className="text-muted-foreground font-mono mt-1 text-[0.68rem] tracking-[0.18em] uppercase">
                    {review.source}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
