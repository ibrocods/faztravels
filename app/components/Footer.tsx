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
            <a href = "https://facebook.com/faztravels" target= "_blank" rel = "noopener noreferrer" aria-lebel="Facebook">
            <FaFacebookF className="hover:text-orange-300 cursor-pointer" /></a>
            <a href = "https://twitter.com/faztravels" target= "_blank" rel = "noopener noreferrer" aria-lebel="Twitter">
            <FaTwitter className="hover:text-orange-300 cursor-pointer" /></a>
            <a href = "https://instagram.com/faztravels" target= "_blank" rel = "noopener noreferrer" aria-lebel="Instagram">
            <FaInstagram className="hover:text-orange-300 cursor-pointer" /></a>
            <a href = "https://Telegram.com/faztravels" target= "_blank" rel = "noopener noreferrer" aria-lebel="Telegram">
            <FaTelegram className="hover:text-orange-300 cursor-pointer" /></a>
            <a href = "https://wa.me/2348035047639" target= "_blank" rel = "noopener noreferrer" aria-lebel="WhatsApp">
            <FaWhatsapp className="hover:text-orange-300 cursor-pointer" /></a>
            <a href = "https://linkedin.com/faztravels" target= "_blank" rel = "noopener noreferrer" aria-lebel="Linked In">
            <FaLinkedinIn className="hover:text-orange-300 cursor-pointer" /></a>
            
          </div>
        </div>

        {/* Feedback */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Feedback</h2>
          <a href = "mailto:info@faztravels.com" target= "_blank" rel = "noopener noreferrer" aria-lebel="Email">
          <FaEnvelopeOpen className="mt-1" />
          <FaEnvelopeOpen className="mt-1" /></a>
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
          <a href = "mailto:info@faztravels.com" target= "_blank" rel = "noopener noreferrer" aria-lebel="Email">
        <FaEnvelope className="mt-1" />
          <div>
          
            <p>E-mail Us</p>
            
          </div>
          </a>
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
