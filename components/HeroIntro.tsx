"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SocialIcons from "./SocialIcons";

type Props = {
  greeting: string;
  name: string;
  tagline: string;
  bio: string;
  availability: string;
  availabilityDetail: string;
};

export default function HeroIntro({
  greeting,
  name,
  tagline,
  bio,
  availability,
  availabilityDetail,
}: Props) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out", duration: 0.9 },
        });

        tl.from(".hero-photo", {
          scale: 0.92,
          opacity: 0,
          duration: 1.1,
        })
          .from(
            ".hero-status",
            { y: 12, opacity: 0, duration: 0.5 },
            "-=0.8"
          )
          .from(
            ".hero-greeting",
            { y: 20, opacity: 0, duration: 0.6 },
            "-=0.3"
          )
          .from(
            ".hero-name",
            { y: 26, opacity: 0, duration: 0.8 },
            "-=0.4"
          )
          .from(
            ".hero-tagline",
            { y: 18, opacity: 0, duration: 0.6 },
            "-=0.5"
          )
          .from(
            ".hero-bio",
            { y: 18, opacity: 0, duration: 0.6 },
            "-=0.4"
          )
          .from(
            ".hero-socials > *",
            { y: 14, opacity: 0, duration: 0.5, stagger: 0.07 },
            "-=0.3"
          );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            ".hero-photo",
            ".hero-status",
            ".hero-greeting",
            ".hero-name",
            ".hero-tagline",
            ".hero-bio",
            ".hero-socials > *",
          ],
          { opacity: 1, y: 0, scale: 1 }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative mx-auto max-w-6xl px-6 py-20 md:py-24 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-32 h-[320px] w-[320px] rounded-full bg-brand/5 blur-3xl"
      />

      <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_auto]">
        <div className="max-w-2xl">
          <a
            href="mailto:cuongnm003@gmail.com"
            className="hero-status group inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1.5 text-xs md:text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:border-emerald-500/60 hover:bg-emerald-500/10 transition-colors"
            aria-label={`${availability} — ${availabilityDetail}`}
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>{availability}</span>
            <span className="text-emerald-700/60 dark:text-emerald-400/60">
              · {availabilityDetail}
            </span>
          </a>
          <p className="hero-greeting mt-5 text-base md:text-lg text-muted">
            {greeting}
          </p>
          <h1 className="hero-name mt-2 text-4xl font-bold tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-foreground to-brand bg-clip-text text-transparent">
              {name}
            </span>
          </h1>
          <p className="hero-tagline mt-4 text-lg md:text-xl text-foreground/80">
            {tagline}
          </p>
          <p className="hero-bio mt-6 text-base md:text-lg leading-relaxed text-muted">
            {bio}
          </p>
          <div className="hero-socials mt-8">
            <SocialIcons />
          </div>
        </div>

        <div className="justify-self-center md:justify-self-end">
          <div className="hero-photo h-56 w-56 md:h-72 md:w-72 rounded-full border border-border/60 overflow-hidden shadow-2xl shadow-brand/10">
            <Image
              src="/me.jpg"
              alt={name}
              width={288}
              height={288}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
