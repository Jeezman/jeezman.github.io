import { Mark, Wordmark } from "../assets/brand";
import { BRAND, TAGLINE } from "../brand";
import { SECTIONS } from "../sections";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-border-default bg-surface">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-8">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Mark className="h-10 w-10" />
              <Wordmark size="text-3xl" />
            </div>
            <p className="mt-6 font-editorial text-2xl font-light italic tracking-tight text-text md:text-3xl max-w-md">
              {TAGLINE}
            </p>
          </div>

          <FooterColumn title="Product">
            {SECTIONS.map((section) => (
              <FooterLink key={section.id} href={`#${section.id}`}>
                {section.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Community">
            <FooterLink href={BRAND.githubUrl} external>
              GitHub
            </FooterLink>
            <FooterLink href={BRAND.arkadeDocsUrl} external>
              Arkade docs
            </FooterLink>
          </FooterColumn>
        </div>

        {/* Giant wordmark bleeding off the bottom — the closer.
            Uses a tight clip and generous negative margin so it reads as
            architecture, not decoration. */}
        <div
          aria-hidden="true"
          className="relative mt-16 overflow-hidden"
          style={{ height: "clamp(8rem, 22vw, 18rem)" }}
        >
          <div
            className="absolute inset-x-0 -bottom-[0.3em] text-center leading-[0.82] tracking-[0.02em]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(9rem, 32vw, 28rem)",
              color: "var(--text)",
              opacity: 0.08,
              WebkitTextStroke: "1px var(--text)",
              // @ts-expect-error textStroke is a valid CSS property for modern browsers
              textStroke: "1px var(--text)",
            }}
          >
            AVARK
          </div>
        </div>

        <div className="relative flex flex-col gap-3 border-t border-border-default pt-6 font-mono text-xs uppercase tracking-[0.25em] text-text-muted sm:flex-row sm:justify-between">
          <p>Built on Arkade</p>
          <p>© {year} Avark — MIT</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-text-faint mb-5">
        {title}
      </h4>
      <ul className="space-y-3 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" as const }
    : {};
  return (
    <li>
      <a
        href={href}
        className="text-text-muted transition-colors hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-sm"
        {...externalProps}
      >
        {children}
      </a>
    </li>
  );
}
