export default function About() {
  return (
    <section
      id="about"
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


      {/* Animated particles effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section Title with glow effect */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
        </div>

        {/* Intro Paragraph in glassmorphic container */}
        <div className="max-w-4xl mx-auto mb-16 p-8 rounded-2xl bg-gray-900/40 backdrop-blur-lg border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
          <p className="text-center text-lg md:text-xl text-gray-200 leading-relaxed">
            I'm an AI Engineer passionate about building intelligent systems that solve
            real-world problems. At{" "}
            <span className="font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">
              Saayam For All
            </span>
            , I'm developing a volunteer-matching algorithm that connects people with
            meaningful opportunities using advanced machine learning techniques.
          </p>
        </div>

        {/* Two Cards with holographic effect */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">

          {/* What I Do Card */}
          <div className="group relative p-8 rounded-2xl bg-gray-900/60 backdrop-blur-xl border-2 border-cyan-500/40 shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] hover:border-cyan-400/60 transition-all duration-500 overflow-hidden">

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-cyan-400 rounded-tl-2xl opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-cyan-400 rounded-br-2xl opacity-60"></div>

            {/* Animated gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-2xl font-bold text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                  What I Do
                </h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                I specialize in building AI/ML solutions with a focus on reinforcement
                learning, NLP, and optimization systems. My work spans quantitative
                trading models, customer churn prediction, adaptive pricing engines,
                and intelligent decision-making systems. I thrive on transforming
                complex data challenges into actionable, scalable intelligence.
              </p>
            </div>
          </div>

          {/* My Approach Card */}
          <div className="group relative p-8 rounded-2xl bg-gray-900/60 backdrop-blur-xl border-2 border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] hover:border-purple-400/60 transition-all duration-500 overflow-hidden">

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-purple-400 rounded-tl-2xl opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-purple-400 rounded-br-2xl opacity-60"></div>

            {/* Animated gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-300 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                  My Approach
                </h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                I combine strong mathematical foundations with hands-on deep learning
                expertise. Whether fine-tuning neural networks, optimizing GPU
                performance with CUDA, or architecting end-to-end ML pipelines,
                I focus on building systems that are efficient, scalable, and
                grounded in real-world impact.
              </p>
            </div>
          </div>

        </div>



        {/* Closing Line with subtle glow */}
        <p className="text-center mt-12 text-gray-300 italic text-lg drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
          Always excited to build intelligent systems that create meaningful impact.
        </p>

      </div>
    </section>
  )
}