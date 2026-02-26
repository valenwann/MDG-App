import React, { useState, useEffect } from 'react';
import { 
  Globe, Shield, Users, Palette, Home, 
  GraduationCap, Scale, User, Plane, Sun, 
  Clock, DollarSign, Menu, X, Share2, ArrowRight,
  TrendingUp, Mail, Briefcase, Target, Eye
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    { name: 'Technology', icon: Globe },
    { name: 'Security', icon: Shield },
    { name: 'Business', icon: TrendingUp },
    { name: 'Family & Parenting', icon: Users },
    { name: 'Fashion', icon: Palette },
    { name: 'Decor', icon: Home },
    { name: 'Education', icon: GraduationCap },
    { name: 'Law', icon: Scale },
    { name: 'People', icon: User },
    { name: 'Travel & Hobbies', icon: Plane },
    { name: 'Spiritual Sundays', icon: Sun },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-amber-100">
      {/* --- TOP NAVIGATION --- */}
      <nav className="bg-white border-b-4 border-stone-900 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 hover:bg-stone-100 rounded-lg">
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
            <h1 className="text-2xl md:text-4xl font-black tracking-tighter uppercase italic">
              The Modern Dispatch <span className="text-amber-500 underline decoration-4 underline-offset-4">Global</span>
            </h1>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="text-xs font-bold uppercase tracking-widest text-stone-500 italic">Global Time</span>
              <span className="text-2xl font-black tabular-nums">{time.toLocaleTimeString()}</span>
            </div>
            <button className="bg-stone-900 text-white px-8 py-3 font-bold rounded-full hover:bg-amber-500 transition-colors uppercase tracking-widest text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </nav>

      {/* --- CATEGORY BAR --- */}
      <div className="bg-stone-100 border-b border-stone-200 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-8">
          {categories.map((cat) => (
            <button key={cat.name} className="text-sm font-bold uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors">
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* --- HERO ARTICLE --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-8 group cursor-pointer">
            <div className="aspect-[16/9] bg-stone-200 rounded-3xl overflow-hidden mb-8 relative">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" alt="Hero" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-6 left-6 bg-amber-500 text-stone-900 font-black px-6 py-2 rounded-full uppercase tracking-widest text-xs">
                Featured: Technology
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-bold text-amber-600">By Valentine Wanjiru</span>
              <span className="text-stone-400">•</span>
              <span className="text-stone-500 uppercase text-xs font-bold tracking-widest">12 Min Read</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-6 hover:text-amber-600 transition-colors">
              The Silent Shift: How Global Tech is Rewriting Daily Life.
            </h2>
            <p className="text-xl md:text-2xl text-stone-600 leading-relaxed mb-8 max-w-2xl">
              From the bustling hubs of Nairobi to the skyscrapers of Tokyo, a new digital embassy is being built. Explore the human side of the global machine.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-stone-900 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest flex items-center gap-3 hover:bg-amber-500 transition-all transform hover:-translate-y-1">
                Read Story <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* --- SIDEBAR TOOLS --- */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-stone-900 text-white p-10 rounded-[2.5rem] relative overflow-hidden">
              <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter italic">The Dispatch Toolkit</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                  <div className="flex items-center gap-3">
                    <Clock className="text-amber-500" size={24} />
                    <span className="font-bold">London</span>
                  </div>
                  <span className="text-xl font-mono">07:00 AM</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <DollarSign className="text-amber-500" size={24} />
                    <span className="font-bold">USD/KES</span>
                  </div>
                  <span className="text-xl font-mono">132.50</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 p-10 rounded-[2.5rem] border-2 border-amber-200">
              <Mail className="text-amber-600 mb-6" size={40} />
              <h3 className="text-2xl font-black mb-4 tracking-tight">The Weekly Briefing</h3>
              <input type="email" placeholder="Email Address" className="w-full bg-white border-2 border-stone-200 p-4 rounded-xl mb-4 font-bold outline-none focus:border-amber-500" />
              <button className="w-full py-4 bg-stone-900 text-white font-black rounded-xl uppercase tracking-widest text-sm hover:bg-amber-600 transition-colors">
                Join The List
              </button>
            </div>
          </div>
        </section>

        {/* --- MISSION STATEMENT --- */}
        <section className="bg-white border-4 border-stone-900 p-12 md:p-20 rounded-[3rem] mb-20 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tight italic">Our Mission Statement</h2>
            <p className="text-xl md:text-3xl text-stone-800 leading-[1.4] font-medium mb-12">
              Modern Dispatch Global exists to share stories, ideas, and practical insights that help people understand the world and their place in it. 
              We bridge global knowledge with real human experience—helping you move forward with clarity and confidence.
            </p>
          </div>
        </section>

        {/* --- LATEST FEED --- */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-12 border-b-4 border-stone-900 pb-4">
            <h3 className="text-3xl font-black uppercase tracking-tighter">Latest Stories</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-stone-200 rounded-3xl overflow-hidden mb-6">
                  <img src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?auto=format&fit=crop&q=80`} alt="Post" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-2xl font-black leading-tight mb-4">
                  Digital Security: The Global Strategy You Need Now.
                </h4>
              </div>
            ))}
          </div>
        </section>

        {/* --- TRUST GUARD PROMOTION --- */}
        <section className="bg-stone-900 rounded-[3rem] p-10 md:p-20 text-white text-center">
          <Shield size={60} className="text-amber-500 mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Partner Focus: Trust Guard</h2>
          <p className="text-xl text-stone-400 mb-10 max-w-2xl mx-auto">
            Your Digital Shield in a Global World. We recommend solutions that work.
          </p>
          <button className="bg-white text-stone-900 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-amber-500 transition-colors">
            Secure Your Profile
          </button>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-stone-100 border-t-4 border-stone-900 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black uppercase mb-6 italic">The Modern Dispatch <span className="text-amber-500">Global</span></h2>
          <div className="flex justify-center gap-8 mb-10 font-bold text-stone-600 uppercase text-xs tracking-widest">
            <span>About</span>
            <span>Pitch Studio</span>
            <span>Contact</span>
          </div>
          <p className="text-stone-400 font-bold text-sm">
            <button onClick={() => setShowAdmin(!showAdmin)} className="hover:text-stone-900 transition-colors">
              ©
            </button> 2024 The Modern Dispatch Global. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* --- SECRET ADMIN MODAL --- */}
      {showAdmin && (
        <div className="fixed inset-0 z-[100] bg-stone-900/95 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-2xl p-10 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <Briefcase size={32} className="text-amber-500" />
                <h2 className="text-3xl font-black uppercase tracking-tighter">Katalena Operations</h2>
              </div>
              <button onClick={() => setShowAdmin(false)}><X size={40} /></button>
            </div>
            
            <div className="space-y-6 mb-10">
              {[
                { time: '06:00 - 08:00', task: 'Job Acquisition Block', icon: Briefcase },
                { time: '09:00 - 12:00', task: 'Main Editorial Block', icon: Palette },
                { time: '13:00 - 15:00', task: 'Repurposing Block', icon: TrendingUp },
                { time: '16:00 - 18:00', task: 'Global Distribution', icon: Globe },
              ].map((item, idx) => (
                <div key={idx} className="bg-stone-50 p-6 rounded-2xl flex items-center gap-6">
                  <span className="font-black text-amber-600 w-32">{item.time}</span>
                  <item.icon size={24} className="text-stone-400" />
                  <span className="font-black text-lg">{item.task}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-stone-900 text-white p-8 rounded-3xl">
              <h4 className="text-xs font-black uppercase tracking-widest text-amber-500 mb-4">Founder Override</h4>
              <div className="grid grid-cols-2 gap-4">
                <button className="py-4 border-2 border-stone-700 rounded-xl font-black uppercase text-xs">Pause Katalena</button>
                <button className="py-4 bg-amber-500 text-stone-900 rounded-xl font-black uppercase text-xs">Post Personal Essay</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
