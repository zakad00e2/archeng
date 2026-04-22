type BrandLogoProps = {
  className?: string;
  textClassName?: string;
  onClick?: () => void;
};

export function BrandLogo({ className = '', textClassName = '', onClick }: BrandLogoProps) {
  return (
    <a
      href="#top"
      aria-label="Sireen"
      className={['brand-logo relative flex items-center justify-center no-underline', className]
        .filter(Boolean)
        .join(' ')}
      onClick={onClick}
    >
      <span
        aria-label="sireen-logo"
        className={[
          'block whitespace-nowrap text-[1.8rem] font-semibold tracking-[0.12em] text-white',
          textClassName,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        Sireen
      </span>
    </a>
  );
}
