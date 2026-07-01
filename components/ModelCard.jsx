"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ScrollUnderline from "./ui/ScrollUnderline";

import { WHATSAPP_GENERAL_URL } from "@/lib/whatsapp";

const MetaChips = ({ meta }) => {
  const parts = meta.split(" · ").filter(Boolean);

  return (
    <ul
      className="flex flex-wrap justify-center gap-1.5 mt-2.5"
      aria-label="Detalhes do curso"
    >
      {parts.map((part) => (
        <li
          key={part}
          className="text-xs font-medium text-neutral-600 bg-neutral-100 border border-neutral-200/90 rounded px-2 py-0.5 leading-tight"
        >
          {part}
        </li>
      ))}
    </ul>
  );
};

const ModelCard = ({
  badge,
  imageSrc,
  imageAlt,
  name,
  description,
  meta,
  highlight,
  highlightLabel = "Ideal para começar",
  ctaText,
  ctaStyle,
  ctaHref,
  cardHighlight,
  light = false,
  compact = false,
}) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const enableTilt = !compact;

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTilt({ x: rotateX, y: rotateY });
    el.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
    el.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const showBadge = badge && !compact;
  const showDescription = description && !compact;
  const showMeta = meta && compact;

  return (
    <article className={cn("h-full", enableTilt && "card-3d")}>
      <div
        ref={cardRef}
        onMouseMove={enableTilt ? handleMouseMove : undefined}
        onMouseLeave={enableTilt ? handleMouseLeave : undefined}
        style={
          enableTilt
            ? { transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }
            : undefined
        }
        className={cn(
          "rounded-xl flex flex-col relative overflow-hidden h-full",
          enableTilt && "card-3d-inner group",
          !enableTilt && "group",
          compact ? "p-4 md:p-5 gap-4" : "p-7 md:p-8 gap-6",
          light
            ? cn(
                "bg-white shadow-lg shadow-neutral-200/60",
                compact ? "border border-sky-600/40" : "border border-neutral-200"
              )
            : "glass-panel",
          cardHighlight
        )}
      >
        {light ? null : <div className="card-3d-shine" />}

        {highlight && compact ? (
          <span className="absolute top-3 left-3 z-10 text-[11px] font-semibold tracking-wide uppercase text-sky-800 bg-sky-100 border border-sky-200/90 px-2 py-0.5 rounded-full">
            {highlightLabel}
          </span>
        ) : null}

        {showBadge ? (
          <div className="absolute top-6 right-6 z-10">
            <span
              className={cn(
                "font-label-md text-label-md px-3 py-1 rounded-full",
                badge.style
              )}
            >
              {badge.text}
            </span>
          </div>
        ) : null}

        <div
          className={cn(
            "relative rounded-xl flex items-center justify-center overflow-hidden",
            compact ? "h-48 md:h-52 p-0" : "h-64 p-4",
            light
              ? compact
                ? "bg-neutral-900 ring-1 ring-neutral-800"
                : "bg-neutral-100 ring-1 ring-neutral-200"
              : "bg-surface-container-lowest ring-1 ring-white/5"
          )}
        >
          <Image
            key={imageSrc}
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={compact ? 208 : 256}
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized={compact}
            className={cn(
              "transition-transform duration-500 motion-reduce:transition-none group-hover:scale-105 motion-reduce:group-hover:scale-100",
              compact
                ? "h-full w-full object-cover object-center opacity-100 group-hover:opacity-100"
                : "max-h-full w-auto object-contain group-hover:scale-105",
              !compact &&
                (light
                  ? "opacity-95 group-hover:opacity-100"
                  : "mix-blend-screen opacity-80 group-hover:opacity-100")
            )}
          />
        </div>

        <div className={cn("flex-grow", compact && "text-center")}>
          {compact ? (
            <h3 className="text-base md:text-lg font-semibold font-headline-md leading-snug text-neutral-900 text-balance">
              {name}
            </h3>
          ) : (
            <ScrollUnderline
              textClassName={cn(
                "font-headline-md text-headline-md",
                light && "text-neutral-900"
              )}
            >
              {name}
            </ScrollUnderline>
          )}
          {showMeta ? <MetaChips meta={meta} /> : null}
          {showDescription ? (
            <p
              className={cn(
                "font-body-md text-body-md mt-2",
                light ? "text-neutral-600" : "text-on-surface-variant"
              )}
            >
              {description}
            </p>
          ) : null}
        </div>

        <a
          href={ctaHref || WHATSAPP_GENERAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "w-full inline-flex items-center justify-center font-label-md text-label-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500",
            compact
              ? "min-h-11 py-2.5 rounded-md mt-auto transition-colors duration-200 active:bg-green-700"
              : "min-h-11 py-3 rounded-full mt-4 shadow-sm hover:shadow-md transition-all active:scale-[0.98]",
            light ? "focus-visible:ring-offset-white" : "focus-visible:ring-offset-surface",
            ctaStyle
          )}
          aria-label={`${ctaText || "Inscrever no WhatsApp"}: ${name}`}
        >
          {ctaText || "Saiba Mais"}
        </a>
      </div>
    </article>
  );
};

export default ModelCard;
