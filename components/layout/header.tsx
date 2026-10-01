"use client";

import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { BrandMark } from "@/components/ui/brand-mark";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { whatsappUrl } from "@/lib/site";

const navigation = [
  { name: "Home", href: "/#home" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container flex h-[74px] items-center justify-between">
        <Link href="/#home" className="brand-lockup" onClick={() => setMenuOpen(false)} aria-label="Nile AI Solutions home">
          <BrandMark className="h-10 w-10" />
          <span>
            <strong>Nile AI</strong>
            <small>Solutions</small>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = item.href === "/#home"
              ? pathname === "/"
              : pathname === item.href || (item.href === "/services" && pathname.startsWith("/services"));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link ${active ? "is-active" : ""}`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button primary-button-small"
          >
            <MessageCircle size={16} />
            WhatsApp us
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="icon-button"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-panel lg:hidden">
          <nav className="container flex flex-col py-4" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="mobile-nav-link"
              >
                {item.name}
              </Link>
            ))}
            <a
              href={whatsappUrl("Hello Nile AI Solutions. I would like to start a conversation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button mt-3 w-full"
            >
              <MessageCircle size={18} />
              WhatsApp us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
