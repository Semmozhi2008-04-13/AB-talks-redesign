import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    // Apply light mode by default, but switch to dark mode automatically if .dark class is present
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white font-sans flex flex-col relative overflow-hidden transition-colors duration-300">
      {/* Ambient background blobs - only showing in dark mode */}
      <div className="hidden dark:block absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="hidden dark:block absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow relative z-10 flex flex-col items-center justify-center pt-16 px-6 w-full">
        <div className="max-w-4xl w-full">
          {children}
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Layout;