"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50 bg-transparent pt-0 pb-0 pointer-events-none"
    >
      <div className="flex justify-center items-start px-gutter md:px-margin-desktop w-full max-w-container-max mx-auto leading-none">
        <a
          href="#inicio"
          className="shrink-0 block -mt-5 md:-mt-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded pointer-events-auto"
          aria-label="Chiptronic — início"
        >
          <Logo className="h-36 md:h-48 w-auto shrink-0 block" />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
