import type { ComponentType, SVGProps } from "react";
import { HOW_IT_WORKS } from "../copy";
import { AnimatedItem, AnimatedSection } from "./AnimatedSection";
import { SectionBadge } from "./SectionBadge";
import {
  CreateIllustration,
  ReceiveIllustration,
  RenewIllustration,
  SpendIllustration,
} from "./StepIllustrations";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const ILLUSTRATIONS: readonly IconComponent[] = [
  CreateIllustration,
  ReceiveIllustration,
  SpendIllustration,
  RenewIllustration,
] as const;

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative scroll-mt-20 border-b border-border-default bg-surface-muted"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionBadge index="03" label="How it works" />

        <div className="mt-10 grid max-w-5xl gap-10 md:grid-cols-[1fr_1.4fr] md:items-end">
          <h2
            id="how-it-works-heading"
            className="font-editorial font-light leading-[0.95] tracking-tight text-text"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            {HOW_IT_WORKS.heading}
          </h2>
          <p className="text-lg leading-relaxed text-text-muted md:text-xl">
            {HOW_IT_WORKS.lead}
          </p>
        </div>

        <AnimatedSection
          as="ol"
          className="relative mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12"
        >
          <DesktopConnector />

          {HOW_IT_WORKS.steps.map((step, i) => {
            const Illustration = ILLUSTRATIONS[i];
            const number = String(i + 1).padStart(2, "0");
            return (
              <AnimatedItem
                as="li"
                key={step.title}
                className="relative flex gap-5 lg:flex-col lg:gap-6"
              >
                <div className="flex flex-col items-center lg:items-start">
                  <span
                    className="font-editorial font-light leading-none text-brand-text"
                    style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)" }}
                  >
                    {number}
                  </span>
                  <MobileConnectorRail
                    last={i === HOW_IT_WORKS.steps.length - 1}
                  />
                </div>
                <div className="flex-1 lg:flex-none">
                  {Illustration && (
                    <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-border-default bg-surface text-text">
                      <Illustration className="h-9 w-9" />
                    </div>
                  )}
                  <h3 className="font-editorial text-2xl font-medium tracking-tight text-text">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedItem>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}

function DesktopConnector() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-12 top-10 hidden h-px lg:block"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, var(--border-strong) 0 6px, transparent 6px 14px)",
      }}
    />
  );
}

function MobileConnectorRail({ last }: { last: boolean }) {
  if (last) return null;
  return (
    <div
      aria-hidden="true"
      className="mt-2 w-px flex-1 bg-border-default lg:hidden"
      style={{ minHeight: "2rem" }}
    />
  );
}
