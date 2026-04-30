type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  onClick?: () => void;
};

const BRAND_NAME = '\u0646\u0648\u0631';
const LOGO_ALT = '\u0634\u0639\u0627\u0631 \u0646\u0648\u0631';
const LOGO_SRC = '/brand-logo.png';

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
        width="988"
        height="1080"
        decoding="async"
        className={['brand-logo__image h-full w-auto object-contain', imageClassName]
          .filter(Boolean)
          .join(' ')}
      />
    </a>
  );
}
