import { Reveal } from "../utils/revel";
import { motion } from "motion/react";

export function CTASection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-bg2 border-t border-ink/10 text-center">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <span className="text-[12px] font-semibold tracking-[1.5px] uppercase text-accent mb-4 block">
            Comece agora
          </span>
        </Reveal>
        <Reveal delay={0.07}>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-light tracking-[-1px] leading-[1.15] mb-5 text-ink">
            Sua equipe merece
            <br />
            um ambiente <em className="not-italic text-accent">melhor</em>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-[17px] text-muted font-light leading-[1.7] max-w-[520px] mx-auto mb-10">
            Grátis para começar. Sem burocracia. Cancele quando quiser.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="flex gap-3.5 justify-center items-center flex-wrap">
            <motion.button
              className="px-10 py-[18px] text-[16px] font-medium text-white bg-ink rounded-full"
              whileHover={{ scale: 1.03, backgroundColor: "#3D6B4F" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Criar conta grátis
            </motion.button>
            <motion.button
              className="px-7 py-[18px] text-[15px] font-medium text-ink border border-ink/10 rounded-full"
              whileHover={{ scale: 1.03, backgroundColor: "#E8E5DC" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Ver demonstração
            </motion.button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
