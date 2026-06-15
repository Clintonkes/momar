import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    { id: 1, title: "Residential Cleaning", description: "Complete home cleaning including dusting, vacuuming, mopping, and sanitizing all surfaces. Our team ensures every room is spotless.", icon: "🏠", image: "https://images.unsplash.com/photo-1581578017442-73e757bfcf4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 2, title: "Commercial Cleaning", description: "Professional office cleaning, desk sanitization, floor care, and common area maintenance for businesses of all sizes.", icon: "🏢", image: "https://images.unsplash.com/photo-1497366811353-68707a6b0a89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 3, title: "Deep Cleaning", description: "Thorough deep clean of neglected areas, appliances, baseboards, and hard-to-reach spots. Perfect for seasonal cleaning.", icon: "✨", image: "https://images.unsplash.com/photo-1558487704-ec5c8c4e0f4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 4, title: "Move In/Out Service", description: "Comprehensive cleaning for property transitions. We'll leave the place you're leaving looking better than when you moved in.", icon: "📦", image: "https://images.unsplash.com/photo-1581852127542-5e31f019e308?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 5, title: "Post-Construction", description: "Specialized cleanup after renovations and construction projects. Get rid of dust, debris, and construction residue.", icon: "🔨", image: "https://images.unsplash.com/photo-1504307651252-ba86586c065f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 6, title: "Recurring Maintenance", description: "Scheduled weekly, bi-weekly, or monthly cleaning services to keep your space consistently clean and fresh.", icon: "📅", image: "https://images.unsplash.com/photo-1584622562717-5a4249a1f6e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
  ]

  return (
    <>
      <Navbar />
      <section className="relative bg-gray-900 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558487704-ec5c8c4e0f4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest">Our Services</span>
          <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-4">Professional Cleaning Solutions</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive cleaning solutions tailored to your specific needs.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group card card-hover overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <Link to="/booking" className="btn-primary text-sm inline-block">Book Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-brand-100 mb-8">Contact us and we'll help you find the perfect cleaning solution.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-brand-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all">
            Contact Us
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
