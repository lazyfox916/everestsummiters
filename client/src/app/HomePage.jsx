"use client";

import About from "@/components/pages/home/About";
import ComeJoinUs from "@/components/pages/home/ComeJoinUs";
import CTA from "@/components/pages/home/CTA";
import Hero from "@/components/pages/home/Hero";
import Objective from "@/components/pages/home/Objective";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionLabel from "@/components/ui/SectionLabel";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

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
      <section className="relative overflow-hidden py-20 lg:py-24">
        <Image
          src="https://everestsummitersclub.org.np/wp-content/uploads/2020/07/Beding-Village-scaled.jpg"
          alt="Hire section"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-[#000]/45" />
        <div className="relative mx-auto max-w-[1240px] px-5 text-center lg:px-8">
          <SectionLabel>We are available for Hire!</SectionLabel>
          <h2 className="font-[Josefin_Sans] text-[2.4rem] leading-none text-white sm:text-[3.5rem] lg:text-[4.5rem]">
            Contact us for:
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
            –Professional mountain guide <br />
            –Sherpa <br />
            –Trekking guide
          </p>
          <div className="mt-10">
            <PrimaryButton href="/contact">Contact us</PrimaryButton>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
