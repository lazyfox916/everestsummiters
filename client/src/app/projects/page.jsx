"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Community Infrastructure Development",
    description:
      "Supporting the construction and improvement of essential infrastructures such as trails, community spaces, and public facilities to enhance everyday life in Rolwaling.",
  },
  {
    title: "Education & Learning Support",
    description:
      "Providing educational materials, support programs, and opportunities that help students and youth gain knowledge, skills, and confidence for the future.",
  },
  {
    title: "Health & Welfare Initiatives",
    description:
      "Organizing health camps, awareness programs, and support systems aimed at improving the overall well-being of community members.",
  },
  {
    title: "Cultural Preservation Activities",
    description:
      "Promoting and preserving local traditions, values, and heritage through events, awareness programs, and community engagement.",
  },
  {
    title: "Tourism Promotion",
    description:
      "Encouraging sustainable tourism in Rolwaling by highlighting its natural beauty, cultural richness, and trekking potential to a wider audience.",
  },
  {
    title: "Skill Development Programs",
    description:
      "Organizing training and workshops that equip individuals with practical skills, promoting self-reliance and economic opportunities.",
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
      className="group h-full"
    >
      <div className="relative h-full overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_25px_60px_rgba(14,165,233,0.12)] sm:p-8">
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-100 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-indigo-100 blur-2xl" />
        </div>

        <div className="relative">
          <div className="mb-6 flex items-center justify-between">
            <div className="h-1.5 w-14 rounded-full bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              Project
            </span>
          </div>

          <h3 className="text-xl font-semibold leading-snug text-slate-900 sm:text-2xl">
            {project.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            {project.description}
          </p>

          <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
            <span className="h-2 w-2 rounded-full bg-sky-600" />
            Community Initiative
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative flex min-h-[65vh] items-center overflow-hidden">
        <Image
          src="https://everestsummitersclub.org.np/wp-content/uploads/2020/07/Beding-Village-scaled.jpg"
          alt="Rolwaling Projects"
          fill
          priority
          unoptimized
          className="object-cover"
        />

        <div className="absolute inset-0  bg-gradient-to-r from-[#000]/70 via-[#000]/45 to-transparent" />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 mx-auto w-full container px-5 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-sky-300">
              Our Projects
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              Projects & Initiatives That Create Lasting Impact
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Mt. Everest Summiters Club, Rolwaling works through practical and
              community-focused initiatives that support development, preserve
              cultural identity, and strengthen the future of the region. Our
              projects reflect a shared commitment to service, responsibility,
              and sustainable progress.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects-grid"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-50"
              >
                Explore Projects
              </a>

              <a
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Content */}
      <section
        id="projects-grid"
        className="relative overflow-hidden bg-[linear-gradient(to_bottom,#ffffff_0%,#f8fbff_100%)] px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-sky-100/50 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-100/50 blur-3xl" />
        </div>

        <div className="relative mx-auto container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">
              Our Work
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Community-Centered Projects
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              The organization is actively involved in a range of initiatives
              that respond to local needs and long-term community priorities.
              From infrastructure and education to tourism, health, and skill
              development, each project represents a practical step toward a
              stronger, more connected, and more sustainable Rolwaling.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
