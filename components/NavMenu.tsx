"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import ThemeToggle from "./ThemeToggle";
import LocaleSwitcher from "./LocaleSwitcher";

type NavLink = { href: string; label: string };

// Under 1024px: a menu button that opens a full-screen sheet under the header.
export default function NavMenu({
  links,
  contact,
  labels,
}: {
  links: NavLink[];
  contact: NavLink;
  labels: { menu: string; close: string; theme: string };
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label={open ? labels.close : labels.menu}
        className="btn btn--secondary w-11 px-0"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden
          className="h-5 w-5"
        >
          {open ? (
            <path d="M6 6l12 12M18 6 6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open && (
        <div
          id="site-menu"
          className="fixed inset-x-0 bottom-0 top-[var(--nav)] z-10 overflow-y-auto border-t border-border bg-background"
        >
          <div className="wrap py-6">
            <ul className="rows">
              {[...links, contact].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={close}
                    className="flex h-14 items-center text-lg text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2">
              <LocaleSwitcher />
              <ThemeToggle label={labels.theme} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
