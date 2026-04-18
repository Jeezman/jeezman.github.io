import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { ScrollProgress } from "./ScrollProgress";
import { Ticker } from "./Ticker";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-surface text-text">
      <ScrollProgress />
      <Nav />
      <Ticker />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
