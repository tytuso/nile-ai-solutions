type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "h-11 w-11" }: BrandMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[30%] bg-gradient-to-br from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] shadow-lg ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M51 20C35 32 65 43 49 53C34 63 52 68 52 80"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M49 46C38 44 32 34 24 29M51 57C63 54 69 64 77 70"
          stroke="white"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <circle cx="24" cy="29" r="5" fill="#D9FFF8" />
        <circle cx="77" cy="70" r="5" fill="#D9FFF8" />
        <circle cx="52" cy="80" r="4" fill="#D9FFF8" />
      </svg>
    </span>
  );
}
