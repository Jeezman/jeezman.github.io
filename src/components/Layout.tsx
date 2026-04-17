import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";

function LiquidBackground() {
  return (
    <div className="liquid-bg" aria-hidden>
      <div className="liquid-blob" />
      <div className="liquid-blob" />
      <div className="liquid-blob" />
      <div className="liquid-blob" />
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LiquidBackground />
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="glass-panel w-full rounded-none lg:rounded-none" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
}
