import { AnimatedHeading } from '../common/AnimatedHeading';
import { Reveal } from '../motion/Reveal';
import { useI18n } from '../../i18n/I18nProvider';

export function HeroSection() {
  const { messages, isRTL } = useI18n();
  const heroImageSrc =
    'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F323f47f0d426d31d8a4ad5fe3abfb0a6eeb2ec7d.png%3Fwidth=1200&height=1200?generation=1776714192013647&alt=media';

  const renderDesktopHeroImage = () => (
    <div
      aria-label="Image wrapper"
      className="hero-image-shell relative flex w-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_28px_70px_rgba(0,0,0,0.24)] md:h-full md:w-px md:grow-[0.45] md:basis-0 md:rounded-none md:border-0 md:bg-transparent md:p-[30px] md:shadow-none"
    >
      <div aria-label="Image" className="relative flex w-full flex-col overflow-hidden rounded-[1.15rem] md:h-full md:w-px md:flex-1 md:rounded-[0.625rem]">
        <div
          aria-label="Overlay - top"
          className="absolute left-0 top-0 z-[1] h-[18%] w-full shrink-[0] overflow-hidden opacity-[0.75]"
          style={{
            backgroundImage: 'linear-gradient(rgb(16, 16, 20) 0%, rgba(171, 171, 171, 0) 100%)',
          }}
        ></div>
        <div className="relative aspect-[1.02/1] w-full overflow-hidden rounded-[1.15rem] md:size-full md:aspect-auto md:rounded-[0.625rem]">
          <img
            src={heroImageSrc}
            alt=""
            className="block size-full rounded-[1.15rem] object-cover md:rounded-[0.625rem]"
          />
        </div>
      </div>
    </div>
  );

  const renderMobileHeroBackground = () => (
    <div aria-hidden="true" className="absolute inset-0 md:hidden">
      <img src={heroImageSrc} alt="" className="block size-full scale-[1.04] object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,14,0.18)_0%,rgba(10,10,14,0.22)_12%,rgba(10,10,14,0.46)_36%,rgba(10,10,14,0.76)_58%,rgba(10,10,14,0.96)_84%,rgba(10,10,14,1)_100%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%),linear-gradient(90deg,rgba(10,10,14,0.16)_0%,rgba(10,10,14,0.06)_28%,rgba(10,10,14,0.22)_100%)]"></div>
    </div>
  );

  const renderReviewCard = () => (
    <Reveal
      aria-label="Review"
      className="glass-panel hero-review flex h-min w-full flex-col justify-center gap-[10px] overflow-hidden rounded-[1.35rem] bg-[rgba(16,_16,_20,_0.3)]/30 px-5 pt-5 pb-6 backdrop-blur-[15px] md:w-[280px] md:rounded-[0.625rem] md:px-[30px] md:pt-5 md:pb-[30px]"
      delay={220}
    >
      <div className="relative shrink-[0]">
        <div aria-label="5 stars" className="content-center items-center relative flex size-min justify-center gap-[4px] overflow-hidden">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} aria-label="Star" className="relative aspect-square w-5 fill-white text-white shrink-[0]">
              <div className="size-full overflow-hidden fill-white">
                <img
                  src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F3d3c5d03fdc110ca1423062360bb8b2841a97ada.svg?generation=1776714192020343&alt=media"
                  alt=""
                  className="block size-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex w-full flex-col justify-start whitespace-pre-wrap shrink-[0]">
        <p className="text-[15px] leading-[24px] tracking-[-0.1px] text-white md:text-[16px] md:leading-[20.8px]" style={{ textAlign: 'start' }}>
          {messages.hero.review}
        </p>
      </div>
    </Reveal>
  );

  return (
    <section
      aria-label="Banner"
      className="hero-surface relative flex min-h-[100dvh] w-full flex-col items-center justify-end overflow-hidden bg-[rgb(10,_10,_14)] pt-[50px] md:justify-center"
    >
      {renderMobileHeroBackground()}

      <div
        aria-label="Background"
        className="absolute left-0 top-0 hidden size-full items-center justify-end overflow-hidden md:flex"
      >
        {renderDesktopHeroImage()}
      </div>

      <div
        aria-label="Container"
        className="relative z-[1] mx-auto flex w-full max-w-[1360px] flex-col justify-end gap-4 px-5 pb-6 md:justify-center md:px-10 md:pb-0"
      >
        <Reveal
          aria-label="Content"
          className={[
            'relative flex w-full flex-col items-start justify-start gap-6 md:gap-8',
            isRTL
              ? 'max-w-[22rem] sm:max-w-[24rem] md:max-w-[40rem] lg:max-w-[44%] xl:max-w-[42%]'
              : 'max-w-[20rem] sm:max-w-[24rem] md:max-w-[45%]',
          ]
            .filter(Boolean)
            .join(' ')}
          delay={80}
        >
          <div
            aria-label="Title"
            className={[
              'relative flex w-full flex-col justify-center gap-3 md:gap-4',
              isRTL ? 'md:max-w-[32rem] lg:max-w-[33rem] xl:max-w-[34rem]' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <div aria-label="Badge" className="hero-badge relative flex w-fit items-center justify-center gap-[6px] overflow-hidden rounded-full bg-[rgba(61,61,67,0.86)] px-[10px] pt-[5px] pb-[5px] md:gap-[10px] md:rounded-2xl md:bg-[rgb(40,_40,_44)] md:px-3 md:pt-[5px] md:pb-[6px]">
              <div aria-label="Badge dot" className="relative aspect-square w-[5px] shrink-[0] md:w-2">
                <div>
                  <div className="absolute left-[-4.94468px] top-[-4.94468px] right-[-4.94468px] bottom-[-4.94468px] rounded-[625rem] bg-white opacity-[0]"></div>
                  <div className="absolute left-[-4.57398px] top-[-4.57398px] right-[-4.57398px] bottom-[-4.57398px] rounded-[625rem] bg-white opacity-[0.00632814]"></div>
                  <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[625rem] bg-white"></div>
                </div>
              </div>
              <div className="relative flex flex-col justify-start whitespace-pre shrink-[0]">
                <p className="text-[14px] leading-[14px] text-[rgb(208,_209,_219)] md:text-[14px] md:leading-[14px]">
                  {messages.hero.badge}
                </p>
              </div>
            </div>

            <div className="relative flex w-full flex-col justify-start whitespace-pre-wrap contrast-[1] invert-[0] shrink-[0]">
              <AnimatedHeading
                text={messages.hero.heading}
                mode={isRTL ? 'text' : 'characters'}
                className="font-medium text-[40px] leading-[0.94] tracking-[-2.1px] text-white sm:text-[46px] md:text-[58px] md:leading-[69.6px] md:tracking-[-1px]"
              />
            </div>
          </div>

          <div
            aria-label="Text & Button"
            className={[
              'relative flex w-full flex-col justify-center gap-5 pt-0 pb-0 md:gap-[40px]',
              isRTL ? 'pr-0 md:pl-[100px]' : 'pl-0 md:pr-[100px]',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <div className="contents">
              <div className="relative flex w-full max-w-[19rem] flex-col justify-start whitespace-pre-wrap sm:max-w-[20rem] md:max-w-full">
                <p
                  className="text-[18px] leading-[29px] tracking-[-0.35px] text-white/88 sm:text-[19px] md:text-[22px] md:leading-[33px] md:text-[rgb(208,_209,_219)]"
                  style={{ textAlign: 'start' }}
                >
                  {messages.hero.description}
                </p>
              </div>
            </div>

            <div className="contents">
              <div className="relative">
                <a
                  href="#contact"
                  aria-label={messages.hero.cta}
                  className={[
                    'group framer-button hero-cta relative inline-flex w-fit max-w-full items-center justify-between overflow-hidden rounded-[999px] bg-[rgba(58,58,62,0.9)] pt-[8px] pb-[8px] shadow-[0_20px_40px_rgba(0,0,0,0.3)] backdrop-blur-[18px] text-[rgb(0,_0,_238)] md:bg-white/10 md:pt-[9px] md:pb-[11px] md:shadow-[0_18px_44px_rgba(12,18,26,0.16)] md:backdrop-blur-[10px]',
                    isRTL ? 'hero-cta--rtl' : '',
                    isRTL ? 'gap-4 pr-[16px] pl-[8px] md:pr-[18px] md:pl-[10px]' : 'gap-4 pl-[16px] pr-[8px] md:gap-[30px] md:pl-[26px] md:pr-3',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <div
                    aria-label="Text"
                    className="content-center items-center relative z-[2] flex min-w-0 flex-col justify-center gap-[10px] overflow-hidden shrink-[0]"
                  >
                    <div className="relative flex max-w-full flex-col justify-start whitespace-nowrap shrink-[0]">
                      <p className="hero-cta__label font-medium text-[14px] leading-[20px] text-white md:text-[16px] md:leading-[20.8px]" style={{ textAlign: 'start' }}>
                        {messages.hero.cta}
                      </p>
                    </div>
                  </div>
                  <div
                    aria-label="Arrow"
                    className="hero-cta__arrow content-center items-center relative flex aspect-square w-[46px] justify-center gap-[10px] rounded-full shrink-[0] md:w-10 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  >
                    <div
                      aria-label="Arrow-right"
                      className={[
                        'relative z-[1] aspect-square w-[18px] fill-[rgb(16,_16,_20)] text-[rgb(16,_16,_20)] shrink-[0] md:w-5 transition-transform duration-500 ease-in-out',
                        isRTL ? '-rotate-[135deg] group-hover:-rotate-180 group-hover:-translate-x-1' : '-rotate-45 group-hover:rotate-0 group-hover:translate-x-1',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      <div className="size-full overflow-hidden fill-[rgb(16,_16,_20)]">
                        <img
                          src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F250bfdc17f4ef4ab6b8506f3de17f0261ee32483.svg?generation=1776714191983800&alt=media"
                          alt=""
                          className="block size-full"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div
        className={[
          'absolute bottom-[50px] z-[1] hidden md:block',
          isRTL ? 'left-[50px]' : 'right-[50px]',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {renderReviewCard()}
      </div>
    </section>
  );
}
