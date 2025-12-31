export default function Experience() {
  const experiences = [
    {
      company: "Saayam For All",
      location: "California, USA",
      role: "Machine Learning Engineer",
      period: "Aug 2025 - Nov 2025",
      type: "current",
      achievements: [
        "Developed a reinforcement learning-driven recommendation system using contextual bandits and deep Q-learning alongside traditional ML models (XGBoost, random forests) to match volunteers with projects based on skills, availability, and preferences.",
        "Built real-time feature engineering pipelines with online learning, dynamically updating models for >5,000 volunteers, reducing manual assignment effort by 50%.",
        "Applied feedback-driven optimization to improve engagement, achieving >90% of projects matched to suitable volunteers and increasing volunteer participation rate by 20%."
      ],
      color: "cyan",
      icon: "🚀"
    },
    {
      company: "Tata Consultancy Services",
      location: "Verizon (Hyderabad, India)",
      role: "Machine Learning Engineer",
      period: "Jun 2021 - Sep 2023",
      type: "past",
      achievements: [
        "Designed and deployed scalable ML pipelines in Python and Java for distributed data processing, handling 10,000+ transactions per minute.",
        "Developed predictive analytics and online learning models to optimize network performance and resource allocation, applying data-driven decision strategies inspired by economic principles, reducing downtime by 45%.",
        "Implemented real-time feature engineering workflows and integrated them into 20+ ML microservices.",
        "Hosted ML workflows on AWS, resolving 200+ production issues and improving system efficiency by 15%, while incorporating basic optimization and resource allocation strategies.",
        "Mentored 10+ team members in ML pipeline design, feature engineering and deployment best practices, boosting team productivity by 20%."
      ],
      color: "purple",
      icon: "⚡"
    }
  ]

  return (
    <section 
      id="experience" 
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

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#06b6d440_1px,transparent_1px),linear-gradient(to_bottom,#06b6d440_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
              Professional Journey
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
          <p className="mt-6 text-gray-300 text-lg">Building intelligent systems, one algorithm at a time</p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central line with gradient */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]"></div>

         {experiences.map((exp, index) => (
  <div
    key={index}
    className="relative mb-16 pl-20 md:pl-0 md:ml-8"
  >
    {/* Timeline dot */}
    <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-8 w-6 h-6 rounded-full border-4 ${
      exp.type === 'current'
        ? 'border-cyan-400 bg-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.8)]'
        : 'border-purple-400 bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]'
    } z-20`}>
      <div className={`absolute inset-0 rounded-full ${
        exp.type === 'current' ? 'bg-cyan-400' : 'bg-purple-400'
      } animate-ping opacity-50`}></div>
    </div>

    {/* Experience Card */}
    <div className={`group relative p-8 rounded-2xl bg-gray-900/70 backdrop-blur-xl border-2 ${
      exp.color === 'cyan'
        ? 'border-cyan-500/40 hover:border-cyan-400/70 shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)]'
        : 'border-purple-500/40 hover:border-purple-400/70 shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)]'
    } transition-all duration-500 overflow-hidden md:mr-8`}>

      {/* Corner accents */}
      <div className={`absolute top-0 right-0 w-20 h-20 ${
        exp.color === 'cyan' ? 'border-cyan-400' : 'border-purple-400'
      } border-t-4 border-r-4 rounded-tr-2xl opacity-50`}></div>

      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        exp.color === 'cyan' ? 'from-cyan-500/10' : 'from-purple-500/10'
      } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-14 h-14 rounded-xl ${
            exp.color === 'cyan'
              ? 'bg-cyan-500/20 border-cyan-400/40'
              : 'bg-purple-500/20 border-purple-400/40'
          } border flex items-center justify-center text-3xl ${
            exp.color === 'cyan'
              ? 'shadow-[0_0_20px_rgba(34,211,238,0.4)]'
              : 'shadow-[0_0_20px_rgba(168,85,247,0.4)]'
          } flex-shrink-0`}>
            {exp.icon}
          </div>

          <div className="flex-grow">
            <h3 className={`text-2xl font-bold ${
              exp.color === 'cyan' ? 'text-cyan-300' : 'text-purple-300'
            } mb-1 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]`}>
              {exp.role}
            </h3>
            <p className="text-xl font-semibold text-white mb-1">{exp.company}</p>
            <p className="text-sm text-gray-400">{exp.location}</p>
          </div>
        </div>

        {/* Period badge */}
        <div className={`inline-block px-4 py-2 rounded-full ${
          exp.color === 'cyan'
            ? 'bg-cyan-500/20 border-cyan-400/40 text-cyan-300'
            : 'bg-purple-500/20 border-purple-400/40 text-purple-300'
        } border text-sm font-semibold mb-4`}>
          {exp.period}
        </div>

        {/* Achievements */}
        <div className="space-y-3">
          {exp.achievements.map((achievement, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className={`w-2 h-2 rounded-full ${
                exp.color === 'cyan' ? 'bg-cyan-400' : 'bg-purple-400'
              } mt-2 flex-shrink-0 ${
                exp.color === 'cyan'
                  ? 'shadow-[0_0_8px_rgba(34,211,238,0.8)]'
                  : 'shadow-[0_0_8px_rgba(168,85,247,0.8)]'
              }`}></div>
              <p className="text-gray-200 leading-relaxed">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
))}

        </div>

        {/* Bottom stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-xl bg-gray-900/70 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <div className="text-4xl font-bold text-cyan-400 mb-2">2+</div>
            <div className="text-gray-300 text-sm">Years Experience</div>
          </div>
          <div className="p-6 rounded-xl bg-gray-900/70 backdrop-blur-xl border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <div className="text-4xl font-bold text-purple-400 mb-2">5K+</div>
            <div className="text-gray-300 text-sm">Volunteers Matched</div>
          </div>
          <div className="p-6 rounded-xl bg-gray-900/70 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <div className="text-4xl font-bold text-cyan-400 mb-2">45%</div>
            <div className="text-gray-300 text-sm">Downtime Reduced</div>
          </div>
          <div className="p-6 rounded-xl bg-gray-900/70 backdrop-blur-xl border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <div className="text-4xl font-bold text-purple-400 mb-2">20+</div>
            <div className="text-gray-300 text-sm">ML Microservices</div>
          </div>
        </div>

      </div>
    </section>
  )
}