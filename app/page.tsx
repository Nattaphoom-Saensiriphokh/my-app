import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation Bar */}
      <nav className="backdrop-blur-md bg-slate-900/80 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Portfolio
          </h2>
          <div className="space-x-6 hidden md:flex">
            <a href="#about" className="text-slate-300 hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="text-slate-300 hover:text-cyan-400 transition">Skills</a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-cyan-400 text-lg font-semibold">Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Nattaphoom</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300">
              A passionate student and developer dedicated to creating beautiful and functional digital experiences.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition">
                Get in Touch
              </button>
              <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition">
                View Projects
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-slate-800 rounded-2xl p-2 border border-slate-700 overflow-hidden">
                <Image
                  src="/download.jpg"
                  width={384}
                  height={384}
                  alt="Nattaphoom Saensiriphokh"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 hover:border-cyan-400/50 transition group">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition">
              <span className="text-2xl">👤</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">About Me</h3>
            <p className="text-slate-300 leading-relaxed">
              <span className="font-semibold text-cyan-400">Nattaphoom Saensiriphokh</span>
            </p>
            <p className="text-slate-400 text-sm mt-2">
              Dedicated student passionate about technology and innovation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 hover:border-cyan-400/50 transition group">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Student ID</h3>
            <p className="text-slate-300 font-mono text-lg">
              673450189-9
            </p>
            <p className="text-slate-400 text-sm mt-2">
              Pursuing excellence in education and development.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 hover:border-cyan-400/50 transition group">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition">
              <span className="text-2xl">🌏</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Location</h3>
            <p className="text-slate-300 text-lg">
              Thailand
            </p>
            <p className="text-slate-400 text-sm mt-2">
              Based in the heart of Southeast Asia.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Education
        </h2>
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 md:p-12 hover:border-cyan-400/50 transition">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎓</span>
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    Khon Kaen University
                  </h3>
                  <p className="text-slate-300 mt-1">
                    มหาวิทยาลัยขอนแก่น
                  </p>
                </div>
              </div>
              <div className="pl-12">
                <p className="text-slate-400 text-sm">
                  A leading public university in the northeastern region of Thailand, committed to academic excellence and innovation.
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📚</span>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400">
                    Faculty of Interdisciplinary Studies
                  </h3>
                  <p className="text-slate-300 mt-1">
                    คณะสหวิทยาการ
                  </p>
                </div>
              </div>
              <div className="pl-12">
                <p className="text-slate-400 text-sm">
                  Fostering innovative thinking and collaboration across multiple disciplines to prepare students for modern challenges.
                </p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="mt-8 pt-8 border-t border-slate-700 grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-slate-400">Student ID:</p>
              <p className="text-lg font-mono text-cyan-400">673450189-9</p>
            </div>
            <div className="space-y-2">
              <p className="text-slate-400">Location:</p>
              <p className="text-lg text-slate-300">Khon Kaen, Thailand</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-slate-700 mt-20">
        <div className="text-center">
          <p className="text-slate-400">
            © 2024 Nattaphoom Saensiriphokh. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition">GitHub</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition">LinkedIn</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}