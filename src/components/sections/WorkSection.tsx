import { Reveal } from '../motion/Reveal';
import { useI18n } from '../../i18n/I18nProvider';
import type { WorkKey } from '../../i18n/types';

const quoteIcons = {
  light:
    'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F4927985d605e8a43b002b782b51592067840c8f4.svg?generation=1776714192876806&alt=media',
  dark:
    'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F591de0794d7a563024b4e39379d89a07a1e7f75c.svg?generation=1776714192942560&alt=media',
} as const;

const workStudies: Array<{
  id: WorkKey;
  theme: 'light' | 'dark';
  image: string;
  avatar: string;
  avatarPosition?: string;
}> = [
  {
    id: 'modernKitchen',
    theme: 'light',
    image:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F9e5e6f7393994da90d5710576618db685649470f.png%3Fscale-down-to=1024&width=960&height=1200?generation=1776714192892779&alt=media',
    avatar:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fa11abfc0dc10966bc3adeb1c30b6657a96ff6981.png%3Fscale-down-to=1024&width=904&height=1200?generation=1776714192880091&alt=media',
    avatarPosition: '48.4% 16.9%',
  },
  {
    id: 'gardenPath',
    theme: 'dark',
    image:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F6f2fccf29533035046cbc7c30d55b00055d617d4.jpg%3Fscale-down-to=1024&width=6000&height=4000?generation=1776714192890922&alt=media',
    avatar:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Ff48a255461b32101cfadb6385d773ce209ece8db.png%3Fscale-down-to=512&width=1200&height=1200?generation=1776714192891617&alt=media',
  },
  {
    id: 'bathroomRenovation',
    theme: 'light',
    image:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F54ae58565a9c1eb424be5dc7d1d003c77ca53b32.png%3Fscale-down-to=1024&width=1200&height=1200?generation=1776714191990341&alt=media',
    avatar:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F0161f02012baaf12c2c064bafb00ebee07f11e5d.png%3Fscale-down-to=512&width=1200&height=1200?generation=1776714192905475&alt=media',
  },
];

export function WorkSection() {
  const { messages, isRTL } = useI18n();

  return (
    <section
      id="our-work"
      aria-label="Our Work"
      className="content-center items-center relative flex h-min w-full flex-col justify-center gap-[60px] shrink-[0]"
    >
      <div
        aria-label="Container"
        className="content-center items-center relative flex h-min w-full max-w-[1360px] flex-col justify-center gap-[0px] pt-0 pr-10 pb-0 pl-10 shrink-[0]"
      >
        <Reveal
          aria-label="Header"
          className="content-center items-center relative flex h-min w-full max-w-full flex-col justify-start gap-[20px] lg:max-w-[50%] z-[1] shrink-[0]"
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
                      {messages.work.badge}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-col justify-start whitespace-pre-wrap shrink-[0]">
              <h3 className="text-center font-medium text-[50px] leading-[55px] tracking-[-0.8px] text-[rgb(16,_16,_20)]">
                {messages.work.heading}
              </h3>
            </div>
          </div>
          <div className="relative flex w-full max-w-full flex-col justify-start whitespace-pre-wrap shrink-[0]">
            <p className="text-center text-[22px] leading-[33px] tracking-[-0.3px] text-[rgb(61,_61,_71)]">
              {messages.work.description}
            </p>
          </div>
        </Reveal>

        <div
          aria-label="Case studies"
          className="content-center items-center relative flex h-min w-full flex-col justify-start gap-[0px] z-[1] shrink-[0]"
        >
          {workStudies.map((study, index) => {
            const item = messages.work.items[study.id];
            const isDark = study.theme === 'dark';
            const quotePaddingClass = isRTL ? 'pr-[30px] pl-0' : 'pl-[30px] pr-0';

            return (
              <div
                key={study.id}
                aria-label={`Sticky Container ${index + 1}`}
                className="content-center items-center relative flex min-h-0 w-full justify-center gap-[10px] py-6 top-0 z-[1] lg:sticky lg:h-screen shrink-[0]"
              >
                <div className="contents">
                  <div className="relative z-[1] w-full">
                    <div
                      aria-label={isDark ? 'Dark' : 'Light'}
                      className={[
                        'content-center items-center relative flex h-min w-full justify-center gap-[0px] overflow-hidden rounded-[0.625rem] pt-5 pr-5 pb-5 pl-5 lg:max-h-[810px] lg:pt-[30px] lg:pr-[60px] lg:pb-[30px] lg:pl-[30px]',
                        isDark ? 'bg-[rgb(16,_16,_20)]' : 'bg-[rgb(233,_236,_242)]',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      <div
                        aria-label="Wrapper"
                        className="content-start items-start relative flex grow w-full flex-col justify-start gap-8 lg:flex-row lg:gap-[70px] h-min shrink-[0]"
                      >
                        <div className="relative aspect-[0.8_/_1] w-full max-h-full max-w-full overflow-hidden rounded-[0.625rem] lg:w-[400px] lg:max-w-[400px] shrink-[0]">
                          <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[0.625rem]">
                            <img
                              src={study.image}
                              alt={item.title}
                              className="block size-full rounded-[0.625rem] object-cover"
                            />
                          </div>
                        </div>

                        <div
                          aria-label="Content"
                          className="content-start items-start relative flex w-full grow flex-col justify-start gap-[30px] self-stretch pt-0 pr-0 pb-0 pl-0 lg:basis-0 lg:w-px lg:pt-[30px] shrink-[0]"
                        >
                          <div
                            aria-label="Top"
                            className={[
                              'content-start items-start relative flex h-min w-full flex-col justify-center gap-[20px] pt-0 pb-0 shrink-[0]',
                              isRTL ? 'lg:pl-[100px] pr-0' : 'lg:pr-[100px] pl-0',
                            ]
                              .filter(Boolean)
                              .join(' ')}
                          >
                            <div className="relative flex w-full flex-col justify-start whitespace-pre-wrap shrink-[0]">
                              <h4
                                className={[
                                  'font-medium text-[42px] leading-[46.2px] tracking-[-1px]',
                                  isDark ? 'text-white' : 'text-[rgb(16,_16,_20)]',
                                ]
                                  .filter(Boolean)
                                  .join(' ')}
                                style={{ textAlign: 'start' }}
                              >
                                {item.title}
                              </h4>
                            </div>
                            <div className="relative flex w-full flex-col justify-start whitespace-pre-wrap shrink-[0]">
                              <p
                                className={[
                                  'text-[18px] leading-[27px] tracking-[-0.1px]',
                                  isDark ? 'text-[rgb(208,_209,_219)]' : 'text-[rgb(61,_61,_71)]',
                                ]
                                  .filter(Boolean)
                                  .join(' ')}
                                style={{ textAlign: 'start' }}
                              >
                                {item.description}
                              </p>
                            </div>
                          </div>

                          <div
                            aria-label="Tags"
                            className="content-center items-center relative flex h-auto w-full flex-wrap justify-start gap-[15px] shrink-[0]"
                          >
                            {item.tags.map((tag) => (
                              <div
                                key={tag}
                                className="content-center items-center relative flex size-min justify-center gap-[8px] overflow-hidden rounded-2xl bg-[rgb(40,_40,_44)] pt-[5px] pr-3 pb-[6px] pl-3 shrink-[0]"
                              >
                                <div className="relative flex flex-col justify-start whitespace-pre shrink-[0]">
                                  <p className="text-[14px] leading-[14px] text-white">{tag}</p>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div
                            aria-label="Blockquote (desktop/mobile)"
                            className="content-start items-start relative flex h-min w-full flex-col justify-center gap-[20px] shrink-[0]"
                          >
                            <div
                              aria-label="Quote"
                              className={[
                                'content-center items-center relative flex h-min w-full justify-start gap-[10px] pt-0 pb-0 shrink-[0]',
                                quotePaddingClass,
                              ]
                                .filter(Boolean)
                                .join(' ')}
                            >
                              <div
                                aria-label="Quote-left-fill"
                                className={[
                                  'absolute top-[-3px] z-[1] aspect-square w-6 shrink-[0]',
                                  isRTL ? 'right-0' : 'left-0',
                                  isDark ? 'fill-white text-white' : 'fill-[rgb(16,_16,_20)] text-[rgb(16,_16,_20)]',
                                ]
                                  .filter(Boolean)
                                  .join(' ')}
                              >
                                <div className="size-full overflow-hidden">
                                  <img
                                    src={isDark ? quoteIcons.dark : quoteIcons.light}
                                    alt=""
                                    className="block size-full"
                                  />
                                </div>
                              </div>
                              <div className="relative flex grow basis-0 w-px flex-col justify-start whitespace-pre-wrap shrink-[0]">
                                <p
                                  className={[
                                    'text-[20px] leading-[28px] tracking-[-0.2px]',
                                    isDark ? 'text-[rgb(208,_209,_219)]' : 'text-[rgb(61,_61,_71)]',
                                  ]
                                    .filter(Boolean)
                                    .join(' ')}
                                  style={{ textAlign: 'start' }}
                                >
                                  {item.quote}
                                </p>
                              </div>
                            </div>

                            <div
                              aria-label="Citation"
                              className={[
                                'content-center items-center relative flex h-min w-full justify-start gap-[15px] pt-0 pb-0 shrink-[0]',
                                quotePaddingClass,
                              ]
                                .filter(Boolean)
                                .join(' ')}
                            >
                              <div className="relative aspect-square w-[50px] shrink-[0] rounded-[62.4375rem] after:absolute after:left-0 after:top-0 after:size-full after:rounded-[62.4375rem] after:border after:border-[rgb(219,_218,_217)] after:pointer-events-none after:content-[&quot;&quot;]">
                                <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                                  <img
                                    src={study.avatar}
                                    alt={item.author}
                                    className="block size-full rounded-[62.4375rem] object-cover"
                                    style={
                                      study.avatarPosition
                                        ? { objectPosition: study.avatarPosition }
                                        : undefined
                                    }
                                  />
                                </div>
                              </div>
                              <div className="relative flex grow basis-0 w-px flex-col justify-start whitespace-pre-wrap shrink-[0]">
                                <p
                                  className={[
                                    'text-[16px] leading-[20.8px] tracking-[-0.1px]',
                                    isDark ? 'text-[rgb(208,_209,_219)]' : 'text-[rgb(16,_16,_20)]',
                                  ]
                                    .filter(Boolean)
                                    .join(' ')}
                                  style={{ textAlign: 'start' }}
                                >
                                  {item.author}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
