import { Reveal } from "../utils/revel";
import { StaggerChild } from "../utils/stagerChilds";
import { StaggerReveal } from "../utils/stagerReveal";
import { SplitCard } from "./split-card";

export function SplitSection() {
  return (
    <section className="pb-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <Reveal><span className="text-[12px] font-semibold tracking-[1.5px] uppercase text-accent mb-4 block">Dois mundos, uma plataforma</span></Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-light tracking-[-1px] leading-[1.15] mb-5 text-ink">
            Para quem <em className="not-italic text-accent">lidera</em>
            <br />e para quem <em className="not-italic text-accent">trabalha</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[17px] text-muted font-light leading-[1.7] max-w-[520px] mb-14">
            O Núcleo entende que admin e colaborador precisam de experiências diferentes — e entrega as duas.
          </p>
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 lg:grid-cols-2 gap-6" staggerChildren={0.12} delayChildren={0.1}>
          <StaggerChild>
            <SplitCard variant="admin" tag="Para o administrador" title="Gestão com visibilidade real"
              desc="Acompanhe toda a empresa em um painel limpo. Setores, presença, pendências e métricas sem complexidade desnecessária."
              features={[
                { icon: "📊", text: "Dashboard com presença em tempo real" },
                { icon: "🏢", text: "Gestão de setores e hierarquias" },
                { icon: "👥", text: "Cadastro e monitoramento de colaboradores" },
                { icon: "📋", text: "Relatórios de ponto e assiduidade" },
                { icon: "🔔", text: "Alertas de tardança e ausência" },
              ]}
            />
          </StaggerChild>
          <StaggerChild>
            <SplitCard variant="colab" tag="Para o colaborador" title="Seu cantinho digital"
              desc="Um espaço que é seu. Bata o ponto, escreva suas notas, veja sua equipe e fique por dentro do que importa."
              features={[
                { icon: "🕐", text: "Registro de ponto com um clique" },
                { icon: "📝", text: "Bloco de notas pessoal" },
                { icon: "👋", text: "Veja quem está online no seu setor" },
                { icon: "📅", text: "Histórico de horas e registros" },
                { icon: "💬", text: "Comunicados do RH e avisos" },
              ]}
            />
          </StaggerChild>
        </StaggerReveal>
      </div>
    </section>
  )
}