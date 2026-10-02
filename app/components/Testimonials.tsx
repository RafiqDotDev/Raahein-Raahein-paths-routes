import { useState } from "react";
import { ArrowUpRight, Star } from "lucide-react";

export function Testimonials() {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const stories = [
    {
      author: "Usman Zubair",
      role: "Landscape Photographer • Islamabad",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
      image: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=800&q=80",
      quote:
        "Capturing golden hour at Passu Cones and Katpana Desert was made effortless. Raahein tracked alpine sun angles, cloud cover, and local Prado drivers right from my phone.",
      trip: "Passu & Katpana Desert, 8 Days",
    },
    {
      author: "Fatima & Bilal",
      role: "Family Travelers • Lahore",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      quote:
        "Traveling with toddlers up north can be challenging. The AI paced our driving stops along the Hazara Expressway and booked reliable family resorts in Hunza with heating and hot water.",
      trip: "Hunza & Attabad Lake, 7 Days",
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans">
      {/* Header Container */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-emerald-400 mb-4 uppercase tracking-wider font-sans">
            Testimonials
          </div>
          <h2 className="font-display text-[clamp(2.15rem,4.5vw,3.75rem)] font-semibold tracking-tight text-white leading-tight">
            Loved by Explorers <br />
            Across Pakistan
          </h2>
        </div>
        <div className="max-w-md">
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
            From Karachi road-trippers to Islamabad weekend hikers, see how smart Pakistani explorers travel with peace of mind.
          </p>
        </div>
      </div>

      {/* Testimonials Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Social counter + Couple Review */}
        <div className="md:col-span-4 flex flex-col gap-6">
          
          {/* Avatar counter card */}
          <div className="glass-panel rounded-2xl p-5 border border-white/10 flex items-center justify-between">
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                alt="Pakistani traveler"
                className="w-10 h-10 rounded-full ring-2 ring-[#050811] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                alt="Pakistani traveler"
                className="w-10 h-10 rounded-full ring-2 ring-[#050811] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                alt="Pakistani traveler"
                className="w-10 h-10 rounded-full ring-2 ring-[#050811] object-cover"
              />
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-300 ring-2 ring-[#050811] flex items-center justify-center text-xs font-bold border border-emerald-400/30">
                +50k
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center text-amber-400 gap-0.5 justify-end mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] text-slate-300 font-semibold">4.9 / 5 Pakistani rating</span>
            </div>
          </div>

          {/* Review Card 1: Hamza & Ayesha */}
          <div className="glass-panel rounded-2xl p-6 border border-white/10 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                  alt="Hamza & Ayesha"
                  className="w-10 h-10 rounded-full object-cover ring-1 ring-emerald-400/40"
                />
                <div>
                  <h4 className="font-display text-base font-semibold text-white">Hamza & Ayesha</h4>
                  <p className="text-[11px] text-slate-400 font-medium">Lahore • Swat Kalam Tour</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-normal">
                "When rain caused heavy traffic near Madyan, Raahein alerted us in real-time and routed us to a breathtaking alternative route along Swat River. Saved our vacation!"
              </p>
            </div>
            <div className="h-24 rounded-xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=500&q=80"
                alt="Swat Kalam Valley"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <span className="absolute bottom-2 left-2 text-[10px] text-white font-medium px-2 py-0.5 rounded bg-black/60 backdrop-blur-md">
                Kalam, Swat Valley
              </span>
            </div>
          </div>

        </div>

        {/* Center Column: Dr. Tariq Mansoor Card */}
        <div className="md:col-span-4 glass-panel rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                alt="Dr. Tariq Mansoor"
                className="w-10 h-10 rounded-full object-cover ring-1 ring-emerald-400/40"
              />
              <div>
                <h4 className="font-display text-base font-semibold text-white">Dr. Tariq Mansoor</h4>
                <p className="text-[11px] text-slate-400 font-medium">Karachi • Skardu By Air</p>
              </div>
            </div>

            <div className="h-44 rounded-xl overflow-hidden relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80"
                alt="Skardu mountains and Shangrila"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <span className="absolute bottom-2 left-2 text-[10px] text-white font-medium px-2 py-0.5 rounded bg-black/60 backdrop-blur-md">
                Shangrila & Shigar
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              "PIA flight weather delays to Skardu are legendary. Raahein gave our family instant flight status and automatically coordinated our local 4x4 Prado driver in Skardu without middleman charges."
            </p>
          </div>

          <button
            onClick={() => alert("Full story: Dr. Tariq traveled with 6 family members across Baltistan using Raahein.")}
            className="mt-6 w-full py-2 px-4 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5 transition-colors font-sans"
          >
            <span>Read Safar Story</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>

        {/* Right Column: Usman Zubair with Passu Photography */}
        <div className="md:col-span-4 glass-panel rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={stories[activeStoryIndex].avatar}
                alt={stories[activeStoryIndex].author}
                className="w-10 h-10 rounded-full object-cover ring-1 ring-emerald-400/40"
              />
              <div>
                <h4 className="font-display text-base font-semibold text-white">{stories[activeStoryIndex].author}</h4>
                <p className="text-[11px] text-slate-400 font-medium">{stories[activeStoryIndex].role}</p>
              </div>
            </div>

            <div className="h-52 rounded-xl overflow-hidden relative mb-4">
              <img
                src={stories[activeStoryIndex].image}
                alt="Passu cones northern Pakistan"
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-2 left-2 text-[10px] text-white font-medium px-2 py-0.5 rounded bg-black/60 backdrop-blur-md">
                {stories[activeStoryIndex].trip}
              </span>
            </div>

            {/* Editorial quote in Playfair Display italic */}
            <p className="font-display text-xs sm:text-sm text-slate-200 italic leading-relaxed">
              "{stories[activeStoryIndex].quote}"
            </p>
          </div>

          {/* Pagination Indicators */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-sans">
            <span className="text-[11px] text-slate-400 font-medium">Verified Explorer • Pakistan</span>
            <div className="flex items-center gap-2">
              {stories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStoryIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeStoryIndex === i ? "bg-emerald-400 w-5" : "bg-white/20"
                  }`}
                  aria-label={`Story ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
