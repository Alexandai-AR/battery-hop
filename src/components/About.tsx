import { Wrench } from "lucide-react";
import CallButton from "./CallButton";

export default function About() {
  return (
    <section id="about" className="bg-green-dark py-16 text-white sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold text-green-dark shadow-lg">
          <Wrench className="h-9 w-9" strokeWidth={2} />
        </div>
        <h2 className="mt-6 font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
          Meet David — Your Local Battery Specialist
        </h2>

        <div className="mt-7 space-y-4 text-left text-lg text-white/85">
          <p>
            David started Battery Hop after seeing how frustrating and
            inconvenient a flat battery can be. Whether you&apos;re stranded at
            home, at work or on the side of the road, a dead battery can bring
            your entire day to a stop.
          </p>
          <p>
            With a focus on fast response times, honest service and quality
            batteries, David built the business around one simple idea: make
            battery replacement as easy and stress-free as possible.
          </p>
          <p>
            Today, David proudly helps drivers across the Gold Coast with
            reliable mobile battery replacement, bringing professional service
            directly to their location. Every vehicle is treated with care,
            every battery is tested properly, and every customer receives
            upfront advice and pricing.
          </p>
          <p>
            When you call, you&apos;re dealing with a local business that
            genuinely cares about getting you back on the road quickly and
            safely.
          </p>
        </div>

        <div className="mt-9">
          <CallButton label="Call David Now" />
        </div>
      </div>
    </section>
  );
}
