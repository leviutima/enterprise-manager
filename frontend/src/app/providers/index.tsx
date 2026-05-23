import { AuthSignUpProvider } from "@/src/features/auth";
import { TanstackQueryProvider } from "./query-client";

export function Provider({ children }: { children: React.ReactNode }) {

  return (
    <TanstackQueryProvider>
        <AuthSignUpProvider>{children}</AuthSignUpProvider>
    </TanstackQueryProvider>
  )
}
