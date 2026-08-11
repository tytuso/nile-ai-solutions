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
          d="M28 70V30L72 70V30"
          stroke="white"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="77" cy="21" r="5" fill="#D9FFF8" />
      </svg>
    </span>
  );
}
