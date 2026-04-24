import { fadeUp } from "@/src/shared/ui/animations/animations"
import { motion } from "motion/react"
import { DashboardMockup } from "./dashboard-mockup"

export function HeroSection() {
  return (
    <section className="pb-40 pt-40 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="flex flex-col">
          <motion.span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent-light text-accent rounded-full text-[13px] font-medium w-fit mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Agora em acesso antecipado
          </motion.span>

          <motion.h1
            className="font-serif text-[clamp(42px,5vw,62px)] font-light leading-[1.1] tracking-[-1.5px] mb-6 text-ink"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Sua empresa,{" "}
            <em className="not-italic text-accent">organizada</em>
            <br />sem esforço.
          </motion.h1>

          <motion.p
            className="text-lg text-muted font-light leading-[1.7] mb-10 max-w-[420px]"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Gestão de equipes, setores e colaboradores em um só lugar.
            Simples para o admin, agradável para quem usa.
          </motion.p>

          <motion.div
            className="flex gap-3.5 items-center flex-wrap"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              className="px-8 py-4 text-[15px] font-medium text-white bg-ink rounded-full"
              whileHover={{ scale: 1.03, backgroundColor: "#3D6B4F" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Criar conta grátis
            </motion.button>
            <span className="text-[13px] text-muted">Sem cartão de crédito</span>
          </motion.div>
        </div>

        <DashboardMockup />
      </div>
    </section>
  )
}