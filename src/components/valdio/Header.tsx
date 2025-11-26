"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Home as HomeIcon, Wrench, ImageIcon, Mail, Phone, Sparkles } from 'lucide-react';

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
        bg-white sticky top-0 z-50
        transition-all duration-300
        ${scrolled ? 'shadow-lg border-b border-[hsl(164,35%,92%)]' : 'shadow-sm'}
      `}
    >
      <div className="container-valdio">
        <div className="flex items-center justify-between h-24">
          {/* Logo - Modern, Minimalist Design */}
          <Link href="/" className="flex items-center gap-4 hover:opacity-90 transition-all group">
            <div className="relative w-14 h-14 flex items-center justify-center">
              {/* Geometric Logo Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(180,66%,18%)] to-[hsl(180,59%,27%)] rounded-2xl rotate-6 group-hover:rotate-12 transition-all shadow-teal"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-[hsl(8,78%,60%)] to-[hsl(8,57%,50%)] rounded-2xl -rotate-6 group-hover:-rotate-12 transition-all opacity-80"></div>
              <Sparkles className="relative text-white w-7 h-7 z-10" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-2xl tracking-tight text-[hsl(180,66%,18%)] group-hover:text-[hsl(180,59%,27%)] transition-colors">VALDIO</span>
              <span className="text-xs font-semibold tracking-[0.2em] text-[hsl(8,78%,60%)] mt-0.5">RENOVATIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation - Clean & Modern */}
          <nav className="hidden lg:flex items-center gap-2">
            <Link
              href="/"
              className="group flex items-center gap-2 px-5 py-2.5 font-medium text-[hsl(180,25%,14%)] hover:text-[hsl(180,59%,27%)] transition-all rounded-xl hover:bg-[hsl(164,35%,92%)]"
            >
              <HomeIcon className="w-4 h-4" />
              Home
            </Link>
            <Link
              href="/#services"
              className="group flex items-center gap-2 px-5 py-2.5 font-medium text-[hsl(180,25%,14%)] hover:text-[hsl(180,59%,27%)] transition-all rounded-xl hover:bg-[hsl(164,35%,92%)]"
            >
              <Wrench className="w-4 h-4" />
              Services
            </Link>
            <Link
              href="/gallery"
              className="group flex items-center gap-2 px-5 py-2.5 font-medium text-[hsl(180,25%,14%)] hover:text-[hsl(180,59%,27%)] transition-all rounded-xl hover:bg-[hsl(164,35%,92%)]"
            >
              <ImageIcon className="w-4 h-4" />
              Gallery
            </Link>
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-5 py-2.5 font-medium text-[hsl(180,25%,14%)] hover:text-[hsl(180,59%,27%)] transition-all rounded-xl hover:bg-[hsl(164,35%,92%)]"
            >
              <Mail className="w-4 h-4" />
              Contact
            </Link>

            {/* Call Now Button - Prominent Coral CTA */}
            <a
              href="tel:6474464233"
              className="ml-3 inline-flex items-center gap-2.5 bg-gradient-to-r from-[hsl(8,78%,60%)] to-[hsl(8,57%,50%)] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-coral transition-all shadow-md"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden xl:inline">(647) 446-4233</span>
              <span className="xl:hidden">Call Now</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 hover:bg-[hsl(164,35%,92%)] rounded-xl transition-colors text-[hsl(180,66%,18%)]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Modern Slide-Down */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-[hsl(164,35%,92%)] animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="flex items-center gap-3 font-medium text-[hsl(180,25%,14%)] hover:text-[hsl(180,59%,27%)] hover:bg-[hsl(164,35%,92%)] transition-all py-4 px-5 rounded-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                <HomeIcon className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link
                href="/#services"
                className="flex items-center gap-3 font-medium text-[hsl(180,25%,14%)] hover:text-[hsl(180,59%,27%)] hover:bg-[hsl(164,35%,92%)] transition-all py-4 px-5 rounded-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Wrench className="w-5 h-5" />
                <span>Services</span>
              </Link>
              <Link
                href="/gallery"
                className="flex items-center gap-3 font-medium text-[hsl(180,25%,14%)] hover:text-[hsl(180,59%,27%)] hover:bg-[hsl(164,35%,92%)] transition-all py-4 px-5 rounded-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ImageIcon className="w-5 h-5" />
                <span>Gallery</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-3 font-medium text-[hsl(180,25%,14%)] hover:text-[hsl(180,59%,27%)] hover:bg-[hsl(164,35%,92%)] transition-all py-4 px-5 rounded-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Mail className="w-5 h-5" />
                <span>Contact</span>
              </Link>

              {/* Mobile CTA */}
              <a
                href="tel:6474464233"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-[hsl(8,78%,60%)] to-[hsl(8,57%,50%)] text-white font-semibold py-4 px-5 rounded-xl mt-4 hover:scale-[1.02] transition-all shadow-coral"
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
