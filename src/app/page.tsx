import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import ServiceArea from "@/components/ServiceArea";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import { faqs } from "@/lib/business";

// FAQPage structured data — eligible for rich results in Google search.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main className="pb-16 md:pb-0">
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Services />
        <Pricing />
        <Reviews />
        <ServiceArea />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
