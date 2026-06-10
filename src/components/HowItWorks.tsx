import { PhoneCall, Truck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Call Us",
    desc: "Tell us your location and car. We'll give you upfront pricing and a fast arrival time.",
  },
  {
    icon: Truck,
    title: "We Hop to You",
    desc: "David arrives at your home, work, or roadside — fully equipped to test and replace your battery on the spot.",
  },
  {
    icon: CheckCircle2,
    title: "Back on the Road",
    desc: "We test your charging system, install your new battery, dispose of the old one, and you're sorted — usually within the hour.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-display text-4xl font-extrabold uppercase tracking-tight text-green sm:text-5xl">
          Battery Replaced in 3 Simple Steps
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="text-center">
              <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-green text-gold shadow-lg">
                <Icon className="h-10 w-10" strokeWidth={2} />
                <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gold font-display text-base font-extrabold text-green-dark shadow">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-tight text-green-dark">
                {title}
              </h3>
              <p className="mt-2 text-lg text-ink/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
