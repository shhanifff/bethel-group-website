import Navbar from "@/components/Navbar";
import TransactionsHero from "@/components/TransactionsHero";
import TransactionGrid from "@/components/TransactionGrid";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Recent Transactions | Bethel Group",
  description: "View our track record of successful transactions, including M&A advisory, valuations, and corporate restructuring across various industries.",
};

export default function TransactionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <TransactionsHero />
      <TransactionGrid />
      
      {/* Testimonial Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-12">
          <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-12 relative">
             <div className="text-8xl text-green-600 font-serif opacity-20 absolute top-10 left-10">"</div>
             <div className="relative z-10 w-full md:w-2/3">
                <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed mb-8 italic">
                  "The Bethel Group was instrumental in navigating the complex sale of our family-owned technology business. Their valuation accuracy and negotiation skills secured a deal that far exceeded our expectations."
                </p>
                <div>
                   <p className="text-xl font-bold text-slate-900">David Henderson</p>
                   <p className="text-slate-500 font-medium">Former CEO, TechLogistics Global</p>
                </div>
             </div>
             <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-48 h-48 rounded-2xl bg-green-600 rotate-3 flex items-center justify-center p-4">
                   <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                      <span className="text-slate-900 font-black text-4xl">TLG</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
