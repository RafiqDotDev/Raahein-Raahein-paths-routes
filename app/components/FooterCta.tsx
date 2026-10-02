import { ArrowUpRight, Compass } from "lucide-react";

interface FooterCtaProps {
  onOpenTripModal: () => void;
}

export function FooterCta({ onOpenTripModal }: FooterCtaProps) {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-white/10 font-sans">
      
      {/* Mountain Peak Background Banner (K2 & Karakoram aesthetic) */}
      <div className="relative pt-28 pb-36 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        {/* Mountain Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=2200&q=85"
            alt="Majestic Karakoram snow mountain peak at dusk"
            className="w-full h-full object-cover object-bottom filter brightness-70 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/50 to-[#050811]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Editorial Display Heading in Playfair Display */}
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.75rem)] font-semibold tracking-tight text-white mb-6 drop-shadow-lg leading-tight">
            Plan Your Dream Pakistan Tour <br />
            <span className="italic font-medium">with AI in Seconds</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            Join over 50,000 Pakistani travelers discovering hidden valleys, alpine glaciers, and rich heritage without travel agent markups.
          </p>

          <button
            onClick={onOpenTripModal}
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-slate-950 font-bold text-xs sm:text-sm hover:bg-slate-200 transition-all shadow-2xl shadow-white/20 active:scale-95 font-sans"
          >
            <span>Start Free Safar Planner</span>
            <ArrowUpRight className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Main Footer Links Container */}
      <div className="relative z-10 bg-[#050811] pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-300 p-0.5 shadow-md shadow-emerald-500/20">
                <div className="w-full h-full bg-[#090e18] rounded-[6px] flex items-center justify-center">
                  <Compass className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
              <span className="font-bold text-lg text-white">Raahein</span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-6 font-normal">
              Empowering domestic tourism across Pakistan with real-time Karakoram Highway alerts, vetted local 4x4 drivers, and tailored family itineraries.
            </p>

            {/* App / Helpline button */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenTripModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-colors font-sans"
              >
                <span>Get Mobile App</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
              </button>
              <span className="text-xs text-slate-400 font-medium">
                📞 24/7 Helpline: <strong className="text-emerald-400 font-bold">+92 (051) 880-SAFR</strong>
              </span>
            </div>
          </div>

          {/* Column 1: Highway & Radar */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-sans">
              Live Radars
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-normal">
              <li><a href="#pakistan-glance" className="hover:text-white transition-colors">Babusar Pass Status</a></li>
              <li><a href="#pakistan-glance" className="hover:text-white transition-colors">KKH Landslide Alerts</a></li>
              <li><a href="#pakistan-glance" className="hover:text-white transition-colors">Skardu Flight Radar</a></li>
              <li><a href="#pakistan-glance" className="hover:text-white transition-colors">Lowari Tunnel Timings</a></li>
              <li><a href="#pakistan-glance" className="hover:text-white transition-colors">Deosai Plain Openings</a></li>
            </ul>
          </div>

          {/* Column 2: Top Valleys */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-sans">
              Top Valleys
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-normal">
              <li><a href="#destinations" className="hover:text-white transition-colors">Hunza & Passu Cones</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Skardu & Shigar Fort</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Swat Kalam & Malam Jabba</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Kumrat & Katora Lake</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Neelum Valley Kashmir</a></li>
            </ul>
          </div>

          {/* Column 3: Company & Local */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-sans">
              Raahein PK
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-normal">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Islamabad Office (F-7)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lahore Hub (Gulberg)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Local Driver Partner Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">JazzCash & Raast Payments</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
          <div>
            © {new Date().getFullYear()} Raahein (Pvt.) Ltd. Made with ❤️ for Pakistan.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Safar</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
            <div className="flex items-center gap-4 text-slate-400 ml-4">
              <a href="#" aria-label="X" className="hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
