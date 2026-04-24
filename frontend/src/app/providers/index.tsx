import { TanstackQueryProvider } from "./query-client";

export function Provider({ children }: { children: React.ReactNode }) {
  return <TanstackQueryProvider>{children}</TanstackQueryProvider>;
}
