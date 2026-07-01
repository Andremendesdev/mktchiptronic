"use client";

import { motion } from "framer-motion";
import { GraduationCap, Cpu, MapPin } from "lucide-react";
import { EASE_OUT } from "@/lib/motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

const features = [
  {
    icon: GraduationCap,
    title: "6 cursos",
    subtitle: "Gratuitos para oficina",
  },
  {
    icon: Cpu,
    title: "Equipamentos",
    subtitle: "Motodiag · ECU · Diesel",
  },
  {
    icon: MapPin,
    title: "Piraju · SP",
    subtitle: "Atendimento em Piraju e região",
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
    transition: { duration: 0.4, ease: EASE_OUT },
  },
};

const HeroFeatureBadges = () => {
  const reduced = useReducedMotion();

  return (
    <motion.div
      variants={reduced ? undefined : containerVariants}
      initial={reduced ? false : "hidden"}
      animate={reduced ? undefined : "visible"}
      className="w-full grid grid-cols-3 divide-x divide-white/10"
      role="list"
      aria-label="Destaques Chiptronic"
    >
      {features.map(({ icon: Icon, title, subtitle }) => (
        <motion.div
          key={title}
          variants={reduced ? undefined : itemVariants}
          role="listitem"
          className="flex flex-col items-center text-center px-2 sm:px-4 md:px-6"
        >
          <div className="relative flex items-center justify-center w-11 h-11 md:w-14 md:h-14 mb-2 md:mb-3">
            <div className="absolute inset-0 rounded-full bg-sky-700/35 blur-xl scale-150 motion-reduce:blur-none motion-reduce:opacity-60" />
            <div className="absolute inset-0 rounded-full bg-sky-800/25 blur-md scale-125 motion-reduce:hidden" />
            <div className="absolute inset-1 rounded-full border border-sky-700/55 shadow-[0_0_12px_rgba(3,105,161,0.85),inset_0_0_8px_rgba(7,89,133,0.45)] motion-reduce:shadow-none" />
            <Icon
              className="relative w-5 h-5 md:w-7 md:h-7 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.7),0_0_14px_rgba(3,105,161,0.95),0_0_28px_rgba(7,89,133,0.9),0_0_48px_rgba(3,105,161,0.65)] motion-reduce:drop-shadow-none"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>
          <p className="text-xs sm:text-sm font-semibold tracking-[0.1em] text-white uppercase leading-snug [text-shadow:0_0_8px_rgba(3,105,161,0.95),0_0_18px_rgba(7,89,133,0.85)] motion-reduce:[text-shadow:none]">
            {title}
          </p>
          <p className="text-xs tracking-[0.06em] text-white/90 uppercase leading-snug mt-0.5 motion-reduce:text-white/80">
            {subtitle}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroFeatureBadges;
