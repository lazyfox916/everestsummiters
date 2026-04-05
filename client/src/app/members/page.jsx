"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const members = [
  {
    name: "Dawachhiri Sherpa",
    role: "Chairperson",
    description:
      "Leads the organization with a clear vision, guiding the club toward meaningful impact, unity, and long-term community development.",
  },
  {
    name: "Pasang Kedar Sherpa",
    role: "Vice Chairperson",
    description:
      "Supports the leadership team in strategic planning, coordination, and ensuring the smooth execution of major initiatives.",
  },
  {
    name: "Pema Chhiring Sherpa",
    role: "Treasurer",
    description:
      "Oversees financial planning and management with transparency, accountability, and a strong sense of responsibility.",
  },
  {
    name: "Pemba Rita Sherpa",
    role: "Secretary",
    description:
      "Manages records, communication, and official documentation while helping maintain the club’s organizational flow.",
  },
  {
    name: "Sange Sherpa",
    role: "Joint Secretary",
    description:
      "Assists in administration and internal coordination, contributing to effective communication across the committee.",
  },
  {
    name: "Pasang Kame Sherpa",
    role: "Member",
    description:
      "Actively contributes to the club’s programs and supports community-based initiatives with dedication.",
  },
  {
    name: "Mingma Chhiri Sherpa",
    role: "Member",
    description:
      "Supports committee activities and brings commitment to the club’s collaborative mission and outreach.",
  },
  {
    name: "Dawa Phuti Sherpa",
    role: "Member",
    description:
      "Dedicated to strengthening teamwork, participation, and the spirit of shared responsibility within the organization.",
  },
  {
    name: "Nima Jangmu Sherpa",
    role: "Member",
    description:
      "Brings energy, enthusiasm, and active involvement to help the club grow and serve the community better.",
  },
  {
    name: "Ang Riku Sherpa",
    role: "Member",
    description:
      "Focused on community participation and committed to supporting the club’s vision through meaningful contribution.",
  },
  {
    name: "Nimphuti Sherpa",
    role: "Member",
    description:
      "Contributes to the unity and development of the organization through consistent support and teamwork.",
  },
];

const executiveMembers = members.filter((m) => m.role !== "Member");
const generalMembers = members.filter((m) => m.role === "Member");

function getInitials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? "text-center" : "text-left"}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-7 text-slate-600 sm:text-lg ${
            center ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function MemberCard({ member, index }) {
  const isExecutive = member.role !== "Member";

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.06 }}
      className="group h-full"
    >
      <div className="relative h-full overflow-hidden rounded-[28px] border border-white/50 bg-white/70 p-[1px] shadow-[0_10px_40px_rgba(2,6,23,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(14,165,233,0.18)]">
        <div className="absolute inset-0 bg-gradient-to-br from-black-400/20 via-transparent to-black-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex h-full flex-col rounded-[27px] bg-white/80 px-6 py-7 sm:px-7">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#0369a1] to-[#4f46e5] text-lg font-bold text-white shadow-lg transition-transform duration-500 group-hover:scale-105">
              {getInitials(member.name)}
            </div>

            <span
              className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] ${
                isExecutive
                  ? "bg-rose-50 text-rose-600 ring-1 ring-rose-200"
                  : "bg-sky-50 text-sky-700 ring-1 ring-sky-200"
              }`}
            >
              {member.role}
            </span>
          </div>

          <h3 className="text-xl font-semibold text-slate-900">
            {member.name}
          </h3>

          <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
            {member.description}
          </p>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-sky-200 via-slate-200 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}

function FeaturedLeader({ member }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative overflow-hidden rounded-[32px] border border-white/40 bg-white/70 shadow-[0_20px_80px_rgba(2,6,23,0.10)] backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-indigo-500/10" />
      <div className="relative grid gap-10 px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-[220px_1fr] lg:items-center lg:px-14 lg:py-14">
        <div className="flex justify-center">
          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-[#0f172a] via-[#0369a1] to-[#4f46e5] text-4xl font-bold text-white shadow-2xl">
            {getInitials(member.name)}
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">
            Featured Leader
          </p>
          <h3 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {member.name}
          </h3>
          <p className="mt-2 inline-flex rounded-full bg-rose-50 px-4 py-1.5 text-sm font-semibold text-rose-600 ring-1 ring-rose-200">
            {member.role}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            {member.description} As the leading voice of the committee, this
            role represents the values, mission, and future direction of the
            organization while inspiring collective effort and trust.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function MembersPage() {
  return (
    <main className="bg-[linear-gradient(to_bottom,_#f8fbff_0%,_#eef6ff_45%,_#ffffff_100%)] text-slate-900">
      {/* Hero */}
      <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden">
        <Image
          src="https://everestsummitersclub.org.np/wp-content/uploads/2020/07/Beding-Village-scaled.jpg"
          alt="Mt. Everest Summiters Club members banner"
          fill
          priority
          unoptimized
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#000]/70 via-[#000]/45 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 mx-auto w-full container px-5 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-sky-300">
              Our Committee
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              Meet the People Behind Our Mission
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Our committee is built on leadership, service, and commitment.
              Each member plays an important role in strengthening the club,
              supporting the community, and carrying forward the shared vision
              of progress and unity.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#leadership"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-50"
              >
                View Leadership
              </a>
              <a
                href="#committee"
                className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Explore Members
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Stats / mini section */}
      <section className="relative z-20 -mt-14">
        <div className="mx-auto container px-5 sm:px-6 lg:px-8">
          <div className="grid gap-4 rounded-[30px] border border-white/50 bg-white/80 p-5 shadow-[0_20px_70px_rgba(2,6,23,0.08)] backdrop-blur-xl sm:grid-cols-3 sm:p-7">
            <div className="rounded-2xl bg-slate-50/80 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                Total Members
              </p>
              <h3 className="mt-2 text-3xl font-bold text-slate-900">
                {members.length}
              </h3>
            </div>
            <div className="rounded-2xl bg-slate-50/80 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                Executive Board
              </p>
              <h3 className="mt-2 text-3xl font-bold text-slate-900">
                {executiveMembers.length}
              </h3>
            </div>
            <div className="rounded-2xl bg-slate-50/80 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                General Members
              </p>
              <h3 className="mt-2 text-3xl font-bold text-slate-900">
                {generalMembers.length}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto container">
          <SectionHeading
            eyebrow="Leadership"
            title="Executive Board"
            description="The executive board leads with responsibility, vision, and dedication. Together, they guide the organization’s activities, administration, and long-term direction."
          />

          <div className="mt-14">
            <FeaturedLeader member={executiveMembers[0]} />
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {executiveMembers.slice(1).map((member, i) => (
              <MemberCard key={member.name} member={member} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Committee */}
      <section
        id="committee"
        className="border-t border-slate-200/70 bg-white/60 px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto container">
          <SectionHeading
            eyebrow="Committee Members"
            title="Dedicated Members"
            description="Our members are the strength of the organization. Their support, participation, and commitment help transform ideas into action and vision into progress."
            center
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {generalMembers.map((member, i) => (
              <MemberCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0369a1] to-[#312e81]" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_top_right,white,transparent_30%),radial-gradient(circle_at_bottom_left,white,transparent_25%)]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200">
              Join Our Journey
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Together, we can build a stronger and more connected community.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              The strength of any organization lies in its people. We continue
              to move forward through shared purpose, collective responsibility,
              and a commitment to meaningful change.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-sky-50"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
