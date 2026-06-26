"use client";

import { motion } from "framer-motion";
import {
  BatteryCharging,
  Zap,
  PiggyBank,
  Leaf,
  Wrench,
} from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import ScrollUnderline from "./ui/ScrollUnderline";
import NeonLights from "./effects/NeonLights";
import FloatingParticles from "./effects/FloatingParticles";
import { cn } from "@/lib/utils";

const benefits = [
  {
    id: "range",
    icon: BatteryCharging,
    title: "Autonomia de até 75 km",
    description:
      "Bateria de alta densidade para ir e voltar no dia todo sem parar no posto.",
    span: "md:col-span-2 md:row-span-2",
    featured: true,
    accent: "from-sky-500/20 to-sky-500/5",
  },
  {
    id: "charge",
    icon: Zap,
    title: "Recarga rápida",
    description: "Tomada comum. Em poucas horas, você está de volta à rua.",
    span: "md:col-span-1",
    accent: "from-sky-500/15 to-transparent",
  },
  {
    id: "economy",
    icon: PiggyBank,
    title: "Economia com combustível",
    description:
      "Cada km elétrico custa uma fração do que você gastaria de gasolina.",
    span: "md:col-span-1",
    accent: "from-sky-500/10 to-transparent",
  },
  {
    id: "eco",
    icon: Leaf,
    title: "Sustentável e sem emissão",
    description:
      "Zero poluentes no escape. Mobilidade limpa para você e para a cidade.",
    span: "md:col-span-1",
    accent: "from-emerald-400/10 to-transparent",
  },
  {
    id: "support",
    icon: Wrench,
    title: "Garantia e assistência técnica",
    description:
      "Suporte local em Piraju e região. Manutenção sem dor de cabeça.",
    span: "md:col-span-1",
    accent: "from-sky-500/15 to-transparent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const SHOW_BENEFITS = false;

const BenefitsSection = () => {
  if (!SHOW_BENEFITS) return null;

  return (
    <section
      id="benefits"
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <NeonLights />
        <FloatingParticles count={16} opacityScale={0.45} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-container-low/40 to-background" />
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-gutter md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10 sm:mb-14">
          <ScrollReveal className="lg:col-span-5 lg:sticky lg:top-28">
            <ScrollUnderline
              textClassName="font-headline-lg-mobile md:font-headline-lg text-[1.75rem] sm:text-headline-lg-mobile md:text-headline-lg leading-[1.15]"
            >
              Por que escolher a{" "}
              <span className="text-neon-sky-soft">Chiptronic?</span>
            </ScrollUnderline>
            <p className="mt-4 text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-md">
              Tecnologia automotiva com cursos gratuitos, equipamentos de
              diagnóstico e suporte de quem está na sua região.
            </p>

            <div className="hidden lg:flex mt-8 items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-sky-500/50 to-transparent" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-sky-500/60">
                5 motivos
              </span>
            </div>
          </ScrollReveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 auto-rows-fr gap-3 sm:gap-4 md:gap-5"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <motion.article
                  key={benefit.id}
                  variants={cardVariants}
                  className={cn(
                    "benefit-card group glass-panel rounded-xl sm:rounded-2xl p-5 sm:p-6 relative overflow-hidden transition-colors duration-500 hover:border-sky-500/25",
                    benefit.span,
                    benefit.featured && "sm:min-h-[220px] md:min-h-[280px]"
                  )}
                >
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-60 group-hover:opacity-100 transition-opacity duration-500",
                      benefit.accent
                    )}
                  />
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between gap-3 mb-4 sm:mb-5">
                      <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 shrink-0">
                        <div className="absolute inset-0 rounded-xl bg-sky-500/10 blur-md scale-125 group-hover:bg-sky-500/20 transition-colors duration-500" />
                        <div className="absolute inset-0 rounded-xl border border-sky-500/20 group-hover:border-sky-500/40 transition-colors duration-500" />
                        <Icon
                          className="relative w-5 h-5 sm:w-6 sm:h-6 text-sky-500 drop-shadow-[0_0_10px_rgba(14,165,233,0.7)]"
                          strokeWidth={1.5}
                        />
                      </div>
                      {benefit.featured && (
                        <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.15em] uppercase text-sky-500 bg-sky-500/10 border border-sky-500/25 px-2 py-0.5 rounded-full">
                          Destaque
                        </span>
                      )}
                    </div>

                    <ScrollUnderline
                      textClassName={cn(
                        "font-headline-md leading-snug",
                        benefit.featured
                          ? "text-lg sm:text-xl md:text-2xl"
                          : "text-base sm:text-lg"
                      )}
                    >
                      {benefit.title}
                    </ScrollUnderline>

                    <p
                      className={cn(
                        "mt-2 text-on-surface-variant leading-relaxed flex-grow",
                        benefit.featured
                          ? "text-sm sm:text-base"
                          : "text-xs sm:text-sm"
                      )}
                    >
                      {benefit.description}
                    </p>

                    {benefit.featured && (
                      <p className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-black text-neon-sky-soft tabular-nums">
                        75
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-sky-500 ml-1">
                          km
                        </span>
                      </p>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
