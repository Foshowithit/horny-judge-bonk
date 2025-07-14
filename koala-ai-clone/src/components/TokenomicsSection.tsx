"use client";

import { Zap, Users, Lock, ChevronUp } from "lucide-react";

const tokenomicsFeatures = [
  {
    id: "supply",
    icon: <Zap className="w-12 h-12 text-primary" />,
    title: "1 Billion Supply",
    description: "Fixed total supply - no inflation, no hidden taxes."
  },
  {
    id: "community",
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "100% Community Owned",
    description: "Fair distribution, no team allocation, no VCs."
  },
  {
    id: "presale",
    icon: <Lock className="w-12 h-12 text-primary" />,
    title: "No VC, No Presale",
    description: "Just BONK - fairly launched for everyone."
  },
  {
    id: "potential",
    icon: <ChevronUp className="w-12 h-12 text-primary" />,
    title: "Just BONK",
    description: "No false promises, just memes and community."
  }
];

export function TokenomicsSection() {
  return (
    <section id="tokenomics" className="bonk-section py-20">
      <h2 className="bonk-heading text-7xl mb-12">$BONKD</h2>

      <div className="max-w-5xl mx-auto mb-8">
        <div className="bonk-gradient rounded-xl p-6 text-center mb-12">
          <p className="text-black font-mono font-bold text-xl mb-1">CONTRACT ADDRESS</p>
          <p className="text-md md:text-lg font-bold overflow-x-auto whitespace-nowrap text-black font-mono select-all cursor-pointer" style={{wordBreak: 'break-all'}}>
            BDeEFeKoYK45K3gDL69adwYUy3QqTgUohd9MzNznbonk
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tokenomicsFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-black/40 border-2 border-primary rounded-xl p-8 hover:border-primary hover:shadow-[0_0_30px_rgba(255,106,0,0.3)] transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                {feature.icon}
                <h3 className="ml-4 text-2xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-foreground/90 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
