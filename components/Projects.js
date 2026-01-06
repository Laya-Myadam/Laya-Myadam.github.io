'use client'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import {
  TrendingUp, Users, DollarSign, ExternalLink, Github,
  Terminal, Cpu, Activity, Brain, Network, Zap, Target,
  Hash, ShieldCheck
} from 'lucide-react'

export default function Projects() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    particles: {
      color: { value: "#0ea5e9" },
      links: { color: "#0ea5e9", distance: 150, enable: true, opacity: 0.1, width: 1 },
      move: { enable: true, speed: 0.3, direction: "none", outModes: { default: "bounce" } },
      number: { density: { enable: true, area: 800 }, value: 30 },
      opacity: { value: 0.3 },
      size: { value: 1 },
    },
    interactivity: { events: { onHover: { enable: true, mode: "grab" } } },
    detectRetina: true,
  };

  const projects = [
    {
      id: "SYS-LOG_001",
      title: "CHURN INTERVENTION SYSTEM",
      gif: "/churn.gif",
      icon: <Users size={16} />,
      tags: ["Deep RL", "Game Theory", "Minimax"],
      theme: "purple",
      status: "AUTHORIZED",
      points: [
        {
          label: "ARCHITECTURE",
          content: "Architected a high-fidelity Deep Reinforcement Learning platform utilizing Contextual Bandits and Minimax strategies to dynamically simulate and counter customer churn behaviors in highly competitive markets."
        },
        {
          label: "OPERATIONAL_IMPACT",
          content: "Successfully deployed across live A/B test environments, delivering a 1% incremental revenue uplift and a 15% reduction in churn prediction error through constrained linear programming optimization."
        }
      ],
      metrics: ["15% RMSE ↓", "1% Rev ↑", "<1hr Alert", "20+ A/B Tests"]
    },
    {
      id: "SYS-LOG_002",
      title: "ADAPTIVE PRICING SYSTEM",
      gif: "/pricing.gif",
      icon: <DollarSign size={16} />,
      tags: ["Spark", "Ray", "Causal Inference"],
      theme: "blue",
      status: "STABLE",
      points: [
        {
          label: "ARCHITECTURE",
          content: "Developed a real-time causal inference engine to isolate and measure price elasticity effects across 500k+ daily transactions, leveraging Spark Streaming for data ingestion and distributed Ray clusters for compute."
        },
        {
          label: "OPERATIONAL_IMPACT",
          content: "Scaled pricing automation for over 4,000 unique products, reducing computation latency to under 1 minute and significantly enhancing Gross Merchandise Value (GMV) contributions through rapid market response."
        }
      ],
      metrics: ["15% RMSE ↓", "0.8% Rev ↑", "<1min Resp", "4K+ Products"]
    },
    {
      id: "SYS-LOG_003",
      title: "QUANTITATIVE TRADING SYSTEM",
      gif: "/QTS.gif",
      icon: <TrendingUp size={16} />,
      tags: ["RLlib", "Time-Series", "LSTM"],
      theme: "cyan",
      status: "LIVE_STREAM",
      points: [
        {
          label: "ARCHITECTURE",
          content: "Constructed a multi-agent reinforcement learning framework utilizing Nash Equilibrium principles and LSTM-based time-series forecasting to adapt automated order execution in highly volatile market conditions."
        },
        {
          label: "OPERATIONAL_IMPACT",
          content: "Achieved consistent alpha generation of 0.5–1% while maintaining a 17% reduction in forecasting error (RMSE) by deploying parallel backtesting infrastructure and automated MLOps telemetry pipelines."
        }
      ],
      metrics: ["17% RMSE ↓", "1% Alpha", "1% Revenue ↑", "<1hr Resp"]
    }
  ]

  const getTheme = (theme) => {
    const themes = {
      cyan: {
        text: 'text-cyan-400',
        hoverText: 'group-hover:text-cyan-400',
        border: 'border-cyan-500/40',
        hoverBorder: 'group-hover:border-cyan-400',
        shadow: 'group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.5)]',
        header: 'bg-cyan-500/20'
      },
      purple: {
        text: 'text-purple-400',
        hoverText: 'group-hover:text-purple-400',
        border: 'border-purple-500/40',
        hoverBorder: 'group-hover:border-purple-400',
        shadow: 'group-hover:shadow-[0_0_30px_-5px_rgba(192,132,252,0.5)]',
        header: 'bg-purple-500/20'
      },
      blue: {
        text: 'text-blue-400',
        hoverText: 'group-hover:text-blue-400',
        border: 'border-blue-500/40',
        hoverBorder: 'group-hover:border-blue-400',
        shadow: 'group-hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.5)]',
        header: 'bg-blue-500/20'
      },
    };
    return themes[theme] || themes.cyan;
  }

  return (
    <section id="projects" className="relative py-24 bg-[#020617] text-slate-300 font-mono overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Particles id="projects-particles" init={particlesInit} options={particlesConfig} />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        <div className="mb-20 border-l-4 border-cyan-500 pl-6">
          <div className="flex items-center gap-2 text-cyan-500 text-[10px] mb-2 font-bold tracking-[0.2em]">
            <Terminal size={14} className="animate-pulse" />
            <span>ROOT_USER@SYSTEM:~/MAJOR_INITIATIVES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic">
            Active <span className="text-cyan-500">Stacks</span>
          </h2>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => {
            const t = getTheme(project.theme);
            return (
              <div key={index} className="relative group">
                {/* Main Card: Increased rounding to 3xl */}
                <div className={`rounded-3xl border ${t.border} ${t.hoverBorder} ${t.shadow} bg-slate-950/90 backdrop-blur-md overflow-hidden transition-all duration-500 shadow-2xl group-hover:-translate-y-3`}>

                  {/* Terminal Header */}
                  <div className={`flex items-center justify-between px-6 py-3 border-b ${t.border} ${t.header} bg-black/40`}>
                    <div className="flex items-center gap-4">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40 border border-red-500/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40 border border-yellow-500/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/40 border border-green-500/20" />
                      </div>
                      <span className={`text-[10px] font-bold tracking-[0.2em] ${t.text} uppercase transition-all duration-500 group-hover:brightness-125`}>
                        {project.id} // STATUS: {project.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold">
                      <Hash size={10} />
                      PID: {1024 + index * 42}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-12">
                    {/* GIF Visual Column */}
                    <div className="md:col-span-5 p-6 bg-black/40 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-800">
                      {/* Inner GIF Container: Increased rounding to 2xl */}
                      <div className={`relative w-full aspect-video md:aspect-auto md:h-full rounded-2xl border ${t.border} ${t.hoverBorder} ${t.shadow} bg-black overflow-hidden flex items-center justify-center transition-all duration-500`}>
                        <img
                          src={project.gif}
                          alt=""
                          className="w-full h-full object-scale-down opacity-100 transition-all duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-3 left-3 flex gap-1 z-20">
                          {project.tags.slice(0, 3).map((tag, i) => (
                            <span key={i} className="px-2 py-0.5 bg-black/80 border border-white/10 text-[9px] font-bold text-white uppercase tracking-tighter rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="md:col-span-7 p-8 lg:p-10 space-y-8 flex flex-col justify-between">
                      <div>
                        <h3 className={`text-3xl font-black text-white mb-2 ${t.hoverText} transition-colors duration-500 tracking-tight uppercase`}>
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold italic tracking-wide">
                          <ShieldCheck size={12} className="text-green-500" />
                          VERIFIED_SYSTEM_OWNER: ADMIN_ROOT
                        </div>
                      </div>

                      <div className="space-y-6">
                        {project.points.map((pt, i) => (
                          <div key={i} className="flex flex-col gap-1.5">
                            <span className={`text-[10px] font-bold ${t.text} tracking-widest uppercase transition-all duration-500 group-hover:brightness-125`}>
                              [{pt.label}]
                            </span>
                            <p className="text-[12px] text-slate-400 leading-relaxed font-medium uppercase border-l border-slate-800 pl-4 transition-colors duration-500 group-hover:border-slate-600 group-hover:text-slate-300">
                              {pt.content}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="pt-8 border-t border-slate-900 transition-colors duration-500 group-hover:border-slate-700">
                         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                           {project.metrics.map((m, i) => (
                             /* Metric Boxes: Changed to rounded-xl */
                             <div key={i} className={`flex flex-col p-3 bg-black/60 border ${t.border} rounded-xl transition-all duration-500 group-hover:bg-black/80 group-hover:border-opacity-70`}>
                               <span className="text-[8px] text-slate-600 font-bold uppercase mb-1">Telemet_0{i}</span>
                               <span className={`text-[11px] font-black ${t.text} whitespace-nowrap transition-all duration-500 group-hover:brightness-125`}>{m}</span>
                             </div>
                           ))}
                         </div>

                         <div className="flex gap-4">
                           {/* Buttons: Changed to rounded-xl */}
                           <button className={`p-4 border ${t.border} bg-white/5 hover:bg-white/10 transition-all rounded-xl group/btn`}>
                             <Github size={20} className={`${t.text} group-hover/btn:scale-110 transition-transform`} />
                           </button>
                           <button className={`flex-1 px-6 py-4 border ${t.border} bg-white/5 hover:bg-white/10 transition-all rounded-xl text-[11px] font-black flex items-center justify-center gap-3 ${t.text} tracking-[0.2em] group-hover:bg-white/20`}>
                             <ExternalLink size={18} /> INITIALIZE_DEPLOYMENT
                           </button>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}