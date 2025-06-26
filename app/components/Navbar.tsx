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
        <ul className="pl-3 mt-1 space-y-1">
          <li><Link href="/packages/hajj/vip" className="block hover:text-orange-500">VIP</Link></li>
          <li><Link href="/packages/hajj/basic" className="block hover:text-orange-500">Basic</Link></li>
          <li><Link href="/packages/hajj/private" className="block hover:text-orange-500">Private</Link></li>
        </ul>
      </div>

      {/* Umrah Submenu */}
      <div>
      <Link href="/packages/umrah/" className="block hover:text-orange-500"><p className="font-semibold text-gray-900">Umrah Packages</p></Link>
        <ul className="pl-3 mt-1 space-y-1">
          <li><Link href="/packages/umrah/budget" className="block hover:text-orange-500">Budget</Link></li>
          <li><Link href="/packages/umrah/premium" className="block hover:text-orange-500">Premium</Link></li>
          <li><Link href="/packages/umrah/group" className="block hover:text-orange-500">Group</Link></li>
        </ul>
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

            {/* Mobile Hajj Dropdown */}
            <details className="px-2">
              <summary className="font-semibold cursor-pointer">Hajj Packages</summary>
              <ul className="pl-4 space-y-1 mt-1 text-sm">
                <li><Link href="/packages/hajj/vip">VIP Package</Link></li>
                <li><Link href="/packages/hajj/basic">Basic Package</Link></li>
                <li><Link href="/packages/hajj/private">Private Package</Link></li>
                <li><Link href="/packages/hajj/economy">Economy Package</Link></li>
              </ul>
            </details>

            {/* Mobile Umrah Dropdown */}
            <details className="px-2">
              <summary className="font-semibold cursor-pointer">Umrah Packages</summary>
              <ul className="pl-4 space-y-1 mt-1 text-sm">
                <li><Link href="/packages/umrah/budget">Budget Umrah</Link></li>
                <li><Link href="/packages/umrah/premium">Premium Umrah</Link></li>
                <li><Link href="/packages/umrah/family">Family Umrah</Link></li>
              </ul>
            </details>

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