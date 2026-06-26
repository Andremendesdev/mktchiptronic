const buildParticles = (count, opacityScale = 1, variant = "sky", quickStart = false) => {
  const galaxyColors = [
    "bg-white",
    "bg-sky-300",
    "bg-blue-400",
    "bg-violet-400",
    "bg-purple-300",
    "bg-cyan-200",
  ];

  const skyColors = ["bg-sky-300", "bg-sky-400", "bg-sky-500", "bg-cyan-300"];

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i * 13 + 5) % 96}%`,
    top: `${(i * 19 + 11) % 88}%`,
    delay: quickStart ? `${(i * 0.08) % 0.8}s` : `${(i * 0.45) % 6}s`,
    duration: quickStart ? `${3.5 + (i % 4)}s` : `${7 + (i % 8)}s`,
    size: variant === "galaxy" ? 2 + (i % 6) : 2 + (i % 3),
    color:
      variant === "galaxy"
        ? galaxyColors[i % galaxyColors.length]
        : skyColors[i % skyColors.length],
  }));
};

const FloatingParticles = ({
  count = 28,
  opacityScale = 1,
  variant = "sky",
  quickStart = false,
  className = "",
}) => {
  const particles = buildParticles(count, opacityScale, variant, quickStart);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className={`floating-particle absolute rounded-full ${p.color} ${
            variant === "galaxy" ? "floating-particle-galaxy" : ""
          }`}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
