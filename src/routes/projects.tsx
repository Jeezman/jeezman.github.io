import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useCallback, useState } from "react";
import clsx from "clsx";

export const Route = createFileRoute("/projects")({
  component: Projects,
});

const projects = [
  {
    name: "Btrust Builders",
    description:
      "Training the next generation of Bitcoin and Lightning developers across Africa through open-source mentorship.",
    href: "https://www.btrust.tech",
    role: "Core contributor",
    accent: "#f59e0b",
    accentDark: "#d97706",
  },
  {
    name: "Satsigner",
    description:
      "An open-source Bitcoin wallet focused on signing, coin control, and transparent on-chain analysis.",
    href: "https://satsigner.com",
    role: "Contributor",
    accent: "#ec4899",
    accentDark: "#db2777",
  },
  {
    name: "Avark",
    description: "",
    href: "https://github.com/Jeezman/avark",
    role: "Creator",
    accent: "#22c55e",
    accentDark: "#16a34a",
  },
  {
    name: "Rhema",
    description: "",
    href: "https://github.com/openbezal/rhema",
    role: "Contributor",
    accent: "#6366f1",
    accentDark: "#4f46e5",
  },
  {
    name: "Stratum Protocol",
    description: "",
    href: "https://github.com/stratum-mining/stratumprotocol.org",
    role: "Contributor",
    accent: "#ef4444",
    accentDark: "#dc2626",
  },
  {
    name: "Marmot Protocol",
    description: "",
    href: "https://github.com/marmot-protocol/whitenoise",
    role: "Contributor",
    accent: "#eab308",
    accentDark: "#ca8a04",
  },
];

const CARD_W = 300;
const CARD_GAP = 20;

function CoverFlow() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(Math.floor(projects.length / 2));
  const activeRef = useRef(Math.floor(projects.length / 2));
  const rafRef = useRef<number>(0);
  const snapTimer = useRef<ReturnType<typeof setTimeout>>(null);

  // Cache layout values so we never read them during scroll
  const layoutCache = useRef<{ centers: number[]; containerW: number; inners: HTMLElement[] }>({
    centers: [],
    containerW: 0,
    inners: [],
  });

  const cacheLayout = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const items = container.querySelectorAll<HTMLLIElement>("[data-cover]");
    const centers: number[] = [];
    const inners: HTMLElement[] = [];
    items.forEach((item) => {
      centers.push(item.offsetLeft + item.offsetWidth / 2);
      const inner = item.querySelector<HTMLElement>("[data-cover-inner]");
      if (inner) inners.push(inner);
    });
    layoutCache.current = {
      centers,
      containerW: container.offsetWidth,
      inners,
    };
  }, []);

  const applyTransforms = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const { centers, containerW, inners } = layoutCache.current;
    if (centers.length === 0) return;

    const centerX = container.scrollLeft + containerW / 2;
    let closestIndex = 0;
    let closestDist = Infinity;

    for (let i = 0; i < centers.length; i++) {
      const distance = centers[i] - centerX;
      const norm = distance / CARD_W;
      const abs = Math.abs(norm);

      if (abs < closestDist) {
        closestDist = abs;
        closestIndex = i;
      }

      const maxRotate = 65;
      const rotate = -Math.sign(norm) * Math.min(abs, 1) * maxRotate;
      const scale = 1 - Math.min(abs, 2) * 0.18;

      const sign = Math.sign(norm);
      const domSpacing = CARD_W + CARD_GAP;
      let targetOffset = 0;
      if (abs <= 1) {
        targetOffset = abs * 200;
      } else {
        targetOffset = 200 + (abs - 1) * 110;
      }
      const shift = -sign * (abs * domSpacing - targetOffset);
      const zPush = -abs * 120;
      const zIndex = 100 - Math.round(abs * 20);
      const opacity = Math.max(0.35, 1 - abs * 0.3);

      const inner = inners[i];
      if (inner) {
        inner.style.transform =
          `translate3d(${shift}px, 0, ${zPush}px) rotateY(${rotate}deg) scale(${scale})`;
        inner.style.zIndex = String(Math.max(1, zIndex));
        inner.style.opacity = String(opacity);
      }
    }

    if (closestIndex !== activeRef.current) {
      activeRef.current = closestIndex;
      setActiveIndex(closestIndex);
    }
  }, []);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (container) {
      container.classList.add("is-scrolling");
      if (snapTimer.current) clearTimeout(snapTimer.current);
      snapTimer.current = setTimeout(() => {
        container.classList.remove("is-scrolling");
      }, 150);
    }
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(applyTransforms);
  }, [applyTransforms]);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const { centers, containerW } = layoutCache.current;
    if (centers[index] !== undefined) {
      container.scrollTo({
        left: centers[index] - containerW / 2,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    cacheLayout();

    // Center on middle card
    const { centers, containerW } = layoutCache.current;
    const center = Math.floor(projects.length / 2);
    if (centers[center] !== undefined) {
      container.scrollLeft = centers[center] - containerW / 2;
    }

    applyTransforms();
    container.addEventListener("scroll", handleScroll, { passive: true });

    const onResize = () => {
      cacheLayout();
      applyTransforms();
    };
    window.addEventListener("resize", onResize);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [applyTransforms, handleScroll, cacheLayout]);

  // Keyboard nav
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" && activeIndex < projects.length - 1) {
        scrollToIndex(activeIndex + 1);
      } else if (e.key === "ArrowLeft" && activeIndex > 0) {
        scrollToIndex(activeIndex - 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, scrollToIndex]);

  return (
    <div className="relative">
      {/* Stage */}
      <div className="coverflow-stage mx-auto max-w-7xl px-4 sm:px-8">
        <div
          ref={scrollRef}
          className="coverflow-scroll relative flex items-start overflow-x-auto py-8"
          style={{
            paddingLeft: `calc(50% - ${CARD_W / 2}px)`,
            paddingRight: `calc(50% - ${CARD_W / 2}px)`,
          }}
        >
          {projects.map((project) => (
            <li
              key={project.name}
              data-cover
              className="list-none flex-none"
              style={{ width: CARD_W, marginLeft: CARD_GAP / 2, marginRight: CARD_GAP / 2 }}
            >
              <div
                data-cover-inner
                className="coverflow-card"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Main card */}
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card group relative block aspect-[3/4] overflow-hidden rounded-2xl"
                >
                  {/* Top accent bar */}
                  <div
                    className="absolute left-0 right-0 top-0 h-[2px]"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
                    }}
                  />

                  {/* Large monogram */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="select-none font-bold leading-none opacity-[0.07] transition-transform duration-700 group-hover:scale-105"
                      style={{
                        fontSize: "180px",
                        fontFamily: "Geist Sans, sans-serif",
                        color: project.accent,
                      }}
                    >
                      {project.name[0]}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span
                      className="mb-3 inline-block self-start rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em]"
                      style={{
                        color: project.accent,
                        backgroundColor: `${project.accent}15`,
                        border: `1px solid ${project.accent}30`,
                      }}
                    >
                      {project.role}
                    </span>
                    <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-xs text-zinc-400 transition-colors group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300">
                      <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 stroke-current">
                        <path d="M4 12 12 4m0 0H5.5m6.5 0v6.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {new URL(project.href).hostname}
                    </div>
                  </div>
                </a>

              </div>
            </li>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-4 flex items-center justify-center gap-6">
        <button
          onClick={() => activeIndex > 0 && scrollToIndex(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="glass-nav flex h-9 w-9 items-center justify-center rounded-full transition-all disabled:opacity-30"
          aria-label="Previous project"
        >
          <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 stroke-zinc-600 dark:stroke-zinc-400">
            <path d="M9.25 5.75 6.75 8l2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex items-center gap-1.5">
          {projects.map((project, i) => (
            <button
              key={project.name}
              onClick={() => scrollToIndex(i)}
              aria-label={`View ${project.name}`}
              className="group relative flex h-5 items-center justify-center"
            >
              <span
                className={clsx(
                  "block rounded-full transition-all duration-400",
                  i === activeIndex
                    ? "h-2.5 w-2.5"
                    : "h-1.5 w-1.5 bg-zinc-300 group-hover:bg-zinc-400 dark:bg-zinc-600 dark:group-hover:bg-zinc-500"
                )}
                style={i === activeIndex ? { backgroundColor: project.accent } : undefined}
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => activeIndex < projects.length - 1 && scrollToIndex(activeIndex + 1)}
          disabled={activeIndex === projects.length - 1}
          className="glass-nav flex h-9 w-9 items-center justify-center rounded-full transition-all disabled:opacity-30"
          aria-label="Next project"
        >
          <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 stroke-zinc-600 dark:stroke-zinc-400">
            <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Active project title */}
      <div className="mt-6 text-center">
        <p className="text-sm font-medium text-zinc-500 transition-all dark:text-zinc-400">
          <span style={{ color: projects[activeIndex].accent }}>
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span className="mx-2 text-zinc-300 dark:text-zinc-600">/</span>
          <span>{String(projects.length).padStart(2, "0")}</span>
        </p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="mt-16 sm:mt-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-8 lg:px-12">
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Projects I&apos;ve contributed to.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Most of my work is open source and focused on Bitcoin infrastructure.
          </p>
        </header>
      </div>
      <div className="mt-8 sm:mt-12">
        <CoverFlow />
      </div>
    </div>
  );
}
