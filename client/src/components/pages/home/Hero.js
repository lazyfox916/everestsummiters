import PrimaryButton from "@/components/ui/PrimaryButton";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-screen max-h-[1100px] items-center overflow-hidden">
      <Image
        src="https://everestsummitersclub.org.np/wp-content/uploads/2020/07/Beding-Village-scaled.jpg"
        alt="Rolwaling"
        fill
        className="object-cover"
        unoptimized
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#000]/70 via-[#000]/45 to-transparent" />

      <div className="relative mx-auto w-full container px-5 pb-24 pt-36 sm:pt-40 lg:px-8 lg:pt-44">
        <div className="max-w-4xl">
          <h1 className="font-[Josefin_Sans] text-[3.4rem] leading-none text-white sm:text-[4.6rem] lg:text-[6.25rem]">
            Welcome to Mount Everest Summiters Club, Rolwaling
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            Mt. Everest Summiters club, Rolwaing is a social welfare
            organization of mountain climbers and the locals of Rolwaling valley
            established and registered on August 29 2001 AD. under company
            registration act 2034 B.S.
          </p>
          <div className="mt-10">
            <PrimaryButton href="/about-us">Learn more</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
