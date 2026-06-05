import { Phone } from "lucide-react";
import { business } from "@/lib/business";

type Props = {
  label?: string;
  className?: string;
  showNumber?: boolean;
};

// Primary conversion element. Gold button + deep-green text — matches the logo's
// lightning bolt and pops on every background. Always a tel: link.
export default function CallButton({
  label = "Call Now — Free Quote",
  className = "",
  showNumber = false,
}: Props) {
  return (
    <a
      href={business.phoneLink}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-8 py-4 font-display text-xl font-bold uppercase tracking-wide text-green-dark shadow-lg shadow-gold/30 transition hover:scale-[1.03] hover:bg-gold-dark focus:outline-none focus:ring-4 focus:ring-gold/40 ${className}`}
    >
      <Phone className="h-6 w-6" strokeWidth={2.5} />
      <span>{label}</span>
      {showNumber && <span className="hidden sm:inline">· {business.phoneDisplay}</span>}
    </a>
  );
}
