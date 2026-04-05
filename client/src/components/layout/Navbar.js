"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { menuItems } from "@/data/HomeData";
import PrimaryButton from "../ui/PrimaryButton";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState(() => new Set());
  const pathname = usePathname();

  useEffect(() => {
    const update = () => {
      setIsScrolled(window.scrollY > 8);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenGroups(new Set());
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const headerClassName = `fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
    isScrolled ? "bg-transparent backdrop-blur-2xl" : "bg-transparent"
  }`;

  const navLinkClassName = `flex items-center gap-1 text-sm transition ${
    isScrolled ? "text-ink hover:text-brand" : "text-white/80 hover:text-white"
  }`;

  const toggleGroup = (label) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  return (
    <header className={headerClassName}>
      <div className="mx-auto flex container items-center justify-between px-5 py-6 lg:px-8">
        <Link
          href="/"
          className="shrink-0"
          onClick={() => setIsMenuOpen(false)}
        >
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
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {isMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {isMenuOpen ? (
        <button
          type="button"
          className="absolute inset-x-0 top-full z-40 h-screen cursor-default bg-black/30 lg:hidden"
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
        />
      ) : null}

      <div
        id="mobile-menu"
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } absolute inset-x-0 top-full z-50 border-t border-black/10 bg-white/95 backdrop-blur-2xl`}
      >
        <nav className="container mx-auto max-h-[calc(100vh-6rem)] overflow-y-auto px-5 py-4">
          <div className="flex flex-col gap-1">
            {menuItems.map((item) => {
              const hasChildren =
                Array.isArray(item.children) && item.children.length > 0;
              const isOpen = openGroups.has(item.label);

              return (
                <div key={item.label} className="py-1">
                  <div className="flex items-center justify-between gap-3">
                    <Link
                      href={item.href}
                      className="flex-1 py-2 text-sm font-medium text-ink transition hover:text-brand"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>

                    {hasChildren ? (
                      <button
                        type="button"
                        className="shrink-0 px-2 py-2 text-sm text-ink/70 transition hover:text-ink"
                        aria-label={
                          isOpen
                            ? `Collapse ${item.label}`
                            : `Expand ${item.label}`
                        }
                        aria-expanded={isOpen}
                        onClick={() => toggleGroup(item.label)}
                      >
                        {isOpen ? "–" : "+"}
                      </button>
                    ) : null}
                  </div>

                  {hasChildren && isOpen ? (
                    <div className="mt-1 border-l border-black/10 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-2 text-sm text-ink/80 transition hover:text-brand"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}

            <div className="pt-3">
              <PrimaryButton
                href="/projects/donations"
                className="w-full justify-center"
              >
                donate
              </PrimaryButton>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
