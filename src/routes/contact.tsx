import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/src/components/Container";
import {
  GitHubIcon,
  XIcon,
  NostrIcon,
} from "@/src/components/icons";
import { GITHUB_URL, NOSTR_URL, X_URL } from "@/src/constants";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

const socials = [
  {
    icon: GitHubIcon,
    label: "Follow on GitHub",
    href: GITHUB_URL,
    handle: "jeezman",
  },
  {
    icon: NostrIcon,
    label: "Follow on Nostr",
    href: NOSTR_URL,
    handle: "jeezman",
  },
  {
    icon: XIcon,
    label: "Follow on X",
    href: X_URL,
    handle: "@_tobillionaire",
  },
];

function Contact() {
  return (
    <Container className="mt-16 sm:mt-24">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Let&apos;s connect.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Whether you want to talk about Bitcoin development, open source, or
          building technology in Africa — I&apos;d love to hear from you.
        </p>
      </div>

      <div className="mt-16 sm:mt-20">
        <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          Find me elsewhere
        </h2>
        <ul className="mt-6 space-y-4">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                <social.icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
                <span>{social.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
