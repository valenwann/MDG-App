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
    "description": "Global media empire providing real stories and practical insights.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    }
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
      {/* Invisible SEO Weapon for Google - Fixed for React */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(googleSecretWeapon) }}
      />

      {/* --- LUXURY NAV --- */}
      <nav className="bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10 sticky top-0 z-[60]">
        <div className="max-w-[1400px] mx-auto px-6 h-28 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-4 bg-[#111111] border border-white/10 text-[#FF6A00] rounded-2xl hover:bg-[#FF6A00] hover:text-white transition-all shadow-xl active:scale-90"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-5xl font-extrabold tracking-tighter uppercase italic leading-none">
                Modern Dispatch <span className="text-[#FF6A00]">Global</span>
              </h1>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#A1A1AA] mt-2 italic">Global Media Empire • Founder: Valentine Wanjiru</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            {/* Language Selector (Localization) */}
            <div className="flex items-center gap-2 bg-[#111111] p-2 rounded-xl border border-white/10 shadow-inner">
              <Languages size={18} className="text-[#A1A1AA] ml-2" />
              {['EN', 'ES', 'DE', 'FR'].map(lang => (
                <button 
                  key={lang} 
                  onClick={() => setLanguage(lang)} 
                  className={`px-4 py-1.5 rounded-lg font-bold text-xs transition-all ${language === lang ? 'bg-[#FF6A00] text-white shadow-lg' : 'text-[#A1A1AA] hover:text-white'}`}
                >
                  {lang}
                </button>
              ))}
            </div>
            
            <div className="text-right border-r border-white/10 pr-10">
              <p className="text-[10px] font-bold uppercase text-[#F4B400] tracking-widest mb-1">Global Standard Time</p>
              <p className="text-3xl font-bold tabular-nums tracking-tight">{time.toLocaleTimeString()}</p>
            </div>
            
            <button className="bg-[#FF6A00] text-white px-10 py-5 font-bold rounded-full hover:shadow-[0_0_40px_rgba(255,106,0,0.3)] hover:scale-105 transition-all uppercase tracking-widest text-xs">
              Subscribe
            </button>
          </div>
        </div>
      </nav>

      {/* --- OVERLAY MENU (Fixed Icon Rendering) --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[55] bg-[#0A0A0A] p-10 pt-40 overflow-y-auto">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {categories.map(cat => (
              <button key={cat.name} className="flex items-center gap-8 text-4xl font-bold uppercase italic text-[#A1A1AA] hover:text-[#FF6A00] transition-all group text-left">
                <div className="w-16 h-16 bg-[#111111] rounded-2xl flex items-center justify-center text-[#FF6A00] border border-white/10 group-hover:bg-[#FF6A00] group-hover:text-white transition-all shadow-xl">
                  {React.createElement(cat.icon, { size: 36 })}
                </div>
                <span className="tracking-tighter">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <main className="max-w-[1400px] mx-auto px-6 py-12">
        {/* --- LUXURY HERO --- */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-10">
            <span className="bg-[#FF6A00] text-white px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest">Featured Insight</span>
            <div className="h-0.5 w-24 bg-white/20"></div>
            <span className="text-[#F4B400] font-bold uppercase text-xs tracking-[0.4em]">Issue 001 • {language} Edition</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-6xl md:text-[10rem] font-bold uppercase leading-[0.85] tracking-tightest mb-12">
                The Digital <br/> <span className="text-[#FF6A00] italic underline decoration-[20px] underline-offset-[20px]">Embassy.</span>
              </h2>
              <p className="text-2xl md:text-5xl text-[#A1A1AA] leading-tight mb-16 border-l-8 border-[#FF6A00] pl-10 font-medium italic">
                "How a new generation of global citizens are rewriting the rules of business, security, and lifestyle from Nairobi to the world."
              </p>
              <div className="flex flex-wrap gap-8">
                <button className="bg-[#FF6A00] text-white px-14 py-8 rounded-[2rem] font-bold uppercase tracking-widest text-sm hover:shadow-[0_20px_50px_rgba(255,106,0,0.3)] hover:-translate-y-2 transition-all">
                  Read Featured Story <ArrowRight className="inline ml-3" size={24} />
                </button>
                <button className="p-8 border-4 border-white/10 rounded-[2rem] hover:bg-white/5 transition-all group">
                  <Share2 size={32} className="group-hover:text-[#FF6A00] transition-colors" />
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] bg-[#111111] rounded-[4rem] overflow-hidden border-8 border-white/10 shadow-3xl group cursor-pointer rotate-2 hover:rotate-0 transition-all duration-1000">
                <img 
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
                  alt="Global Tech" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
                  <p className="font-bold text-white text-xl leading-tight italic">"The architecture of a media empire built for the modern globalist."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- GLOBAL UTILITY STRIP --- */}
        <section className="bg-[#111111] rounded-[4rem] p-12 md:p-20 mb-32 grid grid-cols-1 md:grid-cols-3 gap-16 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
            <Globe size={400} />
          </div>
          
          <div className="space-y-8 relative z-10">
            <h3 className="text-[#F4B400] font-bold uppercase text-xs tracking-[0.4em] flex items-center gap-3">
              <Clock size={16} /> World Clock Hub
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-6">
                <span className="font-bold text-3xl uppercase tracking-tighter italic">Nairobi</span>
                <span className="text-[#FF6A00] font-mono text-3xl">10:00 AM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-3xl uppercase tracking-tighter italic">London</span>
                <span className="text-[#FF6A00] font-mono text-3xl">07:00 AM</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 md:border-x border-white/10 md:px-16 relative z-10">
            <h3 className="text-[#F4B400] font-bold uppercase text-xs tracking-[0.4em] flex items-center gap-3">
              <DollarSign size={16} /> Global Currency
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-6">
                <span className="font-bold text-3xl tracking-tighter">USD / KES</span>
                <span className="text-green-400 font-mono text-3xl">132.40</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-3xl tracking-tighter">EUR / USD</span>
                <span className="text-green-400 font-mono text-3xl">1.08</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center text-center relative z-10">
            <Zap size={48} className="text-[#FF6A00] mx-auto mb-6" />
            <p className="font-bold text-2xl mb-8 leading-tight italic">"Utility drives daily bookmarks."</p>
            <button className="bg-[#FF6A00] text-white py-5 rounded-2xl font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">Launch Toolkit</button>
          </div>
        </section>

        {/* --- MISSION STATEMENT (Luxury Dark) --- */}
        <section className="bg-[#111111] border border-white/10 p-16 md:p-32 rounded-[5rem] mb-32 text-center relative overflow-hidden shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF6A00]/5 via-transparent to-transparent"></div>
          <h2 className="text-4xl md:text-7xl font-bold mb-16 text-[#F4B400] uppercase italic tracking-tightest">Our Mission</h2>
          <p className="text-2xl md:text-5xl text-[#FFFFFF] leading-[1.2] mb-16 max-w-5xl mx-auto font-bold tracking-tight">
            Modern Dispatch Global exists to share stories, ideas, and practical insights that help people understand the world. We focus on <span className="text-[#FF6A00]">honest storytelling</span> and real human experience.
          </p>
          <div className="h-2 w-32 bg-[#FF6A00] mx-auto mb-10"></div>
          <p className="text-[#A1A1AA] uppercase font-bold text-sm tracking-[0.5em] italic">Real Stories. Practical Insight. Global Perspective.</p>
        </section>

        {/* --- ARTICLES GRID --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
          {[
            { title: "Digital Security: The Global Defense Strategy.", cat: "Security", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" },
            { title: "Remote Life: Why Nairobi is the New Silicon Savannah.", cat: "Business", img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80" },
            { title: "Global Hobbies: Minimalist Living in 2024.", cat: "Lifestyle", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80" }
          ].map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-square bg-[#111111] rounded-[3.5rem] overflow-hidden mb-10 border border-white/10 group-hover:border-[#FF6A00] transition-all shadow-2xl relative">
                <img src={post.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" alt="Post" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-40"></div>
              </div>
              <p className="text-[#FF6A00] font-bold uppercase text-xs tracking-widest mb-4 italic">{post.cat}</p>
              <h4 className="text-3xl font-bold leading-tight group-hover:text-[#F4B400] transition-all uppercase tracking-tighter">{post.title}</h4>
            </div>
          ))}
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0A0A0A] border-t border-white/10 py-32 text-center relative overflow-hidden">
        <h2 className="text-4xl md:text-7xl font-bold uppercase italic mb-12 tracking-tightest">
          Modern Dispatch <span className="text-[#FF6A00]">Global</span>
        </h2>
        <div className="flex justify-center gap-12 mb-16 font-bold uppercase text-xs tracking-[0.4em] text-[#A1A1AA]">
          <span className="hover:text-[#FF6A00] cursor-pointer transition-colors">About Us</span>
          <span className="hover:text-[#FF6A00] cursor-pointer transition-colors">Pitch Studio</span>
          <span className="hover:text-[#FF6A00] cursor-pointer transition-colors">Privacy</span>
        </div>
        <p className="text-[#A1A1AA] text-xs font-bold uppercase tracking-[0.5em] mb-10 opacity-50">
          <button onClick={() => setShowAdmin(!showAdmin)} className="hover:text-[#FF6A00] transition-all transform hover:scale-150 active:scale-90">©</button> 2024. Editor: Valentine Wanjiru
        </p>
      </footer>

      {/* --- SECRET STUDIO (ADMIN / KATALENA ENGINE) --- */}
      {showAdmin && (
        <div className="fixed inset-0 z-[100] bg-[#0A0A0A]/98 backdrop-blur-2xl p-4 md:p-10 overflow-y-auto flex items-center justify-center">
          <div className="max-w-6xl w-full bg-[#111111] border border-white/10 rounded-[4rem] overflow-hidden shadow-[0_0_100px_rgba(255,106,0,0.2)]">
            <div className="p-10 border-b border-white/10 flex items-center justify-between bg-[#111111]">
              <div className="flex items-center gap-8">
                <div className="w-20 h-20 bg-[#FF6A00] rounded-3xl flex items-center justify-center text-white shadow-[0_0_30px_rgba(255,106,0,0.5)]">
                  <Briefcase size={40} />
                </div>
                <div>
                  <h2 className="text-4xl font-bold uppercase text-white tracking-tighter italic">Operations Studio</h2>
                  <p className="text-[10px] font-bold uppercase text-[#A1A1AA] tracking-[0.4em] mt-2 italic">Official Editorial Schedule • Katalena Engine</p>
                </div>
              </div>
              <button onClick={() => setShowAdmin(false)} className="bg-white/5 hover:bg-[#FF6A00] text-white p-5 rounded-2xl transition-all">
                <X size={40} />
              </button>
            </div>
            
            <div className="p-12 space-y-8 flex-1">
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-2xl font-bold uppercase tracking-widest flex items-center gap-4 text-[#F4B400]">
                  <Target size={32} /> Mission Pulse
                </h3>
                <div className="bg-green-500/10 text-green-400 px-6 py-2 rounded-full text-xs font-bold uppercase italic border border-green-500/20 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                  Katalena Engine: Fully Active
                </div>
              </div>

              {[
                { time: '06:00 - 08:00', task: 'Market Acquisition', detail: 'Primary Focus: Sure Media, LinkedIn, ProBlogger. Pitch goal: 3 high-value targets.', icon: Briefcase },
                { time: '09:00 - 12:00', task: 'Main Editorial Block', detail: 'Draft 1,200–2,500 word primary article. Style: Human, Warm, Netflix Series feel.', icon: Palette },
                { time: '13:00 - 15:00', task: 'Repurposing Block', detail: 'Transcription of high-value video/podcasts. Adding Original Human Insights.', icon: TrendingUp },
                { time: '16:00 - 18:00', task: 'Distribution Cycle', detail: 'Blast across Website, Pinterest, X, and Global Networks.', icon: Globe },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-10 p-10 bg-[#0A0A0A] border border-white/5 rounded-[3rem] group hover:border-[#FF6A00] transition-all">
                  <span className="text-[#A1A1AA] font-bold text-2xl tabular-nums w-40 italic">{item.time}</span>
                  <div className="bg-[#111111] p-6 rounded-[2rem] shadow-xl text-[#FF6A00] group-hover:bg-[#FF6A00] group-hover:text-white transition-all transform group-hover:rotate-6">
                    {React.createElement(item.icon, { size: 36 })}
                  </div>
                  <div>
                    <p className="font-bold text-3xl mb-2 uppercase text-white tracking-tight">{item.task}</p>
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
