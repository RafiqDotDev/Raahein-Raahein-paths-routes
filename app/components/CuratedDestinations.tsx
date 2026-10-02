import { useState } from "react";
import { ArrowUpRight, Star, Clock, Users } from "lucide-react";

interface CuratedDestinationsProps {
  onOpenTripModal: (destination: string) => void;
}

export function CuratedDestinations({ onOpenTripModal }: CuratedDestinationsProps) {
  const [activeCategory, setActiveCategory] = useState("All Trips");

  const categories = [
    "All Trips",
    "Northern Valleys",
    "Heritage & Shrines",
    "Coastal & Desert",
    "Family Tours",
    "Trekking",
  ];

  const destinationCards = [
    {
      id: "lahore",
      category: "Heritage & Shrines",
      title: "Walled City & Badshahi",
      location: "Lahore, Punjab",
      rating: "4.9",
      duration: "3 Days",
      travelers: "2 Adults",
      price: "PKR 48,000",
      image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
      description: "Walk through Delhi Gate, explore Mughal architecture at Lahore Fort, savor spicy kebabs on Fort Road, and attend qawwali at Data Darbar.",
    },
    {
      id: "hunza",
      category: "Northern Valleys",
      title: "Misty Hunza & Passu",
      location: "Hunza & Nagar, Gilgit-Baltistan",
      rating: "5.0",
      duration: "7 Days",
      travelers: "Family / 4 Pax",
      price: "PKR 145,000",
      featured: true,
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
      description: "Cruise azure Attabad Lake, cross the Hussaini Suspension Bridge, explore ancient Altit Fort, and touch the Pak-China border at Khunjerab.",
    },
    {
      id: "skardu",
      category: "Northern Valleys",
      title: "Enchanted Skardu & Deosai",
      location: "Skardu & Shigar, Baltistan",
      rating: "4.8",
      duration: "6 Days",
      travelers: "2 Adults",
      price: "PKR 125,000",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      description: "Experience the magic of Katpana Cold Desert sand dunes, serene boat rides at Upper Kachura, and wildlife safaris across Deosai Plains.",
    },
  ];

  const filteredCards = activeCategory === "All Trips"
    ? destinationCards
    : destinationCards.filter(
        (card) => card.category.toLowerCase() === activeCategory.toLowerCase()
      );

  return (
    <section id="destinations" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans">
      {/* Header with Title on Left, Subtitle on Right */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div className="max-w-xl">
          <h2 className="font-display text-[clamp(2.15rem,4.5vw,3.75rem)] font-semibold tracking-tight text-white leading-tight">
            Discover your <br />
            dreaming journey
          </h2>
        </div>
        <div className="max-w-md">
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
            Hand-picked itineraries across Pakistan. From soaring Karakoram summits and lush Swat pines to historic Mughal streets and Arabian Sea cliffs.
          </p>
        </div>
      </div>

      {/* Filter Tabs in Manrope */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
              activeCategory === cat
                ? "bg-white text-slate-950 shadow-lg shadow-white/10 font-bold"
                : "bg-white/5 hover:bg-white/15 text-slate-300 border border-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {filteredCards.map((item) => (
          <div
            key={item.id}
            className={`group glass-panel rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between hover:shadow-2xl ${
              item.featured
                ? "border-emerald-400/50 hover:border-emerald-300 shadow-emerald-950/40 ring-1 ring-emerald-400/30 lg:-translate-y-3"
                : "border-white/10 hover:border-white/30"
            }`}
          >
            {/* Image Container with Badges */}
            <div className="relative h-72 sm:h-80 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d19] via-black/20 to-transparent" />
              
              {/* Category Pill Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                  {item.category}
                </span>
              </div>

              {/* Rating Pill */}
              <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-bold text-amber-300">
                <Star className="w-3 h-3 fill-amber-300" />
                <span>{item.rating}</span>
              </div>

              {/* Title in Playfair Display & Location Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-white drop-shadow-md mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 font-medium">{item.location}</p>
              </div>
            </div>

            {/* Content & Trip Metadata */}
            <div className="p-6 bg-[#080d19]/90 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4 font-normal">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-xs text-slate-300 py-3 border-y border-white/10 mb-4 font-medium">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" /> {item.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-emerald-400" /> {item.travelers}
                  </span>
                  <span className="font-bold text-white tracking-tight">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Explore Button */}
              <button
                onClick={() => onOpenTripModal(item.location)}
                className={`w-full py-2.5 px-4 rounded-full text-xs font-bold flex items-center justify-center gap-2 transition-all active:scale-95 ${
                  item.featured
                    ? "bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 hover:opacity-95 shadow-lg shadow-emerald-500/20"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
                }`}
              >
                <span>Explore Safar</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
