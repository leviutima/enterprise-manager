import { FormSignUp } from "@/src/features/auth";

export default function SignUpWidget() {
  return (
      <div className="max-w-[1658px]">
        <div className="bg-bg2 border border-ink/10 rounded-2xl p-8 shadow-sm">
          <div className="mb-8 space-y-1">
            <h2 className="text-xl font-medium text-ink">Criar conta</h2>
            <p className="text-sm text-muted">
              Preencha seus dados para começar
            </p>
          </div>
          <FormSignUp />
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
