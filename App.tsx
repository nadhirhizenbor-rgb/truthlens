
import React, { useEffect, useState } from 'react';
import FloatingNav from './components/FloatingNav';
import FluidBackground from './components/FluidBackground';
import TruthScanner from './components/TruthScanner';
import { Section } from './types';
import { ChevronDown, ArrowRight, Shield, Activity, Search } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <FloatingNav />
      <FluidBackground />
      
      {/* Hero Section */}
      <header id={Section.HERO} className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-5xl mx-auto z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
            V3 Organic Engine Now Live
          </div>
          <h1 className="serif text-6xl md:text-9xl font-bold tracking-tight mb-8 leading-[1.1]">
            Filter the <span className="italic font-normal text-white/50">Noise.</span> <br />
            Find the <span className="text-blue-500">Truth.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            The world's first organic AI verification platform designed to navigate the chaos of the deepfake era with effortless clarity.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => document.getElementById(Section.SCANNER)?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-all flex items-center gap-2 group shadow-2xl shadow-white/10"
            >
              Start Analysis <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              View Proof of Concept <ChevronDown size={18} />
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
           <ChevronDown size={32} />
        </div>
      </header>

      {/* Problem Section: The Noise */}
      <section id={Section.PROBLEM} className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square">
             <div className="absolute inset-0 bg-rose-500/10 blur-[100px] animate-pulse rounded-full" />
             <div className="relative h-full w-full bg-white/5 backdrop-blur-3xl rounded-[60px] border border-white/10 p-12 flex items-center justify-center">
                <div className="space-y-6">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="h-4 bg-white/10 rounded-full animate-pulse" style={{ width: `${Math.random() * 60 + 40}%`, animationDelay: `${i * 0.2}s` }} />
                    ))}
                    <div className="p-6 bg-rose-500/20 rounded-2xl border border-rose-500/30 text-rose-300 font-mono text-xs">
                        {`[ERROR]: UNTRUSTED SOURCE DETECTED\n[ALERT]: DEEPFAKE PROBABILITY 98.4%\n[CRITICAL]: NARRATIVE MANIPULATION DETECTED`}
                    </div>
                </div>
             </div>
          </div>
          <div className="space-y-8">
            <h2 className="serif text-5xl md:text-6xl font-bold leading-tight">
                In an era of <span className="text-rose-500">distortion,</span> clarity is our only shield.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
                Information used to be a tool for progress. Today, it's a battleground of synthetic identities, AI-authored lies, and algorithmic manipulation. We live in the "Blur"—a space where reality is harder to define than ever before.
            </p>
            <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                    <span className="text-3xl font-bold text-white mb-2 block">70%</span>
                    <span className="text-sm text-slate-500 uppercase tracking-widest">Faster Fake News Spread</span>
                </div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                    <span className="text-3xl font-bold text-white mb-2 block">10M+</span>
                    <span className="text-sm text-slate-500 uppercase tracking-widest">Deepfakes Created Daily</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section: The Clarity */}
      <section id={Section.SOLUTION} className="relative py-32 px-4 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 blur-[150px] pointer-events-none" />
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="serif text-5xl md:text-7xl font-bold mb-8">Elegance meets <span className="italic font-normal">Evidence.</span></h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto font-light">
            TruthLens doesn't just block lies. It cultivates discernment through three layers of organic AI analysis.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Search className="text-blue-400" />, 
              title: "Source Forensics", 
              desc: "Deep-tracing of content lineage across decentralized ledgers and traditional archives." 
            },
            { 
              icon: <Activity className="text-purple-400" />, 
              title: "Emotional Audit", 
              desc: "Detecting engineered outrage and manipulative psychological patterns in real-time." 
            },
            { 
              icon: <Shield className="text-emerald-400" />, 
              title: "Synthetic Detection", 
              desc: "Pixel-level analysis of GAN signatures and AI-generated vocal inconsistencies." 
            }
          ].map((feature, i) => (
            <div key={i} className="group p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[50px] hover:bg-white/10 hover:border-white/20 transition-all duration-500">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="serif text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scanner Section */}
      <TruthScanner />

      {/* Footer */}
      <footer className="py-24 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full" />
              <span className="serif text-2xl font-bold tracking-tight">TruthLens</span>
            </div>
            <p className="text-slate-500 max-w-xs leading-relaxed">
              Designed for the seekers of objective reality. Built with Organic AI for the next generation of digital integrity.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-[0.2em] text-white/40">Technology</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Gemini V3 Core</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Linguistics Engine</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Forensic API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Browser Extension</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-[0.2em] text-white/40">Legal</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ethical AI Charter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Whitepaper</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-slate-600 text-xs tracking-widest uppercase">
            &copy; 2025 TruthLens Integrity Systems. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-slate-600">
             <a href="#" className="hover:text-white transition-colors"><span className="sr-only">Twitter</span>𝕏</a>
             <a href="#" className="hover:text-white transition-colors"><span className="sr-only">LinkedIn</span>in</a>
             <a href="#" className="hover:text-white transition-colors"><span className="sr-only">GitHub</span>gh</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
