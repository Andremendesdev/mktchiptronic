"use client";

import { motion } from "framer-motion";
import ModelCard from "./ModelCard";
import ScrollReveal from "./ui/ScrollReveal";
import ScrollUnderline from "./ui/ScrollUnderline";

const WHATSAPP_BASE = "https://wa.me/1234567890";

const courseWhatsApp = (courseName) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(`Olá! Tenho interesse no ${courseName}.`)}`;

const coursesData = [
  {
    id: "motodiag-live",
    name: "Curso de utilização do Motodiag Live",
    imageSrc: "/courses/motodiag-live.png",
    imageAlt: "Equipamento Motodiag Live",
    ctaText: "Eu quero",
    ctaHref: courseWhatsApp("Curso de utilização do Motodiag Live"),
    ctaStyle: "bg-green-500 text-white hover:bg-green-600",
  },
  {
    id: "ecu-test-3",
    name: "Curso de utilização do ECU Test 3 Infinity",
    imageSrc: "/courses/ecu-test-3.png",
    imageAlt: "Equipamento ECU Test 3 Infinity",
    ctaText: "Eu quero",
    ctaHref: courseWhatsApp("Curso de utilização do ECU Test 3 Infinity"),
    ctaStyle: "bg-green-500 text-white hover:bg-green-600",
  },
  {
    id: "dieseldiag",
    name: "Curso de utilização do Dieseldiag",
    imageSrc: "/courses/dieseldiag.png",
    imageAlt: "Equipamento Dieseldiag",
    ctaText: "Eu quero",
    ctaHref: courseWhatsApp("Curso de utilização do Dieseldiag"),
    ctaStyle: "bg-green-500 text-white hover:bg-green-600",
  },
  {
    id: "obdmap",
    name: "Curso de utilização do OBDMAP",
    imageSrc: "/courses/obdmap.png",
    imageAlt: "Equipamento OBDMAP",
    ctaText: "Eu quero",
    ctaHref: courseWhatsApp("Curso de utilização do OBDMAP"),
    ctaStyle: "bg-green-500 text-white hover:bg-green-600",
  },
  {
    id: "pos-tratamento-scr",
    name: "Curso de Pós Tratamento SCR",
    imageSrc: "/courses/pos-tratamento-scr.png",
    imageAlt: "Curso de Pós Tratamento SCR",
    ctaText: "Eu quero",
    ctaHref: courseWhatsApp("Curso de Pós Tratamento SCR"),
    ctaStyle: "bg-green-500 text-white hover:bg-green-600",
  },
  {
    id: "injecao-motos",
    name: "Curso de Introdução a Injeção Eletrônica Avançada de Motos",
    imageSrc: "/courses/injecao-motos.png",
    imageAlt: "Curso de Introdução a Injeção Eletrônica Avançada de Motos",
    ctaText: "Eu quero",
    ctaHref: courseWhatsApp(
      "Curso de Introdução a Injeção Eletrônica Avançada de Motos"
    ),
    ctaStyle: "bg-green-500 text-white hover:bg-green-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const ModelsGrid = () => {
  return (
    <section
      id="models"
      className="relative py-16 md:py-20 overflow-hidden bg-neutral-50"
    >
      <div className="relative z-10 px-gutter md:px-margin-desktop max-w-container-max mx-auto">
        <ScrollReveal className="mb-margin-desktop flex flex-col md:flex-row justify-between items-end gap-gutter border-b border-neutral-200 pb-gutter">
          <div>
            <ScrollUnderline
              textClassName="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-[2.125rem] tracking-wide text-neutral-900"
            >
              Explore os cursos gratuitos que preparamos para você e aprimore suas
              habilidades:
            </ScrollUnderline>
          </div>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
        >
          {coursesData.map((course) => (
            <motion.div key={course.id} variants={itemVariants} className="h-full">
              <ModelCard {...course} light compact />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModelsGrid;
