export const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0  },
}

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
}

export const stagger = (delay = 0) => ({
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
})