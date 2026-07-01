"use client";

import { motion } from "framer-motion";
import ModelCard from "./ModelCard";
import ScrollReveal from "./ui/ScrollReveal";
import ScrollUnderline from "./ui/ScrollUnderline";
import { EASE_OUT } from "@/lib/motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { courseWhatsAppUrl } from "@/lib/whatsapp";

const COURSE_CTA = "Inscrever no WhatsApp";
const COURSE_IMG_V = "3";

const courseGroups = [
  {
    id: "diagnostico",
    title: "Diagnóstico e OBD",
    description: "Leitura de falhas, scanner e equipamentos de varredura.",
    courses: [
      {
        id: "motodiag-live",
        name: "Motodiag Live",
        imageSrc: `/courses/motodiag-live.png?v=${COURSE_IMG_V}`,
        imageAlt: "Equipamento Motodiag Live",
        meta: "Online · 2h · Básico · Motodiag Live",
        highlight: true,
        highlightLabel: "Ideal para começar",
        ctaText: COURSE_CTA,
        ctaHref: courseWhatsAppUrl("Curso de utilização do Motodiag Live"),
        ctaStyle: "bg-green-500 text-white hover:bg-green-600",
      },
      {
        id: "obdmap",
        name: "OBDMAP",
        imageSrc: `/courses/obdmap.png?v=${COURSE_IMG_V}`,
        imageAlt: "Equipamento OBDMAP",
        meta: "Online · 2h · Básico · Leitura OBD",
        ctaText: COURSE_CTA,
        ctaHref: courseWhatsAppUrl("Curso de utilização do OBDMAP"),
        ctaStyle: "bg-green-500 text-white hover:bg-green-600",
      },
    ],
  },
  {
    id: "injecao",
    title: "Injeção eletrônica",
    description: "ECU, calibração e injeção avançada em motos.",
    courses: [
      {
        id: "ecu-test-3",
        name: "ECU Test 3 Infinity",
        imageSrc: `/courses/ecu-test-3.png?v=${COURSE_IMG_V}`,
        imageAlt: "Equipamento ECU Test 3 Infinity",
        meta: "Online · 3h · Intermediário · ECU Test 3",
        highlight: true,
        highlightLabel: "Próximo passo",
        ctaText: COURSE_CTA,
        ctaHref: courseWhatsAppUrl("Curso de utilização do ECU Test 3 Infinity"),
        ctaStyle: "bg-green-500 text-white hover:bg-green-600",
      },
      {
        id: "injecao-motos",
        name: "Injeção eletrônica avançada (motos)",
        imageSrc: `/courses/injecao-motos.png?v=${COURSE_IMG_V}`,
        imageAlt: "Curso de injeção eletrônica avançada para motos",
        meta: "Online · 4h · Avançado · Injeção motos",
        ctaText: COURSE_CTA,
        ctaHref: courseWhatsAppUrl(
          "Curso de Introdução a Injeção Eletrônica Avançada de Motos"
        ),
        ctaStyle: "bg-green-500 text-white hover:bg-green-600",
      },
    ],
  },
  {
    id: "diesel",
    title: "Diesel e pós-tratamento",
    description: "Sistemas diesel e tecnologia SCR para linha pesada.",
    courses: [
      {
        id: "dieseldiag",
        name: "Dieseldiag",
        imageSrc: `/courses/dieseldiag.png?v=${COURSE_IMG_V}`,
        imageAlt: "Equipamento Dieseldiag",
        meta: "Online · 3h · Intermediário · Sistemas diesel",
        highlight: true,
        highlightLabel: "Para oficina diesel",
        ctaText: COURSE_CTA,
        ctaHref: courseWhatsAppUrl("Curso de utilização do Dieseldiag"),
        ctaStyle: "bg-green-500 text-white hover:bg-green-600",
      },
      {
        id: "pos-tratamento-scr",
        name: "Pós-tratamento SCR",
        imageSrc: `/courses/pos-tratamento-scr.png?v=${COURSE_IMG_V}`,
        imageAlt: "Curso de Pós Tratamento SCR",
        meta: "Online · 4h · Avançado · Pós-tratamento",
        ctaText: COURSE_CTA,
        ctaHref: courseWhatsAppUrl("Curso de Pós Tratamento SCR"),
        ctaStyle: "bg-green-500 text-white hover:bg-green-600",
      },
    ],
  },
];

const ModelsGrid = () => {
  const reduced = useReducedMotion();

  const itemVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduced
        ? { duration: 0 }
        : { duration: 0.45, ease: EASE_OUT },
    },
  };

  return (
    <section
      id="models"
      className="relative py-16 md:py-20 overflow-hidden bg-neutral-50"
      aria-labelledby="courses-heading"
    >
      <div className="relative z-10 px-gutter md:px-margin-desktop max-w-container-max mx-auto">
        <ScrollReveal className="mb-8 md:mb-10 flex flex-col gap-gutter border-b border-neutral-200 pb-gutter">
          <p className="section-eyebrow text-sky-600">Catálogo de cursos</p>
          <div>
            <ScrollUnderline
              textClassName="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-[2.125rem] tracking-wide text-neutral-900"
            >
              <h2 id="courses-heading" className="inline">
                Escolha por área de atuação
              </h2>
            </ScrollUnderline>
            <p className="mt-3 font-body-md text-body-md text-neutral-600 max-w-[48ch] leading-relaxed">
              Cursos organizados por especialidade. Novo na Chiptronic? Comece
              em <strong className="font-semibold text-neutral-800">Diagnóstico e OBD</strong>.
              Toque em &ldquo;{COURSE_CTA}&rdquo; — o WhatsApp abre com o curso
              já preenchido.
            </p>
          </div>

          <nav
            aria-label="Ir para área de curso"
            className="flex flex-wrap gap-2 pt-1"
          >
            {courseGroups.map((group) => (
              <a
                key={group.id}
                href={`#courses-${group.id}`}
                className="text-xs sm:text-sm font-medium text-sky-800 bg-sky-50 border border-sky-200/90 rounded-full px-3 py-1.5 hover:bg-sky-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50"
              >
                {group.title}
              </a>
            ))}
          </nav>
        </ScrollReveal>

        <div className="flex flex-col gap-12 md:gap-14">
          {courseGroups.map((group) => (
            <motion.section
              key={group.id}
              id={`courses-${group.id}`}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE_OUT }}
              aria-labelledby={`courses-${group.id}-heading`}
            >
              <div className="mb-5 md:mb-6">
                <h3
                  id={`courses-${group.id}-heading`}
                  className="text-lg md:text-xl font-semibold text-neutral-900"
                >
                  {group.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-600 max-w-[50ch]">
                  {group.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {group.courses.map((course) => (
                  <motion.div
                    key={course.id}
                    variants={itemVariants}
                    initial={reduced ? false : "hidden"}
                    whileInView={reduced ? undefined : "visible"}
                    viewport={{ once: true, margin: "-40px" }}
                    className="h-full"
                  >
                    <ModelCard {...course} light compact />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsGrid;
