import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import { useRef } from "react";
import { Mark } from "../assets/brand";
import { BRAND, TAGLINE } from "../brand";
import { HERO } from "../copy";
import { LATEST_RELEASE } from "../generated/release";
import { useCtaMotion } from "../motion";
import { ArrowDownIcon, DownloadIcon, GithubIcon } from "./icons";

const TAGLINE_WORDS = TAGLINE.split(" ");

export function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-linked parallax: tracks from the moment the hero top hits the
  // viewport top until the hero bottom leaves the viewport top. We derive
  // four transforms — gentle y-lift + fade on text, stronger on the visual,
  // opposite drift on the ambient blobs. Gives the hero a sense of "weight"
  // as it leaves.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const visualY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.6, 0]);
  const blobsY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const wordContainer: Variants = reduceMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
      };

  const wordItem: Variants = reduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: "0.6em" },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-border-default"
    >
      <motion.div
        className="absolute inset-0 -z-10"
        style={reduceMotion ? undefined : { y: blobsY }}
      >
        <AmbientBackdrop />
      </motion.div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 pt-20 pb-24 md:pt-28 md:pb-32 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-20">
        <motion.div
          className="flex flex-col items-start gap-10"
          style={reduceMotion ? undefined : { y: textY, opacity: textOpacity }}
        >
          <Eyebrow />

          <motion.h1
            className="font-editorial font-light text-text"
            initial="hidden"
            animate="visible"
            variants={wordContainer}
            style={{
              fontSize: "clamp(3rem, 11vw, 9.5rem)",
              lineHeight: 0.92,
            }}
          >
            {TAGLINE_WORDS.map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="inline-block overflow-hidden align-top pr-[0.2em]"
              >
                <motion.span
                  variants={wordItem}
                  className="inline-block"
                  style={{
                    fontStyle: word === "waiting." ? "italic" : "normal",
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <p className="max-w-xl text-lg leading-relaxed text-text-muted md:text-xl">
            {HERO.subhead}
          </p>

          <div className="flex flex-col items-start gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <PrimaryCta />
              <SecondaryCta />
            </div>
            <ReleaseMeta />
          </div>

          <MetaRow />
        </motion.div>

        <motion.div
          style={
            reduceMotion ? undefined : { y: visualY, opacity: visualOpacity }
          }
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function Eyebrow() {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-text-muted">
      <span className="text-brand-text">§ 01</span>
      <span className="h-px w-10 bg-current opacity-40" />
      <span>The Ark-native Bitcoin wallet</span>
    </div>
  );
}

function MetaRow() {
  return (
    <dl className="mt-6 grid w-full max-w-md grid-cols-3 gap-6 border-t border-border-default pt-6 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
      <div>
        <dt className="text-text-faint">Protocol</dt>
        <dd className="mt-1 text-text">Ark + LN</dd>
      </div>
      <div>
        <dt className="text-text-faint">Custody</dt>
        <dd className="mt-1 text-text">Self</dd>
      </div>
      <div>
        <dt className="text-text-faint">License</dt>
        <dd className="mt-1 text-text">MIT</dd>
      </div>
    </dl>
  );
}

// When a GitHub release is published, the primary CTA becomes a download link
// to the release page (so users can pick the right asset for their platform).
// Without a release, we fall back to the generic "View on GitHub" call.
function PrimaryCta() {
  const ctaMotion = useCtaMotion();
  const release = LATEST_RELEASE;
  const href = release?.htmlUrl ?? BRAND.githubUrl;
  const label = release ? `${HERO.releaseCta} ${release.version}` : HERO.primaryCta;
  const Icon = release ? DownloadIcon : GithubIcon;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...ctaMotion}
      className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 font-mono text-sm uppercase tracking-[0.15em] text-white shadow-[0_8px_30px_rgb(247,147,26,0.35)] transition-colors hover:bg-brand-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
    >
      <Icon className="h-4 w-4" />
      {label}
    </motion.a>
  );
}

function SecondaryCta() {
  const ctaMotion = useCtaMotion();
  // When a release exists the primary CTA already points off-site to the
  // release page, so the secondary slot becomes the repo link. Otherwise
  // it's the on-page "Learn more" anchor.
  const release = LATEST_RELEASE;
  if (release) {
    return (
      <motion.a
        href={BRAND.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        {...ctaMotion}
        className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 font-mono text-sm uppercase tracking-[0.15em] text-text transition-colors hover:bg-surface-raised-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
      >
        <GithubIcon className="h-4 w-4" />
        {HERO.primaryCta}
      </motion.a>
    );
  }
  return (
    <motion.a
      href="#features"
      {...ctaMotion}
      className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 font-mono text-sm uppercase tracking-[0.15em] text-text transition-colors hover:bg-surface-raised-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
    >
      {HERO.secondaryCta}
      <ArrowDownIcon className="h-4 w-4" />
    </motion.a>
  );
}

function ReleaseMeta() {
  const release = LATEST_RELEASE;
  if (!release) return null;

  const date = new Date(release.publishedAt).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const assetCount = release.assets.length;
  const assetLabel = assetCount === 1 ? "1 asset" : `${assetCount} assets`;

  return (
    <a
      href={release.htmlUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted transition-colors hover:text-text"
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
      <span>{release.prerelease ? "Prerelease" : "Latest"}</span>
      <span className="opacity-40">·</span>
      <span>{date}</span>
      <span className="opacity-40">·</span>
      <span>{assetLabel}</span>
    </a>
  );
}

function AmbientBackdrop() {
  const reduceMotion = useReducedMotion();
  const driftA = reduceMotion
    ? undefined
    : { x: [0, 30, -20, 0], y: [0, -25, 20, 0] };
  const driftB = reduceMotion
    ? undefined
    : { x: [0, -30, 20, 0], y: [0, 25, -15, 0] };
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
    >
      <motion.div
        className="absolute -right-32 -top-32 h-[680px] w-[680px] rounded-full opacity-[0.55] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-brand-500) 0%, transparent 60%)",
        }}
        animate={driftA}
        transition={
          reduceMotion
            ? undefined
            : { duration: 22, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <motion.div
        className="absolute -left-40 top-48 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-400) 0%, transparent 60%)",
        }}
        animate={driftB}
        transition={
          reduceMotion
            ? undefined
            : { duration: 28, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 0%, var(--surface) 85%)",
        }}
      />
    </div>
  );
}

function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[520px]"
    >
      <motion.div
        className="absolute inset-[15%] rounded-full opacity-70 blur-2xl"
        style={{
          background:
            "conic-gradient(from 120deg at 50% 50%, var(--color-brand-500), var(--color-accent-400), var(--color-brand-500))",
        }}
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 40, repeat: Infinity, ease: "linear" }
        }
      />

      <div className="absolute inset-0 rounded-full border border-border-strong" />
      <div className="absolute inset-[8%] rounded-full border border-border-default" />

      <motion.div
        className="absolute inset-[18%] rounded-full border border-dashed border-border-strong/60"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 80, repeat: Infinity, ease: "linear" }
        }
      />

      <div className="absolute inset-[28%] rounded-full border border-border-default/30" />

      <motion.div
        className="absolute inset-[28%] flex items-center justify-center text-text"
        animate={reduceMotion ? undefined : { scale: [1, 1.03, 1] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <Mark
          className="h-full w-full"
          bodyFill="currentColor"
          accentFill="var(--color-brand-500)"
        />
      </motion.div>

      {/* Orbital tick marks — radial lines around the perimeter, editorial feel */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full text-border-strong"
        fill="none"
      >
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * 360;
          const major = i % 6 === 0;
          const len = major ? 4 : 2;
          const rad = ((angle - 90) * Math.PI) / 180;
          const x1 = 50 + 49 * Math.cos(rad);
          const y1 = 50 + 49 * Math.sin(rad);
          const x2 = 50 + (49 - len) * Math.cos(rad);
          const y2 = 50 + (49 - len) * Math.sin(rad);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth={major ? 0.6 : 0.3}
            />
          );
        })}
      </svg>

      <motion.div
        className="absolute inset-0"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 60, repeat: Infinity, ease: "linear" }
        }
      >
        <OrbitingDot angle={35} distance={48} color="brand-500" />
        <OrbitingDot angle={210} distance={44} color="accent-400" />
        <OrbitingDot angle={300} distance={46} color="brand-300" />
      </motion.div>
    </div>
  );
}

function OrbitingDot({
  angle,
  distance,
  color,
}: {
  angle: number;
  distance: number;
  color: "brand-500" | "brand-300" | "accent-400";
}) {
  const rad = (angle * Math.PI) / 180;
  const x = 50 + distance * Math.cos(rad);
  const y = 50 + distance * Math.sin(rad);
  return (
    <span
      aria-hidden="true"
      className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_12px_rgba(247,147,26,0.6)]"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        background: `var(--color-${color})`,
      }}
    />
  );
}
