import React, { useState, useEffect } from 'react';
import { 
  Globe, Shield, Business, Users, Palette, Home, 
  GraduationCap, Scale, User, Plane, Sun, 
  Clock, DollarSign, Menu, X, Share2, ArrowRight,
  TrendingUp, Mail, Briefcase, Target, Eye
} from 'lucide-react';

// --- STYLES & THEME ---
const colors = {
  primary: '#1a1a2e',
  accent: '#fbbf24', // Your requested Orange/Amber
  stone: {
    50: '#fafaf9',
    100: '#f5f5f4',
    200: '#e7e5e4',
    900: '#1c1917'
  }
};

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
              <div className="relative group/share">
                <button className="p-5 border-4 border-stone-900 rounded-full hover:bg-stone-900 hover:text-white transition-all">
                  <Share2 size={24} />
                </button>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-white border-4 border-stone-900 p-4 rounded-2xl shadow-2xl opacity-0 invisible group-hover/share:opacity-100 group-hover/share:visible transition-all w-48">
                  <p className="font-black uppercase text-xs mb-3 text-center border-b pb-2">Share To</p>
                  <div className="grid grid-cols-1 gap-2">
                    {['X', 'Facebook', 'WhatsApp', 'Pinterest'].map(social => (
                      <button key={social} className="text-left font-bold py-1 hover:text-amber-500">{social}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- SIDEBAR TOOLS --- */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-stone-900 text-white p-10 rounded-[2.5rem] relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter italic italic">The Dispatch Toolkit</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                    <div className="flex items-center gap-3">
                      <Clock className="text-amber-500" size={24} />
                      <span className="font-bold">London</span>
                    </div>
                    <span className="text-xl font-mono">07:00 AM</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                    <div className="flex items-center gap-3">
                      <Clock className="text-amber-500" size={24} />
                      <span className="font-bold">New York</span>
                    </div>
                    <span className="text-xl font-mono">02:00 AM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <DollarSign className="text-amber-500" size={24} />
                      <span className="font-bold">USD/KES</span>
                    </div>
                    <span className="text-xl font-mono">132.50</span>
                  </div>
                </div>
                <button className="w-full mt-10 py-4 bg-amber-500 text-stone-900 font-black rounded-2xl uppercase tracking-widest text-sm hover:bg-white transition-colors">
                  Open Global Calculator
                </button>
              </div>
            </div>

            <div className="bg-amber-50 p-10 rounded-[2.5rem] border-2 border-amber-200">
              <Mail className="text-amber-600 mb-6" size={40} />
              <h3 className="text-2xl font-black mb-4 tracking-tight">The Weekly Briefing</h3>
              <p className="text-stone-600 font-medium mb-8 leading-relaxed">
                Join 5,000+ global citizens receiving practical insights directly to their inbox.
              </p>
              <input type="email" placeholder="Email Address" className="w-full bg-white border-2 border-stone-200 p-4 rounded-xl mb-4 font-bold outline-none focus:border-amber-500" />
              <button className="w-full py-4 bg-stone-900 text-white font-black rounded-xl uppercase tracking-widest text-sm hover:bg-amber-600 transition-colors">
                Join The List
              </button>
            </div>
          </div>
        </section>

        {/* --- MISSION STATEMENT --- */}
        <section className="bg-white border-4 border-stone-900 p-12 md:p-20 rounded-[3rem] mb-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <Globe size={300} />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tight italic">Our Mission Statement</h2>
            <p className="text-xl md:text-3xl text-stone-800 leading-[1.4] font-medium mb-12">
              Modern Dispatch Global exists to share stories, ideas, and practical insights that help people understand the world and their place in it. 
              We bridge global knowledge with real human experience—helping you move forward with clarity and confidence.
            </p>
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <p className="text-4xl font-black text-amber-500">50K+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-stone-500">Monthly Readers</p>
              </div>
              <div className="h-12 w-px bg-stone-200"></div>
              <div className="text-center">
                <p className="text-4xl font-black text-amber-500">11</p>
                <p className="text-xs font-bold uppercase tracking-widest text-stone-500">Core Verticals</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- LATEST FEED --- */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-12 border-b-4 border-stone-900 pb-4">
            <h3 className="text-3xl font-black uppercase tracking-tighter">Latest Stories</h3>
            <button className="text-sm font-black uppercase tracking-widest hover:text-amber-600">View All Categories</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-stone-200 rounded-3xl overflow-hidden mb-6">
                  <img src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?auto=format&fit=crop&q=80`} alt="Post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-amber-600">Security</span>
                  <span className="text-stone-300">•</span>
                  <span className="text-xs font-bold text-stone-500">Feb 25, 2024</span>
                </div>
                <h4 className="text-2xl font-black leading-tight mb-4 group-hover:text-amber-600 transition-colors">
                  Digital Scams: The Global Defense Strategy You Need Now.
                </h4>
                <p className="text-stone-600 line-clamp-2 font-medium">
                  Protecting your assets in an era of invisible threats. Real stories of defense...
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- TRUST GUARD PROMOTION --- */}
        <section className="bg-stone-900 rounded-[3rem] p-10 md:p-20 text-white grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-amber-500 text-stone-900 font-black px-6 py-2 rounded-full uppercase tracking-widest text-xs inline-block mb-8">
              Partner Focus: Trust Guard
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Your Digital Shield in a Global World.</h2>
            <p className="text-xl text-stone-400 mb-10 leading-relaxed font-medium">
              We don't just talk about security. We recommend solutions that work. Trust Guard is the baseline for the modern globalist.
            </p>
            <div className="space-y-4 mb-12">
              {['End-to-end encryption', 'Global threat monitoring', 'Zero-knowledge architecture'].map(f => (
                <div key={f} className="flex items-center gap-3 font-bold">
                  <Shield size={20} className="text-amber-500" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <button className="bg-white text-stone-900 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-amber-500 transition-colors">
              Secure Your Profile
            </button>
          </div>
          <div className="aspect-square bg-stone-800 rounded-[2rem] border-4 border-stone-700 p-8 flex items-center justify-center italic text-stone-500 text-center font-bold">
            [Trust Guard Interface Visual]
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-stone-100 border-t-4 border-stone-900 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-black uppercase mb-6 italic italic">The Modern Dispatch <span className="text-amber-500">Global</span></h2>
              <p className="text-stone-500 font-bold max-w-sm mb-8">
                The architecture of a media empire. Built for the world, managed with precision.
              </p>
              <div className="flex gap-4">
                {['X', 'LinkedIn', 'Instagram', 'Pinterest'].map(s => (
                  <button key={s} className="w-12 h-12 border-2 border-stone-300 rounded-full flex items-center justify-center font-black hover:bg-stone-900 hover:text-white transition-all">{s[0]}</button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-widest text-xs mb-8">Magazine</h4>
              <ul className="space-y-4 font-bold text-stone-600">
                {['About Us', 'Contact', 'Pitch Studio', 'Advertising'].map(l => <li key={l} className="hover:text-amber-600 cursor-pointer">{l}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-widest text-xs mb-8">Legal</h4>
              <ul className="space-y-4 font-bold text-stone-600">
                {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(l => <li key={l} className="hover:text-amber-600 cursor-pointer">{l}</li>)}
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-200 pt-10 flex flex-col md:row-reverse md:flex-row justify-between items-center gap-6">
            <p className="text-stone-400 font-bold text-sm">
              <button onClick={() => setShowAdmin(!showAdmin)} className="hover:text-stone-900 transition-colors">
                ©
              </button> 2024 The Modern Dispatch Global. All Rights Reserved.
            </p>
            <div className="flex items-center gap-8">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-stone-400 italic italic">Editor & Publisher: Valentine Wanjiru</span>
            </div>
          </div>
        </div>
      </footer>

      {/* --- SECRET ADMIN MODAL (Katalena Operations) --- */}
      {showAdmin && (
        <div className="fixed inset-0 z-[100] bg-stone-900/95 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-5xl rounded-[3rem] overflow-hidden shadow-2xl h-[90vh] flex flex-col">
            <div className="p-8 border-b-4 border-stone-900 flex items-center justify-between bg-stone-50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                  <Briefcase size={24} className="text-stone-900" />
                </div>
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tighter">MDG Operations Hub</h2>
                  <p className="text-xs font-bold text-stone-500 uppercase tracking-widest italic">Confidential Studio • Valentine & Katalena Only</p>
                </div>
              </div>
              <button onClick={() => setShowAdmin(false)} className="p-2 hover:bg-stone-200 rounded-full">
                <X size={32} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* --- KATALENA SCHEDULE --- */}
                <div className="lg:col-span-8">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-black uppercase tracking-widest flex items-center gap-3">
                      <Target className="text-amber-600" /> Daily Mission Schedule
                    </h3>
                    <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-black uppercase italic">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Katalena Active
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { time: '06:00 - 08:00', task: 'Job Acquisition Block', detail: 'Check Sure Media, Upwork, and LinkedIn. Send 3 high-value pitches.', icon: Briefcase },
                      { time: '09:00 - 12:00', task: 'Main Editorial Block', detail: 'Draft 1,500-word primary article. Human tone, global perspective.', icon: Palette },
                      { time: '13:00 - 15:00', task: 'Repurposing Block', detail: 'Transcribe YouTube/Podcast content. Convert to long-form insight.', icon: TrendingUp },
                      { time: '16:00 - 18:00', task: 'Global Distribution', detail: 'X, Pinterest, LinkedIn & Newsletter distribution cycle.', icon: Globe },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-stone-50 border-2 border-stone-100 p-6 rounded-2xl flex items-start gap-6 hover:border-amber-500 transition-colors group">
                        <div className="text-stone-400 font-black text-sm pt-1 w-24">{item.time}</div>
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-stone-200 flex items-center justify-center text-stone-900 group-hover:bg-amber-500 transition-colors">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <p className="font-black text-lg mb-1">{item.task}</p>
                          <p className="text-stone-500 font-medium text-sm">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* --- STYLE GUIDE CARD --- */}
                  <div className="mt-10 bg-stone-900 text-white p-8 rounded-3xl">
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-amber-500 mb-6">Writing Style Guide (The Voice Bible)</h4>
                    <div className="grid grid-cols-2 gap-6 text-sm">
                      <div className="space-y-3">
                        <p className="font-bold flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Warm & Human</p>
                        <p className="font-bold flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Story-Based "Netflix" Feel</p>
                      </div>
                      <div className="space-y-3">
                        <p className="font-bold flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Psychology-Aware</p>
                        <p className="font-bold flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Global Relevance Only</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* --- STATS & OVERRIDE --- */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="bg-amber-50 border-2 border-amber-200 p-8 rounded-[2rem]">
                    <h4 className="font-black uppercase tracking-widest text-xs mb-6 text-amber-700">Founder Overview</h4>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-stone-500">Live Articles</span>
                        <span className="font-black text-2xl">42</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-stone-500">Job Pitches Sent</span>
                        <span className="font-black text-2xl">18</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-stone-500">Global Subscribers</span>
                        <span className="font-black text-2xl">1,240</span>
                      </div>
                    </div>
                    <button className="w-full mt-10 py-4 bg-stone-900 text-white font-black rounded-xl uppercase tracking-widest text-xs">
                      View Detailed Analytics
                    </button>
                  </div>

                  <div className="bg-stone-50 border-2 border-stone-100 p-8 rounded-[2rem]">
                    <h4 className="font-black uppercase tracking-widest text-xs mb-4">Founder Override</h4>
                    <p className="text-xs font-bold text-stone-400 mb-6 italic italic">Pause automation or publish urgent essay.</p>
                    <div className="space-y-3">
                      <button className="w-full py-3 border-2 border-stone-900 font-black rounded-lg uppercase tracking-widest text-xs hover:bg-stone-900 hover:text-white transition-all">
                        Post Personal Essay
                      </button>
                      <button className="w-full py-3 border-2 border-red-500 text-red-500 font-black rounded-lg uppercase tracking-widest text-xs hover:bg-red-500 hover:text-white transition-all">
                        Pause Katalena
                      </button>
                    </div>
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
