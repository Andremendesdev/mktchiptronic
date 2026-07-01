"use client";

const SectionTransition = () => {
  return (
    <div
      className="relative h-8 md:h-10 overflow-hidden pointer-events-none bg-gradient-to-b from-background via-surface-container-low to-background"
      aria-hidden="true"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-500/15 to-transparent" />
    </div>
  );
};

export default SectionTransition;
