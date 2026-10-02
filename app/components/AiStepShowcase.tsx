import { useState } from "react";
import { ArrowUpRight, Play, Sparkles, MessageSquare, Mountain } from "lucide-react";

interface AiStepShowcaseProps {
  onOpenTripModal: (topic?: string) => void;
}

export function AiStepShowcase({ onOpenTripModal }: AiStepShowcaseProps) {
  const [budgetPerDayPKR, setBudgetPerDayPKR] = useState(14500);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden font-sans">
      {/* Floating Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Header Container with Floating Pakistani Traveler Avatars */}
      <div className="relative text-center max-w-3xl mx-auto mb-16">
        
        {/* Floating Avatars around the header */}
        <div className="hidden sm:block absolute -top-6 -left-12 lg:-left-20">
          <div className="relative p-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 shadow-lg shadow-emerald-500/30">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
              alt="Pakistani traveler"
              className="w-11 h-11 rounded-full object-cover"
            />
          </div>
        </div>

        <div className="hidden sm:block absolute top-12 -left-6 lg:-left-12">
          <div className="p-0.5 rounded-full bg-white/20 backdrop-blur-md">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=90&q=80"
              alt="Pakistani traveler"
              className="w-9 h-9 rounded-full object-cover"
            />
          </div>
        </div>

        <div className="hidden sm:block absolute -top-4 -right-12 lg:-right-20">
          <div className="p-1 rounded-full bg-gradient-to-r from-teal-400 to-emerald-500 shadow-lg shadow-teal-500/20">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
              alt="Pakistani traveler"
              className="w-11 h-11 rounded-full object-cover"
            />
          </div>
        </div>

        <div className="hidden sm:block absolute top-14 -right-6 lg:-right-10">
          <div className="p-0.5 rounded-full bg-white/20 backdrop-blur-md">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=90&q=80"
              alt="Pakistani traveler"
              className="w-9 h-9 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Section Title in Editorial Playfair Display */}
        <h2 className="font-display text-[clamp(2.15rem,4.5vw,3.75rem)] font-semibold tracking-tight text-white leading-tight">
          Our AI simplifies every step of <br className="hidden sm:inline" />
          travel across Pakistan <span className="italic font-normal text-emerald-300">allowing you...</span>
        </h2>

        {/* Subtitle in Manrope */}
        <p className="mt-5 text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed font-normal">
          Monitor mountain passes, book vetted 4x4 drivers, calculate fuel budgets, and receive live landslide radar along the Karakoram Highway.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
          <button
            onClick={() => onOpenTripModal("Pakistan Northern Expedition")}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-slate-950 font-semibold text-xs sm:text-sm hover:bg-slate-200 transition-all shadow-lg shadow-white/10 active:scale-95 font-sans"
          >
            <span>Start Free</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-white font-medium text-xs sm:text-sm backdrop-blur-md transition-all active:scale-95 font-sans"
          >
            <Play className="w-3.5 h-3.5 fill-current text-emerald-400" />
            <span>Watch Demo</span>
          </button>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch font-sans">
        
        {/* Card 1: Karakoram & Mountain Passes */}
        <div className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col">
          <div className="relative h-64 sm:h-72 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=800&q=80"
              alt="Karakoram mountain road"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080d19] via-[#080d19]/40 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 inline-flex items-center justify-center text-emerald-400">
                <Mountain className="w-4 h-4" />
              </span>
            </div>
          </div>
          <div className="p-5 flex-1 flex flex-col justify-end -mt-16 relative z-10">
            <h3 className="font-display text-lg font-semibold text-white mb-1.5 group-hover:text-emerald-300 transition-colors">
              Pass & Road Radar
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Real-time alerts on Babusar Pass, Lowari Tunnel, and Karakoram Highway landslide clearances with NHA updates.
            </p>
          </div>
        </div>

        {/* Card 2: Smart PKR Budget Tracker (Featured Center, Taller) */}
        <div className="group glass-panel rounded-2xl overflow-hidden border-2 border-emerald-400/50 hover:border-emerald-400/80 transition-all duration-300 flex flex-col shadow-2xl shadow-emerald-950/50 md:-translate-y-2">
          <div className="relative h-72 sm:h-80 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
              alt="Hiker in northern Pakistan mountains"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080d19] via-[#080d19]/30 to-transparent" />
            
            {/* LIVE Badge */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-emerald-500/40 text-[11px] font-semibold text-emerald-400 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>LIVE PKR</span>
            </div>

            {/* Raast / Local tags */}
            <div className="absolute top-3 right-3 flex items-center bg-black/60 backdrop-blur-md rounded-lg px-2 py-0.5 border border-white/10 text-[10px] font-semibold text-emerald-300">
              JazzCash • Raast
            </div>
          </div>

          <div className="p-5 flex-1 flex flex-col justify-end -mt-16 relative z-10 bg-[#080d19]/90 backdrop-blur-md">
            <div className="flex items-center justify-between mb-1.5">
              <h3 className="font-display text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors">
                Smart PKR Budget Tracker
              </h3>
              <span className="text-xs font-bold text-emerald-400">
                PKR {budgetPerDayPKR.toLocaleString()}/day
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-3 font-normal">
              Calculates fuel consumption, hotel stays, toll plazas, and 4x4 Prado/Jeep hire rates across GB and KPK.
            </p>

            {/* Interactive Slider */}
            <div className="pt-2 border-t border-white/10">
              <div className="flex justify-between text-[10px] text-slate-400 mb-1 font-medium">
                <span>Trip Tier</span>
                <span className="font-semibold text-slate-300">PKR {budgetPerDayPKR.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="5000"
                max="50000"
                step="2500"
                value={budgetPerDayPKR}
                onChange={(e) => setBudgetPerDayPKR(Number(e.target.value))}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>
          </div>
        </div>

        {/* Card 3: Urdu & Local Language AI Assistant */}
        <div className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col">
          <div className="relative h-64 sm:h-72 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
              alt="Local guide in northern Pakistan"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080d19] via-[#080d19]/40 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 inline-flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-4 h-4" />
              </span>
            </div>
          </div>
          <div className="p-5 flex-1 flex flex-col justify-end -mt-16 relative z-10">
            <h3 className="font-display text-lg font-semibold text-white mb-1.5 group-hover:text-emerald-300 transition-colors">
              Urdu AI Travel Assistant
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Communicate in Roman Urdu or English. Receive cultural tips, dialect phrase assistance (Shina/Balti/Pashto), and 1122 emergency aid.
            </p>
          </div>
        </div>

        {/* Card 4: Highway Dhabas & Desi Food */}
        <div className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col">
          <div className="relative h-64 sm:h-72 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80"
              alt="Night food street"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080d19] via-[#080d19]/40 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 inline-flex items-center justify-center text-emerald-400">
                <Sparkles className="w-4 h-4" />
              </span>
            </div>
          </div>
          <div className="p-5 flex-1 flex flex-col justify-end -mt-16 relative z-10">
            <h3 className="font-display text-lg font-semibold text-white mb-1.5 group-hover:text-emerald-300 transition-colors">
              Curated Dhabas & Dining
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Find the best mutton karahi stops on KKH, Swat river trout spots, Peshawar chapli kebabs, and authentic Hunza walnut cakes.
            </p>
          </div>
        </div>

      </div>

      {/* Video Demo Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 font-sans">
          <div className="relative w-full max-w-3xl glass-panel rounded-2xl p-6 border border-white/20 shadow-2xl">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg px-2"
            >
              ✕
            </button>
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-900 border border-white/10 flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mb-4">
                <Play className="w-8 h-8 fill-emerald-400 text-emerald-400" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mb-2">Raahein Pakistan AI Tour Demo</h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mb-6 leading-relaxed">
                See how our AI routes road trips through M-2 motorway, Hazara Expressway, KKH, and arranges 4x4 jeeps with live weather forecasts.
              </p>
              <button
                onClick={() => {
                  setIsVideoModalOpen(false);
                  onOpenTripModal("Hunza Road Trip Demo");
                }}
                className="px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/30 font-sans"
              >
                Plan Your Tour Now ↗
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
