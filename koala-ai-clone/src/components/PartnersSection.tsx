"use client";

const featuredPartners = [
  {
    id: "bonkfun",
    name: "BONK.FUN",
    url: "https://bonk.fun"
  },
  {
    id: "solana",
    name: "SOLANA",
    url: "https://solana.com"
  },
  {
    id: "coinmarketcap",
    name: "COINMARKETCAP",
    url: "https://coinmarketcap.com"
  },
  {
    id: "coingecko",
    name: "COINGECKO",
    url: "https://coingecko.com"
  }
];

export function PartnersSection() {
  return (
    <section className="py-12 md:py-16 px-4 bg-black/50">
      <h2 className="text-primary text-2xl font-bold mb-8 text-center">BUY ON</h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center">
          {featuredPartners.map((partner) => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <div className="bg-black/40 border border-primary/50 hover:border-primary px-4 py-2 rounded-lg transition-all duration-300">
                <span className="text-sm md:text-base font-bold text-primary">{partner.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
