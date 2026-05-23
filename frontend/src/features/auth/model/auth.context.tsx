"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { PersonalDataSchema } from "./auth.schema";

interface AuthSignUpContextProps {
  personalData: PersonalDataSchema | null;
  setPersonalData: (data: PersonalDataSchema) => void;
}

const AuthSignUpContext = createContext<AuthSignUpContextProps | null>(null);

export function AuthSignUpProvider({ children }: { children: ReactNode }) {
  const [personalData, setPersonalData] = useState<PersonalDataSchema | null>(null);

  return (
    <AuthSignUpContext.Provider value={{ personalData, setPersonalData }}>
      {children}
    </AuthSignUpContext.Provider>
  );
}

export function useAuthSignUp() {
  const ctx = useContext(AuthSignUpContext);
  if (!ctx) throw new Error("useAuthSignUp must be used inside AuthSignUpProvider");
  return ctx;
}
