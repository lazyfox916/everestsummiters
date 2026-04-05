export default function SectionLabel({ children, className = "" }) {
  return (
    <p
      className={`mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#cc0033] ${className}`}
    >
      {children}
    </p>
  );
}
