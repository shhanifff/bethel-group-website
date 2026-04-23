import Navbar from "@/components/Navbar";
import IndustriesHero from "@/components/IndustriesHero";
import IndustryGrid from "@/components/IndustryGrid";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Industries | Bethel Group",
  description: "Explore our deep expertise across global sectors, including Finance, Healthcare, Technology, and Retail.",
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <IndustriesHero />
      <IndustryGrid />
      
      {/* Sector Advantage Section */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-green-500 uppercase tracking-widest mb-3">The Sector Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Why Sector <span className="text-green-500">Expertise Matters</span></h3>
            <p className="text-slate-400 text-lg">
              Generic advice fails in specialized markets. We provide deep-domain insights that account for regulatory shifts, competitive dynamics, and sector-specific valuation multiples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Proprietary Data", desc: "Access to industry-specific transaction data not available in public databases." },
              { title: "Regulatory Foresight", desc: "Understanding how policy shifts will impact valuations in your specific sector." },
              { title: "Network Access", desc: "Direct connections to strategic buyers and institutional investors in every niche." }
            ].map((item) => (
              <div key={item.title} className="p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-green-500 transition-all">
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-green-600">
        <div className="container mx-auto px-4 md:px-12 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Discuss Your <span className="text-slate-900">Sector Goals</span> Today</h2>
          <p className="text-xl text-green-50 mb-12 max-w-2xl mx-auto">
            Connect with a sector-specialized advisor who understands your unique market challenges and opportunities.
          </p>
          <button className="bg-white text-green-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all active:scale-95 shadow-2xl">
            Speak to a Sector Advisor
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
