import Image from "next/image";
import { Phone } from "lucide-react";
import { business } from "@/lib/business";

// White header lets the colourful logo shine — cleaner and more local than a dark bar.
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-green/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5">
        <a href="#top" aria-label={`${business.name} home`}>
          <Image
            src="/BH-Logo.svg"
            alt="Battery Hop — Mobile Battery Replacement"
            width={548}
            height={170}
            priority
            className="h-12 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-7 font-display text-base font-semibold uppercase tracking-wide text-green md:flex">
          <a href="#how-it-works" className="transition hover:text-gold-dark">How It Works</a>
          <a href="#pricing" className="transition hover:text-gold-dark">Pricing</a>
          <a href="#reviews" className="transition hover:text-gold-dark">Reviews</a>
          <a href="#service-area" className="transition hover:text-gold-dark">Service Area</a>
          <a href="#faq" className="transition hover:text-gold-dark">FAQ</a>
        </nav>

        <a
          href={business.phoneLink}
          className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 font-display text-base font-bold uppercase tracking-wide text-green-dark shadow-md transition hover:bg-gold-dark"
        >
          <Phone className="h-4 w-4" strokeWidth={2.5} />
          <span className="hidden sm:inline">{business.phoneDisplay}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
