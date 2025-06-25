import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaEnvelopeOpen } from 'react-icons/fa'
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaTelegram, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#215c42] text-white pt-10 px-4 md:px-16 lg:px-24">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/20">
        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick link</h2>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Packages</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-white text-xl">
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaTelegram className="hover:text-gray-300 cursor-pointer" />
            <FaWhatsapp className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

        {/* Feedback */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Feedback</h2>
          <FaEnvelopeOpen className="mt-1" />
          <FaEnvelopeOpen className="mt-1" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white mt-6 py-6">
        {/* Phone */}
        <div className="flex items-start space-x-2">
          <FaPhone className="mt-1" />
          <div>
            <p>+2348035047639</p>
            <p>07042806406</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-2">
        <FaEnvelope className="mt-1" />
          <div>
          
            <p>E-mail Us</p>
            
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start space-x-2">
          <FaMapMarkerAlt className="mt-1" />
          <p>
            Block 7, Plot 15 Aare Musulumi Ganiyu Alaka Street, <br />
            Lekki Scheme 2, Ajah Lagos State.
          </p>
        </div>
      </div>
    </footer>
  )
}
