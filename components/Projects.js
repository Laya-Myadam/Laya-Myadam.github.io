import { TrendingUp, Users, DollarSign, ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "Quantitative Trading System",
      icon: <TrendingUp className="w-8 h-8" />,
      image: "/project-trading.jpg", // Add your image
      tags: ["Reinforcement Learning", "Time Series", "Apache Spark", "LSTM"],
      color: "cyan",
      star: {
        situation: "Financial markets require real-time trading decisions with minimal latency and maximum alpha generation.",
        task: "Build an automated RL-based trading system that adapts to market conditions and competitor strategies.",
        action: "Engineered multi-armed bandits and contextual bandits with Nash Equilibrium principles, built Spark/Ray pipelines for streaming data, and deployed parallel backtesting with automated MLOps infrastructure.",
        result: "Achieved 0.5-1% alpha generation, 1% revenue uplift, 17% RMSE reduction in forecasts, and <1-hour strategy execution (down from manual hours)."
      },
      metrics: ["0.5-1% Alpha", "1% Revenue ↑", "17% RMSE ↓", "<1hr Response"]
    },
    {
      title: "Customer Churn Intervention System",
      icon: <Users className="w-8 h-8" />,
      image: "/project-churn.jpg", // Add your image
      tags: ["Deep RL", "Contextual Bandits", "Game Theory", "A/B Testing"],
      color: "purple",
      star: {
        situation: "Telecom customers exhibit complex churn patterns requiring personalized, timely retention strategies.",
        task: "Develop an RL-driven platform to dynamically select optimal retention actions for high-risk customers.",
        action: "Built contextual bandits with online learning simulation, applied game-theory strategies (Minimax, Nash Equilibrium), and integrated linear programming for budget-constrained optimization with automated A/B testing.",
        result: "Improved churn prediction by 15% RMSE, achieved <1-hour response time for critical signals, and delivered 1% incremental revenue through optimized interventions."
      },
      metrics: ["15% RMSE ↓", "1% Revenue ↑", "<1hr Alert", "20+ A/B Tests"]
    },
    {
      title: "Adaptive Retail Pricing Platform",
      icon: <DollarSign className="w-8 h-8" />,
      image: "/project-pricing.jpg", // Add your image
      tags: ["Dynamic Pricing", "Spark Streaming", "Causal Inference", "Ray"],
      color: "green",
      star: {
        situation: "Retail pricing decisions lag market changes, missing revenue opportunities and competitive positioning.",
        task: "Create a real-time RL pricing system that adapts instantly to customer behavior and competitor actions.",
        action: "Developed contextual bandits on 500k+ transactions, built Spark Streaming + Ray pipelines for real-time learning, created simulation environments for pre-production testing, and applied causal inference for price elasticity.",
        result: "Achieved 15% price forecast improvement, 0.8% revenue uplift, and reduced pricing response time from hours to <1 minute."
      },
      metrics: ["15% RMSE ↓", "0.8% Revenue ↑", "<1min Response", "4K+ Products"]
    }
  ]

  const colorClasses = {
    cyan: {
      border: "border-cyan-500/40 hover:border-cyan-400/70",
      shadow: "shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)]",
      gradient: "from-cyan-500/10",
      text: "text-cyan-300",
      bg: "bg-cyan-500/20",
      iconBorder: "border-cyan-400/40",
      iconShadow: "shadow-[0_0_20px_rgba(34,211,238,0.4)]",
      badgeBg: "bg-cyan-500/20",
      badgeBorder: "border-cyan-400/40",
      badgeText: "text-cyan-300"
    },
    purple: {
      border: "border-purple-500/40 hover:border-purple-400/70",
      shadow: "shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)]",
      gradient: "from-purple-500/10",
      text: "text-purple-300",
      bg: "bg-purple-500/20",
      iconBorder: "border-purple-400/40",
      iconShadow: "shadow-[0_0_20px_rgba(168,85,247,0.4)]",
      badgeBg: "bg-purple-500/20",
      badgeBorder: "border-purple-400/40",
      badgeText: "text-purple-300"
    },
    green: {
      border: "border-green-500/40 hover:border-green-400/70",
      shadow: "shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.6)]",
      gradient: "from-green-500/10",
      text: "text-green-300",
      bg: "bg-green-500/20",
      iconBorder: "border-green-400/40",
      iconShadow: "shadow-[0_0_20px_rgba(34,197,94,0.4)]",
      badgeBg: "bg-green-500/20",
      badgeBorder: "border-green-400/40",
      badgeText: "text-green-300"
    }
  }

  return (
    <section
      id="projects"
      className="relative py-24 text-white overflow-hidden"
      style={{
        backgroundImage: 'url(/backgroundPic.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs"></div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
              Featured Projects
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 mx-auto rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
          <p className="mt-6 text-gray-300 text-lg">Transforming complex problems into intelligent solutions</p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => {
            const colors = colorClasses[project.color]
            return (
              <div
                key={index}
                className={`group relative rounded-2xl bg-gray-900/70 backdrop-blur-xl border-2 ${colors.border} ${colors.shadow} transition-all duration-500 overflow-hidden flex flex-col`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Project Image */}
                <div className="relative h-48 bg-gray-800/50 overflow-hidden">
                  {/* Placeholder gradient if no image */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-30`}></div>
                  {/* Icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-20 h-20 rounded-xl ${colors.bg} border ${colors.iconBorder} ${colors.iconShadow} flex items-center justify-center ${colors.text}`}>
                      {project.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 flex-grow flex flex-col">
                  <h3 className={`text-2xl font-bold ${colors.text} mb-4`}>
                    {project.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs ${colors.badgeBg} ${colors.badgeText} border ${colors.badgeBorder} rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* STAR Method */}
                  <div className="space-y-3 mb-4 text-sm flex-grow">
                    <div>
                      <span className="font-bold text-white">Situation:</span>
                      <p className="text-gray-300">{project.star.situation}</p>
                    </div>
                    <div>
                      <span className="font-bold text-white">Task:</span>
                      <p className="text-gray-300">{project.star.task}</p>
                    </div>
                    <div>
                      <span className="font-bold text-white">Action:</span>
                      <p className="text-gray-300">{project.star.action}</p>
                    </div>
                    <div>
                      <span className="font-bold text-white">Result:</span>
                      <p className={`${colors.text} font-semibold`}>{project.star.result}</p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="text-center p-2 bg-gray-800/50 rounded-lg border border-gray-700/50"
                      >
                        <span className={`text-sm font-bold ${colors.text}`}>{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <button className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 ${colors.bg} border ${colors.badgeBorder} rounded-lg ${colors.text} hover:bg-gray-800/80 transition-all duration-300`}>
                      <ExternalLink size={16} />
                      <span className="text-sm font-semibold">Demo</span>
                    </button>
                    <button className={`flex items-center justify-center gap-2 px-4 py-2 ${colors.bg} border ${colors.badgeBorder} rounded-lg ${colors.text} hover:bg-gray-800/80 transition-all duration-300`}>
                      <Github size={16} />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-xl bg-gray-900/70 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <div className="text-4xl font-bold text-cyan-400 mb-2">3</div>
            <div className="text-gray-300 text-sm">Major Projects</div>
          </div>
          <div className="p-6 rounded-xl bg-gray-900/70 backdrop-blur-xl border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <div className="text-4xl font-bold text-purple-400 mb-2">500K+</div>
            <div className="text-gray-300 text-sm">Transactions Processed</div>
          </div>
          <div className="p-6 rounded-xl bg-gray-900/70 backdrop-blur-xl border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
            <div className="text-4xl font-bold text-green-400 mb-2">15-17%</div>
            <div className="text-gray-300 text-sm">Avg RMSE Reduction</div>
          </div>
          <div className="p-6 rounded-xl bg-gray-900/70 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <div className="text-4xl font-bold text-cyan-400 mb-2">1%+</div>
            <div className="text-gray-300 text-sm">Revenue Impact</div>
          </div>
        </div>

      </div>
    </section>
  )
}