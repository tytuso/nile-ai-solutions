import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

import { BrandMark } from "@/components/ui/brand-mark";
import { site, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_0.8fr]">
          <div>
            <Link href="/#home" className="brand-lockup">
              <BrandMark className="h-11 w-11" />
              <span>
                <strong>Nile AI</strong>
                <small>Solutions</small>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--muted)]">
              Intelligent software, automation and digital solutions designed to help
              African organisations operate smarter and grow with confidence.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="secondary-button !min-h-11 !rounded-[12px] !px-4 !text-xs">
                <MessageCircle size={15} />
                WhatsApp
              </a>
              <a href={`mailto:${site.email}`} className="secondary-button !min-h-11 !rounded-[12px] !px-4 !text-xs">
                <Mail size={15} />
                Email
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow">Explore</p>
            <nav className="mt-5 grid gap-3 text-sm text-[var(--muted)]">
              <Link href="/services" className="transition hover:text-[var(--foreground)]">Services</Link>
              <Link href="/portfolio" className="transition hover:text-[var(--foreground)]">Products</Link>
              <Link href="/about" className="transition hover:text-[var(--foreground)]">About</Link>
              <Link href="/contact" className="transition hover:text-[var(--foreground)]">Contact</Link>
            </nav>
          </div>

          <div>
            <p className="eyebrow">Focus</p>
            <div className="mt-5 space-y-3 text-sm text-[var(--muted)]">
              <p>AI systems</p>
              <p>Web applications</p>
              <p>Automation</p>
              <p>Digital transformation</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-[var(--foreground)]">Privacy</Link>
            <Link href="/terms" className="hover:text-[var(--foreground)]">Terms</Link>
            <Link href="/responsible-ai" className="hover:text-[var(--foreground)]">Responsible AI</Link>
            <Link href="/#home" className="inline-flex items-center gap-1 hover:text-[var(--foreground)]">
              Back to top <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
