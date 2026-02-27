import React, { useState, useEffect } from 'react';
import { 
  Globe, Shield, Users, Palette, Home, 
  GraduationCap, Scale, User, Plane, Sun, 
  Clock, DollarSign, Menu, X, Share2, ArrowRight,
  TrendingUp, Mail, Briefcase, Target, Eye, Zap,
  CheckCircle2, AlertCircle, Languages, Heart, Sparkles,
  BookOpen, Coffee, Edit3, Globe2
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
    <div className="min-h-screen bg-white text-[#1A1A1A] font-['Inter',_sans-serif] selection:bg-[#FF6A00] selection:text-white">
      {/* --- HUMBLE NAVIGATION --- */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-stone-100 sticky top-0 z-[60]">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-[#1A1A1A] hover:bg-stone-50 rounded-xl transition-all">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <div className="flex flex-col">
              <h1 className="text-xl md:text-3xl font-bold tracking-tighter uppercase italic leading-none">
                Modern Dispatch <span className="text-[#FF6A00]">Global</span>
              </h1>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 mt-1 italic">Humble Stories • Global Perspective</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            {/* Language Selector */}
            <div className="flex items-center gap-2 bg-stone-50 p-1 rounded-lg border border-stone-100">
              {['EN', 'ES', 'DE', 'FR'].map(lang => (
                <button 
                  key={lang} 
                  onClick={() => setLanguage(lang)} 
                  className={`px-3 py-1 rounded-md font-bold text-[10px] transition-all ${language === lang ? 'bg-black text-white' : 'text-stone-400 hover:text-black'}`}
                >
                  {lang}
                </button>
              ))}
            </div>
            
            <div className="text-right border-r border-stone-100 pr-6">
              <p className="text-[9px] font-bold uppercase text-stone-400 tracking-widest mb-0.5">Global Clock</p>
              <p className="text-xl font-bold tabular-nums tracking-tighter">{time.toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MENU OVERLAY --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[55] bg-white p-10 pt-32 overflow-y-auto">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map(cat => (
              <button key={cat.name} className="flex items-center gap-6 text-4xl font-bold uppercase italic text-stone-300 hover:text-black transition-all group text-left">
                {React.createElement(cat.icon, { size: 32, className: "group-hover:text-[#FF6A00]" })}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* --- HERO: HUMBLE BLOG STYLE --- */}
        <section className="mb-32 text-center max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="h-px w-10 bg-[#FF6A00]"></div>
            <span className="text-stone-400 font-bold uppercase text-[10px] tracking-[0.5em] italic">A collective of human insights</span>
            <div className="h-px w-10 bg-[#FF6A00]"></div>
          </div>
          <h2 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-10 text-[#1A1A1A]">
            The Humble <br/> <span className="text-[#FF6A00] italic underline decoration-[10px] underline-offset-[12px]">Dispatch.</span>
          </h2>
          <p className="text-xl md:text-2xl text-stone-500 leading-relaxed mb-12 italic font-medium">
            "Sharing honest stories and practical insights that bridge the gaps between Nairobi and the world."
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-black text-white px-12 py-6 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-[#FF6A00] transition-all shadow-xl">
              Explore the Blog
            </button>
            <button className="border border-stone-200 text-[#1A1A1A] px-12 py-6 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-stone-50 transition-all">
              Our Mission
            </button>
          </div>
        </section>

        {/* --- ABOUT & MISSION --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <div className="bg-stone-50 p-12 md:p-20 rounded-[3.5rem] border border-stone-100 relative overflow-hidden">
            <h3 className="text-3xl font-bold text-stone-900 mb-8 uppercase italic tracking-tighter">About the Blog</h3>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              We started this as a quiet corner of the internet to document the shifts happening in our global society. We believe that the right story at the right time can change a life.
            </p>
            <p className="text-stone-500 text-lg leading-relaxed italic">
              Whether you are building a career, exploring new hobbies, or simply staying informed, we walk that path with you.
            </p>
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-[#FF6A00] mb-6 uppercase italic tracking-widest">Our Humble Intent</h3>
              <p className="text-stone-600 text-lg leading-relaxed">
                We are not here to shout. We are here to share. Our focus is on honest storytelling, real life experiences, and well-researched content that you can actually trust.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 font-bold uppercase text-[10px] tracking-[0.3em] text-stone-400">
              <div className="flex items-center gap-3"><Heart size={16} className="text-[#FF6A00]"/> Warm & Human</div>
              <div className="flex items-center gap-3"><Sparkles size={16} className="text-[#FF6A00]"/> Simple Insights</div>
            </div>
          </div>
        </section>

        {/* --- BLOG FEED --- */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-16 border-b border-stone-100 pb-6">
            <h3 className="text-2xl font-bold uppercase tracking-widest italic">Latest from the Feed</h3>
            <span className="text-[#FF6A00] text-xs font-bold uppercase tracking-widest">Global Edition • {language}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Digital Safety: A Local Perspective.", cat: "Security", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" },
              { title: "Nairobi Hobbies: Finding Peace.", cat: "Lifestyle", img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80" },
              { title: "Global Business Trends for 2024.", cat: "Business", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-stone-100 rounded-[3rem] overflow-hidden mb-8 border border-stone-100 group-hover:border-[#FF6A00] transition-all shadow-sm group-hover:shadow-xl">
                  <img src={post.img} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Article" />
                </div>
                <p className="text-[#FF6A00] font-bold uppercase text-[10px] tracking-widest mb-3 italic">{post.cat}</p>
                <h4 className="text-2xl font-bold leading-tight uppercase tracking-tighter group-hover:text-[#FF6A00] transition-colors">{post.title}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* --- UTILITY (AESTHETIC) --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="bg-stone-50 p-12 rounded-[4rem] border border-stone-100 flex flex-col justify-center text-center">
            <Globe2 size={40} className="mx-auto mb-6 text-[#FF6A00]" />
            <p className="font-bold text-xl mb-8 italic text-stone-500 leading-tight italic">"Practical tools to help you navigate the global landscape."</p>
            <div className="flex justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-xl border border-stone-100 font-mono text-sm font-bold text-stone-400 italic italic">USD/KES 132.4</div>
              <div className="bg-white px-6 py-3 rounded-xl border border-stone-100 font-mono text-sm font-bold text-stone-400 italic italic">EUR/USD 1.08</div>
            </div>
          </div>
          <div className="bg-white border-2 border-stone-100 p-12 rounded-[4rem] text-center flex flex-col justify-center">
             <div className="w-16 h-16 bg-[#FF6A00] rounded-2xl flex items-center justify-center text-white mx-auto mb-8 shadow-xl">
                <Shield size={32} />
             </div>
             <h3 className="text-2xl font-bold mb-4 uppercase italic tracking-tighter">Your Online Safety</h3>
             <p className="text-stone-400 italic mb-8">"We recommend Trust Guard as a resource we truly believe in for the modern reader."</p>
             <button className="text-[#FF6A00] font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2">Explore Solutions <ArrowRight size={14}/></button>
          </div>
        </section>
      </main>

      {/* --- HUMBLE FOOTER --- */}
      <footer className="bg-white border-t border-stone-100 py-24 text-center">
        <h2 className="text-2xl font-bold uppercase italic mb-8">Modern Dispatch <span className="text-[#FF6A00]">Global</span></h2>
        <div className="flex justify-center gap-10 font-bold text-[10px] uppercase tracking-[0.5em] text-stone-300 mb-12">
          <span>Humble Stories</span>
          <span>Practical Insight</span>
          <span>Community Feed</span>
        </div>
        <p className="text-stone-200 text-[9px] font-bold uppercase tracking-[0.5em]">
          <button onClick={() => setShowAdmin(!showAdmin)} className="hover:text-stone-900 transition-all p-4">©</button> 2024 • Copywriter: Valentine Wanjiru
        </p>
      </footer>

      {/* --- SECRET EMBASSY STUDIO (ADMIN) --- */}
      {showAdmin && (
        <div className="fixed inset-0 z-[100] bg-white/98 backdrop-blur-2xl p-4 md:p-10 overflow-y-auto flex items-center justify-center">
          <div className="max-w-6xl w-full bg-white border-[10px] border-stone-100 rounded-[5rem] overflow-hidden shadow-2xl">
            <div className="p-10 border-b-4 border-stone-50 flex items-center justify-between bg-stone-50/50">
              <div className="flex items-center gap-8">
                <div className="w-20 h-20 bg-black rounded-3xl flex items-center justify-center text-white shadow-xl">
                  <Briefcase size={36} />
                </div>
                <div>
                  <h2 className="text-4xl font-black uppercase tracking-tighter italic leading-none">The Digital Embassy</h2>
                  <p className="text-[10px] font-bold uppercase text-stone-400 tracking-[0.4em] mt-3 italic italic">Global Hub • Katalena Engine Active</p>
                </div>
              </div>
              <button onClick={() => setShowAdmin(false)} className="bg-stone-100 hover:bg-[#FF6A00] text-[#1A1A1A] hover:text-white p-5 rounded-[2rem] transition-all"><X size={40} /></button>
            </div>
            
            <div className="p-12 space-y-8 flex-1">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {['Paris', 'Berlin', 'Madrid', 'Global'].map(city => (
                  <div key={city} className="bg-stone-50 p-6 rounded-[2.5rem] border border-stone-100 text-center">
                    <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2 italic">{city} Sync</p>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.4)]"></div>
                      <span className="font-bold text-[10px] uppercase italic text-stone-900 tracking-widest">Active</span>
                    </div>
                  </div>
                ))}
              </div>

              {[
                { time: '23:00 - 01:00', task: 'Localized Sync & Prep', detail: 'Primary Global block. Transform anchor stories to FR/ES/DE. Apply Cultural Nuance Protocol.', icon: Globe },
                { time: '09:00 - 12:00', task: 'Main Editorial Engine', detail: 'Draft 2,500 word anchor story. Humour, Real Life Examples & Humble Tone.', icon: Palette },
                { time: '13:00 - 15:00', task: 'Repurposing Cycle', detail: 'Video/Podcast transcription into humanized, localized blog posts.', icon: TrendingUp },
                { time: '16:00 - 18:00', task: 'Strategic Distribution', detail: 'Publishing at peak engagement times for Global Audiences.', icon: Target },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-10 p-10 bg-stone-50/50 border-2 border-stone-100 rounded-[3.5rem] group hover:border-[#FF6A00] transition-all">
                  <span className="text-stone-300 font-bold text-2xl tabular-nums w-48 italic leading-none">{item.time}</span>
                  <div className="bg-white p-6 rounded-2xl text-stone-900 group-hover:bg-[#FF6A00] group-hover:text-white transition-all shadow-sm">
                    {React.createElement(item.icon, { size: 32 })}
                  </div>
                  <div>
                    <p className="font-bold text-2xl mb-2 uppercase text-stone-900 tracking-tight italic leading-none">{item.task}</p>
                    <p className="text-stone-500 text-lg italic leading-relaxed">{item.detail}</p>
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
