import Image from "next/image";
import Link from "next/link";

import { whatWeDo } from "@/data/HomeData";
import PrimaryButton from "../ui/PrimaryButton";
import SectionLabel from "../ui/SectionLabel";

export default function Footer() {
  return (
    <footer>
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

      <section className="bg-[#00305f] text-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 lg:px-8 lg:py-20">
          <div className="mb-12">
            <Image
              src="https://everestsummitersclub.org.np/wp-content/uploads/2020/12/cropped-logo-300x41.png"
              alt="Mt. Everest Summiters Club"
              width={300}
              height={41}
              className="h-auto w-[220px]"
              unoptimized
            />
          </div>

          <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <h5 className="font-[Josefin_Sans] text-4xl text-white">
                Mission and Goal
              </h5>
              <p className="mt-5 text-base leading-7 text-white/80">
                We aim to bring education, health, electricity, and
                communication facilities; preserving the culture and tradition
                of Rolwaling; and economic development through the promotion of
                tourism.
              </p>

              <h5 className="mt-8 font-[Josefin_Sans] text-3xl text-white">
                Get in touch
              </h5>
              <div className="mt-4 flex items-center gap-4">
                <Link
                  href="https://www.facebook.com/everestsummitersclub"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white hover:text-[#00305f]"
                >
                  f
                </Link>
              </div>
            </div>

            <div>
              <h5 className="font-[Josefin_Sans] text-4xl text-white">
                What We Do
              </h5>
              <ul className="mt-5 space-y-4 text-base leading-7 text-white/80">
                {whatWeDo.map((item) => (
                  <li key={item} className="border-b border-white/10 pb-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-[Josefin_Sans] text-4xl text-white">
                Subscribe
              </h5>
              <form className="mt-5 space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full border border-white/15 bg-white/10 px-5 py-4 text-white placeholder:text-white/55 outline-none transition focus:border-white/40"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-[#0a83ce] px-10 py-5 text-xs font-medium uppercase tracking-[0.3em] text-white transition hover:bg-[#0a83ce]/80"
                >
                  Submit
                </button>
              </form>
              <p className="mt-8 text-base leading-7 text-white/80">
                The club was formed under the common consent and effort of the
                mountain workers of Rolwaling, to work together for the social,
                economic, and cultural development of the Rolwaling community.
              </p>
              <p className="mt-5 text-sm text-white/70">
                Email: info@everestsummitersclub.org.np / Phone: +977-1-4810072
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
