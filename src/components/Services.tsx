import { Car, Truck, Battery, Bike, Caravan, Anchor, Briefcase, LifeBuoy } from "lucide-react";
import { services } from "@/lib/business";

// Order must match the `services` array in business.ts.
const icons = [Car, Truck, Battery, Bike, Truck, Battery, Caravan, Anchor, Briefcase, LifeBuoy];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-display text-4xl font-extrabold uppercase tracking-tight text-green sm:text-5xl">
          Mobile Battery Replacement &amp; Breakdown Assist
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-ink/70">
          Whatever you drive — or float — we bring the right battery to you and
          fit it on the spot. Plus basic roadside help when you need it.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[i] ?? Battery;
            return (
              <div
                key={s.title}
                className="group rounded-2xl border-2 border-green/10 bg-cream p-7 transition hover:-translate-y-1 hover:border-gold hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green text-gold transition group-hover:bg-gold group-hover:text-green-dark">
                  <Icon className="h-9 w-9" strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-tight text-green-dark">
                  {s.title}
                </h3>
                <p className="mt-2 text-lg text-ink/70">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
