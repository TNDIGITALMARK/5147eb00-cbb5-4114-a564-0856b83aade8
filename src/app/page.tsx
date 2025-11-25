import Header from '@/components/valdio/Header';
import Footer from '@/components/valdio/Footer';
import { Phone, Star, MapPin, Paintbrush, Wrench, Bath, ChefHat } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/generated/hero-kitchen.png"
              alt="Modern kitchen renovation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,51%,25%)]/80 to-[hsl(210,51%,25%)]/40"></div>
          </div>

          <div className="container-valdio relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Transform Your Home.<br />Trust Valdio Renovations.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95 max-w-2xl mx-auto">
              30+ years of expert craftsmanship serving the Greater Toronto Area
            </p>
            <a
              href="tel:6474464233"
              className="inline-flex items-center gap-3 bg-[hsl(38,91%,55%)] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 hover:brightness-110 transition-all shadow-gold"
            >
              <Phone className="w-6 h-6" />
              (647) 446-4233
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-white">
          <div className="container-valdio">
            <h2 className="text-center text-[hsl(210,51%,25%)] mb-12">Our Expert Services</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Flooring */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-md transition-all group">
                <div className="w-20 h-20 rounded-full bg-[hsl(212,65%,90%)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Wrench className="w-10 h-10 text-[hsl(210,51%,25%)]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[hsl(210,51%,25%)]">Flooring</h3>
                <p className="text-gray-600">
                  Hardwood, laminate, tile, and vinyl flooring installation with precision craftsmanship.
                </p>
              </div>

              {/* Kitchen Renovation */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-md transition-all group">
                <div className="w-20 h-20 rounded-full bg-[hsl(212,65%,90%)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ChefHat className="w-10 h-10 text-[hsl(210,51%,25%)]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[hsl(210,51%,25%)]">Kitchen Renovation</h3>
                <p className="text-gray-600">
                  Complete kitchen transformations with custom cabinets, countertops, and modern designs.
                </p>
              </div>

              {/* Bathroom Renovation */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-md transition-all group">
                <div className="w-20 h-20 rounded-full bg-[hsl(212,65%,90%)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Bath className="w-10 h-10 text-[hsl(210,51%,25%)]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[hsl(210,51%,25%)]">Bathroom Renovation</h3>
                <p className="text-gray-600">
                  Luxury bathroom upgrades with modern fixtures, tiles, and stunning finishes.
                </p>
              </div>

              {/* Painting */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-md transition-all group">
                <div className="w-20 h-20 rounded-full bg-[hsl(212,65%,90%)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Paintbrush className="w-10 h-10 text-[hsl(210,51%,25%)]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[hsl(210,51%,25%)]">Painting</h3>
                <p className="text-gray-600">
                  Professional interior and exterior painting with premium materials and expert application.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="section-padding bg-[hsl(0,0%,96%)]">
          <div className="container-valdio">
            <h2 className="text-center text-[hsl(210,51%,25%)] mb-4">Our Work Speaks for Itself</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Browse our portfolio of stunning transformations across the GTA
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Gallery Item 1 */}
              <div className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="relative h-64">
                  <Image
                    src="/generated/gallery-kitchen-after.png"
                    alt="Modern kitchen renovation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[hsl(38,91%,55%)] text-white px-3 py-1 rounded text-sm font-bold">
                    AFTER
                  </div>
                </div>
              </div>

              {/* Gallery Item 2 */}
              <div className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="relative h-64">
                  <Image
                    src="/generated/gallery-bathroom-after.png"
                    alt="Bathroom renovation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[hsl(38,91%,55%)] text-white px-3 py-1 rounded text-sm font-bold">
                    AFTER
                  </div>
                </div>
              </div>

              {/* Gallery Item 3 */}
              <div className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="relative h-64">
                  <Image
                    src="/generated/gallery-flooring-after.png"
                    alt="Hardwood flooring installation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[hsl(38,91%,55%)] text-white px-3 py-1 rounded text-sm font-bold">
                    AFTER
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/gallery"
                className="inline-block bg-[hsl(210,51%,25%)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[hsl(210,51%,20%)] transition-colors"
              >
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-[hsl(210,51%,25%)] text-white">
          <div className="container-valdio">
            <h2 className="text-center text-white mb-12">Customer Testimonials</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[hsl(38,91%,55%)] text-[hsl(38,91%,55%)]" />
                  ))}
                </div>
                <p className="text-white/95 italic mb-4">
                  "Valdio transformed our outdated kitchen into a modern masterpiece. The attention to detail was incredible and they finished exactly on schedule."
                </p>
                <p className="font-semibold text-[hsl(38,91%,55%)]">Sarah M.</p>
                <p className="text-sm text-white/70">Toronto</p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[hsl(38,91%,55%)] text-[hsl(38,91%,55%)]" />
                  ))}
                </div>
                <p className="text-white/95 italic mb-4">
                  "Professional, reliable, and excellent quality work. Our new hardwood floors look absolutely stunning."
                </p>
                <p className="font-semibold text-[hsl(38,91%,55%)]">Michael R.</p>
                <p className="text-sm text-white/70">Mississauga</p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[hsl(38,91%,55%)] text-[hsl(38,91%,55%)]" />
                  ))}
                </div>
                <p className="text-white/95 italic mb-4">
                  "From consultation to completion, the Valdio team exceeded our expectations. Highly recommend for any renovation project."
                </p>
                <p className="font-semibold text-[hsl(38,91%,55%)]">Jennifer L.</p>
                <p className="text-sm text-white/70">Markham</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators Section */}
        <section className="section-padding bg-white">
          <div className="container-valdio">
            <h2 className="text-center text-[hsl(210,51%,25%)] mb-12">Built on Trust & Quality</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* 30+ Years Badge */}
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[hsl(38,91%,55%)] to-[hsl(38,91%,45%)] flex items-center justify-center mb-4 shadow-lg">
                  <div className="text-white">
                    <div className="text-4xl font-bold">30+</div>
                    <div className="text-sm font-semibold">YEARS</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[hsl(210,51%,25%)]">Experience</h3>
                <p className="text-gray-600 mt-2">Over three decades of proven craftsmanship</p>
              </div>

              {/* GTA Service Area */}
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-[hsl(212,65%,90%)] rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-16 h-16 text-[hsl(210,51%,25%)]" />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(210,51%,25%)]">GTA Coverage</h3>
                <p className="text-gray-600 mt-2">Serving all of Greater Toronto Area</p>
              </div>

              {/* Quality Guarantee */}
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-[hsl(212,65%,90%)] rounded-full flex items-center justify-center mb-4">
                  <Star className="w-16 h-16 text-[hsl(210,51%,25%)]" />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(210,51%,25%)]">Quality First</h3>
                <p className="text-gray-600 mt-2">Every project backed by our commitment to excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-[hsl(210,51%,25%)] to-[hsl(210,51%,30%)] text-white">
          <div className="container-valdio text-center">
            <h2 className="text-white mb-4">Ready to Transform Your Home?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get your free estimate today and see why homeowners across the GTA trust Valdio Renovations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:6474464233"
                className="inline-flex items-center gap-3 bg-[hsl(38,91%,55%)] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 hover:brightness-110 transition-all shadow-gold"
              >
                <Phone className="w-6 h-6" />
                Call (647) 446-4233
              </a>
              <Link
                href="/contact"
                className="inline-block bg-white text-[hsl(210,51%,25%)] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Free Estimate
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
