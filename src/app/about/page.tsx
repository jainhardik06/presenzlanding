'use client'

import { useState } from 'react'

type IconProps = {
  className?: string
}

function SearchIcon({ className = 'size-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  )
}

function ChevronDownIcon({ className = 'size-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

function MenuIcon({ className = 'size-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  )
}

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
]

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 w-full"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(43, 77, 255, 0.1) 0%, rgba(163, 177, 255, 0.1) 31.988%, rgba(255, 255, 255, 0.1) 56.731%, rgba(43, 77, 255, 0.1) 95.192%)',
        }}
      >
        <div className="backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <img src="/logo.png" alt="logo" />
              </div>
              <span className="font-semibold text-base sm:text-lg text-slate-900">
                Presence
              </span>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex gap-8 items-center flex-1 justify-center">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={
                    item.label === 'Home'
                      ? 'text-slate-900 text-sm font-semibold'
                      : 'text-slate-800 text-sm font-medium hover:text-slate-900 transition'
                  }
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right side controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button className="p-2 rounded-full hover:bg-white/60 transition" aria-label="Search">
                <SearchIcon className="size-5 text-slate-900" />
              </button>
              <button className="hidden sm:flex items-center gap-1 text-slate-800 text-sm font-medium hover:text-slate-900 transition">
                En
                <ChevronDownIcon className="size-4" />
              </button>
              
              <button className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition">
                Get App
              </button>
              <button
                className="md:hidden p-2 rounded-full hover:bg-white/60 transition"
                aria-label="Open menu"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                <MenuIcon className="size-5 text-slate-900" />
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-white/50 bg-white/80 backdrop-blur-md">
              <div className="px-4 py-3 flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-slate-900 text-sm font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-1 text-slate-800 text-sm font-medium">
                    En
                    <ChevronDownIcon className="size-4" />
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition">
                    Get App
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full">
        {/* Title Section */}
        <section className="pt-24  px-4 sm:px-6 lg:px-8">
          <div className=" mx-auto text-center">
            <h1 className="text-6xl sm:text-7xl font-extrabold mb-8" style={{ color: '#001DB5' }}>
              About Presenz.
            </h1>
          </div>
        </section>

        {/* Section 1: Presenz is not social media */}
        <section className="w-full py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/about/bg1.png)',
              opacity: 0.9
            }}
          />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 text-center mb-8">
              Presenz is not social media.
            </h2>
            <div className="space-y-4">
              <p className="text-2xl sm:text-3xl font-semibold " style={{color:'#001066'}}>
                Presenz is a system for noticing culture as it happens
                <br />
                in places, moments, and atmospheres.
              </p>
              <p className="text-xl sm:text-2xl font-semibold pt-6 space-y-2" style={{color:'#001066'}}>
                <span className="block">It does not ask people to perform.</span>
                <span className="block">It does not reward attention.</span>
                <span className="block">It does not turn presence into content.</span>
              </p>
              <p className="text-xl sm:text-2xl font-semibold pt-6 space-y-2" style={{color:'#001066'}}>
                <span className="block">It exists to sense what is real,</span>
                <span className="block">while it is still real.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Our belief */}
        <section className="w-full py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{
          background: 'linear-gradient(135deg, rgba(245, 240, 255, 0.8) 0%, rgba(255, 250, 240, 0.8) 100%)'
        }}>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/about/ov1.png)',
              opacity: 0.9
            }}
          />
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-12">
              Our belief
            </h2>
            <div className="text-center space-y-4">
              <p className="text-2xl sm:text-3xl font-semibold " style={{color:'#001066'}}>
                Culture doesn't need permission.
              </p>
              
              <div className="pt-6 space-y-2">
                <p className="text-xl sm:text-2xl font-semibold space-y-2" style={{color:'#001066'}}>It happens in streets.</p>
                <p className="text-xl sm:text-2xl font-semibold space-y-2" style={{color:'#001066'}}>In sound.</p>
                <p className="text-xl sm:text-2xl font-semibold space-y-2" style={{color:'#001066'}}>In walls.</p>
                <p className="text-xl sm:text-2xl font-semibold space-y-2" style={{color:'#001066'}}>In moments that pass before anyone names them.</p>
              </div>
              
              <div className="pt-8 space-y-2">
                <p className="text-xl sm:text-2xl font-semibold space-y-2" style={{color:'#001066'}}>Culture is not content.</p>
                <p className="text-xl sm:text-2xl font-semibold space-y-2" style={{color:'#001066'}}>It is PRESENZ.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Three columns */}
        <section className="w-full py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{
          background: 'linear-gradient(135deg, rgba(240, 235, 255, 0.7) 0%, rgba(255, 245, 240, 0.7) 100%)'
        }}>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/about/ov2.png)',
              opacity: 0.9
            }}
          />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
              {/* Column 1 */}
              <div className="rounded-3xl p-8 flex flex-col items-start justify-center" style={{
                background: 'linear-gradient(135deg, rgba(220, 230, 255, 0.9) 0%, rgba(230, 240, 255, 0.9) 100%)',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 className="text-3xl font-semibold text-left mb-3" style={{ color: '#03207C' }}>No performance.</h3>
                <p className="text-3xl font-semibold text-left mb-3" style={{ color: '#03207C' }}>No followers.</p>
                <p className="text-3xl font-semibold text-left mb-3" style={{ color: '#03207C' }}>No pressure.</p>
              </div>

              {/* Column 2 */}
              <div className="rounded-3xl p-8 flex flex-col items-start justify-center" style={{
                background: 'linear-gradient(135deg, rgba(220, 230, 255, 0.9) 0%, rgba(230, 240, 255, 0.9) 100%)',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 className="text-3xl font-semibold text-left mb-3" style={{ color: '#03207C' }}>No feeds.</h3>
                <p className="text-3xl font-semibold text-left mb-3" style={{ color: '#03207C' }}>No rankings.</p>
                <p className="text-3xl font-semibold text-left mb-3" style={{ color: '#03207C' }}>No validation loops.</p>
              </div>

              {/* Column 3 */}
              <div className="rounded-3xl p-8 flex flex-col items-start justify-center" style={{
                background: 'linear-gradient(135deg, rgba(220, 230, 255, 0.9) 0%, rgba(230, 240, 255, 0.9) 100%)',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 className="text-3xl font-semibold text-left mb-3 " style={{ color: '#03207C' }}>Nothing to win.</h3>
                <p className="text-3xl font-semibold text-left mb-3" style={{ color: '#03207C' }}>Nothing to compare.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Places are alive */}
        <section className="w-full py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/about/bg3.png)',
              opacity: 0.9
            }}
          />
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-12">
              Places are alive.
            </h2>
            <div className="text-center space-y-4">
              <p className="text-2xl sm:text-3xl font-semibold " style={{color:'#001066'}}>Places carry memory.</p>
              
              <div className="pt-6 space-y-2">
                <p className="text-xl sm:text-2xl font-semibold space-y-2" style={{color:'#001066'}}>Echoes of music.</p>
                <p className="text-xl sm:text-2xl font-semibold space-y-2" style={{color:'#001066'}}>Traces of paint.</p>
                <p className="text-xl sm:text-2xl font-semibold space-y-2" style={{color:'#001066'}}>Signs of people gathering, leaving, returning.</p>
              </div>
              
              <div className="pt-8 space-y-2">
                <p className="text-xl sm:text-2xl font-semibold space-y-2" style={{color:'#001066'}}>Presenz allows places to speak</p>
                <p className="text-xl sm:text-2xl font-semibold space-y-2" style={{color:'#001066'}}>without being ranked, reviewed, or judged.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Final CTA */}
        <section className="w-full py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{
          background: 'linear-gradient(135deg, rgba(245, 240, 255, 0.6) 0%, rgba(255, 250, 245, 0.6) 100%)'
        }}>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/about/ov3.png)',
              opacity: 0.9
            }}
          />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="space-y-8 mb-12">
              <div className="">
                <p className="text-2xl sm:text-3xl font-bold" style={{ color: '#001066' }}>You don't post.</p>
                <p className="text-2xl sm:text-3xl font-bold" style={{ color: '#001066' }}>You notice.</p>
              </div>
              
              <div className="">
                <p className="text-2xl sm:text-3xl font-bold" style={{ color: '#001066' }}>You don't scroll.</p>
                <p className="text-2xl sm:text-3xl font-bold" style={{ color: '#001066' }}>You sense.</p>
              </div>
              
              <div className="">
                <p className="text-2xl sm:text-3xl font-bold" style={{ color: '#001066' }}>You don't perform.</p>
                <p className="text-2xl sm:text-3xl font-bold" style={{ color: '#001066' }}>You are present.</p>
              </div>
            </div>

            <button className="text-white px-12 py-4 rounded-xl text-xl font-bold hover:opacity-90 transition-opacity" style={{
              background: '#2563eb'
            }}>
              Get App
            </button>
            </div>
        </section>
        
            {/* App Store buttons */}
            <div className="flex justify-center gap-8 mb-16">
              <a href="#" className="inline-block">
                <img src="/play.png" alt="Google Play" className="h-16" />
              </a>
              <a href="#" className="inline-block">
                <img src="/appstore.png" alt="App Store" className="h-16" />
              </a>
            </div>
          
        

        {/* Footer */}
        <footer className="w-full bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-pink-50/20">
      {/* Top navigation bar */}
      <div className="border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Presenz logo" className="h-24 w-auto" />
          </div>

          {/* Navigation links */}
          <nav className="hidden sm:flex gap-8">
            <a href="/" className="text-base font-semibold" style={{ color: '#1e3a8a' }} >
              Home
            </a>
            <a href="/about" className="text-base font-semibold" style={{ color: '#1e3a8a' }} >
              About
            </a>
            <a href="#" className="text-base font-semibold" style={{ color: '#1e3a8a' }} >
              Download app
            </a>
          </nav>
        </div>
      </div>

      {/* Bottom info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
          {/* Left side - Copyright and links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            <p className="text-sm font-semibold text-gray-700">© 2026 Presenz . All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition">
                Terms of Service
              </a>
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Right side - Social icons */}
          <div className="flex gap-6">
            <a href="#" className="w-6 h-6 transition" style={{ color: '#001066' }} title="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12-5.37-12-12-12zm3 8h-1.35c-.41 0-.48.27-.48.68v.89h1.9l-.29 1.83h-1.61v5.6h-1.88v-5.6H9.5v-1.83h1.44v-1.02c0-1.44.88-2.23 2.17-2.23.62 0 1.15.05 1.3.07v1.5h-.89z"/>
              </svg>
            </a>
            <a href="#" className="w-6 h-6 transition" style={{ color: '#001066' }} title="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="w-6 h-6 transition" style={{ color: '#001066' }} title="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37"></path>
                <circle cx="17.5" cy="6.5" r="1.5"></circle>
              </svg>
            </a>
            <a href="#" className="w-6 h-6 transition" style={{ color: '#001066' }} title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.643h3.554v1.364c.429-.659 1.191-1.594 2.897-1.594 2.117 0 3.704 1.385 3.704 4.362v5.511zM5.337 9.432c-1.144 0-1.915-.758-1.915-1.707 0-.968.771-1.71 1.951-1.71 1.18 0 1.914.742 1.939 1.71 0 .949-.759 1.707-1.975 1.707zm1.946 11.02h-3.89V9.809h3.89v10.643zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
      </main>
    </div>
  )
}
