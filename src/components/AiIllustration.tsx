import React from 'react';
import { Sparkles } from 'lucide-react';

export const AiIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-4">
      {/* Background Soft Pastel Ambient Circles */}
      <div className="absolute top-10 left-12 w-48 h-48 rounded-full bg-purple-100/60 blur-2xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-52 h-52 rounded-full bg-sky-100/60 blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-emerald-50/50 blur-3xl pointer-events-none" />

      {/* Main SVG Vector Canvas */}
      <svg 
        className="w-full h-full relative z-10 drop-shadow-sm" 
        viewBox="0 0 440 440" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle coordinate grid lines */}
        <g stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" opacity="0.6">
          <line x1="60" y1="120" x2="380" y2="120" />
          <line x1="60" y1="220" x2="380" y2="220" />
          <line x1="60" y1="320" x2="380" y2="320" />
          <line x1="120" y1="60" x2="120" y2="380" />
          <line x1="220" y1="60" x2="220" y2="380" />
          <line x1="320" y1="60" x2="320" y2="380" />
        </g>

        {/* Dynamic Data Flow Waves */}
        <path 
          d="M70 280 C 140 180, 200 320, 270 200 C 320 120, 360 160, 380 140" 
          stroke="#BAE6FD" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeDasharray="6 4"
        />
        <path 
          d="M60 180 C 130 260, 210 140, 290 240 C 330 300, 370 270, 390 260" 
          stroke="#E9D5FF" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
        />

        {/* Central Interconnection Lines */}
        <g stroke="#CBD5E1" strokeWidth="1.5">
          <line x1="220" y1="220" x2="130" y2="140" />
          <line x1="220" y1="220" x2="310" y2="130" />
          <line x1="220" y1="220" x2="330" y2="290" />
          <line x1="220" y1="220" x2="120" y2="290" />
          <line x1="130" y1="140" x2="220" y2="90" />
          <line x1="310" y1="130" x2="220" y2="90" />
          <line x1="120" y1="290" x2="220" y2="340" />
          <line x1="330" y1="290" x2="220" y2="340" />
        </g>

        {/* Concentric rings around center */}
        <circle cx="220" cy="220" r="85" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="220" cy="220" r="48" fill="#FAF5FF" stroke="#DDD6FE" strokeWidth="1.5" />

        {/* Satellite Node 1: Top (Lavender) */}
        <g transform="translate(220, 90)">
          <circle cx="0" cy="0" r="22" fill="#FAF5FF" stroke="#DDD6FE" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="7" fill="#8B5CF6" />
        </g>

        {/* Satellite Node 2: Top Left (Blue) */}
        <g transform="translate(130, 140)">
          <circle cx="0" cy="0" r="24" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="8" fill="#0284C7" />
        </g>

        {/* Satellite Node 3: Top Right (Mint) */}
        <g transform="translate(310, 130)">
          <circle cx="0" cy="0" r="24" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="8" fill="#16A34A" />
        </g>

        {/* Satellite Node 4: Bottom Left (Peach) */}
        <g transform="translate(120, 290)">
          <circle cx="0" cy="0" r="22" fill="#FFF1F2" stroke="#FECDD3" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="7" fill="#E11D48" />
        </g>

        {/* Satellite Node 5: Bottom Right (Yellow) */}
        <g transform="translate(330, 290)">
          <circle cx="0" cy="0" r="22" fill="#FEFCE8" stroke="#FEF08A" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="7" fill="#CA8A04" />
        </g>

        {/* Satellite Node 6: Bottom Center */}
        <g transform="translate(220, 340)">
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="5" fill="#64748B" />
        </g>

        {/* Central Core Element */}
        <g transform="translate(220, 220)">
          <circle cx="0" cy="0" r="26" fill="#8B5CF6" />
          <circle cx="0" cy="0" r="16" fill="#7C3AED" />
          <path d="M-6 -6 L6 6 M-6 6 L6 -6" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>

      {/* Floating Interactive Micro-Cards around Illustration */}
      <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm border border-slate-100 shadow-card rounded-2xl px-3.5 py-2 flex items-center gap-2 animate-float-slow">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        <span className="text-[11px] font-semibold text-charcoal-700 tracking-tight">ViT & Swin Attention</span>
      </div>

      <div className="absolute bottom-8 left-4 bg-white/95 backdrop-blur-sm border border-slate-100 shadow-card rounded-2xl px-3.5 py-2 flex items-center gap-2 animate-float-slow" style={{ animationDelay: '1.5s' }}>
        <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
        <span className="text-[11px] font-semibold text-charcoal-700 tracking-tight">LangGraph Multi-Agent</span>
      </div>

      <div className="absolute top-1/2 -left-3 -translate-y-1/2 bg-white/95 backdrop-blur-sm border border-slate-100 shadow-card rounded-2xl px-3 py-1.5 flex items-center gap-1.5 animate-float-slow" style={{ animationDelay: '3s' }}>
        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
        <span className="text-[11px] font-semibold text-charcoal-700 tracking-tight">Active Recall</span>
      </div>
    </div>
  );
};
