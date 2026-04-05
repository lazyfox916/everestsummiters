import Image from "next/image";
import Link from "next/link";

import { featureCards } from "@/data/HomeData";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Objective() {
  return (
    <>
      <section className="bg-[#f7fbfe]">
        <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-28">
          <SectionLabel>Our impact</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h2 className="font-[Josefin_Sans] text-[2.2rem] leading-none text-[#1e73be] sm:text-[3.3rem] lg:text-[4.2rem]">
              Influencing the way people, organisations, and movements think and
              act.
            </h2>
            <div className="lg:pl-10">
              <PrimaryButton href="/about-us/objective">
                Our Objectives
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-8 md:grid-cols-3">
          {featureCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group block overflow-hidden"
            >
              <div className="relative h-[420px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002873]/80 via-[#002873]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="font-[Josefin_Sans] text-4xl text-white sm:text-5xl">
                    {card.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
