'use client'

import { useEffect, useState } from 'react'
import QRCode from 'qrcode'

export function ActiveProgram() {
  const [qrCode, setQrCode] = useState<string>('')

  useEffect(() => {
    QRCode.toDataURL('https://forms.gle/5zbHRaKDZMFiudTQ7', {
      width: 250,
      margin: 2,
      color: {
        dark: '#2563eb',
        light: '#f0f9ff'
      }
    }).then(url => {
      setQrCode(url)
    }).catch(err => {
      console.error('QR Code generation error:', err)
    })
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <div>
              <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
                Current Program
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Skill <span className="text-primary">Acquisition</span>
              </h2>
              <p className="text-xl text-foreground/70">
                Empowering individuals with practical skills and professional training to achieve financial independence and success.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Hands-On Training</h3>
                  <p className="text-foreground/70">Practical skills in various trades and professions</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-2.96-3.83-1.3 1.48 4.24 5.25 4.08-5.25-1.31-1.19z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Career Support</h3>
                  <p className="text-foreground/70">Job placement and mentorship assistance</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Business Incubation</h3>
                  <p className="text-foreground/70">Start your own business with our support</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-border">
              <p className="text-foreground mb-4 font-semibold">Ready to register?</p>
              <a href="https://forms.gle/5zbHRaKDZMFiudTQ7" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg">
                Register Now
              </a>
            </div>
          </div>

          {/* Right - QR Code */}
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
              <p className="text-center text-foreground font-semibold mb-4">Scan to Register</p>
              {qrCode && (
                <img src={qrCode || "/placeholder.svg"} alt="Registration QR Code" className="w-64 h-64 mx-auto mb-4" />
              )}
              <p className="text-center text-foreground/60 text-sm mt-4 max-w-xs">
                Use your phone camera to scan this QR code and register for the Skill Acquisition program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
