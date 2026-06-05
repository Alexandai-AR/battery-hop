import { Plus } from "lucide-react";
import { faqs } from "@/lib/business";

// Native <details>/<summary> accordion — works without JavaScript, great for SEO.
export default function FAQ() {
  return (
    <section id="faq" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-center font-display text-4xl font-extrabold uppercase tracking-tight text-green sm:text-5xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border-2 border-green/10 bg-white px-6 py-5 transition open:border-gold [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold uppercase tracking-tight text-green-dark">
                {item.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green text-gold transition group-open:rotate-45 group-open:bg-gold group-open:text-green-dark">
                  <Plus className="h-5 w-5" strokeWidth={3} />
                </span>
              </summary>
              <p className="mt-3 text-lg text-ink/75">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
