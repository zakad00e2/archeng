import { useState } from 'react';

import { Reveal } from '../motion/Reveal';
import { useI18n } from '../../i18n/I18nProvider';

export function FaqSection() {
  const { messages, isRTL } = useI18n();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faqs"
      aria-label="FAQs"
      className="content-center items-center relative flex h-min w-full flex-col justify-center gap-[60px] shrink-[0]"
    >
      <div
        aria-label="Container"
        className="content-start items-start relative flex h-min w-full max-w-[1360px] flex-col justify-center gap-8 pt-0 pr-10 pb-0 pl-10 lg:flex-row lg:gap-[60px] shrink-[0]"
      >
        <Reveal
          aria-label="Content"
          className="content-start items-start relative top-[100px] flex h-min w-full grow basis-0 flex-col justify-start gap-[40px] overflow-hidden z-[1] lg:sticky lg:w-px shrink-[0]"
        >
          <div className="content-start items-start relative flex h-min w-full flex-col justify-start gap-[10px] shrink-[0]">
            <div className="relative">
              <div
                aria-label="Badge"
                className="content-center items-center relative flex size-min justify-center gap-[8px] overflow-hidden rounded-2xl bg-[rgb(40,_40,_44)] pt-[5px] pr-3 pb-[6px] pl-3"
              >
                <div className="relative flex flex-col justify-start whitespace-pre shrink-[0]">
                  <h2 className="font-medium text-[16px] leading-[16px] tracking-[0.5px] text-white">
                    {messages.faq.badge}
                  </h2>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-col justify-start whitespace-pre-wrap">
              <h3
                className="font-medium text-[50px] leading-[55px] tracking-[-0.8px] text-[rgb(16,_16,_20)]"
                style={{ textAlign: 'start' }}
              >
                {messages.faq.heading}
              </h3>
            </div>
            <div className="relative flex w-full max-w-full flex-col justify-start whitespace-pre-wrap">
              <p
                className="text-[22px] leading-[33px] tracking-[-0.3px] text-[rgb(61,_61,_71)]"
                style={{ textAlign: 'start' }}
              >
                {messages.faq.description}
              </p>
            </div>
          </div>

          <div className="relative w-full">
            <a
              href="#contact"
              aria-label={messages.faq.cta}
              className="group relative inline-flex w-full items-center justify-between gap-[10px] overflow-hidden rounded-full bg-[rgb(232,_232,_232)] pt-[7px] pr-[12px] pb-[7px] pl-2 sm:w-auto sm:min-w-[145px]"
            >
              <div
                aria-label="Text"
                className="relative z-[1] flex min-w-0 flex-col justify-center"
              >
                <div className="relative flex max-w-full flex-col justify-start whitespace-nowrap">
                  <p
                    className="font-medium text-[16px] leading-[20px] tracking-[-0.2px] text-[rgb(16,_16,_20)]"
                    style={{ textAlign: 'start' }}
                  >
                    {messages.faq.cta}
                  </p>
                </div>
              </div>
              <div
                aria-label="Arrow"
                className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[rgb(16,_16,_20)] transition-transform duration-500 ease-in-out group-hover:scale-105"
              >
                <div
                  aria-label="Arrow-right"
                  className={[
                    'relative aspect-square w-[18px] fill-white text-white shrink-0 transition-transform duration-500 ease-in-out',
                    isRTL ? '-rotate-[135deg] group-hover:-rotate-180 group-hover:-translate-x-1' : '-rotate-45 group-hover:rotate-0 group-hover:translate-x-1',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <div className="size-full overflow-hidden fill-white">
                    <img
                      src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fbabc06ec87963c6722023ae2822e6e7620bc83d1.svg?generation=1776714193132082&alt=media"
                      alt=""
                      className="block size-full"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </Reveal>

        <div className="relative h-auto w-full grow basis-0 lg:w-px">
          <div
            aria-label="FAQs"
            className="content-center items-center relative flex h-min w-full flex-col justify-start gap-[20px]"
          >
            {messages.faq.items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <Reveal key={item.question} className="relative w-full" delay={90 + index * 45}>
                  <div
                    className={[
                      'faq-card relative w-full rounded-[0.625rem] bg-[rgb(250,_250,_250)]',
                      isOpen ? 'is-open' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-[0.625rem] border border-[rgb(230,_230,_230)]"></div>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
                      className="content-center items-center relative flex h-min w-full justify-between overflow-hidden pt-5 pr-[25px] pb-5 pl-[25px]"
                      style={{ textAlign: 'start' }}
                    >
                      <div className="relative flex grow basis-0 w-px flex-col justify-start whitespace-pre-wrap shrink-[0]">
                        <h4 className="font-medium text-[22px] leading-[30.8px] tracking-[-0.2px] text-[rgb(16,_16,_20)]">
                          {item.question}
                        </h4>
                      </div>
                      <div className="relative self-stretch w-5 shrink-[0]"></div>
                      <div
                        className="relative h-6 w-6 shrink-[0]"
                        style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                      >
                        <div className="inline-block size-full overflow-hidden fill-[rgb(16,_16,_20)] text-[rgb(16,_16,_20)]">
                          <img
                            src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F3dfc4af661c82e4f87c5635e9925a3fb4576121e.svg?generation=1776714192612234&alt=media"
                            alt=""
                            className="inline-block size-full"
                          />
                        </div>
                      </div>
                    </button>
                    <div
                      className={[
                        'faq-answer px-[25px]',
                        isRTL ? 'pl-[45px]' : 'pr-[45px]',
                        isOpen ? 'is-open pb-[30px]' : 'is-closed',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      <p
                        className="text-[18px] leading-[27px] tracking-[-0.1px] text-[rgb(61,_61,_71)]"
                        style={{ textAlign: 'start' }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
