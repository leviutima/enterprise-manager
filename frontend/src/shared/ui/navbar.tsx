"use client";

import { motion } from "motion/react"
import { fadeIn } from "./animations/animations"
import { Logo } from "./logo"

export function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 bg-bg/85 backdrop-blur-md border-b border-ink/10"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Logo />

      <ul className="hidden md:flex gap-9 list-none">
        {["Como funciona", "Funcionalidades", "Planos"].map((item, i) => (
          <motion.li
            key={item}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
          >
            <a href="#" className="text-sm text-muted hover:text-ink transition-colors">
              {item}
            </a>
          </motion.li>
        ))}
      </ul>

      <motion.div
        className="flex gap-3 items-center"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, delay: 0.35 }}
      >
        <button className="px-5 py-2.5 text-sm font-medium text-ink border border-ink/10 rounded-full hover:bg-bg2 transition-colors">
          Entrar
        </button>
        <button className="px-5 py-2.5 text-sm font-medium text-white bg-accent rounded-full hover:bg-[#2f5240] transition-colors">
          Começar grátis
        </button>
      </motion.div>
    </motion.nav>
  )
}