"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";
import FloatingParticles from "./effects/FloatingParticles";

const CURTAIN_TRANSITION = { duration: 0.75, ease: [0.22, 1, 0.36, 1] };

const SplashBackground = () => (
  <div className="fixed inset-0 pointer-events-none bg-background" aria-hidden="true">
    <FloatingParticles quickStart />
  </div>
);

const SplashLogo = () => (
  <div className="fixed inset-0 z-10 flex items-center justify-center pointer-events-none">
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <Logo className="h-[220px] md:h-[240px] w-auto shrink-0 block" />
    </motion.div>
  </div>
);

const CurtainHalf = ({ fading, position }) => {
  const isTop = position === "top";

  return (
    <motion.div
      className={`fixed left-0 right-0 h-1/2 z-[100] overflow-hidden ${
        isTop ? "top-0" : "bottom-0"
      }`}
      initial={false}
      animate={{ y: fading ? (isTop ? "-100%" : "100%") : "0%" }}
      transition={CURTAIN_TRANSITION}
    >
      <SplashBackground />
      <SplashLogo />
    </motion.div>
  );
};

const SplashScreen = ({ fading = false }) => {
  return (
    <div aria-live="polite" aria-busy={!fading} aria-label="Carregando">
      <CurtainHalf fading={fading} position="top" />
      <CurtainHalf fading={fading} position="bottom" />
    </div>
  );
};

export default SplashScreen;
