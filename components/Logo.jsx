const Logo = ({ className = "h-10 md:h-12 w-auto shrink-0" }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png?v=5"
      alt="Chiptronic"
      width={729}
      height={198}
      className={className}
      decoding="async"
    />
  );
};

export default Logo;
