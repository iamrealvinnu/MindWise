"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Smile, 
  Target, 
  Sprout, 
  Users, 
  Brain,
  ShieldCheck,
  Star,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin
} from "lucide-react";

const programData = {
  children: {
    title: "Children's Program",
    icon: Smile,
    color: "from-blue-400 to-cyan-400",
    description: "Building emotional intelligence, focus, and healthy habits early in life. Our program for children (ages 6-12) uses play-based learning and creative exercises to develop foundational mental fitness.",
    highlights: [
      "Identifying and naming emotions",
      "Simple mindfulness and breathing techniques",
      "Building self-confidence through small wins",
      "Social skills and empathetic communication"
    ],
    details: [
      { icon: Clock, label: "Duration", value: "8-Week Program" },
      { icon: Calendar, label: "Frequency", value: "Once a week (Saturday mornings)" },
      { icon: MapPin, label: "Location", value: "Mindwise Studio & Interactive Playroom" }
    ]
  },
  teens: {
    title: "Teen Program",
    icon: Target,
    color: "from-purple-400 to-indigo-400",
    description: "Developing resilience, stress management skills, and positive decision-making. Designed for ages 13-18, this program addresses the unique challenges of adolescence in the digital age.",
    highlights: [
      "Managing academic and social stress",
      "Building a healthy relationship with technology",
      "Developing a growth mindset",
      "Assertive communication and boundary setting"
    ],
    details: [
      { icon: Clock, label: "Duration", value: "10-Week Program" },
      { icon: Calendar, label: "Frequency", value: "Once a week (Tuesday evenings)" },
      { icon: MapPin, label: "Location", value: "Mindwise Youth Hub & Virtual Sessions" }
    ]
  },
  adults: {
    title: "Adult Program",
    icon: Sprout,
    color: "from-emerald-400 to-teal-400",
    description: "Enhancing emotional balance, leadership mindset, and personal growth. Our adult program focuses on practical strategies for managing the complexities of professional and personal life.",
    highlights: [
      "Advanced stress regulation techniques",
      "Mindful leadership and focus",
      "Breaking negative thought patterns",
      "Building sustainable peak performance"
    ],
    details: [
      { icon: Clock, label: "Duration", value: "Continuous / 12-Week Intensive" },
      { icon: Calendar, label: "Frequency", value: "Twice a month workshops" },
      { icon: MapPin, label: "Location", value: "Mindwise Executive Center & Corporate On-site" }
    ]
  },
  parents: {
    title: "Parents & Families",
    icon: Users,
    color: "from-orange-400 to-rose-400",
    description: "Strengthening communication, emotional connection, and healthy family dynamics. We help parents lead by example while building a supportive home environment for everyone.",
    highlights: [
      "Emotion-focused parenting strategies",
      "Conflict resolution within the family",
      "Managing parental burnout",
      "Creating family rituals for mental wellness"
    ],
    details: [
      { icon: Clock, label: "Duration", value: "6-Week Workshop Series" },
      { icon: Calendar, label: "Frequency", value: "Every other Sunday" },
      { icon: MapPin, label: "Location", value: "Mindwise Family Studio" }
    ]
  }
};

const LogoOnly = ({ className = "" }) => (
  <div className={`relative ${className}`}>
    <Image 
      src="/assets/mindwise_logo.png"
      alt="Mindwise Logo" 
      fill
      className="object-contain" 
      priority
    />
  </div>
);

export default function ProgramPage() {
  const params = useParams();
  const slug = params.slug as string;
  const program = programData[slug as keyof typeof programData];

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-bg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-charcoal mb-4">Program Not Found</h1>
          <Link href="/" className="text-brand-primary font-bold hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const Icon = program.icon;

  return (
    <div className="grain min-h-screen bg-[#FCFBFF]">
      <div className="mesh-bg" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center bg-white/50 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-all">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="font-bold text-charcoal group-hover:text-brand-primary transition-colors">Back to Home</span>
        </Link>
        <LogoOnly className="w-12 h-12" />
      </nav>

      <main className="container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <div className={`w-24 h-24 bg-gradient-to-br ${program.color} rounded-[2.5rem] flex items-center justify-center text-white mx-auto mb-10 shadow-xl`}>
              <Icon className="w-12 h-12" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-poppins text-charcoal mb-8">{program.title}</h1>
            <p className="text-2xl md:text-3xl text-charcoal-light/80 leading-relaxed font-inter">
              {program.description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <motion.section 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card p-10 md:p-14"
              >
                <h2 className="text-3xl font-bold font-poppins text-charcoal mb-10 flex items-center gap-4">
                  <Star className="w-8 h-8 text-brand-primary" />
                  Program Highlights
                </h2>
                <div className="grid gap-6">
                  {program.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-6 p-6 bg-brand-bg/30 rounded-3xl border border-white/50">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-brand-primary shrink-0 shadow-sm">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <p className="text-xl text-charcoal-light font-medium leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

              <motion.section 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-10 md:p-14 bg-brand-primary text-white"
              >
                <h2 className="text-3xl font-bold font-poppins mb-8 flex items-center gap-4">
                  <Brain className="w-8 h-8 text-white/80" />
                  Why This Program?
                </h2>
                <p className="text-xl text-white/90 leading-relaxed mb-10">
                  Every stage of life brings different mental challenges. Our {program.title} is specifically designed by certified psychologists to address the neurological and social needs of this age group.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-6 py-3 bg-white/20 rounded-full text-sm font-bold uppercase tracking-wider">Expert Led</span>
                  <span className="px-6 py-3 bg-white/20 rounded-full text-sm font-bold uppercase tracking-wider">Evidence Based</span>
                  <span className="px-6 py-3 bg-white/20 rounded-full text-sm font-bold uppercase tracking-wider">Applied Learning</span>
                </div>
              </motion.section>
            </div>

            {/* Sidebar Details */}
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card p-10 bg-white"
              >
                <h3 className="text-2xl font-bold font-poppins text-charcoal mb-8">Program Details</h3>
                <div className="space-y-8">
                  {program.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-primary">
                        <detail.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-charcoal-light/50 uppercase tracking-widest">{detail.label}</p>
                        <p className="text-lg font-bold text-charcoal">{detail.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-12 bg-brand-primary text-white text-xl font-bold py-6 rounded-[2rem] hover:shadow-2xl hover:shadow-brand-primary/30 transition-all active:scale-95">
                  Apply Now
                </button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="glass-card p-10 bg-gradient-to-br from-charcoal to-black text-white"
              >
                <ShieldCheck className="w-12 h-12 text-brand-accent mb-6" />
                <h3 className="text-xl font-bold mb-4">Psychologist Verified</h3>
                <p className="text-white/70 leading-relaxed">
                  All our programs are audited and updated quarterly based on the latest neurological research and clinical findings.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer Minimal */}
      <footer className="container mx-auto px-6 py-12 border-t border-charcoal/5 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <LogoOnly className="w-8 h-8 opacity-50" />
          <span className="font-bold text-charcoal/30">Mindwise Fitness</span>
        </div>
        <p className="text-charcoal-light/40 text-sm font-medium">© 2026. All rights reserved.</p>
      </footer>
    </div>
  );
}