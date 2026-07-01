export const EASE_OUT = [0.16, 1, 0.3, 1];

export const fadeUp = (reduced, distance = 20) =>
  reduced
    ? { initial: false, animate: undefined, transition: { duration: 0 } }
    : {
        initial: { opacity: 0, y: distance },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: EASE_OUT },
      };

export const fadeIn = (reduced, duration = 0.75) =>
  reduced
    ? { initial: false, whileInView: undefined, transition: { duration: 0 } }
    : {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration, ease: EASE_OUT },
      };
