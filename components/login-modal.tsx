'use client'

import React from "react"

import { useState } from 'react'
import { Lock, Mail, AlertCircle, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export function LoginModal({ onSuccess }: { onSuccess: () => void }) {
  const [step, setStep] = useState<'email' | 'password'>('email')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const CORRECT_EMAIL = 'letshinetogetherforever@gmail.com'
  const CORRECT_PASSWORD = 'Mikayoshine2025'

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (email === CORRECT_EMAIL) {
        setStep('password')
        setLoading(false)
      } else {
        setError('Email not authorized. Please try again.')
        setLoading(false)
      }
    }, 500)
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (password === CORRECT_PASSWORD) {
        setLoading(false)
        // Store auth token in localStorage
        localStorage.setItem('admin_authenticated', 'true')
        onSuccess()
      } else {
        setError('Incorrect password. Please try again.')
        setLoading(false)
      }
    }, 500)
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-8 rounded-t-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Image 
              src="/logo.png" 
              alt="SHINETOGETHER" 
              width={40} 
              height={40}
              className="w-10 h-10"
            />
            <h1 className="text-2xl font-bold">SHINETOGETHER</h1>
          </div>
          <p className="text-white/90 text-sm">Admin Access Portal</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {step === 'email' ? (
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Admin Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setError('')
                    }}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    disabled={loading}
                  />
                </div>
              </div>

              {error && (
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !email}
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Verifying...
                  </>
                ) : (
                  'Continue'
                )}
              </button>

              <p className="text-xs text-foreground/50 text-center">
                Only authorized administrators can access this portal
              </p>
            </form>
          ) : (
            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-sm font-semibold text-foreground">
                    Password
                  </label>
                  <span className="text-xs text-foreground/60">{email}</span>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      setError('')
                    }}
                    placeholder="Enter password"
                    className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    disabled={loading}
                    autoFocus
                  />
                </div>
              </div>

              {error && (
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !password}
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Authenticating...
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5" />
                    Sign In
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setStep('email')
                  setPassword('')
                  setError('')
                }}
                className="w-full py-2 text-primary hover:bg-primary/5 rounded-lg font-medium transition-all"
              >
                Back
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
