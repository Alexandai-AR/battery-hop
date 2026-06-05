import { Phone } from "lucide-react";
import { business } from "@/lib/business";

// Fixed bottom bar on mobile only — catches scrollers who haven't called yet.
export default function StickyCallBar() {
  return (
    <a
      href={business.phoneLink}
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-gold py-4 font-display text-lg font-bold uppercase tracking-wide text-green-dark shadow-[0_-4px_12px_rgba(0,0,0,0.2)] md:hidden"
    >
      <Phone className="h-5 w-5" strokeWidth={2.5} />
      Call David — 24/7 · {business.phoneDisplay}
    </a>
  );
}
