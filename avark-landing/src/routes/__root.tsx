import { Outlet, createRootRoute } from "@tanstack/react-router";
import { ThemeProvider } from "../theme";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}
