"use client";

import { RandomBonk } from "./RandomBonk";

export function Footer() {
  return (
    <footer className="bg-background py-16 border-t-2 border-primary/30 relative">
      <RandomBonk
        className="top-5 right-[20%] hidden md:block"
        width={80}
        rotate={12}
      />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-8 bonk-gradient p-6 rounded-lg inline-flex items-center">
            <h2 className="text-5xl font-bold text-black">GET BONK'D</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <a
              href="https://x.com/Judge_of_horny"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity bg-black/20 p-4 rounded-full hover:bg-black/40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send">
                <path d="m22 2-7 20-4-9-9-4Z"/>
                <path d="M22 2 11 13"/>
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity bg-black/20 p-4 rounded-full hover:bg-black/40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
          </div>

          <div className="text-center max-w-2xl border-t-2 border-primary/20 pt-8 relative">
            <RandomBonk
              className="bottom-[-30px] left-[-50px] hidden md:block"
              width={90}
              rotate={-20}
            />

            <p className="text-xl font-bold text-primary mb-4">Not financial advice. Just bonks.</p>
            <p className="text-md mb-2 opacity-70">COPYRIGHT © 2025 GET BONK'D · ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
