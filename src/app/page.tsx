'use client'

import { useState } from 'react'

// Image constants from Figma
const imgRectangle43304 = 'https://www.figma.com/api/mcp/asset/e9510b26-bd5a-43b2-8b15-37f115026447'
const imgRectangle43305 = 'https://www.figma.com/api/mcp/asset/dae97cad-598a-4f18-a7a6-5a6912711cdc'
const imgRectangle43306 = 'https://www.figma.com/api/mcp/asset/41910d75-5844-41d8-a7a4-8b54a42d6923'

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



function Footer() {
  return (
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
  )
}

function CategoryCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const cards = [
    { 
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTytNsZEENZHKOdmU91tbTAVOwN43Wh7UCb6c3UZ1OELCS0rYtY", 
      color: '#040f5f', // Royal Blue
      bgColor: '#0a1a77', // Deep Royal Blue
      category: 'Music',
      location: 'ABC Music Fest',
      time: '0:10',
    },
    { 
      img: imgRectangle43304, 
      color: '#E91E63', // Pink
      bgColor: '#9C1552', // Deep Pink
      category: 'Night',
      location: 'Party',
      time: '0:10',
    },
    { 
      img: imgRectangle43305, 
      color: '#9AFF1D', // Lime Green
      bgColor: '#6BB31A', // Deep Lime
      category: 'Food',
      location: 'Food Fest',
      time: '0:10',
    },
    { 
      img: imgRectangle43306, 
      color: '#00D4FF', // Cyan
      bgColor: '#0099C2', // Deep Cyan
      category: 'Cinema',
      location: 'Movie Theatre',
      time: '0:10',
    },
  ]

  const handleDotClick = (index: number) => {
    setCurrentSlide(index)
    const container = document.querySelector('.card-scroll-container')
    if (container) {
      const cardWidth = 300 + 32 // card width + gap
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="pt-16 pb-12 sm:pt-12 sm:pb-16 md:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-yellow-50/60 via-purple-50/40 to-pink-50/50">
      <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/overlay3.png"
            alt=""
            className="w-full h-full object-cover opacity-80"
            style={{ mixBlendMode: 'overlay' }}
          />
        </div>
      
      <div className="max-w-7xl mx-auto relative z-30">
        <div className="text-center mb-8 sm:mb-12 mt-4 sm:mt-0">
          <h2 className=" sm:py-2 text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#0A0A0A] to-[#0029FF] text-transparent bg-clip-text mb-2">
            Explore by category
          </h2>
          <p className="text-lg sm:text-xl text-presenz-light" style={{color: '#05006C'}}>
            Discover what's happening now across the city
          </p>
        </div>

        <div className="relative w-full">
          {/* Cards Container */}
          <div 
            className="card-scroll-container flex overflow-x-auto gap-6 sm:gap-8 pb-16 sm:pb-20 pt-12 sm:pt-16 px-6 sm:px-6 md:px-8 -mx-0 sm:-mx-6 md:-mx-8 snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              overflow: 'visible',
              overflowX: 'auto'
            }}
            onScroll={(e) => {
              const container = e.currentTarget
              const scrollLeft = container.scrollLeft
              const cardWidth = 300 + 32 // card width + gap
              const newSlide = Math.round(scrollLeft / cardWidth)
              setCurrentSlide(newSlide)
            }}
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 snap-start group"
                style={{
                  filter: `drop-shadow(0 0 20px ${card.color}55)`,
                }}
              >
                {/* Outer white border container */}
                <div 
                  className="relative w-[330px] h-[460px] rounded-[1.75rem] p-[3px] transition-all duration-300"
                  style={{
                    background: 'white'
                  }}
                >
                  {/* Inner card with gradient background */}
                  <div
                    className="relative w-full h-full rounded-[1.6rem] p-4 flex flex-col"
                    style={{ 
                      background: `linear-gradient(180deg, ${card.bgColor} 0%, ${card.bgColor}EE 100%)`,
                      border: `2px solid ${card.color}`
                    }}
                  >
                {/* Image Container - Taller rectangle with less roundness and white border */}
                <div className="relative w-full h-[68%] rounded-[1.25rem] overflow-visible mb-8 bg-white p-[3px]">
                  <div className="relative w-full h-full rounded-[1.1rem] overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.category}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Play Button - At bottom center edge of image */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-1/2 flex justify-center z-20">
                    <button 
                      className="relative w-[60px] h-[60px] rounded-full flex items-center justify-center backdrop-blur-md shadow-2xl group-hover:scale-110 transition-transform duration-300"
                      style={{ 
                        background: 'rgba(65, 105, 225, 0.35)',
                        border: '2px solid rgba(255, 255, 255, 0.4)',
                      }}
                    >
                      {/* Play Icon */}
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ border: '2px solid white' }}>
                        <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Bottom Content Section */}
                <div className="flex-1 flex flex-col justify-end px-3 pb-3">
                  {/* Progress Bar */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-1 h-[3px] bg-white/25 rounded-full relative">
                      <div 
                        className="absolute left-0 top-0 bottom-0 rounded-full bg-white"
                        style={{ width: '60%' }} 
                      />
                      <div 
                        className="absolute w-[14px] h-[14px] bg-white rounded-full shadow-md"
                        style={{ left: '60%', top: '50%', transform: 'translate(-50%, -50%)' }}
                      />
                    </div>
                    <span className="text-white text-sm font-semibold min-w-[32px] text-right">{card.time}</span>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-3">
                    <button
                      className="px-4 py-1.5 rounded-full text-[11px] font-bold text-white shadow-md uppercase transition hover:opacity-90"
                      style={{ backgroundColor: card.color }}
                    >
                      {card.category}
                    </button>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-white/95">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="text-[15px] font-semibold">{card.location}</span>
                  </div>
                </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="hidden sm:flex justify-center gap-2 mt-4 sm:mt-6">
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`rounded-full transition-all duration-300 ${
                  currentSlide === idx 
                    ? 'w-8 h-2.5 bg-slate-800' 
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
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
        className="relative w-full pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28 min-h-[520px] sm:min-h-[620px] md:min-h-[720px] lg:min-h-[800px] overflow-hidden z-15"
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
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.5rem] font-extrabold mb-4 sm:mb-6" style={{ color: '#052DFF' }}>
              Just PRESENZ.
            </p>
            
            {/* Subheadline */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-md" style={{ color: '#05006C' }}>
              Discover art, music, fashion, culture happening live near you.
            </p>

            {/* CTA Button */}
            <button className="bg-[#2B4DFF] hover:bg-[#2B4DFF] text-white font-semibold py-3 sm:py-4 px-7 sm:px-9 rounded-full transition mb-6 sm:mb-12 mt-8 text-sm sm:text-base shadow-lg hover:shadow-xl">
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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-start mt-12 sm:mt-16 lg:mt-24">
            {/* Left side text */}
            <div className="lg:pr-4 mt-8 sm:mt-12 lg:mt-32">
              <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-bold mb-6 sm:mb-8 leading-[1.1]">
                <span className="block bg-gradient-to-r from-[#0A0A0A] to-[#0029FF] bg-clip-text text-transparent">A new way to </span>
                <span className="block bg-gradient-to-r from-[#0A0A0A] to-[#0029FF] bg-clip-text text-transparent">experience culture.</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-lg" style={{ color: '#1e3a8a' }}>
                Presenz brings together live art, music, fashion, cinema, and city energy into one living map visible only while it's happening.
              </p>
            </div>

            {/* Right side - Event cards */}
            <div className="relative w-full max-w-md lg:max-w-none mx-auto">
              {/* Art Card */}
              <div className="relative z-10 bg-white rounded-2xl p-6 sm:p-7 border-t-[6px] border-purple-600 shadow-md hover:shadow-lg transition right-0 sm:right-6 lg:right-16">
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
              <div className="relative z-20 -mt-6 bg-white rounded-2xl p-6 sm:p-7 border-t-[6px] border-blue-600 shadow-md hover:shadow-lg transition left-0 sm:left-6 lg:left-16 bottom-0 sm:bottom-10 lg:bottom-20">
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
              <div className="relative z-30 -mt-6 bg-white rounded-2xl p-6 sm:p-7 border-t-[6px] border-pink-600 shadow-md hover:shadow-lg transition right-0 sm:right-6 lg:right-16 bottom-0 sm:bottom-20 lg:bottom-40">
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
      <CategoryCarousel />

      {/* iPhone Section */}
      <section className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50/50 to-pink-50/30">
        <div className="absolute inset-0 pointer-events-none z-20">
          <img
            src="/overlay4.png"
            alt=""
            className="w-full h-full object-cover opacity-70"
            style={{ mixBlendMode: 'overlay' }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-6 md:gap-12 items-center">
            {/* iPhone mockup */}
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-sm z-25">
                <img
                  src="/iphone.png"
                  alt="iPhone mockup showing live map"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2 mt-2 md:-mt-16 lg:-mt-20 z-25">
              <h2 className="py-2 text-2xl sm:text-3xl md:text-4xl lg:text-[3.5rem] font-extrabold leading-tight bg-gradient-to-r from-[#0A0A0A] to-[#0029FF] bg-clip-text text-transparent">
                See what's happening.
              </h2>
              <h2 className="py-2 text-2xl sm:text-3xl md:text-4xl lg:text-[3.5rem] font-extrabold mb-4 sm:mb-6 leading-tight bg-gradient-to-r from-[#0A0A0A] to-[#0029FF] bg-clip-text text-transparent">
                Where it's happening.
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-12 font-semibold leading-relaxed max-w-xl" style={{ color: '#1e3a8a' }}>
                Every pulse appears live on the map, exactly where the moment exists and disappears automatically after 48 hours.
              </p>
              <button className="bg-[#2B4DFF] hover:bg-[#2B4DFF] text-white font-semibold py-3 sm:py-3.5 px-6 sm:px-8 rounded-full transition text-sm sm:text-base shadow-lg hover:shadow-xl">
                Open Live Pulse
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* No profiles section */}
      <section 
        className="px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('/bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.5))',
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold mb-8 sm:mb-14 md:mb-16" style={{ color: '#1e293b' }}>
            No Profiles.
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold mb-8 sm:mb-14 md:mb-16" style={{ color: '#1e293b' }}>
            No Followers.
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold mb-12 sm:mb-14 md:mb-16" style={{ color: '#1e293b' }}>
            No Filters.
          </h2>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-extrabold" style={{ color: '#001DB5' }}>
            Just Presenz.
          </h2>
        </div>
      </section>

      {/* The Experience Section */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50">
        <div className="absolute inset-0 pointer-events-none z-20">
          <img
            src="/overlay5.png"
            alt=""
            className="w-full h-full object-cover opacity-70"
            style={{ mixBlendMode: 'overlay' }}
          />
        </div>
        <div className="max-w-7xl mx-auto z-30 relative">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-[#0A0A0A] to-[#0029FF] bg-clip-text text-transparent">
              The Experience
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold" style={{ color: '#05006C' }}>
              From Discovery to Creation
            </p>
          </div>

          {/* iPhone mockups */}
          <div className="relative flex items-center justify-center gap-4 sm:gap-6 md:gap-8 z-30 overflow-x-auto md:overflow-visible pb-4 md:pb-0 px-1 md:px-0 snap-x snap-mandatory">
            <div className="hidden md:flex flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px] snap-start">
              <img
                src="/m1.png"
                alt="iPhone mockup 1"
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
            <div className="hidden md:flex flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px] snap-start">
              <img
                src="/m2.png"
                alt="iPhone mockup 2"
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
            <div className="flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px] snap-start">
              <img
                src="/m3.png"
                alt="iPhone mockup 3"
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
            <div className="hidden md:flex flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px] snap-start">
              <img
                src="/m4.png"
                alt="iPhone mockup 4"
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
            <div className="hidden md:flex flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px] snap-start">
              <img
                src="/m5.png"
                alt="iPhone mockup 5"
                className="w-full h-auto drop-shadow-xl"
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
