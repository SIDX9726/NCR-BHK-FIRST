"use client";
import { useState } from "react";
import { ShieldAlert, Zap, Target, ChevronDown } from "lucide-react";

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const points = [
    {
      title: "P.I. Level Background Checks",
      description: "We dig deeper than a private investigator. Builder track record, litigation history, and hidden clauses—uncovered.",
      icon: <ShieldAlert className="w-6 h-6 text-blue-400" />,
      tag: "Security",
      detail: "Checking: RERA Compliance, NCLT Status, and 10-year builder delivery history."
    },
    {
      title: "Proprietary Scoring Engine",
      description: "Don't buy on gut feeling. Our AI evaluates 20+ parameters to score every BHK.",
      icon: <Target className="w-6 h-6 text-purple-400" />,
      tag: "AI-Powered",
      detail: "Parameters: Distance to Metro, Price Appreciation Index, and AQI Trends."
    },
    {
      title: "NCR Micro-Market Edge",
      description: "From Dwarka Expressway's boom to Noida's potential—we give you data before it becomes common knowledge.",
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      tag: "Speed",
      detail: "Live Feeds: New Infrastructure projects and upcoming Commercial Hubs in NCR."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 italic uppercase">
            Why <span className="text-blue-500">NCRBHK</span>?
          </h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Click a card to see our engine in action</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div 
              key={index} 
              onClick={() => setActiveFeature(activeFeature === index ? null : index)}
              className={`relative group p-8 rounded-[32px] border transition-all duration-500 cursor-pointer overflow-hidden ${
                activeFeature === index 
                ? 'bg-white/10 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.2)]' 
                : 'bg-white/[0.02] border-white/5 hover:border-white/20'
              }`}
            >
              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <div className={`p-4 rounded-2xl transition-colors ${activeFeature === index ? 'bg-blue-600' : 'bg-white/5'}`}>
                    {point.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 border border-white/10 px-2 py-1 rounded-md">
                    {point.tag}
                  </span>
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 tracking-tight transition-colors ${activeFeature === index ? 'text-blue-400' : 'text-white'}`}>
                  {point.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {point.description}
                </p>

                {/* Animated Detail Section */}
                <div className={`overflow-hidden transition-all duration-500 ${activeFeature === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-[10px] font-black text-blue-500 uppercase mb-2 tracking-[0.2em]">Deep Scan Status:</p>
                    <p className="text-xs font-mono text-green-400 leading-relaxed bg-black/40 p-3 rounded-xl border border-green-500/20">
                      {point.detail}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex justify-center">
                   <ChevronDown className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${activeFeature === index ? 'rotate-180 text-blue-500' : ''}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}