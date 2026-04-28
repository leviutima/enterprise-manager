export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-center p-8">
      <div className="hidden lg:flex flex-col gap-8 sticky">
        <div className="">
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
      <div>{children}</div>
    </div>
  );
}
