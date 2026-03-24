"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Brain, Sparkles, Activity, ShieldCheck, X, ArrowRight,
  Shield, Heart, TrendingUp, Zap, CheckCircle2, Award,
  Smile, Star, Compass, Briefcase, User, Users, Home, BookOpen, Clock, ArrowLeft,
  Mail, MapPin
} from "lucide-react";

// Types
type SectionId = "philosophy" | "approach" | "programs" | "cta" | null;

const quadrants = [
  {
    id: "philosophy",
  title: "Why MindWise",
    subtitle: "The Foundation",
    color: "bg-[#F4EEFF]",
    textColor: "text-[#6A4C93]",
    hex: "#F4EEFF",
    icon: Brain,
    content: "We are committed to helping individuals develop a resilient, balanced, and high-performing mind. Just as physical fitness strengthens the body, fitness for mind strengthens your ability to manage thoughts, regulate emotions, and shape positive behaviors.",
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
    content: "Our programs focus on real-world application, empowering participants with strategies they can immediately implement in both their professional and personal lives.",
    action: "Our Approach",
    methods: [
      "Interactive workshops",
      "Guided activities",
      "Reflective exercises",
      "Practical tools for everyday life"
    ],
  },
  {
    id: "programs",
    title: "Programs",
    subtitle: "For Everyone",
    color: "bg-[#6A4C93]",
    textColor: "text-white",
    hex: "#6A4C93",
    icon: Sparkles,
    content: "We understand that fitness for the mind evolves across life stages. We offer programs carefully designed and led by certified psychologists.",
    action: "Begin Your Path",
    programList: [
      { title: "Children", icon: Smile, desc: "Building emotional intelligence, focus, confidence, and healthy habits early in life." },
      { title: "Teens", icon: Compass, desc: "Developing resilience, stress management skills, self-esteem, and positive decision-making." },
      { title: "Adults", icon: Briefcase, desc: "Enhancing emotional balance, leadership mindset, stress management, and personal growth." },
      { title: "Families", icon: Home, desc: "Strengthening communication, emotional connection, and healthy family dynamics." }
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
    content: [
        "Join us in building a culture where fitness for your mind is prioritized, practiced, and celebrated.",
        "Because a healthy mind creates a powerful life.",
        "Developed by psychologists based on research."
    ],
    action: "Start Your Journey",
    email: "support@mindwise.com",
    address: "WeWork Princeville, Off Intermediate Ring Road, Embassy Golf Links Business Park, Domlur, Bengaluru, Karnataka-560071"
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Intro sequence: 4.5 seconds of high-priority loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowQuadrants(true);
    }, 4500);
    
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

      {/* High-Priority Loading Intro */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 1.05, 
              filter: "blur(20px)",
              transition: { duration: 1.2, ease: "easeInOut" } 
            }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#E2DBF0]"
          >
            {/* Logo breathing and floating */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                rotate: 0,
                y: [0, -15, 0], 
              }}
              transition={{ 
                scale: { duration: 1.5, ease: "easeOut" },
                rotate: { duration: 1.5, ease: "easeOut" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative w-40 h-40 md:w-64 md:h-64 rounded-full bg-white/30 backdrop-blur-3xl border border-white/40 shadow-[0_30px_100px_rgba(106,76,147,0.25)] flex items-center justify-center p-6 md:p-12 overflow-hidden mb-12"
            >
              <div className="absolute inset-0 rounded-full border border-brand-primary/20 animate-[spin_12s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-brand-primary/10 animate-[spin_18s_linear_infinite_reverse]" />
              <div className="relative w-full h-full flex items-center justify-center">
                <LogoOnly className="w-full h-full" />
              </div>
            </motion.div>

            {/* Requested Brand Line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-col items-center text-center px-6"
            >
              <p className="text-brand-primary text-xl md:text-3xl font-poppins font-bold tracking-tight uppercase">
                Built on Research. <span className="text-charcoal">Designed for Resilience.</span>
              </p>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.5, duration: 2, ease: "easeInOut" }}
                className="h-[1px] bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent mt-6 w-64 md:w-96"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid Canvas - FORCED 2x2 ON ALL SCREENS */}
      <div className="w-full h-full flex flex-col relative z-10">
        {/* Central Logo Overlay */}
        {showQuadrants && !active && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 0 }}
            animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
            transition={{
              scale: { duration: 1.2, ease: "easeOut" },
              opacity: { duration: 1.2, ease: "easeOut" },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full bg-white/30 backdrop-blur-3xl border border-white/40 shadow-[0_30px_100px_rgba(106,76,147,0.25)] flex items-center justify-center p-6 md:p-12 overflow-hidden">
              <div className="absolute inset-0 rounded-full border border-brand-primary/20 animate-[spin_12s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-brand-primary/10 animate-[spin_18s_linear_infinite_reverse]" />
              <div className="relative w-full h-full flex items-center justify-center">
                <LogoOnly className="w-full h-full" />
              </div>
            </div>
          </motion.div>
        )}
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
        opacity: { duration: 2.5, delay: index * 0.4 },
        scale: { duration: 2.5, delay: index * 0.4, ease: "easeOut" },
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
                <motion.div 
                  key="action"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="flex flex-col items-center gap-3"
                >
                  <span className="text-sm md:text-lg font-bold uppercase tracking-[0.3em] opacity-80">
                    {data.action}
                  </span>
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-6 h-6 md:w-8 md:h-8 opacity-60" />
                  </motion.div>
                </motion.div>
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
  
  const [formData, setFormData] = useState({ who: "", focus: "", name: "", email: "", phone: "", country: "+1", otherText: "" });
  const [error, setError] = useState("");

  const nextStep = () => setStep(s => s + 1);
  const resetFlow = () => { 
    setStep(0); 
    setFormData({ who: "", focus: "", name: "", email: "", phone: "", country: "+1", otherText: "" });
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
    const phoneRegex = /^\d{7,15}$/;
    if (!formData.name.trim()) {
      setError("Please provide your name.");
      return;
    }
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      setError("Please provide a valid phone number (digits only, 7-15 numbers)");
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
                 <data.icon className="w-12 h-12 md:w-20 md:h-20 opacity-80" />
               </motion.div>
               
               <motion.h2 layoutId={`title-${data.id}`} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 md:mb-8 leading-[1.1] break-words uppercase tracking-tighter text-inherit">
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
                     <h3 className="text-lg md:text-2xl font-light opacity-80 mb-6 tracking-wide italic text-inherit">
                       {data.subtitle}
                     </h3>
                     {Array.isArray(data.content) ? (
                       <>
                         <p className="text-base md:text-lg leading-relaxed opacity-90 max-w-2xl font-inter mb-6 text-inherit">
                           {data.content[0]}
                         </p>
                         <p className="text-xl md:text-2xl font-bold text-brand-accent mb-2 mt-4 text-inherit">
                           {data.content[1]}
                         </p>
                         <p className="text-sm md:text-base font-semibold text-white/80 mb-10 mt-2 text-inherit">
                           {data.content[2]}
                         </p>
                       </>
                     ) : (
                       <p className="text-base md:text-lg leading-relaxed opacity-90 max-w-2xl font-inter mb-16 text-inherit">
                         {data.content}
                       </p>
                     )}

                     {!isCTA && (
                       <>
                         {data.pillars && (
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                             {data.pillars.map((pillar: any, i: number) => (
                               <div key={i} className="flex items-center gap-4 p-5 rounded-3xl bg-black/5 border border-current/10 transition-transform hover:scale-105 text-left text-inherit cursor-default">
                                 <pillar.icon className="w-6 h-6 shrink-0 text-inherit opacity-70" />
                                 <span className="text-base font-bold text-inherit">{pillar.text}</span>
                               </div>
                             ))}
                           </div>
                         )}
                         {data.methods && (
                           <div className="mb-12 text-left text-inherit">
                             <h4 className="text-lg font-bold uppercase tracking-widest opacity-60 mb-4 flex items-center gap-3">
                               <CheckCircle2 className="w-4 h-4" /> Our Sessions Combine
                             </h4>
                             <div className="flex flex-wrap gap-3">
                               {data.methods.map((method: string, i: number) => (
                                 <span
                                   key={i}
                                   className="px-4 py-2 rounded-2xl bg-current/10 border border-current/20 font-semibold text-sm md:text-base text-inherit whitespace-nowrap shadow-sm"
                                 >
                                   {method}
                                 </span>
                               ))}
                             </div>
                             {Array.isArray(data.outcomes) && data.outcomes.length > 0 && (
                               <div className="flex flex-wrap gap-2 mt-6">
                                 {data.outcomes.map((outcome: string, i: number) => (
                                   <span key={i} className="px-4 py-1.5 rounded-full border-2 border-current font-bold text-xs uppercase tracking-wider opacity-90">
                                     {outcome}
                                   </span>
                                 ))}
                               </div>
                             )}
                           </div>
                         )}
                         {data.programList && (
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 text-left text-inherit">
                             {data.programList.map((prog: any, i: number) => (
                               <div 
                                 key={i} 
                                 onClick={() => onNavigate('cta')}
                                 className="p-6 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col gap-3 hover:bg-white/10 hover:scale-[1.02] transition-all text-inherit cursor-pointer shadow-sm hover:shadow-xl"
                               >
                                 <div className="flex items-center justify-between">
                                    <prog.icon className="w-8 h-8 text-inherit opacity-80" />
                                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                 </div>
                                 <h4 className="text-xl font-bold text-inherit mt-1">{prog.title}</h4>
                                 <p className="text-base opacity-80 leading-relaxed text-inherit">{prog.desc}</p>
                               </div>
                             ))}
                           </div>
                         )}
                       </>
                     )}



                     <button 
                       onClick={handleActionClick}
                       className={`px-10 py-6 rounded-full font-black text-lg md:text-xl flex items-center gap-4 transition-all group ${isCTA ? `mx-auto animate-pulse ${ctaBtnBg} ${ctaBtnText} shadow-2xl` : 'border-2 border-current hover:bg-black/10'}`}
                     >
                       {data.action} 
                       <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                     </button>

                     {isCTA && (
                       <div className="mt-16 pt-8 border-t border-white/10 w-full text-left">
                         <h4 className="text-sm font-bold uppercase tracking-[0.3em] opacity-50 mb-6 text-white">Contact Us</h4>
                         <div className="space-y-6">
                           <div className="flex items-start gap-4 group">
                             <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                               <Mail className="w-5 h-5 text-brand-accent" />
                             </div>
                             <div>
                               <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">Email Us</p>
                               <a href={`mailto:${data.email}`} className="text-lg font-medium text-white hover:text-brand-accent transition-colors">
                                 {data.email}
                               </a>
                             </div>
                           </div>
                           <div className="flex items-start gap-4 group">
                             <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                               <MapPin className="w-5 h-5 text-brand-accent" />
                             </div>
                             <div>
                               <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">Our Location</p>
                               <p className="text-base leading-relaxed opacity-80 max-w-sm text-white">
                                 {data.address}
                               </p>
                             </div>
                           </div>
                         </div>
                       </div>
                     )}
                   </motion.div>
                 ) : (
                   // --- DEEP DIVE VIEWS ---
                   <motion.div 
                     key="step1-deepdive" 
                     initial={{ opacity: 0, x: 20 }} 
                     animate={{ opacity: 1, x: 0 }} 
                     exit={{ opacity: 0, x: -20 }} 
                     className="w-full pt-6"
                   >
                     
                     {/* PHILOSOPHY DEEP DIVE */}
                     {data.id === 'philosophy' && (
                       <div className="space-y-6">
                         <div className="p-6 md:p-10 rounded-[2rem] bg-current/5 border border-current/10 text-center relative overflow-hidden">
                            <Sparkles className="w-10 h-10 mx-auto mb-4 opacity-20" />
                            <p className="text-lg md:text-xl font-light italic leading-relaxed opacity-90 relative z-10">
                              "We envision a world where caring for the mind is as normalized as caring for the body. True resilience isn't about avoiding stress—it's about learning how to navigate it with grace, clarity, and purpose."
                            </p>
                            <div className="mt-6 flex items-center justify-center gap-3 opacity-50">
                              <span className="w-8 h-[1px] bg-current"></span>
                              <span className="text-[10px] font-bold uppercase tracking-widest">The Mindwise Core</span>
                              <span className="w-8 h-[1px] bg-current"></span>
                            </div>
                         </div>
                         <button onClick={() => setStep(0)} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
                           <ArrowLeft className="w-3 h-3" /> Go Back
                         </button>
                       </div>
                     )}

                     {/* APPROACH DEEP DIVE */}
                     {data.id === 'approach' && (
                       <div className="space-y-6">
                         <div className="space-y-6 text-left text-black px-6 py-8 md:px-12 md:py-10">
                           <h3 className="text-xl md:text-2xl font-bold opacity-90 text-black">What We Do</h3>
                           <p className="text-base md:text-lg font-medium text-black">We curate scientifically designed events and structured activities that help individuals:</p>
                           <ul className="list-disc pl-6 space-y-3 text-base md:text-lg font-medium text-black">
                             <li>Manage thoughts with clarity and focus</li>
                             <li>Regulate emotions effectively</li>
                             <li>Build healthy behavioral patterns</li>
                             <li>Improve resilience under stress</li>
                             <li>Strengthen confidence and self-awareness</li>
                           </ul>
                           <p className="mt-4 text-base md:text-lg font-semibold text-black leading-relaxed">All our programs are carefully designed and led by certified psychologists, ensuring that every session is evidence-based, practical, and impactful.</p>
                           <button onClick={() => setStep(0)} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity pt-6 text-black">
                             <ArrowLeft className="w-3 h-3" /> Go Back
                           </button>
                         </div>
                       </div>
                     )}

                     {/* CTA STEPS (1-5) */}
                     {isCTA && step === 1 && (
                       <div className="w-full pt-8">
                         <h3 className="text-xl md:text-2xl font-bold mb-8 text-white">Who is this journey for?</h3>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
                           {whoOptions.map(opt => (
                             <button
                               key={opt}
                               onClick={() => { setFormData({...formData, who: opt}); setStep(2); }}
                               className={`p-5 rounded-2xl ${ctaBtnBg} ${ctaBtnText} font-bold text-lg hover:scale-[1.02] transition-all shadow-lg border-2 border-transparent hover:border-white/30 text-center`}
                             >
                               {opt}
                             </button>
                           ))}
                         </div>
                         <button
                           onClick={() => setStep(0)}
                           className="mt-8 px-6 py-3 rounded-full border-2 border-white/30 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all"
                         >
                           Prev
                         </button>
                       </div>
                     )}

                     {/* --- CTA Step 1.1: Other custom input step --- */}
                     {isCTA && step === 11 && (
                       <div className="w-full pt-8">
                         <h3 className="text-xl md:text-2xl font-bold mb-8 text-white">Tell us more about your needs</h3>
                         <textarea
                           value={formData.otherText}
                           onChange={e => setFormData({ ...formData, otherText: e.target.value })}
                           placeholder="Type your needs or goals here..."
                           className="w-full min-h-[120px] p-5 rounded-2xl bg-white/10 border-2 border-white/20 focus:border-white outline-none text-base text-white placeholder:text-white/40 font-bold mb-6"
                         />
                         <button
                           onClick={() => { setFormData({ ...formData, who: 'Other' }); setStep(2); }}
                           className={`px-8 py-4 rounded-full ${ctaBtnBg} ${ctaBtnText} font-black text-base md:text-lg hover:scale-105 transition-all shadow-xl mx-auto block uppercase tracking-widest`}
                         >
                           Continue
                         </button>
                       </div>
                     )}

                     {/* --- CTA Step 2: What would you like to focus on? --- */}
                     {isCTA && step === 2 && (
                       <div className="w-full pt-8">
                         <h3 className="text-xl md:text-2xl font-bold mb-8 text-white">What would you like to focus on?</h3>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
                           {focusOptions.concat("Other").map(opt => (
                             opt === "Other" ? (
                               <button
                                 key={opt}
                                 onClick={() => setStep(12)}
                                 className={`p-5 rounded-2xl ${ctaBtnBg} ${ctaBtnText} font-bold text-lg hover:scale-[1.02] transition-all shadow-lg border-2 border-transparent hover:border-white/30 text-center`}
                               >
                                 {opt}
                               </button>
                             ) : (
                               <button
                                 key={opt}
                                 onClick={() => { setFormData({...formData, focus: opt}); setStep(3); }}
                                 className={`p-5 rounded-2xl ${ctaBtnBg} ${ctaBtnText} font-bold text-lg hover:scale-[1.02] transition-all shadow-lg border-2 border-transparent hover:border-white/30 text-center`}
                               >
                                 {opt}
                               </button>
                             )
                           ))}
                         </div>
                         <button
                           onClick={() => setStep(1)}
                           className="mt-8 px-6 py-3 rounded-full border-2 border-white/30 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all"
                         >
                           Prev
                         </button>
                       </div>
                     )}

                     {/* --- CTA Step 2.1: Other custom focus input step --- */}
                     {isCTA && step === 12 && (
                       <div className="w-full pt-8">
                         <h3 className="text-xl md:text-2xl font-bold mb-8 text-white">Tell us what you'd like to focus on</h3>
                         <textarea
                           value={formData.focus}
                           onChange={e => setFormData({ ...formData, focus: e.target.value })}
                           placeholder="Type your focus area or goal here..."
                           className="w-full min-h-[100px] p-5 rounded-2xl bg-white/10 border-2 border-white/20 focus:border-white outline-none text-base text-white placeholder:text-white/40 font-bold mb-6"
                         />
                         <div className="flex gap-4 justify-center">
                           <button
                             onClick={() => setStep(2)}
                             className="px-6 py-3 rounded-full border-2 border-white/30 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all"
                           >
                             Prev
                           </button>
                           <button
                             onClick={() => formData.focus.trim() ? setStep(3) : null}
                             disabled={!formData.focus.trim()}
                             className={`px-8 py-4 rounded-full ${ctaBtnBg} ${ctaBtnText} font-black text-base md:text-lg transition-all shadow-xl uppercase tracking-widest ${!formData.focus.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
                           >
                             Continue
                           </button>
                         </div>
                       </div>
                     )}

                     {isCTA && step === 3 && (
                       <div className="w-full pt-12 text-center">
                         <h3 className="text-4xl md:text-7xl font-black mb-8 text-white uppercase tracking-tighter"></h3>
                         <button onClick={nextStep} className={`px-10 py-6 rounded-full ${ctaBtnBg} ${ctaBtnText} font-black text-lg md:text-xl hover:scale-105 transition-all shadow-2xl uppercase tracking-widest`}>
                           Let's map your journey
                         </button>
                       </div>
                     )}

                     {isCTA && step === 4 && (
                       <div className="w-full max-w-lg mx-auto pt-8">
                         <h3 className="text-xl md:text-2xl font-bold mb-6 text-center uppercase tracking-tighter text-white">Almost there...</h3>
                         <p className="text-base opacity-90 mb-8 text-center font-medium leading-relaxed text-white">We'll reach out to schedule your free 15-minute discovery call.</p>
                         <div className="space-y-3 text-left">
                           <input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} type="text" placeholder="Name" className="w-full p-5 rounded-2xl bg-white/10 border-2 border-white/20 focus:border-white outline-none text-base text-white placeholder:text-white/40 font-bold" />
                           <div className="flex gap-2">
                             <select
                               value={formData.country}
                               onChange={e => setFormData({ ...formData, country: e.target.value })}
                               className="p-5 rounded-2xl bg-white/10 border-2 border-white/20 focus:border-white outline-none text-base text-white font-bold w-32"
                             >
                               <option value="+1">🇺🇸 +1</option>
                               <option value="+44">🇬🇧 +44</option>
                               <option value="+91">🇮🇳 +91</option>
                               <option value="+61">🇦🇺 +61</option>
                               <option value="+81">🇯🇵 +81</option>
                               <option value="+49">🇩🇪 +49</option>
                               <option value="+33">🇫🇷 +33</option>
                               <option value="+971">🇦🇪 +971</option>
                               <option value="+65">🇸🇬 +65</option>
                               <option value="+86">🇨🇳 +86</option>
                               <option value="+7">🇷🇺 +7</option>
                               <option value="+34">🇪🇸 +34</option>
                               <option value="+39">🇮🇹 +39</option>
                               <option value="+55">🇧🇷 +55</option>
                               <option value="+27">🇿🇦 +27</option>
                               <option value="+82">🇰🇷 +82</option>
                               <option value="+62">🇮🇩 +62</option>
                               <option value="+234">🇳🇬 +234</option>
                               <option value="+20">🇪🇬 +20</option>
                               <option value="+880">🇧🇩 +880</option>
                             </select>
                             <input value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} type="tel" placeholder="Phone Number" className="flex-1 p-5 rounded-2xl bg-white/10 border-2 border-white/20 focus:border-white outline-none text-base text-white placeholder:text-white/40 font-bold" />
                           </div>
                           <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} type="email" placeholder="Your Email" className="w-full p-5 rounded-2xl bg-white/10 border-2 border-white/20 focus:border-white outline-none text-base text-white placeholder:text-white/40 font-bold" />
                           {error && <p className="text-red-400 text-sm font-bold text-center animate-pulse">{error}</p>}
                           <button onClick={handleConfirm} className={`w-full p-5 rounded-2xl ${ctaBtnBg} ${ctaBtnText} font-black text-lg hover:shadow-[0_0_60px_rgba(227,213,255,0.3)] transition-all shadow-xl uppercase tracking-widest`}>
                             Confirm My Request
                           </button>
                         </div>
                       </div>
                     )}

                     {isCTA && step === 5 && (
                       <div className="w-full text-center py-8">
                          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShieldCheck className="w-8 h-8 text-green-500" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white tracking-tight">Confirmed.</h3>
                          <div className="max-w-sm mx-auto space-y-4 text-white text-center">
                            <p className="text-base md:text-lg opacity-90">
                              Thanks, {formData.name.split(' ')[0]}. We'll reach out to <span className="font-bold underline">{formData.email}</span> within 24 hours.
                            </p>
                            <button onClick={resetFlow} className="mt-6 text-white/50 hover:text-white underline underline-offset-8 transition-colors font-bold uppercase tracking-widest text-[10px]">
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
             <data.icon className="w-48 h-48 opacity-10 animate-pulse" />
           </div>
         </motion.div>
       </div>
    </motion.div>
  );
}
