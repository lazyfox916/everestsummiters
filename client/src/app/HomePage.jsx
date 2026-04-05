"use client";

import About from "@/components/pages/home/About";
import ComeJoinUs from "@/components/pages/home/ComeJoinUs";
import CTA from "@/components/pages/home/CTA";
import Hero from "@/components/pages/home/Hero";
import Objective from "@/components/pages/home/Objective";
import { motion, useReducedMotion } from "framer-motion";

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  const pageMotionProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5, ease: "easeOut" },
      };

  const sectionMotionProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.7, ease: "easeOut" },
      };

  return (
    <motion.main {...pageMotionProps} className="bg-white font-sans text-ink">
      <Hero />
      <motion.div {...sectionMotionProps}>
        <About />
      </motion.div>
      <motion.div {...sectionMotionProps}>
        <Objective />
      </motion.div>
      <motion.div {...sectionMotionProps}>
        <ComeJoinUs />
      </motion.div>
      <motion.div {...sectionMotionProps}>
        <CTA />
      </motion.div>
    </motion.main>
  );
}
