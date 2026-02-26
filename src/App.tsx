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
    <div className="min-h-screen bg-[#0A0A0A] text-white font-['Inter'] selection:bg-[#FF6A00] selection:text-black">
      {/* Invisible SEO Weapon for Google */}
      <script type="application/ld+json">{JSON.stringify(googleSecretWeapon)}</script>

      {/* --- LUXURY NAV --- */}
      <nav className="bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-[60]">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-3 bg-[#111111] border border-white/10 text-[#FF6A00] rounded-xl hover:bg-[#FF6A00] hover:text-white transition-all">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <h1 className="text-xl md:text-3xl font-bold tracking-tighter uppercase italic">
              Modern Dispatch <span className="text-[#FF6A00]">Global</span>
            </h1>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-2 bg-[#111111] p-1.5 rounded-lg border border-white/10">
              {['EN', 'ES', 'DE', 'FR'].map(lang => (
                <button key={lang} onClick={() => setLanguage(lang)} className={`px-3 py-1 rounded-md font-bold text-xs transition-all ${language === lang ? 'bg-[#FF6A00] text-white' : 'text-[#A1A1AA] hover:text-white'}`}>{lang}</button>
              ))}
            </div>
            <div className="text-right border-r border-white/10 pr-6">
              <p className="text-[10px] font-bold uppercase text-[#F4B400] tracking-widest">Global Time</p>
              <p className="text-xl font-bold tabular-nums">{time.toLocaleTimeString()}</p>
            </div>
            <button className="bg-[#FF6A00] text-white px-8 py-3 font-bold rounded-full hover:scale-105 transition-all uppercase tracking-widest text-xs">Subscribe</button>
          </div>
        </div>
      </nav>

      {/* --- OVERLAY MENU --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[55] bg-[#0A0A0A] p-10 pt-32 overflow-y-auto">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map(cat => (
              <button key={cat.name} className="flex items-center gap-6 text-4xl font-bold uppercase italic text-[#A1A1AA] hover:text-[#FF6A00] transition-all group">
                <cat.icon size={40} className="group-hover:rotate-12 transition-transform" /> {cat.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* --- LUXURY HERO --- */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="bg-[#FF6A00] text-white px-4 py-1 rounded-full font-bold uppercase text-[10px] tracking-widest">Feature Article</span>
            <span className="text-[#F4B400] font-bold uppercase text-[10px] tracking-[0.3em]">Issue No. 001</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-5xl md:text-8xl font-bold uppercase leading-[0.9] tracking-tighter mb-10">
                The Digital <br/> <span className="text-[#FF6A00]">Embassy.</span>
              </h2>
              <p className="text-xl md:text-3xl text-[#A1A1AA] leading-relaxed mb-12 border-l-4 border-[#FF6A00] pl-8">
                How a new generation of global citizens are rewriting the rules of business, security, and lifestyle.
              </p>
              <button className="bg-[#FF6A00] text-white px-12 py-6 rounded-2xl font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(255,106,0,0.4)] transition-all">Read Story</button>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] bg-[#111111] rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl relative group">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Hero" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </section>

        {/* --- UTILITY CARDS --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-[#111111] p-10 rounded-[2.5rem] border border-white/10">
            <h3 className="text-[#F4B400] font-bold uppercase text-xs tracking-widest mb-6 italic">World Clock</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="font-bold">Nairobi</span>
                <span className="text-[#FF6A00] font-mono">10:00 AM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">London</span>
                <span className="text-[#FF6A00] font-mono">07:00 AM</span>
              </div>
            </div>
          </div>
          <div className="bg-[#111111] p-10 rounded-[2.5rem] border border-white/10">
            <h3 className="text-[#F4B400] font-bold uppercase text-xs tracking-widest mb-6 italic">Currency</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="font-bold">USD / KES</span>
                <span className="text-green-400 font-mono">132.40</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">EUR / USD</span>
                <span className="text-green-400 font-mono">1.08</span>
              </div>
            </div>
          </div>
          <div className="bg-[#FF6A00] p-10 rounded-[2.5rem] flex flex-col justify-center text-center">
            <p className="font-bold text-lg mb-6 leading-tight">"Tools drive daily bookmarks."</p>
            <button className="bg-white text-black py-4 rounded-xl font-bold uppercase text-xs tracking-widest">Dispatch Toolkit</button>
          </div>
        </section>

        {/* --- MISSION STATEMENT --- */}
        <section className="bg-[#111111] border border-white/10 p-12 md:p-24 rounded-[4rem] mb-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-[#F4B400] italic">Our Mission</h2>
          <p className="text-xl md:text-3xl text-[#FFFFFF] leading-relaxed mb-12 max-w-4xl mx-auto">
            Modern Dispatch Global exists to share stories, ideas, and practical insights that help people understand the world. We focus on honest storytelling and real human experience.
          </p>
          <div className="h-1 w-24 bg-[#FF6A00] mx-auto mb-8"></div>
          <p className="text-[#A1A1AA] uppercase font-bold text-xs tracking-[0.4em]">Real Stories. Practical Insight. Global Perspective.</p>
        </section>

        {/* --- ARTICLES --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {[1, 2, 3].map(i => (
            <div key={i} className="group">
              <div className="aspect-square bg-[#111111] rounded-[2.5rem] overflow-hidden mb-6 border border-white/10 group-hover:border-[#FF6A00] transition-all">
                <img src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?auto=format&fit=crop&q=80`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Post" />
              </div>
              <p className="text-[#FF6A00] font-bold uppercase text-[10px] tracking-widest mb-2">Category: Global</p>
              <h4 className="text-2xl font-bold leading-tight group-hover:text-[#F4B400] transition-all uppercase">The Modern Globalist's Handbook Vol {i}.</h4>
            </div>
          ))}
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0A0A0A] border-t border-white/10 py-20 text-center">
        <h2 className="text-3xl font-bold uppercase italic mb-8">Modern Dispatch <span className="text-[#FF6A00]">Global</span></h2>
        <p className="text-[#A1A1AA] text-xs font-bold uppercase tracking-widest mb-6">
          <button onClick={() => setShowAdmin(!showAdmin)} className="hover:text-white transition-all">©</button> 2024. Editor: Valentine Wanjiru
        </p>
      </footer>

      {/* --- SECRET STUDIO (ADMIN) --- */}
      {showAdmin && (
        <div className="fixed inset-0 z-[100] bg-[#0A0A0A]/98 p-4 md:p-10 overflow-y-auto">
          <div className="max-w-5xl mx-auto bg-[#111111] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="p-8 border-b border-white/10 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold uppercase text-[#FF6A00] italic">Operations Studio</h2>
                <p className="text-[10px] font-bold uppercase text-[#A1A1AA] tracking-[0.3em]">Official Editorial Schedule • Katalena Engine</p>
              </div>
              <button onClick={() => setShowAdmin(false)} className="bg-[#FF6A00] text-white p-3 rounded-xl"><X size={32} /></button>
            </div>
            <div className="p-10 space-y-6">
              {[
                { time: '06:00 - 08:00', task: 'Job Acquisition', detail: 'Primary Focus: Sure Media, Medium, LinkedIn. Goal: 3 high-value targets.', icon: Briefcase },
                { time: '09:00 - 12:00', task: 'Editorial Block', detail: 'Draft 1,200–2,500 word primary article. Human/Warm tone.', icon: Palette },
                { time: '13:00 - 15:00', task: 'Content Repurposing', detail: 'Transcription of video/podcasts. Adding Human Insights.', icon: TrendingUp },
                { time: '16:00 - 18:00', task: 'Distribution Cycle', detail: 'Multi-channel blast across Global Editions.', icon: Globe },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-8 p-8 bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] group hover:border-[#FF6A00] transition-all">
                  <span className="text-[#A1A1AA] font-bold text-xl tabular-nums w-32 italic">{item.time}</span>
                  <div className="bg-[#111111] p-4 rounded-2xl shadow-lg text-[#FF6A00] group-hover:bg-[#FF6A00] group-hover:text-white transition-all">
                    {React.createElement(item.icon, { size: 28 })}
                  </div>
                  <div>
                    <p className="font-bold text-2xl mb-1 uppercase text-white">{item.task}</p>
                    <p className="text-[#A1A1AA] text-sm">{item.detail}</p>
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
