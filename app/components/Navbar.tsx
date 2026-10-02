import { useState } from "react";
import { Compass, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenTripModal: (destination?: string) => void;
}

export function Navbar({ onOpenTripModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070c17]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo with Pakistan Flag subtle badge */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-300 p-0.5 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-[#090e18] rounded-[6px] flex items-center justify-center">
                <Compass className="w-4 h-4 text-emerald-400 group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-lg sm:text-xl tracking-tight text-white">
                Raahein
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 tracking-wider font-sans">
                PK
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-sm font-medium text-slate-300 hover:text-white transition-colors tracking-normal">
              Home
            </a>
            <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors tracking-normal">
              Features
            </a>
            <a href="#pakistan-glance" className="text-sm font-medium text-slate-300 hover:text-white transition-colors tracking-normal">
              Live Road Radar
            </a>
            <a href="#destinations" className="text-sm font-medium text-slate-300 hover:text-white transition-colors tracking-normal">
              Destinations
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-white transition-colors tracking-normal">
              FAQ
            </a>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => alert("اردو اور انگریزی رہنمائی کے لیے تیار! Plan your trip directly.")}
              className="text-xs sm:text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-1.5"
            >
              <span className="font-urdu text-sm text-emerald-400 leading-none">اردو</span>
              <span className="text-slate-400 font-sans text-xs">/ Eng</span>
            </button>
            <button
              onClick={() => onOpenTripModal("Hunza Valley, Gilgit-Baltistan")}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-full bg-white text-slate-950 hover:bg-slate-200 transition-all shadow-md shadow-white/10 active:scale-95"
            >
              <span>Plan Trip</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080d19]/98 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3 font-sans">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5"
          >
            Home
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5"
          >
            Features
          </a>
          <a
            href="#pakistan-glance"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5"
          >
            Live Road Radar
          </a>
          <a
            href="#destinations"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5"
          >
            Destinations
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5"
          >
            FAQ
          </a>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTripModal("Hunza Valley, Gilgit-Baltistan");
              }}
              className="w-full text-center py-2.5 rounded-full text-sm font-semibold bg-white text-slate-950 hover:bg-slate-200 shadow-md"
            >
              Plan Local Trip ↗
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
