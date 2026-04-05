"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const objectives = [
  "Promote the welfare of the community and improve quality of life.",
  "Preserve and promote the culture of Rolwaling.",
  "Promote tourism in Rolwaling.",
  "Preserve and manage the natural resources of Rolwaling.",
  "Build infrastructures in the community.",
  "Provide health and education facilities in the community.",
  "Provide financial and necessary support to needy community members.",
  "Organize skill and knowledge development programmes.",
  "Promote and strengthen collective self-reliance among the community members.",
  "Contribute to mutual trust, understanding, and appreciation of one another’s problems.",
  "Introduce Mt. Everest Summiters to the national and international community.",
];

function SectionTag({ children }) {
  return (
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <Image
          src="https://everestsummitersclub.org.np/wp-content/uploads/2020/07/Na-village.jpg"
          alt="Rolwaling Valley"
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000]/70 via-[#000]/60 to-[#000]/70" />

        <div className="relative z-10 mx-auto w-full container px-5 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-sky-300">
              About Us
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              Mt. Everest Summiters Club, Rolwaling
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Mt. Everest Summiters Club, Rolwaling is a community-based
              organization committed to unity, cultural preservation, social
              responsibility, and the long-term development of the Rolwaling
              region. Through collective effort and shared purpose, the
              organization works to strengthen the community and create
              meaningful, lasting impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#who-we-are"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-50"
              >
                Learn More
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

      {/* Intro */}
      <section
        id="who-we-are"
        className="bg-[linear-gradient(to_bottom,_#f8fbff_0%,_#ffffff_100%)] px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto grid container gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <SectionTag>Who We Are</SectionTag>
            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Built on unity, responsibility, and community values
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Mt. Everest Summiters Club, Rolwaling was established as a common
              platform for individuals who share a commitment to the welfare and
              advancement of the Rolwaling community. The organization was
              formed with the understanding that meaningful development is best
              achieved when people come together with a shared vision, mutual
              trust, and a sense of collective responsibility.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              The club works to promote social harmony, preserve cultural
              identity, encourage youth participation, and support initiatives
              that improve the quality of life of community members. It also
              serves as a space where ideas, concerns, and aspirations can be
              brought together and transformed into practical action.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Guided by dedicated leadership and supported by its members, the
              organization continues to focus on long-term progress that is
              rooted in local values, respect for heritage, and a strong sense
              of belonging.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-sky-100 blur-3xl" />
            <div className="absolute -bottom-8 -right-6 h-32 w-32 rounded-full bg-indigo-100 blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(2,6,23,0.08)] sm:p-10">
              <SectionTag>Our Focus</SectionTag>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Community Welfare
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    Supporting initiatives that improve quality of life and
                    create a stronger sense of care, unity, and shared progress.
                    {/* Bottom CTA */}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Cultural Preservation
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    Protecting and promoting the traditions, values, and unique
                    identity of Rolwaling for future generations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Sustainable Development
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    Encouraging development that benefits the community
                    socially, educationally, economically, and environmentally.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* History */}
      <section className="border-t border-slate-200 bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto container">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="grid gap-12 lg:grid-cols-[1fr_1.1fr]"
          >
            <div>
              <SectionTag>Our History</SectionTag>
              <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                A shared journey shaped by purpose and connection
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                The history of Mt. Everest Summiters Club, Rolwaling is rooted
                in a collective desire to bring people together for the welfare
                of the community. Over time, the need for a dedicated platform
                became increasingly important — a platform that could connect
                individuals, preserve cultural identity, and support the social
                and developmental priorities of Rolwaling.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                From its early formation, the organization has focused on
                creating unity among community members and encouraging shared
                responsibility toward common goals. It has grown as a meaningful
                institution where leadership, service, and participation come
                together to address the needs of the region while protecting its
                values and heritage.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                As the club continues to move forward, its history remains
                closely tied to the people it represents — their experiences,
                their aspirations, and their continued efforts to build a
                stronger and more connected future for Rolwaling.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-slate-50/70 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto container">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <SectionTag>Objectives</SectionTag>
            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Mission & Goals
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              The club is guided by clear objectives that reflect its commitment
              to the community, its culture, and its future. These goals shape
              the direction of the organization and define the impact it seeks
              to create.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {objectives.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.03,
                }}
                className="group rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(2,6,23,0.08)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-7 text-slate-700 sm:text-base">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
