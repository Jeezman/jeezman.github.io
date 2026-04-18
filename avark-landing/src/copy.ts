/**
 * ⚠️ PLACEHOLDER COPY — see US-014 and COPY-REVIEW.md. All user-facing strings
 * in this file are first-pass drafts and must be reviewed before the deploy is
 * publicly announced.
 *
 * Rules:
 * - Never hardcode user-facing copy in components. Import from here.
 * - When a string changes, also update COPY-REVIEW.md so the review checklist
 *   stays in sync.
 */

export const HERO = {
  // TAGLINE comes from brand.ts — this file owns the *supporting* copy.
  subhead:
    "A self-custody Bitcoin wallet built on Arkade. Lightning-fast spends, keys that stay yours, no custodian standing between you and your sats.",
  primaryCta: "View on GitHub",
  secondaryCta: "Learn more",
} as const;

export const FEATURES = {
  eyebrow: "Why Avark",
  heading: "A Bitcoin wallet that finally keeps up.",
  lead: "Built on Arkade's Ark protocol, paired with Lightning, wrapped in an interface that respects both newcomers and power users.",
  items: {
    ark: {
      title: "Built on Ark",
      description:
        "Native VTXOs let you hold and spend Bitcoin off-chain with settlements measured in seconds — all while custody stays with you.",
    },
    lightning: {
      title: "Lightning spends",
      description:
        "Send and receive Lightning in one tap. Avark handles the swaps behind the scenes, so you never have to think in channels.",
    },
    boarding: {
      title: "Boarding & settle",
      description:
        "On-chain UTXOs sit alongside your VTXOs. Settle to the chain when fees are low, stay off-chain when they aren't.",
    },
    pin: {
      title: "PIN & biometrics",
      description:
        "Unlock with a PIN or your device's biometrics. Keys live in your OS keychain — nothing syncs to a server.",
    },
    custody: {
      title: "Truly self-custody",
      description:
        "Your seed, your keys. No accounts to create, no recovery emails, no custodian between you and your sats.",
    },
    mobile: {
      title: "Built for mobile",
      description:
        "Every flow designed for one hand on a subway. The desktop app is the same bundle — just given more room.",
    },
  },
} as const;

export type FeatureId = keyof typeof FEATURES.items;

export const HOW_IT_WORKS = {
  eyebrow: "How it works",
  heading: "From zero to spending in under a minute.",
  lead: "No accounts, no emails, no compromises — four steps between you and Bitcoin that actually works.",
  steps: [
    {
      title: "Create your wallet",
      description:
        "Install Avark, set a PIN, and back up your 12 words. Your keys encrypt into the OS keychain — never to a server.",
    },
    {
      title: "Receive Bitcoin",
      description:
        "Share a Lightning invoice or a boarding address. Funds land in seconds and show up right in your balance.",
    },
    {
      title: "Spend instantly",
      description:
        "Pay Lightning invoices, Ark addresses, or on-chain sats. Avark routes over the cheapest rail automatically.",
    },
    {
      title: "Renew your VTXOs",
      description:
        "Refresh before expiry with one tap. Your Ark balance stays spendable forever, no bookkeeping required.",
    },
  ],
} as const;

export const FAQ = {
  eyebrow: "FAQ",
  heading: "Questions, answered.",
  lead: "The short version. Longer answers live in the docs and the repo.",
  items: [
    {
      question: "What is Ark?",
      answer:
        "Ark is a Bitcoin layer-2 protocol that lets you hold and spend Bitcoin off-chain while keeping full custody. Transactions settle in seconds and batch to the main chain periodically. Avark is built on top of it.",
    },
    {
      question: "Is Avark custodial?",
      answer:
        "No. Avark is fully self-custody — your 12-word seed is generated on your device and never leaves it. Avark can't freeze, recover, or move your funds.",
    },
    {
      question: "Which platforms does it support?",
      answer:
        "Mobile-first: iOS and Android are the primary targets. A macOS desktop build is also supported. Linux and Windows builds are on the roadmap.",
    },
    {
      question: "When does it launch?",
      answer:
        "Public beta is coming soon. Watch the GitHub repo for release notes and early-access invites.",
    },
    {
      question: "How do I back up my wallet?",
      answer:
        "On first launch, Avark shows you 12 words. Write them down on paper or metal — that's your entire backup. If you lose your device, you can restore any Avark install by entering those 12 words.",
    },
    {
      question: "How is this different from a regular Lightning wallet?",
      answer:
        "Lightning wallets need channels, liquidity, and uptime. Avark uses Ark's VTXOs for off-chain balances and seamlessly bridges to Lightning when you need it. You get the UX of Lightning without the ops overhead.",
    },
    {
      question: "Is Avark open-source?",
      answer:
        "Yes. Every line is public on GitHub — read the code, file an issue, or submit a patch.",
    },
    {
      question: "What happens if Avark the project disappears?",
      answer:
        "Your seed is yours. Any Ark-compatible wallet can restore from your 12 words. Nothing in Avark's design depends on us being around.",
    },
  ],
} as const;

export const SECURITY = {
  eyebrow: "Security",
  heading: "Your keys. Your device. Your rules.",
  lead: "Avark is non-custodial by design. Your 12 words, your keychain, your code — nothing depends on a service we could lose.",
  cta: "Read the source",
  pillars: [
    {
      title: "Non-custodial by design",
      description:
        "No company holds your funds. Every balance you see is a key you control — even if Avark disappeared tomorrow, your sats remain yours.",
    },
    {
      title: "Your seed, your keys",
      description:
        "12 words generated on device. You back them up on paper or metal; Avark never sees, stores, or transmits them.",
    },
    {
      title: "PIN + biometrics",
      description:
        "Unlock flows through your OS's secure enclave. No shared secrets, no cloud backups — just a local gatekeeper you control.",
    },
    {
      title: "OS keychain storage",
      description:
        "Keys live in the iOS Keychain, Android Keystore, or macOS Keychain — hardware-backed where your device supports it.",
    },
    {
      title: "Open-source, auditable",
      description:
        "Every line of Avark is public. Read the code, file an issue, ship a patch — no black box between you and your money.",
    },
  ],
} as const;
