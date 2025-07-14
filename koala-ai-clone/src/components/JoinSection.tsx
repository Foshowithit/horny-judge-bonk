"use client";

import { Zap } from "lucide-react";

export function JoinSection() {
  return (
    <>
      <section id="join-us" className="bonk-section py-20 bg-black/80">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 flex items-center justify-center">
              <img
                src="/images/Untitled_design_(36).png"
                alt="Bonk Dog Meme"
                style={{
                  width: "300px",
                  maxWidth: "100%",
                  height: "auto"
                }}
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bonk-gradient-text">SOCIALS</h2>

              <p className="mb-8 text-xl">
                Join our socials for updates.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bonk-button text-lg px-8 py-3 flex items-center justify-center"
                >
                  <Zap className="mr-2 h-5 w-5" />
TELEGRAM
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bonk-button text-lg px-8 py-3 flex items-center justify-center"
                >
                  <Zap className="mr-2 h-5 w-5" />
TWITTER
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
