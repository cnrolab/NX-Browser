import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden px-4">
      {/* Background Gradients - Expanded for full width */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] md:w-[120vw] h-[600px] md:h-[800px] bg-blue-600/15 rounded-[100%] blur-[80px] md:blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[100vw] md:w-[80vw] h-[400px] md:h-[600px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none" />

      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-12 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-blue-400 mb-8 md:mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          NX v2.0 现已发布
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60 mb-8 md:mb-10 max-w-7xl"
        >
          隐形于<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">数字世界</span>之中
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 mb-10 md:mb-14"
        >
          <p className="text-lg md:text-2xl text-white/70 max-w-4xl leading-relaxed font-light">
            NX Browser 是专为多账号管理和隐私保护打造的终极指纹浏览器。
          </p>
          <p className="text-lg md:text-2xl text-white/70 max-w-4xl leading-relaxed font-light">
            在 Web3、跨境电商与社交媒体营销中，重塑您的数字身份。
          </p>
          <div className="mt-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm md:text-base font-medium">
            <CheckCircle className="w-4 h-4" />
            <span>永久免费</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center justify-center"
        >
          <a
            href="/NXBrowser_Setup.exe"
            download="NXBrowser_Setup.exe"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 bg-white text-black px-10 py-4 md:px-14 md:py-5 rounded-full text-lg md:text-xl font-bold transition-all hover:bg-gray-100 hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] w-full sm:w-auto"
          >
            立即下载
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-black" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;