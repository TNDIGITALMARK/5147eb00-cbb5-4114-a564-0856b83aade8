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
        {/* Hero Section - Contemporary Redesign with Split Layout */}
        <section className="relative min-h-[calc(100vh-6rem)] flex items-center bg-gradient-to-br from-[hsl(140,20%,96%)] via-white to-[hsl(164,35%,92%)] overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Geometric Shapes */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[hsl(180,66%,18%)]/5 to-[hsl(180,59%,27%)]/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[hsl(8,78%,60%)]/5 to-[hsl(8,57%,50%)]/10 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl"></div>

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: 'linear-gradient(hsl(180,66%,18%) 1px, transparent 1px), linear-gradient(90deg, hsl(180,66%,18%) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="container-valdio relative z-10 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom duration-700">
                {/* Trust Badge */}
                <div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full border border-[hsl(164,35%,92%)] shadow-sm">
                  <Star className="w-5 h-5 text-[hsl(8,78%,60%)] fill-[hsl(8,78%,60%)]" />
                  <span className="text-sm font-semibold text-[hsl(180,25%,14%)]">30+ Years of Excellence in GTA</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-[hsl(180,66%,18%)]">
                  Transform Your Home Into Your
                  <span className="block mt-2 bg-gradient-to-r from-[hsl(8,78%,60%)] to-[hsl(8,57%,50%)] bg-clip-text text-transparent">
                    Dream Space
                  </span>
                </h1>

                {/* Subheading */}
                <p className="text-lg sm:text-xl text-[hsl(180,9%,37%)] leading-relaxed max-w-xl">
                  Expert renovation services for kitchens, bathrooms, flooring, and complete home makeovers.
                  Trusted by homeowners across the Greater Toronto Area.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:6474464233"
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[hsl(8,78%,60%)] to-[hsl(8,57%,50%)] text-white px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all shadow-coral"
                  >
                    <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    Call (647) 446-4233
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[hsl(180,66%,18%)] px-8 py-4 rounded-xl text-lg font-bold hover:bg-[hsl(164,35%,92%)] transition-all border-2 border-[hsl(180,66%,18%)] group"
                  >
                    Get Free Estimate
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Key Stats Row */}
                <div className="grid grid-cols-3 gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[hsl(180,66%,18%)] mb-1">30+</div>
                    <div className="text-sm text-[hsl(180,9%,37%)]">Years Experience</div>
                  </div>
                  <div className="text-center border-x border-[hsl(164,35%,92%)]">
                    <div className="text-3xl font-bold text-[hsl(180,66%,18%)] mb-1">500+</div>
                    <div className="text-sm text-[hsl(180,9%,37%)]">Projects Done</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[hsl(180,66%,18%)] mb-1">100%</div>
                    <div className="text-sm text-[hsl(180,9%,37%)]">Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Image Showcase */}
              <div className="relative animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                {/* Main Image Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/generated/hero-kitchen.png"
                    alt="Modern kitchen renovation showcase"
                    width={600}
                    height={700}
                    className="object-cover w-full h-[500px] lg:h-[600px]"
                    priority
                  />

                  {/* Floating Info Card */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(180,66%,18%)] to-[hsl(180,59%,27%)] flex items-center justify-center shadow-teal">
                        <Wrench className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-[hsl(180,66%,18%)] text-lg mb-1">Full Service Renovations</div>
                        <div className="text-sm text-[hsl(180,9%,37%)]">From design to completion, we handle it all</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accent Badge */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[hsl(8,78%,60%)] to-[hsl(8,57%,50%)] rounded-full flex items-center justify-center shadow-coral">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold">GTA</div>
                    <div className="text-xs font-semibold">WIDE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-padding bg-white">
          <div className="container-valdio">
            <div className="text-center mb-16">
              <h2 className="text-[hsl(180,66%,18%)] mb-4">Our Expert Services</h2>
              <p className="text-[hsl(180,9%,37%)] text-lg max-w-2xl mx-auto">
                Comprehensive renovation solutions tailored to your vision and needs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Flooring */}
              <div className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-[hsl(164,35%,92%)] to-white hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[hsl(180,66%,18%)] to-[hsl(180,59%,27%)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-teal">
                  <Wrench className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[hsl(180,66%,18%)]">Flooring</h3>
                <p className="text-[hsl(180,9%,37%)] leading-relaxed">
                  Hardwood, laminate, tile, and vinyl flooring installation with precision craftsmanship.
                </p>
              </div>

              {/* Kitchen Renovation */}
              <div className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-[hsl(164,35%,92%)] to-white hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[hsl(8,78%,60%)] to-[hsl(8,57%,50%)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-coral">
                  <ChefHat className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[hsl(180,66%,18%)]">Kitchen Renovation</h3>
                <p className="text-[hsl(180,9%,37%)] leading-relaxed">
                  Complete kitchen transformations with custom cabinets, countertops, and modern designs.
                </p>
              </div>

              {/* Bathroom Renovation */}
              <div className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-[hsl(164,35%,92%)] to-white hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[hsl(180,66%,18%)] to-[hsl(180,59%,27%)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-teal">
                  <Bath className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[hsl(180,66%,18%)]">Bathroom Renovation</h3>
                <p className="text-[hsl(180,9%,37%)] leading-relaxed">
                  Luxury bathroom upgrades with modern fixtures, tiles, and stunning finishes.
                </p>
              </div>

              {/* Painting */}
              <div className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-[hsl(164,35%,92%)] to-white hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[hsl(8,78%,60%)] to-[hsl(8,57%,50%)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-coral">
                  <Paintbrush className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[hsl(180,66%,18%)]">Painting</h3>
                <p className="text-[hsl(180,9%,37%)] leading-relaxed">
                  Professional interior and exterior painting with premium materials and expert application.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="section-padding bg-[hsl(140,20%,96%)]">
          <div className="container-valdio">
            <div className="text-center mb-16">
              <h2 className="text-[hsl(180,66%,18%)] mb-4">Our Work Speaks for Itself</h2>
              <p className="text-[hsl(180,9%,37%)] text-lg max-w-2xl mx-auto">
                Browse our portfolio of stunning transformations across the GTA
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Gallery Item 1 */}
              <div className="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="relative h-80">
                  <Image
                    src="/generated/gallery-kitchen-after.png"
                    alt="Modern kitchen renovation"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(180,66%,18%)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[hsl(8,78%,60%)] to-[hsl(8,57%,50%)] text-white px-4 py-2 rounded-xl text-sm font-bold shadow-coral">
                    AFTER
                  </div>
                </div>
              </div>

              {/* Gallery Item 2 */}
              <div className="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="relative h-80">
                  <Image
                    src="/generated/gallery-bathroom-after.png"
                    alt="Bathroom renovation"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(180,66%,18%)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[hsl(8,78%,60%)] to-[hsl(8,57%,50%)] text-white px-4 py-2 rounded-xl text-sm font-bold shadow-coral">
                    AFTER
                  </div>
                </div>
              </div>

              {/* Gallery Item 3 */}
              <div className="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="relative h-80">
                  <Image
                    src="/generated/gallery-flooring-after.png"
                    alt="Hardwood flooring installation"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(180,66%,18%)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[hsl(8,78%,60%)] to-[hsl(8,57%,50%)] text-white px-4 py-2 rounded-xl text-sm font-bold shadow-coral">
                    AFTER
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[hsl(180,66%,18%)] to-[hsl(180,59%,27%)] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all shadow-teal"
              >
                View Full Gallery
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-gradient-to-br from-[hsl(180,66%,18%)] via-[hsl(180,59%,27%)] to-[hsl(180,66%,18%)] text-white relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(8,78%,60%)]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

          <div className="container-valdio relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-white mb-4">Customer Testimonials</h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                See what our satisfied clients have to say about their renovation experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all hover:scale-105">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[hsl(8,78%,60%)] text-[hsl(8,78%,60%)]" />
                  ))}
                </div>
                <p className="text-white/95 italic mb-6 leading-relaxed text-lg">
                  "Valdio transformed our outdated kitchen into a modern masterpiece. The attention to detail was incredible and they finished exactly on schedule."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(8,78%,60%)] to-[hsl(8,57%,50%)] flex items-center justify-center text-white font-bold text-lg">
                    S
                  </div>
                  <div>
                    <p className="font-bold text-white">Sarah M.</p>
                    <p className="text-sm text-white/70">Toronto</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all hover:scale-105">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[hsl(8,78%,60%)] text-[hsl(8,78%,60%)]" />
                  ))}
                </div>
                <p className="text-white/95 italic mb-6 leading-relaxed text-lg">
                  "Professional, reliable, and excellent quality work. Our new hardwood floors look absolutely stunning."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(8,78%,60%)] to-[hsl(8,57%,50%)] flex items-center justify-center text-white font-bold text-lg">
                    M
                  </div>
                  <div>
                    <p className="font-bold text-white">Michael R.</p>
                    <p className="text-sm text-white/70">Mississauga</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all hover:scale-105">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[hsl(8,78%,60%)] text-[hsl(8,78%,60%)]" />
                  ))}
                </div>
                <p className="text-white/95 italic mb-6 leading-relaxed text-lg">
                  "From consultation to completion, the Valdio team exceeded our expectations. Highly recommend for any renovation project."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(8,78%,60%)] to-[hsl(8,57%,50%)] flex items-center justify-center text-white font-bold text-lg">
                    J
                  </div>
                  <div>
                    <p className="font-bold text-white">Jennifer L.</p>
                    <p className="text-sm text-white/70">Markham</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators Section */}
        <section className="section-padding bg-white">
          <div className="container-valdio">
            <div className="text-center mb-16">
              <h2 className="text-[hsl(180,66%,18%)] mb-4">Built on Trust & Quality</h2>
              <p className="text-[hsl(180,9%,37%)] text-lg max-w-2xl mx-auto">
                Three pillars that define our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              {/* 30+ Years Badge */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-[hsl(8,78%,60%)] to-[hsl(8,57%,50%)] flex items-center justify-center mb-6 shadow-coral group-hover:scale-110 transition-transform">
                  <div className="text-white">
                    <div className="text-5xl font-bold">30+</div>
                    <div className="text-sm font-semibold tracking-wider mt-1">YEARS</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[hsl(180,66%,18%)] mb-3">Experience</h3>
                <p className="text-[hsl(180,9%,37%)] leading-relaxed">Over three decades of proven craftsmanship</p>
              </div>

              {/* GTA Service Area */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-[hsl(164,35%,92%)] to-[hsl(140,20%,96%)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border-2 border-[hsl(180,66%,18%)]">
                  <MapPin className="w-20 h-20 text-[hsl(180,66%,18%)]" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(180,66%,18%)] mb-3">GTA Coverage</h3>
                <p className="text-[hsl(180,9%,37%)] leading-relaxed">Serving all of Greater Toronto Area</p>
              </div>

              {/* Quality Guarantee */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-[hsl(180,66%,18%)] to-[hsl(180,59%,27%)] flex items-center justify-center mb-6 shadow-teal group-hover:scale-110 transition-transform">
                  <Star className="w-20 h-20 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(180,66%,18%)] mb-3">Quality First</h3>
                <p className="text-[hsl(180,9%,37%)] leading-relaxed">Every project backed by our commitment to excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-[hsl(164,35%,92%)] via-white to-[hsl(140,20%,96%)] relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[hsl(180,66%,18%)]/5 to-[hsl(8,78%,60%)]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container-valdio text-center relative z-10">
            <h2 className="text-[hsl(180,66%,18%)] mb-4">Ready to Transform Your Home?</h2>
            <p className="text-xl text-[hsl(180,9%,37%)] mb-10 max-w-2xl mx-auto leading-relaxed">
              Get your free estimate today and see why homeowners across the GTA trust Valdio Renovations
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:6474464233"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[hsl(8,78%,60%)] to-[hsl(8,57%,50%)] text-white px-10 py-5 rounded-xl text-lg font-bold hover:scale-105 transition-all shadow-coral"
              >
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Call (647) 446-4233
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[hsl(180,66%,18%)] px-10 py-5 rounded-xl text-lg font-bold hover:bg-[hsl(164,35%,92%)] transition-all border-2 border-[hsl(180,66%,18%)] group"
              >
                Request Free Estimate
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
