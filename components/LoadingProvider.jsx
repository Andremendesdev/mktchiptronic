"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "./SplashScreen";

const LoadingContext = createContext({
  heroReady: false,
});

export const useLoading = () => useContext(LoadingContext);

const MIN_SPLASH_MS = 900;
const FADE_MS = 750;

const SplashOverlay = ({ visible, fading }) => {
  return (
    <AnimatePresence>
      {visible && (
        <div
          className={`fixed inset-0 z-[100] ${fading ? "pointer-events-none" : "pointer-events-auto"}`}
        >
          <SplashScreen fading={fading} />
        </div>
      )}
    </AnimatePresence>
  );
};

export const LoadingProvider = ({ children }) => {
  const [phase, setPhase] = useState("loading");
  const heroReady = phase !== "loading";

  useEffect(() => {
    const start = Date.now();
    let fadeTimer;
    let doneTimer;

    const beginTransition = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_SPLASH_MS - elapsed);

      fadeTimer = setTimeout(() => setPhase("fading"), remaining);
      doneTimer = setTimeout(() => setPhase("done"), remaining + FADE_MS);
    };

    const onLoad = () => beginTransition();

    if (document.readyState === "complete") {
      beginTransition();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ heroReady }}>
      <SplashOverlay visible={phase !== "done"} fading={phase === "fading"} />
      {children}
    </LoadingContext.Provider>
  );
};
