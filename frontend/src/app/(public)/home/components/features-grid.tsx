import { Reveal } from "../utils/revel"
import { StaggerChild } from "../utils/stagerChilds";
import { StaggerReveal } from "../utils/stagerReveal"
import { motion} from "motion/react";

export function FeaturesGrid() {
  const features = [
    { icon: "🗂️", title: "Setores como canais",   desc: "Cada setor tem seu espaço próprio — com a lista de membros, comunicados internos e visibilidade de presença. Parecido com canais de um Teams, mas sem a bagunça.", wide: true,  coming: false },
    { icon: "🕐", title: "Controle de ponto",     desc: "Entrada, saída e intervalos registrados com um clique. O admin vê o histórico de todos em tempo real.",                                                              wide: false, coming: false },
    { icon: "📝", title: "Notas pessoais",         desc: "Cada colaborador tem um bloco de notas privado. Para lembretes, tarefas ou o que quiser anotar.",                                                                  wide: false, coming: false },
    { icon: "📊", title: "Relatórios automáticos", desc: "Assiduidade, horas trabalhadas e muito mais, gerado automaticamente.",                                                                                              wide: false, coming: true  },
    { icon: "📣", title: "Comunicados",            desc: "O RH publica, todos recebem. Sem precisar de e-mail ou WhatsApp.",                                                                                                  wide: false, coming: true  },
    { icon: "🔗", title: "Integrações",            desc: "Google Calendar, Slack, e muito mais chegando em breve.",                                                                                                           wide: false, coming: true  },
  ]

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <Reveal><span className="text-[12px] font-semibold tracking-[1.5px] uppercase text-accent mb-4 block">Funcionalidades</span></Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-light tracking-[-1px] leading-[1.15] mb-5 text-ink">
            Tudo que você precisa,{" "}
            <em className="not-italic text-accent">nada que você não usa</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[17px] text-muted font-light leading-[1.7] max-w-[520px] mb-14">
            Projetado para ser leve. Cada funcionalidade tem um propósito claro.
          </p>
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 lg:grid-cols-3 gap-4" staggerChildren={0.09} delayChildren={0.05}>
          {features.map(({ icon, title, desc, wide, coming }) => (
            <StaggerChild key={title} className={wide ? "lg:col-span-2" : ""}>
              <motion.div
                className={`rounded-2xl border p-8 h-full ${wide ? "bg-accent-light border-transparent" : "bg-white border-ink/10"}`}
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(28,27,24,0.07)" }}
                transition={{ duration: 0.25 }}
              >
                <motion.span
                  className="text-[28px] mb-5 block"
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.span>
                <h3 className="font-serif text-[20px] font-light tracking-[-0.3px] mb-2.5 text-ink">{title}</h3>
                <p className={`text-[14px] leading-[1.65] ${wide ? "text-accent" : "text-muted"}`}>{desc}</p>
                {coming && (
                  <span className="inline-block mt-3.5 text-[11px] font-semibold tracking-[0.8px] uppercase text-muted px-2.5 py-1 border border-ink/10 rounded-full">
                    Em breve
                  </span>
                )}
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}