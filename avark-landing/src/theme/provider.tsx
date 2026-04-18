import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  ThemeContext,
  THEME_ATTRIBUTE,
  THEME_STORAGE_KEY,
  type ResolvedTheme,
  type ThemeContextValue,
  type ThemePreference,
} from "./context";

const CYCLE: readonly ThemePreference[] = ["system", "light", "dark"] as const;

function readStoredPreference(): ThemePreference {
  if (typeof window === "undefined") return "system";
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored;
    }
  } catch {
    // localStorage unavailable (private mode, etc.) — fall through.
  }
  return "system";
}

function systemResolved(): ResolvedTheme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function writePreference(next: ThemePreference) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // Ignore — preference still applies for the session.
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>(
    readStoredPreference,
  );
  const [systemTheme, setSystemTheme] =
    useState<ResolvedTheme>(systemResolved);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(prefers-color-scheme: light)");
    const handler = (e: MediaQueryListEvent) =>
      setSystemTheme(e.matches ? "light" : "dark");
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const resolved: ResolvedTheme =
    preference === "system" ? systemTheme : preference;

  useEffect(() => {
    document.documentElement.setAttribute(THEME_ATTRIBUTE, resolved);
  }, [resolved]);

  const setPreference = useCallback((next: ThemePreference) => {
    setPreferenceState(next);
    writePreference(next);
  }, []);

  const cycle = useCallback(() => {
    setPreferenceState((current) => {
      const next = CYCLE[(CYCLE.indexOf(current) + 1) % CYCLE.length];
      writePreference(next);
      return next;
    });
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({ preference, resolved, setPreference, cycle }),
    [preference, resolved, setPreference, cycle],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
