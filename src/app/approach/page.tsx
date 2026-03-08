"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Users2, 
  Activity, 
  BookOpen, 
  MessageCircle, 
  Wrench,
  CheckCircle,
  Lightbulb,
  Target
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

export default function ApproachPage() {
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
              How We Work
            </span>
            <h1 className="text-6xl md:text-8xl font-bold font-poppins text-charcoal mb-10 leading-[1.1]">
              A Practical <br />
              <span className="text-gradient">Framework.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-charcoal-light/80 leading-relaxed font-inter max-w-4xl mx-auto">
              We move beyond theory. Our approach is designed for real-world impact, giving you the tools to transform your mental landscape through action and reflection.
            </p>
          </motion.div>

          {/* Methodology Steps */}
          <div className="space-y-12 mb-24">
             {[
               {
                 step: "01",
                 title: "Scientific Assessment",
                 desc: "We start by understanding your unique mental baseline using validated psychological frameworks.",
                 icon: Target
               },
               {
                 step: "02",
                 title: "Immersive Learning",
                 desc: "Engage in workshops and activities that challenge your current patterns and open new perspectives.",
                 icon: Lightbulb
               },
               {
                 step: "03",
                 title: "Applied Practice",
                 desc: "Take the tools into your daily life. We provide the structure to ensure new habits actually stick.",
                 icon: Wrench
               },
               {
                 step: "04",
                 title: "Reflective Integration",
                 desc: "Deepen the growth through guided reflection and group discussions to solidify your progress.",
                 icon: MessageCircle
               }
             ].map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="glass-card p-12 flex flex-col md:flex-row items-center gap-12"
               >
                 <div className="text-6xl md:text-8xl font-bold text-brand-primary/10 font-poppins">
                   {item.step}
                 </div>
                 <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <item.icon className="w-8 h-8 text-brand-primary" />
                      <h3 className="text-3xl font-bold text-charcoal">{item.title}</h3>
                    </div>
                    <p className="text-xl text-charcoal-light/80 leading-relaxed">{item.desc}</p>
                 </div>
               </motion.div>
             ))}
          </div>

          {/* Tools Grid */}
          <div className="glass-card p-12 md:p-20 bg-brand-primary text-white">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-12 text-center">Our Toolkit</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { title: "Workshops", icon: Users2, text: "Expert-led sessions" },
                { title: "Guided Exercises", icon: Activity, text: "Practical mental training" },
                { title: "Digital Resources", icon: BookOpen, text: "Tools for daily use" }
              ].map((tool, i) => (
                <div key={i} className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <tool.icon className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{tool.title}</h4>
                  <p className="text-white/70">{tool.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-6 py-12 text-center border-t border-charcoal/5">
        <LogoOnly className="w-10 h-10 mx-auto mb-6 opacity-30" />
        <p className="text-charcoal-light/40 font-medium">© 2026 Mindwise Approach</p>
      </footer>
    </div>
  );
}