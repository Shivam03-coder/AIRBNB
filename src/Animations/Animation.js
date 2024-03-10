export const FramerMotion = {
  ModalAnimation: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  },

  ModalBoxAnimation: {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 1 },
    },
  },

  CardAnimation: {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  },
  ButtonVariant: {
    hover: {
      scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
      boxShadow: "0px 0px 8px rgb(0,0,0)",
      textShadow: "0px 0px 8px rgb(255,255,255)",
    },
  },
  Basevariants: {
    hidden: { opacity: 0.3, x: -1300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 111 },
    },
  },
};
