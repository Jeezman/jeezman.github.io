import type { Config } from "tailwindcss";
import typographyStyles from "./typography";

export default {
  darkMode: "selector",
  theme: {
    typography: typographyStyles,
  },
} satisfies Config;
