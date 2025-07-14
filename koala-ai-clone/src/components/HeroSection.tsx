"use client";

import Link from "next/link";
import { RandomBonk } from "./RandomBonk";

export function HeroSection() {
  return (
    <>
      <section className="relative py-12 md:py-24 flex flex-col items-center justify-center text-center overflow-hidden">
        <RandomBonk
          className="top-10 right-[5%] hidden md:block"
          width={100}
          rotate={-15}
        />

        <h1 className="text-6xl md:text-9xl font-bold mb-6 bonk-gradient-text tracking-wider">GET BONK'D</h1>

        <div className="relative w-64 h-64 md:w-96 md:h-96 mb-16 flex items-center justify-center">
          {/* Bonk Dog positioned behind desk */}
          <img
            src="/images/Untitled_design_(36).png"
            alt="Horny Judge Bonk Dog"
            style={{
              width: "300px",
              maxWidth: "100%",
              height: "auto",
              zIndex: 1
            }}
            className="bonk-dog-image"
          />

          {/* Judge's Desk positioned in front */}
          <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2" style={{ zIndex: 2 }}>
            <img
              src="/images/judge-desk.svg"
              alt="Judge's Desk"
              style={{
                width: "420px",
                height: "auto",
                maxWidth: "130%",
                transform: "translateX(-10px)"
              }}
              className="drop-shadow-lg"
            />
          </div>
        </div>

        {/* Welcome to Court of Bonk */}
        <div className="max-w-4xl mx-auto mb-8 text-center bg-gradient-to-r from-primary/90 to-primary text-black py-6 px-6 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            WELCOME TO THE COURT OF BONK
          </h2>
          <div className="space-y-2 text-base md:text-lg font-medium">
            <p>This is the domain of The Horny Judge — internet's final line of defense against thirst.</p>
            <p>If you're down bad in the replies, justice is coming… with a bat.</p>
            <p className="text-lg md:text-xl font-bold mt-3">
              Upload. Bonk. Restore Order.
            </p>
          </div>
        </div>

        <div className="max-w-lg mx-auto mb-12 text-lg md:text-2xl">
          <p className="text-primary font-bold">A Solana meme token.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          <a
            href="https://x.com/Judge_of_horny"
            target="_blank"
            rel="noopener noreferrer"
            className="bonk-button text-lg px-8 py-3"
          >
            X (formerly Twitter)
          </a>
          <a
            href="https://x.com/Judge_of_horny"
            target="_blank"
            rel="noopener noreferrer"
            className="bonk-button text-lg px-8 py-3"
          >
            BUY ON BONK.FUN
          </a>
        </div>

        <RandomBonk
          className="bottom-0 left-[10%] hidden md:block"
          width={120}
          rotate={10}
        />

        <div className="w-full max-w-4xl mx-auto overflow-hidden">
          <div className="relative w-full h-20 md:h-32 bonk-gradient rounded-lg flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black">JUST BONK!</h2>
          </div>
        </div>
      </section>
    </>
  );
}
