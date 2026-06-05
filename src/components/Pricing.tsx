import { pricing } from "@/lib/business";
import CallButton from "./CallButton";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-center font-display text-4xl font-extrabold uppercase tracking-tight text-green sm:text-5xl">
          Simple, Upfront Pricing
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-ink/70">
          No hidden fees. Final price always confirmed before any work begins.
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

        <p className="mt-4 text-center text-sm text-ink/60">
          Prices include the battery, professional installation, testing, and old
          battery disposal. No call-out fee.
        </p>

        <div className="mt-8 text-center">
          <CallButton label="Get a Fast Quote" />
        </div>
      </div>
    </section>
  );
}
