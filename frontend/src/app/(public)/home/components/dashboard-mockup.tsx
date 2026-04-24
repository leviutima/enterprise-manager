import { fadeUp } from "@/src/shared/ui/animations/animations";
import { motion, useInView } from "motion/react";

export function DashboardMockup() {
  return (
    <motion.div
      className="bg-white rounded-[20px] border border-ink/10 overflow-hidden shadow-[0_24px_80px_rgba(28,27,24,0.08),0_4px_16px_rgba(28,27,24,0.04)]"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
      style={{ transformPerspective: 1000 }}
      whileHover={{ rotateY: 0, rotateX: 0 }}
      animate-initial={{ rotateY: -4, rotateX: 2 }}
    >
      <div className="bg-[#F0EDE7] px-4 py-3 flex items-center gap-2 border-b border-ink/10">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      </div>

      <div className="p-5 grid grid-cols-[110px_1fr] gap-4 min-h-[320px]">
        <div className="flex flex-col gap-1.5">
          {["Visão geral", "Setores", "Equipe", "Ponto", "Relatórios"].map(
            (item, i) => (
              <motion.div
                key={item}
                className={`px-3 py-2 rounded-lg text-[11px] font-medium ${i === 0 ? "bg-accent-light text-accent" : "text-muted"}`}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.6 + i * 0.06 }}
              >
                {item}
              </motion.div>
            ),
          )}
        </div>

        <div className="flex flex-col gap-3">
          <motion.p
            className="text-[13px] font-semibold text-ink"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
          >
            Hoje, terça-feira
          </motion.p>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Presentes", val: "24", sub: "↑ 3 hoje" },
              { label: "Setores", val: "6", sub: "ativos" },
              { label: "Pendências", val: "2", sub: "ver agora" },
            ].map(({ label, val, sub }, i) => (
              <motion.div
                key={label}
                className="bg-bg rounded-lg p-3 border border-ink/10"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.07 }}
              >
                <p className="text-[9px] text-muted mb-1">{label}</p>
                <p className="text-[18px] font-semibold text-ink leading-none">
                  {val}
                </p>
                <p className="text-[9px] text-accent mt-1">{sub}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-1.5">
            {[
              {
                initials: "AM",
                name: "Ana Melo",
                role: "Design · 08:02",
                color: "#3D6B4F",
                present: true,
              },
              {
                initials: "RC",
                name: "Rodrigo Costa",
                role: "Eng. · pendente",
                color: "#C4773B",
                present: false,
              },
              {
                initials: "BL",
                name: "Beatriz Lima",
                role: "RH · 07:58",
                color: "#5A7FA6",
                present: true,
              },
            ].map(({ initials, name, role, color, present }, i) => (
              <motion.div
                key={name}
                className="flex items-center gap-2 p-2.5 bg-bg rounded-lg"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.85 + i * 0.08 }}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-semibold text-white flex-shrink-0"
                  style={{ background: color }}
                >
                  {initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-medium text-ink">{name}</p>
                  <p className="text-[9px] text-muted">{role}</p>
                </div>
                <span
                  className={`text-[9px] font-medium px-2 py-0.5 rounded-full ${present ? "bg-accent-light text-accent" : "bg-warm-light text-warm"}`}
                >
                  {present ? "Presente" : "Tardança"}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
