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

  // --- GOOGLE AUTHORITY SCHEMA ---
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
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#FF6A00] selection:text-black">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(googleSecretWeapon) }}
      />

      {/* --- HUMBLE NAV --- */}
      <nav className="bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/5 sticky top-0 z-[60]">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-3 bg-[#111111] border border-white/10 text-[#FF6A00] rounded-2xl hover:bg-[#FF6A00] hover:text-white transition-all">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              <p className="text-[10px] font-bold uppercase text-[#F4B400] tracking-widest italic">Global Clock</p>
              <p className="text-xl font-bold tabular-nums tracking-tighter">{time.toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MENU OVERLAY --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[55] bg-[#0A0A0A] p-10 pt-32 overflow-y-auto">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map(cat => (
              <button key={cat.name} className="flex items-center gap-6 text-3xl font-bold uppercase italic text-[#A1A1AA] hover:text-[#FF6A00] transition-all group">
                <cat.icon size={32} /> {cat.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* --- HUMBLE HERO SECTION --- */}
        <section className="mb-24 text-center max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="h-px w-12 bg-[#FF6A00]"></div>
            <span className="text-[#F4B400] font-bold uppercase text-[10px] tracking-[0.4em] italic">A space for real stories</span>
            <div className="h-px w-12 bg-[#FF6A00]"></div>
          </div>
          <h2 className="text-5xl md:text-8xl font-bold uppercase leading-[0.9] tracking-tighter mb-10">
            Sharing Insights <br/> <span className="text-[#FF6A00] italic">Beyond Borders.</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#A1A1AA] leading-relaxed mb-12 italic">
            "Just a simple blog where we explore the stories that connect us—from Nairobi to the world."
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-[#FF6A00] text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(255,106,0,0.3)] transition-all">
              Explore Today's Stories
            </button>
            <button className="border border-white/10 text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all">
              Meet the Founder
            </button>
          </div>
        </section>

        {/* --- ABOUT & MISSION (HUMBLE VERSION) --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-center">
          <div className="bg-[#111111] p-12 rounded-[3rem] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <BookOpen size={200} />
            </div>
            <h3 className="text-3xl font-bold text-[#F4B400] mb-8 uppercase italic tracking-tighter">About the Blog</h3>
            <p className="text-[#FFFFFF] text-lg leading-relaxed mb-6 font-medium">
              We started this as a small space to document the "Silent Shifts" happening in our world. We believe that the right information at the right time can change someone’s direction.
            </p>
            <p className="text-[#A1A1AA] text-lg leading-relaxed italic">
              Whether you're building a career, exploring new opportunities, or simply trying to stay informed, we're here to walk that path with you through honest, well-researched content.
            </p>
          </div>
          <div className="p-12">
            <h3 className="text-3xl font-bold text-[#FF6A00] mb-8 uppercase italic tracking-tighter">Our Mission</h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#111111] rounded-xl flex items-center justify-center text-[#F4B400] shrink-0">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Honest Storytelling</h4>
                  <p className="text-[#A1A1AA]">Real experiences that people can actually trust and relate to.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#111111] rounded-xl flex items-center justify-center text-[#F4B400] shrink-0">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Practical Insights</h4>
                  <p className="text-[#A1A1AA]">Information you can actually use to improve your daily life and business.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- ARTICLE FEED (SIMPLE LAYOUT) --- */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-6">
            <h3 className="text-2xl font-bold uppercase tracking-widest italic">Latest from the Blog</h3>
            <span className="text-[#A1A1AA] text-xs font-bold uppercase tracking-widest">Global Feed • {language}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-[#111111] rounded-3xl overflow-hidden mb-6 border border-white/5 group-hover:border-[#FF6A00] transition-all">
                  <img src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?auto=format&fit=crop&q=80`} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700" alt="Article" />
                </div>
                <h4 className="text-2xl font-bold leading-tight group-hover:text-[#F4B400] transition-all uppercase tracking-tighter">Exploring Global Trends: Real Insights for 2024.</h4>
                <p className="text-[#A1A1AA] mt-4 line-clamp-2">How the modern world is shifting and what it means for your local experience...</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- GLOBAL TOOLS (MAGNIFIED) --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="bg-[#111111] p-10 rounded-[2.5rem] border border-white/5">
            <h3 className="text-[#F4B400] font-bold uppercase text-[10px] tracking-widest mb-8 italic flex items-center gap-3">
              <Clock size={14} /> World Clocks
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="font-bold text-lg uppercase tracking-tighter italic text-[#A1A1AA]">Nairobi</span>
                <span className="text-[#FF6A00] font-mono text-xl">{time.toLocaleTimeString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg uppercase tracking-tighter italic text-[#A1A1AA]">London</span>
                <span className="text-[#FF6A00] font-mono text-xl">07:30 AM</span>
              </div>
            </div>
          </div>
          <div className="bg-[#111111] p-10 rounded-[2.5rem] border border-white/5 flex flex-col justify-center text-center">
            <p className="font-bold text-xl mb-6 text-[#FFFFFF] italic">"We provide the tools to keep you connected."</p>
            <div className="flex justify-center gap-4">
              <div className="bg-[#0A0A0A] px-6 py-3 rounded-xl border border-white/5 font-mono text-green-400">USD/KES 132.4</div>
              <div className="bg-[#0A0A0A] px-6 py-3 rounded-xl border border-white/5 font-mono text-green-400">EUR/USD 1.08</div>
            </div>
          </div>
        </section>

        {/* --- RECOMMENDED RESOURCE (HUMBLE TRUST GUARD) --- */}
        <section className="bg-[#111111] rounded-[3rem] p-12 md:p-20 text-center border border-white/10">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-[#0A0A0A] rounded-2xl flex items-center justify-center text-[#FF6A00]">
              <Shield size={32} />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 italic uppercase tracking-tighter">Your Digital Safety.</h2>
          <p className="text-[#A1A1AA] text-lg md:text-xl mb-10 max-w-2xl mx-auto italic">
            "Beyond stories, we care about your security. Trust Guard is a resource we truly believe in for the modern global reader."
          </p>
          <button className="bg-white text-black px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#FF6A00] hover:text-white transition-all">
            Explore Safety Solutions
          </button>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0A0A0A] border-t border-white/5 py-20 text-center">
        <h2 className="text-2xl font-bold uppercase italic mb-8">Modern Dispatch <span className="text-[#FF6A00]">Global</span></h2>
        <p className="text-[#A1A1AA] text-[10px] font-bold uppercase tracking-[0.5em] mb-10 opacity-40">
          <button onClick={() => setShowAdmin(!showAdmin)} className="hover:text-white transition-all transform hover:scale-125">©</button> 2024. Editor: Valentine Wanjiru
        </p>
        <div className="flex justify-center gap-10 font-bold text-[10px] uppercase tracking-widest text-stone-600">
          <span>Humble Stories</span>
          <span>Global Community</span>
          <span>Practical Insights</span>
        </div>
      </footer>

      {/* --- SECRET STUDIO (THE DIGITAL EMBASSY) --- */}
      {showAdmin && (
        <div className="fixed inset-0 z-[100] bg-[#0A0A0A]/98 backdrop-blur-2xl p-4 md:p-10 overflow-y-auto flex items-center justify-center">
          <div className="max-w-6xl w-full bg-[#111111] border border-white/10 rounded-[4rem] overflow-hidden shadow-2xl">
            <div className="p-10 border-b border-white/10 flex items-center justify-between bg-[#111111]">
              <div className="flex items-center gap-8">
                <div className="w-20 h-20 bg-[#FF6A00] rounded-3xl flex items-center justify-center text-white">
                  <Briefcase size={40} />
                </div>
                <div>
                  <h2 className="text-4xl font-bold uppercase text-white tracking-tighter italic">The Digital Embassy</h2>
                  <p className="text-[10px] font-bold uppercase text-[#A1A1AA] tracking-[0.4em] mt-2 italic">Editorial Schedule • Katalena Global Sync</p>
                </div>
              </div>
              <button onClick={() => setShowAdmin(false)} className="bg-white/5 hover:bg-[#FF6A00] text-white p-5 rounded-2xl transition-all">
                <X size={40} />
              </button>
            </div>
            
            <div className="p-12 space-y-8 flex-1">
              {/* Localization Status Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {['Paris', 'Berlin', 'Madrid', 'Global'].map(city => (
                  <div key={city} className="bg-[#0A0A0A] p-4 rounded-2xl border border-white/5 text-center">
                    <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1">{city} Sync</p>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-bold text-xs uppercase italic">Active</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Editorial Schedule */}
              {[
                { time: '06:00 - 08:00', task: 'Localized Transformation', detail: 'Generate DE/ES/FR versions. Apply Cultural Nuance Protocol.', icon: Globe },
                { time: '09:00 - 12:00', task: 'Main Editorial Engine', detail: 'Draft 2,500 word anchor story. Humour & Human tone.', icon: Palette },
                { time: '13:00 - 15:00', task: 'Repurposing Cycle', detail: 'Video/Podcast transcription to humanized articles.', icon: TrendingUp },
                { time: '16:00 - 18:00', task: 'Optimized Distribution', detail: 'Timezone-optimized publishing across global networks.', icon: Target },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-10 p-10 bg-[#0A0A0A] border border-white/5 rounded-[3rem] group hover:border-[#FF6A00] transition-all">
                  <span className="text-[#A1A1AA] font-bold text-2xl tabular-nums w-40 italic">{item.time}</span>
                  <div className="bg-[#111111] p-6 rounded-2xl text-[#FF6A00] group-hover:bg-[#FF6A00] group-hover:text-white transition-all">
                    {React.createElement(item.icon, { size: 36 })}
                  </div>
                  <div>
                    <p className="font-bold text-2xl mb-1 uppercase text-white">{item.task}</p>
                    <p className="text-[#A1A1AA] text-lg italic">{item.detail}</p>
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
