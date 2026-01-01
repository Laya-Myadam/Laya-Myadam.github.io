'use client'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, Cpu, Brain, Activity } from 'lucide-react'

// ========================= NEURAL NETWORK CANVAS EFFECT =========================
const NeuralNetworkEffect = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      particles.current.push({
        x: mouse.current.x,
        y: mouse.current.y,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        life: 1.0
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.current.length; i++) {
        let p = particles.current[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.life -= 0.008;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(129, 140, 248, ${p.life * 0.5})`;
        ctx.fill();

        for (let j = i + 1; j < particles.current.length; j++) {
          let p2 = particles.current[j];
          let dx = p.x - p2.x;
          let dy = p.y - p2.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            let opacity = (1 - distance / 100) * p.life * 0.4;
            ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      particles.current = particles.current.filter(p => p.life > 0);
      if (particles.current.length > 80) particles.current.shift();

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[5]" />;
};

// ========================= NEURAL CURSOR =========================
const NeuralCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e) => {
      if (e.target.closest('a') || e.target.closest('button')) setIsHovered(true);
      else setIsHovered(false);
    };
    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out hidden md:block"
      style={{ left: `${position.x}px`, top: `${position.y}px`, transform: 'translate(-50%, -50%)' }}
    >
      <div className={`w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee] transition-all ${isHovered ? 'scale-150' : 'scale-100'}`} />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-indigo-500/30 rounded-full transition-all duration-500
        ${isHovered ? 'w-12 h-12 border-dashed animate-spin-slow opacity-100' : 'w-8 h-8 opacity-40'}`}
      />
    </div>
  );
};

// ========================= MAIN PAGE =========================
export default function Photo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="bg-[#0F172A] min-h-screen cursor-none selection:bg-indigo-500/30">
      <NeuralCursor />
      <NeuralNetworkEffect />

      {/* NAVBAR */}
      <nav className="backdrop-blur-md bg-slate-900/70 border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* LOGO WITH GPU ICON */}
            <div className="flex items-center gap-3 text-xl font-bold text-indigo-400 tracking-wider">
              <div className="relative flex items-center justify-center">
                 {/* Glowing background for the icon */}
                 <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full animate-pulse"></div>
                 <Cpu className="w-7 h-7 text-cyan-400 relative z-10 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                Laya Myadam
              </span>
            </div>

            <div className="hidden md:flex space-x-4">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="px-4 py-2 rounded-full font-medium text-white text-sm bg-indigo-600/10 border border-indigo-400/20 hover:bg-indigo-600/30 transition-all cursor-none"
                >
                  {label}
                </a>
              ))}
            </div>
            <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-30 mix-blend-overlay"
          style={{ backgroundImage: 'url(/backgroundPic.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:30px_30px] z-[1]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">Laya Myadam</span>
              </h1>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[2px] w-12 bg-cyan-500/50"></div>
                <h2 className="text-xl md:text-2xl font-mono text-cyan-300 uppercase tracking-widest">AI & ML Engineer</h2>
              </div>
              <p className="text-lg mb-10 text-slate-300 leading-relaxed max-w-xl font-light">
                Architecting neural networks and intelligent systems that transform complex data into <span className="text-white border-b border-indigo-400/50">predictive reality</span>.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="#contact" className="px-8 py-3 rounded-full font-semibold text-white bg-indigo-600/20 border border-indigo-400/50 hover:bg-indigo-600/40 transition-all cursor-none">Initiate Contact</a>
                <a href="#projects" className="px-8 py-3 rounded-full font-semibold text-indigo-300 border border-indigo-300/30 hover:border-cyan-400 transition-all cursor-none flex items-center gap-2">
                  <Cpu size={18} /> View Projects
                </a>
              </div>
            </div>

            <div className="flex justify-center relative">
              <div className="absolute w-[340px] h-[340px] border border-indigo-500/10 rounded-full animate-spin-slow"></div>
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-tr from-indigo-500/50 to-cyan-500/50 shadow-[0_0_60px_rgba(99,102,241,0.3)] overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                  <img src="/Laya-Photo.jpg" alt="Laya Myadam" className="w-full h-full object-cover opacity-90 transition-all" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}