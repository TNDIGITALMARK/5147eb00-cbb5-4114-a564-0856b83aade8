import Header from '@/components/valdio/Header';
import Footer from '@/components/valdio/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function GalleryPage() {
  const projects = [
    {
      id: 1,
      title: 'Modern Kitchen Transformation',
      category: 'Kitchen',
      before: '/generated/gallery-kitchen-before.png',
      after: '/generated/gallery-kitchen-after.png',
      description: 'Complete kitchen renovation with custom white cabinets, quartz countertops, and modern stainless appliances.',
      timeline: '3 weeks',
      location: 'Toronto'
    },
    {
      id: 2,
      title: 'Luxury Bathroom Makeover',
      category: 'Bathroom',
      before: '/generated/gallery-bathroom-before.png',
      after: '/generated/gallery-bathroom-after.png',
      description: 'Full bathroom renovation featuring modern fixtures, white subway tiles, and frameless glass shower.',
      timeline: '2 weeks',
      location: 'Mississauga'
    },
    {
      id: 3,
      title: 'Hardwood Flooring Installation',
      category: 'Flooring',
      before: '/generated/gallery-kitchen-before.png',
      after: '/generated/gallery-flooring-after.png',
      description: 'Premium oak hardwood flooring installation throughout main living areas with professional finishing.',
      timeline: '1 week',
      location: 'Markham'
    },
    {
      id: 4,
      title: 'Interior Painting Project',
      category: 'Painting',
      before: '/generated/gallery-bathroom-before.png',
      after: '/generated/gallery-painting-after.png',
      description: 'Complete interior painting with smooth finish and premium paint for lasting beauty.',
      timeline: '4 days',
      location: 'Vaughan'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[hsl(210,51%,25%)] text-white py-20">
          <div className="container-valdio text-center">
            <h1 className="text-white mb-6">Project Gallery</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore our portfolio of stunning renovations across the Greater Toronto Area.
              See how we transform homes with quality craftsmanship and attention to detail.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-padding bg-white">
          <div className="container-valdio">
            <div className="space-y-16">
              {projects.map((project, index) => (
                <div key={project.id} className="grid md:grid-cols-2 gap-8 items-start">
                  {/* Before Image */}
                  <div className="space-y-4">
                    <div className="relative group rounded-xl overflow-hidden shadow-lg">
                      <div className="relative h-80">
                        <Image
                          src={project.before}
                          alt={`Before - ${project.title}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-bold">
                          BEFORE
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* After Image */}
                  <div className="space-y-4">
                    <div className="relative group rounded-xl overflow-hidden shadow-lg">
                      <div className="relative h-80">
                        <Image
                          src={project.after}
                          alt={`After - ${project.title}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-[hsl(38,91%,55%)] text-white px-4 py-2 rounded-lg text-sm font-bold">
                          AFTER
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="md:col-span-2 bg-[hsl(0,0%,96%)] p-6 rounded-xl">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="inline-block bg-[hsl(210,51%,25%)] text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                      <span className="text-gray-600">Timeline: {project.timeline}</span>
                      <span className="text-gray-600">Location: {project.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[hsl(210,51%,25%)] mb-3">{project.title}</h3>
                    <p className="text-gray-700 text-lg">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-[hsl(210,51%,25%)] to-[hsl(210,51%,30%)] text-white">
          <div className="container-valdio text-center">
            <h2 className="text-white mb-4">Ready to Start Your Renovation?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a transformation you'll love
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
