"use client";
import { useState } from "react";
import { TrendingUp, MapPin, Activity } from "lucide-react";

export default function Markets() {
  const [activeMarket, setActiveMarket] = useState("Noida");

  const marketData: any = {
    Noida: { 
        score: "88", 
        zones: "Sector 150, 144, Expressway", 
        trend: "High Growth",
        description: "Focus on luxury high-rises and upcoming metro connectivity."
    },
    Gurugram: { 
        score: "94", 
        zones: "Golf Course Ext, Dwarka Expy", 
        trend: "Premium",
        description: "Ultra-luxury segment with highest rental yield in NCR."
    },
    Delhi: { 
        score: "82", 
        zones: "Dwarka, Rohini, South Ext", 
        trend: "Stable",
        description: "High demand in re-developed colonies and gated pockets."
    }
  };

  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-4">
            Market Intelligence
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Explore NCR Live Scores
          </h2>
        </div>

        {/* City Switcher Buttons */}
        <div className="flex justify-center gap-3 mb-10">
          {Object.keys(marketData).map((city) => (
            <button 
              key={city}
              onClick={() => setActiveMarket(city)}
              className={`px-8 py-3 rounded-2xl text-sm font-black transition-all duration-300 uppercase italic tracking-wider border ${
                activeMarket === city 
                ? 'bg-blue-600 border-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-105' 
                : 'border-white/10 text-slate-500 hover:text-white hover:border-white/20'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Data Display Card */}
        <div className="relative p-10 rounded-[40px] bg-white/[0.02] border border-white/5 overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-blue-600/10 blur-[80px]" />
          
          <div className="relative z-10 grid md:grid-cols-3 gap-10 items-center">
            
            {/* Score Circle */}
            <div className="text-center md:text-left">
              <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2 flex items-center justify-center md:justify-start gap-2">
                <Activity className="w-3 h-3" /> Market Score
              </p>
              <div className="text-6xl font-black text-blue-500 italic">
                {marketData[activeMarket].score}<span className="text-2xl text-slate-700">/100</span>
              </div>
            </div>

            {/* Sectors */}
            <div className="text-center md:text-left">
              <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2 flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-3 h-3" /> Hot Zones
              </p>
              <p className="text-white font-bold text-lg leading-tight uppercase">
                {marketData[activeMarket].zones}
              </p>
            </div>

            {/* Trends */}
            <div className="text-center md:text-left">
              <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2 flex items-center justify-center md:justify-start gap-2">
                <TrendingUp className="w-3 h-3" /> Growth Trend
              </p>
              <p className="text-green-500 font-black text-xl uppercase italic">
                {marketData[activeMarket].trend}
              </p>
            </div>

          </div>

          <p className="mt-8 pt-8 border-t border-white/5 text-slate-500 text-sm font-medium italic">
            * {marketData[activeMarket].description}
          </p>
        </div>

      </div>
    </section>
  );
}