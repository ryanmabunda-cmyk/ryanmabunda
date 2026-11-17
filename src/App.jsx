import React from 'react';

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`;

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* 1. Navigation Bar */}
      <header className="sticky top-0 z-50 bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-lg tracking-tight hover:text-indigo-400 transition-colors">
            Ryan Mabunda
          </a>
          <nav className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="#about" className="hover:text-zinc-100 transition-colors">About</a>
            <a href="#skills" className="hover:text-zinc-100 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-zinc-100 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-zinc-100 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* 2. Hero / About Section */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-zinc-800/50 border border-zinc-800 rounded-2xl p-8 shadow-xl">
          <div className="flex justify-center md:justify-start">
            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-indigo-500/50 shadow-lg bg-zinc-700 flex items-center justify-center text-xs text-zinc-400">
              <img src={publicAsset('pictures/profile2.jpeg')} alt="Ryan Mabunda" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-2 space-y-4 text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-white">Hi, I'm Ryan Mabunda</h1>
            <p className="text-indigo-400 font-medium">Web Developer & Content Creator</p>
            <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
              I am a passionate web developer with experience in creating dynamic, responsive websites 
              and applications. I'm also a gamer who streams gameplay live on YouTube and TikTok.
            </p>

            {/* Social Links (YouTube & TikTok) */}
            <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
              {/* YouTube Link */}
              <a 
                href="https://www.youtube.com/@RyanGaming-h5m" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500/40 hover:bg-red-600/30 text-red-400 rounded-lg text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>

              {/* TikTok Link */}
              <a 
                href="https://www.tiktok.com/@ryan.mabunda22?lang=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-700/40 border border-zinc-600 hover:bg-zinc-700 text-zinc-200 rounded-lg text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.13z"/>
                </svg>
                TikTok
              </a>
            </div>

          </div>
        </section>

        {/* 3. Skills Section */}
        <section id="skills" className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white border-b border-zinc-800 pb-3">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["HTML", "CSS", "JavaScript", "React"].map((skill) => (
              <div key={skill} className="bg-zinc-800/50 border border-zinc-800 rounded-xl p-4 text-center hover:border-indigo-500/50 transition-colors">
                <span className="font-medium text-zinc-200">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Projects Section */}
        <section id="projects" className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white border-b border-zinc-800 pb-3">Featured Projects</h2>
          
          {/* Project 1: S.R.O.M */}
          <div className="bg-zinc-800/50 border border-zinc-800 rounded-2xl p-6 md:p-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">S.R.O.M Agricultural Platform</h3>
              <p className="text-zinc-300 text-sm md:text-base">
                An e-commerce and showcase platform built for fresh produce and agricultural goods.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg overflow-hidden border border-zinc-700 bg-zinc-900 aspect-video flex items-center justify-center">
                <img src={publicAsset('pictures/Screenshot 2026-06-12 191305.png')} alt="S.R.O.M 1" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden border border-zinc-700 bg-zinc-900 aspect-video flex items-center justify-center">
                <img src={publicAsset('pictures/project-3.jpeg')} alt="S.R.O.M 2" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden border border-zinc-700 bg-zinc-900 aspect-video flex items-center justify-center">
                <img src={publicAsset('pictures/Screenshot 2026-06-12 191406.png')} alt="S.R.O.M 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Project 2: Ryan Gaming */}
          <div className="bg-zinc-800/50 border border-zinc-800 rounded-2xl p-6 md:p-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Ryan Gaming: Content Creator</h3>
              <p className="text-zinc-300 text-sm md:text-base">  
                Ryan Gaming channel! 🎮 I bring you high-energy gameplay, clutch plays, and the daily grind across Fortnite, and BATTLEFIELD.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg overflow-hidden border border-zinc-700 bg-zinc-900 aspect-video flex items-center justify-center">
                <img src={publicAsset('pictures/youtube3.png')} alt="YouTube Stream 1" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden border border-zinc-700 bg-zinc-900 aspect-video flex items-center justify-center">
                <img src={publicAsset('pictures/youtube2.png')} alt="YouTube Stream 2" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden border border-zinc-700 bg-zinc-900 aspect-video flex items-center justify-center">
                <img src={publicAsset('pictures/youtube1.png')} alt="YouTube Stream 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </section>

        {/* 5. Contact Section */}
        <section id="contact" className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white border-b border-zinc-800 pb-3">Contact Me</h2>
          <div className="bg-zinc-800/50 border border-zinc-800 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <p className="text-zinc-400">Primary Email</p>
              <a href="mailto:ryanmabunda@gmail.com" className="text-indigo-400 hover:underline font-medium">ryanmabunda@gmail.com</a>
            </div>
            <div className="space-y-2">
              <p className="text-zinc-400">Secondary Email</p>
              <a href="mailto:ryanmabunda2205@outlook.com" className="text-indigo-400 hover:underline font-medium">ryanmabunda2205@outlook.com</a>
            </div>
            <div className="space-y-2">
              <p className="text-zinc-400">Phone</p>
              <p className="text-zinc-200 font-medium">+27 71 413 1300</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-20 py-8 text-center text-sm text-zinc-500">
        <p>© 2026 Ryan Mabunda. All rights reserved.</p>
      </footer>
    </div>
  );
}