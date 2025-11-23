import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollShowcase from './components/ScrollShowcase';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <ScrollShowcase />
      </main>
      
      <footer className="w-full py-12 bg-black border-t border-white/5 flex justify-center items-center relative z-10 overflow-hidden">
        <span className="text-sm md:text-base tracking-widest font-normal bg-[linear-gradient(to_right,#9ca3af,#ffffff,#9ca3af)] bg-[length:200%_auto] bg-clip-text text-transparent animate-shine cursor-default whitespace-nowrap px-4">
          深圳市南山区像素星球网络工作室
        </span>
      </footer>
    </div>
  );
};

export default App;