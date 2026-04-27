import { FormSignUp } from "@/src/features/auth";


export default function SignUpWidget() {
  return (
    <section className="flex-1 pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
        <div className="hidden lg:flex flex-col gap-8 sticky top-32">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent-light rounded-full border border-accent/20">
              Acesso antecipado
            </span>
            <h1 className="font-serif text-[2.4rem] leading-tight font-normal text-ink">
              Comece a organizar sua empresa hoje
            </h1>
            <p className="text-base text-muted leading-relaxed">
              Crie sua conta e acesse uma plataforma completa para gerenciar
              equipes, setores e processos com leveza.
            </p>
          </div>

          <ul className="space-y-3">
            {[
              "Gestão completa de equipes e setores",
              "Controle de acessos por nível de cargo",
              "Sem necessidade de cartão de crédito",
              "Suporte em português durante todo o processo",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-muted"
              >
                <span className="w-5 h-5 rounded-full bg-accent-light flex items-center justify-center shrink-0">
                  <svg
                    width="10"
                    height="8"
                    viewBox="0 0 10 8"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="#3D6B4F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t border-ink/10">
            <p className="text-xs text-muted">
              Mais de <span className="text-ink font-medium">200 empresas</span>{" "}
              já utilizam o NúCleo
            </p>
          </div>
        </div>
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
    </section>
  );
}
