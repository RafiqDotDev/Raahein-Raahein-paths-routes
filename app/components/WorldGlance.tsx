import { useState } from "react";
import { ArrowUpRight, ShieldCheck, Search, MapPin, CheckCircle2, Mountain, Compass } from "lucide-react";

interface WorldGlanceProps {
  onOpenTripModal: (destination?: string) => void;
}

export function WorldGlance({ onOpenTripModal }: WorldGlanceProps) {
  const [activeTab, setActiveTab] = useState<"Pass Alerts" | "Road Radar" | "Local Insights">("Pass Alerts");
  const [mapRegion, setMapRegion] = useState<"ALL REGIONS" | "GILGIT-BALTISTAN" | "KPK" | "PUNJAB & SINDH">("ALL REGIONS");
  const [selectedHub, setSelectedHub] = useState<string>("Hunza");
  const [mapSearch, setMapSearch] = useState("");

  const tabContent = {
    "Pass Alerts": {
      icon: Mountain,
      headline: "Live mountain pass openings, Babusar Pass status, and snow reports.",
      alertDetail: "Babusar Pass: Open for light traffic • Lowari Tunnel: Open 24/7 • Deosai Plains: 4x4 Jeep accessible.",
      badge: "Pass Clear",
      cta: "View Highway Status",
    },
    "Road Radar": {
      icon: ShieldCheck,
      headline: "Real-time NHA & Motorway Police traffic & landslide clearance advisories.",
      alertDetail: "KKH (Karakoram Highway) smooth between Besham and Chilas. Hazara Expressway M-15 100% clear.",
      badge: "Motorway Clear",
      cta: "Check Route Radar",
    },
    "Local Insights": {
      icon: Compass,
      headline: "Cherry blossom alerts, autumn foliage timings, and local festival guides.",
      alertDetail: "Hunza & Nagar: Apricot blossom peaking this week. Early guesthouse bookings advised along Karimabad.",
      badge: "Season Peak",
      cta: "Explore Local Guides",
    },
  };

  const pakistanHubs = [
    { name: "Hunza", regionName: "Gilgit-Baltistan", x: 62, y: 15, temp: "19°C", weather: "Clear", status: "Optimal", category: "GILGIT-BALTISTAN" },
    { name: "Skardu", regionName: "Gilgit-Baltistan", x: 74, y: 20, temp: "17°C", weather: "Sunny", status: "Optimal", category: "GILGIT-BALTISTAN" },
    { name: "Swat Kalam", regionName: "KPK", x: 48, y: 24, temp: "21°C", weather: "Breezy", status: "Optimal", category: "KPK" },
    { name: "Islamabad", regionName: "Federal Capital", x: 54, y: 35, temp: "28°C", weather: "Sunny", status: "Optimal", category: "PUNJAB & SINDH" },
    { name: "Lahore", regionName: "Punjab", x: 66, y: 46, temp: "32°C", weather: "Warm", status: "Optimal", category: "PUNJAB & SINDH" },
    { name: "Gwadar", regionName: "Balochistan", x: 18, y: 82, temp: "30°C", weather: "Coastal Breeze", status: "Optimal", category: "PUNJAB & SINDH" },
  ];

  const filteredHubs = pakistanHubs.filter((hub) => {
    const matchesRegion = mapRegion === "ALL REGIONS" || hub.category === mapRegion;
    const matchesSearch = hub.name.toLowerCase().includes(mapSearch.toLowerCase()) || hub.regionName.toLowerCase().includes(mapSearch.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const currentHubData = pakistanHubs.find((h) => h.name === selectedHub) || pakistanHubs[0];
  const CurrentTabInfo = tabContent[activeTab];
  const IconComponent = CurrentTabInfo.icon;

  return (
    <section id="pakistan-glance" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-display text-[clamp(2.15rem,4.5vw,3.75rem)] font-semibold tracking-tight text-white leading-tight">
          Explore Pakistan at a Glance
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
          Real-time highway updates, Babusar Pass clearance, domestic flight statuses, and mountain weather across all provinces.
        </p>
      </div>

      {/* Grid: Left Insights Card & Right Interactive Pakistan Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Card: Travel Pulse */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-white/15 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            {/* Tabs */}
            <div className="inline-flex p-1 rounded-full bg-white/5 border border-white/10 mb-8 max-w-full overflow-x-auto">
              {(["Pass Alerts", "Road Radar", "Local Insights"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                    activeTab === tab
                      ? "bg-white text-slate-950 shadow-md font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Central Icon graphic */}
            <div className="my-8 flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center animate-pulse">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <IconComponent className="w-8 h-8" />
                  </div>
                </div>
                <div className="absolute -top-1 -right-1">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                </div>
              </div>
            </div>

            {/* Heading in Playfair Display */}
            <h3 className="font-display text-xl sm:text-2xl font-medium text-white text-center leading-snug mb-4">
              {CurrentTabInfo.headline}
            </h3>

            {/* Status card preview */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 leading-relaxed flex items-start gap-2.5 font-normal">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{CurrentTabInfo.alertDetail}</span>
            </div>
          </div>

          {/* Action & Pagination Dots */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 mt-6">
            <button
              onClick={() => onOpenTripModal(`Live Travel Plan for ${selectedHub}`)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold tracking-wide transition-all shadow-md active:scale-95 font-sans"
            >
              <span>{CurrentTabInfo.cta}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {(["Pass Alerts", "Road Radar", "Local Insights"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeTab === tab ? "w-6 bg-emerald-400" : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={tab}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Card: Interactive Pakistan Regional Radar Map */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-white/15 shadow-2xl relative font-sans">
          
          {/* Map Top Filters & Search */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-full border border-white/10 text-[11px] overflow-x-auto max-w-full">
              {(["ALL REGIONS", "GILGIT-BALTISTAN", "KPK", "PUNJAB & SINDH"] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setMapRegion(r)}
                  className={`px-3 py-1 rounded-full font-semibold transition-all whitespace-nowrap ${
                    mapRegion === r ? "bg-emerald-500 text-slate-950 shadow font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            {/* Mini search input */}
            <div className="relative w-full sm:w-44">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search city/valley..."
                value={mapSearch}
                onChange={(e) => setMapSearch(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-1.5 pl-8 pr-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 font-sans"
              />
            </div>
          </div>

          {/* Pakistan Stylized Geometric Map Base */}
          <div className="relative w-full aspect-[16/9] min-h-[260px] sm:min-h-[320px] bg-[#070e1b]/80 rounded-2xl border border-white/10 flex items-center justify-center p-4 overflow-hidden">
            
            {/* SVG Dot Matrix Map Base shaped for Pakistan */}
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full object-contain opacity-40 select-none pointer-events-none"
              fill="currentColor"
            >
              {/* Gilgit-Baltistan & North */}
              <g className="text-emerald-400">
                <circle cx="580" cy="60" r="3.5" /><circle cx="600" cy="50" r="3.5" /><circle cx="630" cy="55" r="3.5" /><circle cx="660" cy="65" r="3.5" />
                <circle cx="570" cy="85" r="3.5" /><circle cx="600" cy="80" r="3.5" /><circle cx="630" cy="80" r="3.5" /><circle cx="670" cy="85" r="3.5" /><circle cx="710" cy="95" r="3.5" />
                <circle cx="560" cy="110" r="3.5" /><circle cx="590" cy="110" r="3.5" /><circle cx="620" cy="105" r="3.5" /><circle cx="660" cy="115" r="3.5" /><circle cx="700" cy="120" r="3.5" /><circle cx="740" cy="125" r="3.5" />
              </g>

              {/* KPK & Federal Capital */}
              <g className="text-slate-400">
                <circle cx="490" cy="130" r="3" /><circle cx="520" cy="135" r="3" /><circle cx="550" cy="140" r="3" /><circle cx="580" cy="145" r="3" />
                <circle cx="470" cy="165" r="3" /><circle cx="500" cy="170" r="3" /><circle cx="530" cy="175" r="3" /><circle cx="560" cy="175" r="3" /><circle cx="600" cy="180" r="3" />
                <circle cx="460" cy="205" r="3" /><circle cx="490" cy="205" r="3" /><circle cx="520" cy="210" r="3" /><circle cx="550" cy="215" r="3" /><circle cx="580" cy="215" r="3" />
              </g>

              {/* Punjab */}
              <g className="text-slate-400">
                <circle cx="570" cy="245" r="3" /><circle cx="600" cy="240" r="3" /><circle cx="630" cy="245" r="3" /><circle cx="660" cy="250" r="3" />
                <circle cx="550" cy="280" r="3" /><circle cx="580" cy="280" r="3" /><circle cx="610" cy="285" r="3" /><circle cx="640" cy="290" r="3" />
                <circle cx="530" cy="320" r="3" /><circle cx="560" cy="325" r="3" /><circle cx="590" cy="330" r="3" /><circle cx="620" cy="335" r="3" />
              </g>

              {/* Balochistan & Coastal */}
              <g className="text-slate-400">
                <circle cx="360" cy="250" r="3" /><circle cx="400" cy="260" r="3" /><circle cx="440" cy="270" r="3" /><circle cx="480" cy="280" r="3" />
                <circle cx="320" cy="300" r="3" /><circle cx="360" cy="310" r="3" /><circle cx="410" cy="320" r="3" /><circle cx="460" cy="330" r="3" />
                <circle cx="260" cy="360" r="3" /><circle cx="300" cy="370" r="3" /><circle cx="350" cy="375" r="3" /><circle cx="400" cy="385" r="3" /><circle cx="450" cy="390" r="3" />
                <circle cx="210" cy="420" r="3" /><circle cx="260" cy="425" r="3" /><circle cx="320" cy="430" r="3" /><circle cx="380" cy="435" r="3" /><circle cx="440" cy="440" r="3" />
              </g>

              {/* Sindh & Karachi */}
              <g className="text-slate-400">
                <circle cx="490" cy="380" r="3" /><circle cx="520" cy="390" r="3" /><circle cx="550" cy="400" r="3" />
                <circle cx="480" cy="430" r="3" /><circle cx="510" cy="440" r="3" /><circle cx="540" cy="450" r="3" />
              </g>
            </svg>

            {/* Glowing Motorway & KKH Route Arcs */}
            <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full pointer-events-none">
              <path
                d="M 540 180 Q 580 120 620 80"
                fill="none"
                stroke="rgba(52, 211, 153, 0.5)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M 540 180 Q 640 130 740 100"
                fill="none"
                stroke="rgba(52, 211, 153, 0.4)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>

            {/* Interactive Pins on Pakistan Map */}
            {filteredHubs.map((hub) => {
              const isSelected = selectedHub === hub.name;
              return (
                <div
                  key={hub.name}
                  style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
                  onClick={() => setSelectedHub(hub.name)}
                >
                  <div className="relative flex items-center justify-center">
                    <span className={`w-3.5 h-3.5 rounded-full ${isSelected ? "bg-emerald-400 shadow-lg shadow-emerald-400" : "bg-emerald-400/80 group-hover:scale-125 transition-transform"}`} />
                    <span className="w-6 h-6 rounded-full bg-emerald-400/30 absolute animate-ping pointer-events-none" />
                  </div>

                  {/* Tooltip on hover/active */}
                  <div
                    className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-lg bg-black/90 border border-white/20 backdrop-blur-md text-[11px] whitespace-nowrap text-white shadow-xl transition-all pointer-events-none ${
                      isSelected ? "opacity-100 scale-100" : "opacity-0 group-hover:opacity-100 scale-95"
                    }`}
                  >
                    <p className="font-semibold text-emerald-300 font-sans">{hub.name}</p>
                    <p className="text-[10px] text-slate-300 font-sans">{hub.temp} • {hub.weather}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Hub Details Footer */}
          <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold text-white">{currentHubData.name}, {currentHubData.regionName}</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-300">{currentHubData.temp} ({currentHubData.weather})</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30 font-sans">
                {currentHubData.status}
              </span>
              <button
                onClick={() => onOpenTripModal(`${currentHubData.name}, Pakistan`)}
                className="text-emerald-400 hover:text-emerald-300 font-semibold text-xs flex items-center gap-0.5 font-sans"
              >
                <span>Plan here</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
