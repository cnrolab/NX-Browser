import React from 'react';
import { cn } from '../lib/utils';
import { Cpu, Shield, Zap, Users, Globe2, Bot } from 'lucide-react';

const FeatureCard = ({ 
    title, 
    description, 
    icon: Icon, 
    className,
    delay = "0"
}: { 
    title: string; 
    description: string; 
    icon: any; 
    className?: string;
    delay?: string;
}) => (
  <div className={cn(
    "group relative overflow-hidden rounded-3xl bg-[#0F0F0F] border border-white/5 p-10 hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10", 
    className
  )}>
    <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    
    <div className="relative z-10 flex flex-col h-full justify-between">
      <div className="mb-8 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-500">
        <Icon className="w-7 h-7 text-white/90" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/50 leading-relaxed text-base">{description}</p>
      </div>
    </div>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-40 w-full bg-black">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="mb-24 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-none">
            不仅仅是<span className="text-white/30">防关联</span>。
          </h2>
          <p className="text-2xl text-white/60 max-w-3xl leading-relaxed">
            Nexus 融合了最新的反侦测技术与极致的用户体验。专为团队协作和自动化而生。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6 h-auto md:h-[700px]">
          
          {/* Large Card 1 */}
          <FeatureCard 
            title="内核级指纹混淆" 
            description="不同于简单的 JS 注入，Nexus 在 Chromium 内核层面对硬件参数进行修改。真实的 Canvas、WebGL 和 Audio 噪音，通过任何检测。"
            icon={Cpu}
            className="md:col-span-4 md:row-span-1 bg-gradient-to-br from-[#111] to-[#050505]"
          />

          {/* Tall Card */}
          <FeatureCard 
            title="团队协作" 
            description="安全地共享账号环境给团队成员，无需泄露密码。精细的权限控制与操作日志审计。"
            icon={Users}
            className="md:col-span-2 md:row-span-2 bg-[#0A0A0A]"
          />

          {/* Medium Card */}
          <FeatureCard 
            title="RPA 自动化" 
            description="内置无代码自动化编排。自动养号、浏览、点赞。解放您的双手，效率提升 10 倍。"
            icon={Bot}
            className="md:col-span-2 md:row-span-1"
          />

          {/* Medium Card */}
          <FeatureCard 
            title="全球代理网络" 
            description="集成主流代理供应商。一键检测代理速度与纯净度。WebRTC 自动匹配 IP 地址。"
            icon={Globe2}
            className="md:col-span-2 md:row-span-1"
          />

        </div>
      </div>
    </section>
  );
};

export default Features;