import { blogPosts } from "@/data/HomeData";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function CTA() {
  return (
    <section className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.title} className="border-t border-[#0a83ce] pt-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#cc0033]">
              {post.date}
            </p>
            <h3 className="mt-5 font-[Josefin_Sans] text-3xl leading-none text-[#1e73be] sm:text-4xl">
              {post.title}
            </h3>
            <p className="mt-5 text-base leading-7 text-[#1e73be]/85">
              {post.description}
            </p>
            <div className="mt-8">
              <PrimaryButton href={post.href}>Read more</PrimaryButton>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
