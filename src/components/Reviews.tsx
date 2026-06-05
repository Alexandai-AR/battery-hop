import { Star, Quote } from "lucide-react";
import { reviews } from "@/lib/business";

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-display text-4xl font-extrabold uppercase tracking-tight text-green sm:text-5xl">
          What Gold Coast Drivers Say
        </h2>
        <div className="mt-4 flex items-center justify-center gap-2">
          <Stars />
          <span className="font-display text-lg font-bold uppercase tracking-wide text-green-dark">
            Rated 5 Stars by Gold Coast drivers
          </span>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-2xl border-2 border-green/10 bg-cream p-7"
            >
              <Quote className="h-9 w-9 text-gold" />
              <blockquote className="mt-3 flex-1 text-lg text-ink/80">{r.text}</blockquote>
              <figcaption className="mt-5 flex items-center justify-between border-t border-green/10 pt-4">
                <span className="font-display text-lg font-bold uppercase tracking-tight text-green-dark">
                  {r.name}
                </span>
                <Stars />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
