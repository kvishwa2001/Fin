import React from 'react'

const About = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 px-4 py-12">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8 border-2 border-primary">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">About Us</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">We are dedicated to providing fast, secure, and flexible loan solutions to empower your financial journey. With years of experience in the finance industry, our mission is to make lending simple, transparent, and accessible for everyone.</p>
        <ul className="list-disc list-inside text-base text-gray-600 space-y-2">
          <li>Trusted by thousands of customers</li>
          <li>Transparent process with no hidden charges</li>
          <li>Expert support and guidance at every step</li>
        </ul>
        <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&w=600&h=400&fit=crop" alt="Teamwork Finance" className="w-full h-auto mt-6 rounded-lg" />
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-primary mb-2">Our Mission</h3>
          <p className="text-base text-gray-600">To empower individuals and businesses by providing accessible financial solutions that foster growth and innovation.</p>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-primary mb-2">Our Values</h3>
          <p className="text-base text-gray-600">Integrity, transparency, and customer-centricity are at the core of everything we do.</p>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-primary mb-2">Our Services</h3>
          <p className="text-base text-gray-600">We offer a range of financial products tailored to meet the diverse needs of our clients, from personal loans to business financing.</p>
        </div>
      </div>
    </div>
  )
}

export default About