import { Reveal } from "@/components/Reveal";

const details = [
  { label: "Address", value: "Bibwewadi, Pune 411037, Maharashtra" },
  { label: "Hours", value: "Monday – Sunday · 08:00 — 23:00" },
  { label: "Phone", value: "+91 90000 00000" },
  { label: "Email", value: "hello@tangerrine.cafe" },
];

export function LocationSection() {
  return (
    <section id="contact" className="bg-cocoa grain py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <p className="eyebrow text-tangerine">Find us</p>
            <h2 className="text-cream mt-5 text-4xl leading-[1.08] lg:text-[3.25rem]">
              Make it a moment
            </h2>
            <p className="text-cream/70 mt-7 max-w-md leading-relaxed">
              Walk in for coffee, or reserve ahead for dinner, birthdays and
              private dining. Our team will help you plan the table.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a href="tel:+919000000000" className="btn-base btn-primary">
                Reserve a Table
              </a>
              <a
                href="https://wa.me/919000000000"
                className="btn-base btn-ghost-light"
              >
                WhatsApp us
              </a>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <dl className="divide-cream/12 divide-y">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="flex flex-wrap justify-between gap-4 py-6"
                >
                  <dt className="text-cream/45 font-mono text-[0.68rem] tracking-[0.22em] uppercase">
                    {detail.label}
                  </dt>
                  <dd className="text-cream text-sm sm:text-base">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href="https://maps.google.com/?q=Tangerrine+Bibwewadi+Pune"
              className="text-tangerine hover:text-cream border-tangerine/40 hover:border-cream mt-8 inline-block border-b pb-1 text-[0.78rem] font-semibold tracking-[0.16em] uppercase transition-colors"
            >
              Open in Google Maps
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
