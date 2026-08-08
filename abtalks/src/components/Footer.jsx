import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 pt-6 pb-4 text-center text-white/70 text-xs border-t border-white/5 relative z-10">
      
      {/* Support Section */}
      <div className="mb-6 space-y-2">
        <p className="text-[11px] text-white/50 leading-relaxed max-w-xs mx-auto">
          For any issue or enquiry regarding the AB Talks hackathon, you can contact the official support team via email at{' '}
          <a href="mailto:team@abtalks.in" className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/30 underline-offset-2 transition-colors">
            team@abtalks.in
          </a>
          {' '}or check updates on the{' '}
          <a href="#" className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/30 underline-offset-2 transition-colors">
            ABTalks Hackathon Portal
          </a>.
        </p>
      </div>

      {/* Official Contact & Support */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-left mb-6 space-y-3">
        <h3 className="text-cyan-400 font-bold text-xs uppercase tracking-wider">Official Contact & Support</h3>
        <ul className="space-y-1.5 text-[11px]">
          <li>
            <span className="text-white/40">Email Inquiry:</span>{' '}
            <a href="mailto:team@abtalks.in" className="text-cyan-400 hover:underline">team@abtalks.in</a>
          </li>
          <li>
            <span className="text-white/40">Website:</span>{' '}
            <a href="#" className="text-cyan-400 hover:underline">ABTalks Hackathon Platform</a>
          </li>
          <li>
            <span className="text-white/40">Community Profile:</span>{' '}
            <a href="#" className="text-cyan-400 hover:underline">ABTalks LinkedIn</a>
          </li>
        </ul>
      </div>

      {/* Event Coordinators */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-left mb-6 space-y-3">
        <h3 className="text-cyan-400 font-bold text-xs uppercase tracking-wider">Event Coordinators</h3>
        <ul className="space-y-1.5 text-[11px]">
          <li className="flex justify-between items-center border-b border-white/5 pb-1.5">
            <span className="text-white/60">Arjun Magre</span>
            <a href="tel:9588443246" className="text-white font-mono hover:text-cyan-400 transition-colors">9588443246</a>
          </li>
          <li className="flex justify-between items-center border-b border-white/5 pb-1.5">
            <span className="text-white/60">Soham Gawande</span>
            <a href="tel:9834401980" className="text-white font-mono hover:text-cyan-400 transition-colors">9834401980</a>
          </li>
          <li className="flex justify-between items-center border-b border-white/5 pb-1.5">
            <span className="text-white/60">Shahvebhau Mule</span>
            <a href="tel:8275033033" className="text-white font-mono hover:text-cyan-400 transition-colors">8275033033</a>
          </li>
          <li className="flex justify-between items-center pt-1">
            <span className="text-white/40">Additional Support Lines</span>
            <span className="text-white font-mono text-[10px]">
              <a href="tel:+919246657908" className="hover:text-cyan-400 transition-colors">+91 92466 57908</a> /{' '}
              <a href="tel:+919246657913" className="hover:text-cyan-400 transition-colors">92466 57913</a>
            </span>
          </li>
        </ul>
      </div>

      {/* Copyright & Branding (Kept your original footer text here) */}
      <div className="mt-4 pt-4 border-t border-white/5 text-[10px] text-white/30">
        <p>© {currentYear} AB TALKS. Built for the 60-day challenge.</p>
      </div>
    </footer>
  );
};

export default Footer;