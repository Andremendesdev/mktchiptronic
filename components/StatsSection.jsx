"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";
import FloatingParticles from "./effects/FloatingParticles";
import { EASE_OUT } from "@/lib/motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

const stats = [
  {
    value: "6",
    label: "Cursos gratuitos",
    detail: "Motodiag, ECU Test, Dieseldiag, SCR e mais",
  },
  {
    value: "0",
    suffix: " R$",
    label: "Taxa de inscrição",
    detail: "Sem mensalidade nem taxa de matrícula",
  },
  {
    value: "100%",
    label: "Foco em bancada",
    detail: "Aulas com os equipamentos da sua bancada",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

const StatsSection = () => {
  const reduced = useReducedMotion();

  return (
    <section
      id="stats"
      className="relative py-10 sm:py-14 md:py-20 overflow-hidden border-y border-white/5"
      aria-labelledby="stats-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <FloatingParticles />
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-gutter md:px-margin-desktop">
        <ScrollReveal className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="section-eyebrow mb-2 sm:mb-3">
            Tecnologia automotiva para sua oficina
          </p>
          <h2
            id="stats-heading"
            className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-[2.75rem] text-on-surface leading-tight px-2"
          >
            Por que fazer os cursos Chiptronic
          </h2>
        </ScrollReveal>

        <motion.ul
          variants={reduced ? undefined : containerVariants}
          initial={reduced ? false : "hidden"}
          whileInView={reduced ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 list-none p-0 m-0"
        >
          {stats.map((stat) => (
            <motion.li
              key={stat.label}
              variants={reduced ? undefined : itemVariants}
              className="glass-panel rounded-xl p-5 sm:p-6 text-center h-full"
            >
              <p className="font-headline-lg text-[2.25rem] sm:text-[2.5rem] md:text-[2.75rem] text-sky-400 leading-none tabular-nums motion-reduce:text-sky-300">
                {stat.value}
                {stat.suffix ? (
                  <span className="text-lg sm:text-xl text-sky-500/90">
                    {stat.suffix}
                  </span>
                ) : null}
              </p>
              <p className="mt-2 font-body-md text-body-md font-semibold text-on-surface">
                {stat.label}
              </p>
              <p className="mt-1.5 text-sm text-on-surface-variant leading-relaxed max-w-[28ch] mx-auto">
                {stat.detail}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default StatsSection;
