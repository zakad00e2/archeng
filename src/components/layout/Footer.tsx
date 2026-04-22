import { useI18n } from '../../i18n/I18nProvider';
import { BrandLogo } from './BrandLogo';

export function Footer() {
  const { messages } = useI18n();
  const currentYear = new Date().getFullYear();
  const leftLinks = messages.footer.links.slice(0, 3);
  const rightLinks = messages.footer.links.slice(3);

  return (
    <div
      aria-label="Footer Wrapper"
      className="content-center items-center relative flex h-min w-full justify-center gap-[10px] pt-[10px] pr-0 pb-0 pl-0 shrink-[0]"
      style={{ order: '1002' }}
    >
      <div className="relative grow basis-0 w-px shrink-[0]">
        <div className="contents">
          <footer
            aria-label="Desktop"
            className="content-center items-center relative flex h-min w-full flex-col justify-center gap-[80px] overflow-hidden bg-white pt-[60px] pr-0 pb-10 pl-0"
          >
            <div
              aria-label="Background"
              className="absolute left-5 top-0 right-5 bottom-0 z-[1] rounded-tl-[0.625rem] rounded-tr-[0.625rem] bg-[rgb(16,_16,_20)] shrink-[0]"
            ></div>
            <div
              aria-label="Container"
              className="content-start items-start relative flex h-min w-full max-w-[1360px] flex-col justify-start gap-[60px] pt-0 pr-10 pb-0 pl-10 z-[1] shrink-[0]"
            >
              <div
                aria-label="Top"
                className="content-start items-start relative flex h-min w-full justify-between shrink-[0]"
              >
                <div
                  aria-label="Logo"
                  className="content-center items-center relative flex grow basis-0 justify-start gap-[10px] w-px shrink-[0]"
                >
                  <div className="relative shrink-[0]">
                    <BrandLogo textClassName="text-[1.3rem] sm:text-[1.45rem] md:text-[1.6rem]" />
                  </div>
                </div>
                <div
                  aria-label="Links"
                  className="content-start items-start relative flex size-min flex-col justify-start gap-[20px] shrink-[0]"
                >
                  <div className="relative self-stretch flex flex-col justify-start whitespace-pre-wrap shrink-[0]">
                    <h4
                      className="font-medium text-[24px] leading-[26.4px] tracking-[-0.4px] text-white"
                      style={{ textAlign: 'start' }}
                    >
                      {messages.footer.quickLinks}
                    </h4>
                  </div>
                  <div
                    aria-label="Links"
                    className="content-start items-start relative flex size-min justify-start gap-[80px] shrink-[0]"
                  >
                    <div
                      aria-label="Left links"
                      className="content-start items-start relative flex size-min flex-col justify-start gap-[10px] shrink-[0]"
                    >
                      {leftLinks.map((item) => (
                        <div
                          key={item.href}
                          className="relative flex min-w-[120px] flex-col justify-start whitespace-pre shrink-[0]"
                        >
                          <p className="text-[18px] leading-[27px] tracking-[-0.1px] text-[rgb(208,_209,_219)]">
                            <a className="footer-link" href={item.href}>
                              {item.label}
                            </a>
                          </p>
                        </div>
                      ))}
                    </div>
                    <div
                      aria-label="Right links"
                      className="content-start items-start relative flex size-min flex-col justify-start gap-[10px] shrink-[0]"
                    >
                      {rightLinks.map((item) => (
                        <div
                          key={item.href}
                          className="relative flex min-w-[120px] flex-col justify-start whitespace-pre shrink-[0]"
                        >
                          <p className="text-[18px] leading-[27px] tracking-[-0.1px] text-[rgb(208,_209,_219)]">
                            <a className="footer-link" href={item.href}>
                              {item.label}
                            </a>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div
                aria-label="Bottom"
                className='content-center items-center relative flex h-min w-full justify-between pt-10 pr-0 pb-0 pl-0 shrink-[0] after:absolute after:left-0 after:top-0 after:size-full after:border-t after:border-[rgb(34,_34,_34)] after:pointer-events-none after:content-[""]'
              >
                <div className="footer-meta footer-meta--rights relative flex grow basis-0 flex-col justify-start whitespace-pre-wrap w-px shrink-[0]">
                  <p className="footer-meta__text text-[16px] leading-[20.8px] tracking-[-0.1px] text-white">
                    {`© ${currentYear} Sireen. ${messages.footer.rightsReserved}`}
                  </p>
                </div>
                <div
                  aria-label="Bottom Right"
                  className="footer-meta footer-meta--credit content-center items-center relative flex grow basis-0 justify-end gap-[10px] h-min w-px shrink-[0]"
                >
                  <div className="relative flex flex-col justify-start whitespace-pre shrink-[0]">
                    <p
                      className="footer-meta__text text-[16px] leading-[20.8px] tracking-[-0.1px] text-white"
                      style={{ textAlign: 'start' }}
                    >
                      {messages.footer.creditLabel} {messages.footer.creditBy} zakaria safi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
