'use client'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, Cpu, Brain } from 'lucide-react'

// --- NEURAL NETWORK CANVAS EFFECT ---
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
        p.x += p.speedX; p.y += p.speedY; p.life -= 0.008;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(129, 140, 248, ${p.life * 0.5})`;
        ctx.fill();
        for (let j = i + 1; j < particles.current.length; j++) {
          let p2 = particles.current[j];
          let dx = p.x - p2.x; let dy = p.y - p2.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            let opacity = (1 - distance / 100) * p.life * 0.4;
            ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`;
            ctx.lineWidth = 0.5; ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
          }
        }
      }
      particles.current = particles.current.filter(p => p.life > 0);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => { window.removeEventListener('resize', resizeCanvas); window.removeEventListener('mousemove', handleMouseMove); cancelAnimationFrame(animationFrameId); };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[5]" />;
};

// --- NEURAL CURSOR ---
const NeuralCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e) => setIsHovered(e.target.closest('a') || e.target.closest('button'));
    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', handleMouseOver);
    return () => { window.removeEventListener('mousemove', updateCursor); window.removeEventListener('mouseover', handleMouseOver); };
  }, []);

  return (
    <div className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out hidden md:block"
         style={{ left: `${position.x}px`, top: `${position.y}px`, transform: 'translate(-50%, -50%)' }}>
      <div className={`w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee] transition-all ${isHovered ? 'scale-150' : 'scale-100'}`} />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-indigo-500/30 rounded-full transition-all duration-500
        ${isHovered ? 'w-12 h-12 border-dashed animate-spin-slow opacity-100' : 'w-8 h-8 opacity-40'}`}
      />
    </div>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <NeuralCursor />
      <NeuralNetworkEffect />
      <nav className="backdrop-blur-md bg-[#0F172A]/70 border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* LOGO LEFT */}
            <div className="flex items-center gap-3 text-xl font-bold tracking-wider">
              <div className="relative flex items-center justify-center">
                 <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full animate-pulse"></div>
                 <Cpu className="w-7 h-7 text-cyan-400 relative z-10" />
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                Laya Myadam
              </span>
            </div>

            {/* LINKS RIGHT */}
            <div className="hidden md:flex space-x-4">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((label) => (
                <a key={label} href={`#${label.toLowerCase()}`}
                   className="px-4 py-2 rounded-full font-medium text-white text-sm bg-indigo-600/10 border border-indigo-400/20 hover:bg-indigo-600/30 transition-all cursor-none">
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
      <style jsx global>{`
        @keyframes spin-slow { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
      `}</style>
    </>
  );
}