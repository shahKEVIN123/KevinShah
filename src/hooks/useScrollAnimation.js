import { useReducedMotion } from 'framer-motion';

export const useScrollAnimation = () => {
  const shouldReduceMotion = useReducedMotion();

  // Subtle fadeInUp animation
  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 30 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: shouldReduceMotion ? 0.01 : 0.7, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  // Stagger container
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.05
      }
    }
  };

  // Slide in from left
  const slideInLeft = {
    hidden: { 
      opacity: 0, 
      x: shouldReduceMotion ? 0 : -40 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: shouldReduceMotion ? 0.01 : 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  // Slide in from right
  const slideInRight = {
    hidden: { 
      opacity: 0, 
      x: shouldReduceMotion ? 0 : 40 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: shouldReduceMotion ? 0.01 : 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  // Scale reveal for images and cards
  const scaleReveal = {
    hidden: { 
      opacity: 0, 
      scale: shouldReduceMotion ? 1 : 0.95 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: shouldReduceMotion ? 0.01 : 0.85, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return {
    shouldReduceMotion,
    fadeInUp,
    staggerContainer,
    slideInLeft,
    slideInRight,
    scaleReveal
  };
};
