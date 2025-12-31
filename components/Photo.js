'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Photo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>

      {/* ========================= NAVBAR ========================= */}
      <nav className="backdrop-blur-md bg-slate-900/70 border-b border-white/10 sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">

      {/* Logo */}
      <div className="text-xl font-bold text-indigo-400 tracking-wide">
        Laya Myadam
      </div>

      {/* Glowing Button Links */}
      <div className="hidden md:flex space-x-4">
        {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            className="px-4 py-2 rounded-full font-medium text-white
                       bg-indigo-600/20 border border-indigo-400/40
                       shadow-[0_0_12px_rgba(99,102,241,0.6)]
                       hover:shadow-[0_0_20px_rgba(99,102,241,0.9)]
                       hover:bg-indigo-600/30
                       transition-all duration-300 backdrop-blur-md"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-300 hover:text-white transition"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden pb-4 space-y-2">
        {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            className="block py-2 px-4 rounded-full font-medium text-white
                       bg-indigo-600/20 border border-indigo-400/40
                       shadow-[0_0_12px_rgba(99,102,241,0.6)]
                       hover:shadow-[0_0_20px_rgba(99,102,241,0.9)]
                       hover:bg-indigo-600/30
                       transition-all duration-300 backdrop-blur-md"
          >
            {label}
          </a>
        ))}
      </div>
    )}
  </div>
</nav>


      {/* ========================= HERO SECTION ========================= */}
      <section
        className="relative min-h-screen flex items-center text-white bg-[#0F172A] overflow-hidden"
        style={{
          backgroundImage: 'url(/backgroundPic.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xs"></div>


        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.07]
                        bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]
                        bg-[size:40px_40px] pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left Text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Hi, I'm <span className="text-indigo-400">Laya Myadam</span>
              </h1>

              <h2 className="text-2xl md:text-3xl font-light mb-6 text-indigo-300">
                AI & Machine Learning Engineer
              </h2>

              <p className="text-lg mb-10 opacity-90 leading-relaxed max-w-xl">
                Building intelligent systems that transform data into decisions and
                ideas into scalable, real‑world solutions.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-6">

                {/* Primary Neon Button */}
                <a
                  href="#contact"
                  className="px-8 py-3 rounded-full font-semibold text-white
                             bg-indigo-600/20 border border-indigo-400/40
                             shadow-[0_0_15px_rgba(99,102,241,0.6)]
                             hover:shadow-[0_0_25px_rgba(99,102,241,0.9)]
                             hover:bg-indigo-600/30
                             transition-all duration-300 backdrop-blur-md"
                >
                  Get in Touch
                </a>

                {/* Secondary Holographic Button */}
                <a
                  href="#projects"
                  className="px-8 py-3 rounded-full font-semibold text-indigo-300
                             border border-indigo-300/60
                             hover:border-indigo-400 hover:text-white
                             hover:shadow-[0_0_20px_rgba(129,140,248,0.7)]
                             transition-all duration-300"
                >
                  View Projects
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden
                              border-4 border-white/20 shadow-[0_0_40px_rgba(99,102,241,0.5)]
                              backdrop-blur-xl">
                <img
                  src="/Laya-Photo.jpg"
                  alt="Laya Myadam"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>



    </div>
  )
}
