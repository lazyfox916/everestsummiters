"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function SectionTag({ children }) {
  return (
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">
      {children}
    </p>
  );
}

function InfoCard({ title, children }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <div className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
        {children}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative flex min-h-[62vh] items-center overflow-hidden">
        <Image
          src="https://everestsummitersclub.org.np/wp-content/uploads/2020/07/Beding-Village-scaled.jpg"
          alt="Mt. Everest Summiters Club Contact"
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 mx-auto w-full container px-5 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-sky-300">
              Contact Us
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              Get in Touch With Us
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              We welcome inquiries, collaboration, and communication from
              community members, supporters, and visitors. Reach out to Mt.
              Everest Summiters Club, Rolwaling through our offices or send us a
              message directly using the contact form below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="relative bg-[linear-gradient(to_bottom,#f8fbff_0%,#ffffff_100%)] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-sky-100/50 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-100/50 blur-3xl" />
        </div>

        <div className="relative mx-auto grid container gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <div>
              <SectionTag>Contact Information</SectionTag>
              <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                Let’s connect with our community
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                You can visit our head office in Rolwaling, contact our office
                in Kathmandu, or send us your message online. We will do our
                best to respond as soon as possible.
              </p>
            </div>

            <InfoCard title="Organization">
              <p className="font-medium text-slate-800">
                Mt. Everest Summmiters Club, Rolwaling, Dolakha
              </p>
            </InfoCard>

            <InfoCard title="Head Office">
              <p>Beding, Gaurishankar 09, Dolakha, Nepal</p>
            </InfoCard>

            <InfoCard title="Contact Office">
              <p>Saraswatinagar Rd, Bouddha 06, Kathmandu, Nepal</p>
            </InfoCard>

            <div className="grid gap-6 sm:grid-cols-2">
              <InfoCard title="Email">
                <a
                  href="mailto:info@everestsummitersclub.org.np"
                  className="font-medium text-sky-700 transition hover:text-sky-800"
                >
                  info@everestsummitersclub.org.np
                </a>
              </InfoCard>

              <InfoCard title="Phone">
                <a
                  href="tel:+97714810072"
                  className="font-medium text-sky-700 transition hover:text-sky-800"
                >
                  +977-1-4810072
                </a>
              </InfoCard>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(2,6,23,0.08)] sm:p-10"
          >
            <div className="mb-8">
              <SectionTag>Send a Message</SectionTag>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Contact Form
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Fill out the form below and send us your message.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter subject"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
