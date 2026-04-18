import { useReducedMotion, type Transition, type Variants } from "motion/react";

/**
 * Shared spring used for section reveals and CTA micro-interactions. Tuned to
 * feel alive but not bouncy — stiffness high enough that items settle quickly,
 * damping high enough that they don't overshoot visibly.
 */
export const SPRING: Transition = {
  type: "spring",
  stiffness: 110,
  damping: 18,
  mass: 0.6,
};

/**
 * Viewport config for scroll-triggered reveals. `once: true` means the
 * animation only fires the first time a section enters the viewport —
 * scrolling back and forth doesn't re-trigger, which avoids visual churn.
 */
export const VIEWPORT_ONCE = { once: true, amount: 0.15 } as const;

/**
 * Standard stagger for children inside a viewport-triggered container.
 */
export const STAGGER_CHILDREN = 0.08;

/**
 * Hook returning the container + item Variants for a section that fades its
 * children up on scroll in a staggered sequence. Automatically collapses to
 * no-op variants when the user prefers reduced motion.
 *
 * Usage:
 *   const { container, item } = useRevealStagger();
 *   return (
 *     <motion.ul variants={container} initial="hidden" whileInView="visible" viewport={VIEWPORT_ONCE}>
 *       {items.map(() => <motion.li variants={item}>...</motion.li>)}
 *     </motion.ul>
 *   );
 */
export function useRevealStagger(): { container: Variants; item: Variants } {
  const reduceMotion = useReducedMotion();

  const container: Variants = reduceMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: {},
        visible: { transition: { staggerChildren: STAGGER_CHILDREN } },
      };

  const item: Variants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: SPRING },
      };

  return { container, item };
}

/**
 * Button/CTA micro-interaction props. Returns whileHover/whileTap objects
 * scaled down when the user prefers reduced motion.
 */
export function useCtaMotion() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return { whileHover: {}, whileTap: {} };
  }
  return {
    whileHover: { y: -2 },
    whileTap: { scale: 0.97 },
  };
}
