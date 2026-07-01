"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "@/lib/motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

const offsets = {
  up: { y: 48 },
  down: { y: -48 },
  left: { x: -48 },
  right: { x: 48 },
  none: {},
};

const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  className,
  as = "div",
}) => {
  const reduced = useReducedMotion();
  const offset = offsets[direction] ?? offsets.up;
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      initial={reduced ? false : { opacity: 0, ...offset }}
      whileInView={reduced ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: reduced ? 0 : 0.75,
        delay: reduced ? 0 : delay,
        ease: EASE_OUT,
      }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;
