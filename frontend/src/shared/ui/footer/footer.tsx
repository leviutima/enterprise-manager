"use client";

import { Logo } from "../logo/logo";
import { motion, useInView } from "motion/react"

export function Footer() {
  return (
    <motion.footer
      className="px-12 py-12 border-t border-ink/10 flex flex-col md:flex-row items-center justify-between gap-4 max-w-[1200px] mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Logo />
      <p className="text-[13px] text-muted">© 2025 Núcleo. Feito com cuidado.</p>
      <div className="flex gap-6">
        {["Privacidade", "Termos", "Contato"].map((l) => (
          <a key={l} href="#" className="text-[13px] text-muted hover:text-ink transition-colors">{l}</a>
        ))}
      </div>
    </motion.footer>
  )
}