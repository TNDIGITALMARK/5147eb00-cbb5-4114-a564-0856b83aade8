import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[hsl(210,51%,25%)] text-white">
      <div className="container-valdio py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[hsl(38,91%,55%)]">Our Services</h3>
            <ul className="space-y-2 text-white/90">
              <li>Flooring Installation</li>
              <li>Kitchen Renovations</li>
              <li>Bathroom Makeovers</li>
              <li>Interior Painting</li>
              <li>Full Home Renovations</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[hsl(38,91%,55%)]">Contact Us</h3>
            <div className="space-y-3 text-white/90">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[hsl(38,91%,55%)]" />
                <a href="tel:6474464233" className="hover:text-[hsl(38,91%,55%)] transition-colors">
                  (647) 446-4233
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[hsl(38,91%,55%)]" />
                <a href="mailto:valdiorenovations@outlook.com" className="hover:text-[hsl(38,91%,55%)] transition-colors">
                  valdiorenovations@outlook.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[hsl(38,91%,55%)] mt-1" />
                <span>Serving the Greater Toronto Area</span>
              </div>
            </div>
          </div>

          {/* Service Area & Social Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[hsl(38,91%,55%)]">Service Area</h3>
            <p className="text-white/90 mb-4">
              Toronto, Mississauga, Brampton, Markham, Vaughan, Richmond Hill, and surrounding GTA areas.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[hsl(38,91%,55%)] rounded-full flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[hsl(38,91%,55%)] rounded-full flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[hsl(38,91%,55%)] rounded-full flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70 text-sm">
          <p>&copy; {new Date().getFullYear()} Valdio Renovations. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-3">
            <Link href="/privacy" className="hover:text-[hsl(38,91%,55%)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[hsl(38,91%,55%)] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
