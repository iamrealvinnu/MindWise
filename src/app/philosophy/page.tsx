"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Brain, 
  ShieldCheck, 
  HeartPulse, 
  Sprout,
  Compass,
  Zap,
  Leaf,
  Users,
  MessageCircle,
  TrendingUp,
  Shield
} from "lucide-react";

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

export default function PhilosophyPage() {
  return (
    <div className="grain min-h-screen bg-[#FCFBFF]">
      <div className="mesh-bg" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center bg-white/50 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-all">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="font-bold text-charcoal group-hover:text-brand-primary transition-colors text-lg">Back to Home</span>
        </Link>
        <LogoOnly className="w-12 h-12" />
      </nav>

      <main className="container mx-auto px-6 pt-40 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20 text-center"
          >
            <span className="inline-block py-2 px-6 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-sm tracking-[0.2em] uppercase mb-8">
              Why Mindwise
            </span>
            <h1 className="text-6xl md:text-8xl font-bold font-poppins text-charcoal mb-10 leading-[1.1]">
              Build a Stronger, <br />
              <span className="text-gradient">Healthier Mind.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-charcoal-light/80 leading-relaxed font-inter max-w-4xl mx-auto">
              Welcome to a new era where fitness of your mind matters. We are committed to helping individuals develop a resilient, balanced, and high-performing mind.
            </p>
          </motion.div>

          {/* Why Mind needs to be fit section */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold font-poppins text-charcoal mb-12 text-center uppercase tracking-tight">Why Mind needs to be fit?</h2>
            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  title: "Navigate Challenges",
                  desc: "A resilient mind helps you to navigate challenges with confidence and clarity.",
                  icon: Shield,
                  color: "bg-blue-500/10 text-blue-600"
                },
                {
                  title: "Meaningful Relationships",
                  desc: "Fitness for mind strengthens your ability to build and maintain healthy, meaningful connections.",
                  icon: Users,
                  color: "bg-purple-500/10 text-purple-600"
                },
                {
                  title: "Thoughtful Decisions",
                  desc: "Empower yourself to make thoughtful decisions that align with your values and goals.",
                  icon: Brain,
                  color: "bg-rose-500/10 text-rose-600"
                },
                {
                  title: "Thrive Overall",
                  desc: "Invest in your mind to thrive personally and professionally in today's fast-paced world.",
                  icon: TrendingUp,
                  color: "bg-emerald-500/10 text-emerald-600"
                }
              ].map((pillar, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-12 hover:bg-white"
                >
                  <div className={`w-16 h-16 ${pillar.color} rounded-2xl flex items-center justify-center mb-8`}>
                    <pillar.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-charcoal mb-6">{pillar.title}</h3>
                  <p className="text-xl text-charcoal-light/80 leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Deep Quote */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-16 md:p-24 text-center bg-charcoal text-white relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 blur-[100px] rounded-full" />
             <div className="relative z-10">
               <Compass className="w-16 h-16 text-brand-accent mx-auto mb-10 opacity-50" />
               <p className="text-3xl md:text-5xl font-poppins font-medium leading-[1.2] mb-12 italic">
                 "Just as physical fitness strengthens the body, fitness for mind strengthens your ability to manage thoughts, regulate emotions, and shape positive behaviors."
               </p>
               <div className="w-20 h-1 bg-brand-accent mx-auto mb-8" />
               <p className="text-xl text-white/50 font-bold tracking-widest uppercase">The Mindwise Mission</p>
             </div>
          </motion.div>
        </div>
      </main>

      <footer className="container mx-auto px-6 py-12 text-center border-t border-charcoal/5">
        <LogoOnly className="w-10 h-10 mx-auto mb-6 opacity-30" />
        <p className="text-charcoal-light/40 font-medium">© 2026 Mindwise Philosophy</p>
      </footer>
    </div>
  );
}