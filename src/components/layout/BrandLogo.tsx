type BrandLogoProps = {
  className?: string;
  textClassName?: string;
  onClick?: () => void;
};

const BRAND_NAME = 'ايمان';

export function BrandLogo({ className = '', textClassName = '', onClick }: BrandLogoProps) {
  return (
    <a
      href="#top"
      aria-label={BRAND_NAME}
      className={['brand-logo relative flex items-center justify-center no-underline', className]
        .filter(Boolean)
        .join(' ')}
      onClick={onClick}
    >
      <span
        dir="rtl"
        lang="ar"
        className={['brand-logo__text h-full w-full', textClassName]
          .filter(Boolean)
          .join(' ')}
      >
        {BRAND_NAME}
      </span>
    </a>
  );
}
