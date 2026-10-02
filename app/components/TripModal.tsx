import { useState, useEffect } from "react";
import { X, Sparkles, Calendar, MapPin, CheckCircle2 } from "lucide-react";

interface TripModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDestination?: string;
}

export function TripModal({ isOpen, onClose, initialDestination }: TripModalProps) {
  const [destination, setDestination] = useState(initialDestination || "Hunza Valley, Gilgit-Baltistan");
  const [days, setDays] = useState("7 Days");
  const [vibe, setVibe] = useState("Family Road Trip");
  const [transport, setTransport] = useState("Private 4x4 Prado / Jeep");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedItinerary, setGeneratedItinerary] = useState<any | null>(null);

  useEffect(() => {
    if (initialDestination) {
      setDestination(initialDestination);
    }
  }, [initialDestination]);

  if (!isOpen) return null;

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setGeneratedItinerary(null);

    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedItinerary({
        destination,
        days,
        vibe,
        transport,
        totalEst: "PKR 145,000",
        schedule: [
          {
            day: "Day 1: Islamabad ➔ Naran / Chilas",
            morning: "Departure from Islamabad via Hazara Motorway (M-15). Quick breakfast at Abbottabad.",
            afternoon: "Ascend via Balakot and scenic Kiwai waterfall. Enjoy hot pakoras & Kashmiri chai.",
            evening: "Arrive at Naran / Chilas riverfront hotel. Rest and check 4x4 tire pressure.",
          },
          {
            day: "Day 2: Babusar Pass ➔ Hunza Karimabad",
            morning: "Cross Babusar Pass (13,700 ft) with breathtaking panoramic views of Lulusar Lake.",
            afternoon: "Stop at the World's 3 Mountain Ranges Junction (Himalaya, Karakoram, Hindu Kush) & view Rakaposhi.",
            evening: "Check-in at Karimabad resort. Experience sunset over Golden Peak from Eagle's Nest (Duikar).",
          },
          {
            day: "Day 3: Attabad Lake & Khunjerab Pass",
            morning: "Jet ski & boat safari on turquoise Attabad Lake. Walk the Hussaini Suspension Bridge.",
            afternoon: "Scenic drive through Passu Cones and enter Khunjerab National Park (Pak-China border).",
            evening: "Return to Karimabad for traditional Chapshuro and walnut pie at Cafe de Hunza.",
          },
        ],
        tips: [
          "SCOM / Jazz 4G connectivity active throughout Karimabad & Aliabad.",
          "Keep original CNICs / Passports accessible for Chilas and Gilgit checkpoints.",
          "4x4 Prado driver pre-verified by Local Gilgit-Baltistan Drivers Union.",
        ],
      });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto font-sans">
      <div className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-white">
            Pakistan AI Safar Itinerary Builder
          </h3>
        </div>
        <p className="text-xs text-slate-400 mb-6 font-normal">
          Tailored for northern valleys, motorway routes, Babusar Pass timings, and family comfort.
        </p>

        {/* Form Inputs in Manrope */}
        <form onSubmit={handleGenerate} className="space-y-4 font-sans">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Destination / Valley in Pakistan
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-emerald-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g. Hunza, Skardu, Swat Kalam, or Neelum Kashmir"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 font-sans"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Trip Duration
              </label>
              <select
                value={days}
                onChange={(e) => setDays(e.target.value)}
                className="w-full bg-[#0d1627] border border-white/10 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50 font-sans"
              >
                <option value="3 Days">3 Days (Weekend Escape)</option>
                <option value="5 Days">5 Days (Express Tour)</option>
                <option value="7 Days">7 Days (Standard Safar)</option>
                <option value="10 Days">10 Days (Deep Expedition)</option>
                <option value="14 Days">14 Days (Grand Pakistan Tour)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Travel Style
              </label>
              <select
                value={vibe}
                onChange={(e) => setVibe(e.target.value)}
                className="w-full bg-[#0d1627] border border-white/10 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50 font-sans"
              >
                <option value="Family Road Trip">Family Road Trip</option>
                <option value="Honeymoon & Couples">Honeymoon & Couples</option>
                <option value="Trekking & Camping">Trekking & Camping</option>
                <option value="Friends Road Adventure">Friends Road Adventure</option>
                <option value="Heritage & Food Walk">Heritage & Food Walk</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Transport Mode
              </label>
              <select
                value={transport}
                onChange={(e) => setTransport(e.target.value)}
                className="w-full bg-[#0d1627] border border-white/10 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50 font-sans"
              >
                <option value="Private 4x4 Prado / Jeep">Private 4x4 Prado / Jeep</option>
                <option value="Own Car (Sedan / SUV)">Own Car (Sedan / SUV)</option>
                <option value="Domestic Flight (PIA/Airblue)">Domestic Flight (PIA/Airblue)</option>
                <option value="HiAce / Coaster Group">HiAce / Coaster Group</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={isGenerating}
            className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:opacity-90 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 font-sans"
          >
            {isGenerating ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>Checking Babusar Pass & fuel estimates...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generate Smart Pakistan Itinerary</span>
              </>
            )}
          </button>
        </form>

        {/* Generated Result Container */}
        {generatedItinerary && (
          <div className="mt-6 pt-6 border-t border-white/10 animate-fade-in font-sans">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider font-sans">
                  AI Generated Safar Plan
                </span>
                <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                  {generatedItinerary.destination} • {generatedItinerary.days}
                </h4>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold font-sans">
                Est. Total {generatedItinerary.totalEst}
              </span>
            </div>

            {/* Schedule Days */}
            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {generatedItinerary.schedule.map((item: any, idx: number) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1.5 font-sans">
                  <div className="font-display font-semibold text-emerald-300 text-sm flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.day}</span>
                  </div>
                  <p className="text-slate-300 pl-5 font-normal">🌅 <strong>Subah:</strong> {item.morning}</p>
                  <p className="text-slate-300 pl-5 font-normal">☀️ <strong>Dopeher:</strong> {item.afternoon}</p>
                  <p className="text-slate-300 pl-5 font-normal">🌙 <strong>Shaam:</strong> {item.evening}</p>
                </div>
              ))}
            </div>

            {/* AI Local Perks */}
            <div className="mt-4 p-3 rounded-xl bg-emerald-950/40 border border-emerald-400/20 text-[11px] text-emerald-200 space-y-1 font-sans font-medium">
              {generatedItinerary.tips.map((tip: string, i: number) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex gap-3 font-sans">
              <button
                onClick={() => {
                  alert(`Safar itinerary for ${generatedItinerary.destination} saved! SMS with driver contacts sent.`);
                  onClose();
                }}
                className="flex-1 py-2.5 rounded-xl bg-white text-slate-950 font-bold text-xs hover:bg-slate-200 transition-colors text-center"
              >
                Save Safar & Book Driver
              </button>
              <button
                onClick={() => alert("WhatsApp travel link copied!")}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
              >
                WhatsApp Share
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
