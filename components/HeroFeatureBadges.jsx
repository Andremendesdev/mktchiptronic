"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Cpu } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Qualidade",
    subtitle: "Que conecta",
  },
  {
    icon: Award,
    title: "Desempenho",
    subtitle: "Que impressiona",
  },
  {
    icon: Cpu,
    title: "Tecnologia",
    subtitle: "Que evolui",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const HeroFeatureBadges = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-4 md:mt-5 w-full grid grid-cols-3 divide-x divide-white/10"
    >
      {features.map(({ icon: Icon, title, subtitle }) => (
        <motion.div
          key={title}
          variants={itemVariants}
          className="flex flex-col items-center text-center px-2 sm:px-4 md:px-6"
        >
          <div className="relative flex items-center justify-center w-11 h-11 md:w-14 md:h-14 mb-2 md:mb-3">
            <div className="absolute inset-0 rounded-full bg-sky-700/35 blur-xl scale-150" />
            <div className="absolute inset-0 rounded-full bg-sky-800/25 blur-md scale-125" />
            <div className="absolute inset-1 rounded-full border border-sky-700/55 shadow-[0_0_12px_rgba(3,105,161,0.85),inset_0_0_8px_rgba(7,89,133,0.45)]" />
            <Icon
              className="relative w-5 h-5 md:w-7 md:h-7 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.7),0_0_14px_rgba(3,105,161,0.95),0_0_28px_rgba(7,89,133,0.9),0_0_48px_rgba(3,105,161,0.65)]"
              strokeWidth={1.5}
            />
          </div>
          <p className="text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-[0.15em] text-white uppercase leading-snug [text-shadow:0_0_8px_rgba(3,105,161,0.95),0_0_18px_rgba(7,89,133,0.85),0_0_36px_rgba(3,105,161,0.55)]">
            {title}
          </p>
          <p className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.12em] text-white/85 uppercase leading-snug mt-0.5 [text-shadow:0_0_6px_rgba(3,105,161,0.9),0_0_14px_rgba(7,89,133,0.75),0_0_24px_rgba(3,105,161,0.5)]">
            {subtitle}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroFeatureBadges;
