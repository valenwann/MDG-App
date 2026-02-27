import React, { useState, useEffect } from 'react';
import { 
  Globe, Shield, Users, Palette, Home, 
  GraduationCap, Scale, User, Plane, Sun, 
  Clock, DollarSign, Menu, X, Share2, ArrowRight,
  TrendingUp, Mail, Briefcase, Target, Eye, Zap,
  CheckCircle2, AlertCircle, Languages
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // --- GOOGLE "NO-CHOICE" RECOGNITION (Invisible Schema) ---
  const googleSecretWeapon = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "name": "The Modern Dispatch Global",
    "founder": "Valentine Wanjiru",
    "url": "https://mdg-app.vercel.app",
    "description": "Global media empire providing real stories and practical insights."
  };

  const categories = [
    { name: 'Technology', icon: Globe },
    { name: 'Security', icon: Shield },
    { name: 'Business', icon: TrendingUp },
    { name: 'Family', icon: Users },
    { name: 'Fashion', icon: Palette },
    { name: 'Decor', icon: Home },
    { name: 'Education', icon: GraduationCap },
    { name: 'Law', icon: Scale },
    { name: 'People', icon: User },
    { name: 'Travel', icon: Plane },
    { name: 'Spiritual', icon: Sun },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-['Inter',_sans-serif] selection:bg-[#FF6A00] selection:text-black">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(googleSecretWeapon) }}
      />

      {/* --- LUXURY NAV --- */}
      <nav className="bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10 sticky top-0 z-[60]">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-3 bg-[#111111] border border-white/10 text-[#FF6A00] rounded-xl hover:bg-[#FF6A00] hover:text-white transition-all">
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
            <h1 className="text-xl md:text-4xl font-black uppercase italic tracking-tighter">
              The Modern Dispatch <span className="text-[#FF6A00] underline decoration-4 underline-offset-8">Global</span>
            </h1>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-2 bg-[#111111] p-1.5 rounded-lg border border-white/10">
              {['EN', 'ES', 'DE', 'FR'].map(lang => (
                <button key={lang} onClick={() => setLanguage(lang)} className={`px-4 py-1.5 rounded-md font-bold text-xs transition-all ${language === lang ? 'bg-[#FF6A00] text-white shadow-lg' : 'text-[#A1A1AA] hover:text-white'}`}>{lang}</button>
              ))}
            </div>
            <div className="text-right border-r border-white/10 pr-6">
              <p className="text-[10px] font-bold uppercase text-[#F4B400] tracking-widest">Global Time</p>
              <p className="text-2xl font-black tabular-nums tracking-tighter">{time.toLocaleTimeString()}</p>
            </div>
            <button className="bg-[#FF6A00] text-white px-10 py-4 font-black rounded-full hover:scale-105 transition-all uppercase tracking-widest text-xs shadow-[0_0_30px_rgba(255,106,0,0.3)]">
              Subscribe
            </button>
          </div>
        </div>
      </nav>

      {/* --- OVERLAY MENU --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[55] bg-[#0A0A0A] p-10 pt-32 overflow-y-auto">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map(cat => (
              <button key={cat.name} className="flex items-center gap-6 text-4xl md:text-6xl font-black uppercase italic text-[#A1A1AA] hover:text-[#FF6A00] transition-all group text-left">
                {React.createElement(cat.icon, { size: 48, className: "group-hover:rotate-12 transition-transform" })}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* --- LUXURY HERO --- */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="bg-[#FF6A00] text-white px-5 py-1.5 rounded-full font-black uppercase text-[10px] tracking-widest">Global Feature</span>
            <span className="text-[#F4B400] font-black uppercase text-[10px] tracking-[0.3em]">Issue No. 001</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-6xl md:text-[8rem] font-black uppercase leading-[0.85] tracking-tighter mb-10">
                The Digital <br/> <span className="text-[#FF6A00] italic">Embassy.</span>
              </h2>
              <p className="text-2xl md:text-4xl text-[#A1A1AA] leading-tight mb-12 border-l-[10px] border-[#FF6A00] pl-8 font-medium">
                "How a new generation of global citizens are rewriting the rules of business, security, and lifestyle from Nairobi to the world."
              </p>
              <button className="bg-[#FF6A00] text-white px-12 py-7 rounded-2xl font-black uppercase tracking-widest text-sm hover:shadow-[0_0_50px_rgba(255,106,0,0.4)] transition-all transform hover:-translate-y-1">
                Read Featured Story <ArrowRight className="inline ml-2" />
              </button>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] bg-[#111111] rounded-[3.5rem] overflow-hidden border-8 border-white/10 shadow-2xl relative group rotate-1 hover:rotate-0 transition-all duration-700">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Hero" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </section>

        {/* --- UTILITY CARDS --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          <div className="bg-[#111111] p-10 rounded-[3rem] border border-white/10 shadow-2xl">
            <h3 className="text-[#F4B400] font-black uppercase text-xs tracking-[0.3em] mb-8 italic flex items-center gap-3">
              <Clock size={16} /> World Clock Hub
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="font-black text-xl uppercase tracking-tighter italic">Nairobi</span>
                <span className="text-[#FF6A00] font-mono text-2xl">10:00 AM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-black text-xl uppercase tracking-tighter italic">New York</span>
                <span className="text-[#FF6A00] font-mono text-2xl">02:00 AM</span>
              </div>
            </div>
          </div>
          <div className="bg-[#111111] p-10 rounded-[3rem] border border-white/10 shadow-2xl">
            <h3 className="text-[#F4B400] font-black uppercase text-xs tracking-[0.3em] mb-8 italic flex items-center gap-3">
              <DollarSign size={16} /> Global Currency
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="font-black text-xl tracking-tighter">USD / KES</span>
                <span className="text-green-400 font-mono text-2xl">132.40</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-black text-xl tracking-tighter">EUR / USD</span>
                <span className="text-green-400 font-mono text-2xl">1.08</span>
              </div>
            </div>
          </div>
          <div className="bg-[#FF6A00] p-10 rounded-[3rem] flex flex-col justify-center text-center shadow-[0_0_50px_rgba(255,106,0,0.2)]">
            <Zap size={40} className="mx-auto mb-6" />
            <p className="font-black text-xl mb-8 leading-tight italic uppercase tracking-tighter">"Practical tools drive daily bookmarks."</p>
            <button className="bg-white text-black py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all">Launch Dispatch Toolkit</button>
          </div>
        </section>

        {/* --- MISSION STATEMENT --- */}
        <section className="bg-[#111111] border-l-[16px] border-[#FF6A00] p-12 md:p-24 rounded-[4rem] mb-24 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
            <Globe size={300} />
          </div>
          <h2 className="text-3xl md:text-6xl font-black mb-12 text-[#F4B400] uppercase tracking-tighter italic">Our Mission</h2>
          <p className="text-2xl md:text-5xl text-[#FFFFFF] leading-tight mb-16 max-w-5xl mx-auto font-bold tracking-tight">
            Modern Dispatch Global exists to share stories, ideas, and practical insights that help people understand the world. We focus on <span className="text-[#FF6A00] italic underline">honest storytelling</span> and real human experience.
          </p>
          <div className="h-2 w-32 bg-[#FF6A00] mx-auto mb-8"></div>
          <p className="text-[#A1A1AA] uppercase font-black text-sm tracking-[0.5em] italic">Real Stories. Practical Insight. Global Perspective.</p>
        </section>

        {/* --- ARTICLE GRID --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
          {[
            { title: "Digital Security: The Global Defense Strategy.", cat: "Security", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" },
            { title: "Remote Life: Why Nairobi is the New Silicon Savannah.", cat: "Business", img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80" },
            { title: "Global Hobbies: Minimalist Living in 2024.", cat: "Lifestyle", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80" }
          ].map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-square bg-[#111111] rounded-[3.5rem] overflow-hidden mb-8 border border-white/10 group-hover:border-[#FF6A00] transition-all shadow-2xl relative">
                <img src={post.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" alt="Post" />
              </div>
              <p className="text-[#FF6A00] font-black uppercase text-xs tracking-[0.2em] mb-4 italic">{post.cat}</p>
              <h4 className="text-3xl font-black leading-none group-hover:text-[#F4B400] transition-all uppercase tracking-tighter">{post.title}</h4>
            </div>
          ))}
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0A0A0A] border-t border-white/10 py-24 text-center">
        <h2 className="text-3xl md:text-6xl font-black uppercase italic mb-10 tracking-tightest">
          Modern Dispatch <span className="text-[#FF6A00]">Global</span>
        </h2>
        <div className="flex justify-center gap-12 mb-16 font-black uppercase text-xs tracking-[0.3em] text-[#A1A1AA]">
          <span className="hover:text-[#FF6A00] cursor-pointer">About Us</span>
          <span className="hover:text-[#FF6A00] cursor-pointer">Pitch Studio</span>
          <span className="hover:text-[#FF6A00] cursor-pointer">Privacy</span>
        </div>
        <p className="text-[#A1A1AA] text-[10px] font-black uppercase tracking-[0.5em]">
          <button onClick={() => setShowAdmin(!showAdmin)} className="hover:text-[#FF6A00] transition-all transform hover:scale-150 p-2">©</button> 2024. Editor: Valentine Wanjiru
        </p>
      </footer>

      {/* --- SECRET STUDIO (ADMIN) --- */}
      {showAdmin && (
        <div className="fixed inset-0 z-[100] bg-[#0A0A0A]/98 p-4 md:p-10 overflow-y-auto flex items-center justify-center">
          <div className="max-w-6xl w-full bg-[#111111] border border-white/10 rounded-[4rem] overflow-hidden shadow-[0_0_100px_rgba(255,106,0,0.2)]">
            <div className="p-10 border-b border-white/10 flex items-center justify-between bg-[#111111]">
              <div className="flex items-center gap-8">
                <div className="w-20 h-20 bg-[#FF6A00] rounded-[2.5rem] flex items-center justify-center text-white shadow-xl">
                  <Briefcase size={40} />
                </div>
                <div>
                  <h2 className="text-4xl font-black uppercase text-white tracking-tighter italic leading-none">Operations Studio</h2>
                  <p className="text-[10px] font-black uppercase text-[#A1A1AA] tracking-[0.4em] mt-3 italic">Editorial Engine • Katalena Status: Active</p>
                </div>
              </div>
              <button onClick={() => setShowAdmin(false)} className="bg-white/5 hover:bg-[#FF6A00] text-white p-5 rounded-3xl transition-all">
                <X size={40} />
              </button>
            </div>
            
            <div className="p-12 space-y-8 flex-1">
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-2xl font-black uppercase tracking-widest flex items-center gap-4 text-[#F4B400]">
                  <Target size={32} /> Mission Schedule
                </h3>
                <div className="bg-green-500/10 text-green-400 px-8 py-3 rounded-full text-xs font-black uppercase italic border border-green-500/20 flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  System Running
                </div>
              </div>

              {[
                { time: '06:00 - 08:00', task: 'Job Acquisition', detail: 'Primary Focus: Sure Media, Medium, LinkedIn. Goal: 3 high-value targets.', icon: Briefcase },
                { time: '09:00 - 12:00', task: 'Editorial Block', detail: 'Draft 1,200–2,500 word primary article. Human/Warm tone.', icon: Palette },
                { time: '13:00 - 15:00', task: 'Content Repurposing', detail: 'Transcription of video/podcasts. Adding Human Insights.', icon: TrendingUp },
                { time: '16:00 - 18:00', task: 'Distribution Cycle', detail: 'Multi-channel blast across Global Editions.', icon: Globe },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-10 p-10 bg-[#0A0A0A] border border-white/5 rounded-[3.5rem] group hover:border-[#FF6A00] transition-all">
                  <span className="text-[#A1A1AA] font-black text-2xl tabular-nums w-44 italic">{item.time}</span>
                  <div className="bg-[#111111] p-6 rounded-[2rem] shadow-xl text-[#FF6A00] group-hover:bg-[#FF6A00] group-hover:text-white transition-all transform group-hover:rotate-6">
                    {React.createElement(item.icon, { size: 36 })}
                  </div>
                  <div>
                    <p className="font-black text-3xl mb-2 uppercase text-white tracking-tight">{item.task}</p>
                    <p className="text-[#A1A1AA] text-lg font-medium tracking-wide">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
