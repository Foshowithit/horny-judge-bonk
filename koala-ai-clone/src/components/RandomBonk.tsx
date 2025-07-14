"use client";

interface RandomBonkProps {
  className?: string;
  width?: number;
  rotate?: number;
}

export function RandomBonk({ className = "", width = 150, rotate = 0 }: RandomBonkProps) {
  return (
    <div
      className={`absolute z-10 select-none pointer-events-none ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <img
        src="/images/bonk-meme-new.png"
        alt="Bonk!"
        width={width}
        height={width * 0.6}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}
