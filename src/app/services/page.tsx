import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/ServicesHero";
import DetailedServices from "@/components/DetailedServices";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Services | Bethel Group",
  description: "Explore our specialized business advisory services, including M&A advisory, business valuation, and corporate restructuring.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ServicesHero />
      <DetailedServices />
      {/* FAQ or CTA Section could be added here */}
      <section className="py-24 bg-green-600">
        <div className="container mx-auto px-4 md:px-12 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Maximize Your <span className="text-slate-900">Business Value?</span></h2>
          <p className="text-xl text-green-50 mb-12 max-w-2xl mx-auto">
            Schedule a confidential consultation with our senior advisors today and discover how we can help you achieve your strategic goals.
          </p>
          <button className="bg-white text-green-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all active:scale-95 shadow-2xl">
            Book a Free Valuation
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
