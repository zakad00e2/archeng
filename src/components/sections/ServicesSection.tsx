import { useState } from 'react';

import { Reveal } from '../motion/Reveal';
import { useI18n } from '../../i18n/I18nProvider';
import type { ServiceKey } from '../../i18n/types';

const serviceVisuals: Array<{
  id: ServiceKey;
  image: string;
  icon: string;
}> = [
  {
    id: 'kitchens',
    image:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Ff850d048ed178d4ff8556a96ab85c61030757f22.png?generation=1776714192638045&alt=media',
    icon:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Ffbea522b53a350ae07206e0b63d7e07825518720.svg?generation=1776714192656723&alt=media',
  },
  {
    id: 'extensions',
    image:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F53f49198507ede30b59f88e974e65001e0c6a3c5.png?generation=1776714192633660&alt=media',
    icon:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F6006c1a6da6c10fef2dfe3df40fb8188d35bdfda.svg?generation=1776714192880193&alt=media',
  },
  {
    id: 'loftConversions',
    image:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Ff830f37a67558f9fedda082fed1b4a749f4e753f.png?generation=1776714192629851&alt=media',
    icon:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F601555abb450c701dd922bd85ba97d53bcbbdf39.svg?generation=1776714192609753&alt=media',
  },
  {
    id: 'bathrooms',
    image:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F72816adf3c92df9fecd2c20d77f857ce1f372f57.png?generation=1776714192607593&alt=media',
    icon:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F19f8b0206f5e83d83937e57a57042ea52558d3e4.svg?generation=1776714192606124&alt=media',
  },
  {
    id: 'restorations',
    image:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fc1d24e0802b76ff5ab0cfe579931eaba8c205c9b.png?generation=1776714192640777&alt=media',
    icon:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F38d9769a579a42f964936c378c8aad0e86115677.svg?generation=1776714192897295&alt=media',
  },
  {
    id: 'externalWorks',
    image:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F5a49c4c45f323d3b16009476349dcf2166199398.png?generation=1776714192651566&alt=media',
    icon:
      'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F84f86dc89d8ebf1347658a2c7eac91f6ecc5387f.svg?generation=1776714192883328&alt=media',
  },
];

export function ServicesSection() {
  const { messages, isRTL } = useI18n();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const services = serviceVisuals.map((service) => ({
    ...service,
    ...messages.services.items[service.id],
  }));

  return (
    <section
      id="services"
      aria-label="Services"
      className="content-center items-center relative flex h-min w-full flex-col justify-center gap-[60px] bg-[rgb(250,_250,_250)] pt-[100px] pr-0 pb-[100px] pl-0 shrink-[0]"
    >
      <div
        aria-label="Container"
        className="content-center items-center relative flex h-min w-full max-w-[1360px] flex-col justify-center gap-[60px] pt-0 pr-10 pb-0 pl-10 shrink-[0]"
      >
        <Reveal
          aria-label="Header"
          className="content-center items-center relative flex h-min w-full max-w-[50%] flex-col justify-center gap-[20px] z-[1] shrink-[0]"
        >
          <div
            aria-label="Title"
            className="content-center items-center relative flex h-min w-full flex-col justify-center gap-[10px] shrink-[0]"
          >
            <div className="relative">
              <div
                aria-label="Badge"
                className="content-center items-center relative flex size-min justify-center gap-[8px] overflow-hidden rounded-2xl bg-[rgb(40,_40,_44)] pt-[5px] pr-3 pb-[6px] pl-3"
              >
                <div className="relative flex flex-col justify-start whitespace-pre shrink-[0]">
                  <h2 className="font-medium text-[16px] leading-[16px] tracking-[0.5px] text-white">
                    {messages.services.badge}
                  </h2>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-col justify-start whitespace-pre-wrap shrink-[0]">
              <h3 className="text-center font-medium text-[50px] leading-[55px] tracking-[-0.8px] text-[rgb(16,_16,_20)]">
                {messages.services.heading}
              </h3>
            </div>
          </div>
          <div className="relative flex w-full max-w-full flex-col justify-start whitespace-pre-wrap shrink-[0]">
            <p className="text-center text-[22px] leading-[33px] tracking-[-0.3px] text-[rgb(61,_61,_71)]">
              {messages.services.description}
            </p>
          </div>
        </Reveal>

        <div className="grid w-full items-start gap-[60px] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-[130px]">
          <Reveal
            className="services-visual relative min-h-[420px] aspect-[0.92/1] overflow-hidden rounded-[0.875rem] bg-[rgb(233,_236,_242)] lg:min-h-[686px]"
            delay={100}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10"></div>
            {services.map((service, index) => (
              <div
                key={service.id}
                className={['service-image absolute inset-0', index === activeImageIndex ? 'is-active' : '']
                  .filter(Boolean)
                  .join(' ')}
              >
                <img src={service.image} alt={service.title} className="block size-full object-cover" />
              </div>
            ))}
          </Reveal>

          <div
            aria-label="Services List"
            className="content-center items-center relative flex grow basis-0 w-full flex-col justify-start gap-[0px] overflow-hidden shrink-[0]"
          >
            {services.map((service, index) => {
              const isActive = index === expandedIndex;

              return (
                <Reveal
                  key={service.id}
                  className={['service-row relative w-full', isActive ? 'is-active' : '']
                    .filter(Boolean)
                    .join(' ')}
                  delay={120 + index * 70}
                >
                  <button
                    type="button"
                    aria-expanded={isActive}
                    onClick={() => {
                      if (expandedIndex === index) {
                        setExpandedIndex(null);
                      } else {
                        setExpandedIndex(index);
                        setActiveImageIndex(index);
                      }
                    }}
                    className="content-center items-center relative flex h-min w-full justify-between overflow-hidden pt-5 pr-0 pb-5 pl-0"
                    style={{ textAlign: 'start' }}
                  >
                    <div className="content-center items-center relative flex grow basis-0 justify-center gap-[20px] w-px shrink-[0]">
                      <div className="relative z-[1] aspect-square w-10 shrink-[0]">
                        <div className="absolute left-0 top-0 right-0 bottom-0">
                          <img src={service.icon} alt="" className="block size-full object-cover" />
                        </div>
                      </div>
                      <div className="relative flex grow basis-0 w-px flex-col justify-start whitespace-pre-wrap shrink-[0]">
                        <h4 className="font-medium text-[22px] leading-[30.8px] tracking-[-0.2px] text-[rgb(16,_16,_20)]">
                          {service.title}
                        </h4>
                      </div>
                    </div>
                    <div
                      className="relative h-6 w-6 shrink-[0]"
                      style={{ transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)' }}
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
                      'service-copy',
                      isRTL ? 'pl-[30px]' : 'pr-[30px]',
                      isActive ? 'is-expanded' : 'is-collapsed',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <div className="pb-[30px]">
                      <p
                        className="text-[18px] leading-[27px] tracking-[-0.1px] text-[rgb(61,_61,_71)]"
                        style={{ textAlign: 'start' }}
                      >
                        {service.description}
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
