import { useRef, useState } from 'react';

import { Reveal } from '../motion/Reveal';
import { useI18n } from '../../i18n/I18nProvider';
import type { TestimonialKey } from '../../i18n/types';

const testimonialCards: Array<{
  id: TestimonialKey;
  tone: 'light' | 'mid';
  avatar: string;
  avatarPosition?: string;
}> = [
  {
    id: 'emily',
    tone: 'light',
    avatar:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F45a8816d0819962b4d124688e2329b60550cb50b.jpg%3Fscale-down-to=1024&width=904&height=1200?generation=1776714193136145&alt=media',
    avatarPosition: '46.9% 15.6%',
  },
  {
    id: 'james',
    tone: 'mid',
    avatar:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F127d5d7a36bce0027461f9d8b38780bb5d63d9e3.jpg%3Fscale-down-to=1024&width=673&height=1200?generation=1776714193132083&alt=media',
  },
  {
    id: 'sophie',
    tone: 'light',
    avatar:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F0161f02012baaf12c2c064bafb00ebee07f11e5d.png%3Fscale-down-to=512&width=1200&height=1200?generation=1776714192905475&alt=media',
  },
  {
    id: 'daniel',
    tone: 'mid',
    avatar:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fd51f998e9ab9e7dd22e43572727ac00079f64f65.png%3Fscale-down-to=512&width=1200&height=992?generation=1776714193131524&alt=media',
  },
  {
    id: 'oliver',
    tone: 'light',
    avatar:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fa11abfc0dc10966bc3adeb1c30b6657a96ff6981.png%3Fscale-down-to=1024&width=904&height=1200?generation=1776714192880091&alt=media',
  },
  {
    id: 'charlotte',
    tone: 'mid',
    avatar:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Ff48a255461b32101cfadb6385d773ce209ece8db.png%3Fscale-down-to=512&width=1200&height=1200?generation=1776714192891617&alt=media',
  },
];

const marqueeCards = [...testimonialCards, ...testimonialCards, ...testimonialCards];

function Stars() {
  return (
    <div aria-label="5 stars" className="content-center items-center relative flex size-min justify-center gap-[4px] overflow-hidden">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          aria-label="Star"
          className="relative aspect-square w-5 fill-[rgb(16,_16,_20)] text-[rgb(16,_16,_20)] shrink-[0]"
        >
          <div className="size-full overflow-hidden fill-[rgb(16,_16,_20)]">
            <img
              src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F9e00b5e6f057b1797357942436c55c9bf8d3ef5b.svg?generation=1776714193095533&alt=media"
              alt=""
              className="block size-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const { messages } = useI18n();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const mobileCarouselRef = useRef<HTMLDivElement | null>(null);

  const goToCard = (nextIndex: number, behavior: ScrollBehavior = 'smooth') => {
    const total = testimonialCards.length;
    const normalizedIndex = (nextIndex + total) % total;
    setCurrentCardIndex(normalizedIndex);

    const carousel = mobileCarouselRef.current;

    if (!carousel) {
      return;
    }

    carousel.scrollTo({
      left: normalizedIndex * carousel.clientWidth,
      behavior,
    });
  };

  const handleCarouselScroll = () => {
    const carousel = mobileCarouselRef.current;

    if (!carousel || carousel.clientWidth === 0) {
      return;
    }

    const nextIndex = Math.round(carousel.scrollLeft / carousel.clientWidth);
    setCurrentCardIndex(Math.max(0, Math.min(testimonialCards.length - 1, nextIndex)));
  };

  const renderTestimonialCard = (
    card: (typeof testimonialCards)[number],
    index: number,
    mode: 'desktop' | 'mobile'
  ) => {
    const testimonial = messages.testimonials.items[card.id];
    const isMid = card.tone === 'mid';

    return (
      <div className={mode === 'desktop' ? 'relative h-full w-[400px]' : 'relative h-full w-full'}>
        <div
          className={[
            'content-start items-start relative flex size-full flex-col justify-between overflow-hidden rounded-[0.625rem] pt-[30px] pr-10 pb-[30px] pl-10',
            mode === 'mobile' ? 'min-h-[360px]' : '',
            isMid ? 'bg-[rgb(233,_236,_242)]' : 'bg-[rgb(250,_250,_250)]',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <div className="pointer-events-none absolute inset-0 rounded-[0.625rem] border border-[rgb(230,_230,_230)]"></div>
          <div
            aria-label="Review"
            className="content-start items-start relative flex h-min w-full flex-col justify-start gap-[10px] shrink-[0]"
          >
            <div className="relative shrink-[0]">
              <Stars />
            </div>
            <div className="relative flex w-full flex-col justify-start whitespace-pre-wrap shrink-[0]">
              <p
                className="text-[18px] leading-[27px] tracking-[-0.1px] text-[rgb(61,_61,_71)]"
                style={{ textAlign: 'start' }}
              >
                {testimonial.quote}
              </p>
            </div>
          </div>
          <div aria-label="Spacer" className="relative h-5 w-full shrink-[0]"></div>
          <div
            aria-label="Citation"
            className="content-center items-center relative flex h-min w-full justify-start gap-[10px] overflow-hidden shrink-[0]"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-[62.5rem] shrink-[0] after:absolute after:left-0 after:top-0 after:size-full after:rounded-[62.5rem] after:border after:border-[rgb(219,_218,_217)] after:pointer-events-none after:content-[&quot;&quot;]">
              <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[62.5rem]">
                <img
                  src={card.avatar}
                  alt={testimonial.author}
                  className="block size-full rounded-[62.5rem] object-cover"
                  style={card.avatarPosition ? { objectPosition: card.avatarPosition } : undefined}
                />
              </div>
            </div>
            <div className="relative flex grow basis-0 w-px flex-col justify-start whitespace-pre-wrap shrink-[0]">
              <p
                className="text-[18px] leading-[27px] tracking-[-0.1px] text-[rgb(16,_16,_20)]"
                style={{ textAlign: 'start' }}
              >
                {testimonial.author}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="content-center items-center relative flex h-min w-full flex-col justify-center gap-[60px] overflow-hidden shrink-[0]"
    >
      <div
        aria-label="Container"
        className="content-center items-center relative flex h-min w-[94%] max-w-[1360px] flex-col justify-center gap-[60px] pt-0 pr-10 pb-0 pl-10 shrink-[0]"
      >
        <Reveal
          aria-label="Header"
          className="content-start items-start relative flex h-min w-full max-w-[50%] flex-col justify-start gap-[20px] overflow-hidden pt-0 pr-5 pb-0 pl-0 z-[1] shrink-[0]"
        >
          <div
            aria-label="Title"
            className="content-center items-center relative flex h-min w-full flex-col justify-center gap-[10px] shrink-[0]"
          >
            <div className="contents">
              <div className="relative">
                <div
                  aria-label="Badge"
                  className="content-center items-center relative flex size-min justify-center gap-[8px] overflow-hidden rounded-2xl bg-[rgb(40,_40,_44)] pt-[5px] pr-3 pb-[6px] pl-3"
                >
                  <div className="relative flex flex-col justify-start whitespace-pre shrink-[0]">
                    <h2 className="font-medium text-[16px] leading-[16px] tracking-[0.5px] text-white">
                      {messages.testimonials.badge}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-col justify-start whitespace-pre-wrap shrink-[0]">
              <h3 className="text-center font-medium text-[50px] leading-[55px] tracking-[-0.8px] text-[rgb(16,_16,_20)]">
                {messages.testimonials.heading}
              </h3>
            </div>
          </div>
          <div className="relative flex w-full max-w-full flex-col justify-start whitespace-pre-wrap shrink-[0]">
            <p className="text-center text-[22px] leading-[33px] tracking-[-0.3px] text-[rgb(61,_61,_71)]">
              {messages.testimonials.description}
            </p>
          </div>
        </Reveal>
      </div>

      <div className="contents">
        <div className="relative w-full">
          <div
            aria-label="Desktop"
            className="content-center items-center relative hidden md:flex h-min w-full flex-col justify-center gap-[32px] overflow-hidden"
          >
            <div className="relative h-[300px] w-full shrink-[0]">
              <section className="flex size-full max-h-full max-w-full items-center justify-items-center">
                <ul className="testimonials-marquee relative flex size-full max-h-full max-w-full items-center gap-[32px] justify-items-center">
                  {marqueeCards.map((card, index) => (
                    <li key={`${card.id}-${index}`} className="h-full w-[400px] list-none">
                      {renderTestimonialCard(card, index, 'desktop')}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          <div
            aria-label="Mobile Testimonials Carousel"
            dir="ltr"
            className="testimonials-mobile-carousel relative flex w-full flex-col items-center justify-center gap-[20px] px-5 md:hidden"
          >
            <div
              ref={mobileCarouselRef}
              className="testimonials-mobile-carousel__viewport relative w-full max-w-md overflow-hidden"
              onScroll={handleCarouselScroll}
            >
              <div className="testimonials-mobile-carousel__track">
                {testimonialCards.map((card, index) => (
                  <div
                    key={card.id}
                    className={[
                      'testimonials-mobile-carousel__slide shrink-0',
                      index === currentCardIndex ? 'is-active' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    {renderTestimonialCard(card, index, 'mobile')}
                  </div>
                ))}
              </div>
            </div>

            <div className="testimonials-mobile-carousel__dots flex items-center justify-center">
              {testimonialCards.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-pressed={index === currentCardIndex}
                  onClick={() => goToCard(index)}
                  className={[
                    'testimonials-mobile-carousel__dot',
                    index === currentCardIndex ? 'is-active' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <span className="testimonials-mobile-carousel__dot-indicator"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
