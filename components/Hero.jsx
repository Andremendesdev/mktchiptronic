"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroFeatureBadges from "./HeroFeatureBadges";
import { useLoading } from "./LoadingProvider";

const WHATSAPP_URL = "https://wa.me/1234567890";

const Hero = () => {
  const { heroReady } = useLoading();

  return (
    <section
      id="inicio"
      className="relative min-h-[64svh] md:min-h-[620px] flex items-center pt-28 pb-10 md:pt-margin-desktop md:pb-12 px-gutter md:px-margin-desktop overflow-hidden -mt-20"
    >
      <div className="absolute inset-0 z-0 bg-surface-container-lowest">
        <motion.video
          initial={{ opacity: 0 }}
          animate={heroReady ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        >
          <source src="/herovid.mp4" type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-margin-desktop items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={heroReady ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start md:mt-20"
        >
          <h1 className="mt-8 md:mt-10 font-headline-xl text-on-surface leading-tight">
            <div className="text-[28px] md:text-[34px] leading-snug font-semibold max-w-xl">
              <span className="text-green-500">
                Cursos Gratuitos Chiptronic:
              </span>{" "}
              <span className="text-white">
                qualifique-se na tecnologia automotiva!
              </span>
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 md:mt-6 font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed"
          >
            Aprenda com conteúdos de alta qualidade e destaque-se.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-8 md:mt-6"
          >
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center gap-base font-label-md text-label-md bg-gradient-to-b from-green-400 to-green-600 text-white px-8 py-4 rounded-md w-full sm:w-auto shadow-[0_0_8px_rgba(74,222,128,0.25),0_0_16px_rgba(34,197,94,0.15)] hover:brightness-110 hover:scale-[1.02] hover:shadow-[0_0_10px_rgba(74,222,128,0.35),0_0_20px_rgba(34,197,94,0.2)] active:scale-[0.98] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Quero aprender agora!
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <div className="mt-8 md:mt-10 w-full">
            <HeroFeatureBadges />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
