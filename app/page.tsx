import { Container } from "@/src/components/Container";
import { GitHubIcon, XIcon, NostrIcon } from "@/src/components/icons";
import { GITHUB_URL, NOSTR_URL, X_URL } from "@/src/constants";
import Link from "next/link";

export default function Home() {
  return (
    <Container className="mt-9">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Software engineer. <br />
          Bitcoin class of &apos;20.
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          I’m Tobi, a software engineer and Bitcoiner based in Nigeria.
        </p>
        <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
          Currently work at{" "}
          <Link
            target="_blank"
            className="underline hover:no-underline"
            href="https://hrf.org"
          >
            HRF
          </Link>{" "}
          on the{" "}
          <Link
            target="_blank"
            className="underline hover:no-underline"
            href="https://hrf.org/program/financial-freedom/bitcoin-development-fund/"
          >
            Bitcoin Dev fund
          </Link>{" "}
          team
        </p>
        <div className="mt-8">
          <b className="text-lg font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Why is Bitcoin important to me?
          </b>
          <p className="my-4 text-base text-zinc-600 dark:text-zinc-400">
            It helps facilitate payments globally. Countries in the global south
            have been holding the short end of the stick regarding global
            payments with no hope in sight.
          </p>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Bitcoin levels the playing field for everyone, it is privacy first,
            immune to censorship or limits placed on traditional financial
            instutions. With the rising rate of inflation, currently above 30%
            in Nigeria, it has proved to be a more genuine store of value.
          </p>
        </div>
        <div className="mt-6 flex gap-6">
          <SocialLink
            href={GITHUB_URL}
            aria-label="Follow on GitHub"
            icon={GitHubIcon}
          />
          <SocialLink
            href={NOSTR_URL}
            aria-label="Follow on Nostr"
            icon={NostrIcon}
          />
          <SocialLink href={X_URL} aria-label="Follow on X" icon={XIcon} />
        </div>
      </div>
    </Container>
  );
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}
