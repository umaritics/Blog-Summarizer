// src/components/Navbar.tsx

'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black text-white px-8 py-4 flex justify-between items-center border-b border-white/10">
      {/* Logo / Website Name */}
      <div className="text-4xl font-bebas tracking-wide uppercase">
        <Link href="#top">Concisio</Link>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8 text-xl font-medium">
        <a href="#top" className="hover:text-gray-400 transition-all duration-200">
          Home
        </a>
        <a href="/api/Summarize" className="hover:text-gray-400 transition-all duration-200">
          Summarizer
        </a>
        <a href="#famous-blogs" className="hover:text-gray-400 transition-all duration-200">
          Famous Blogs
        </a>
        <a href="#about" className="hover:text-gray-400 transition-all duration-200">
          About Us
        </a>
      </div>
    </nav>
  )
}
