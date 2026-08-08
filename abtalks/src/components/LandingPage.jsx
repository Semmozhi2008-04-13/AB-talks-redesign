import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-900 text-white overflow-x-hidden">
      
      {/* --- Navbar --- */}
      <header className="border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <span className="text-2xl">⚡</span> abtalks
          </div>
          <button className="hidden md:block text-sm font-medium text-white/80 hover:text-white transition">
            Login
          </button>
        </div>
      </header>

      {/* --- Hero Section --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Turn Your GitHub Code into a <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-400">
            Thriving LinkedIn Career
          </span>
        </h1>
        <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto mb-10 opacity-90">
          Join the community that bridges the gap between open-source contributions 
          and professional networking, automatically.
        </p>

        {/* --- Bright CTA Button with Impactful Text --- */}
        <div className="flex justify-center gap-4">
          <button className="relative inline-flex items-center justify-center px-8 py-3.5 text-lg font-bold text-indigo-900 transition-all duration-200 bg-amber-400 rounded-full hover:bg-amber-300 hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.4)]">
            Build Your Developer Legacy
            <span className="ml-2">→</span>
          </button>
        </div>
      </section>

      {/* --- Trust Metrics & Impact Stats --- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
          
          {/* Real-world outcomes rather than just student counts */}
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black">5,000+</span>
            <span className="text-indigo-200 font-medium text-sm uppercase tracking-wider mt-1">Projects Built & Published</span>
          </div>
          <div className="w-px h-10 bg-white/20 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black">850+</span>
            <span className="text-indigo-200 font-medium text-sm uppercase tracking-wider mt-1">Careers Successfully Launched</span>
          </div>
          
          {/* Community Avatars (Feeling of a strong, active community) */}
          <div className="flex items-center -space-x-3 mt-4 md:mt-0">
            <img className="w-10 h-10 rounded-full border-2 border-indigo-600" src="https://i.pravatar.cc/150?img=1" alt="Avatar" />
            <img className="w-10 h-10 rounded-full border-2 border-indigo-600" src="https://i.pravatar.cc/150?img=2" alt="Avatar" />
            <img className="w-10 h-10 rounded-full border-2 border-indigo-600" src="https://i.pravatar.cc/150?img=3" alt="Avatar" />
            <img className="w-10 h-10 rounded-full border-2 border-indigo-600" src="https://i.pravatar.cc/150?img=4" alt="Avatar" />
            <div className="w-10 h-10 rounded-full border-2 border-indigo-600 bg-indigo-800 flex items-center justify-center text-xs font-bold text-white">
              +4k
            </div>
          </div>
          <span className="text-white/80 text-sm font-medium mt-2 md:mt-0">Contributing to the future</span>
        </div>
      </section>

      {/* --- 3-Step Workflow --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Your GitHub → LinkedIn Workflow</h2>
          <p className="text-indigo-200 max-w-xl mx-auto">Stop manually updating your profile. Let your code speak for itself in three simple steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative p-8 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl text-center group hover:bg-white/20 transition duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 text-amber-400 text-3xl mb-4 group-hover:scale-110 transition">🐙</div>
            <h3 className="text-xl font-bold mb-2">1. Connect GitHub</h3>
            <p className="text-indigo-200 text-sm leading-relaxed">
              Securely sync your repositories and contribution graph. We read your best code, not just your commit messages.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative p-8 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl text-center group hover:bg-white/20 transition duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 text-amber-400 text-3xl mb-4 group-hover:scale-110 transition">💼</div>
            <h3 className="text-xl font-bold mb-2">2. Prove Your Worth</h3>
            <p className="text-indigo-200 text-sm leading-relaxed">
              Our AI highlights your most impressive work. Create a hiring portfolio that showcases real-world impact and skills.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative p-8 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl text-center group hover:bg-white/20 transition duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 text-amber-400 text-3xl mb-4 group-hover:scale-110 transition">🔗</div>
            <h3 className="text-xl font-bold mb-2">3. Automate Your Reach</h3>
            <p className="text-indigo-200 text-sm leading-relaxed">
              Whenever you push a meaningful project, we generate a compelling LinkedIn post that gets your talent noticed by recruiters.
            </p>
          </div>
        </div>
        
        {/* Bottom Secondary CTA */}
        <div className="mt-12 text-center">
          <button className="text-white font-semibold border-2 border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-indigo-800 transition">
            See student success stories →
          </button>
        </div>
      </section>

      {/* --- NEW SECTION: Real Success Stories (IMPACT) --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Real Results from Real Developers</h2>
          <p className="text-indigo-200 max-w-xl mx-auto">Meet students who turned open-source contributions into dream careers.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
            <img className="w-20 h-20 rounded-full mb-4 border-4 border-amber-400" src="https://i.pravatar.cc/150?img=11" alt="Student" />
            <blockquote className="text-indigo-100 mb-4 italic leading-relaxed text-sm">"I went from 0 commits to a full-stack role at a YC startup in 6 months. abtalks made my work visible and got me 10+ recruiter DMs."</blockquote>
            <cite className="font-bold text-white not-italic">Sarah Jenkins</cite>
            <span className="text-xs text-amber-300 mt-1 font-medium">Software Engineer @ UseLagom</span>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
            <img className="w-20 h-20 rounded-full mb-4 border-4 border-amber-400" src="https://i.pravatar.cc/150?img=33" alt="Student" />
            <blockquote className="text-indigo-100 mb-4 italic leading-relaxed text-sm">"Whenever I pushed a new open-source contribution, abtalks automatically posted it to LinkedIn. It completely transformed my personal brand."</blockquote>
            <cite className="font-bold text-white not-italic">Marcus Rodriguez</cite>
            <span className="text-xs text-amber-300 mt-1 font-medium">Open Source Maintainer</span>
          </div>

          {/* Testimonial 3 */}
          <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
            <img className="w-20 h-20 rounded-full mb-4 border-4 border-amber-400" src="https://i.pravatar.cc/150?img=59" alt="Student" />
            <blockquote className="text-indigo-100 mb-4 italic leading-relaxed text-sm">"The GitHub to LinkedIn pipeline is a game-changer. I don't have to write boring updates anymore—my code does the talking."</blockquote>
            <cite className="font-bold text-white not-italic">Aiko Tanaka</cite>
            <span className="text-xs text-amber-300 mt-1 font-medium">Frontend Lead @ Lumos</span>
          </div>
        </div>
      </section>

      {/* --- Minimal Footer --- */}
      <footer className="border-t border-white/10 py-8 text-center text-indigo-200 text-sm">
        <p>© {new Date().getFullYear()} abtalks. Built for the open-source community.</p>
      </footer>
    </div>
  );
};

export default LandingPage;