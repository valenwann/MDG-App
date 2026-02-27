import React, { useState, useEffect } from 'react';
import { 
  Globe, Shield, Users, Palette, Home, 
  GraduationCap, Scale, User, Plane, Sun, 
  Clock, DollarSign, Menu, X, Share2, ArrowRight,
  TrendingUp, Mail, Briefcase, Target, Eye, Zap,
  CheckCircle2, AlertCircle, Languages, Heart, Sparkles,
  BookOpen, Coffee
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

  // --- GOOGLE AUTHORITY SCHEMA (The Invisible Map) ---
  const googleSecretWeapon = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "name": "The Modern Dispatch Global",
    "founder": "Valentine Wanjiru",
    "url": "https://mdg-app.vercel.app",
    "knowsLanguage": ["en-US", "es-ES", "de-DE", "fr-FR"],
    "description": "A global space for honest storytelling and practical human insight."
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

      {/* --- HUMBLE NAV --- */}
      <nav className="bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/5 sticky top-0 z-[60]">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-3 bg-[#111111] border border-white/10 text-[#FF6A00] rounded-2xl hover:bg-[#FF6A00] hover:text-white transition-all shadow-xl">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <h1 className="text-xl md:text-3xl font-bold tracking-tighter uppercase italic leading-none">
              Modern Dispatch <span className="text-[#FF6A00]">Global</span>
            </h1>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-2 bg-[#111111] p-1.5 rounded-lg border border-white/5">
              {['EN', 'ES', 'DE', 'FR'].map(lang => (
                <button 
                  key={lang} 
                  onClick={() => setLanguage(lang)} 
                  className={`px-3 py-1 rounded-md font-bold text-[10px] transition-all ${language === lang ? 'bg-[#FF6A00] text-white' : 'text-[#A1A1AA] hover:text-white'}`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <div className="text-right border-r border-white/5 pr-6">
              <p className="text-[10px] font-bold uppercase text-[#F4B400] tracking-widest mb-1 italic">Global Standard Time</p>
              <p className="text-xl font-bold tabular-nums tracking-tighter">{time.toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
      </nav>

      {/* --- OVERLAY MENU (Fixed Icon Fix) --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[55] bg-[#0A0A0A] p-10 pt-32 overflow-y-auto">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map(cat => (
              <button key={cat.name} className="flex items-center gap-6 text-3xl font-bold uppercase italic text-[#A1A1AA] hover:text-[#FF6A00] transition-all group text-left">
                <div className="w-12 h-12 bg-[#111111] rounded-xl flex items-center justify-center text-[#FF6A00] border border-white/5 group-hover:bg-[#FF6A00] group-hover:text-white transition-all shadow-lg">
                  {React.createElement(cat.icon, { size: 32 })}
                </div>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* --- HUMBLE HERO --- */}
        <section className="mb-24 text-center max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="h-px w-12 bg-[#FF6A00]"></div>
            <span className="text-[#F4B400] font-bold uppercase text-[10px] tracking-[0.4em] italic leading-none">A space for human connection</span>
            <div className="h-px w-12 bg-[#FF6A00]"></div>
          </div>
          <h2 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-10">
            Stories That <br/> <span className="text-[#FF6A00] italic underline decoration-[12px] underline-offset-[12px]">Travel.</span>
          </h2>
          <p className="text-xl md:text-3xl text-[#A1A1AA] leading-relaxed mb-12 italic font-medium">
            "We explore the quiet shifts and global stories that connect us—from Nairobi to the world."
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-[#FF6A00] text-white px-12 py-6 rounded-2xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_50px_rgba(255,106,0,0.3)] hover:-translate-y-1 transition-all">
              Explore Stories
            </button>
            <button className="border border-white/10 text-white px-12 py-6 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all">
              Our Vision
            </button>
          </div>
        </section>

        {/* --- ABOUT & MISSION --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-stretch">
          <div className="bg-[#111111] p-12 rounded-[3.5rem] border border-white/5 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <BookOpen size={200} />
            </div>
            <h3 className="text-3xl font-bold text-[#F4B400] mb-8 uppercase italic tracking-tighter">About MDG</h3>
            <p className="text-white text-xl leading-relaxed mb-6 font-medium">
              We started this as a small space to document the stories that often go unheard. We believe the right insight at the right time can change a life.
            </p>
            <p className="text-[#A1A1AA] text-lg leading-relaxed italic">
              Whether you're building a career, exploring new opportunities, or simply staying informed, we're here to walk that path with you through honest, well-researched content.
            </p>
          </div>
          <div className="p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-[#FF6A00] mb-10 uppercase italic tracking-tighter">Our Core Values</h3>
            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-[#111111] rounded-2xl flex items-center justify-center text-[#F4B400] shrink-0 shadow-xl border border-white/5">
                  <Heart size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-2xl mb-2 uppercase tracking-tight">Honest Connection</h4>
                  <p className="text-[#A1A1AA] text-lg">Real life experiences that people can trust and feel seen by.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-[#111111] rounded-2xl flex items-center justify-center text-[#F4B400] shrink-0 shadow-xl border border-white/5">
                  <Sparkles size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-2xl mb-2 uppercase tracking-tight">Practical Insight</h4>
                  <p className="text-[#A1A1AA] text-lg">Information designed to be used, not just read.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- ARTICLE FEED --- */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-12 border-b-2 border-white/5 pb-6">
            <h3 className="text-3xl font-bold uppercase tracking-tighter italic">Latest Insights</h3>
            <span className="text-[#FF6A00] text-xs font-bold uppercase tracking-[0.3em]">Edition: {language}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-[#111111] rounded-[2.5rem] overflow-hidden mb-8 border border-white/5 group-hover:border-[#FF6A00] transition-all shadow-2xl">
                  <img src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?auto=format&fit=crop&q=80`} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" alt="Article" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#FF6A00] font-bold uppercase text-[10px] tracking-widest italic">Lifestyle</span>
                  <div className="w-1 h-1 rounded-full bg-stone-700"></div>
                  <span className="text-stone-500 font-bold text-[10px] uppercase tracking-widest">Feb 2024</span>
                </div>
                <h4 className="text-2xl font-bold leading-tight group-hover:text-[#F4B400] transition-all uppercase tracking-tighter">Global Trends: Real Human Insights for 2024.</h4>
              </div>
            ))}
          </div>
        </section>

        {/* --- GLOBAL TOOLS --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="md:col-span-2 bg-[#111111] p-12 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
            <h3 className="text-[#F4B400] font-bold uppercase text-xs tracking-[0.4em] mb-10 italic flex items-center gap-3">
              <Clock size={16} /> The Dispatch Clock
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="flex justify-between items-center border-b border-white/5 pb-6">
                <span className="font-bold text-2xl uppercase tracking-tighter italic text-[#A1A1AA]">Nairobi</span>
                <span className="text-[#FF6A00] font-mono text-3xl tabular-nums">{time.toLocaleTimeString()}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-6">
                <span className="font-bold text-2xl uppercase tracking-tighter italic text-[#A1A1AA]">Paris</span>
                <span className="text-[#FF6A00] font-mono text-3xl tabular-nums">08:00 AM</span>
              </div>
            </div>
          </div>
          <div className="bg-[#FF6A00] p-12 rounded-[3.5rem] flex flex-col justify-center text-center shadow-2xl group">
            <Coffee size={48} className="mx-auto mb-6 group-hover:rotate-12 transition-transform" />
            <p className="font-bold text-2xl mb-8 leading-tight italic uppercase tracking-tighter">"Connecting global insights."</p>
            <div className="space-y-3">
              <div className="bg-black/20 p-4 rounded-2xl font-mono text-sm font-bold">USD/KES 132.4</div>
              <div className="bg-black/20 p-4 rounded-2xl font-mono text-sm font-bold">EUR/USD 1.08</div>
            </div>
          </div>
        </section>

        {/* --- HUMBLE RECOMMENDATION (TRUST GUARD) --- */}
        <section className="bg-[#111111] rounded-[4rem] p-12 md:p-24 text-center border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 p-20 opacity-5 pointer-events-none">
            <Shield size={300} />
          </div>
          <div className="relative z-10">
            <div className="flex justify-center mb-10">
              <div className="w-20 h-20 bg-[#0A0A0A] rounded-[2rem] flex items-center justify-center text-[#FF6A00] border border-white/5 shadow-2xl">
                <Shield size={40} />
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic uppercase tracking-tighter">Your Digital Peace.</h2>
            <p className="text-[#A1A1AA] text-xl md:text-2xl mb-12 max-w-3xl mx-auto italic leading-relaxed">
              "Beyond storytelling, we care about your security. We believe Trust Guard is an essential solution for every modern global citizen."
            </p>
            <button className="bg-white text-black px-16 py-7 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#FF6A00] hover:text-white transition-all shadow-xl">
              Learn About Trust Guard
            </button>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0A0A0A] border-t border-white/5 py-24 text-center">
        <h2 className="text-3xl font-black uppercase italic mb-10 tracking-tightest">Modern Dispatch <span className="text-[#FF6A00]">Global</span></h2>
        <div className="flex justify-center gap-10 font-bold text-[10px] uppercase tracking-[0.4em] text-stone-600 mb-12 italic">
          <span>Humble Stories</span>
          <span>Global Community</span>
          <span>Practical Insight</span>
        </div>
        <p className="text-[#A1A1AA] text-[10px] font-bold uppercase tracking-[0.5em] opacity-40">
          <button onClick={() => setShowAdmin(!showAdmin)} className="hover:text-white transition-all transform hover:scale-150 p-4">©</button> 2024. Editor: Valentine Wanjiru
        </p>
      </footer>

      {/* --- SECRET STUDIO (THE DIGITAL EMBASSY HUB) --- */}
      {showAdmin && (
        <div className="fixed inset-0 z-[100] bg-[#0A0A0A]/98 backdrop-blur-2xl p-4 md:p-10 overflow-y-auto flex items-center justify-center">
          <div className="max-w-6xl w-full bg-[#111111] border border-white/10 rounded-[4.5rem] overflow-hidden shadow-[0_0_100px_rgba(255,106,0,0.25)]">
            <div className="p-12 border-b border-white/5 flex items-center justify-between bg-[#111111]">
              <div className="flex items-center gap-8">
                <div className="w-24 h-24 bg-[#FF6A00] rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl">
                  <Briefcase size={44} />
                </div>
                <div>
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic text-white">The Digital Embassy</h2>
                  <p className="text-[11px] font-bold uppercase text-[#A1A1AA] tracking-[0.5em] mt-3 italic">Autonomous Editorial Sync • Katalena Engine Active</p>
                </div>
              </div>
              <button onClick={() => setShowAdmin(false)} className="bg-white/5 hover:bg-[#FF6A00] text-white p-6 rounded-[2rem] transition-all">
                <X size={44} />
              </button>
            </div>
            
            <div className="p-12 lg:p-20 space-y-10 flex-1">
              {/* Localized Sync Status */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                {['Paris Edition', 'Berlin Edition', 'Madrid Edition', 'Global Feed'].map(region => (
                  <div key={region} className="bg-[#0A0A0A] p-6 rounded-3xl border border-white/5 text-center shadow-inner">
                    <p className="text-[10px] font-black text-[#A1A1AA] uppercase mb-3 tracking-widest italic">{region}</p>
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
                      <span className="font-black text-xs uppercase italic text-white">Localized Sync</span>
                    </div>
                  </div>
                ))}
              </div>

              {[
                { time: '06:00 - 08:00', task: 'Localized Transformation', detail: 'Generate DE/ES/FR versions. Apply Human Instinct & Cultural Nuance Protocols.', icon: Globe },
                { time: '09:00 - 12:00', task: 'Main Editorial Engine', detail: 'Draft 2,500 word anchor story. Humour, Real Life Examples & Human Tone.', icon: Palette },
                { time: '13:00 - 15:00', task: 'Autonomous Repurposing', detail: 'Video/Podcast transcription into humanized, localized articles.', icon: TrendingUp },
                { time: '16:00 - 18:00', task: 'Timezone-Optimized Post', detail: 'Publishing at peak engagement times for EU, Africa and Global audiences.', icon: Target },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-10 p-10 bg-[#0A0A0A] border-4 border-black rounded-[3.5rem] group hover:border-[#FF6A00] transition-all">
                  <span className="text-[#A1A1AA] font-black text-3xl tabular-nums w-48 italic italic leading-none">{item.time}</span>
                  <div className="bg-[#111111] p-8 rounded-[2.2rem] shadow-2xl text-[#FF6A00] group-hover:bg-[#FF6A00] group-hover:text-white transition-all transform group-hover:rotate-6">
                    {React.createElement(item.icon, { size: 36 })}
                  </div>
                  <div>
                    <p className="font-black text-3xl mb-2 uppercase text-white tracking-tight italic">{item.task}</p>
                    <p className="text-[#A1A1AA] text-lg font-medium tracking-wide italic leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}

              <div className="bg-[#FF6A00] text-black p-12 rounded-[4rem] shadow-2xl">
                 <h4 className="text-xl font-black uppercase tracking-widest mb-8 italic flex items-center gap-4">
                   <Sparkles size={32} /> Human Instinct Protocol Active
                 </h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-black uppercase text-xs italic">
                    <div className="flex items-center gap-4 bg-black/10 p-5 rounded-2xl"><CheckCircle2 size={20}/> Cultural "Real Life" Examples</div>
                    <div className="flex items-center gap-4 bg-black/10 p-5 rounded-2xl"><CheckCircle2 size={20}/> Timezone Optimized Engagement</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
