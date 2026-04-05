"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const settlements = [
  {
    id: "beding",
    name: "Beding",
    altitude: "3600m",
    image:
      "https://everestsummitersclub.org.np/wp-content/uploads/2020/07/Beding-Village-scaled.jpg",
    description:
      "Beding is the main village of Rolwaling, located in a narrow mountain valley alongside a glacial river. It is the heart of local life and an important seasonal settlement where the community mainly stays during spring and autumn.",
    details: [
      "Approximately 2–3 hours walk from Na",
      "Main village of Rolwaling",
      "Active during spring and autumn",
      "Located beside a glacial river in a dramatic mountain setting",
    ],
  },
  {
    id: "na",
    name: "Na",
    altitude: "4200m",
    image:
      "https://everestsummitersclub.org.np/wp-content/uploads/2020/07/Na-village.jpg",
    description:
      "Na is the summer settlement of Rolwaling, situated on a gently sloped plateau deeper inside the valley. Surrounded by mountains on three sides, it becomes a warm and pleasant place during spring, summer, and autumn.",
    details: [
      "Summer settlement of the community",
      "Occupied for nearly six months of the year",
      "Surrounded by mountains on three sides",
      "Important seasonal area for crops and grazing",
    ],
  },
];

const trails = [
  "Rolwaling Valley Trek",
  "Rolwaling Tashi Lapcha Pass Trek",
  "Rolwaling Yalung Pass Trek",
  "Rolwaling Circuit Trek",
];

const highlights = [
  {
    title: "Sacred Hidden Valley",
    text: "Rolwaling is regarded as a beyul — a sacred hidden valley of spiritual refuge in Tibetan Buddhism.",
  },
  {
    title: "Living Sherpa Culture",
    text: "The valley remains deeply rooted in Sherpa traditions, Buddhist practice, community values, and seasonal life.",
  },
  {
    title: "Untouched Mountain Landscape",
    text: "Towering peaks, glacial rivers, alpine plateaus, monasteries, and trails create a uniquely powerful Himalayan setting.",
  },
];

function SectionTag({ children }) {
  return (
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">
      {children}
    </p>
  );
}

function InfoCard({ title, text, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.06 }}
      className="h-full rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(14,165,233,0.10)]"
    >
      <div className="mb-5 h-1.5 w-14 rounded-full bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600" />
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
        {text}
      </p>
    </motion.div>
  );
}

export default function RolwalingValleyPage() {
  const [activeSettlement, setActiveSettlement] = useState(settlements[0]);

  return (
    <main className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative flex min-h-[78vh] items-center overflow-hidden">
        <Image
          src="https://everestsummitersclub.org.np/wp-content/uploads/2020/07/Beding-Village-scaled.jpg"
          alt="Rolwaling Valley"
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000]/70 via-[#000]/45 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 mx-auto w-full container px-10 px-5 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-sky-300">
              Rolwaling Valley
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              A Sacred Himalayan Valley of Culture, Faith, and Untouched Beauty
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">
              Rolwaling is a remote mountain valley in northeastern Nepal,
              situated to the west of the Khumbu region and bordering Tibet to
              the north. Resting at around 4000 meters above sea level, it is
              known not only for its dramatic Himalayan landscape, but also for
              its deep cultural roots, spiritual significance, and enduring
              Sherpa way of life.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#culture"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-50"
              >
                Explore the Valley
              </a>
              <a
                href="#visit"
                className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Plan Your Visit
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative z-20 -mt-14 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto container px-10">
          <div className="grid gap-4 rounded-[30px] border border-white/50 bg-white/85 p-5 shadow-[0_20px_70px_rgba(2,6,23,0.08)] backdrop-blur-xl md:grid-cols-3 sm:p-7">
            {highlights.map((item, index) => (
              <div key={item.title} className="rounded-2xl bg-slate-50/90 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                  Highlight {index + 1}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section
        id="culture"
        className="bg-[linear-gradient(to_bottom,#f8fbff_0%,#ffffff_100%)] px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto grid container px-10 gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <SectionTag>Culture</SectionTag>
            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              A valley where daily life, faith, and heritage remain deeply
              connected
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Rolwaling holds a special place in the lives of local people and
              within Tibetan Buddhism. In Tibetan, “Rolwa” means “furrow” and
              “ling” means “place.” According to the text Pema Kathang,
              Padmasambhava, also known as Guru Urgen Rinpoche, created
              Rolwaling as a beyul — a sacred hidden valley — with a single
              stroke of his plow.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              The valley was later consecrated after Padmasambhava is believed
              to have meditated here with his consort and followers. As one of
              the sacred hidden valleys, Rolwaling is understood as a spiritual
              sanctuary — a place of refuge, preservation, and faith in times of
              uncertainty.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              This spiritual status continues to shape life in the valley.
              Buddhist traditions are preserved with unusual seriousness.
              Religious festivals are frequent and celebrated with both devotion
              and joy, combining tantric ritual, song, dance, and communal
              gathering late into the night.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-sky-100 blur-3xl" />
            <div className="absolute -bottom-8 -right-6 h-32 w-32 rounded-full bg-indigo-100 blur-3xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(2,6,23,0.08)]">
              <div className="relative h-[280px] sm:h-[360px]">
                <Image
                  src="https://everestsummitersclub.org.np/wp-content/uploads/2020/07/Na-village.jpg"
                  alt="Na settlement in Rolwaling"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900">
                  Spiritual values in everyday life
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  The teachings of non-violence are strongly respected in
                  Rolwaling. Hunting and animal slaughter are strictly
                  prohibited within the valley, reflecting a deeply rooted
                  commitment to compassion, discipline, and shared ethical life.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Religious Sites / Significance */}
      <section className="border-t border-slate-200 bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto container px-10">
          <div className="max-w-3xl">
            <SectionTag>Religious Significance</SectionTag>
            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              More than a destination, Rolwaling is a place of deep spiritual
              meaning
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Rolwaling’s religious importance shapes not only sacred sites but
              also the rhythm of the community itself. Prayer, ritual,
              celebration, and the preservation of Buddhist teaching continue to
              define the valley as a place of faith, continuity, and refuge.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <InfoCard
              index={0}
              title="Beyul Tradition"
              text="Rolwaling is regarded as one of the hidden sacred valleys created as places of protection and dharma sanctuary."
            />
            <InfoCard
              index={1}
              title="Festivals & Ritual Life"
              text="Religious festivals are celebrated with strong devotion and community participation, often with ritual, music, and dance."
            />
            <InfoCard
              index={2}
              title="Faith in Practice"
              text="The values of compassion and non-violence are not symbolic alone — they are actively followed in community rules and daily conduct."
            />
          </div>
        </div>
      </section>

      {/* Settlements */}
      <section className="bg-slate-50/70 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto container px-10">
          <div className="max-w-3xl">
            <SectionTag>Settlements in Rolwaling</SectionTag>
            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              A seasonal mountain life shaped by movement, altitude, and
              resilience
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Traditionally, the people of Rolwaling moved between three
              settlements during the year. Following the 2015 earthquakes, the
              smaller winter settlement was largely destroyed by landslide,
              leaving most life now centered around the two larger settlements:
              Beding and Na.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {settlements.map((settlement) => {
              const active = activeSettlement.id === settlement.id;
              return (
                <button
                  key={settlement.id}
                  onClick={() => setActiveSettlement(settlement)}
                  className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                    active
                      ? "bg-slate-900 text-white"
                      : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {settlement.name} ({settlement.altitude})
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSettlement.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
              className="mt-10 grid gap-10 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(2,6,23,0.07)] lg:grid-cols-[1.05fr_1fr]"
            >
              <div className="relative min-h-[320px]">
                <Image
                  src={activeSettlement.image}
                  alt={activeSettlement.name}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              <div className="p-8 sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">
                  {activeSettlement.name}
                </p>
                <h3 className="mt-3 text-3xl font-bold text-slate-900">
                  {activeSettlement.name}{" "}
                  <span className="text-slate-400">
                    ({activeSettlement.altitude})
                  </span>
                </h3>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  {activeSettlement.description}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {activeSettlement.details.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* How to get here */}
      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid container px-10 gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <SectionTag>How to Get Here</SectionTag>
            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              The journey to Rolwaling is demanding, scenic, and unforgettable
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Reaching Rolwaling usually begins with a long drive — around ten
              hours by bus or jeep from Kathmandu to Gongor — followed by a 2–4
              day walk through the Himalayan terrain of Dolakha district. The
              route is not only a way into the valley, but an experience in
              itself.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Along the trail, travelers cross rivers and waterfalls, climb
              rough stone staircases, pass croplands and meadows, walk through
              steep valleys lined with rhododendrons, and move beneath the gaze
              of towering mountains. The path gradually reveals the character of
              the landscape and the rhythm of life in the region.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Small tea houses are available along the route, offering simple
              food and accommodation. Traveling in this way also allows the
              local economy to benefit more directly from tourism and
              pilgrimage.
            </p>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">
              Journey Overview
            </p>

            <div className="mt-8 space-y-6">
              {[
                "Kathmandu to Gongor by bus or jeep",
                "2–4 days trekking into the valley",
                "Cross rivers, waterfalls, stone staircases, and forests",
                "Stay at basic tea houses along the route",
                "Support the local economy while traveling",
              ].map((item, i) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                    {i + 1}
                  </div>
                  <p className="pt-1 text-sm leading-7 text-slate-700 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tourism */}
      <section
        id="visit"
        className="relative overflow-hidden bg-[linear-gradient(to_bottom,#ffffff_0%,#f8fbff_100%)] px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-sky-100/50 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-100/50 blur-3xl" />
        </div>

        <div className="relative mx-auto container px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTag>Tourism</SectionTag>
              <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Why visit Rolwaling?
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                Rolwaling Valley is one of Nepal’s lesser-visited mountain
                regions. Opened to trekkers only in recent years, it remains
                relatively untouched, offering a rare experience of ancient
                villages, monasteries, Sherpa life, and powerful Himalayan
                scenery.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Visitors can expect a rugged but rewarding journey. Tea houses
                are available along the route, though facilities remain basic.
                Meals are simple and local, often including dal bhat, chapatis,
                and noodle soup. For those willing to embrace the raw mountain
                experience, Rolwaling offers something deeply memorable.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                From Simigaon to Kyalje, Beding, Na, and the famous Tso Rolpa
                glacial lake, the journey reveals rivers, forests, high
                plateaus, and sacred sites — all set against a backdrop of
                snow-capped peaks. Its combination of spirituality, remoteness,
                and natural beauty gives the valley a character unlike anywhere
                else.
              </p>
            </div>

            <div className="grid gap-6">
              <InfoCard
                index={0}
                title="Relatively Untouched"
                text="With far fewer visitors than other major trekking regions, Rolwaling still retains a strong sense of remoteness and authenticity."
              />
              <InfoCard
                index={1}
                title="Culture & Landscape Together"
                text="Ancient settlements, monasteries, glacial rivers, alpine plateaus, and high mountain views create a rare blend of cultural and natural experience."
              />
              <InfoCard
                index={2}
                title="A Trek with Meaning"
                text="Beyond scenery, visitors encounter living traditions, local resilience, and a sacred geography that shapes the valley’s identity."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trekking Trails */}
      <section className="border-t border-slate-200 bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto container px-10">
          <div className="max-w-3xl">
            <SectionTag>Trekking Trails in Rolwaling</SectionTag>
            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Explore the valley through some of its best-known routes
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Rolwaling offers several trekking options for those seeking both
              natural beauty and a more immersive Himalayan experience. These
              routes reflect the rugged character of the valley and its growing
              appeal to trekkers looking beyond the usual paths.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {trails.map((trail, index) => (
              <motion.div
                key={trail}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_40px_rgba(2,6,23,0.06)]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold leading-7 text-slate-900">
                  {trail}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
