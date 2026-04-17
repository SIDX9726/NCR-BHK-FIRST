"use client";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Hero() {
  // Your specific Formspree ID
  const [state, handleSubmit] = useForm("maqaeeal");

  // Success State: Shown after they click "I'M INTERESTED"
  if (state.succeeded) {
    return (
      <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32 flex items-center justify-center min-h-[70vh]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        
        <div className="relative max-w-xl bg-white/5 border border-blue-500/30 p-12 rounded-[40px] text-center backdrop-blur-xl shadow-2xl">
          <h2 className="text-4xl font-black text-white mb-6 italic uppercase tracking-tighter">
            Access: <span className="text-blue-500">PENDING</span> 🚀
          </h2>
          <p className="text-slate-400 font-medium leading-relaxed">
            Our AI is currently crunching millions of data points to ensure your first scan is flawless. 
            We'll ping you at your email the second the gates open. No brokers, no spam.
          </p>
          <div className="mt-8 pt-8 border-t border-white/10 text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">
            Verified Entry • NCRBHK Lab
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-32 border-b border-white/5">
      {/* Background Aesthetic Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
      
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {/* Pre-launch Tag */}
        <div className="inline-flex items-center rounded-full px-4 py-1.5 text-[10px] font-black leading-6 text-blue-400 ring-1 ring-inset ring-blue-400/20 mb-10 bg-blue-400/5 uppercase tracking-[0.3em]">
          NCR Intelligence • Early Access Phase
        </div>
        
        <h1 className="text-6xl font-black tracking-tighter text-white sm:text-9xl italic uppercase">
          NCR<span className="text-blue-500">.BHK</span>
        </h1>
        
        <p className="mt-8 text-lg text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
          The product is in the pipeline. We’re doing the background checks so you don't have to hire a 
          <span className="text-white"> private investigator.</span> 
          Join the elite waitlist for the data-driven future of NCR real estate.
        </p>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="mt-12 flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
          <div className="w-full">
            <input
              id="email"
              type="email" 
              name="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-2xl border-0 bg-white/5 px-6 py-5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 text-lg transition-all"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-2 text-left ml-2" />
          </div>

          <button 
            type="submit" 
            disabled={state.submitting}
            className="flex-none rounded-2xl bg-blue-600 px-10 py-5 text-sm font-black text-white hover:bg-blue-500 disabled:opacity-50 transition-all uppercase italic tracking-widest shadow-[0_0_20px_rgba(37,99,235,0.3)] h-fit"
          >
            {state.submitting ? "SENDING..." : "I'M INTERESTED"}
          </button>
        </form>

        {/* Region Tags */}
        <div className="mt-16 flex justify-center gap-x-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
          <span>Noida</span>
          <span className="text-blue-500">•</span>
          <span>Gurugram</span>
          <span className="text-blue-500">•</span>
          <span>Delhi</span>
        </div>
      </div>
    </section>
  );
}