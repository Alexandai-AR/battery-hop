import { Phone } from "lucide-react";
import { business, suburbs } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="bg-green-dark py-12 text-white/80">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <div className="font-display text-2xl font-extrabold uppercase tracking-tight text-white">
              Battery <span className="text-gold">Hop</span>
            </div>
            <p className="mt-2 text-sm uppercase tracking-wide">
              Mobile Battery Replacement — Gold Coast
            </p>
            <a
              href={business.phoneLink}
              className="mt-3 inline-flex items-center gap-2 font-display text-lg font-bold text-gold"
            >
              <Phone className="h-5 w-5" /> {business.phoneDisplay}
            </a>
            <p className="mt-2 text-sm">Available {business.hours}</p>
          </div>

          <div className="max-w-md">
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
              Service Area
            </h3>
            <p className="mt-2 text-sm">{suburbs.join(" · ")}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
