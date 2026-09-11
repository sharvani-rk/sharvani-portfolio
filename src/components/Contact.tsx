import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  CheckCircle2, 
  FileText, 
  Send, 
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSent(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSent(false);
    }, 4500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/70 text-purple-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal-900 tracking-tight">
            Let's build something intelligent.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-charcoal-600">
            I'm always interested in learning, building, collaborating, and exploring opportunities in AI and Machine Learning.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Details Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-card space-y-4">
              <h3 className="text-lg font-display font-bold text-charcoal-900">
                Direct Contact
              </h3>

              {/* Email item */}
              <div className="p-3.5 rounded-2xl bg-purple-50/40 border border-purple-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 truncate">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] uppercase font-bold text-charcoal-500 block">Email</span>
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`} 
                      className="text-xs sm:text-sm font-semibold text-charcoal-900 hover:text-purple-700 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white hover:bg-purple-100 text-charcoal-600 hover:text-purple-800 transition-colors shrink-0 shadow-subtle"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {isCopied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone item */}
              <div className="p-3.5 rounded-2xl bg-sky-50/40 border border-sky-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-charcoal-500 block">Phone</span>
                  <a 
                    href={`tel:${PERSONAL_INFO.phone}`} 
                    className="text-xs sm:text-sm font-semibold text-charcoal-900 hover:text-sky-700 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location item */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-200/70 text-charcoal-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-charcoal-500 block">Location</span>
                  <span className="text-xs sm:text-sm font-semibold text-charcoal-900">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Action Buttons: Email Me & Resume */}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Collaboration%20or%20Opportunity`}
                  className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-charcoal-900 hover:bg-charcoal-800 shadow-sm transition-all text-center flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me Directly</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-charcoal-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-subtle transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-purple-600" />
                  <span>Download / View Resume</span>
                </button>
              </div>

            </div>

            {/* Social Placeholder Profiles Card */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-card">
              <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500 block mb-3">
                Profiles (Ready to customize):
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-slate-50 hover:bg-sky-50 border border-slate-200/70 hover:border-sky-200 text-charcoal-700 hover:text-sky-800 transition-all flex items-center gap-2 text-xs font-semibold"
                >
                  <LinkedinIcon className="w-4 h-4 text-sky-600" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-slate-50 hover:bg-purple-50 border border-slate-200/70 hover:border-purple-200 text-charcoal-700 hover:text-purple-800 transition-all flex items-center gap-2 text-xs font-semibold"
                >
                  <GithubIcon className="w-4 h-4 text-charcoal-700" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card">
            <h3 className="text-xl font-display font-bold text-charcoal-900 mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-charcoal-500 mb-6">
              Drop a note regarding opportunities, AI discussions, or project inquiries.
            </p>

            {isSent ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-charcoal-900">Message Prepared!</h4>
                <p className="text-xs text-charcoal-600 max-w-sm mx-auto">
                  Thank you, <strong className="text-charcoal-900">{formData.name}</strong>. Opening your email client or preparing dispatch to <span className="font-semibold text-purple-700">{PERSONAL_INFO.email}</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Recruiters, Colleagues, Collaborators"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. yourname@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                    Message
                  </label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your role, research, or project..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs font-bold text-white bg-charcoal-900 hover:bg-charcoal-800 shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
