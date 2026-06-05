import { Zap, BatteryCharging, BadgeCheck, Clock } from "lucide-react";

// Mirrors the three pillars printed on the Battery Hop van, plus 24/7 availability.
const items = [
  { icon: Zap, text: "Fast Response" },
  { icon: BatteryCharging, text: "Quality Batteries" },
  { icon: BadgeCheck, text: "Professional Service" },
  { icon: Clock, text: "Available 24/7" },
];

export default function TrustBar() {
  return (
    <section className="bg-green-dark">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-7 sm:grid-cols-4">
        {items.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center justify-center gap-3 text-center sm:justify-start sm:text-left">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold text-green-dark">
              <Icon className="h-6 w-6" strokeWidth={2.5} />
            </span>
            <span className="font-display text-base font-bold uppercase leading-tight tracking-wide text-white">
              {text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
