import { motion } from "motion/react";
import { fadeUp } from "@/src/shared/ui/animations/animations";

export function SplitCard({
  variant, tag, title, desc, features,
}: {
  variant: "admin" | "colab"
  tag: string; title: string; desc: string
  features: { icon: string; text: string }[]
}) {
  const isAdmin = variant === "admin"
  return (
    <motion.div
      className="relative bg-white rounded-2xl border border-ink/10 p-10 overflow-hidden"
      variants={fadeUp}
      whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(28,27,24,0.08)" }}
      transition={{ duration: 0.3 }}
    >
      <div className={`absolute top-0 left-0 right-0 h-[3px] ${isAdmin ? "bg-accent" : "bg-warm"}`} />
      <p className={`text-[11px] font-semibold tracking-[1px] uppercase mb-5 ${isAdmin ? "text-accent" : "text-warm"}`}>
        {tag}
      </p>
      <h3 className="font-serif text-[26px] font-light tracking-[-0.5px] leading-[1.2] mb-4 text-ink">
        {title}
      </h3>
      <p className="text-[15px] text-muted leading-[1.7] mb-7">{desc}</p>
      <div className="flex flex-col gap-2.5">
        {features.map(({ icon, text }) => (
          <div key={text} className="flex items-start gap-3 text-[14px] text-ink">
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0 mt-0.5 ${isAdmin ? "bg-accent-light" : "bg-warm-light"}`}>
              {icon}
            </div>
            {text}
          </div>
        ))}
      </div>
    </motion.div>
  )
}