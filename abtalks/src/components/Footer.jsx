import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        
        {/* 1. Brand Name */}
        <div className="text-white font-medium text-base">
          ABTalks
        </div>

        {/* 2. Social Media Icons (Exact match from image) */}
        <div className="flex items-center gap-4 text-purple-400">
          {/* Instagram */}
          <a href="#" className="hover:text-purple-300 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          {/* LinkedIn */}
          <a href="#" className="hover:text-purple-300 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          {/* YouTube */}
          <a href="#" className="hover:text-purple-300 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          {/* X (Twitter) */}
          <a href="#" className="hover:text-purple-300 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          {/* Discord / Community */}
          <a href="#" className="hover:text-purple-300 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.435 13.435 0 0 0-.585 1.259 18.138 18.138 0 0 0-5.533 0 13.175 13.175 0 0 0-.6-1.26.077.077 0 0 0-.078-.037 19.686 19.686 0 0 0-4.886 1.516.07.07 0 0 0-.032.027 19.982 19.982 0 0 0-1.304 11.972.075.075 0 0 0 .029.053 20.298 20.298 0 0 0 5.062 2.368.073.073 0 0 0 .079-.037 14.995 14.995 0 0 0 1.004-2.045.075.075 0 0 0-.041-.096 13.67 13.67 0 0 1-1.695-.809.076.076 0 0 1-.01-.129 11.582 11.582 0 0 0 2.919-1.313.074.074 0 0 0 .008-.12 13.89 13.89 0 0 1-1.503-1.197.076.076 0 0 1 .075-.127 18.552 18.552 0 0 0 4.936 1.332 18.552 18.552 0 0 0 4.936-1.332.075.075 0 0 1 .077.128 14.519 14.519 0 0 1-1.507 1.197.074.074 0 0 0 .008.12 11.678 11.678 0 0 0 2.918 1.311.075.075 0 0 1-.01.13 13.09 13.09 0 0 1-1.694.807.075.075 0 0 0-.042.096 15.236 15.236 0 0 0 1.007 2.045.075.075 0 0 0 .077.037 20.3 20.3 0 0 0 5.063-2.368.073.073 0 0 0 .029-.052 19.957 19.957 0 0 0-1.302-11.968.07.07 0 0 0-.033-.027z"/></svg>
          </a>
        </div>

        {/* 3. Support Email */}
        <div className="flex items-center gap-2 text-sm text-white/70">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <span className="text-white/70">For any issue or enquiry: <a href="mailto:team@abtalks.in" className="text-blue-400 hover:underline">team@abtalks.in</a></span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;