import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-6 text-center text-white/30 text-xs relative z-10">
      <p>© {currentYear} AB TALKS. Built for the cyberpunk era.</p>
    </footer>
  );
};

export default Footer;