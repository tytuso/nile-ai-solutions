"use client";

import Link from "next/link";
import { ExternalLink, Menu, MessageCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/ui/theme-toggle";

type NavItem = {
  name: string;
  href: string;
  path?: string;
  external?: boolean;
};

const navigation: NavItem[] = [
  {
    name: "Home",
    href: "/#home",
    path: "/",
  },
  {
    name: "Services",
    href: "/services",
    path: "/services",
  },
  {
    name: "AI Software Systems",
    href: "/services/ai-software-systems",
    path: "/services/ai-software-systems",
  },
  {
    name: "NileFlow",
    href: "https://nileflow.nileai.solutions/",
    external: true,
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    path: "/portfolio",
  },
  {
    name: "About",
    href: "/#about",
    path: "/#about",
  },
  {
    name: "Why Nile Ai",
    href: "/#why-nile",
    path: "/#why-nile",
  },
  {
    name: "Contact",
    href: "/#contact",
    path: "/#contact",
  },
];

export function Header() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash);
    };

    updateHash();

    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function isActive(item: NavItem) {
    if (item.external || !item.path) {
      return false;
    }

    if (item.path.startsWith("/#")) {
      const itemHash = item.path.replace("/", "");

      return pathname === "/" && activeHash === itemHash;
    }

    if (item.path === "/") {
      return pathname === "/" && !activeHash;
    }

    if (item.path === "/services") {
      return pathname === "/services";
    }

    return pathname === item.path;
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-[var(--border)] transition-all duration-300 ${
        scrolled
          ? "bg-[var(--surface-glass)] shadow-sm backdrop-blur-xl"
          : "bg-[var(--surface-glass)] backdrop-blur-lg"
      }`}
    >
      <div className="container flex h-[76px] items-center justify-between lg:h-20">
        <Link
          href="/#home"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] shadow-lg sm:h-11 sm:w-11">
            <span className="text-lg font-black text-white sm:text-xl">
              N
            </span>

            <span className="absolute -bottom-2 -left-2 h-6 w-14 rotate-[-18deg] rounded-full border-2 border-white/70" />
          </div>

          <div className="leading-none">
            <p className="text-base font-bold tracking-[-0.03em] sm:text-lg">
              Nile Ai
            </p>

            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-[var(--muted)] sm:text-[10px]">
              Solutions
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {navigation.map((item) => {
            if (item.external) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-1.5 whitespace-nowrap py-2 text-[13px] font-semibold text-[var(--primary)] transition hover:text-[var(--secondary)]"
                >
                  {item.name}

                  <ExternalLink size={13} />

                  <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
                </a>
              );
            }

            const active = isActive(item);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative whitespace-nowrap py-2 text-[13px] font-medium transition ${
                  active
                    ? "text-[var(--foreground)]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {item.name}

                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] transition-all duration-300 ${
                    active
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <ThemeToggle />

          <a
            href="https://wa.me/256753523529?text=Hello%20Nile%20Ai%20Solutions.%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Talk to Nile Ai Solutions on WhatsApp"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-5 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <MessageCircle size={18} />

            Let&apos;s Talk
          </a>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => {
              setMenuOpen((current) => !current);
            }}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] shadow-sm"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-x-0 top-[76px] h-[calc(100dvh-76px)] overflow-y-auto border-t border-[var(--border)] bg-[var(--surface)] lg:top-20 lg:h-[calc(100dvh-80px)] xl:hidden">
          <nav className="container flex flex-col py-5">
            {navigation.map((item) => {
              if (item.external) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between border-b border-[var(--border)] py-4 text-base font-semibold text-[var(--primary)]"
                  >
                    <span>{item.name}</span>

                    <ExternalLink size={18} />
                  </a>
                );
              }

              const active = isActive(item);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between border-b border-[var(--border)] py-4 text-base font-semibold last:border-b-0 ${
                    active
                      ? "text-[var(--primary)]"
                      : "text-[var(--foreground)]"
                  }`}
                >
                  {item.name}

                  {active && (
                    <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                  )}
                </Link>
              );
            })}

            <a
              href="https://wa.me/256753523529?text=Hello%20Nile%20Ai%20Solutions.%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-5 py-4 font-semibold text-white"
            >
              <MessageCircle size={19} />

              Talk to Us on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}