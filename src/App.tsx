import React, { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Smartphone, ShieldCheck, Zap, Rocket, Star, CheckCircle2, ChevronDown } from 'lucide-react';
import { WhatsAppIcon, AndroidIcon, StarIcon } from './components/Icons';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from './lib/utils';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'formester-standard-form': any;
    }
  }
}

const FadeIn = ({ children, delay = 0, className = "", direction = "up" }: { children: React.ReactNode, delay?: number, className?: string, direction?: "up" | "down" | "left" | "right" | "none" }) => {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 border-b",
        scrolled ? "bg-[#050505]/80 backdrop-blur-xl border-white/10 py-4" : "bg-transparent border-transparent py-6 text-white"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-xl font-bold font-display tracking-tight text-white z-50 group">
          <span>12 Testers for 14 Days</span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <button onClick={() => scrollTo('why')} className="text-gray-400 hover:text-white transition-colors">WHY US</button>
          <button onClick={() => scrollTo('process')} className="text-gray-400 hover:text-white transition-colors">PROCESS</button>
          <button onClick={() => window.open('https://docs.google.com/document/d/1Nenq0Qqj_JhjKncjm8genzTLjVFj7T-dQKZuPc-B1Tw/edit?tab=t.j61rkm11fs70#heading=h.cuklqo1w4n6q', '_blank')} className="text-white hover:text-primary transition-colors">Proofs</button>
          <button onClick={() => scrollTo('proofs')} className="text-white hover:text-primary transition-colors">Trustpilot 4.7</button>
          <button onClick={() => scrollTo('faq')} className="text-gray-400 hover:text-white transition-colors">FAQ</button>
          <button onClick={() => scrollTo('pricing')} className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-gray-200 transition-colors">
            ORDER NOW
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden z-50 text-white relative" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Nav */}
        <div className={cn(
          "fixed inset-0 bg-[#050505] z-40 transition-all duration-300 ease-in-out md:hidden flex flex-col justify-center items-center gap-8 text-2xl font-display font-semibold pt-16",
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}>
          <button onClick={() => scrollTo('why')} className="text-white hover:text-primary transition-colors">Why Us?</button>
          <button onClick={() => scrollTo('process')} className="text-white hover:text-primary transition-colors">Process</button>
          <button onClick={() => window.open('https://docs.google.com/document/d/1Nenq0Qqj_JhjKncjm8genzTLjVFj7T-dQKZuPc-B1Tw/edit?tab=t.j61rkm11fs70#heading=h.cuklqo1w4n6q', '_blank')} className="text-white hover:text-primary transition-colors">Proofs</button>
          <button onClick={() => scrollTo('proofs')} className="text-white hover:text-primary transition-colors">Trustpilot 4.7</button>
          <button onClick={() => scrollTo('faq')} className="text-white hover:text-primary transition-colors">FAQ</button>
          <button onClick={() => scrollTo('pricing')} className="bg-primary text-black px-8 py-4 rounded-full w-4/5 text-center mt-4">
            Order Now
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-[#050505] to-[#050505] -z-10" />
      <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full opacity-50 -z-10" />
      <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full opacity-30 -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none -z-10"></div>
      <div className="absolute w-full h-full top-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10 border-t border-white/5" />

      <div className="max-w-7xl mx-auto px-6 text-center z-10 w-full">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-gray-300 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Guaranteed App Approval Route
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[0.95] tracking-tighter text-white mb-8 mx-auto">
            12 Testers.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
              14 Days.
            </span>
            <br />
            Zero Rejections.
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Bypass the Google Play closed testing hurdle. We deploy 12 verified human testers to secure your production access. Simple, fast, and compliant.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} 
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2 text-lg">
            Start Your Testing <ArrowRight className="w-5 h-5" />
          </button>
          
          <a href="https://wa.me/+923472061598" target="_blank" rel="noreferrer" 
            className="w-full sm:w-auto px-8 py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 font-semibold rounded-full hover:bg-[#25D366]/20 transition-all flex items-center justify-center gap-2 text-lg backdrop-blur-sm">
            <WhatsAppIcon className="w-5 h-5" /> Chat on WhatsApp
          </a>
        </FadeIn>

        {/* Logos/Brands */}
        <FadeIn delay={0.6} className="mt-20 pt-10 border-t border-white/5">
          <p className="text-sm font-mono text-gray-500 mb-6 uppercase tracking-widest">Trusted to approve 30+ apps</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            <div className="flex items-center gap-2 font-display text-xl font-bold"><AndroidIcon className="w-6 h-6"/> Google Play</div>
            {/* Add placeholder generic agency client logos if needed */}
            <div className="font-display text-xl font-bold">TechRadar</div>
            <div className="font-display text-xl font-bold italic">IndieHackers</div>
            <div className="font-display text-xl font-semibold uppercase tracking-widest">ProductHunt</div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const Metric = ({ number, label, suffix = "" }: { number: string, label: string, suffix?: string }) => (
  <div className="flex flex-col items-start p-8 border border-white/10 bg-white/[0.02] rounded-3xl backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
    <div className="text-5xl md:text-6xl font-display font-bold text-white mb-2 tracking-tight">
      {number}<span className="text-primary">{suffix}</span>
    </div>
    <div className="text-gray-400 font-mono text-sm uppercase tracking-wider">{label}</div>
  </div>
);

const MetricsSection = () => {
  return (
    <section className="py-20 relative z-20 -mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FadeIn delay={0.1}><Metric number="500" suffix="+" label="Apps Approved" /></FadeIn>
          <FadeIn delay={0.2}><Metric number="6.2" suffix="k" label="Testers Deployed" /></FadeIn>
          <FadeIn delay={0.3}><Metric number="99" suffix=".9%" label="Success Rate" /></FadeIn>
          <FadeIn delay={0.4}><Metric number="14" label="Days Guarantee" /></FadeIn>
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const features = [
    { icon: ShieldCheck, title: "100% Policy Compliant", desc: "We use genuine physical devices and real Google accounts. No emulators, no bots. Fully compliant with Google Play Console integrity checks." },
    { icon: Zap, title: "Frictionless Setup", desc: "Just provide your track link. We handle tester recruitment, daily engagement, and ensure consistent retention metrics over the full 14 days." },
    { icon: AndroidIcon, title: "Device Diversity", desc: "Our testers use a wide spectrum of Android fragmentation: Samsung, Pixel, Xiaomi, Motorola, covering API 26 through 36." }
  ];

  return (
    <section id="why" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.2fr] gap-20 items-center">
        <div className="min-w-0">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Why Risk Your <br/><span className="text-primary">Launch Timeline?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 font-light leading-relaxed">
              Google mandates 12 testers for 14 continuous days for new developer accounts. One dropped tester means starting over. We remove the risk entirely.
            </p>
            
            <div className="relative overflow-hidden w-full pb-6 mb-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex w-max animate-marquee space-x-4">
                {[...["Samsung Galaxy S24 Ultra", "Google Pixel 8", "Xiaomi 14 Pro", "OnePlus 12", "Oppo Find X7", "Motorola Edge 50", "Vivo X100 Pro", "Realme 12 Pro+", "Nothing Phone (2)", "Asus ROG Phone 8"], 
                  ...["Samsung Galaxy S24 Ultra", "Google Pixel 8", "Xiaomi 14 Pro", "OnePlus 12", "Oppo Find X7", "Motorola Edge 50", "Vivo X100 Pro", "Realme 12 Pro+", "Nothing Phone (2)", "Asus ROG Phone 8"]].map((dev, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-sm font-medium text-gray-300 whitespace-nowrap cursor-default hover:border-primary/50 transition-colors">
                    {dev}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          
          <div className="space-y-8">
            {features.map((f, i) => (
              <FadeIn key={i} delay={0.2 + (i * 0.1)} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mt-1">
                  <f.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn direction="left" className="relative mt-12 lg:mt-0">
          <div className="aspect-square md:aspect-[4/5] rounded-[2.5rem] bg-gradient-to-tr from-[#111] to-[#222] border border-white/10 overflow-hidden relative shadow-2xl shadow-primary/10 flex items-center justify-center group p-8">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            
            {/* Abstract visual representing testing completion */}
            <div className="relative w-full h-full flex flex-col p-4 md:p-6 lg:p-8">
              <div className="relative w-full h-full border border-white/10 rounded-2xl bg-[#0A0A0A] overflow-hidden flex flex-col justify-end group/chart">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
                <div className="p-6 md:p-8 w-full">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <h4 className="text-white font-medium text-lg mb-1">Active Testers</h4>
                      <div className="flex items-baseline gap-2">
                        <div className="text-5xl font-display font-bold text-primary">12</div>
                        <div className="text-xl text-gray-500 font-normal">/ 12</div>
                      </div>
                    </div>
                    <div className="bg-[#00FF94]/20 text-[#00FF94] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider animate-pulse flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00FF94] rounded-full inline-block"></span>
                      Live Testing
                    </div>
                  </div>
                  
                  {/* Chart bars */}
                  <div className="flex items-end gap-2 h-[120px] sm:h-[160px] w-full">
                    {[100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100].map((height, i) => (
                      <div key={i} className="flex-1 bg-white/5 rounded-t-md relative group/bar h-[80%]">
                        <motion.div 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          transition={{ duration: 1.5, delay: i * 0.1, ease: 'easeOut' }}
                          className={cn(
                            "absolute bottom-0 w-full rounded-t-md transition-all duration-300", 
                            i === 13 ? "bg-primary shadow-[0_0_20px_rgba(0,255,148,0.4)]" : "bg-white/30 group-hover/bar:bg-primary/50"
                          )} 
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-4 text-xs font-mono text-gray-500 uppercase tracking-widest px-1">
                    <span>Day 1</span>
                    <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">Day 14</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] p-6 rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center gap-2 backdrop-blur-xl group-hover:scale-105 transition-transform">
               <CheckCircle2 className="w-12 h-12 text-primary" />
               <span className="font-display font-bold text-white text-lg">Requirements Met</span>
               <span className="text-xs text-gray-400">Unlock Production</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const ProcessSteps = () => {
  const steps = [
    { num: "01", title: "Select Package", desc: "Choose your testing tier and complete the order." },
    { num: "02", title: "Add Emails", desc: "We provide 12 verified Gmail addresses for your closed track." },
    { num: "03", title: "We Test", desc: "Our team actively installs and engages for 14 continuous days." },
    { num: "04", title: "Ship It", desc: "Apply for production access with a 100% compliant timeline." }
  ];

  return (
    <section id="process" className="py-32 bg-[#0A0A0A] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-20 md:flex items-end justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">The Path to <span className="text-gray-500">Production</span></h2>
            <p className="text-xl text-gray-400 font-light">A streamlined workflow designed to get you approved without the headache.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 group/list">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="border border-white/10 bg-[#111] p-8 rounded-3xl h-full flex flex-col hover:bg-white/5 transition-colors group">
                <span className="text-5xl font-display font-bold text-white/10 mb-8 group-hover:text-primary transition-colors duration-500">{step.num}</span>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-auto">{step.desc}</p>
                <div className="mt-8 h-1 w-12 bg-white/10 rounded-full group-hover:bg-primary group-hover:w-full transition-all duration-500" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const ApprovedApps = () => {
  const apps = [
    { name: "Tapmin", link: "https://play.google.com/apps/testing/com.playdoki.tapmin" },
    { name: "Quiet Pages", link: "https://play.google.com/store/apps/details?id=ai.quietpages.app&hl=en" },
    { name: "OBC Cloud", link: "https://play.google.com/store/apps/details?id=com.obccloud.mobile" },
    { name: "HarmonySync", link: "https://play.google.com/store/apps/details?id=com.base698cb5681baa75d1ad0af906.app" },
    { name: "Tenista", link: "https://play.google.com/store/apps/details?id=com.tenista.app" },
    { name: "FIRE - Financial planner", link: "https://play.google.com/store/apps/details?id=com.firenum.twa" },
    { name: "Chess Stockfish Assistant", link: "https://play.google.com/store/apps/details?id=com.chess.assistant" },
    { name: "Waveguide", link: "https://play.google.com/store/apps/details?id=com.oshunea.waveguide" },
    { name: "Crystal Numbers", link: "https://play.google.com/store/apps/details?id=com.oshunea.crystalnumbers" },
    { name: "SWAP — Neon Reflex", link: "https://play.google.com/store/apps/details?id=com.oshunea.swap&hl=en-US" },
    { name: "FOCUS — Find the Odd One", link: "https://play.google.com/store/apps/details?id=com.oshunea.focus" },
    { name: "Memory Murals", link: "https://play.google.com/store/apps/details?id=com.memorymurals.app" },
    { name: "Sifat: Learn Names of Allah", link: "https://play.google.com/store/apps/details?id=app.sifat.names" },
    { name: "Stream Vault", link: "https://play.google.com/apps/testing/streamvault.app/" },
    { name: "Tank-O", link: "https://play.google.com/store/apps/details?id=com.halid.gorivo" },
    { name: "Angle shh", link: "https://play.google.com/store/apps/details?id=com.angelshh.app" },
    { name: "Takt - Dating app", link: "https://play.google.com/store/apps/details?id=com.oshunea.takt" },
    { name: "ProsodyAI - AI Voice", link: "https://play.google.com/store/apps/details?id=com.prosodyai.app" },
    { name: "bitfitmobile", link: "https://play.google.com/store/apps/details?id=com.anonymous.bitfitmobile+" },
    { name: "VidKit - Video Editor", link: "https://play.google.com/store/apps/details?id=com.burakbebek.vidkit" },
    { name: "Obscura", link: "https://play.google.com/store/apps/details?id=ai.bhaiya.obscura" },
    { name: "codeagent-mobile", link: "https://play.google.com/store/apps/details?id=com.codeagent.mobile" },
    { name: "PixViewer", link: "https://play.google.com/store/apps/details?id=com.pixviewer.app" },
    { name: "VoXa", link: "https://play.google.com/apps/testing/com.voxa.translator" },
    { name: "Prayer Times Info", link: "https://play.google.com/store/apps/details?id=com.prayertimesinfo.mobile" },
    { name: "Soldier of Sobriety", link: "https://play.google.com/store/apps/details?id=com.ross.soldierofsobriety" },
    { name: "Melify", link: "https://play.google.com/store/apps/details?id=app.melify.mobile&hl=en-US" },
    { name: "GlobtrotterQuiz", link: "https://play.google.com/store/apps/details?id=com.ross.globetrotterquiz" }
  ].map(app => ({
    ...app,
    icon: `https://ui-avatars.com/api/?name=${encodeURIComponent(app.name)}&background=random&color=fff&size=128&font-size=0.33`
  }));

  return (
    <section className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Apps We Approved</h2>
          <p className="text-xl text-gray-400 font-light">Join the growing list of successful launches.</p>
        </FadeIn>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-x-4 gap-y-8 mb-16">
          {apps.map((app, i) => (
            <FadeIn key={i} delay={(i % 10) * 0.05} className="flex flex-col items-center group">
              <a href={app.link} className="flex flex-col items-center w-full min-w-0">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-[1.2rem] overflow-hidden bg-white/5 border border-white/10 mb-3 group-hover:border-primary/50 group-hover:scale-[1.05] transition-all shadow-lg shadow-black/50 flex-shrink-0">
                  <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors truncate w-full text-center px-1">{app.name}</span>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center">
          <a href="https://docs.google.com/spreadsheets/d/1FCSAmxwUawLme_KVG4UiTtW2dfYb2qujvk2Mss4V74U/edit?usp=sharing" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-medium">
            See all approved apps <ArrowRight className="w-5 h-5" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

const ProofsCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 4000 })]);

  const reviews = [
    { name: "Asmik Arustamyan", init: "AA", loc: "US", title: "Very professional team", text: "Very professional team! It was very easy to work with them, highly recommend!", date: "April 1, 2026" },
    { name: "MICHAEL", init: "MI", loc: "IE", title: "I needed testers FAST!!!", text: "I didnt know where to turn when Google said 'you need 12 testers for 14 days'. I discovered these guy through Reddit and I took the chance and signed up. Anyhow, these guys exceeded my expectations.", date: "Apr 2, 2026" },
    { name: "riglesias", init: "RI", loc: "US", title: "App approved", text: "App approved. Responsive and helpful.", date: "Apr 2, 2026" },
    { name: "Omar Dini", init: "OD", loc: "IT", title: "Perfect service!", text: "Perfect service! We got the production access seamlessly. Thank you team.", date: "Mar 28, 2026" },
    { name: "Sarah J.", init: "SJ", loc: "UK", title: "Saved my launch", text: "I was struggling to find 12 people to keep the app installed. They handled it perfectly.", date: "Feb 14, 2026" }
  ];

  return (
    <section id="proofs" className="py-32 overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 mb-16 relative">
        <FadeIn className="text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#00B67A]/10 border border-[#00B67A]/20 text-[#00B67A] font-medium mb-6">
            <StarIcon className="w-5 h-5 fill-current" /> Trustpilot Excellent
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Don't Take Our Word For It</h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">Real developers who bypassed the red tape and got their apps live.</p>
        </FadeIn>
      </div>

      <div className="px-6">
        <div className="overflow-hidden cursor-grab active:cursor-grabbing max-w-7xl mx-auto" ref={emblaRef}>
          <div className="flex -ml-6">
            {reviews.map((r, i) => (
              <div key={i} className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] pl-6">
                <div className="bg-[#111] p-8 rounded-3xl border border-white/5 h-full flex flex-col select-none">
                  <div className="flex gap-1 text-[#00B67A] mb-6">
                    {[...Array(5)].map((_, j) => <StarIcon key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-4 line-clamp-1">{r.title}</h4>
                  <p className="text-gray-400 mb-8 leading-relaxed text-sm flex-grow">"{r.text}"</p>
                  
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white text-sm">
                      {r.init}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{r.name}</div>
                      <div className="text-gray-500 text-xs">{r.loc} • Verified</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <a href="https://trustpilot.com/review/12-testers-for-14-days.github.io" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:underline text-sm font-medium transition-colors">
          Read all reviews on Trustpilot →
        </a>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 relative">
      <div className="absolute inset-0 bg-primary/5 clip-path-slant -z-10" />
      
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">Start Your Test.</h2>
          <p className="text-xl text-gray-400 font-light">Fill out the details below and we'll provision your testers immediately.</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-[#0A0A0A] border border-white/10 p-2 md:p-4 rounded-[2rem] shadow-2xl shadow-black/50">
            <div className="bg-white rounded-3xl overflow-hidden min-h-[650px] relative">
              <formester-standard-form
                set-auto-height="true"
                height="100%"
                width="100%"
                id="PLmdDx6iw"
                url="https://qwxizoyy.formester.com/f/PLmdDx6iw"
              ></formester-standard-form>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    { q: "How do you provide 12 testers for Google Play Console closed testing?", a: "We maintain a verified network of real Android users across diverse devices and geographies. Once you submit your internal testing track link, we deploy 12 unique testers who download your app via physical devices (not emulators) and maintain daily engagement for exactly 14 consecutive days to satisfy Google Play's production access requirements." },
    { q: "Does Google Play detect emulator or bot testing, and is your service safe?", a: "Yes, Google Play Console's integrity systems easily detect emulators, VPN masking, and bot behavior, resulting in immediate account suspension. Our service uses 100% genuine Android hardware with natural usage patterns that are indistinguishable from organic user acquisition." },
    { q: "What happens if I don't have 12 testers for the full 14 days?", a: "Google Play will reject your production access request and reset your testing timeline. You must restart the 14-day period with 12 new active testers. Incomplete testing data is the leading cause of app launch delays." },
    { q: "Which Android devices and OS versions do your testers use?", a: "Our testing matrix covers Samsung Galaxy, Xiaomi, Google Pixel, OnePlus, Oppo, and Motorola devices running Android 8.0 through Android 16 (API 26-36)." },
    { q: "How quickly can I get Google Play production access?", a: "Exactly 14 days from tester deployment. Our service guarantees that all 12 testers remain active for the full 336-hour period required by Google Play Console." }
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-[#050505] border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Questions? <span className="text-gray-500">Answered.</span></h2>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div 
                className={cn(
                  "border border-white/10 rounded-2xl bg-[#0A0A0A] overflow-hidden transition-colors cursor-pointer",
                  open === i ? "border-white/30" : "hover:border-white/20 hover:bg-[#111]"
                )}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="px-8 py-6 flex justify-between items-center gap-6">
                  <h3 className={cn("font-medium text-lg transition-colors", open === i ? "text-white" : "text-gray-300")}>{faq.q}</h3>
                  <ChevronDown className={cn("w-5 h-5 flex-shrink-0 transition-transform duration-300", open === i ? "rotate-180 text-primary" : "text-gray-500")} />
                </div>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-6 text-gray-400 leading-relaxed font-light">
                        <p>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-black pt-24 pb-12 border-t border-white/10 text-center relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <FadeIn className="mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">Ready to launch?</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors w-full sm:w-auto">
            Order Process
          </button>
          <a href="https://wa.me/+923472061598" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto">
            <WhatsAppIcon className="w-5 h-5 text-[#25D366]" /> Talk to Sales
          </a>
        </div>
      </FadeIn>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
        <div className="flex items-center gap-2 text-xl font-bold font-display text-white">
          <span>12 Testers for 14 Days</span>
        </div>
        
        <div className="flex gap-8 text-sm text-gray-500 font-medium">
          <a href="#why" className="hover:text-white transition-colors">Why Us</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>
        
        <div className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} 12 Testers for 14 Days. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [showBanner, setShowBanner] = useState(true);
  const [scrolledEnough, setScrolledEnough] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setScrolledEnough(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 selection:bg-primary/30 selection:text-white overflow-hidden">
      {/* Global Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <MetricsSection />
        <WhyUs />
        <ProcessSteps />
        <ApprovedApps />
        <ProofsCarousel />
        <Pricing />
        <FAQSection />
      </main>
      
      <Footer />

      <AnimatePresence>
        {showBanner && scrolledEnough && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-[400px] bg-[#111]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/80"
          >
            <button 
              onClick={() => setShowBanner(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors"
              aria-label="Close message banner"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex gap-4 pr-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mt-1">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 tracking-wide leading-tight">Premium Testing Network</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Hey! We also have a custom domain <a href="https://www.getsome.rest" target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium">www.getsome.rest</a> with premium Android testing & QA. 
                  <br/><br/>
                  This GitHub site is very well-known on Reddit and other founder platforms, which is why we keep it live and don't redirect it to our primary domain.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.a
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        href="https://wa.me/+923472061598?text=Hi,%20I%20need%2012%20testers%20for%2014%20days%20for%20my%20app"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-[#25D366]/40 hover:bg-[#1ebc57] transition-all hover:scale-110 isolate"
      >
        <WhatsAppIcon className="w-7 h-7" />
        <span className="sr-only">Chat on WhatsApp</span>
      </motion.a>
    </div>
  );
}
