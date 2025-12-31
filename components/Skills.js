import { Code, Brain, Database, Zap, Cloud, Cpu } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="w-10 h-10 text-cyan-400" />,
      title: "Programming Languages",
      skills: ["Python", "C", "C++", "CUDA"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: <Brain className="w-10 h-10 text-purple-400" />,
      title: "RL & ML Frameworks",
      skills: ["PyTorch", "TensorFlow", "Ray RLlib", "Stable-Baselines3", "TF-Agents", "Scikit-learn"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Database className="w-10 h-10 text-cyan-400" />,
      title: "Data Engineering",
      skills: ["NumPy", "Pandas", "Apache Spark", "Ray", "Streaming Pipelines", "Online Learning"],
      color: "from-cyan-500 to-teal-600"
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-400" />,
      title: "Optimization & Analytics",
      skills: ["Statistics", "Linear Programming", "Operations Research", "Causal Inference", "Game Theory"],
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: <Cloud className="w-10 h-10 text-green-400" />,
      title: "Cloud & MLOps",
      skills: ["AWS", "Docker", "Kubernetes", "FastAPI", "Model Monitoring", "A/B Testing", "Git", "CI/CD"],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <Cpu className="w-10 h-10 text-pink-400" />,
      title: "Deep Learning",
      skills: ["Neural Networks", "CNNs", "RNNs", "Transformers", "NLP", "Computer Vision", "GPU Optimization"],
      color: "from-red-500 to-pink-600"
    }
  ]

  return (
    <section
      id="skills"
      className="py-20 relative"
      style={{
        backgroundImage: 'url(/backgroundPic.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Technical Arsenal
          </h2>
          <p className="text-lg text-cyan-100 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable AI systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 border border-cyan-500/30 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Icon with animated background */}
              <div className="relative mb-4">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300`}></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 w-fit shadow-lg border border-cyan-500/20">
                  {category.icon}
                </div>
              </div>

              <h3 className={`text-xl font-bold mb-4 text-cyan-300 drop-shadow-md`}>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-gray-800/60 backdrop-blur-sm text-cyan-100 rounded-full border border-cyan-500/40 hover:border-cyan-400 hover:bg-gray-700/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.color} opacity-10 rounded-bl-full`}></div>
            </div>
          ))}
        </div>

        {/* Bottom stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-900/80 backdrop-blur-md rounded-xl p-6 shadow-xl border border-cyan-500/30">
            <div className="text-3xl font-bold text-cyan-400 mb-2">6+</div>
            <div className="text-cyan-100 text-sm">Skill Categories</div>
          </div>
          <div className="bg-gray-900/80 backdrop-blur-md rounded-xl p-6 shadow-xl border border-purple-500/30">
            <div className="text-3xl font-bold text-purple-400 mb-2">40+</div>
            <div className="text-purple-100 text-sm">Technologies</div>
          </div>
          <div className="bg-gray-900/80 backdrop-blur-md rounded-xl p-6 shadow-xl border border-cyan-500/30">
            <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
            <div className="text-cyan-100 text-sm">Programming Languages</div>
          </div>
          <div className="bg-gray-900/80 backdrop-blur-md rounded-xl p-6 shadow-xl border border-pink-500/30">
            <div className="text-3xl font-bold text-pink-400 mb-2">∞</div>
            <div className="text-pink-100 text-sm">Possibilities</div>
          </div>
        </div>
      </div>
    </section>
  )
}