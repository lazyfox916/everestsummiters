"use client";

import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/data/HomeData";
import PrimaryButton from "../ui/PrimaryButton";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsScrolled(window.scrollY > 8);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const headerClassName = `fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
    isScrolled ? "bg-transparent backdrop-blur-2xl" : "bg-transparent"
  }`;

  const navLinkClassName = `flex items-center gap-1 text-sm transition ${
    isScrolled ? "text-ink hover:text-brand" : "text-white/80 hover:text-white"
  }`;

  return (
    <header className={headerClassName}>
      <div className="mx-auto flex container items-center justify-between px-5 py-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="https://everestsummitersclub.org.np/wp-content/uploads/2020/12/cropped-logo-400x55.png"
            alt="Mt. Everest Summiters Club"
            width={400}
            height={55}
            className="h-auto w-[220px] sm:w-[280px] lg:w-[320px]"
            unoptimized
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {menuItems.map((item) => (
            <div key={item.label} className="group relative">
              <Link href={item.href} className={navLinkClassName}>
                {item.label}
              </Link>

              {item.children ? (
                <div className="invisible absolute left-0 top-full mt-3 min-w-[230px] translate-y-2 bg-transparent backdrop-blur-2xl opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block border-b border-black/10 px-5 py-3 text-sm text-accent transition hover:bg-black/5 hover:text-brand"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}

          <PrimaryButton href="/projects/donations">donate</PrimaryButton>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center bg-accent p-3 text-white lg:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
