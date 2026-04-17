import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/src/components/Container";

export const Route = createFileRoute("/blog")({
  component: Blog,
});

const posts = [
  {
    href: "https://medium.com/@tobiadeyemi/paywall-application-built-with-react-native-and-lightning-ccfe72db12e0",
    title: "Paywall application built with React Native and Lightning",
    date: "",
    description: "",
  },
  {
    href: "https://medium.com/@tobiadeyemi/understand-lightning-liquidity-ef4dd91e8ed2",
    title: "Understand Lightning liquidity",
    date: "",
    description: "",
  },
  {
    href: "https://medium.com/@tobiadeyemi/lightning-powered-authentication-with-lnurl-and-nextjs-d2a023309b81",
    title: "Lightning-powered authentication with LNURL and Next.js",
    date: "",
    description: "",
  },
  {
    href: "https://medium.com/@tobiadeyemi/interacting-with-lnd-grpc-and-rest-apis-47d46d3dd218",
    title: "Interacting with LND: gRPC and REST APIs",
    date: "",
    description: "",
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Blog() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Writing on Bitcoin, software, and building from here.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Thoughts on building technology that matters, from the perspective of
          someone doing it in the global south.
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <div className="flex max-w-3xl flex-col gap-6">
          {posts.map((post) => (
            <article
              key={post.href || post.title}
              className="glass-card group relative rounded-2xl p-6"
            >
              {post.date && (
                <time
                  dateTime={post.date}
                  className="text-sm text-zinc-400 dark:text-zinc-500"
                >
                  {formatDate(post.date)}
                </time>
              )}
              <h2 className="mt-2 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                <a
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-x-0 inset-y-0 z-20 rounded-2xl"
                >
                  <span className="sr-only">{post.title}</span>
                </a>
                <span className="relative z-10">{post.title}</span>
              </h2>
              {post.description && (
                <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {post.description}
                </p>
              )}
              <p
                aria-hidden="true"
                className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
              >
                Read on Medium
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="ml-1 h-4 w-4 stroke-current"
                >
                  <path
                    d="M6.75 5.75 9.25 8l-2.5 2.25"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
}
