import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Mark, Wordmark } from "../assets/brand";
import { BRAND } from "../brand";
import { useCtaMotion } from "../motion";
import { SECTIONS } from "../sections";
import { ThemeToggle } from "../theme";
import { CloseIcon, GithubIcon, MenuIcon } from "./icons";

export function Nav() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on viewport resize into desktop range.
  useEffect(() => {
    if (!open) return;
    const mql = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border-default bg-surface/80 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4"
      >
        <a
          href="#top"
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md"
          aria-label={`${BRAND.name} — home`}
        >
          <Mark className="h-7 w-7" />
          <Wordmark size="text-xl" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-sm text-text-muted hover:text-text transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-sm"
            >
              {section.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle />
          <CtaButton className="hidden md:inline-flex" />
          <button
            type="button"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border-default text-text-muted hover:bg-surface-raised-hover hover:text-text transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-border-default bg-surface"
        >
          <ul className="flex flex-col px-6 py-4 gap-1">
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block rounded-md px-3 py-3 text-base text-text-muted hover:bg-surface-raised-hover hover:text-text transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                  onClick={() => setOpen(false)}
                >
                  {section.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <CtaButton
                className="w-full justify-center"
                onClick={() => setOpen(false)}
              />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function CtaButton({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  const ctaMotion = useCtaMotion();
  return (
    <motion.a
      href={BRAND.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      {...ctaMotion}
      className={`inline-flex items-center gap-2 rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${className}`}
    >
      <GithubIcon className="h-4 w-4" />
      View on GitHub
    </motion.a>
  );
}
