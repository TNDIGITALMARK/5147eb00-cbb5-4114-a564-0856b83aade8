import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[hsl(180,66%,18%)] via-[hsl(180,59%,27%)] to-[hsl(180,66%,18%)] text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(8,78%,60%)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container-valdio py-16 relative z-10">
        {/* Logo & Tagline */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(180,66%,18%)] to-[hsl(180,59%,27%)] rounded-2xl rotate-6 shadow-teal"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-[hsl(8,78%,60%)] to-[hsl(8,57%,50%)] rounded-2xl -rotate-6 opacity-80"></div>
            <Sparkles className="relative text-white w-8 h-8 z-10" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-3xl tracking-tight text-white">VALDIO</span>
            <span className="text-xs font-semibold tracking-[0.2em] text-[hsl(8,78%,60%)] mt-1">RENOVATIONS</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3 text-white/90">
              <li className="hover:text-[hsl(8,78%,60%)] transition-colors cursor-pointer">Flooring Installation</li>
              <li className="hover:text-[hsl(8,78%,60%)] transition-colors cursor-pointer">Kitchen Renovations</li>
              <li className="hover:text-[hsl(8,78%,60%)] transition-colors cursor-pointer">Bathroom Makeovers</li>
              <li className="hover:text-[hsl(8,78%,60%)] transition-colors cursor-pointer">Interior Painting</li>
              <li className="hover:text-[hsl(8,78%,60%)] transition-colors cursor-pointer">Full Home Renovations</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4 text-white/90">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[hsl(8,78%,60%)]/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[hsl(8,78%,60%)]" />
                </div>
                <a href="tel:6474464233" className="hover:text-[hsl(8,78%,60%)] transition-colors font-medium">
                  (647) 446-4233
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[hsl(8,78%,60%)]/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[hsl(8,78%,60%)]" />
                </div>
                <a href="mailto:valdiorenovations@outlook.com" className="hover:text-[hsl(8,78%,60%)] transition-colors font-medium">
                  valdiorenovations@outlook.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[hsl(8,78%,60%)]/20 flex items-center justify-center mt-0.5">
                  <MapPin className="w-5 h-5 text-[hsl(8,78%,60%)]" />
                </div>
                <span className="font-medium">Serving the Greater Toronto Area</span>
              </div>
            </div>
          </div>

          {/* Service Area & Social Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Service Area</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Toronto, Mississauga, Brampton, Markham, Vaughan, Richmond Hill, and surrounding GTA areas.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[hsl(8,78%,60%)] rounded-xl flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[hsl(8,78%,60%)] rounded-xl flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[hsl(8,78%,60%)] rounded-xl flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/80">
          <p className="mb-4">&copy; {new Date().getFullYear()} Valdio Renovations. All rights reserved.</p>
          <div className="flex justify-center gap-8 text-sm">
            <Link href="/privacy" className="hover:text-[hsl(8,78%,60%)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[hsl(8,78%,60%)] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
