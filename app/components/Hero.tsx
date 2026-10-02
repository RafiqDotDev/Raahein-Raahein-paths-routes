import { useState } from "react";
import { ArrowUpRight, Search, Mic, SlidersHorizontal, Sparkles, Plane, Star } from "lucide-react";

interface HeroProps {
  onOpenTripModal: (query?: string) => void;
}

export function Hero({ onOpenTripModal }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isListening, setIsListening] = useState(false);

  const quickPrompts = [
    { label: "🏔️ 7-day Hunza & Khunjerab Tour", value: "7-day road trip from Islamabad to Hunza, Attabad Lake & Khunjerab Pass" },
    { label: "🌸 Skardu & Deosai Plains", value: "5-day flight trip to Skardu, Shangrila Resort, Katpana Desert & Deosai" },
    { label: "🌊 Ormara & Gwadar Coastal Drive", value: "3-day coastal highway road trip to Kund Malir, Ormara & Gwadar" },
  ];

  const handlePromptClick = (promptVal: string) => {
    setSearchQuery(promptVal);
    onOpenTripModal(promptVal);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onOpenTripModal(searchQuery);
    } else {
      onOpenTripModal("Hunza Valley & Passu Cones");
    }
  };

  const toggleMic = () => {
    setIsListening((prev) => !prev);
    if (!isListening) {
      setTimeout(() => {
        setSearchQuery("5-day family trip to Swat Kalam & Malam Jabba");
        setIsListening(false);
      }, 1500);
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden">
      {/* Background with Mountain & Atmospheric Haze */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=2200&q=85"
          alt="Traveler on mountain peak looking at snow-capped Karakoram ranges"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110"
        />
        {/* Gradients to seamlessly blend into deep dark background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/45 to-[#070c17]/85" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050811]/40 to-[#050811]/90" />
      </div>

      {/* Floating Top-Right Itinerary Card */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 pt-4">
          
          {/* Main Hero Header */}
          <div className="max-w-2xl text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-slate-200 mb-6 shadow-lg shadow-black/20 font-sans">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Pakistan's #1 AI Travel Co-Pilot</span>
            </div>

            {/* Editorial Hero Headline in Playfair Display */}
            <h1 className="font-display text-[clamp(2.75rem,6.5vw,5.75rem)] font-semibold tracking-tight text-white leading-[1.08] drop-shadow-md">
              Smart & Simple <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300 italic font-medium">
                Trip Planning
              </span>
            </h1>

            {/* Sub-action CTA Button */}
            <div className="mt-8">
              <button
                onClick={() => onOpenTripModal("Hunza & Skardu Expedition")}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-sans font-semibold text-sm sm:text-base transition-all duration-300 shadow-xl hover:shadow-emerald-500/20 active:scale-95"
              >
                <span>Plan Your Safar</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Floating Top-Right Mini Card (Attabad Lake & Hunza preview) */}
          <div className="hidden lg:block">
            <div className="w-68 glass-panel rounded-2xl p-3 border border-white/15 shadow-2xl backdrop-blur-xl animate-fade-in hover:border-white/30 transition-all duration-300 font-sans">
              <div className="relative h-32 rounded-xl overflow-hidden mb-3">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                  alt="Attabad Lake turquoise waters Hunza"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 flex gap-1.5">
                  <span className="bg-black/60 backdrop-blur-md text-[10px] font-semibold text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-400/30">
                    AI Curated
                  </span>
                </div>
              </div>
              <div className="px-1">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span className="font-medium">Hunza, Gilgit-Baltistan</span>
                  <span className="flex items-center text-amber-300 text-[11px] gap-0.5 font-semibold">
                    ★ 4.9
                  </span>
                </div>
                <h4 className="font-display text-base font-semibold text-white mb-2 leading-snug">
                  5-Day Karakoram Discovery
                </h4>
                <button
                  onClick={() => onOpenTripModal("Attabad Lake & Hunza Valley")}
                  className="w-full py-1.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-slate-200 transition-colors flex items-center justify-center gap-1 font-sans"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Interactive Deck */}
      <div className="relative z-10 max-w-7xl mx-auto w-full mt-12 lg:mt-20 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          
          {/* Left: Domestic Flight / Transit Route Card */}
          <div className="lg:col-span-3 glass-panel rounded-2xl p-4 border border-white/15 shadow-xl">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                <Plane className="w-3 h-3" /> Direct Flight
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold">
                PKR 28,500
              </span>
            </div>
            <div className="flex items-center justify-between text-slate-200 font-bold text-base py-1 border-b border-white/10 tracking-tight">
              <span className="text-white">ISB (Islamabad)</span>
              <span className="text-slate-400 text-xs font-normal">✈ 50m</span>
              <span className="text-white">KDU (Skardu)</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400 pt-2 font-medium">
              <span>May 10 - May 16</span>
              <span>2 Adults • Prado Ready</span>
            </div>
          </div>

          {/* Center: Search & AI Prompt Dock */}
          <div className="lg:col-span-6 glass-panel rounded-2xl p-3 sm:p-4 border border-white/20 shadow-2xl backdrop-blur-2xl">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <div className="absolute left-3.5 text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ask in English or Roman Urdu... e.g. '5-day trip to Kalam Swat with family'"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-24 text-sm text-white placeholder-slate-400 font-sans focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-transparent transition-all"
              />
              <div className="absolute right-2 flex items-center gap-1">
                <button
                  type="button"
                  onClick={toggleMic}
                  title="Voice prompt"
                  className={`p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ${
                    isListening ? "text-rose-400 animate-pulse bg-rose-500/20" : ""
                  }`}
                >
                  <Mic className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onOpenTripModal(searchQuery || "Hunza Valley, Pakistan")}
                  title="Trip preferences"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                </button>
                <button
                  type="submit"
                  className="ml-1 p-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-md shadow-emerald-500/30 transition-transform active:scale-95"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Quick Prompt Pills */}
            <div className="flex flex-wrap items-center gap-2 mt-3 pt-2 border-t border-white/5">
              {quickPrompts.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handlePromptClick(p.value)}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white font-medium transition-all duration-200"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Social Proof & Reviews Card */}
          <div className="lg:col-span-3 glass-panel rounded-2xl p-4 border border-white/15 shadow-xl flex items-center gap-3">
            <div className="flex -space-x-2 shrink-0">
              <img
                className="w-9 h-9 rounded-full ring-2 ring-[#050811] object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                alt="Pakistani traveler"
              />
              <img
                className="w-9 h-9 rounded-full ring-2 ring-[#050811] object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="Pakistani traveler"
              />
              <img
                className="w-9 h-9 rounded-full ring-2 ring-[#050811] object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                alt="Pakistani traveler"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center text-amber-400 gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                Join <strong className="text-white font-bold">50,000+</strong> Pakistanis exploring northern peaks & coastal escapes.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
