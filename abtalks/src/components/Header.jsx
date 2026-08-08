import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo links back to Home */}
        <Link to="/" className="font-script text-3xl font-bold tracking-wide text-white hover:text-cyan-400 transition-colors duration-300 cursor-default">
          AB TALKS
        </Link>
        
        {/* Dashboard link */}
        <Link 
          to="/dashboard"
          className="hidden md:block bg-purple-700/20 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/10 hover:bg-purple-600/30 transition-colors"
        >
          Dashboard
        </Link>
      </div>
    </header>
  );
};

export default Header;