import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { FAQ as FAQ_COPY } from "../copy";
import { ChevronDownIcon } from "./icons";
import { SectionBadge } from "./SectionBadge";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative scroll-mt-20 border-b border-border-default bg-surface-muted"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionBadge index="05" label={FAQ_COPY.eyebrow} />

        <div className="mt-10 grid max-w-5xl gap-10 md:grid-cols-[1fr_1.4fr] md:items-end">
          <h2
            id="faq-heading"
            className="font-editorial font-light leading-[0.95] tracking-tight text-text"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            {FAQ_COPY.heading}
          </h2>
          <p className="text-lg leading-relaxed text-text-muted md:text-xl">
            {FAQ_COPY.lead}
          </p>
        </div>

        <ul className="mt-16 divide-y divide-border-default border-y border-border-default">
          {FAQ_COPY.items.map((item, i) => (
            <FaqItem
              key={item.question}
              index={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() =>
                setOpenIndex((current) => (current === i ? null : i))
              }
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function FaqItem({
  index,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const buttonId = `faq-trigger-${index}`;
  const panelId = `faq-panel-${index}`;
  const number = String(index + 1).padStart(2, "0");

  return (
    <li>
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:rounded-sm"
        >
          <div className="flex items-start gap-6">
            <span className="mt-1 shrink-0 font-mono text-xs uppercase tracking-[0.25em] text-text-faint">
              № {number}
            </span>
            <span className="font-editorial text-xl font-medium tracking-tight text-text md:text-2xl">
              {question}
            </span>
          </div>
          <motion.span
            aria-hidden="true"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={
              reduceMotion ? { duration: 0 } : { duration: 0.25, ease: "easeOut" }
            }
            className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full border border-border-default text-text-muted"
          >
            <ChevronDownIcon className="h-4 w-4" />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={
              reduceMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
            }
            animate={{ opacity: 1, height: "auto" }}
            exit={
              reduceMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
            }
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.28, ease: "easeOut" }
            }
            className="overflow-hidden"
          >
            <p className="pb-6 pl-[calc(2.25rem+1.5rem)] pr-14 leading-relaxed text-text-muted">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
