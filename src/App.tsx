import { menuData } from "./lib/menu-data";
import { SiteNav } from "./components/SiteNav";
import { Hero } from "./components/Hero";
import { Statement } from "./components/Statement";
import { SignatureDishes } from "./components/SignatureDishes";
import { Experience } from "./components/Experience";
import { Story } from "./components/Story";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { LocationSection } from "./components/LocationSection";
import { SiteFooter } from "./components/SiteFooter";

export default function App() {
  return (
    <div className="bg-cream min-h-screen text-cocoa">
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
