import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans flex flex-col relative overflow-hidden">
      {/* Ambient background blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-script text-3xl font-bold tracking-wide text-white hover:text-cyan-400 transition-colors duration-300 cursor-default">
            AB TALKS
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow relative z-10 flex flex-col items-center justify-center py-12 px-6 w-full">
        <div className="max-w-4xl w-full">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-6 text-center text-white/30 text-xs relative z-10">
        <p>© {new Date().getFullYear()} AB TALKS. Built for the cyberpunk era.</p>
      </footer>
    </div>
  );
};

export default Layout;