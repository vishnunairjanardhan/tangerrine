import { Reveal } from "@/components/Reveal";
import storyImage from "@/assets/story-people.jpg";

export function Story() {
  return (
    <section id="story" className="bg-cocoa grain py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-tangerine">Our story</p>
            <h2 className="text-cream mt-5 text-4xl leading-[1.08] lg:text-[3.25rem]">
              Named after the fruit that starts a good day
            </h2>
            <p className="text-cream/75 mt-8 max-w-lg leading-relaxed">
              Tangerrine began as a small idea between friends in Bibwewadi: a
              room where the coffee is taken seriously, the food tastes like
              someone cooked it for you, and nobody is rushed out of their seat.
            </p>
            <p className="text-cream/60 mt-5 max-w-lg text-sm leading-relaxed">
              We work with local roasters and neighbourhood growers, change the
              menu with the season, and keep the citrus on the plate — and in the
              name.
            </p>
            <p className="text-cream font-display mt-10 text-2xl italic lg:text-3xl">
              “Good food. Good mood. Good company.”
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="zoom-frame rounded-t-md rounded-b-[8rem]">
              <img
                src={storyImage}
                alt="The coffee bar and pastry counter at Tangerrine, Bibwewadi"
                loading="lazy"
                width={1600}
                height={2133}
                className="aspect-[5/6] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
