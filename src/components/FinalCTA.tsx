import CallButton from "./CallButton";
import { business } from "@/lib/business";

export default function FinalCTA() {
  return (
    <section className="bg-green py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
          Flat Battery? We&apos;ll Come to You.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
          Don&apos;t wait around for a tow truck. Call David now for fast,
          upfront mobile battery replacement anywhere on the Gold Coast — 24
          hours a day, 7 days a week.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <CallButton label="Call Now — We'll Come to You" />
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-white/80">
            {business.phoneDisplay} · Available 24/7 · Upfront pricing
          </p>
        </div>
      </div>
    </section>
  );
}
