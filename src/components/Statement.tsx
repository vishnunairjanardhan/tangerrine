import { Reveal } from "@/components/Reveal";

const phrases = [
  "Good food",
  "Good mood",
  "Good company",
  "Slow mornings",
  "Late conversations",
  "Fresh citrus",
];

export function Statement() {
  return (
    <section className="grain bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Our brand statement</p>
          <h2 className="text-cocoa mt-6 text-[2.25rem] leading-[1.1] sm:text-5xl lg:text-[3.75rem]">
            We built Tangerrine around the feeling of arriving at your favourite
            table — a little citrus, a lot of warmth.
          </h2>
        </Reveal>
      </div>

      <div className="border-border mt-20 overflow-hidden border-y py-6">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {phrases.map((phrase) => (
                <span
                  key={phrase}
                  className="text-cocoa/70 font-display flex items-center gap-8 pr-8 text-2xl italic lg:text-3xl"
                >
                  {phrase}
                  <span className="bg-tangerine inline-block size-1.5 rounded-full" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
