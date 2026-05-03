type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  onClick?: () => void;
};

const BRAND_NAME = 'ARDDAS';
const LOGO_ALT = 'ARDDAS logo';
const LOGO_SRC = '/arddas-logo.png';

export function BrandLogo({ className = '', imageClassName = '', onClick }: BrandLogoProps) {
  return (
    <a
      href="#top"
      aria-label={BRAND_NAME}
      className={['brand-logo relative flex items-center justify-center no-underline', className]
        .filter(Boolean)
        .join(' ')}
      onClick={onClick}
    >
      <img
        src={LOGO_SRC}
        alt={LOGO_ALT}
        width="1320"
        height="335"
        decoding="async"
        className={['brand-logo__image h-full w-full object-contain', imageClassName]
          .filter(Boolean)
          .join(' ')}
      />
    </a>
  );
}
