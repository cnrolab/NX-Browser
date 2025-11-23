import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12 w-full">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          <div>
            <h4 className="text-white text-lg font-semibold mb-8">产品</h4>
            <ul className="space-y-5 text-base text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">下载 Nexus</a></li>
              <li><a href="#" className="hover:text-white transition-colors">功能特性</a></li>
              <li><a href="#" className="hover:text-white transition-colors">定价方案</a></li>
              <li><a href="#" className="hover:text-white transition-colors">更新日志</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-8">资源</h4>
            <ul className="space-y-5 text-base text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">使用文档</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API 参考</a></li>
              <li><a href="#" className="hover:text-white transition-colors">指纹检测</a></li>
              <li><a href="#" className="hover:text-white transition-colors">社区论坛</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-8">公司</h4>
            <ul className="space-y-5 text-base text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">关于我们</a></li>
              <li><a href="#" className="hover:text-white transition-colors">联系方式</a></li>
              <li><a href="#" className="hover:text-white transition-colors">隐私政策</a></li>
              <li><a href="#" className="hover:text-white transition-colors">服务条款</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
             <h4 className="text-white text-lg font-semibold mb-8">订阅更新</h4>
             <p className="text-base text-white/50 mb-6 leading-relaxed">获取最新的防关联技术动态，不错过任何安全补丁。</p>
             <div className="flex gap-3">
                <input type="email" placeholder="您的邮箱" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm w-full focus:outline-none focus:border-blue-500 text-white transition-colors" />
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl text-sm font-bold transition-colors whitespace-nowrap">订阅</button>
             </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5">
            <div className="text-white/30 text-sm">
                © 2024 Nexus Inc. All rights reserved.
            </div>
            <div className="flex gap-8 mt-6 md:mt-0">
                {/* Social Icons placeholders */}
                <div className="w-6 h-6 bg-white/10 rounded-full hover:bg-white/30 cursor-pointer transition-colors"></div>
                <div className="w-6 h-6 bg-white/10 rounded-full hover:bg-white/30 cursor-pointer transition-colors"></div>
                <div className="w-6 h-6 bg-white/10 rounded-full hover:bg-white/30 cursor-pointer transition-colors"></div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;