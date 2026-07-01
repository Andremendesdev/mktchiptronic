"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/useReducedMotion";

const ScrollUnderline = ({ children, className, textClassName }) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.45"],
  });

  const underlineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className={cn("relative w-fit max-w-full", className)}>
      <div className={cn("text-on-surface leading-snug", textClassName)}>
        {children}
      </div>
      {reduced ? (
        <span
          className="absolute left-0 -bottom-1 sm:-bottom-1.5 h-[2px] sm:h-[2.5px] w-full rounded-full bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500"
          aria-hidden="true"
        />
      ) : (
        <motion.span
          style={{ scaleX: underlineScale }}
          className="absolute left-0 -bottom-1 sm:-bottom-1.5 h-[2px] sm:h-[2.5px] w-full origin-left rounded-full bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.45)]"
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default ScrollUnderline;
