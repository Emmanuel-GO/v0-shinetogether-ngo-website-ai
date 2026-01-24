'use client'

import { useState } from "react"

import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { Menu, X, LogIn } from 'lucide-react'
import { LoginModal } from './login-modal'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check if user is authenticated on mount
  useEffect(() => {
    const authStatus = localStorage.getItem('admin_authenticated')
    setIsAuthenticated(authStatus === 'true')
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/programs', label: 'Programs' },
    { href: '/giveaways', label: 'Giveaways' },
    { href: '/success-stories', label: 'Success Stories' },
    { href: '/contact', label: 'Contact' },
  ]

  const handleLoginSuccess = () => {
    setIsAuthenticated(true)
    setShowLogin(false)
    setMobileMenuOpen(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated')
    setIsAuthenticated(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image 
              src="/logo.png" 
              alt="SHINETOGETHER" 
              width={40} 
              height={40}
              className="w-10 h-10"
            />
            <span className="font-bold text-lg md:text-xl text-foreground">SHINETOGETHER</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            {/* Admin Login Button or Dashboard Link */}
            {isAuthenticated ? (
              <>
                <Link
                  href="/admin"
                  className="text-sm font-medium text-foreground relative group"
                >
                  Admin Dashboard
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 group-hover:w-full transition-all duration-300" />
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 text-white bg-red-500 hover:bg-red-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="ml-4 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 text-white bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                Admin
              </button>
            )}
          </div>



          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setShowLogin(true)}
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="Admin login"
            >
              <LogIn className="w-5 h-5 text-foreground" />
            </button>
            <button
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border bg-white/50 backdrop-blur-sm">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 mx-2 text-sm font-medium text-foreground relative group transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-4 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 group-hover:w-[calc(100%-1rem)] transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Login Modal */}
      {showLogin && <LoginModal onSuccess={handleLoginSuccess} />}
    </nav>
  )
}
