"use client";

import { useState, useRef, useCallback } from "react";
import { Download, Upload, RotateCw, Shuffle, Type, Image as ImageIcon } from "lucide-react";

export function BuildABonkSection() {
  const [mode, setMode] = useState<"watermark" | "meme">("watermark");
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const [watermarkPosition, setWatermarkPosition] = useState({ x: 70, y: 70 });
  const [watermarkSize, setWatermarkSize] = useState(120);
  const [watermarkRotation, setWatermarkRotation] = useState(0);
  const [watermarkOpacity, setWatermarkOpacity] = useState(80);
  const [topText, setTopText] = useState("THE HORNY JUDGE");
  const [bottomText, setBottomText] = useState("FINDS YOU GUILTY");
  const [isUploaded, setIsUploaded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setBackgroundImage(result);
        setIsUploaded(true);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const randomizeWatermark = () => {
    if (mode === "watermark") {
      const randomX = Math.floor(Math.random() * 80) + 10;
      const randomY = Math.floor(Math.random() * 80) + 10;
      const randomSize = Math.floor(Math.random() * 100) + 80;
      const randomRotation = Math.floor(Math.random() * 360);
      const randomOpacity = Math.floor(Math.random() * 40) + 60;

      setWatermarkPosition({ x: randomX, y: randomY });
      setWatermarkSize(randomSize);
      setWatermarkRotation(randomRotation);
      setWatermarkOpacity(randomOpacity);
    } else {
      // Judge-themed meme captions
      const judgeVerdicts = [
        { top: "THE HORNY JUDGE", bottom: "FINDS YOU GUILTY" },
        { top: "BONK SENTENCING", bottom: "IN PROGRESS" },
        { top: "YOU THOUGHT YOU", bottom: "WERE SLICK, DIDN'T YOU?" },
        { top: "COURT IS NOW", bottom: "IN SESSION" },
        { top: "GUILTY OF BEING", bottom: "DOWN BAD" },
        { top: "THE VERDICT IS", bottom: "MAXIMUM BONK" },
        { top: "ORDER IN THE", bottom: "BONK COURT" },
      ];
      const randomVerdict = judgeVerdicts[Math.floor(Math.random() * judgeVerdicts.length)];
      setTopText(randomVerdict.top);
      setBottomText(randomVerdict.bottom);
    }
  };

  const downloadImage = async () => {
    if (!backgroundImage) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 800;

    // Load background image
    const bgImg = new Image();
    bgImg.crossOrigin = "anonymous";
    bgImg.onload = async () => {
      // Draw background (maintain aspect ratio)
      const aspectRatio = bgImg.width / bgImg.height;
      let drawWidth = 800;
      let drawHeight = 800;
      let offsetX = 0;
      let offsetY = 0;

      if (aspectRatio > 1) {
        drawHeight = 800 / aspectRatio;
        offsetY = (800 - drawHeight) / 2;
      } else if (aspectRatio < 1) {
        drawWidth = 800 * aspectRatio;
        offsetX = (800 - drawWidth) / 2;
      }

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, 800, 800);
      ctx.drawImage(bgImg, offsetX, offsetY, drawWidth, drawHeight);

      if (mode === "watermark") {
        // Load watermark image
        const watermarkImg = new Image();
        watermarkImg.onload = () => {
          // Save context for rotation and opacity
          ctx.save();

          // Set opacity
          ctx.globalAlpha = watermarkOpacity / 100;

          // Calculate watermark position
          const watermarkX = (watermarkPosition.x / 100) * 800;
          const watermarkY = (watermarkPosition.y / 100) * 800;

          // Move to watermark position and rotate
          ctx.translate(watermarkX, watermarkY);
          ctx.rotate((watermarkRotation * Math.PI) / 180);

          // Draw watermark
          const size = (watermarkSize / 150) * 200; // Scale relative to canvas
          ctx.drawImage(watermarkImg, -size / 2, -size / 2, size, size);

          // Restore context
          ctx.restore();

          // Download the image
          const link = document.createElement("a");
          link.download = "horny-judge-verdict.png";
          link.href = canvas.toDataURL("image/png", 1.0);
          link.click();
        };
        watermarkImg.src = "/images/bonk-watermark.png";
      } else {
        // Add meme text
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 4;
        ctx.font = "bold 48px Arial";
        ctx.textAlign = "center";

        // Top text
        if (topText) {
          ctx.strokeText(topText, 400, 80);
          ctx.fillText(topText, 400, 80);
        }

        // Bottom text
        if (bottomText) {
          ctx.strokeText(bottomText, 400, 740);
          ctx.fillText(bottomText, 400, 740);
        }

        // Download the image
        const link = document.createElement("a");
        link.download = "judge-meme-verdict.png";
        link.href = canvas.toDataURL("image/png", 1.0);
        link.click();
      }
    };
    bgImg.src = backgroundImage;
  };

  return (
    <section id="build-a-bonk" className="bonk-section py-20 bg-gradient-to-b from-black/80 to-black relative">
      <h2 className="bonk-heading text-7xl mb-12">HORNY JUDGE COURT</h2>
      <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
        Upload your photos and face the Horny Judge. Get sentenced with maximum bonk authority. 🐶🔨💥
      </p>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Preview Area */}
          <div className="order-2 lg:order-1">
            {!backgroundImage ? (
              // Upload prompt when no image
              <div
                onClick={() => fileInputRef.current?.click()}
                className="relative w-full aspect-square border-2 border-dashed border-primary rounded-xl cursor-pointer hover:border-primary/80 hover:bg-black/20 transition-all flex flex-col items-center justify-center bg-black/40"
              >
                <Upload className="w-20 h-20 text-primary mb-6" />
                <p className="text-2xl text-primary font-bold mb-2">Submit Evidence</p>
                <p className="text-lg text-gray-400">Upload photo for Horny Judge sentencing</p>
                <p className="text-sm text-gray-500 mt-2">PNG, JPG up to 10MB</p>
              </div>
            ) : (
              // Preview with uploaded image
              <div
                className="relative w-full aspect-square bg-cover bg-center rounded-xl overflow-hidden border-2 border-primary bg-black"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                {mode === "watermark" ? (
                  // Watermark overlay
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      left: `${watermarkPosition.x}%`,
                      top: `${watermarkPosition.y}%`,
                      transform: `translate(-50%, -50%) rotate(${watermarkRotation}deg)`,
                      width: `${watermarkSize}px`,
                      height: `${watermarkSize}px`,
                      opacity: watermarkOpacity / 100,
                    }}
                  >
                    <img
                      src="/images/bonk-watermark.png"
                      alt="Horny Judge"
                      className="w-full h-full object-contain"
                      draggable={false}
                    />
                  </div>
                ) : (
                  // Meme text overlay
                  <>
                    {/* Top Text */}
                    {topText && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                        <span
                          className="text-white font-bold text-xl md:text-3xl"
                          style={{
                            textShadow: "3px 3px 0px black, -3px -3px 0px black, 3px -3px 0px black, -3px 3px 0px black"
                          }}
                        >
                          {topText}
                        </span>
                      </div>
                    )}

                    {/* Bottom Text */}
                    {bottomText && (
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        <span
                          className="text-white font-bold text-xl md:text-3xl"
                          style={{
                            textShadow: "3px 3px 0px black, -3px -3px 0px black, 3px -3px 0px black, -3px 3px 0px black"
                          }}
                        >
                          {bottomText}
                        </span>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {backgroundImage && (
                <>
                  <button
                    onClick={randomizeWatermark}
                    className="bonk-button flex items-center gap-2 px-6 py-3"
                  >
                    <Shuffle className="w-5 h-5" />
                    RANDOM VERDICT
                  </button>
                  {mode === "watermark" && (
                    <button
                      onClick={() => setWatermarkRotation((prev) => (prev + 45) % 360)}
                      className="bonk-button flex items-center gap-2 px-6 py-3"
                    >
                      <RotateCw className="w-5 h-5" />
                      ROTATE JUDGE
                    </button>
                  )}
                  <button
                    onClick={downloadImage}
                    className="bonk-button flex items-center gap-2 px-6 py-3"
                  >
                    <Download className="w-5 h-5" />
                    EXECUTE SENTENCE
                  </button>
                </>
              )}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bonk-button flex items-center gap-2 px-6 py-3"
              >
                <Upload className="w-5 h-5" />
                {backgroundImage ? "NEW CASE" : "SUBMIT EVIDENCE"}
              </button>
            </div>
          </div>

          {/* Controls Area */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Mode Toggle */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Choose Judgment</h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setMode("watermark")}
                  className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                    mode === "watermark"
                      ? "border-primary bg-primary/20 text-primary"
                      : "border-gray-600 hover:border-primary/50 text-gray-300"
                  }`}
                >
                  <ImageIcon className="w-8 h-8" />
                  <span className="font-bold">Horny Judge Mode</span>
                  <span className="text-sm opacity-80">Judge bonks you directly</span>
                </button>
                <button
                  onClick={() => setMode("meme")}
                  className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                    mode === "meme"
                      ? "border-primary bg-primary/20 text-primary"
                      : "border-gray-600 hover:border-primary/50 text-gray-300"
                  }`}
                >
                  <Type className="w-8 h-8" />
                  <span className="font-bold">Classic Bonk Mode</span>
                  <span className="text-sm opacity-80">Add verdict text</span>
                </button>
              </div>
            </div>

            {/* Upload Area */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Submit Evidence</h3>
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-primary rounded-xl p-8 text-center cursor-pointer hover:border-primary/80 hover:bg-black/20 transition-all"
              >
                <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-lg text-primary font-bold mb-2">Upload for judgment</p>
                <p className="text-sm text-gray-400">PNG, JPG up to 10MB</p>
                {isUploaded && (
                  <p className="text-sm text-green-400 mt-2">✓ Evidence submitted to court</p>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>

            {/* Mode-specific Controls */}
            {backgroundImage && mode === "watermark" && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Judge Position</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-300 mb-2 block">Size: {watermarkSize}px</label>
                    <input
                      type="range"
                      min="60"
                      max="200"
                      value={watermarkSize}
                      onChange={(e) => setWatermarkSize(Number(e.target.value))}
                      className="w-full accent-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-300 mb-2 block">Authority: {watermarkOpacity}%</label>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={watermarkOpacity}
                      onChange={(e) => setWatermarkOpacity(Number(e.target.value))}
                      className="w-full accent-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-300 mb-2 block">Rotation: {watermarkRotation}°</label>
                    <input
                      type="range"
                      min="0"
                      max="360"
                      value={watermarkRotation}
                      onChange={(e) => setWatermarkRotation(Number(e.target.value))}
                      className="w-full accent-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-300 mb-2 block">Position X: {watermarkPosition.x}%</label>
                    <input
                      type="range"
                      min="10"
                      max="90"
                      value={watermarkPosition.x}
                      onChange={(e) => setWatermarkPosition(prev => ({ ...prev, x: Number(e.target.value) }))}
                      className="w-full accent-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-300 mb-2 block">Position Y: {watermarkPosition.y}%</label>
                    <input
                      type="range"
                      min="10"
                      max="90"
                      value={watermarkPosition.y}
                      onChange={(e) => setWatermarkPosition(prev => ({ ...prev, y: Number(e.target.value) }))}
                      className="w-full accent-primary"
                    />
                  </div>
                </div>
              </div>
            )}

            {backgroundImage && mode === "meme" && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Court Verdict</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-300 mb-2 block">Judgment</label>
                    <input
                      type="text"
                      value={topText}
                      onChange={(e) => setTopText(e.target.value)}
                      placeholder="THE HORNY JUDGE"
                      className="w-full px-4 py-2 bg-black/50 border border-primary rounded-lg text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-300 mb-2 block">Sentence</label>
                    <input
                      type="text"
                      value={bottomText}
                      onChange={(e) => setBottomText(e.target.value)}
                      placeholder="FINDS YOU GUILTY"
                      className="w-full px-4 py-2 bg-black/50 border border-primary rounded-lg text-white placeholder-gray-400"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hidden canvas for download */}
      <canvas ref={canvasRef} className="hidden" />
    </section>
  );
}
