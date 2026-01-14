import React, { useState, useEffect } from 'react';
import { Github } from 'lucide-react';

const BrutalistPortfolio = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const skills = [
    'REACT', 'TYPESCRIPT', 'NODE.JS', 'PYTHON', 'GO', 'RUST',
    'POSTGRESQL', 'MONGODB', 'REDIS', 'DOCKER', 'AWS', 'GIT'
  ];

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Header */}
      <header className="border-b-8 border-black p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter">ZORBIONS</h1>
            <p className="text-sm md:text-base mt-1">DEVELOPER • BUILDER • CREATOR</p>
          </div>
          <div>
            <a 
              href="https://github.com/zorbions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 md:px-6 py-2 md:py-3 bg-black text-white font-bold border-4 border-black hover:bg-white hover:text-black transition-all text-sm md:text-base inline-block"
            >
              GITHUB
            </a>
          </div>
        </div>
      </header>

      {/* Bento Grid */}
      <main className="max-w-7xl mx-auto p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        
        {/* Hero Box */}
        <div className="md:col-span-2 lg:col-span-2 border-8 border-black p-6 md:p-8 bg-black text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            BUILDING THE FUTURE, ONE COMMIT AT A TIME
          </h2>
          <p className="text-base md:text-lg mb-6">
            Developer focused on creating robust, scalable solutions. 
            Currently exploring new technologies and building innovative projects.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white text-black font-bold text-xs md:text-sm">AVAILABLE</span>
            <span className="px-3 py-1 bg-white text-black font-bold text-xs md:text-sm">BRAZIL</span>
            <span className="px-3 py-1 bg-white text-black font-bold text-xs md:text-sm">2026</span>
          </div>
        </div>

        {/* Clock Box */}
        <div className="border-8 border-black p-6 md:p-8 bg-yellow-300">
          <div className="text-xs md:text-sm font-bold mb-2">LOCAL TIME</div>
          <div className="text-3xl md:text-4xl font-black">
            {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
          </div>
          <div className="text-xs md:text-sm mt-2">
            {time.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
          </div>
        </div>

        {/* Status Box */}
        <div className="border-8 border-black p-6 md:p-8 bg-red-500 text-white">
          <div className="text-xs md:text-sm font-bold mb-2">STATUS</div>
          <div className="text-2xl md:text-3xl font-black">ACTIVELY BUILDING</div>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-3 h-3 md:w-4 md:h-4 bg-white animate-pulse rounded-full"></div>
            <span className="text-xs md:text-sm">ONLINE NOW</span>
          </div>
        </div>

        {/* Skills Box */}
        <div className="md:col-span-3 lg:col-span-4 border-8 border-black p-6 md:p-8 bg-blue-400">
          <h3 className="text-xl md:text-2xl font-black mb-4">TECHNICAL STACK</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
            {skills.map((skill, i) => (
              <div key={i} className="bg-black text-white px-3 py-2 font-bold text-center text-xs md:text-sm">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* About Box */}
        <div className="md:col-span-2 border-8 border-black p-6 md:p-8 bg-green-400">
          <h3 className="text-xl md:text-2xl font-black mb-4">ABOUT ME</h3>
          <p className="text-sm md:text-base mb-3">
            Developer passionate about creating impactful technology. 
            I focus on writing clean, efficient code and building solutions that matter.
          </p>
          <p className="text-sm md:text-base mb-4">
            Currently exploring new projects and always open to collaboration on interesting ideas.
          </p>
          <div className="flex flex-wrap gap-2">
            <div className="px-3 py-1 bg-black text-white font-bold text-xs md:text-sm">MINIMALIST</div>
            <div className="px-3 py-1 bg-black text-white font-bold text-xs md:text-sm">FUNCTIONAL</div>
            <div className="px-3 py-1 bg-black text-white font-bold text-xs md:text-sm">EFFICIENT</div>
          </div>
        </div>

        {/* Contact Box */}
        <div className="border-8 border-black p-6 md:p-8 bg-purple-400">
          <h3 className="text-xl md:text-2xl font-black mb-4">GET IN TOUCH</h3>
          <div className="space-y-3">
            <a 
              href="https://github.com/zorbions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline text-sm md:text-base font-bold"
            >
              <Github size={20} />
              <span>@zorbions</span>
            </a>
            <div className="text-xs md:text-sm">
              Open to collaborations, freelance work, and interesting projects.
            </div>
          </div>
        </div>

        {/* Philosophy Box */}
        <div className="border-8 border-black p-6 md:p-8 bg-orange-400">
          <h3 className="text-xl md:text-2xl font-black mb-4">PHILOSOPHY</h3>
          <blockquote className="text-sm md:text-base font-bold">
            "CODE IS POETRY. DESIGN IS FUNCTION. SIMPLICITY IS POWER."
          </blockquote>
          <div className="mt-4 text-xs md:text-sm">
            Build fast. Ship faster. Iterate always.
          </div>
        </div>

      </main>
    </div>
  );
};

export default BrutalistPortfolio;