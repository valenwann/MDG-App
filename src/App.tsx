import React from "react";
import {
  Globe, Shield, Users, Palette, Home,
  GraduationCap, Scale, User, Plane, Sun,
  Clock, DollarSign, Menu, X, Share2, ArrowRight,
  TrendingUp, Mail, Briefcase, Target, Eye, Zap,
  CheckCircle2, AlertCircle
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* HEADER */}
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold">The Modern Dispatch Global</h1>
          <Menu className="w-6 h-6 text-[#FF6A00]" />
        </header>

        {/* NAVIGATION ICONS */}
        <nav className="flex space-x-6 mb-8">
          <Globe className="w-6 h-6 text-[#F4B400]" />
          <Shield className="w-6 h-6 text-[#F4B400]" />
          <Users className="w-6 h-6 text-[#F4B400]" />
          <Palette className="w-6 h-6 text-[#F4B400]" />
        </nav>

        {/* FEATURED CARD */}
        <section className="mb-8">
          <div className="bg-[#111111] rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-2">Global Insights</h2>
            <p className="text-base text-white mb-4">
              Breaking stories from across the globe, curated for a professional audience.
            </p>
            <button className="bg-[#FF6A00] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#e55b00] transition-colors">
              Read More
            </button>
          </div>
        </section>

        {/* ARTICLE GRID */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#111111] rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-1">Tech Trends 2026</h3>
            <p className="text-base text-white mb-2">
              Latest innovations shaping the digital landscape.
            </p>
            <p className="text-sm text-[#A1A1AA]">5 min read</p>
          </div>

          <div className="bg-[#111111] rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-1">Global Finance Update</h3>
            <p className="text-base text-white mb-2">
              Key insights on markets, currencies, and investment strategies.
            </p>
            <p className="text-sm text-[#A1A1AA]">3 min read</p>
          </div>
        </section>

        {/* ACCENT SECTION */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#F4B400] mb-4">
            Verified Stories
          </h2>
          <p className="text-base text-white">
            Trusted journalism, highlighted for professionals.
          </p>
        </section>

      </div>
    </div>
  );
}
