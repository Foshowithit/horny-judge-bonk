"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

// Navigation links
const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/#about" },
  { label: "TOKENOMICS", href: "/#tokenomics" },
  { label: "ROADMAP", href: "/#roadmap" },
  { label: "BUILD A BONK", href: "/#build-a-bonk" },
  { label: "JOIN US", href: "/#join-us" }
];

const actionButtons = [
  {
    label: "BUY $BONKD",
    href: "https://bonk.fun"
  },
  {
    label: "TWITTER",
    href: "https://x.com/Judge_of_horny"
  },
  {
    label: "TELEGRAM",
    href: "#"
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-primary/20">
      <div className="container mx-auto px-4">
        {/* Mobile layout */}
        <div className="md:hidden">
          {/* Top action buttons on mobile */}
          <div className="flex justify-center gap-2 py-2">
            {actionButtons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-background text-[10px] px-2 py-1 rounded-md hover:bg-primary/80 transition-colors font-bold"
              >
                {button.label}
              </a>
            ))}
          </div>

          {/* Mobile navigation bar */}
          <div className="flex justify-between items-center py-2">
            <span className="text-lg font-bold text-primary">GET BONK'D</span>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="p-2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l border-primary/20">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-bold text-primary">GET BONK'D</span>
                  <Button variant="ghost" className="p-2" onClick={() => setMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-foreground hover:text-primary py-3 font-medium transition-colors text-lg border-b border-primary/20"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex justify-between items-center py-2">

          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-foreground hover:text-primary text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons - desktop only */}
          <div className="flex items-center space-x-2">
            {actionButtons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-background text-xs px-3 py-1 rounded-md hover:bg-primary/80 transition-colors font-bold"
              >
                {button.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
