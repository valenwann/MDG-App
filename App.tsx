import React, { useState, useEffect } from 'react';
import { 
  Globe, Shield, Users, Palette, Home, 
  GraduationCap, Scale, User, Plane, Sun, 
  Clock, DollarSign, Menu, X, Share2, ArrowRight,
  TrendingUp, Mail, Briefcase, Target, Eye, Zap,
  CheckCircle2, AlertCircle, Languages, Heart, Sparkles,
  BookOpen, Coffee, Globe2
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const googleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "name": "The Modern Dispatch Global",
    "founder": "Valentine Wanjiru",
    "url": "https://mdg-app.vercel.app",
    "description": "A global space for honest storytelling and human insights."
  };

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(googleSchema) }} />

      {/* --- HUMBLE NAV --- */}
      <nav className="bg-white/90 backdrop-blur-md border-b-2 border-stone-100 sticky top-0 z-[60] py-4">
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
            <div className="flex items-center gap-2 bg-stone-50 p-1 rounded-lg border border-stone-100">
              {['EN', 'ES', 'DE', 'FR'].map(lang => (
                <button key={lang} onClick={() => setLanguage(lang)} className={`px-3 py-1 rounded-md font-bold text-[10px] transition-all ${language === lang ? 'bg-black text-white' : 'text-stone-400'}`}>{lang}</button>
              ))}
            </div>
            <button onClick={() => setShowPortfolio(true)} className="text-xs font-black uppercase tracking-widest hover:text-[#FF6A00] transition-colors italic">Portfolio</button>
          </div>
        </div>
      </nav>

      {/* --- MENU OVERLAY --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[55] bg-white p-10 pt-32 overflow-y-auto">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map(cat => (
              <button key={cat.name} className="flex items-center gap-6 text-4xl font-bold uppercase italic text-stone-300 hover:text-[#FF6A00] transition-all group text-left">
                {React.createElement(cat.icon, { size: 32 })} <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {!showPortfolio ? (
        <main className="max-w-7xl mx-auto px-6 py-12">
          {/* --- HERO --- */}
          <section className="mb-24 text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-10 text-[#1A1A1A]">
              Sharing Honest <br/> <span className="text-[#FF6A00] italic underline decoration-[10px] underline-offset-[12px]">Stories.</span>
            </h2>
            <p className="text-xl md:text-2xl text-stone-500 leading-relaxed mb-12 italic font-medium">
              "A quiet space for insights that bridge the gaps between Nairobi and the world."
            </p>
          </section>

          {/* --- MAGNIFIED TOOLS (CAN'T BE MISSED) --- */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="bg-[#FF6A00] p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
               <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                      <Clock size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter italic">Global Standard Time</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="flex justify-between items-end border-b-4 border-white/20 pb-6">
                      <span className="text-3xl font-black uppercase italic tracking-tighter">Nairobi</span>
                      <span className="text-6xl font-black tabular-nums tracking-tighter leading-none">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-xl font-bold uppercase text-white/60">London</span>
                      <span className="text-3xl font-black tabular-nums tracking-tighter opacity-80 italic">08:00 AM</span>
                    </div>
                  </div>
               </div>
               <Globe2 className="absolute -right-20 -bottom-20 text-white/5 group-hover:rotate-45 transition-transform duration-1000" size={400} />
            </div>

            <div className="bg-stone-900 p-12 rounded-[4rem] text-white shadow-2xl flex flex-col justify-center relative overflow-hidden group">
               <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-[#FF6A00] rounded-2xl">
                      <DollarSign size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter italic">Live Currency</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b-4 border-stone-800 pb-6">
                       <span className="text-3xl font-black uppercase italic tracking-tighter">USD / KES</span>
                       <span className="text-5xl font-black text-[#FF6A00] tabular-nums tracking-tighter">132.40</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-xl font-bold uppercase text-stone-500">EUR / USD</span>
                       <span className="text-3xl font-black text-green-400 tabular-nums tracking-tighter">1.08</span>
                    </div>
                  </div>
               </div>
            </div>
          </section>

          {/* --- BLOG FEED --- */}
          <section className="mb-32">
            <div className="flex items-center justify-between mb-16 border-b-4 border-stone-100 pb-8">
              <h3 className="text-3xl font-black uppercase tracking-widest italic">The Humble Feed</h3>
              <span className="bg-stone-50 text-stone-400 px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest border border-stone-100 italic italic italic">Global • {language}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[1, 2, 3].map(i => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-[4/5] bg-stone-50 rounded-[3rem] overflow-hidden mb-8 border-2 border-stone-50 group-hover:border-[#FF6A00] transition-all shadow-sm group-hover:shadow-2xl">
                    <img src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?auto=format&fit=crop&q=80`} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt="Blog" />
                  </div>
                  <p className="text-[#FF6A00] font-black uppercase text-xs tracking-widest mb-4 italic italic">Insight Vol. {i}</p>
                  <h4 className="text-3xl font-black leading-none uppercase tracking-tighter group-hover:text-[#FF6A00] transition-colors italic italic">Real human stories that travel across borders.</h4>
                </div>
              ))}
            </div>
          </section>

          {/* --- MISSION --- */}
          <section className="bg-stone-50 border-4 border-stone-100 p-12 md:p-24 rounded-[5rem] mb-32 text-center">
            <h3 className="text-4xl font-black text-stone-900 mb-12 uppercase italic tracking-tighter">Our Simple Goal</h3>
            <p className="text-stone-500 text-2xl md:text-4xl leading-tight mb-16 max-w-5xl mx-auto italic font-medium leading-relaxed italic">
              "To share stories that matter, insights that help, and real human experiences that you can actually trust."
            </p>
            <div className="h-2 w-32 bg-[#FF6A00] mx-auto mb-8 shadow-lg"></div>
            <p className="text-stone-300 uppercase font-black text-xs tracking-[0.6em] italic italic">Real Stories. Practical Insight. Global Perspective.</p>
          </section>
        </main>
      ) : (
        /* --- PORTFOLIO PAGE --- */
        <main className="max-w-5xl mx-auto px-6 py-24 animate-fade-in">
          <div className="mb-24">
            <h2 className="text-6xl md:text-8xl font-black uppercase italic mb-10 tracking-tighter text-[#1A1A1A]">Valentine <span className="text-[#FF6A00]">Wanjiru</span></h2>
            <p className="text-3xl md:text-5xl font-bold text-stone-400 italic mb-12 leading-none border-l-[16px] border-[#FF6A00] pl-10">
              "Copywriter, Storyteller, and Global Insight Strategist."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
             <div className="space-y-12 text-[#1A1A1A]">
                <h3 className="text-3xl font-black uppercase tracking-tighter italic border-b-4 border-stone-100 pb-4">The Writing Style</h3>
                <div className="space-y-8 italic italic">
                   <p className="text-2xl font-bold text-stone-600 leading-tight italic">01 / Human-Centered: Complex topics made simple and warm.</p>
                   <p className="text-2xl font-bold text-stone-600 leading-tight italic">02 / Psychology-Led: Understanding what moves global audiences.</p>
                   <p className="text-2xl font-bold text-stone-600 leading-tight italic">03 / Cross-Cultural: Bridging the gap between Africa & Europe.</p>
                </div>
             </div>
             <div className="bg-[#FF6A00] p-12 rounded-[4rem] text-white shadow-2xl">
                <h3 className="text-3xl font-black uppercase italic mb-8 tracking-tighter italic">Let's Partner</h3>
                <p className="text-xl mb-10 font-bold leading-relaxed opacity-90 italic italic">I help brands tell stories that resonate across borders. High-ticket reports, blog series, or localized strategy.</p>
                <button className="bg-white text-black w-full py-6 rounded-3xl font-black uppercase tracking-widest text-sm hover:bg-stone-900 hover:text-white transition-all">Send an Inquiry</button>
             </div>
          </div>
        </main>
      )}

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t-2 border-stone-100 py-32 text-center">
        <h2 className="text-2xl font-black uppercase italic mb-12 text-stone-200 italic">The Modern Dispatch <span className="text-stone-300 italic">Global</span></h2>
        <div className="flex flex-col items-center gap-6">
           <button onClick={() => setShowAdmin(!showAdmin)} className="text-[10px] font-black uppercase tracking-[0.6em] text-stone-100 hover:text-[#FF6A00] transition-all p-4">©</button>
           <p className="text-[11px] font-black uppercase tracking-[0.4em] text-stone-300 italic italic">2024 • Copywriter: Valentine Wanjiru</p>
        </div>
      </footer>

      {/* --- SECRET STUDIO (ADMIN) --- */}
      {showAdmin && (
        <div className="fixed inset-0 z-[100] bg-white/98 backdrop-blur-3xl p-4 md:p-10 overflow-y-auto flex items-center justify-center">
          <div className="max-w-6xl w-full bg-white border-[12px] border-stone-100 rounded-[5rem] overflow-hidden shadow-2xl">
            <div className="p-12 border-b-8 border-stone-50 flex items-center justify-between bg-stone-50/30">
              <div className="flex items-center gap-8">
                <div className="w-20 h-20 bg-black rounded-3xl flex items-center justify-center text-white shadow-xl">
                  <Briefcase size={40} />
                </div>
                <div>
                  <h2 className="text-4xl font-black uppercase tracking-tighter italic leading-none text-[#1A1A1A]">The Digital Embassy</h2>
                  <p className="text-[11px] font-bold uppercase text-stone-400 tracking-[0.5em] mt-3 italic italic italic italic">Global Engine • Katalena Status: Active</p>
                </div>
              </div>
              <button onClick={() => setShowAdmin(false)} className="bg-stone-100 hover:bg-[#FF6A00] text-black hover:text-white p-6 rounded-3xl transition-all shadow-sm"><X size={44} /></button>
            </div>
            
            <div className="p-12 lg:p-20 space-y-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                {['Paris Edition', 'Berlin Edition', 'Madrid Edition', 'Global Hub'].map(city => (
                  <div key={city} className="bg-stone-50 p-8 rounded-[2.5rem] border-2 border-stone-100 text-center group hover:border-[#FF6A00] transition-all">
                    <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3 italic">{city}</p>
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
                      <span className="font-black text-xs uppercase italic text-stone-900 tracking-tighter">Localized Sync</span>
                    </div>
                  </div>
                ))}
              </div>

              {[
                { time: '23:00 - 01:00', task: 'International Night Shift', detail: 'Global sync block. Transform anchor stories to FR/ES/DE. Apply Human Instinct & Cultural Nuance Protocols.', icon: Globe },
                { time: '09:00 - 12:00', task: 'Main Editorial Engine', detail: 'Draft 2,500 word anchor story. Humour, Real Life Examples & Humble Blog Tone.', icon: Palette },
                { time: '13:00 - 15:00', task: 'Repurposing Cycle', detail: 'Transcription of high-value global media into localized humanized posts.', icon: TrendingUp },
                { time: '16:00 - 18:00', task: 'Strategic Distribution', detail: 'Publishing at peak engagement for EU & African morning markets.', icon: Target },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-12 p-12 bg-stone-50/50 border-4 border-stone-100 rounded-[4rem] group hover:border-[#FF6A00] transition-all transform hover:-translate-x-2">
                  <span className="text-stone-300 font-black text-3xl tabular-nums w-56 italic italic leading-none">{item.time}</span>
                  <div className="bg-white p-8 rounded-[2.2rem] text-[#FF6A00] shadow-xl group-hover:bg-[#FF6A00] group-hover:text-white transition-all transform group-hover:rotate-6 border-2 border-stone-100">
                    {React.createElement(item.icon, { size: 40 })}
                  </div>
                  <div>
                    <p className="font-black text-4xl mb-2 uppercase text-stone-900 tracking-tighter italic italic leading-none">{item.task}</p>
                    <p className="text-stone-400 text-xl italic leading-relaxed font-medium italic">{item.detail}</p>
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
