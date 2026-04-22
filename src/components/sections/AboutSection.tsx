import { useEffect, useRef, useState } from 'react';

import { Reveal } from '../motion/Reveal';
import { useI18n } from '../../i18n/I18nProvider';
import type { Locale } from '../../i18n/types';

const aboutImages = [
  {
    src: 'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F54ae58565a9c1eb424be5dc7d1d003c77ca53b32.png%3Fscale-down-to=1024&width=1200&height=1200?generation=1776714191990341&alt=media',
    width: 400,
  },
  {
    src: 'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fd05506a688efc782c3c85a32f0c964df6a3682ee.png%3Fwidth=896&height=1200?generation=1776714192036042&alt=media',
    width: 400,
  },
  {
    src: 'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F2ab1db1b12077d32981be1fdba59f27980d1d206.png%3Fscale-down-to=1024&width=1200&height=1200?generation=1776714192022312&alt=media',
    width: 407.273,
  },
  {
    src: 'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fe055c28bfbc554b7294a2c56ad26a22a909466f2.png%3Fscale-down-to=1024&width=960&height=1200?generation=1776714191996945&alt=media',
    width: 400,
  },
  {
    src: 'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F2235406ccdb57725c3ee804c0c8f0604f90434ab.png%3Fscale-down-to=1024&width=1200&height=1200?generation=1776714192020534&alt=media',
    width: 400,
  },
  {
    src: 'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F3c77b8f0e7d94af1fe2abc0e7ac26b04144d7835.png%3Fscale-down-to=1024&width=1200&height=1200?generation=1776714192046200&alt=media',
    width: 400,
  },
] as const;

const marqueeImages = [...aboutImages, ...aboutImages, ...aboutImages];

function formatStatValue(value: number, suffix: string, locale: Locale) {
  const formatter = new Intl.NumberFormat(locale === 'ar' ? 'ar-EG' : 'en-US');

  return `${formatter.format(value)}${suffix}`;
}

type AnimatedStatProps = {
  value: number;
  suffix: string;
  label: string;
  description: string;
  locale: Locale;
};

function AnimatedStat({ value, suffix, label, description, locale }: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      setDisplayValue(value);
      return;
    }

    let frameId = 0;
    let startTime: number | null = null;
    let hasStarted = false;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / 1200, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted) {
          return;
        }

        hasStarted = true;
        frameId = requestAnimationFrame(animate);
        observer.disconnect();
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [value]);

  return (
    <div className="relative self-start justify-self-start w-full">
      <div
        aria-label="Desktop"
        className="content-start items-start relative flex h-min w-full flex-col justify-start gap-[20px]"
      >
        <div ref={ref} className="relative shrink-[0]">
          <p className="pointer-events-none text-center text-[72px] leading-[72px] tracking-[-0.8px] opacity-[0] font-light">
            {formatStatValue(value, suffix, locale)}
          </p>
          <p className="absolute left-0 top-0 right-0 bottom-0 text-center text-[72px] leading-[72px] tracking-[-0.8px] text-[rgb(16,_16,_20)] font-light">
            {formatStatValue(displayValue, suffix, locale)}
          </p>
        </div>
        <div
          aria-label="Content"
          className="content-center items-center relative flex h-min w-full flex-col justify-center gap-[5px] shrink-[0]"
        >
          <div className="relative flex w-full max-w-full flex-col justify-start whitespace-pre-wrap shrink-[0]">
            <h4
              className="font-semibold text-[20px] leading-[30px] tracking-[-0.2px] text-[rgb(16,_16,_20)]"
              style={{ textAlign: 'start' }}
            >
              {label}
            </h4>
          </div>
          <div className="relative flex w-full max-w-full flex-col justify-start whitespace-pre-wrap shrink-[0]">
            <p
              className="text-[16px] leading-[20.8px] tracking-[-0.1px] text-[rgb(61,_61,_71)]"
              style={{ textAlign: 'start' }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AboutSection() {
  const { locale, messages } = useI18n();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section
      id="about"
      aria-label="About"
      className="content-center items-center relative flex h-min w-full flex-col justify-center gap-[100px] shrink-[0]"
    >
      <div
        aria-label="Intro"
        className="content-center items-center relative flex h-min w-full flex-col justify-center gap-[10px] shrink-[0]"
      >
        <div
          aria-label="Container"
          className="content-end items-end relative flex h-min w-full max-w-[1360px] justify-between pt-0 pr-10 pb-0 pl-10 shrink-[0]"
        >
          <Reveal
            aria-label="Title"
            className="content-start items-start relative flex h-min w-[30%] flex-col justify-start gap-[10px] shrink-[0]"
          >
            <div className="contents">
              <div className="relative">
                <div
                  aria-label="Badge"
                  className="content-center items-center relative flex size-min justify-center gap-[8px] overflow-hidden rounded-2xl bg-[rgb(40,_40,_44)] pt-[5px] pr-3 pb-[6px] pl-3"
                >
                  <div className="relative flex flex-col justify-start whitespace-pre shrink-[0]">
                    <h2 className="font-medium text-[16px] leading-[16px] tracking-[0.5px] text-white">
                      {messages.about.badge}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-col justify-start whitespace-pre-wrap shrink-[0]">
              <h3
                className="font-medium text-[50px] leading-[55px] tracking-[-0.8px] text-[rgb(16,_16,_20)]"
                style={{ textAlign: 'start' }}
              >
                {messages.about.heading}
              </h3>
            </div>
          </Reveal>
          <Reveal
            aria-label="Content"
            className="content-center items-center relative flex h-min w-[60%] justify-center gap-[10px] overflow-hidden shrink-[0]"
            delay={120}
          >
            <div className="relative flex grow basis-0 flex-col justify-start whitespace-pre-wrap w-px shrink-[0]">
              <p
                className="text-[22px] leading-[33px] tracking-[-0.3px] text-[rgb(61,_61,_71)]"
                style={{ textAlign: 'start' }}
              >
                {messages.about.description}
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="contents">
        <div className="relative w-full">
          <div
            aria-label="Desktop"
            className="content-center items-center relative hidden md:flex h-min w-full flex-col justify-center gap-[40px]"
          >
            <div className="relative h-[500px] w-full shrink-[0]">
              <section className="flex size-full max-h-full max-w-full items-center justify-items-center overflow-hidden">
                <ul
                  className="about-marquee relative flex size-full max-h-full max-w-full items-start gap-[32px]"
                  style={{ justifyItems: 'flex-start' }}
                >
                  {marqueeImages.map((image, index) => (
                    <li key={`${image.src}-${index}`} className="h-full list-none" style={{ width: image.width }}>
                      <div className="relative h-full aspect-[0.727273_/_1]" style={{ width: image.width }}>
                        <div className="content-center items-center relative flex size-full flex-col justify-center gap-[10px] overflow-hidden bg-white">
                          <div className="relative size-full shrink-[0]">
                            <div className="absolute left-0 top-0 right-0 bottom-0">
                              <img src={image.src} alt="" className="block size-full object-cover" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          <div
            aria-label="Mobile Carousel"
            className="content-center items-center relative flex md:hidden h-min w-full flex-col justify-center gap-[20px] px-5"
          >
            <div 
              className="relative aspect-[0.727273/1] w-full max-w-md shrink-[0] overflow-hidden bg-white cursor-pointer select-none"
              onClick={() => setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length)}
            >
              {aboutImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={`Slide ${index}`}
                  className={[
                    'absolute left-0 top-0 block size-full object-cover transition-opacity duration-500',
                    index === currentImageIndex ? 'opacity-100 relative' : 'opacity-0'
                  ].filter(Boolean).join(' ')}
                />
              ))}
            </div>
            <div className="flex gap-2 justify-center items-center">
              {aboutImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setCurrentImageIndex(index)}
                  className={[
                    'h-2 rounded-full transition-all duration-300',
                    index === currentImageIndex ? 'w-6 bg-[rgb(16,_16,_20)]' : 'w-2 bg-[rgba(16,_16,_20,_0.2)]'
                  ].filter(Boolean).join(' ')}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        aria-label="Statistics"
        className="content-center items-center relative flex h-min w-full flex-col justify-center gap-[60px] shrink-[0]"
      >
        <div
          aria-label="Container"
          className="content-start items-start relative flex h-min w-full max-w-[1360px] flex-col justify-center gap-[60px] pt-0 pr-10 pb-0 pl-10 shrink-[0]"
        >
          <div
            aria-label="Stats grid"
            className="relative grid h-min w-full auto-rows-[minmax(0px,1fr)] grid-rows-[repeat(1,minmax(0px,1fr))] justify-center gap-[120px] overflow-hidden shrink-[0]"
            style={{ gridTemplateColumns: 'repeat(4, minmax(50px, 1fr))' }}
          >
            {messages.about.stats.map((stat) => (
              <div key={stat.label} className="contents">
                <AnimatedStat {...stat} locale={locale} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
