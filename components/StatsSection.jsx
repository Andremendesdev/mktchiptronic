"use client";

import ScrollReveal from "./ui/ScrollReveal";
import NeonLights from "./effects/NeonLights";
import FloatingParticles from "./effects/FloatingParticles";

const StatsSection = () => {
  return (
    <section id="stats" className="relative py-10 sm:py-14 md:py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <NeonLights />
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-gutter md:px-margin-desktop">
        <ScrollReveal className="text-center">
          <p className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em] uppercase text-sky-500 mb-2 sm:mb-3">
            As melhores soluções do mercado para sua oficina.
          </p>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-[2rem] sm:text-[2.25rem] md:text-[2.75rem] text-on-surface leading-tight px-2">
            Cursos gratuitos
          </h2>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StatsSection;
