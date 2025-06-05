import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black py-3  bottom-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <div className="text-xs sm:text-sm text-white/90">
          © {new Date().getFullYear()} Sagecorp. All rights reserved.
        </div>
        <div className="text-xs sm:text-sm text-white/90 mt-2 sm:mt-0">
          Designed &amp; built by <span className="text-blue-400 font-semibold">Sagecorp</span> Development Services
        </div>
      </div>
    </footer>
  );
};

export default Footer;