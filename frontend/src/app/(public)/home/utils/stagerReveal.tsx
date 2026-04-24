import { useRef } from "react";
import { motion, useInView } from "motion/react";

export function StaggerReveal({
  children,
  className,
  staggerChildren = 0.1,
  delayChildren = 0,
}: {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren, delayChildren } } }}
    >
      {children}
    </motion.div>
  );
}
