"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

import { FloatingBubbles } from "@/components/home/floating-bubbles";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const initialState = shouldReduceMotion
    ? {
        opacity: 1,
        y: 0,
      }
    : {
        opacity: 0,
        y: 24,
      };

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-76px)] scroll-mt-20 items-center overflow-hidden pb-20 pt-16 sm:pt-20 lg:min-h-[calc(100svh-80px)] lg:py-24"
    >
      <FloatingBubbles />

      <div className="pointer-events-none absolute left-[-120px] top-[180px] h-[360px] w-[360px] rounded-full bg-[var(--primary)] opacity-10 blur-[110px]" />

      <div className="pointer-events-none absolute right-[-100px] top-[100px] h-[420px] w-[420px] rounded-full bg-[var(--secondary)] opacity-10 blur-[120px]" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <motion.p
            initial={initialState}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: shouldReduceMotion ? 0 : 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--primary)] sm:mb-6 sm:text-sm sm:tracking-[0.3em]"
          >
            Nile AI Solutions
          </motion.p>

          <motion.h1
            initial={initialState}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: shouldReduceMotion ? 0 : 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[2.65rem] font-bold leading-[1.04] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
          >
            We Build{" "}
            <span className="gradient-text">
              Intelligent Systems
            </span>

            <br className="hidden md:block" /> for Africa&apos;s
            Future.
          </motion.h1>

          <motion.p
            initial={initialState}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              delay: shouldReduceMotion ? 0 : 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[var(--muted)] sm:text-base md:text-lg md:leading-8"
          >
            AI-powered software, automation and digital solutions
            built in Africa for organisations that want to operate
            smarter, grow faster and create greater impact.
          </motion.p>

          <motion.div
            initial={initialState}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              delay: shouldReduceMotion ? 0 : 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-9 flex max-w-md flex-col justify-center gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:gap-4"
          >
            <motion.a
              href="https://wa.me/256753523529?text=Hello%20Nile%20AI%20Solutions.%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -4,
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 0.98,
                    }
              }
              className="flex min-h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-6 py-4 text-sm font-semibold text-white shadow-lg sm:px-7 sm:text-base"
            >
              <MessageCircle size={19} />

              Talk to Us on WhatsApp
            </motion.a>

            <motion.a
              href="#nileflow"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -4,
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 0.98,
                    }
              }
              className="flex min-h-14 items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-4 text-sm font-semibold shadow-sm sm:px-7 sm:text-base"
            >
              Discover NileFlow

              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 h-px w-[85%] max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
    </section>
  );
}