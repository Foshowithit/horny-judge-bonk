"use client";

import { RandomBonk } from "./RandomBonk";

export function AboutSection() {
  return (
    <section id="about" className="bonk-section relative">
      <RandomBonk
        className="top-20 left-[15%] hidden md:block"
        width={90}
        rotate={25}
      />

      <h2 className="bonk-heading">ABOUT GET BONK'D</h2>

      <div className="max-w-4xl mx-auto relative">
        <p className="text-center text-lg mb-8">
          A meme token on Solana.
        </p>

        <RandomBonk
          className="bottom-[-50px] right-[-80px] hidden md:block"
          width={110}
          rotate={-20}
        />

        <p className="text-center text-lg">
          Just BONK.
        </p>
      </div>
    </section>
  );
}
