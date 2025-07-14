"use client";

import { RandomBonk } from "./RandomBonk";

export function RoadmapSection() {
  return (
    <section id="roadmap" className="bonk-section bg-black/40 py-20 relative">
      <RandomBonk
        className="top-10 right-[8%] hidden md:block"
        width={130}
        rotate={-5}
      />

      <h2 className="bonk-heading text-7xl mb-12">ROADMAP</h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-black/60 rounded-xl p-8 border-2 border-primary hover:border-primary hover:shadow-[0_0_30px_rgba(255,106,0,0.3)] transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary text-center">Phase 1</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="mr-3 text-primary text-2xl">•</span>
                <span className="text-lg">Launch on bonk.fun</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-primary text-2xl">•</span>
                <span className="text-lg">Meme drop #1</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-primary text-2xl">•</span>
                <span className="text-lg">Social media</span>
              </li>
            </ul>
          </div>

          <div className="bg-black/60 rounded-xl p-8 border-2 border-primary hover:border-primary hover:shadow-[0_0_30px_rgba(255,106,0,0.3)] transition-all duration-300 relative">
            <RandomBonk
              className="top-[-40px] left-[-30px] hidden md:block"
              width={70}
              rotate={15}
            />

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary text-center">Phase 2</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="mr-3 text-primary text-2xl">•</span>
                <span className="text-lg">CMC / CG Listings</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-primary text-2xl">•</span>
                <span className="text-lg">Meme contest</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-primary text-2xl">•</span>
                <span className="text-lg">Collabs with other meme tokens</span>
              </li>
            </ul>
          </div>

          <div className="bg-black/60 rounded-xl p-8 border-2 border-primary hover:border-primary hover:shadow-[0_0_30px_rgba(255,106,0,0.3)] transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary text-center">Phase 3</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="mr-3 text-primary text-2xl">•</span>
                <span className="text-lg">Community governance</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-primary text-2xl">•</span>
                <span className="text-lg">CEX Listings</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-primary text-2xl">•</span>
                <span className="text-lg">Partnerships</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <RandomBonk
        className="bottom-10 left-[10%] hidden md:block"
        width={100}
        rotate={-10}
      />
    </section>
  );
}
