import Image from "next/image";
import { Star, Clock, ShieldCheck } from "lucide-react";
import CallButton from "./CallButton";
import { business } from "@/lib/business";

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[620px] items-end overflow-hidden md:min-h-[700px] md:items-center">
      {/* Full-bleed brand hero photo */}
      <Image
        src="/hero-van.png"
        alt="David from Battery Hop standing beside the mobile battery replacement van on the Gold Coast"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[70%_center]"
      />
      {/* Deep-green gradient overlay — keeps text readable, van + David still visible */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-green-dark/95 via-green-dark/65 to-green-dark/25 md:bg-gradient-to-r md:from-green-dark/95 md:via-green-dark/70 md:to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-16">
        <div className="max-w-2xl text-white">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1.5 font-display text-sm font-bold uppercase tracking-wide text-green-dark">
            <Clock className="h-4 w-4" strokeWidth={2.5} /> Available 24/7 — Nights & Weekends
          </p>

          <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            Flat Battery? We Hop To{" "}
            <span className="text-gold">You.</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-white/90 sm:text-xl">
            Mobile battery replacement &amp; breakdown assist across the Gold
            Coast — home, work or roadside. Fast response, upfront pricing. Call
            now.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3">
            <CallButton label="Call Now — Free Quote" className="w-full sm:w-auto" />
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-white/80">
              {business.phoneDisplay} · 24 hours · 7 days · Upfront pricing
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-white/90">
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-5 w-5 fill-gold text-gold" /> Trusted by Gold Coast drivers
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-5 w-5 text-gold" /> Upfront pricing
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-5 w-5 text-gold" /> Old battery disposed free
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
