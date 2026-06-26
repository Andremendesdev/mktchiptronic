"use client";

import { Phone, Instagram, MapPin } from "lucide-react";
import Logo from "./Logo";
import ScrollReveal from "./ui/ScrollReveal";
import NeonLights from "./effects/NeonLights";
import FloatingParticles from "./effects/FloatingParticles";

const PHONE = "(14) 99999-9999";
const PHONE_HREF = "tel:+5514999999999";
const INSTAGRAM = "@chiptronic";
const INSTAGRAM_URL = "https://instagram.com/chiptronic";
const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Piraju,+SP,+Brasil&hl=pt-BR&z=13&ie=UTF8&iwloc=B&output=embed";
const MAP_LINK = "https://maps.google.com/?q=Piraju,+SP,+Brasil";

const Footer = () => {
  return (
    <footer id="contato" className="relative mt-margin-desktop overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <NeonLights />
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-gutter md:px-margin-desktop py-14 sm:py-16 md:py-20 pb-24 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12">
          <ScrollReveal className="lg:col-span-4 flex flex-col gap-4">
            <a href="#" aria-label="Chiptronic — início" className="w-fit">
              <Logo className="h-30 md:h-[132px] w-auto" />
            </a>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-xs">
              Tecnologia automotiva em Piraju e região. Cursos gratuitos e
              soluções para sua oficina.
            </p>
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-sky-500">
              Piraju — SP e região
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="lg:col-span-3 flex flex-col gap-4">
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-sky-500">
              Contato
            </p>

            <a
              href={PHONE_HREF}
              className="glass-panel rounded-xl p-4 sm:p-5 flex items-center gap-4 group hover:border-sky-500/20 transition-colors"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                <Phone
                  size={18}
                  className="text-sky-500 group-hover:drop-shadow-[0_0_8px_rgba(14,165,233,0.8)] transition-all"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-on-surface-variant">
                  Telefone
                </p>
                <p className="text-sm sm:text-base text-on-surface font-semibold mt-0.5">
                  {PHONE}
                </p>
              </div>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-xl p-4 sm:p-5 flex items-center gap-4 group hover:border-sky-500/20 transition-colors"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                <Instagram
                  size={18}
                  className="text-sky-500 group-hover:drop-shadow-[0_0_8px_rgba(14,165,233,0.8)] transition-all"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-on-surface-variant">
                  Instagram
                </p>
                <p className="text-sm sm:text-base text-on-surface font-semibold mt-0.5">
                  {INSTAGRAM}
                </p>
              </div>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-sky-500">
                Onde estamos
              </p>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-on-surface-variant hover:text-sky-500 transition-colors"
              >
                <MapPin size={13} />
                Abrir no Maps
              </a>
            </div>

            <div className="glass-panel rounded-xl overflow-hidden ring-1 ring-white/5 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[220px]">
              <iframe
                src={MAP_EMBED_URL}
                title="Localização Chiptronic em Piraju, SP"
                className="w-full h-full min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] border-0 grayscale-[30%] contrast-[1.1] opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-10 md:mt-12 pt-6 border-t border-white/10 flex flex-col items-center gap-3 text-center">
          <p className="text-xs sm:text-sm text-on-surface-variant">
            © {new Date().getFullYear()} Chiptronic. Todos os direitos
            reservados.
          </p>
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-sky-500 font-medium">
            Piraju-SP · Since 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
