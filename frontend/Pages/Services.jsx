import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

const services = [
  { id: 1, title: "Residential Cleaning", description: "Complete home cleaning including dusting, vacuuming, mopping, and sanitizing all surfaces. Our team ensures every room is spotless.", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { id: 2, title: "Commercial Cleaning", description: "Professional office cleaning, desk sanitization, floor care, and common area maintenance for businesses of all sizes.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { id: 3, title: "Deep Cleaning", description: "Thorough deep clean of neglected areas, appliances, baseboards, and hard-to-reach spots. Perfect for seasonal cleaning.", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" },
  { id: 4, title: "Move In/Out Service", description: "Comprehensive cleaning for property transitions. We'll leave the place looking better than when you moved in.", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  { id: 5, title: "Post-Construction", description: "Specialized cleanup after renovations and construction projects. Get rid of dust, debris, and construction residue.", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0 0 0 0 0 0 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  { id: 6, title: "Recurring Maintenance", description: "Scheduled weekly, bi-weekly, or monthly cleaning services to keep your space consistently clean and fresh.", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }
]

export default function Services() {
  return (
    <>
      <Navbar />
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-28">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold-400 font-semibold text-sm uppercase tracking-widest">Our Services</span>
          <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-4">Professional Cleaning Solutions</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive cleaning solutions tailored to your specific needs.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.id}>
                <div className="group card card-hover overflow-hidden">
                  <div className="bg-gradient-to-br from-white to-gray-50 p-10 flex items-center justify-center border-b border-gray-100">
                    <svg className="w-16 h-16 text-gold-500 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} /></svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">{service.description}</p>
                    <Link to="/booking" className="btn-primary text-sm inline-block">Book Now</Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
            <p className="text-gold-100 mb-8">Contact us and we'll help you find the perfect cleaning solution.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-gold-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all">
              Contact Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
