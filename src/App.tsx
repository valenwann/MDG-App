import React, { useState, useEffect } from 'react';
import { Globe, Shield, Users, Palette, Home, GraduationCap, Scale, User, Plane, Sun, Clock, DollarSign, Menu, X, Share2, ArrowRight, TrendingUp, Mail, Briefcase, Target, Eye, Zap, CheckCircle2, AlertCircle, Languages, Heart, Sparkles, BookOpen, Coffee, Globe2 } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    { name: 'Technology & Security', icon: Globe },
    { name: 'Business & Finance', icon: TrendingUp },
    { name: 'Home & Decor', icon: Home },
    { name: 'Education', icon: GraduationCap },
    { name: 'Family & Parenting', icon: Users },
    { name: 'Travel & Hobbies', icon: Plane },
    { name: 'Fashion & Wellness', icon: Sun },
  ];

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-sans selection:bg-[#FF6A00] selection:text-white">
      {/* --- TOP NAVIGATION --- */}
      <nav className="bg-white border-b border-stone-100 sticky top-0 z-[60] py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-3 bg-stone-50 hover:bg-[#FF6A00] hover:text-white rounded-2xl transition-all">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <div className="flex flex-col cursor-pointer" onClick={() => {setShowPortfolio(false); setShowAdmin(false);}}>
              <h1 className="text-xl md:text-3xl font-black tracking-tighter uppercase italic leading-none">
                Modern Dispatch <span className="text-[#FF6A00]">Global</span>
              </h1>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 mt-1 italic">Humble Stories • Global Perspective</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => setShowPortfolio(true)} className="text-xs font-black uppercase tracking-widest hover:text-[#FF6A00] transition-colors italic">Portfolio</button>
            <div className="flex items-center gap-2 bg-stone-50 p-1 rounded-lg border border-stone-100">
              {['EN', 'ES', 'DE', 'FR'].map(lang => (
                <button key={lang} onClick={() => setLanguage(lang)} className={`px-3 py-1 rounded-md font-bold text-[10px] transition-all ${language === lang ? 'bg-black text-white' : 'text-stone-400'}`}>{lang}</button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[55] bg-white p-10 pt-32 overflow-y-auto">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map(cat => (
              <button key={cat.name} className="flex items-center gap-6 text-4xl font-bold uppercase italic text-stone-300 hover:text-[#FF6A00] transition-all group">
                {React.createElement(cat.icon, { size: 32 })} <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {!showPortfolio ? (
        <main className="max-w-7xl mx-auto px-6 py-12">
          {/* --- HERO --- */}
          <header className="mb-24 text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-10">
              The Humble <br/> <span className="text-[#FF6A00] italic underline decoration-[10px] underline-offset-8">Dispatch.</span>
            </h2>
            <p className="text-xl md:text-2xl text-stone-500 italic">"Sharing honest stories and practical insights from Nairobi to the world."</p>
          </header>

          {/* --- MAGNIFIED TOOLS (CAN'T BE MISSED) --- */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="bg-[#FF6A00] p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-xl font-black uppercase italic mb-6">Global Standard Time</h3>
                  <div className="flex justify-between items-end border-b-4 border-white/20 pb-6">
                    <span className="text-3xl font-black italic tracking-tighter uppercase">Nairobi</span>
                    <span className="text-6xl font-black tabular-nums tracking-tighter leading-none">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
               </div>
            </div>
            <div className="bg-stone-900 p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden flex flex-col justify-center">
               <h3 className="text-xl font-black uppercase italic mb-6">Live Currency</h3>
               <div className="flex justify-between items-end border-b-4 border-stone-800 pb-6">
                  <span className="text-3xl font-black italic tracking-tighter uppercase">USD / KES</span>
                  <span className="text-6xl font-black text-[#FF6A00] tabular-nums tracking-tighter">132.40</span>
               </div>
            </div>
          </section>

          {/* --- MISSION --- */}
          <section className="bg-stone-50 p-12 md:p-24 rounded-[5rem] mb-32 border border-stone-100 text-center">
            <h3 className="text-3xl font-bold mb-8 uppercase italic">Our Simple Goal</h3>
            <p className="text-stone-600 text-xl md:text-3xl italic max-w-4xl mx-auto leading-relaxed">
              "To focus on honest storytelling, real life experiences, and well-researched content that you can actually trust."
            </p>
            <div className="h-2 w-32 bg-[#FF6A00] mx-auto mt-12 mb-8"></div>
            <p className="text-stone-300 uppercase font-black text-[10px] tracking-[0.5em] italic">Human Stories. Practical Insight. Global Perspective.</p>
          </section>

          {/* --- BLOG FEED --- */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
            {[1, 2, 3].map(i => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-stone-50 rounded-[3rem] overflow-hidden mb-8 border border-stone-100 group-hover:border-[#FF6A00] transition-all">
                  <img src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?auto=format&fit=crop&q=80`} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt="Blog" />
                </div>
                <h4 className="text-3xl font-black leading-none uppercase group-hover:text-[#FF6A00] transition-colors italic">Insights for the Modern Reader Vol. {i}</h4>
              </div>
            ))}
          </section>
        </main>
      ) : (
        /* --- PORTFOLIO PAGE --- */
        <main className="max-w-5xl mx-auto px-6 py-24 animate-fade-in">
          <div className="mb-24">
            <h2 className="text-6xl md:text-8xl font-black uppercase italic mb-10 tracking-tighter text-[#1A1A1A]">Valentine <span className="text-[#FF6A00]">Wanjiru</span></h2>
            <p className="text-3xl md:text-5xl font-bold text-stone-400 italic mb-12 border-l-[16px] border-[#FF6A00] pl-10">
              "Copywriter, Storyteller, and Global Insight Strategist."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
             <div className="space-y-12 text-[#1A1A1A]">
                <h3 className="text-3xl font-black uppercase tracking-tighter italic border-b-4 border-stone-100 pb-4">The Writing Style</h3>
                <p className="text-2xl font-bold text-stone-600 leading-tight italic italic italic italic italic">01 / Human-Centered: Warm and relatable narratives.</p>
                <p className="text-2xl font-bold text-stone-600 leading-tight italic italic italic italic italic">02 / Psychology-Led: Understanding global triggers.</p>
                <p className="text-2xl font-bold text-stone-600 leading-tight italic italic italic italic italic">03 / Cross-Cultural: Bridging continents.</p>
             </div>
             <div className="bg-[#FF6A00] p-12 rounded-[4rem] text-white shadow-2xl">
                <h3 className="text-3xl font-black uppercase italic mb-8 tracking-tighter italic italic italic italic italic">Let's Partner</h3>
                <button className="bg-white text-black w-full py-6 rounded-3xl font-black uppercase tracking-widest text-sm hover:bg-stone-900 hover:text-white transition-all">Send an Inquiry</button>
             </div>
          </div>
        </main>
      )}

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-stone-100 py-32 text-center">
        <h2 className="text-xl font-bold uppercase italic mb-8 text-stone-200 italic italic italic italic italic italic">The Modern Dispatch Global</h2>
        <div className="flex flex-col items-center gap-6">
           <button onClick={() => setShowAdmin(!showAdmin)} className="text-[10px] font-bold uppercase tracking-[0.6em] text-stone-100 hover:text-[#FF6A00] transition-all p-4">©</button>
           <p className="text-[11px] font-black uppercase tracking-[0.4em] text-stone-300 italic italic italic italic italic italic italic">2024 • Copywriter: Valentine Wanjiru</p>
        </div>
      </footer>

      {/* --- SECRET STUDIO (THE DIGITAL EMBASSY) --- */}
      {showAdmin && (
        <div className="fixed inset-0 z-[100] bg-white/98 backdrop-blur-3xl p-4 md:p-10 overflow-y-auto flex items-center justify-center">
          <div className="max-w-4xl w-full bg-white border border-stone-100 rounded-[5rem] overflow-hidden shadow-2xl">
            <div className="p-10 border-b-4 border-stone-50 flex items-center justify-between bg-stone-50">
              <h2 className="text-4xl font-black uppercase tracking-tighter italic text-[#1A1A1A]">The Digital Embassy Hub</h2>
              <button onClick={() => setShowAdmin(false)} className="bg-stone-100 p-5 rounded-[2rem] hover:bg-[#FF6A00] hover:text-white transition-all shadow-sm"><X size={40} /></button>
            </div>
            
            <div className="p-12 space-y-10 flex-1">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                {['Paris', 'Berlin', 'Madrid', 'Global'].map(city => (
                  <div key={city} className="bg-stone-50 p-8 rounded-[2.5rem] border-2 border-stone-100 text-center group hover:border-[#FF6A00] transition-all">
                    <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3 italic italic italic italic italic italic italic">{city} Sync</p>
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-black text-xs uppercase italic text-stone-900 tracking-tighter italic italic italic italic italic italic italic">Active</span>
                    </div>
                  </div>
                ))}
              </div>

              {[
                { time: '23:00 - 01:00', task: 'International Night Shift', detail: 'Transform stories to FR/ES/DE. Apply Human Instinct Protocol.', icon: Globe },
                { time: '09:00 - 12:00', task: 'Main Editorial Engine', detail: 'Draft 2,500 word anchor story. Humble Blog Tone.', icon: Palette },
                { time: '13:00 - 15:00', task: 'Repurposing Cycle', detail: 'Video/Podcast transcription into localized humanized posts.', icon: TrendingUp },
                { time: '16:00 - 18:00', task: 'Strategic Distribution', detail: 'Strategic global publishing.', icon: Target },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-10 p-10 bg-stone-50 rounded-[3.5rem] group hover:border-[#FF6A00] border-4 border-transparent transition-all">
                  <span className="text-stone-300 font-bold text-2xl tabular-nums w-48 italic italic italic italic italic italic italic italic">{item.time}</span>
                  <div className="bg-white p-6 rounded-2xl text-[#FF6A00] shadow-sm group-hover:bg-[#FF6A00] group-hover:text-white transition-all">
                    {React.createElement(item.icon, { size: 32 })}
                  </div>
                  <div>
                    <p className="font-black text-2xl uppercase text-stone-900 italic italic italic italic italic italic italic italic leading-none mb-1">{item.task}</p>
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
