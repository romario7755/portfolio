"use client"


import Link from "next/link"
import { useState } from "react"

export default function Header() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-white font-bold text-xl">TASS</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DEV
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Accueil
            </Link>
            <Link href="#apropos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              A propos 
            </Link>
            <Link href="#experience" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Mes expériences
            </Link>
               <Link href="#certification" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
               Certification
            </Link> 
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            
              <>
                
                <Link 
                  href="#contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Me contacter
                </Link>
              </>
            
              
            
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/"onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Accueil
              </Link>
              <Link href="#apropos" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                A propos
              </Link>
              <Link href="#experience" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Mes expériences
              </Link>
              <Link href="#certification" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                 Certification
              </Link>
              
              <div className="border-t border-gray-200 pt-4">
                
                  
                    <Link 
                       href="#contact"
                       onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Me contacter
                    </Link>
                  </div>
                 
            </div>
          </div>
        )}
      </div>
    </header>
  )
}