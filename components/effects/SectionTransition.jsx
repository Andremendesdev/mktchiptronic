"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import NeonLights from "./NeonLights";
import FloatingParticles from "./FloatingParticles";

const SectionTransition = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const ySlow = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const yFast = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4]);

  return (
    <div
      ref={ref}
      className="relative h-16 md:h-24 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

      <motion.div style={{ y: ySlow, opacity }} className="absolute inset-0">
        <NeonLights />
      </motion.div>

      <motion.div style={{ y: yFast, opacity }} className="absolute inset-0">
        <FloatingParticles />
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
    </div>
  );
};

export default SectionTransition;
