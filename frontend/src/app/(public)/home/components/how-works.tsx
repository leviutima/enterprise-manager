import { Reveal } from "../utils/revel";
import { StaggerChild } from "../utils/stagerChilds";
import { StaggerReveal } from "../utils/stagerReveal";
import { motion } from "motion/react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Cadastre a empresa",
      desc: "Crie sua conta, configure o perfil e adicione as informações básicas. Leva menos de 3 minutos.",
    },
    {
      num: "02",
      title: "Monte seus setores",
      desc: "Crie departamentos, defina responsáveis e convide colaboradores. Cada um recebe acesso na hora.",
    },
    {
      num: "03",
      title: "A equipe já pode usar",
      desc: "Cada colaborador acessa seu cantinho, bate o ponto e o admin vê tudo no painel. Simples assim.",
    },
  ];
  return (
    <section className="py-24 px-6 md:px-12 bg-ink">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <span className="text-[12px] font-semibold tracking-[1.5px] uppercase text-[#7A9E88] mb-4 block">
            Como funciona
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-light tracking-[-1px] leading-[1.15] mb-5 text-bg">
            Pronto em <em className="not-italic text-[#7A9E88]">minutos</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[17px] text-bg/50 font-light leading-[1.7] max-w-[520px] mb-16">
            Sem onboarding longo, sem treinamento. Sua empresa operando no
            Núcleo antes do almoço.
          </p>
        </Reveal>

        <StaggerReveal
          className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-bg/10"
          staggerChildren={0.14}
          delayChildren={0.1}
        >
          {steps.map(({ num, title, desc }, i) => (
            <StaggerChild key={num}>
              <div
                className={`py-12 ${i === 0 ? "lg:pr-10" : i === 2 ? "lg:pl-10" : "lg:px-10"}`}
              >
                <motion.p
                  className="font-serif text-[72px] font-light text-bg/[0.08] leading-none tracking-[-2px] mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                >
                  {num}
                </motion.p>
                <h3 className="font-serif text-[22px] font-light text-bg mb-3">
                  {title}
                </h3>
                <p className="text-[14px] text-bg/45 leading-[1.7]">{desc}</p>
              </div>
            </StaggerChild>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
