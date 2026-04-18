import { motion, useScroll, useSpring } from "motion/react";

/**
 * Thin brand-orange bar fixed to the top of the viewport. Width tracks
 * document scroll progress via `useScroll` + a gentle spring so it doesn't
 * feel twitchy. Sits above everything else (z-60) so it survives sticky
 * headers and modals.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    restDelta: 0.001,
  });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-brand-500"
      style={{ scaleX }}
    />
  );
}
