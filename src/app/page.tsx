"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Brain, Sparkles, Activity, ShieldCheck, X, ArrowRight,
  Shield, Heart, TrendingUp, Zap, CheckCircle2, Award,
  Smile, Star, Compass, Briefcase, User, Users, Home, BookOpen, Clock, ArrowLeft
} from "lucide-react";

// Types
type SectionId = "philosophy" | "approach" | "programs" | "cta" | null;

const quadrants = [
  {
    id: "philosophy",
    title: "Philosophy",
    subtitle: "The Foundation",
    color: "bg-[#F4EEFF]",
    textColor: "text-[#6A4C93]",
    hex: "#F4EEFF",
    icon: Brain,
    content: "We are a dedicated mental fitness company committed to helping individuals develop a resilient, balanced, and high-performing mind. Just as physical fitness strengthens the body, mental fitness strengthens your ability to manage thoughts, regulate emotions, and shape positive behaviors.",
    action: "Our Vision",
    pillars: [
      { icon: Shield, text: "Navigate challenges with confidence" },
      { icon: Heart, text: "Build meaningful relationships" },
      { icon: Brain, text: "Make thoughtful decisions" },
      { icon: TrendingUp, text: "Thrive personally and professionally" }
    ]
  },
  {
    id: "approach",
    title: "Approach",
    subtitle: "Practical Tools",
    color: "bg-[#E3D5FF]",
    textColor: "text-[#2D3748]",
    hex: "#E3D5FF",
    icon: ShieldCheck,
    content: "We focus on real-life application, ensuring you leave with strategies you can immediately use at home, school, or work. Our evidence-based tools are designed for immediate impact.",
    action: "Our Methods",
    methods: [
      "Interactive workshops",
      "Guided activities & Reflective exercises",
      "Group discussions",
      "Practical tools for everyday life"
    ],
    outcomes: [
      "Manage thoughts with clarity",
      "Regulate emotions effectively",
      "Build healthy behavioral patterns",
      "Improve resilience under stress",
      "Strengthen confidence"
    ]
  },
  {
    id: "programs",
    title: "Programs",
    subtitle: "For Everyone",
    color: "bg-[#6A4C93]",
    textColor: "text-white",
    hex: "#6A4C93",
    icon: Sparkles,
    content: "Mental fitness needs evolve across life stages. We offer tailored programs specifically designed for where you are now.",
    action: "Begin Your Path",
    programList: [
      { title: "Children", icon: Smile, desc: "Building emotional intelligence, focus, and healthy habits early." },
      { title: "Teens", icon: Compass, desc: "Developing resilience, stress management, and decision-making." },
      { title: "Adults", icon: Briefcase, desc: "Enhancing leadership mindset and personal growth." },
      { title: "Families", icon: Home, desc: "Strengthening communication and family dynamics." }
    ]
  },
  {
    id: "cta",
    title: "Join Us",
    subtitle: "Start Growing",
    color: "bg-[#2D3748]",
    textColor: "text-[#E3D5FF]",
    hex: "#2D3748",
    icon: Activity,
    content: "Join us in building a culture where mental fitness is prioritized, practiced, and celebrated. A healthy mind creates a powerful life.",
    action: "Start Your Journey"
  },
];

// --- Custom Components ---

const LogoOnly = ({ className = "" }) => (
  <div className={`relative ${className}`}>
    <Image 
      src="/assets/mindwise_logo.png"
      alt="Mindwise Logo" 
      fill
      className="object-contain scale-[2.0]" 
      priority
    />
  </div>
);

export default function UniqueLanding() {
  const [hovered, setHovered] = useState<SectionId>(null);
  const [active, setActive] = useState<SectionId>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showQuadrants, setShowQuadrants] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // THE SOLO LOGO PHASE: 3.5 seconds of just the logo breathing
    const timer = setTimeout(() => setShowQuadrants(true), 3500);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="h-[100dvh] w-screen overflow-hidden bg-[#E2DBF0] relative font-inter text-foreground select-none">
      
      {/* Fluid Brand Mesh Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-white/30 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] bg-[#B39DDB]/30 blur-[100px] rounded-full" />
        <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-brand-primary/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* Central Interactive Logo */}
      <AnimatePresence>
        {!active && (
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              rotate: 0,
              y: [0, -15, 0], 
            }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ 
              scale: { type: "spring", stiffness: 300, damping: 15 },
              rotate: { duration: 1 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
          >
            <motion.div 
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-32 h-32 md:w-60 md:h-60 rounded-full bg-white/25 backdrop-blur-3xl border border-white/30 shadow-[0_30px_100px_rgba(106,76,147,0.3)] flex items-center justify-center p-4 md:p-10 overflow-hidden"
            >
              <div className="absolute inset-0 rounded-full border border-brand-primary/15 animate-[spin_15s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-brand-primary/10 animate-[spin_20s_linear_infinite_reverse]" />
              <div className="relative w-[95%] h-[95%] flex items-center justify-center">
                <LogoOnly className="w-full h-full drop-shadow-2xl" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid Canvas - FORCED 2x2 ON ALL SCREENS */}
      <div className="w-full h-full flex flex-col relative z-10">
        {/* Top Half */}
        <div className="flex-1 flex flex-row">
          <Quadrant data={quadrants[0]} hovered={hovered} setHovered={setHovered} setActive={setActive} isMobile={isMobile} isVisible={showQuadrants} index={0} />
          <Quadrant data={quadrants[1]} hovered={hovered} setHovered={setHovered} setActive={setActive} isMobile={isMobile} isVisible={showQuadrants} index={1} />
        </div>
        {/* Bottom Half */}
        <div className="flex-1 flex flex-row">
          <Quadrant data={quadrants[2]} hovered={hovered} setHovered={setHovered} setActive={setActive} isMobile={isMobile} isVisible={showQuadrants} index={2} />
          <Quadrant data={quadrants[3]} hovered={hovered} setHovered={setHovered} setActive={setActive} isMobile={isMobile} isVisible={showQuadrants} index={3} />
        </div>
      </div>

      {/* Expanded Active View Overlay */}
      <AnimatePresence>
        {active && (
          <ActiveView 
            data={quadrants.find(q => q.id === active)!} 
            onClose={() => setActive(null)} 
            onNavigate={(id: SectionId) => setActive(id)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function Quadrant({ data, hovered, setHovered, setActive, isMobile, isVisible, index }: any) {
  const isHovered = hovered === data.id;
  const isOtherHovered = hovered !== null && hovered !== data.id;

  const flexGrow = isMobile ? 1 : (isHovered ? 2.5 : (isOtherHovered ? 0.6 : 1));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={isVisible ? { 
        opacity: 1, 
        scale: 1,
        flexGrow: flexGrow 
      } : {}}
      transition={{ 
        opacity: { duration: 0.8, delay: index * 0.1 },
        scale: { duration: 1, delay: index * 0.1, ease: "easeOut" },
        flexGrow: { type: "spring", stiffness: 300, damping: 30 }
      }}
      className="relative flex flex-col justify-center items-center cursor-pointer overflow-hidden group px-2 md:px-4"
      style={{ flexBasis: 0 }}
      onMouseEnter={() => !isMobile && setHovered(data.id)}
      onMouseLeave={() => !isMobile && setHovered(null)}
      onClick={() => setActive(data.id)}
    >
      <motion.div 
         layoutId={`background-${data.id}`}
         className={`absolute inset-0 ${data.color} ${data.textColor}`}
      >
         <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_60%)]" />
      </motion.div>

      <motion.div layoutId={`content-${data.id}`} className={`relative z-10 flex flex-col items-center text-center ${data.textColor} w-full max-w-2xl`}>
         <motion.div layoutId={`icon-${data.id}`}>
           <data.icon className="w-10 h-10 md:w-16 md:h-16 mb-4 md:mb-6 opacity-80" />
         </motion.div>
         
         <motion.h2 layoutId={`title-${data.id}`} className="text-xl md:text-4xl font-poppins font-bold tracking-tight mb-1 md:mb-2 break-words w-full uppercase tracking-tighter text-inherit">
           {data.title}
         </motion.h2>

         {!isMobile && (isVisible) && (
          <div className="mt-4 w-full flex justify-center min-h-[5rem]">
            <AnimatePresence mode="wait">
              {isHovered ? (
                <motion.p 
                  key="content"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-sm md:text-base lg:text-lg opacity-80 max-w-md font-medium leading-relaxed px-6"
                >
                  {data.content.substring(0, 100)}...
                </motion.p>
              ) : (
                <motion.p 
                  key="subtitle"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-lg md:text-2xl opacity-60 font-light tracking-wide px-4"
                >
                  {data.subtitle}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        )}
        
        {isMobile && (
          <p className="mt-1 text-xs sm:text-sm opacity-70 font-medium px-2 text-center line-clamp-1">
            {data.subtitle}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}

function ActiveView({ data, onClose, onNavigate }: any) {
  const [step, setStep] = useState(0); 
  
  const [formData, setFormData] = useState({ who: "", focus: "", name: "", email: "" });
  const [error, setError] = useState("");

  const nextStep = () => setStep(s => s + 1);
  const resetFlow = () => { 
    setStep(0); 
    setFormData({ who: "", focus: "", name: "", email: "" });
    setError("");
    onClose(); 
  };

  const handleActionClick = () => {
    if (data.id === 'programs') {
      onNavigate('cta');
    } else {
      setStep(1);
    }
  };

  const handleConfirm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;
    if (!formData.name.trim()) {
      setError("Please provide your name.");
      return;
    }
    if (!emailRegex.test(formData.email)) {
      setError("Please provide a valid email");
      return;
    }
    setError("");
    setStep(5);
  };

  // Discovery Flow Options
  const whoOptions = ["Myself", "My Child", "My Teen", "My Family"];
  const focusOptions = ["Managing Stress", "Emotional Growth", "Leadership", "Better Relationships"];

  // Colors
  const isCTA = data.id === 'cta';
  const ctaBtnBg = "bg-[#E3D5FF]"; 
  const ctaBtnText = "text-[#2D3748]";

  return (
    <motion.div 
      layoutId={`background-${data.id}`}
      className={`fixed inset-0 z-[100] ${data.color} ${data.textColor} overflow-y-auto overflow-x-hidden scroll-smooth selection:bg-current selection:text-white`}
    >
       <div className="fixed inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
       
       <button 
         onClick={resetFlow}
         className="fixed top-6 right-6 md:top-12 md:right-12 z-[110] p-4 rounded-full bg-black/20 hover:bg-black/40 hover:scale-110 active:scale-95 backdrop-blur-xl transition-all border border-white/10 text-white"
       >
         <X className="w-6 h-6 md:w-8 md:h-8" />
       </button>

       <div className="flex flex-col lg:flex-row min-h-screen w-full">
         {/* Content Side */}
         <div className={`flex-1 flex flex-col justify-start pt-32 pb-24 px-8 md:px-16 lg:px-24 relative z-10 ${isCTA ? 'items-center text-center' : 'items-start text-left'}`}>
           <motion.div layoutId={`content-${data.id}`} className="w-full max-w-4xl">
               <motion.div layoutId={`icon-${data.id}`} className={`mb-8 md:mb-12 ${isCTA ? 'flex justify-center' : ''}`}>
                 <data.icon className="w-16 h-16 md:w-24 md:h-24 opacity-80" />
               </motion.div>
               
               <motion.h2 layoutId={`title-${data.id}`} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 md:mb-10 leading-[1.1] break-words uppercase tracking-tighter text-inherit">
                 {data.title}
               </motion.h2>
               
               <AnimatePresence mode="wait">
                 {step === 0 ? (
                   <motion.div 
                     key="step0"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     className="w-full"
                   >
                     <h3 className="text-xl md:text-3xl font-light opacity-80 mb-6 tracking-wide italic text-inherit">
                       {data.subtitle}
                     </h3>
                     <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-3xl font-inter mb-20 text-inherit">
                       {data.content}
                     </p>

                     {!isCTA && (
                       <>
                         {data.pillars && (
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                             {data.pillars.map((pillar: any, i: number) => (
                               <div key={i} className="flex items-center gap-4 p-6 rounded-3xl bg-black/5 border border-current/10 transition-transform hover:scale-105 text-left text-inherit cursor-default">
                                 <pillar.icon className="w-8 h-8 shrink-0 text-inherit opacity-70" />
                                 <span className="text-lg font-bold text-inherit">{pillar.text}</span>
                               </div>
                             ))}
                           </div>
                         )}
                         {data.methods && (
                           <div className="space-y-10 mb-16 text-left text-inherit">
                             <h4 className="text-xl font-bold uppercase tracking-widest opacity-60 mb-6 flex items-center gap-3">
                               <CheckCircle2 className="w-5 h-5" /> Our Sessions Combine
                             </h4>
                             <ul className="space-y-4">
                               {data.methods.map((method: string, i: number) => (
                                 <li key={i} className="text-xl md:text-2xl font-medium flex items-start gap-4">
                                   <span className="w-3 h-3 rounded-full bg-current mt-3 shrink-0 opacity-50" />
                                   {method}
                                 </li>
                               ))}
                             </ul>
                             <div className="flex flex-wrap gap-3 mt-8">
                               {data.outcomes.map((outcome: string, i: number) => (
                                 <span key={i} className="px-5 py-2 rounded-full border-2 border-current font-bold text-sm uppercase tracking-wider opacity-90">
                                   {outcome}
                                 </span>
                               ))}
                             </div>
                           </div>
                         )}
                         {data.programList && (
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 text-left text-inherit">
                             {data.programList.map((prog: any, i: number) => (
                               <div 
                                 key={i} 
                                 onClick={() => onNavigate('cta')}
                                 className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col gap-4 hover:bg-white/10 hover:scale-[1.02] transition-all text-inherit cursor-pointer shadow-sm hover:shadow-xl"
                               >
                                 <div className="flex items-center justify-between">
                                    <prog.icon className="w-10 h-10 text-inherit opacity-80" />
                                    <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                                 </div>
                                 <h4 className="text-2xl font-bold text-inherit mt-2">{prog.title}</h4>
                                 <p className="text-lg opacity-80 leading-relaxed text-inherit">{prog.desc}</p>
                               </div>
                             ))}
                           </div>
                         )}
                       </>
                     )}

                     {isCTA && (
                       <div className="flex flex-col items-center gap-8 mb-20">
                          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20 shadow-lg text-white">
                            <BookOpen className="w-5 h-5" />
                            <span className="text-sm font-bold uppercase tracking-widest text-white">Scientifically Developed</span>
                          </div>
                       </div>
                     )}

                     <button 
                       onClick={handleActionClick}
                       className={`px-12 py-8 rounded-full font-black text-xl md:text-2xl flex items-center gap-4 transition-all group ${isCTA ? `mx-auto animate-pulse ${ctaBtnBg} ${ctaBtnText} shadow-2xl` : 'border-2 border-current hover:bg-black/10'}`}
                     >
                       {data.action} 
                       <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                     </button>
                   </motion.div>
                 ) : (
                   // --- DEEP DIVE VIEWS ---
                   <motion.div 
                     key="step1-deepdive" 
                     initial={{ opacity: 0, x: 20 }} 
                     animate={{ opacity: 1, x: 0 }} 
                     exit={{ opacity: 0, x: -20 }} 
                     className="w-full pt-8"
                   >
                     
                     {/* PHILOSOPHY DEEP DIVE */}
                     {data.id === 'philosophy' && (
                       <div className="space-y-8">
                         <div className="p-8 md:p-12 rounded-[2.5rem] bg-current/5 border border-current/10 text-center relative overflow-hidden">
                            <Sparkles className="w-12 h-12 mx-auto mb-6 opacity-20" />
                            <p className="text-xl md:text-2xl font-light italic leading-relaxed opacity-90 relative z-10">
                              "We envision a world where caring for the mind is as normalized as caring for the body. True resilience isn't about avoiding stress—it's about learning how to navigate it with grace, clarity, and purpose."
                            </p>
                            <div className="mt-8 flex items-center justify-center gap-3 opacity-50">
                              <span className="w-10 h-[1px] bg-current"></span>
                              <span className="text-xs font-bold uppercase tracking-widest">The Mindwise Core</span>
                              <span className="w-10 h-[1px] bg-current"></span>
                            </div>
                         </div>
                         <button onClick={() => setStep(0)} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
                           <ArrowLeft className="w-4 h-4" /> Go Back
                         </button>
                       </div>
                     )}

                     {/* APPROACH DEEP DIVE */}
                     {data.id === 'approach' && (
                       <div className="space-y-8">
                         <h3 className="text-2xl font-bold mb-6 opacity-90">A Typical 60-Minute Session</h3>
                         <div className="space-y-4">
                           <div className="flex gap-6 items-start p-6 rounded-3xl bg-black/5 border border-current/10 hover:bg-black/10 transition-colors">
                              <div className="p-3 rounded-full bg-current/10 shrink-0"><Heart className="w-6 h-6 opacity-80" /></div>
                              <div>
                                 <h4 className="text-xl font-bold mb-1">1. Grounding <span className="opacity-50 text-sm font-normal ml-2">(10 mins)</span></h4>
                                 <p className="text-base opacity-80 leading-relaxed">Centering exercises to bring focus to the present moment and leave the day's noise behind.</p>
                              </div>
                           </div>
                           <div className="flex gap-6 items-start p-6 rounded-3xl bg-black/5 border border-current/10 hover:bg-black/10 transition-colors">
                              <div className="p-3 rounded-full bg-current/10 shrink-0"><Compass className="w-6 h-6 opacity-80" /></div>
                              <div>
                                 <h4 className="text-xl font-bold mb-1">2. Discovery <span className="opacity-50 text-sm font-normal ml-2">(30 mins)</span></h4>
                                 <p className="text-base opacity-80 leading-relaxed">Interactive workshops, safe role-playing, and cognitive framing to build real skills.</p>
                              </div>
                           </div>
                           <div className="flex gap-6 items-start p-6 rounded-3xl bg-black/5 border border-current/10 hover:bg-black/10 transition-colors">
                              <div className="p-3 rounded-full bg-current/10 shrink-0"><ShieldCheck className="w-6 h-6 opacity-80" /></div>
                              <div>
                                 <h4 className="text-xl font-bold mb-1">3. Integration <span className="opacity-50 text-sm font-normal ml-2">(20 mins)</span></h4>
                                 <p className="text-base opacity-80 leading-relaxed">Actionable takeaways and structured journaling to apply today's growth to tomorrow's life.</p>
                              </div>
                           </div>
                         </div>
                         <button onClick={() => setStep(0)} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity pt-4">
                           <ArrowLeft className="w-4 h-4" /> Go Back
                         </button>
                       </div>
                     )}

                     {/* CTA STEPS (1-5) */}
                     {isCTA && step === 1 && (
                       <div className="w-full pt-12">
                         <h3 className="text-2xl md:text-3xl font-bold mb-10 text-white">Who is this journey for?</h3>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                           {whoOptions.map(opt => (
                             <button key={opt} onClick={() => { setFormData({...formData, who: opt}); setStep(2); }} className={`p-6 rounded-2xl ${ctaBtnBg} ${ctaBtnText} font-bold text-xl hover:scale-[1.02] transition-all shadow-lg border-2 border-transparent hover:border-white/30 text-center`}>
                               {opt}
                             </button>
                           ))}
                         </div>
                       </div>
                     )}

                     {isCTA && step === 2 && (
                       <div className="w-full pt-12">
                         <h3 className="text-2xl md:text-3xl font-bold mb-10 text-white">What would you like to focus on?</h3>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                           {focusOptions.map(opt => (
                             <button key={opt} onClick={() => { setFormData({...formData, focus: opt}); setStep(3); }} className={`p-6 rounded-2xl ${ctaBtnBg} ${ctaBtnText} font-bold text-xl hover:scale-[1.02] transition-all shadow-lg border-2 border-transparent hover:border-white/30 text-center`}>
                               {opt}
                             </button>
                           ))}
                         </div>
                       </div>
                     )}

                     {isCTA && step === 3 && (
                       <div className="w-full pt-12">
                         <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center uppercase tracking-tighter text-white">You're in the right place.</h3>
                         <div className="max-w-2xl mx-auto p-8 rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/20 flex flex-col md:flex-row items-center gap-8 text-left mb-12 shadow-2xl">
                            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center shrink-0 border-2 border-white/30">
                              <User className="w-12 h-12 text-white" />
                            </div>
                            <div className="text-white">
                              <h4 className="text-2xl font-bold mb-2">Our Certified Experts</h4>
                              <p className="text-lg opacity-90 italic mb-4 font-medium leading-relaxed">"Our team of psychologists specializes in {formData.focus.toLowerCase()} for {formData.who.toLowerCase()}."</p>
                              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-70">
                                <ShieldCheck className="w-4 h-4 text-brand-accent" /> PhD & Clinical Credentials
                              </div>
                            </div>
                         </div>
                         <button onClick={nextStep} className={`px-10 py-6 rounded-full ${ctaBtnBg} ${ctaBtnText} font-black text-lg md:text-xl hover:scale-105 transition-all shadow-xl mx-auto block uppercase tracking-widest`}>
                           Let's Map Your Path
                         </button>
                       </div>
                     )}

                     {isCTA && step === 4 && (
                       <div className="w-full max-w-xl mx-auto pt-12">
                         <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center uppercase tracking-tighter text-white">Almost there...</h3>
                         <p className="text-lg opacity-90 mb-10 text-center font-medium leading-relaxed text-white">We'll reach out to schedule your free 15-minute discovery call.</p>
                         <div className="space-y-4 text-left">
                           <input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} type="text" placeholder="Your Name" className="w-full p-6 rounded-2xl bg-white/10 border-2 border-white/20 focus:border-white outline-none text-lg text-white placeholder:text-white/40 font-bold" />
                           <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} type="email" placeholder="Your Email (ending in .com)" className="w-full p-6 rounded-2xl bg-white/10 border-2 border-white/20 focus:border-white outline-none text-lg text-white placeholder:text-white/40 font-bold" />
                           
                           {error && <p className="text-red-400 font-bold text-center animate-pulse">{error}</p>}
                           
                           <button onClick={handleConfirm} className={`w-full p-6 rounded-2xl ${ctaBtnBg} ${ctaBtnText} font-black text-xl hover:shadow-[0_0_60px_rgba(227,213,255,0.3)] transition-all shadow-xl uppercase tracking-widest`}>
                             Confirm My Request
                           </button>
                         </div>
                       </div>
                     )}

                     {isCTA && step === 5 && (
                       <div className="w-full text-center py-12">
                          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                            <ShieldCheck className="w-10 h-10 text-green-500" />
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">Confirmed.</h3>
                          <div className="max-w-md mx-auto space-y-6 text-white text-center">
                            <p className="text-lg md:text-xl opacity-90">
                              Thanks, {formData.name.split(' ')[0]}. We'll reach out to <span className="font-bold underline">{formData.email}</span> within 24 hours.
                            </p>
                            <button onClick={resetFlow} className="mt-8 text-white/50 hover:text-white underline underline-offset-8 transition-colors font-bold uppercase tracking-widest text-xs">
                              Return to Home
                            </button>
                          </div>
                       </div>
                     )}

                   </motion.div>
                 )}
               </AnimatePresence>
           </motion.div>
         </div>

         {/* Visual Side - Sticky */}
         <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ delay: 0.5, duration: 1 }}
           className="hidden lg:flex flex-1 relative items-center justify-center pointer-events-none text-inherit overflow-hidden"
         >
           <div className="sticky top-0 h-screen w-full flex items-center justify-center">
             <div className="absolute w-[40vw] h-[40vw] rounded-full border border-current opacity-10 animate-[spin_40s_linear_infinite]" />
             <div className="absolute w-[30vw] h-[30vw] rounded-full border border-current opacity-20 animate-[spin_30s_linear_infinite_reverse]" />
             <div className="absolute w-[20vw] h-[20vw] rounded-full border border-current opacity-30" />
             <data.icon className="w-64 h-64 opacity-10 animate-pulse" />
           </div>
         </motion.div>
       </div>
    </motion.div>
  );
}
