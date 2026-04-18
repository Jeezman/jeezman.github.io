import { createFileRoute } from "@tanstack/react-router";
import {
  FAQ,
  Features,
  Hero,
  HowItWorks,
  Security,
  SiteLayout,
} from "../components";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <SiteLayout>
      <Hero />
      <Features />
      <HowItWorks />
      <Security />
      <FAQ />
    </SiteLayout>
  );
}
