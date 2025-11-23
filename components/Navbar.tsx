import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Fingerprint } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-white/10 py-3 md:py-4"
          : "bg-transparent border-transparent py-4 md:py-6"
      )}
    >
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-lg md:text-xl tracking-tight">
          <Fingerprint className="w-6 h-6 md:w-7 md:h-7 text-blue-500" />
          <span>NX Browser</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/NXBrowser_Setup.exe"
            download="NXBrowser_Setup.exe"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            下载
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;