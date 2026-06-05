import { MapPin } from "lucide-react";
import { suburbs } from "@/lib/business";
import CallButton from "./CallButton";

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-green sm:text-5xl">
          We Come to You Across the Gold Coast
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink/70">
          Fast mobile car battery replacement — and marine battery service —
          wherever you are. We cover the Gold Coast and surrounding suburbs,
          including:
        </p>

        <ul className="mx-auto mt-9 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
          {suburbs.map((s) => (
            <li
              key={s}
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-green/10 bg-white px-3 py-3 font-display text-base font-bold uppercase tracking-tight text-green-dark"
            >
              <MapPin className="h-5 w-5 shrink-0 text-gold" strokeWidth={2.5} />
              {s}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-lg text-ink/70">
          Not sure if we cover your area? Give us a call — if you&apos;re on the
          Gold Coast, we&apos;ll come to you.
        </p>

        <div className="mt-8">
          <CallButton label="Call Now — We'll Come to You" />
        </div>
      </div>
    </section>
  );
}
