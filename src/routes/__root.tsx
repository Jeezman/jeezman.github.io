import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Providers } from "@/src/provider";
import { Layout } from "@/src/components/Layout";
import { Container } from "@/src/components/Container";
import { Link } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});

function RootLayout() {
  return (
    <Providers>
      <Layout>
        <Outlet />
      </Layout>
    </Providers>
  );
}

function NotFound() {
  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <p className="text-base font-semibold text-zinc-400 dark:text-zinc-500">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Page not found
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link to="/" className="mt-4">
          Go back home
        </Link>
      </div>
    </Container>
  );
}
