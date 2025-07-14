"use client";

import { Rocket, Zap, Globe } from "lucide-react";
import { RandomBonk } from "./RandomBonk";

const roadmapPhases = [
  {
    id: "phase1",
    icon: <Rocket className="w-12 h-12 text-primary" />,
    title: "Phase 1",
    items: [
      "Launch on bonk.fun",
      "Meme drop #1",
      "Social media"
    ]
  },
  {
    id: "phase2",
    icon: <Zap className="w-12 h-12 text-primary" />,
    title: "Phase 2",
    items: [
      "CMC / CG Listings",
      "Meme contest",
      "Collabs with other meme tokens"
    ]
  },
  {
    id: "phase3",
    icon: <Globe className="w-12 h-12 text-primary" />,
    title: "Phase 3",
    items: [
      "Community governance",
      "CEX Listings",
      "Partnerships"
    ]
  }
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="bonk-section bg-black/40 py-20">
      <h2 className="bonk-heading text-7xl mb-12">ROADMAP</h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {roadmapPhases.map((phase) => (
            <div
              key={phase.id}
              className="bg-black/60 rounded-xl p-8 border-2 border-primary hover:border-primary hover:shadow-[0_0_30px_rgba(255,106,0,0.3)] transition-all duration-300"
            >
              <div className="mb-6 flex justify-center">
                {phase.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary text-center">{phase.title}</h3>
              <ul className="space-y-4">
                {phase.items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-3 text-primary text-2xl">•</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowToBuySection() {
  return (
    <section id="how-to-buy" className="bonk-section py-20 bg-gradient-to-b from-black/80 to-black relative">
      <RandomBonk
        className="top-20 left-[7%] hidden md:block"
        width={120}
        rotate={-8}
      />

      <h2 className="bonk-heading text-7xl mb-12">HOW TO BUY</h2>

      <div className="max-w-4xl mx-auto mb-10">
        <p className="text-center text-xl mb-8">
          How to buy $BONKD:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-black/40 rounded-xl p-6 border-2 border-primary hover:border-primary hover:shadow-[0_0_30px_rgba(255,106,0,0.3)] transition-all duration-300">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-black text-2xl font-bold mb-2">1</div>
              <h3 className="text-xl font-bold">Create Wallet</h3>
            </div>
            <p className="text-center">Download and set up a crypto wallet that supports $BONKD</p>
          </div>

          <div className="bg-black/40 rounded-xl p-6 border-2 border-primary hover:border-primary hover:shadow-[0_0_30px_rgba(255,106,0,0.3)] transition-all duration-300 relative">
            <RandomBonk
              className="top-[-30px] right-[-20px] hidden md:block"
              width={70}
              rotate={25}
            />

            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-black text-2xl font-bold mb-2">2</div>
              <h3 className="text-xl font-bold">Get SOL</h3>
            </div>
            <p className="text-center">Purchase SOL and send it to your wallet address</p>
          </div>

          <div className="bg-black/40 rounded-xl p-6 border-2 border-primary hover:border-primary hover:shadow-[0_0_30px_rgba(255,106,0,0.3)] transition-all duration-300">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-black text-2xl font-bold mb-2">3</div>
              <h3 className="text-xl font-bold">Swap for $BONKD</h3>
            </div>
            <p className="text-center">Visit bonk.fun and swap your SOL for $BONKD tokens</p>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="https://letsbonk.fun/token/BDeEFeKoYK45K3gDL69adwYUy3QqTgUohd9MzNznbonk"
            target="_blank"
            rel="noopener noreferrer"
            className="bonk-button text-lg px-8 py-3"
          >
            BUY $BONKD
          </a>
        </div>
        <div className="mt-6 flex flex-col items-center">
          <span className="text-primary font-bold text-lg mb-2">Contract Address:</span>
          <span className="bg-black/60 rounded-md py-2 px-4 text-sm text-white font-mono select-all cursor-pointer hover:bg-black/80 transition-colors" style={{wordBreak: 'break-all'}}>BDeEFeKoYK45K3gDL69adwYUy3QqTgUohd9MzNznbonk</span>
        </div>
      </div>

      <RandomBonk
        className="bottom-12 right-[10%] hidden md:block"
        width={100}
        rotate={5}
      />
    </section>
  );
}
