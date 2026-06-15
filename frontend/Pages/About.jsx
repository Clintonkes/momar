import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <Navbar />
      <section className="relative bg-gray-900 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880706871-5e3b218bab05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest">About Us</span>
          <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-4">About Momar Group LLC</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Learn about our story, values, and commitment to excellence.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">Our Story</span>
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
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1600880706871-5e3b218bab05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our Team" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-500 rounded-2xl p-5 shadow-lg hidden lg:block">
                <p className="text-white text-2xl font-bold">10+</p>
                <p className="text-brand-100 text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-16">
            <div className="text-center mb-14">
              <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-3">What Sets Us Apart</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-3">Experienced Professionals</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Our team has years of experience and ongoing training in professional cleaning techniques and safety protocols.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-3">Satisfaction Guaranteed</h4>
                <p className="text-gray-500 text-sm leading-relaxed">We're not satisfied until you're completely happy with our work. We'll come back to fix any areas of concern.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-3">Eco-Friendly Products</h4>
                <p className="text-gray-500 text-sm leading-relaxed">We use safe, environmentally friendly cleaning products that are gentle on your family and pets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">Ready to Experience the Difference?</h2>
          <Link to="/booking" className="inline-flex items-center gap-2 bg-white text-brand-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all">
            Book Your Service Today
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
