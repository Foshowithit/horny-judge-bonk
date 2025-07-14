"use client";

const memeImages = [
  {
    id: "meme-1",
    src: "/images/dlom8jkhzcs-image.png"
  },
  {
    id: "meme-2",
    src: "/images/ydze7v8l6is-image.png"
  },
  {
    id: "meme-3",
    src: "/images/Untitled_design_(36).png"
  },
  {
    id: "meme-4",
    src: "/images/Untitled_design_(33).png"
  },
  {
    id: "meme-5",
    src: "/images/Screenshot_2025-05-16_at_1.28.03_PM.png"
  },
  {
    id: "meme-6",
    src: "/images/bonk-dog-fresh.png"
  }
];

export function MemesSection() {
  return (
    <section id="gallery" className="bonk-section py-20 bg-gradient-to-b from-black to-black/80">
      <h2 className="bonk-heading text-7xl mb-12">MEME GALLERY</h2>

      <div className="max-w-4xl mx-auto mb-10">
        <p className="text-center text-xl">
          The $BONKD community is all about the memes. Check out some of our latest
          creations below. Think you can do better? Join our Telegram and share your masterpiece!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="bonk-button text-lg px-8 py-3"
        >
          JOIN TELEGRAM
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="bonk-button text-lg px-8 py-3"
        >
          FOLLOW ON TWITTER
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {memeImages.map((meme) => (
          <div
            key={meme.id}
            className="aspect-square relative rounded-xl overflow-hidden border-2 border-primary/30 hover:border-primary hover:shadow-[0_0_30px_rgba(255,106,0,0.3)] transition-all duration-300"
          >
            <img
              src={meme.src}
              alt={`GET BONK'D Meme ${meme.id}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="eager"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
