import { motion, type MotionProps, type Variants } from "motion/react";
import type { ComponentProps, ElementType, ReactNode } from "react";
import { useRevealStagger, VIEWPORT_ONCE } from "../motion";

type OwnProps = {
  children: ReactNode;
  /** Override the container variants (e.g. to change stagger timing). */
  variants?: Variants;
  /** Override viewport settings (default: `VIEWPORT_ONCE`). */
  viewport?: MotionProps["viewport"];
};

/**
 * Viewport-triggered stagger container. Children rendered inside an
 * `<AnimatedSection>` should each be wrapped in an `<AnimatedItem>` — they
 * share the orchestration via Variants so the parent controls timing.
 *
 * Polymorphic: pass `as="ul"`/`as="ol"` etc. to render a different element.
 * Respects `prefers-reduced-motion` via `useRevealStagger`.
 */
export function AnimatedSection<T extends ElementType = "div">({
  as,
  children,
  variants,
  viewport,
  ...rest
}: OwnProps & { as?: T } & Omit<ComponentProps<T>, keyof OwnProps | "as">) {
  const { container } = useRevealStagger();
  const Component = (motion as unknown as Record<string, ElementType>)[
    (as ?? "div") as string
  ];
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={viewport ?? VIEWPORT_ONCE}
      variants={variants ?? container}
      {...rest}
    >
      {children}
    </Component>
  );
}

/**
 * Single item inside an `<AnimatedSection>`. Fades up via the shared variants,
 * or a no-op in reduced-motion mode.
 */
export function AnimatedItem<T extends ElementType = "div">({
  as,
  children,
  variants,
  ...rest
}: { children: ReactNode; variants?: Variants; as?: T } & Omit<
  ComponentProps<T>,
  "as" | "children"
>) {
  const { item } = useRevealStagger();
  const Component = (motion as unknown as Record<string, ElementType>)[
    (as ?? "div") as string
  ];
  return (
    <Component variants={variants ?? item} {...rest}>
      {children}
    </Component>
  );
}
