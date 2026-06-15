import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const services = [
  { id: 1, title: "Residential Cleaning", description: "Complete home cleaning including dusting, vacuuming, mopping, and sanitizing all surfaces.", icon: "🏠", image: "https://images.unsplash.com/photo-1581578017442-73e757bfcf4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 2, title: "Commercial Cleaning", description: "Professional office cleaning, desk sanitization, floor care, and common area maintenance.", icon: "🏢", image: "https://images.unsplash.com/photo-1497366811353-68707a6b0a89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 3, title: "Deep Cleaning", description: "Thorough deep clean of neglected areas, appliances, and hard-to-reach spots.", icon: "✨", image: "https://images.unsplash.com/photo-1558487704-ec5c8c4e0f4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 4, title: "Move In/Out Service", description: "Comprehensive cleaning for property transitions and rentals.", icon: "📦", image: "https://images.unsplash.com/photo-1581852127542-5e31f019e308?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 5, title: "Post-Construction", description: "Specialized cleanup after renovations and construction projects.", icon: "🔨", image: "https://images.unsplash.com/photo-1504307651252-ba86586c065f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 6, title: "Recurring Maintenance", description: "Scheduled cleaning services to keep your space consistently clean.", icon: "📅", image: "https://images.unsplash.com/photo-1584622562717-5a4249a1f6e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
]

const testimonials = [
  { id: 1, name: "Sarah Johnson", content: "Momar Group cleaned my home today - they did a terrific job. They really paid attention to detail. Thank you!", rating: 5 },
  { id: 2, name: "Michael Chen", content: "Best cleaning service I've ever used. They pay attention to every detail and our home has never looked better.", rating: 5 },
  { id: 3, name: "Emily Rodriguez", content: "After our construction project, Momar Group cleaned it all up perfectly. Saved us so much time and stress!", rating: 5 },
]

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578017442-73e757bfcf4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
          <div className="max-w-2xl">
            <span className="inline-block bg-brand-500/20 text-brand-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Professional Cleaning Services
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted<br />
              <span className="text-brand-400">Cleaning Partner</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              We provide premium residential and commercial cleaning services with meticulous attention to detail. Your satisfaction is guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking" className="btn-primary text-center text-lg">Get a Free Quote</Link>
              <Link to="/services" className="btn-secondary text-center text-lg border-white/20 text-white hover:bg-white/10">Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
            <h2 className="section-title mt-3">Nothing Is More Important</h2>
            <p className="section-subtitle">We prioritize the following to ensure your complete satisfaction.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Sparkling Clean</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We keep your home sparkling clean and germ free. Our disinfecting process kills 99% of common bacteria.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Insured & Bonded</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Our cleaners are fully insured and bonded so no need to worry about your home or office.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Leading Technology</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We use hospital-grade disinfectants, HEPA filtrations and microfiber cloths to reduce cross contamination.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Reliable Crews</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Our reliable and stable crews understand your specific cleaning service needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">Our Services</span>
            <h2 className="section-title mt-3">Professional Cleaning Solutions</h2>
            <p className="section-subtitle">Do you wish you had more free time? We can make it happen!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group card card-hover overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <Link to="/booking" className="text-brand-600 font-semibold text-sm hover:text-brand-700 transition-colors inline-flex items-center gap-1">
                    Book Now
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1600880706871-5e3b218bab05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our Team" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-brand-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">5K+</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Happy Customers</p>
                    <p className="text-sm text-gray-500">And growing every day</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">About Our Company</span>
              <h2 className="section-title mt-3 mb-6">Exceptional Level of Cleaning Services</h2>
              <p className="text-gray-500 mb-4 leading-relaxed">
                Founded with a commitment to excellence, Momar Group LLC has built a reputation as one of the leading providers of residential and commercial cleaning solutions in North Richland Hills, TX.
              </p>
              <p className="text-gray-500 mb-4 leading-relaxed">
                Our continuous pursuit for perfection has resulted in consistent growth. Our focus is to listen to our clients, understand their needs, and provide the exceptional level of cleaning service.
              </p>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Our professional team uses eco-friendly products and advanced techniques to ensure your space is not just clean, but truly spotless.
              </p>
              <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-white">500+</p>
              <p className="text-brand-200 text-sm mt-2">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-white">1K+</p>
              <p className="text-brand-200 text-sm mt-2">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-white">6</p>
              <p className="text-brand-200 text-sm mt-2">Service Categories</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-white">100%</p>
              <p className="text-brand-200 text-sm mt-2">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">Testimonials</span>
            <h2 className="section-title mt-3">What Our Clients Say</h2>
            <p className="section-subtitle">Don't just take our word for it - hear from our satisfied customers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="card p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-lg ${i < t.rating ? 'text-amber-400' : 'text-gray-200'}`}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{t.content}"</p>
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-brand-700 font-bold">{t.name[0]}</span>
                </div>
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/testimonials" className="btn-secondary">View All Reviews</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready for a Spotless Space?</h2>
          <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
            Get your free quote today and experience the Momar Group difference. We'll make your space shine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="btn-primary text-lg bg-white text-brand-700 hover:bg-gray-100">Get Your Free Quote</Link>
            <Link to="/contact" className="btn-secondary border-white/20 text-white hover:bg-white/10">Contact Us</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
