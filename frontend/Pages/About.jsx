import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function About() {
  const features = [
    {
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "Experienced Professionals",
      desc: "Our team has years of experience and ongoing training in professional cleaning techniques and safety protocols."
    },
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Satisfaction Guaranteed",
      desc: "We're not satisfied until you're completely happy with our work. We'll come back to fix any areas of concern."
    },
    {
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Eco-Friendly Products",
      desc: "We use safe, environmentally friendly cleaning products that are gentle on your family and pets."
    },
    {
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      title: "Fully Insured & Bonded",
      desc: "Your peace of mind matters. We are fully insured and bonded, and all our cleaners undergo background checks."
    },
    {
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      title: "Cutting-Edge Equipment",
      desc: "We invest in the latest cleaning technology including HEPA filtration and hospital-grade disinfectants."
    },
    {
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
      title: "Local & Trusted",
      desc: "Proudly serving North Richland Hills and surrounding areas. We're your neighbors, committed to our community."
    }
  ]

  return (
    <>
      <Navbar />
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-gray-800/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold-400 font-semibold text-sm uppercase tracking-widest">About Us</span>
          <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-4">About Momar Group LLC</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Learn about our story, values, and commitment to excellence.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <ScrollReveal animation="scroll-animate-left">
              <div>
                <span className="text-gold-500 font-semibold text-sm uppercase tracking-widest">Our Story</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-6">Exceptional Level of Cleaning Services</h2>
                <p className="text-gray-500 mb-4 leading-relaxed">
                  Founded with a commitment to excellence, Momar Group LLC has built a reputation as one of the leading providers of residential and commercial cleaning solutions in North Richland Hills, TX, and surrounding areas.
                </p>
                <p className="text-gray-500 mb-4 leading-relaxed">
                  Our continuous pursuit for perfection has resulted in consistent growth each year. Our focus is to listen to our clients, understand their needs, and provide the exceptional level of residential and commercial cleaning service they deserve.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  Our professional team uses eco-friendly products and advanced techniques to ensure your space is not just clean, but truly spotless. We treat every space with the care and attention it deserves.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="scroll-animate-right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1600880706871-5e3b218bab05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our Team" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gold-500 rounded-2xl p-5 shadow-lg hidden lg:block">
                  <p className="text-white text-2xl font-bold">10+</p>
                  <p className="text-gold-100 text-sm">Years Experience</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="text-center mb-16">
            <ScrollReveal>
              <span className="text-gold-500 font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-3">What Sets Us Apart</h3>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">We go above and beyond to deliver exceptional cleaning services you can count on.</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <ScrollReveal key={i}>
                <div className="card card-hover p-8 text-center h-full">
                  <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} /></svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">Ready to Experience the Difference?</h2>
            <Link to="/booking" className="inline-flex items-center gap-2 bg-white text-gold-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all">
              Book Your Service Today
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
