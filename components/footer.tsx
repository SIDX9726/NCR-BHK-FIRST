"use client";
import { X, Mail, ExternalLink, Zap } from "lucide-react";
import { toast } from "sonner"; // Import toast for the witty alerts

export default function Footer() {
  
  // Updated witty response logic - Deadlines removed for a "Product in the Lab" vibe
  const handleWittyAlert = (type: string) => {
    if (type === 'pricing') {
      toast.info("Pricing engine is recalibrating...", {
        description: "⚠️ Our pricing is so transparent, the lawyers are still trying to find a catch. Full disclosure coming soon.",
      });
    } else if (type === 'markets') {
      toast.info("Deep Scan in progress...", {
        description: "📍 Relax, we're currently judging sectors you haven't even heard of yet. The full NCR heat-map is worth the wait.",
      });
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-black italic tracking-tighter text-white mb-4">
              NCR<span className="text-blue-500">.BHK</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Decoding the NCR real estate maze with AI-driven scoring. No brokers, no lies, just pure data.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest text-blue-500">Platform</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-white cursor-pointer transition-all flex items-center gap-2 group"
              >
                How it Works <Zap className="w-3 h-3 group-hover:text-blue-500" />
              </li>
              <li 
                onClick={() => handleWittyAlert('pricing')}
                className="hover:text-white cursor-pointer transition-all flex items-center gap-2 group"
              >
                Pricing <ExternalLink className="w-3 h-3 group-hover:text-blue-500" />
              </li>
              <li 
                onClick={() => handleWittyAlert('markets')}
                className="hover:text-white cursor-pointer transition-all flex items-center gap-2 group"
              >
                Micro-Markets <ExternalLink className="w-3 h-3 group-hover:text-blue-500" />
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest text-blue-500">Inquiries</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-bold">
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-blue-500" />
                </div>
                <a href="mailto:siddharthyad03@gmail.com" className="hover:text-white transition-colors">
                  siddharthyad03@gmail.com
                </a>
              </li>
              <li className="text-[10px] text-slate-600 uppercase tracking-widest pl-11 font-black">
                Direct to Founder
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest text-blue-500">System Status</h4>
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-500/5 border border-blue-500/10 text-blue-400 text-[10px] font-black tracking-widest uppercase">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                AI Engine: Training
              </div>
              {/* Updated witty description removing the April 18 date */}
              <p className="text-slate-500 text-[11px] italic leading-relaxed font-medium">
                "Background checks on 500+ builders are currently being processed. Quality takes time."
              </p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.4em]">
            © 2026 NCRBHK. Built for the Bold.
          </p>
          <div className="flex gap-4">
             <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-blue-600 transition-all">
                <X className="w-4 h-4 text-white" />
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
}