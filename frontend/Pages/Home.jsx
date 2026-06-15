import React, { useState, useEffect, useCallback } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

const services = [
  { id: 1, title: "Residential Cleaning", description: "Complete home cleaning including dusting, vacuuming, mopping, and sanitizing all surfaces.", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { id: 2, title: "Commercial Cleaning", description: "Professional office cleaning, desk sanitization, floor care, and common area maintenance.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { id: 3, title: "Deep Cleaning", description: "Thorough deep clean of neglected areas, appliances, and hard-to-reach spots.", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" },
  { id: 4, title: "Move In/Out Service", description: "Comprehensive cleaning for property transitions and rentals.", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  { id: 5, title: "Post-Construction", description: "Specialized cleanup after renovations and construction projects.", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  { id: 6, title: "Recurring Maintenance", description: "Scheduled cleaning services to keep your space consistently clean.", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }
]

const testimonials = [
  { id: 1, name: "Sarah Johnson", content: "Momar Group cleaned my home today - they did a terrific job. They really paid attention to detail. Thank you!", rating: 5 },
  { id: 2, name: "Michael Chen", content: "Best cleaning service I've ever used. They pay attention to every detail and our home has never looked better.", rating: 5 },
  { id: 3, name: "Emily Rodriguez", content: "After our construction project, Momar Group cleaned it all up perfectly. Saved us so much time and stress!", rating: 5 },
]

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    tag: "Professional Cleaning Services",
    title: "Your Trusted",
    highlight: "Cleaning Partner",
    text: "We provide premium residential and commercial cleaning services with meticulous attention to detail. Your satisfaction is guaranteed.",
  },
  {
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    tag: "Residential & Hospitality",
    title: "Immaculate Interiors,",
    highlight: "Unforgettable Impressions",
    text: "From cozy homes to luxury hotels, we deliver spotless results that leave a lasting impression on every guest and resident.",
  },
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    tag: "Office & Commercial Cleaning",
    title: "Spotless Workspaces,",
    highlight: "Peak Productivity",
    text: "From corporate offices to retail spaces, we keep your business environment pristine and professional. Clean spaces, happy teams.",
  },
  {
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    tag: "Commercial Deep Cleaning",
    title: "Beyond Surface Clean,",
    highlight: "Total Sanitization",
    text: "Hospital-grade disinfection and deep cleaning for high-traffic commercial spaces, ensuring a healthy environment for everyone.",
  },
  {
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    tag: "Event & Post-Construction",
    title: "New Spaces,",
    highlight: "Move-In Ready",
    text: "Specialized post-construction and event cleanup that removes all dust, debris, and residue, leaving your space ready for use.",
  },
]

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroCarousel />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold-500 font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
              <h2 className="section-title mt-3">Nothing Is More Important</h2>
              <p className="section-subtitle">We prioritize the following to ensure your complete satisfaction.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Sparkling Clean", desc: "We keep your home sparkling clean and germ free. Our disinfecting process kills 99% of common bacteria.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Insured & Bonded", desc: "Our cleaners are fully insured and bonded so no need to worry about your home or office.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { title: "Leading Technology", desc: "We use hospital-grade disinfectants, HEPA filtrations and microfiber cloths to reduce cross contamination.", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
              { title: "Reliable Crews", desc: "Our reliable and stable crews understand your specific cleaning service needs.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
            ].map((item, i) => (
              <ScrollReveal key={i}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold-500 font-semibold text-sm uppercase tracking-widest">Our Services</span>
              <h2 className="section-title mt-3">Professional Cleaning Solutions</h2>
              <p className="section-subtitle">Do you wish you had more free time? We can make it happen!</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.id}>
                <div className="group card card-hover overflow-hidden">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-10 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gold-500 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} /></svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">{service.description}</p>
                    <Link to="/booking" className="text-gold-600 font-semibold text-sm hover:text-gold-700 transition-colors inline-flex items-center gap-1">
                      Book Now
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-gold-500 font-semibold text-sm uppercase tracking-widest">About Our Company</span>
              <h2 className="section-title mt-3 mb-8">Exceptional Level of Cleaning Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <p className="text-gray-500 leading-relaxed">
                  Founded with a commitment to excellence, Momar Group LLC has built a reputation as one of the leading providers of residential and commercial cleaning solutions in North Richland Hills, TX. Our continuous pursuit for perfection has resulted in consistent growth.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  Our focus is to listen to our clients, understand their needs, and provide the exceptional level of cleaning service. Our professional team uses eco-friendly products and advanced techniques to ensure your space is not just clean, but truly spotless.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gold-600 to-gold-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "500+", label: "Happy Customers" },
              { num: "1K+", label: "Projects Completed" },
              { num: "6", label: "Service Categories" },
              { num: "100%", label: "Satisfaction Rate" },
            ].map((stat, i) => (
              <ScrollReveal key={i}>
                <div>
                  <p className="text-3xl lg:text-4xl font-bold text-white">{stat.num}</p>
                  <p className="text-gold-200 text-sm mt-2">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold-500 font-semibold text-sm uppercase tracking-widest">Testimonials</span>
              <h2 className="section-title mt-3">What Our Clients Say</h2>
              <p className="section-subtitle">Don't just take our word for it - hear from our satisfied customers.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.id}>
                <div className="card p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className={`text-lg ${j < t.rating ? 'text-gold-400' : 'text-gray-200'}`}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">"{t.content}"</p>
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-gold-700 font-bold">{t.name[0]}</span>
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/testimonials" className="btn-secondary">View All Reviews</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready for a Spotless Space?</h2>
            <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
              Get your free quote today and experience the Momar Group difference. We'll make your space shine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="bg-white text-gold-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all text-lg">Get Your Free Quote</Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur text-white font-semibold py-3 px-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all text-lg">Contact Us</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}

function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent(i => (i + 1) % heroSlides.length)
  }, [])

  const goTo = useCallback((i) => {
    setCurrent(i)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative text-white overflow-hidden min-h-[500px] lg:min-h-[600px]">
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img src={slide.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60" />
        </div>
      ))}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
        <div className="max-w-2xl min-h-[280px]">
          <div key={current} className="animate-fade-in-up">
            <span className="inline-block bg-gold-500/15 text-gold-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              {heroSlides[current].tag}
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {heroSlides[current].title}<br />
              <span className="text-gold-400">{heroSlides[current].highlight}</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              {heroSlides[current].text}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking" className="btn-primary text-center text-lg">Get a Free Quote</Link>
              <Link to="/services" className="bg-white/10 backdrop-blur text-white font-semibold py-3 px-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all text-center text-lg">Our Services</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-gold-400 w-6' : 'bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </section>
  )
}
