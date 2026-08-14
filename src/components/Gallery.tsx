import { Reveal } from "@/components/Reveal";
import exteriorImage from "@/assets/gallery-exterior.jpg";
import detailImage from "@/assets/gallery-detail.jpg";
import dishTwo from "@/assets/dish-2.jpg";
import outdoorImage from "@/assets/gallery-barista.jpg";

const shots = [
  {
    src: exteriorImage,
    alt: "Tangerrine's green framed entrance on the street in Bibwewadi, Pune",
    span: "row-span-2",
    w: 1600,
    h: 2133,
  },
  {
    src: detailImage,
    alt: "Painted staircase wall with hanging plants inside Tangerrine",
    span: "",
    w: 1600,
    h: 2133,
  },
  {
    src: dishTwo,
    alt: "Two cappuccinos on a marble table beside the window",
    span: "",
    w: 1600,
    h: 2133,
  },
  {
    src: outdoorImage,
    alt: "Outdoor seating with parasols at Tangerrine after sunset",
    span: "md:col-span-2",
    w: 1600,
    h: 2844,
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-cream grain py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="eyebrow">Gallery</p>
          <h2 className="text-cocoa mt-5 max-w-xl text-4xl leading-[1.08] lg:text-[3.25rem]">
            The room, the plates, the people
          </h2>
        </Reveal>

        <div className="mt-16 grid auto-rows-[220px] gap-5 md:grid-cols-3 md:auto-rows-[260px]">
          {shots.map((shot, index) => (
            <Reveal
              key={shot.alt}
              delay={index * 100}
              className={`${shot.span} h-full`}
            >
              <figure
                className="zoom-frame h-full rounded-md"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  width={shot.w}
                  height={shot.h}
                  className="h-full w-full object-cover"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
