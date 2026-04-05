"use client";

import { motion } from "framer-motion";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionLabel from "@/components/ui/SectionLabel";
export default function ComeJoinUs() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-32 lg:py-40">
      <motion.div
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://everestsummitersclub.org.np/wp-content/uploads/2020/07/Na-village.jpg"
          alt="Join us"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-20 mx-auto max-w-4xl px-5 text-center"
      >
        <SectionLabel className="text-[#cc0033]">Come join us</SectionLabel>

        <h2 className="font-[Josefin_Sans] text-[2.4rem] leading-[1.1] text-white sm:text-[3.6rem] lg:text-[4.6rem]">
          The club is purely a community welfare club whose major objectives
          include: social development, economic prosperity, cultural
          preservation, and tourism promotion.
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <PrimaryButton href="/contact-us">Join our community</PrimaryButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
