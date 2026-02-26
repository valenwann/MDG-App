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
  const [language, setLanguage] = useState('EN'); // New Language Toggle
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
    <div className="min-h-screen bg-white font-sans text-stone-900 selection:bg-amber-100 selection:text-amber-900">
      {/* --- PREMIUM TOP NAVIGATION --- */}
      <nav className="bg-white border-b-8 border-stone-900 sticky top-0 z-[60]">
        <div className="max-w-[1600px] mx-auto px-6 h-28 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-3 bg-stone-100 hover:bg-amber-500 rounded-2xl transition-all group">
              {isMenuOpen ? <X size={40} /> : <Menu size={40} className="group-hover:rotate-180 transition-transform" />}
            </button>
            <div className="flex flex-col">
              <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic leading-none">
                The Modern Dispatch <span className="text-amber-500 underline decoration-8 underline-offset-8">Global</span>
              </h1>
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-400 mt-2 italic">Global Media Empire • Founder: Valentine Wanjiru</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            {/* --- NEW LANGUAGE SELECTOR --- */}
            <div className="flex items-center gap-3 bg-stone-100 p-2 rounded-xl border-2 border-stone-200">
              <Languages size={20} className="text-stone-400" />
              {['EN', 'ES', 'DE'].map((lang) => (
                <button 
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded-lg font-black text-xs transition-all ${language === lang ? 'bg-stone-900 text-white shadow-lg' : 'text-stone-400 hover:text-stone-900'}`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <div className="flex flex-col items-end border-r-4 border-stone-100 pr-10">
              <span className="text-xs font-black uppercase tracking-widest text-amber-600 mb-1 flex items-center gap-2">
                <Clock size={14} /> Global Time
              </span>
              <span className="text-3xl font-black tabular-nums tracking-tighter">{time.toLocaleTimeString()}</span>
            </div>
            <button className="bg-stone-900 text-white px-10 py-5 font-black rounded-full hover:bg-amber-500 hover:text-stone-900 transition-all uppercase tracking-widest text-sm shadow-xl hover:shadow-amber-200">
              Subscribe
            </button>
          </div>
        </div>
      </nav>

      {/* --- NAVIGATION MENU OVERLAY --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[55] bg-stone-900/95 backdrop-blur-xl p-10 pt-40 overflow-y-auto">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {categories.map((cat) => (
              <button key={cat.name} className="text-white text-left group">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-stone-900 group-hover:scale-110 transition-transform">
                    {React.createElement(cat.icon, { size: 28 })}
                  </div>
                  <span className="text-3xl font-black uppercase tracking-tighter group-hover:text-amber-500 transition-colors">
                    {cat.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <main className="max-w-[1600px] mx-auto px-6 py-12">
        {/* --- THE "NETFLIX" HERO --- */}
        <section className="grid grid-cols-1 xl:grid-cols-12 gap-16 mb-32 items-center">
          <div className="xl:col-span-7">
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-stone-900 text-white px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs">Category: Global Tech</span>
              <span className="w-20 h-1 bg-amber-500"></span>
              <span className="text-stone-400 font-bold uppercase text-xs tracking-[0.3em]">Edition: {language}</span>
            </div>
            <h2 className="text-6xl md:text-9xl font-black leading-[0.9] tracking-tightest mb-10">
              The Digital <br/>
              <span className="text-amber-500">Embassy.</span>
            </h2>
            <p className="text-2xl md:text-4xl text-stone-600 leading-tight mb-12 font-medium max-w-3xl border-l-8 border-amber-500 pl-8 italic">
              "How a new generation of global citizens are rewriting the rules of business, security, and lifestyle."
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-stone-900 text-white px-12 py-7 rounded-2xl font-black uppercase tracking-widest flex items-center gap-4 hover:bg-amber-500 hover:text-stone-900 transition-all transform hover:-translate-y-2 shadow-2xl">
                Read Featured Story <ArrowRight size={28} />
              </button>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-16 h-16 rounded-full border-4 border-stone-900 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all">
                  <Share2 size={24} />
                </div>
                <span className="font-black uppercase tracking-widest text-sm">Spread the word</span>
              </div>
            </div>
          </div>
          <div className="xl:col-span-5 relative">
            <div className="aspect-[4/5] bg-stone-200 rounded-[4rem] overflow-hidden border-[12px] border-stone-900 shadow-3xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80" 
                alt="Main Feature" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
              />
            </div>
          </div>
        </section>

        {/* --- GLOBAL UTILITY STRIP --- */}
        <section className="bg-stone-900 rounded-[4rem] p-12 mb-32 grid grid-cols-1 md:grid-cols-3 gap-12 text-white border-b-[16px] border-amber-500">
          <div className="space-y-4">
            <h3 className="text-amber-500 font-black uppercase tracking-[0.3em] text-xs italic">Traffic Magnet: World Clock</h3>
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <span className="font-black text-2xl uppercase tracking-tighter">Nairobi</span>
              <span className="font-mono text-2xl text-amber-500">10:00 AM</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-black text-2xl uppercase tracking-tighter">Tokyo</span>
              <span className="font-mono text-2xl text-amber-500">04:00 PM</span>
            </div>
          </div>
          <div className="space-y-4 md:border-x border-stone-800 md:px-12">
            <h3 className="text-amber-500 font-black uppercase tracking-[0.3em] text-xs italic">Traffic Magnet: Currency</h3>
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <span className="font-black text-2xl">USD / KES</span>
              <span className="font-mono text-2xl text-green-400">132.45</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-black text-2xl">EUR / USD</span>
              <span className="font-mono text-2xl text-green-400">1.08</span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-black text-xl mb-4 italic text-stone-400 underline decoration-amber-500 underline-offset-8">"Tools drive Bookmarks."</p>
            <button className="bg-white text-stone-900 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-amber-500 transition-colors">
              Access Full Dispatch Toolkit
            </button>
          </div>
        </section>

        {/* --- ARTICLE GRID --- */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-16 border-b-[12px] border-stone-900 pb-6">
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Latest Stories</h3>
            <button className="bg-amber-500 text-stone-900 px-8 py-3 rounded-full font-black uppercase text-xs tracking-widest shadow-lg">New Today</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              { title: "Digital Security: The Global Defense Strategy You Need Now.", cat: "Security", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" },
              { title: "Remote Life: Why Nairobi is the New Silicon Savannah.", cat: "Business", img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80" },
              { title: "Minimalist Decor: Global Trends for the Modern Home.", cat: "Decor", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square bg-stone-100 rounded-[3rem] overflow-hidden mb-8 border-4 border-stone-900 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-4">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-black text-amber-600 uppercase text-sm tracking-widest">{post.cat}</span>
                  <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                  <span className="text-stone-400 font-bold text-sm">Feb 25, 2024</span>
                </div>
                <h4 className="text-3xl font-black leading-tight mb-6 group-hover:text-amber-500 transition-colors">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 text-stone-900 font-black uppercase text-xs tracking-widest">
                  Read Full Article <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- TRUST GUARD PROMO --- */}
        <section className="bg-stone-900 rounded-[5rem] p-16 md:p-32 text-white text-center relative overflow-hidden border-b-[20px] border-amber-500">
          <div className="absolute top-0 right-0 p-20 opacity-10 rotate-12">
            <Shield size={400} />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex justify-center mb-12">
              <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center text-stone-900 shadow-2xl">
                <Shield size={48} />
              </div>
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 leading-none uppercase italic tracking-tighter">Your Digital Shield.</h2>
            <p className="text-2xl md:text-3xl text-stone-400 mb-16 leading-relaxed font-medium">
              We don't just talk about security. We recommend solutions that work. Trust Guard is the baseline for the modern globalist.
            </p>
            <button className="bg-white text-stone-900 px-12 py-7 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-amber-500 transition-all shadow-2xl">
              Secure Your Profile
            </button>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t-[12px] border-stone-900 pt-32 pb-16">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="border-t-4 border-stone-100 pt-16 flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-stone-400 font-black text-sm uppercase tracking-widest">
              <button onClick={() => setShowAdmin(!showAdmin)} className="hover:text-stone-900 transition-all transform hover:scale-125">
                ©
              </button> 2024 The Modern Dispatch Global.
            </p>
            <div className="flex items-center gap-10">
              <span className="text-xs font-black uppercase tracking-[0.5em] text-stone-900 italic underline decoration-amber-500 decoration-4">Editor & Publisher: Valentine Wanjiru</span>
            </div>
          </div>
        </div>
      </footer>

      {/* --- SECRET ADMIN MODAL (Katalena Operations) --- */}
      {showAdmin && (
        <div className="fixed inset-0 z-[100] bg-stone-900/98 backdrop-blur-2xl flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-6xl rounded-[4rem] overflow-hidden shadow-3xl h-[92vh] flex flex-col border-[12px] border-stone-900">
            <div className="p-10 border-b-8 border-stone-900 flex items-center justify-between bg-stone-50">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-amber-500 rounded-[2rem] flex items-center justify-center text-stone-900 shadow-xl shadow-amber-200">
                  <Briefcase size={40} />
                </div>
                <div>
                  <h2 className="text-4xl font-black uppercase tracking-tighter">MDG Operations Hub</h2>
                  <p className="text-sm font-bold text-stone-400 uppercase tracking-[0.3em] italic">Confidential Studio • Valentine & Katalena Only</p>
                </div>
              </div>
              <button onClick={() => setShowAdmin(false)} className="p-4 bg-stone-100 hover:bg-stone-900 hover:text-white rounded-full transition-all">
                <X size={40} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-12">
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
                <div className="xl:col-span-8">
                  <div className="flex items-center justify-between mb-12">
                    <h3 className="text-2xl font-black uppercase tracking-widest flex items-center gap-4">
                      <Target className="text-amber-600" size={32} /> Daily Mission Schedule
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      { time: '06:00 - 08:00', task: 'Global Market Acquisition', detail: 'Generate DE/ES versions of top content. Pitch to European editors.', icon: Globe },
                      { time: '09:00 - 12:00', task: 'Main Editorial Block', detail: 'Draft primary article with multi-language versions.', icon: Palette },
                      { time: '13:00 - 15:00', task: 'Transcription Block', detail: 'Transcribe global podcasts for the international feed.', icon: TrendingUp },
                      { time: '16:00 - 18:00', task: 'Multi-Channel Blast', detail: 'Post to global Pinterest and LinkedIn boards.', icon: Share2 },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-stone-50 border-4 border-stone-100 p-8 rounded-[2.5rem] flex items-center gap-8 group">
                        <div className="text-stone-300 font-black text-lg w-32 tabular-nums">{item.time}</div>
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border-2 border-stone-200 flex items-center justify-center text-stone-900 group-hover:bg-amber-500 transition-all">
                          {React.createElement(item.icon, { size: 28 })}
                        </div>
                        <div>
                          <p className="font-black text-2xl mb-1 uppercase tracking-tight">{item.task}</p>
                          <p className="text-stone-500 font-bold text-sm tracking-wide">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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
