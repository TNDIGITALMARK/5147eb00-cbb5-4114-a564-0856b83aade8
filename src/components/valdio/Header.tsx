"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Wrench, Hammer, Phone, ChevronRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        bg-[hsl(210,51%,25%)] text-white sticky top-0 z-50
        transition-all duration-300
        ${scrolled ? 'shadow-lg backdrop-blur-sm bg-[hsl(210,51%,25%)]/95' : 'shadow-md'}
      `}
    >
      <div className="container-valdio">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Enhanced with better spacing */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-all group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-[hsl(38,91%,55%)]/10 rounded-full group-hover:bg-[hsl(38,91%,55%)]/20 transition-all"></div>
              <Wrench className="absolute text-[hsl(38,91%,55%)] w-7 h-7 rotate-45 group-hover:rotate-[50deg] transition-transform" style={{ left: '4px', top: '10px' }} />
              <Hammer className="absolute text-[hsl(38,91%,55%)] w-7 h-7 -rotate-45 group-hover:-rotate-[50deg] transition-transform" style={{ right: '4px', top: '10px' }} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-xl tracking-wide">VALDIO</span>
              <span className="text-xs font-medium tracking-widest text-[hsl(38,91%,55%)]">RENOVATIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation - Enhanced */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 font-medium hover:text-[hsl(38,91%,55%)] transition-colors rounded-lg hover:bg-white/5"
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="px-4 py-2 font-medium hover:text-[hsl(38,91%,55%)] transition-colors rounded-lg hover:bg-white/5"
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="px-4 py-2 font-medium hover:text-[hsl(38,91%,55%)] transition-colors rounded-lg hover:bg-white/5"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 font-medium hover:text-[hsl(38,91%,55%)] transition-colors rounded-lg hover:bg-white/5"
            >
              Contact
            </Link>

            {/* Call Now Button - More Prominent */}
            <a
              href="tel:6474464233"
              className="ml-4 inline-flex items-center gap-2 bg-[hsl(38,91%,55%)] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[hsl(38,91%,60%)] hover:scale-105 transition-all shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">(647) 446-4233</span>
              <span className="xl:hidden">Call Now</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Enhanced with animations */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-white/20 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="flex items-center justify-between font-medium hover:text-[hsl(38,91%,55%)] hover:bg-white/5 transition-all py-3 px-4 rounded-lg group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Home</span>
                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="/#services"
                className="flex items-center justify-between font-medium hover:text-[hsl(38,91%,55%)] hover:bg-white/5 transition-all py-3 px-4 rounded-lg group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Services</span>
                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="/gallery"
                className="flex items-center justify-between font-medium hover:text-[hsl(38,91%,55%)] hover:bg-white/5 transition-all py-3 px-4 rounded-lg group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Gallery</span>
                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-between font-medium hover:text-[hsl(38,91%,55%)] hover:bg-white/5 transition-all py-3 px-4 rounded-lg group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Contact</span>
                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              {/* Mobile CTA */}
              <a
                href="tel:6474464233"
                className="flex items-center justify-center gap-2 bg-[hsl(38,91%,55%)] text-white font-semibold py-3 px-4 rounded-lg mt-4 hover:bg-[hsl(38,91%,60%)] transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call (647) 446-4233
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
