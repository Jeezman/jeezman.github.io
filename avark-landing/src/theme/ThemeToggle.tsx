import { MonitorIcon, MoonIcon, SunIcon } from "./icons";
import { useTheme } from "./context";
import type { ThemePreference } from "./context";

const LABELS: Record<ThemePreference, string> = {
  system: "System theme",
  light: "Light theme",
  dark: "Dark theme",
};

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { preference, cycle } = useTheme();

  const Icon =
    preference === "system"
      ? MonitorIcon
      : preference === "light"
        ? SunIcon
        : MoonIcon;

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`${LABELS[preference]} (click to cycle)`}
      title={LABELS[preference]}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-md border border-border-default text-text-muted transition-colors hover:bg-surface-raised-hover hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${className}`}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
