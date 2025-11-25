"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Wrench, Hammer } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[hsl(210,51%,25%)] text-white sticky top-0 z-50 shadow-md">
      <div className="container-valdio">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <div className="relative w-10 h-10">
              <Wrench className="absolute text-[hsl(38,91%,55%)] w-7 h-7 rotate-45" style={{ left: '2px', top: '8px' }} />
              <Hammer className="absolute text-[hsl(38,91%,55%)] w-7 h-7 -rotate-45" style={{ right: '2px', top: '8px' }} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg tracking-wide">VALDIO</span>
              <span className="text-xs font-medium tracking-wider">RENOVATIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="font-medium hover:text-[hsl(38,91%,55%)] transition-colors">
              Services
            </Link>
            <Link href="/gallery" className="font-medium hover:text-[hsl(38,91%,55%)] transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="font-medium hover:text-[hsl(38,91%,55%)] transition-colors">
              Contact
            </Link>
            <a
              href="tel:6474464233"
              className="font-semibold text-[hsl(38,91%,55%)] hover:text-white transition-colors"
            >
              (647) 446-4233
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="font-medium hover:text-[hsl(38,91%,55%)] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className="font-medium hover:text-[hsl(38,91%,55%)] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="font-medium hover:text-[hsl(38,91%,55%)] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:6474464233"
                className="font-semibold text-[hsl(38,91%,55%)] py-2"
              >
                (647) 446-4233
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
