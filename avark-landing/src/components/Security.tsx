import { BRAND } from "../brand";
import { SECURITY } from "../copy";
import { AnimatedItem, AnimatedSection } from "./AnimatedSection";
import { SectionBadge } from "./SectionBadge";
import { ArrowRightIcon, CheckIcon } from "./icons";

export function Security() {
  return (
    <section
      id="security"
      aria-labelledby="security-heading"
      className="relative scroll-mt-20 overflow-hidden border-b border-border-default"
    >
      <VerticalRules />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionBadge index="04" label={SECURITY.eyebrow} />

        <div className="mt-10 grid gap-16 lg:grid-cols-[5fr_7fr] lg:gap-24">
          <div>
            <h2
              id="security-heading"
              className="font-editorial font-light leading-[0.95] tracking-tight text-text"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              {SECURITY.heading}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              {SECURITY.lead}
            </p>
            <a
              href={BRAND.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-brand-text transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-sm"
            >
              <span className="h-px w-8 bg-current opacity-60" />
              {SECURITY.cta}
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>

          <AnimatedSection as="ul" className="space-y-4">
            {SECURITY.pillars.map((pillar) => (
              <AnimatedItem
                as="li"
                key={pillar.title}
                className="flex gap-4 rounded-xl border border-border-default bg-surface/80 p-6 backdrop-blur transition-colors hover:border-brand-500/30"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-accent-500/15 text-accent-600 dark:text-accent-400">
                  <CheckIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-editorial text-xl font-medium tracking-tight text-text">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-text-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/** Faint vertical column rules — newspaper-spread feel in the background. */
function VerticalRules() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, transparent 0 calc(100%/12 - 1px), var(--border) calc(100%/12 - 1px) calc(100%/12))",
        opacity: 0.35,
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    />
  );
}
