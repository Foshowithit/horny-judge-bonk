"use client";

interface BonkDogImageProps {
  width?: number;
  className?: string;
}

export function BonkDogImage({ width = 200, className = "" }: BonkDogImageProps) {
  return (
    <img
      src="/images/Untitled_design_(36).png"
      alt="Bonk Dog"
      width={width}
      height={width}
      style={{ width: `${width}px`, height: 'auto' }}
      className={className}
    />
  );
}
