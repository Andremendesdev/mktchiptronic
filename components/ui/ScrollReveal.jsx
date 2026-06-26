"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
  const offset = offsets[direction] ?? offsets.up;
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;
