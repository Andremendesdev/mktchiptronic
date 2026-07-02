"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroFeatureBadges from "./HeroFeatureBadges";
import { useLoading } from "./LoadingProvider";
import { EASE_OUT } from "@/lib/motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

import { WHATSAPP_GENERAL_URL } from "@/lib/whatsapp";

// Bump ao trocar herovid.mp4 ou fundo.png para invalidar cache do Safari iOS.
const HERO_ASSETS_V = "2";
const HERO_VIDEO_SRC = `/herovid.mp4?v=${HERO_ASSETS_V}`;
const HERO_POSTER_SRC = `/fundo.png?v=${HERO_ASSETS_V}`;

const Hero = () => {
  const { heroReady } = useLoading();
  const reduced = useReducedMotion();
  const videoRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoFailed) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
      video.play().catch(() => {});
    };

    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
    };
  }, [videoFailed]);

  useEffect(() => {
    if (!heroReady || videoFailed) return;
    videoRef.current?.play().catch(() => {});
  }, [heroReady, videoFailed]);

  return (
    <section
      id="inicio"
      className="relative min-h-[64svh] md:min-h-[620px] flex items-center pt-28 pb-10 md:pt-margin-desktop md:pb-12 px-gutter md:px-margin-desktop overflow-hidden -mt-20"
    >
      <div className="absolute inset-0 z-0 bg-surface-container-lowest">
        {!videoFailed ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={HERO_POSTER_SRC}
            onError={() => setVideoFailed(true)}
            className="absolute inset-0 w-full h-full min-w-full min-h-full object-cover object-center brightness-100 contrast-100 saturate-100 md:brightness-[1.06] md:contrast-[1.04] md:saturate-[1.05]"
            aria-hidden="true"
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${HERO_POSTER_SRC})` }}
            aria-hidden="true"
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent md:via-background/25"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent md:from-background/35"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-container-max mx-auto w-full">
        <motion.div
          initial={reduced ? false : { opacity: 0, x: -40 }}
          animate={
            heroReady || reduced
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: -40 }
          }
          transition={{
            duration: reduced ? 0 : 0.8,
            delay: reduced ? 0 : 0.1,
            ease: EASE_OUT,
          }}
          className="flex flex-col items-start max-w-xl md:max-w-2xl md:mt-20"
        >
          <h1 className="mt-8 md:mt-10 font-headline-xl text-on-surface leading-tight [text-shadow:0_2px_18px_rgba(0,0,0,0.85),0_1px_4px_rgba(0,0,0,0.95)]">
            <span className="block text-[28px] md:text-[34px] leading-snug font-semibold">
              <span className="text-green-500">Cursos gratuitos Chiptronic:</span>{" "}
              <span className="text-white">
                diagnóstico, injeção e diesel na prática.
              </span>
            </span>
          </h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={
              heroReady || reduced
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 24 }
            }
            transition={{
              duration: reduced ? 0 : 0.6,
              delay: reduced ? 0 : 0.35,
              ease: EASE_OUT,
            }}
            className="mt-6 md:mt-5 font-body-lg text-body-lg text-on-surface-variant max-w-[38ch] leading-relaxed [text-shadow:0_1px_14px_rgba(0,0,0,0.9),0_1px_3px_rgba(0,0,0,0.95)]"
          >
            Aprenda a operar Motodiag, ECU Test, Dieseldiag e outros
            equipamentos — com a equipe Chiptronic, sem taxa de inscrição.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={
              heroReady || reduced
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{
              duration: reduced ? 0 : 0.5,
              delay: reduced ? 0 : 0.45,
              ease: EASE_OUT,
            }}
            className="mt-6 md:mt-5 w-full sm:w-auto"
          >
            <a
              href={WHATSAPP_GENERAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-11 font-label-md text-label-md bg-gradient-to-b from-green-400 to-green-600 text-white px-8 py-3 rounded-md w-full sm:w-auto shadow-[0_4px_12px_rgba(0,0,0,0.35)] hover:brightness-110 hover:scale-[1.02] hover:shadow-[0_0_10px_rgba(74,222,128,0.35),0_0_20px_rgba(34,197,94,0.2),0_6px_16px_rgba(0,0,0,0.35)] active:scale-[0.98] active:brightness-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none motion-reduce:hover:scale-100"
            >
              Inscrever pelo WhatsApp
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </motion.div>

          <div className="mt-8 md:mt-10 w-full max-w-2xl">
            <HeroFeatureBadges />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
