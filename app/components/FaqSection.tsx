import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Index 1 is open by default as shown in screenshot

  const faqs = [
    {
      question: "What is an AI Travel Partner for Pakistan?",
      answer:
        "Raahein is your local intelligent tour guide. It monitors Pakistani road networks (NHA & Motorway Police), domestic flight weather (PIA/Airblue to Skardu & Gilgit), verified hotel/resort rates, and local 4x4 Prado/Jeep rental unions to deliver optimized day-by-day travel plans.",
    },
    {
      question: "Can I check live Babusar Pass and Karakoram Highway road status?",
      answer:
        "Yes! Our AI continuously gathers verified reports from the National Highway Authority (NHA), Gilgit-Baltistan Disaster Management Authority (GBDMA), and local drivers to advise you whether to travel via Babusar Pass or Besham/KKH.",
    },
    {
      question: "Does Raahein support local payment methods (JazzCash, Easypaisa, Raast)?",
      answer:
        "Yes! You can book trips, drivers, and hotels seamlessly using Raast instant transfer, JazzCash, Easypaisa, or local Pakistani bank cards (Debit/Credit).",
    },
    {
      question: "How do you help arrange local 4x4 Jeeps for Deosai, Fairy Meadows, or Kumrat?",
      answer:
        "Raahein directly connects you with registered local jeep driver unions in Raikot Bridge, Skardu, and Kalam at official regulated tariff rates—ensuring safety and transparent pricing without tout markups.",
    },
    {
      question: "Is Raahein suitable for families and women-only group tours?",
      answer:
        "Absolutely. You can select 'Family-Friendly' or 'Women-Only Group' modes. The AI prioritizes vetted hotels with dedicated family facilities, continuous hot water, power backups, and trusted verified guides.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto font-sans">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="font-display text-[clamp(2.15rem,4.5vw,3.75rem)] font-semibold tracking-tight text-white mb-4 leading-tight">
          Common Questions from <br />
          Pakistani Travelers
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto font-normal leading-relaxed">
          Everything you need to know about our northern road trip planner, pass conditions, and booking options.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3 font-sans">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-[#0b1424]/90 border-emerald-400/40 shadow-xl shadow-emerald-950/20"
                  : "bg-[#080d19]/60 border-white/10 hover:border-white/20"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full py-5 px-6 flex items-center justify-between text-left gap-4"
              >
                <span className="text-sm sm:text-base font-semibold text-white">
                  {faq.question}
                </span>
                <span className="p-1 rounded-full bg-white/5 border border-white/10 text-slate-300 shrink-0">
                  {isOpen ? <Minus className="w-4 h-4 text-emerald-400" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-white/5 animate-fade-in font-normal">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
