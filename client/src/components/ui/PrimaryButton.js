import Link from "next/link";

export default function PrimaryButton({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center bg-accent px-10 py-5 text-xs font-medium uppercase tracking-[0.3em] text-white transition hover:bg-accent/80 ${className}`}
    >
      {children}
    </Link>
  );
}
