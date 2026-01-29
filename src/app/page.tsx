'use client'

import { useState } from 'react'

// Image constants from Figma
const imgRectangle43301 = 'https://www.figma.com/api/mcp/asset/7691d037-e081-4b35-b5cf-8bb6836ea38d'
const img10 = 'https://www.figma.com/api/mcp/asset/b81db476-45ae-4080-aa92-acd42ba6b2af'
const img11 = 'https://www.figma.com/api/mcp/asset/e3541cd8-1856-4216-892b-71f5e4ac381b'
const imgRectangle43303 = 'https://www.figma.com/api/mcp/asset/7e1da179-7276-4268-a214-f0752e66ba9b'
const imgRectangle43304 = 'https://www.figma.com/api/mcp/asset/e9510b26-bd5a-43b2-8b15-37f115026447'
const imgRectangle43305 = 'https://www.figma.com/api/mcp/asset/dae97cad-598a-4f18-a7a6-5a6912711cdc'
const imgRectangle43306 = 'https://www.figma.com/api/mcp/asset/41910d75-5844-41d8-a7a4-8b54a42d6923'
const img19 = 'https://www.figma.com/api/mcp/asset/4b7e79d6-baa5-4684-8551-1844ab5e70db'
const img1 = 'https://www.figma.com/api/mcp/asset/a8ea93a9-f80e-4d11-acd7-10897a039e9e'
const img2 = 'https://www.figma.com/api/mcp/asset/d9c9aaf5-7ce0-453f-aa8e-fde0d37c055b'
const img3 = 'https://www.figma.com/api/mcp/asset/fce40891-4197-4037-95e4-458dd19b47d5'
const img6 = 'https://www.figma.com/api/mcp/asset/a594673a-6f31-4a63-8ec6-55f95e90061c'
const imgRectangle43307 = 'https://www.figma.com/api/mcp/asset/2c72babf-7bff-4d4a-a578-30cdaeb59ef1'
const img22 = 'https://www.figma.com/api/mcp/asset/ff42e234-0436-41cf-b756-235c8c3aab1c'
const img25 = 'https://www.figma.com/api/mcp/asset/15ad7862-18b7-4039-b977-7d31c137f6a9'
const img30 = 'https://www.figma.com/api/mcp/asset/989264cb-07fa-4f3f-b803-0f9e280bd177'
const img33 = 'https://www.figma.com/api/mcp/asset/af80ecbb-fcd8-401e-a94f-f2e23ba3ace9'
// The Experience section with all 5 iPhones
const imgExperiencePhones = 'https://www.figma.com/api/mcp/asset/af80ecbb-fcd8-401e-a94f-f2e23ba3ace9'

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

function LocationPin({ color, top, left, size = 'default' }: { color: string; top: string; left: string; size?: 'default' | 'small' | 'large' }) {
  const sizeClasses = {
    small: 'w-6 h-6',
    default: 'w-8 h-8',
    large: 'w-10 h-10'
  }
  
  return (
    <div 
      className={`absolute ${sizeClasses[size]} animate-bounce`}
      style={{ 
        top, 
        left,
        animationDuration: `${2 + Math.random()}s`,
        animationDelay: `${Math.random() * 2}s`
      }}
    >
      <svg viewBox="0 0 24 24" fill={color} className="w-full h-full drop-shadow-lg">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    </div>
  )
}

function Footer() {
  return (
    <footer
      className="w-full py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage:
          'linear-gradient(99.61710580599892deg, rgba(204, 235, 255, 0.25) 0.23963%, rgb(255, 255, 255) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 pb-8 border-b border-gray-300">
          <nav className="flex flex-wrap gap-4">
            <a href="#" className="text-sm font-medium text-gray-800 hover:opacity-70">Home</a>
            <a href="#" className="text-sm font-medium text-gray-800 hover:opacity-70">Services</a>
            <a href="#" className="text-sm font-medium text-gray-800 hover:opacity-70">Blog</a>
            <a href="#" className="text-sm font-medium text-gray-800 hover:opacity-70">Help Center</a>
            <a href="#" className="text-sm font-medium text-gray-800 hover:opacity-70">About</a>
          </nav>
        </div>

        {/* Bottom info */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 pt-8">
          <p className="text-sm font-medium text-gray-600">Presenz @ 202X. All rights reserved.</p>
          
          {/* Social icons */}
          <div className="flex gap-4">
            <a href="#" className="w-6 h-6 text-gray-600 hover:text-gray-800">
              <img src={img1} alt="Facebook" className="w-full h-full" />
            </a>
            <a href="#" className="w-6 h-6 text-gray-600 hover:text-gray-800">
              <img src={img2} alt="Twitter" className="w-full h-full" />
            </a>
            <a href="#" className="w-6 h-6 text-gray-600 hover:text-gray-800">
              <img src={img3} alt="Instagram" className="w-full h-full" />
            </a>
            <a href="#" className="w-6 h-6 text-gray-600 hover:text-gray-800">
              <img src={img6} alt="LinkedIn" className="w-full h-full" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
  ]

  return (
    <div className="bg-white w-full">
      {/* Fixed Header/Navigation */}
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
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <MenuIcon className="size-5 text-slate-900" />
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-white/50 bg-white/80 backdrop-blur-md">
              <div className="px-4 py-3 flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-slate-900 text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
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

      {/* Hero Section */}
      <section 
        className="relative w-full pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28 min-h-[600px] sm:min-h-[700px] md:min-h-[800px] overflow-hidden z-15"
        style={{
          backgroundImage: `url('/background.png')`,
          backgroundSize: 'cover, cover',
          backgroundPosition: 'center, center',
        }}
      >
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          
        />

        

        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center pt-12">
          <div className="">
            {/* Headline */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] xl:text-[3rem] font-bold leading-tight mb-3 sm:mb-4" style={{ color: '#05006C' }}>
              Different Vibes <span className="inline-block">.</span>Different Places
            </h1>
            <p className="text-[2.5rem] font-extrabold mb-4 sm:mb-6" style={{ color: '#2563eb' }}>
              Just PRESENZ.
            </p>
            
            {/* Subheadline */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-md" style={{ color: '#05006C' }}>
              Discover art, music, fashion, culture happening live near you.
            </p>

            {/* CTA Button */}
            <button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white font-semibold py-3 sm:py-4 px-7 sm:px-9 rounded-full transition mb-6 sm:mb-12 mt-8 text-sm sm:text-base shadow-lg hover:shadow-xl">
              Leave a Presenz
            </button>

            {/* App Store Badges */}
            <div className="flex flex-row gap-3 sm:gap-4">
              <img src="/play.png" alt="Get it on Google Play" className="h-11 sm:h-12 md:h-14 w-auto cursor-pointer hover:opacity-90 transition" />
              <img src="/appstore.png" alt="Download on the App Store" className="h-11 sm:h-12 md:h-14 w-auto cursor-pointer hover:opacity-90 transition" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative py-4 sm:py-4 md:py-8 lg:py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50/40 via-purple-50/30 to-pink-50/40">
        {/* Overlay image positioned over the section */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/overlay2.png"
            alt=""
            className="w-full h-full object-cover opacity-80"
            style={{ mixBlendMode: 'overlay' }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-start mt-24">
            {/* Left side text */}
            <div className="lg:pr-4 mt-32">
              <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-bold mb-6 sm:mb-8 leading-[1.1]">
                <span className="block bg-gradient-to-r from-[#0A0A0A] to-[#0029FF] bg-clip-text text-transparent">A new way to </span>
                <span className="block bg-gradient-to-r from-[#0A0A0A] to-[#0029FF] bg-clip-text text-transparent">experience culture.</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-lg" style={{ color: '#1e3a8a' }}>
                Presenz brings together live art, music, fashion, cinema, and city energy into one living map visible only while it's happening.
              </p>
            </div>

            {/* Right side - Event cards */}
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Art Card */}
              <div className="relative z-10 bg-white rounded-2xl p-6 sm:p-7 border-t-[6px] border-purple-600 shadow-md hover:shadow-lg transition right-16 sm:right-16">
                <div className="mb-3">
                  <span className="text-purple-600 font-bold text-xs tracking-widest uppercase">ART</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                  Contemporary<br />Exhibition
                </h3>
                <p className="text-gray-700 font-normal mb-1 text-sm sm:text-base">Fondatoi</p>
                <p className="text-gray-600 text-xs sm:text-sm mb-4">Now - 6:0€</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-green-600 font-bold text-xs tracking-wider">LIVE NO</span>
                </div>
              </div>

              {/* Music Card */}
              <div className="relative z-20 -mt-6 bg-white rounded-2xl p-6 sm:p-7 border-t-[6px] border-blue-600 shadow-md hover:shadow-lg transition left-16 sm:left-16 bottom-20">
                <div className="mb-3">
                  <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">MUSIC</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">Jazz Night Sessions</h3>
                <p className="text-gray-700 font-normal mb-1 text-sm sm:text-base">Blue Note Club</p>
                <p className="text-gray-600 text-xs sm:text-sm mb-4">8:00 PM - Late</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-green-600 font-bold text-xs tracking-wider">LIVE NOW</span>
                </div>
              </div>

              {/* Nightlife Card */}
              <div className="relative z-30 -mt-6 bg-white rounded-2xl p-6 sm:p-7 border-t-[6px] border-pink-600 shadow-md hover:shadow-lg transition right-16 sm:right-16 bottom-40">
                <div className="mb-3">
                  <span className="text-pink-600 font-bold text-xs tracking-widest uppercase">NIGHTLIFE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">Warehouse Opening</h3>
                <p className="text-gray-700 font-normal mb-1 text-sm sm:text-base">District 5</p>
                <p className="text-gray-600 text-xs sm:text-sm mb-4">10:00 PM - 4:00 AM</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-green-600 font-bold text-xs tracking-wider">LIVE NOW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
              Explore by category
            </h2>
            <p className="text-lg sm:text-xl text-presenz-light">
              Discover what's happening now across the city
            </p>
          </div>

          <div className="relative w-full">
            <div className="flex overflow-x-auto gap-10 pb-16 pt-8 px-4 -mx-4 scrollbar-hide snap-x snap-mandatory">
              {[
                { 
                  img: imgRectangle43303, 
                  color: '#2563eb', // Blue
                  bgColor: '#020617', // Very Deep Blue
                  category: 'Music',
                  location: 'ABC Music Fest',
                  time: '0:10',
                  shadowColor: 'rgba(37,99,235,0.6)',
                  buttonGlow: '#2563eb'
                },
                { 
                  img: imgRectangle43304, 
                  color: '#e11d48', // Pink
                  bgColor: '#2a0a18', // Very Deep Pink
                  category: 'Night',
                  location: 'Party',
                  time: '0:10',
                  shadowColor: 'rgba(225,29,72,0.6)',
                  buttonGlow: '#e11d48'
                },
                { 
                  img: imgRectangle43305, 
                  color: '#84cc16', // Lime
                  bgColor: '#142800', // Very Deep Lime
                  category: 'Food',
                  location: 'Food Fest',
                  time: '0:10',
                  shadowColor: 'rgba(132,204,22,0.6)',
                  buttonGlow: '#84cc16'
                },
                { 
                  img: imgRectangle43306, 
                  color: '#06b6d4', // Cyan
                  bgColor: '#083344', // Very Deep Cyan
                  category: 'Cinema',
                  location: 'Movie Theatre',
                  time: '0:10',
                  shadowColor: 'rgba(6,182,212,0.6)',
                  buttonGlow: '#06b6d4'
                },
                { 
                  img: img10, // Placeholder
                  color: '#8b5cf6', // Violet
                  bgColor: '#1e1b4b', // Very Deep Violet
                  category: 'Art',
                  location: 'Gallery Open',
                  time: '0:45',
                  shadowColor: 'rgba(139,92,246,0.6)',
                  buttonGlow: '#8b5cf6'
                },
                { 
                  img: img11, // Placeholder
                  color: '#f97316', // Orange
                  bgColor: '#431407', // Very Deep Orange
                  category: 'Tech',
                  location: 'Innovation Hub',
                  time: '0:20',
                  shadowColor: 'rgba(249,115,22,0.6)',
                  buttonGlow: '#f97316'
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 relative w-[320px] sm:w-[350px] h-[520px] rounded-[3rem] border-[3px] p-5 flex flex-col snap-center group transition-all duration-300 hover:scale-[1.02]"
                  style={{ 
                    borderColor: card.color,
                    backgroundColor: card.bgColor,
                    boxShadow: `0 0 30px ${card.shadowColor}`
                  }}
                >
                  {/* Image Container */}
                  <div className="relative w-full h-[62%] rounded-[2rem] overflow-hidden mb-8">
                    <img
                      src={card.img}
                      alt={card.category}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Play Button - Centered on bottom edge of image */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-1/2 flex justify-center z-10">
                       <button 
                        className="relative w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center backdrop-blur-md border border-white/50 shadow-lg group-hover:scale-110 transition-transform duration-300"
                        style={{ 
                          background: 'rgba(255, 255, 255, 0.15)',
                          boxShadow: `0 0 20px ${card.buttonGlow}80` // Outer glow
                        }}
                       >
                          {/* Inner glow circle */}
                          <div 
                            className="absolute inset-2 rounded-full opacity-40 blur-sm" 
                            style={{ background: card.buttonGlow }} 
                          />
                          
                          {/* Play Icon Circle */}
                          <div className="relative w-12 h-12 rounded-full border-[1.5px] border-white flex items-center justify-center z-20">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white ml-0.5">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                       </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-end px-2 pb-2">
                    {/* Progress Bar */}
                    <div className="flex items-center gap-3 mb-5 relative z-0">
                      <div className="flex-1 h-1.5 bg-white/10 rounded-full relative">
                        {/* Progress fill */}
                        <div 
                           className="absolute left-0 top-0 bottom-0 rounded-full"
                           style={{ 
                             width: '60%', 
                             background: `linear-gradient(90deg, ${card.color} 0%, white 100%)` 
                           }} 
                        />
                        {/* Thumb */}
                        <div 
                          className="absolute w-5 h-5 bg-white rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform"
                          style={{ left: '60%', top: '50%', transform: 'translate(-50%, -50%)' }}
                        />
                      </div>
                      <span className="text-white text-xs font-semibold min-w-[30px] text-right">{card.time}</span>
                    </div>

                    {/* Badge */}
                    <div className="mb-4">
                       <button
                         className="px-6 py-2 rounded-full text-[11px] font-bold text-white tracking-widest shadow-md uppercase hover:opacity-90 transition"
                         style={{ backgroundColor: card.color }}
                       >
                         {card.category}
                       </button>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-white pb-1">
                       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                         <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                         <circle cx="12" cy="10" r="3" />
                       </svg>
                       <span className="text-sm font-bold tracking-wide">{card.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-4">
              {[0, 1, 2, 3].map((idx) => (
                <button
                  key={idx}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${idx === 0 ? 'bg-slate-800' : 'bg-slate-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* iPhone Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* iPhone mockup */}
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative w-full max-w-xs">
                <img
                  src={img19}
                  alt="iPhone mockup"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-slate-900 bg-clip-text text-transparent">
                See what's happening.
                <br />
                Where it's happening.
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-presenz-light mb-8">
                Every pulse appears live on the map, exactly where the moment exists and disappears automatically after 48 hours.
              </p>
              <button className="bg-presenz-blue hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition text-sm sm:text-base">
                Open Live Pulse
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* No profiles section */}
      <section 
        className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: `url('${imgRectangle43307}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(106.24443581631037deg, rgba(255, 255, 255, 0) 1.9049%, rgba(212, 144, 255, 0.3) 62.346%, rgba(255, 238, 151, 0.4) 74.151%, rgba(255, 255, 255, 0.8) 84.54%, rgba(255, 255, 255, 0.8) 96.345%)',
          }}
        />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-700 mb-4">
            No profiles.
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-700 mb-4">
            No Followers.
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-700 mb-6">
            No filters.
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-blue-600">
            Just Presenz.
          </h2>
        </div>
      </section>

      {/* The Experience Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
              The Experience
            </h2>
            <p className="text-lg sm:text-xl text-presenz-light">
              From Discovery to Creation
            </p>
          </div>

          {/* iPhone mockups with gradient background */}
          <div className="relative">
            <div className="flex justify-center">
              <img
                src="https://www.figma.com/api/mcp/asset/af80ecbb-fcd8-401e-a94f-f2e23ba3ace9"
                alt="The Experience - iPhone mockups"
                className="w-full max-w-5xl h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
