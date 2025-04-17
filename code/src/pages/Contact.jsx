
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 px-4 py-12">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl p-8 border-2 border-primary flex flex-col md:flex-row gap-10">
        {/* Info Section */}
        <div className="flex-1 flex flex-col justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center md:text-left">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-6 text-center md:text-left">Have questions or need assistance? Reach out to our team and we’ll get back to you promptly.</p>
            <ul className="space-y-3 text-base text-gray-700">
              <li className="flex items-center gap-2"><FaEnvelope className="text-secondary" /> <span className="font-semibold">Email:</span> support@financelend.com</li>
              <li className="flex items-center gap-2"><FaPhone className="text-secondary" /> <span className="font-semibold">Phone:</span> +91 98765 43210</li>
              <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-secondary" /> <span className="font-semibold">Office:</span> 123 Finance Street, Mumbai, India</li>
              <li className="flex items-center gap-2"><FaClock className="text-secondary" /> <span className="font-semibold">Hours:</span> Mon-Fri 9:00am - 6:00pm</li>
            </ul>
          </div>
          <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&w=600&h=400&fit=crop" alt="Contact Illustration" className="w-full h-auto mt-6 rounded-lg shadow-md hidden md:block" />
        </div>
        {/* Form Section */}
        <div className="flex-1 flex flex-col justify-center">
          <form className="space-y-5">
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-primary" />
              <input type="text" placeholder="Your Name" className="input input-bordered w-full pl-10 py-3 rounded-lg focus:ring-2 focus:ring-primary" required />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-primary" />
              <input type="email" placeholder="Your Email" className="input input-bordered w-full pl-10 py-3 rounded-lg focus:ring-2 focus:ring-primary" required />
            </div>
            <div className="relative">
              <textarea placeholder="Your Message" className="textarea textarea-bordered w-full pl-10 pt-3 rounded-lg focus:ring-2 focus:ring-primary" rows={4} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full rounded-lg text-lg font-semibold shadow-md hover:scale-105 transition-transform">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact