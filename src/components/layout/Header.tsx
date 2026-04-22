import { useEffect, useState } from 'react';

import { useI18n } from '../../i18n/I18nProvider';
import { BrandLogo } from './BrandLogo';

export function Header() {
  const { messages, isRTL } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const logo = (
    <div className="relative shrink-0">
      <BrandLogo
        className="h-10 sm:h-11 md:h-12"
        textClassName="text-[1.5rem] sm:text-[1.7rem] md:text-[1.9rem]"
        onClick={() => setIsMenuOpen(false)}
      />
    </div>
  );

  return (
    <header
      aria-label="Desktop"
      className="content-start items-start relative flex h-min w-full justify-center"
    >
      <div className="pointer-events-none absolute bottom-[-162px] left-[50%] z-[1] w-full shrink-[0] translate-x-[-50%]"></div>
      <div
        aria-label="Container"
        className="relative flex h-min w-full max-w-[1360px] mx-auto flex-col gap-3 px-4 pt-4 pb-0 md:flex-row md:items-center md:justify-between md:gap-8 md:px-10 md:pt-[45px] lg:gap-12"
      >
        <div
          aria-label="Top bar"
          className="relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-[0.6rem] bg-[rgba(0,0,0,0.6)] px-4 py-1.5 shadow-[0_22px_50px_rgba(0,0,0,0.34)] backdrop-blur-[18px] md:w-auto md:grow md:basis-0 md:rounded-none md:bg-transparent md:px-0 md:py-0 md:shadow-none md:backdrop-blur-none"
        >
          {logo}

          <button
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg text-white md:hidden"
          >
            <span
              className={[
                'absolute h-[1.75px] w-[24px] rounded-full bg-white transition-transform duration-300',
                isMenuOpen ? 'rotate-45' : '-translate-y-[6px]',
              ]
                .filter(Boolean)
                .join(' ')}
            ></span>
            <span
              className={[
                'absolute h-[1.75px] w-[24px] rounded-full bg-white transition-all duration-300',
                isMenuOpen ? 'scale-x-0 opacity-0' : 'opacity-100',
              ]
                .filter(Boolean)
                .join(' ')}
            ></span>
            <span
              className={[
                'absolute h-[1.75px] w-[24px] rounded-full bg-white transition-transform duration-300',
                isMenuOpen ? '-rotate-45' : 'translate-y-[6px]',
              ]
                .filter(Boolean)
                .join(' ')}
            ></span>
          </button>
        </div>

        <div
          className={[
            'hidden w-auto shrink-0 items-center justify-end md:flex',
            isRTL ? 'md:-translate-x-4 lg:-translate-x-6' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <nav
            aria-label={messages.aria.navigation}
            className="relative flex items-center justify-center gap-[18px] overflow-hidden lg:gap-[30px]"
          >
            {messages.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-label={item.label}
                className="nav-link relative flex size-min items-center justify-center gap-[10px] overflow-hidden p-[10px] text-[rgb(0,_0,_238)]"
              >
                <div className="relative flex flex-col justify-start whitespace-pre shrink-[0]">
                  <p className="font-medium text-[18px] leading-[18px] tracking-[-0.1px] text-white">
                    {item.label}
                  </p>
                </div>
              </a>
            ))}
          </nav>
        </div>

        {isMenuOpen ? (
          <div
            role="dialog"
            aria-modal="true"
            className="mobile-menu fixed inset-0 z-[45] md:hidden"
          >
            <div
              className="mobile-menu__backdrop absolute inset-0 bg-[rgba(11,11,15,0.62)] backdrop-blur-[18px]"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            <div className="mobile-menu__panel relative flex min-h-full flex-col px-6 pt-8 pb-12">
              <div className="mobile-menu__top flex items-center justify-between">
                {logo}
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setIsMenuOpen(false)}
                  className="relative inline-flex h-11 w-11 items-center justify-center text-white"
                >
                  <span className="absolute h-[1.5px] w-[24px] rotate-45 rounded-full bg-white"></span>
                  <span className="absolute h-[1.5px] w-[24px] -rotate-45 rounded-full bg-white"></span>
                </button>
              </div>

              <nav aria-label={messages.aria.navigation} className="mt-20 flex flex-col items-center gap-5 text-center">
                {messages.navigation.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-label={item.label}
                    onClick={() => setIsMenuOpen(false)}
                    className="mobile-menu__link font-medium leading-[1.08] tracking-[-0.3px] text-white/96"
                    style={{ animationDelay: `${180 + index * 70}ms` }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
