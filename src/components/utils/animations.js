export const animationVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,

    transition: {
      type: 'spring',
      delay: 0.4,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
}

export const childrenVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}
