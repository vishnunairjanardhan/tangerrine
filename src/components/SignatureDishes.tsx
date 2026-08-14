import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import dishOne from "@/assets/dish-1.jpg";
import dishTwo from "@/assets/dish-2.jpg";
import dishThree from "@/assets/dish-3.jpg";

const dishes = [
  {
    name: "Masala Focaccia & Green Salad",
    note: "Herbed focaccia, house chutney, crunchy garden salad",
    inr: "₹380",
    image: dishOne,
    alt: "Herbed focaccia sandwich served with a fresh green salad at Tangerrine",
    tag: "Signature",
  },
  {
    name: "Cappuccino for Two",
    note: "Freshly pulled espresso, silky latte art, every time",
    inr: "₹240",
    image: dishTwo,
    alt: "Two cappuccinos with latte art on a marble table by the window",
    tag: "Bestseller",
  },
  {
    name: "From the Cake Counter",
    note: "Bakes and desserts, changing through the week",
    inr: "₹220",
    image: dishThree,
    alt: "The dessert display counter at Tangerrine stocked with cakes and bakes",
    tag: "Fresh daily",
  },
];

export function SignatureDishes() {
  return (
    <section className="bg-cream pb-24 lg:pb-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow">Signature dishes</p>
            <h2 className="text-cocoa mt-5 text-4xl lg:text-[3.25rem]">
              Three plates worth the trip
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to="/menu"
              className="text-cocoa hover:text-burnt border-cocoa/40 hover:border-burnt border-b pb-1 text-[0.78rem] font-semibold tracking-[0.16em] uppercase transition-colors"
            >
              View full menu
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-3">
          {dishes.map((dish, index) => (
            <Reveal key={dish.name} delay={index * 140}>
              <article className="group">
                <div
                  className="zoom-frame rounded-t-[10rem] rounded-b-md"
                  style={{ boxShadow: "var(--shadow-soft)" }}
                >
                  <img
                    src={dish.image}
                    alt={dish.alt}
                    loading="lazy"
                    width={1600}
                    height={2133}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <p className="eyebrow mt-7">{dish.tag}</p>
                <div className="mt-3 flex items-baseline justify-between gap-4">
                  <h3 className="text-cocoa text-2xl lg:text-[1.75rem]">
                    {dish.name}
                  </h3>
                  <span className="text-burnt font-mono text-sm">
                    {dish.inr}
                  </span>
                </div>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {dish.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
