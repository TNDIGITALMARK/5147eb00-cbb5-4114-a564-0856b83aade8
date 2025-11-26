import Header from '@/components/valdio/Header';
import Footer from '@/components/valdio/Footer';
import { Phone, Star, MapPin, Paintbrush, Wrench, Bath, ChefHat, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section - Modern Redesign */}
        <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center text-white overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/generated/hero-kitchen.png"
              alt="Modern kitchen renovation"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay - Enhanced for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,51%,25%)]/90 via-[hsl(210,51%,25%)]/70 to-[hsl(210,51%,35%)]/60"></div>

            {/* Animated Accent Lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[hsl(38,91%,55%)] to-transparent opacity-70"></div>
          </div>

          <div className="container-valdio relative z-10 py-20">
            <div className="max-w-4xl mx-auto">
              {/* Trust Badge */}
              <div className="flex justify-center mb-6 animate-in fade-in slide-in-from-top duration-500">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <Star className="w-4 h-4 text-[hsl(38,91%,55%)] fill-[hsl(38,91%,55%)]" />
                  <span className="text-sm font-semibold">30+ Years of Excellence in GTA</span>
                  <Star className="w-4 h-4 text-[hsl(38,91%,55%)] fill-[hsl(38,91%,55%)]" />
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white text-center leading-tight animate-in fade-in slide-in-from-bottom duration-700">
                Transform Your Home
                <span className="block text-[hsl(38,91%,55%)] mt-2">Into Your Dream Space</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl lg:text-2xl mb-10 text-white/95 max-w-3xl mx-auto text-center leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                Expert renovation services for kitchens, bathrooms, flooring, and complete home makeovers.
                Trusted by homeowners across the Greater Toronto Area.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-in fade-in slide-in-from-bottom duration-700 delay-400">
                <a
                  href="tel:6474464233"
                  className="group inline-flex items-center gap-3 bg-[hsl(38,91%,55%)] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-[hsl(38,91%,60%)] hover:scale-105 transition-all shadow-gold w-full sm:w-auto justify-center"
                >
                  <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Call (647) 446-4233
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[hsl(210,51%,25%)] px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all w-full sm:w-auto justify-center group"
                >
                  Get Free Estimate
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Key Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-600">
                <div className="flex flex-col items-center text-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-[hsl(38,91%,55%)]/20 flex items-center justify-center mb-3">
                    <Star className="w-6 h-6 text-[hsl(38,91%,55%)]" />
                  </div>
                  <h3 className="font-bold text-white mb-1">30+ Years</h3>
                  <p className="text-sm text-white/80">Expert Craftsmanship</p>
                </div>

                <div className="flex flex-col items-center text-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-[hsl(38,91%,55%)]/20 flex items-center justify-center mb-3">
                    <MapPin className="w-6 h-6 text-[hsl(38,91%,55%)]" />
                  </div>
                  <h3 className="font-bold text-white mb-1">GTA Wide</h3>
                  <p className="text-sm text-white/80">Local & Trusted</p>
                </div>

                <div className="flex flex-col items-center text-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-[hsl(38,91%,55%)]/20 flex items-center justify-center mb-3">
                    <Wrench className="w-6 h-6 text-[hsl(38,91%,55%)]" />
                  </div>
                  <h3 className="font-bold text-white mb-1">Full Service</h3>
                  <p className="text-sm text-white/80">Complete Solutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-padding bg-white">
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
