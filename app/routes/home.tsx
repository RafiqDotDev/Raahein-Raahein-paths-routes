import { useState } from "react";
import type { Route } from "./+types/home";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AiStepShowcase } from "../components/AiStepShowcase";
import { WorldGlance } from "../components/WorldGlance";
import { CuratedDestinations } from "../components/CuratedDestinations";
import { Testimonials } from "../components/Testimonials";
import { FaqSection } from "../components/FaqSection";
import { FooterCta } from "../components/FooterCta";
import { TripModal } from "../components/TripModal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Raahein - Smart & Simple AI Trip Planning for Pakistan" },
    {
      name: "description",
      content:
        "Raahein: Pakistan's #1 AI Travel Co-Pilot. Real-time Babusar Pass status, Karakoram Highway alerts, domestic flight tracking, and curated northern tours across Gilgit-Baltistan, KPK, and beyond.",
    },
    { name: "theme-color", content: "#050811" },
  ];
}

export default function Home() {
  const [isTripModalOpen, setIsTripModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string>("Hunza Valley, Gilgit-Baltistan");

  const handleOpenTripModal = (destination?: string) => {
    if (destination) {
      setSelectedDestination(destination);
    }
    setIsTripModalOpen(true);
  };

  const handleCloseTripModal = () => {
    setIsTripModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 selection:bg-emerald-500 selection:text-white">
      {/* Top Fixed Header */}
      <Navbar onOpenTripModal={handleOpenTripModal} />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero onOpenTripModal={handleOpenTripModal} />

        {/* AI Capabilities / Feature Step Showcase */}
        <AiStepShowcase onOpenTripModal={handleOpenTripModal} />

        {/* Real-time Pakistan Travel Radar / Pass Updates */}
        <WorldGlance onOpenTripModal={handleOpenTripModal} />

        {/* Curated Destinations Section */}
        <CuratedDestinations onOpenTripModal={handleOpenTripModal} />

        {/* Loved by Explorers Across Pakistan (Testimonials) */}
        <Testimonials />

        {/* FAQ Section */}
        <FaqSection />

        {/* Final Karakoram Peak CTA & Footer */}
        <FooterCta onOpenTripModal={() => handleOpenTripModal("Passu Cones & Hunza Expedition")} />
      </main>

      {/* Interactive Trip Planner Modal */}
      <TripModal
        isOpen={isTripModalOpen}
        onClose={handleCloseTripModal}
        initialDestination={selectedDestination}
      />
    </div>
  );
}
