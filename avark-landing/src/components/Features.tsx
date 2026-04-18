import type { ComponentType, SVGProps } from "react";
import { FEATURES, type FeatureId } from "../copy";
import { AnimatedItem, AnimatedSection } from "./AnimatedSection";
import { SectionBadge } from "./SectionBadge";
import {
  BoltIcon,
  GatewayIcon,
  KeyIcon,
  LayersIcon,
  LockIcon,
  PhoneIcon,
} from "./FeatureIcons";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const FEATURE_ORDER: readonly {
  id: FeatureId;
  Icon: IconComponent;
  featured?: boolean;
}[] = [
  { id: "ark", Icon: LayersIcon, featured: true },
  { id: "lightning", Icon: BoltIcon },
  { id: "boarding", Icon: GatewayIcon },
  { id: "custody", Icon: KeyIcon },
  { id: "pin", Icon: LockIcon },
  { id: "mobile", Icon: PhoneIcon },
] as const;

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative scroll-mt-20 border-b border-border-default"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionBadge index="02" label={FEATURES.eyebrow} />

        <div className="mt-10 grid max-w-5xl gap-10 md:grid-cols-[1fr_1.4fr] md:items-end">
          <h2
            id="features-heading"
            className="font-editorial font-light leading-[0.95] tracking-tight text-text"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            {FEATURES.heading}
          </h2>
          <p className="text-lg leading-relaxed text-text-muted md:text-xl">
            {FEATURES.lead}
          </p>
        </div>

        <AnimatedSection
          as="ul"
          className="mt-16 grid gap-4 md:grid-cols-6 md:grid-rows-[auto_auto]"
        >
          {FEATURE_ORDER.map(({ id, Icon, featured }, i) => {
            const { title, description } = FEATURES.items[id];
            const number = String(i + 1).padStart(2, "0");
            const spanClass = featured
              ? "md:col-span-3 md:row-span-2"
              : "md:col-span-3 lg:col-span-2";

            return (
              <AnimatedItem
                as="li"
                key={id}
                className={`${spanClass} group relative overflow-hidden rounded-2xl border border-border-default bg-surface-raised p-8 transition-all duration-500 hover:border-brand-500/40 hover:bg-surface-raised-hover`}
              >
                {featured && <FeaturedGlow />}

                <div className="relative flex h-full flex-col justify-between gap-6">
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 transition-colors group-hover:bg-brand-500/20 ${
                        featured ? "h-14 w-14" : "h-12 w-12"
                      }`}
                    >
                      <Icon className={featured ? "h-7 w-7" : "h-6 w-6"} />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-text-faint">
                      № {number}
                    </span>
                  </div>

                  <div>
                    <h3
                      className={`font-editorial font-medium leading-tight tracking-tight text-text ${
                        featured
                          ? "text-3xl md:text-4xl lg:text-5xl"
                          : "text-2xl"
                      }`}
                    >
                      {title}
                    </h3>
                    <p
                      className={`mt-3 leading-relaxed text-text-muted ${
                        featured ? "text-base md:text-lg max-w-lg" : "text-sm"
                      }`}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              </AnimatedItem>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}

/** Soft brand glow that lives inside the featured card. */
function FeaturedGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-40 blur-3xl transition-opacity duration-700 group-hover:opacity-60"
      style={{
        background:
          "radial-gradient(circle, var(--color-brand-500) 0%, transparent 60%)",
      }}
    />
  );
}
