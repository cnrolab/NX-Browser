import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Fingerprint, Globe, Shield, Lock, AlertTriangle, Cpu, Scan, Server, Wifi, Eye, Network } from 'lucide-react';

const ScrollShowcase: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Extended height for 5 scenes
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // --- SCENE 1: The Exposure (0 - 0.15) ---
    // The initial state where the user is vulnerable
    const s1Opacity = useTransform(scrollYProgress, [0, 0.12, 0.15], [1, 1, 0]);
    const s1Scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.8]);
    const s1Blur = useTransform(scrollYProgress, [0.1, 0.15], ["0px", "10px"]);

    // --- SCENE 2: Data Leaks (0.15 - 0.35) ---
    // Visualizing parameters leaking from the user
    const s2Opacity = useTransform(scrollYProgress, [0.15, 0.18, 0.32, 0.35], [0, 1, 1, 0]);
    const s2Scale = useTransform(scrollYProgress, [0.15, 0.35], [0.9, 1.1]);
    // Leak items spreading out
    const leakSpread = useTransform(scrollYProgress, [0.15, 0.25], [0, 150]);

    // --- SCENE 3: The Masking Process (0.35 - 0.55) ---
    // The existing scanning/code animation
    const s3Opacity = useTransform(scrollYProgress, [0.35, 0.38, 0.52, 0.55], [0, 1, 1, 0]);
    const s3Scale = useTransform(scrollYProgress, [0.35, 0.55], [0.9, 1.0]);
    const scanLineTop = useTransform(scrollYProgress, [0.38, 0.52], ["0%", "100%"]);

    // --- SCENE 4: Global Network Routing (0.55 - 0.75) ---
    // Showing the connection bouncing through nodes
    const s4Opacity = useTransform(scrollYProgress, [0.55, 0.58, 0.72, 0.75], [0, 1, 1, 0]);
    const s4Rotate = useTransform(scrollYProgress, [0.55, 0.75], [0, 90]);
    const s4NodeScale = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);

    // --- SCENE 5: Result (0.75 - 1.00) ---
    // Final clean profiles
    const s5Opacity = useTransform(scrollYProgress, [0.75, 0.8], [0, 1]);
    const s5Y = useTransform(scrollYProgress, [0.75, 1], [50, 0]);

    return (
        <section ref={containerRef} className="relative h-[500vh] bg-black font-sans">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

                {/* Background Grid & Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none"></div>

                {/* --- SCENE 1: The Vulnerability --- */}
                <motion.div
                    style={{ opacity: s1Opacity, scale: s1Scale, filter: `blur(${s1Blur})` }}
                    className="absolute flex flex-col items-center justify-center text-center p-6 w-full"
                >
                    <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 md:mb-10 rounded-full border-2 border-red-500/30 flex items-center justify-center bg-red-500/5 shadow-[0_0_80px_rgba(239,68,68,0.2)]">
                        <Fingerprint className="text-red-500 w-20 h-20 md:w-[100px] md:h-[100px]" />
                        <div className="absolute inset-0 border-t-2 border-red-500 rounded-full animate-spin [animation-duration:3s]"></div>
                        <div className="absolute -right-8 md:-right-12 top-0 bg-red-900/80 text-red-200 px-3 py-1 rounded text-[10px] md:text-xs font-mono border border-red-500/30">
                            TRACKING ID: #X92-11
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 text-white tracking-tight">
                        <span className="text-red-500">真实指纹</span> 已被暴露
                    </h2>
                    <p className="text-lg md:text-2xl text-white/50 max-w-2xl px-4">
                        Web 网站正在通过 Canvas、WebGL 和 AudioContext 读取您的唯一硬件特征。
                    </p>
                </motion.div>

                {/* --- SCENE 2: Data Leak Analysis --- */}
                <motion.div
                    style={{ opacity: s2Opacity, scale: s2Scale }}
                    className="absolute w-full flex flex-col items-center justify-center px-4"
                >
                    <div className="relative w-[300px] md:w-[600px] h-[300px] md:h-[600px] flex items-center justify-center scale-75 md:scale-100">
                        {/* Center User */}
                        <div className="absolute z-20 w-24 h-24 md:w-32 md:h-32 bg-white/5 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-xl">
                            <Eye size={32} className="text-white md:w-12 md:h-12" />
                        </div>

                        {/* Leaking Data Points */}
                        {[
                            { icon: Cpu, label: "Concurrency", angle: 0 },
                            { icon: Globe, label: "Timezone", angle: 60 },
                            { icon: Wifi, label: "Local IP", angle: 120 },
                            { icon: Scan, label: "Canvas", angle: 180 },
                            { icon: Server, label: "User Agent", angle: 240 },
                            { icon: AlertTriangle, label: "Fonts", angle: 300 },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                style={{
                                    x: useTransform(leakSpread, (val) => Math.cos((item.angle * Math.PI) / 180) * (val as number * 1.5)),
                                    y: useTransform(leakSpread, (val) => Math.sin((item.angle * Math.PI) / 180) * (val as number * 1.5)),
                                }}
                                className="absolute flex flex-col items-center gap-2 z-10"
                            >
                                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                                    <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div className="text-[10px] md:text-xs font-mono text-red-400 bg-red-900/30 px-2 py-1 rounded whitespace-nowrap border border-red-500/20">
                                    {item.label}
                                </div>
                            </motion.div>
                        ))}

                        {/* Pulsing Rings */}
                        <div className="absolute inset-0 border border-red-500/10 rounded-full scale-50 animate-ping [animation-duration:2s]"></div>
                        <div className="absolute inset-0 border border-red-500/10 rounded-full scale-75 animate-ping [animation-duration:3s]"></div>
                    </div>
                    <h2 className="mt-4 md:mt-8 text-3xl md:text-5xl font-bold text-center">
                        <span className="text-red-500">50+ 维度</span> 参数泄露
                    </h2>
                </motion.div>

                {/* --- SCENE 3: The Masking Process --- */}
                <motion.div
                    style={{ opacity: s3Opacity, scale: s3Scale }}
                    className="absolute w-full max-w-6xl px-4 md:px-6 flex flex-col items-center"
                >
                    <div className="relative w-full h-[400px] md:h-[500px] bg-[#050505] border border-blue-500/30 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.15)]">
                        {/* Header */}
                        <div className="absolute top-0 left-0 right-0 h-10 md:h-12 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 z-20">
                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/50"></div>
                            <div className="ml-4 text-[10px] md:text-xs font-mono text-blue-400 truncate">nx_kernel_injector.js</div>
                        </div>

                        {/* Code Background */}
                        <div className="absolute inset-0 pt-14 px-4 md:px-8 text-xs md:text-sm font-mono text-blue-500/30 overflow-hidden leading-loose font-light opacity-50 md:opacity-100">
                            {Array.from({ length: 25 }).map((_, i) => (
                                <div key={i} className="whitespace-pre">
                                    {`<div id="canvas-noise-${i}">injecting_noise_vector(seed: ${Math.random().toString(36).substring(7)});</div>`}
                                </div>
                            ))}
                        </div>

                        {/* Scanning Line */}
                        <motion.div
                            style={{ top: scanLineTop }}
                            className="absolute left-0 w-full h-1 bg-blue-400 shadow-[0_0_40px_rgba(59,130,246,0.8)] z-10 box-content border-y border-blue-300/50"
                        />

                        <div className="absolute inset-0 flex items-center justify-center z-20 p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full md:w-auto">
                                <div className="bg-black/80 border border-blue-500/50 p-6 md:p-8 rounded-xl md:rounded-2xl backdrop-blur-md flex flex-col items-center min-w-[unset] md:min-w-[200px]">
                                    <Shield className="w-10 h-10 md:w-12 md:h-12 text-blue-400 mb-3 md:mb-4" />
                                    <span className="text-blue-300 text-base md:text-lg font-semibold">内核级混淆</span>
                                    <span className="text-white/40 text-[10px] md:text-xs mt-1 md:mt-2">Chromium 源码修改</span>
                                </div>
                                <div className="bg-black/80 border border-blue-500/50 p-6 md:p-8 rounded-xl md:rounded-2xl backdrop-blur-md flex flex-col items-center min-w-[unset] md:min-w-[200px]">
                                    <Cpu className="w-10 h-10 md:w-12 md:h-12 text-blue-400 mb-3 md:mb-4" />
                                    <span className="text-blue-300 text-base md:text-lg font-semibold">硬件模拟</span>
                                    <span className="text-white/40 text-[10px] md:text-xs mt-1 md:mt-2">GPU / Audio / RAM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="mt-8 md:mt-12 text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-center">
                        正在重构数字身份...
                    </h2>
                </motion.div>

                {/* --- SCENE 4: Global Network --- */}
                <motion.div
                    style={{ opacity: s4Opacity }}
                    className="absolute w-full flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Wrapper to scale down huge graphic on mobile */}
                    <div className="scale-[0.45] sm:scale-75 md:scale-100 origin-center flex items-center justify-center">
                        <div className="relative w-[800px] h-[600px] flex items-center justify-center perspective-1000">
                            {/* Central Hub */}
                            <motion.div
                                style={{ rotate: s4Rotate }}
                                className="absolute w-[500px] h-[500px] border border-white/5 rounded-full flex items-center justify-center"
                            >
                                <div className="absolute inset-0 border border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                                <div className="absolute w-[350px] h-[350px] border border-white/10 rounded-full"></div>
                            </motion.div>

                            <div className="z-10 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(37,99,235,0.6)]">
                                <Network size={40} className="text-white" />
                            </div>

                            {/* Nodes */}
                            {[
                                { x: -200, y: -100, label: "Proxy US", delay: 0 },
                                { x: 200, y: -100, label: "Proxy EU", delay: 0.2 },
                                { x: -150, y: 150, label: "Proxy ASIA", delay: 0.4 },
                                { x: 150, y: 150, label: "Proxy CN", delay: 0.6 },
                            ].map((node, i) => (
                                <motion.div
                                    key={i}
                                    style={{ scale: s4NodeScale }}
                                    className="absolute flex flex-col items-center gap-3"
                                    initial={{ x: node.x, y: node.y }}
                                >
                                    <div className="w-12 h-12 bg-[#111] border border-white/20 rounded-xl flex items-center justify-center relative">
                                        <Server size={20} className="text-white/70" />
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-black"></div>
                                    </div>
                                    <div className="text-xs font-mono text-white/50">{node.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-bold text-white text-center mt-4 md:mt-8 px-4">
                        全球 <span className="text-blue-500">原生 IP</span> 纯净环境
                    </h2>
                </motion.div>

                {/* --- SCENE 5: Result --- */}
                <motion.div
                    style={{ opacity: s5Opacity, y: s5Y }}
                    className="absolute flex flex-col items-center justify-center w-full max-w-[1800px] px-4 md:px-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16 w-full max-w-6xl">
                        {[
                            { id: 'Profile #921', region: 'United Kingdom', ip: '192.168.X.X', score: '100%', color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
                            { id: 'Profile #392', region: 'California, US', ip: '10.0.X.X', score: '100%', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
                            { id: 'Profile #882', region: 'Tokyo, JP', ip: '172.16.X.X', score: '100%', color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
                        ].map((item) => (
                            <div key={item.id} className={`relative p-6 md:p-8 rounded-2xl md:rounded-3xl border ${item.border} ${item.bg} backdrop-blur-xl group hover:scale-105 transition-transform duration-500`}>
                                <div className="absolute top-0 right-0 p-4 md:p-6 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <Shield className={`w-5 h-5 md:w-6 md:h-6 ${item.color}`} />
                                </div>

                                <div className="flex items-center gap-3 mb-4 md:mb-6">
                                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${item.bg} border ${item.border} flex items-center justify-center`}>
                                        <Globe className={`w-4 h-4 md:w-[18px] md:h-[18px] ${item.color}`} />
                                    </div>
                                    <div className={`text-xs md:text-sm font-bold ${item.color}`}>{item.region}</div>
                                </div>

                                <div className="text-2xl md:text-3xl font-mono font-semibold text-white mb-2">{item.id}</div>
                                <div className="text-xs md:text-sm text-white/40 font-mono mb-4 md:mb-6">IP: {item.ip}</div>

                                <div className="flex items-center justify-between pt-4 md:pt-6 border-t border-white/5">
                                    <div className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider">Privacy Score</div>
                                    <div className={`text-lg md:text-xl font-bold ${item.color}`}>{item.score}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h2 className="text-5xl md:text-8xl font-bold text-white mb-4 md:mb-8 text-center">完全匿名</h2>
                    <p className="text-lg md:text-2xl text-white/60 max-w-3xl text-center leading-relaxed px-2">
                        NX Browser 为每个账号创建独立的浏览器环境。就像拥有一台全新的电脑，无论您身在何处。
                    </p>
                    <a
                        href="/NXBrowser_Setup.exe"
                        download="NXBrowser_Setup.exe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 md:mt-12 bg-white text-black px-8 py-3 md:px-12 md:py-4 rounded-full font-bold text-lg md:text-xl hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] inline-block"
                    >
                        立即下载 NX Browser
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default ScrollShowcase;