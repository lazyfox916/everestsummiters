import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionLabel from "@/components/ui/SectionLabel";

export default function About() {
  return (
    <section className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-28">
      <div className="max-w-4xl">
        <SectionLabel>About us</SectionLabel>
        <h2 className="font-[Josefin_Sans] text-[2.4rem] leading-none text-[#1e73be] sm:text-[3.5rem] lg:text-[4.4rem]">
          Introduction of Rolwaling Valley
        </h2>

        <div className="mt-8 space-y-5 text-base leading-7 text-[#1e73be]/85">
          <p>
            Rolwaling is a remote mountain valley situated in the north east of
            Kathmandu, and to the west of Khumbu region. The valley is situated
            at an altitude of 4000m above sea level and bordered to Tibet to the
            north.
          </p>
          <p>
            For the local people and in Tibetan Buddhism the valley of Rolwaling
            holds special religious and spiritual significance. In Tibetan
            language ‘Rolwa’ means ‘furrow’ and ‘ling’ means ‘place’. It is
            mentioned in the tex Pema Kathang by Padmasambhava (also known as
            Guru Urgen Rinpoche) that Rolwaling is a beyul, a sacred hidden
            valley, carved out with one stroke of his plow.
          </p>
        </div>

        <div className="mt-10">
          <PrimaryButton href="/about-us">Read more</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
