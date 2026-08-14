import { Reveal } from "@/components/Reveal";
import counterImage from "@/assets/story-people.jpg";

const experiences = [
  {
    title: "Slow mornings",
    body: "Filter coffee, warm bakes and a corner seat by the window from 8am.",
  },
  {
    title: "All-day dining",
    body: "A seasonal kitchen built on fresh produce and generous sharing plates.",
  },
  {
    title: "Evenings & celebrations",
    body: "Low light, long tables and private dining for the moments that matter.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-sand grain py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-[0.85fr_1fr] lg:px-12">
        <Reveal>
          <div
            className="zoom-frame rounded-md"
            style={{ boxShadow: "var(--shadow-lift)" }}
          >
            <img
              src={counterImage}
              alt="The espresso bar and counter at Tangerrine"
              loading="lazy"
              width={1600}
              height={2133}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">The experience</p>
            <h2 className="text-cocoa mt-5 text-4xl leading-[1.08] lg:text-[3.25rem]">
              Day to evening, the room changes with you
            </h2>
          </Reveal>

          <ul className="mt-12 space-y-10">
            {experiences.map((item, index) => (
              <Reveal key={item.title} delay={index * 120}>
                <li className="border-cocoa/15 border-t pt-7">
                  <div className="flex items-baseline gap-5">
                    <span className="text-burnt font-mono text-xs">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-cocoa text-2xl">{item.title}</h3>
                      <p className="text-cocoa/70 mt-2 max-w-md text-sm leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
