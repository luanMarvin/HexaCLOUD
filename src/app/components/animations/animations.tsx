import type { Transition } from 'motion';
import { cubicBezier } from 'motion';

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

export const slideUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 }
}

export const slideDown = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 }
}

export const slideLeft = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 }
}

export const slideRight = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 }
}

export const easeIn: Transition = {
  duration: 1.2,
  ease: cubicBezier(0.39, 0.24, 0.3, 1)
}

export const easeOut: Transition = {
  duration: 1.2,
  ease: cubicBezier(0.25, 0.1, 0.25, 1)
}