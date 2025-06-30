'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [openPackages, setOpenPackages] = useState(false);
  

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <Link href="/">
            <Image src ="/images/logo.png" alt ="Faz Travels Logo" width = {120} height  ={60}/>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>

            <li className="relative">
  <button
    className="flex items-center gap-1 hover:text-orange-500"
    onClick={() => setOpenPackages(!openPackages)}
  >
    Packages <ChevronDown size={16} />
  </button>

  {openPackages && (
    <div className="absolute bg-white shadow-lg mt-2 rounded-md w-64 text-sm text-gray-800 z-50 p-3 space-y-3">
      {/* Hajj Submenu */}
      <div>
      <Link href="/packages/hajj/" className="block hover:text-orange-500"><p className="font-semibold text-gray-900">Hajj Packages</p></Link>
      </div>

      {/* Umrah Submenu */}
      <div>
      <Link href="/packages/umrah/" className="block hover:text-orange-500"><p className="font-semibold text-gray-900">Umrah Packages</p></Link>
      </div>
    </div>
  )}
</li>


            <li><Link href="/contact">Contact</Link></li>
            <li>
              <Link
                href="/apply"
                className="bg-[#dc4141] text-white px-4 py-2 rounded hover:bg-[#dc4120] transition"
              >
                Apply Now
              </Link>
            </li>
          </ul>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button onClick={() => setOpenPackages(!openPackages)}>
              {openPackages ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {openPackages && (
          <div className="md:hidden mt-2 space-y-3 pb-4">
            <Link href="/" className="block">Home</Link>
            <Link href="/about" className="block">About Us</Link>
            <Link href="/packages/hajj/" className="block">Hajj Packages</Link>
            <Link href="/packages/umrah/" className="block">Umrah Packages</Link>
            <Link href="/contact" className="block">Contact</Link>
            <Link
              href="/apply"
              className="block bg-[#dc4141] text-white text-center py-2 rounded"
            >
              Apply Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}


//