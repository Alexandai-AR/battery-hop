import { Check } from "lucide-react";
import { pricing } from "@/lib/business";
import CallButton from "./CallButton";

const included = [
  "Battery supplied",
  "Professional installation",
  "Battery testing",
  "Charging system check",
  "Old battery disposal",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-center font-display text-4xl font-extrabold uppercase tracking-tight text-green sm:text-5xl">
          Transparent Pricing Guide
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-ink/70">
          Clear, upfront pricing on common battery replacements, with quote-based
          pricing for specialist vehicles. Final pricing is always confirmed
          before any work begins.
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl border-2 border-green/10 bg-white shadow-sm">
          {pricing.map((row, i) => (
            <div
              key={row.service}
              className={`flex items-center justify-between gap-4 px-6 py-5 ${
                i !== 0 ? "border-t border-green/10" : ""
              }`}
            >
              <span className="font-display text-lg font-bold uppercase tracking-tight text-green-dark">
                {row.service}
              </span>
              <span className="text-right">
                <span className="font-display text-2xl font-extrabold text-green">{row.price}</span>
                {row.note && <span className="ml-1 text-sm text-ink/50">{row.note}</span>}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border-2 border-green/10 bg-white p-7 sm:p-9">
          <h3 className="text-center font-display text-xl font-bold uppercase tracking-wide text-green-dark sm:text-2xl">
            Included With Every Battery Replacement
          </h3>
          <ul className="mx-auto mt-6 grid max-w-xl gap-x-8 gap-y-3 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-3 text-lg text-ink/80">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green text-gold">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-7 text-center font-display text-base font-semibold uppercase tracking-wide text-green">
            Final pricing is confirmed before work begins.
          </p>
        </div>

        <div className="mt-8 text-center">
          <CallButton label="Get a Fast Quote" />
        </div>
      </div>
    </section>
  );
}
