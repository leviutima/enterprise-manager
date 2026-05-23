"use client";

import { FormSignUp } from "@/src/features/auth";
import { FormAddress } from "@/src/features/auth/ui/form-address";
import { useAuthSignUp } from "@/src/features/auth/model/auth.context";
import { AddressFormSchema } from "@/src/features/auth/hooks/use-address-form";
import { useState } from "react";
import { signUp } from "@/src/features/auth/api/sign-up";

export default function SignUpWidget() {
  const [step, setStep] = useState("personal");
  const { personalData } = useAuthSignUp();
  const { onSubmit, isError, isPending, isSuccess } = signUp()

  function handleAddressSubmit(addressData: AddressFormSchema) {
    if (!personalData) return;
    const fullData = { ...personalData, address: addressData };
    console.log("dados completos:", fullData);
    onSubmit(fullData)
  }

  return (
    <div className="max-w-[1658px]">
      <div className="bg-bg2 border border-ink/10 rounded-2xl p-8 shadow-sm">
        <div className="mb-8 space-y-1">
          <h2 className="text-xl font-medium text-ink">Criar conta</h2>
          <p className="text-sm text-muted">
            Preencha seus dados para começar
          </p>
        </div>
        <div className="flex items-center justify-center px-7 pb-6">
          <div className="bg-accent rounded-full w-16 h-12 flex items-center justify-center">
            <span className="text-white font-semibold">1</span>
          </div>
          <div className="bg-neutral-400 w-full h-[1px]" />
          <div className={`bg-accent rounded-full w-16 h-12 flex items-center justify-center`}>
            <span className="text-white font-semibold">2</span>
          </div>
        </div>
        {step === "personal" && (
          <FormSignUp onNext={() => setStep("address")} />
        )}
        {step === "address" && (
          <FormAddress
            onSubmitData={handleAddressSubmit}
            onBack={() => setStep("personal")}
          />
        )}
        <p className="mt-6 text-center text-xs text-muted">
          Já tem uma conta?{" "}
          <a href="#" className="text-accent hover:underline">
            Entrar
          </a>
        </p>
      </div>
    </div>
  );
}
