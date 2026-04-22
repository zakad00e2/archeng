import { useI18n } from '../../i18n/I18nProvider';
import { locales } from '../../i18n/types';

export function LanguageSwitcher() {
  const { locale, messages, setLocale } = useI18n();

  return (
    <div
      role="group"
      aria-label={messages.aria.languageSwitcher}
      className="content-center items-center flex size-min justify-center overflow-hidden rounded-full border border-white/12 bg-white/10 p-1 backdrop-blur-[14px]"
    >
      {locales.map((localeCode) => {
        const isActive = locale === localeCode;

        return (
          <button
            key={localeCode}
            type="button"
            aria-pressed={isActive}
            onClick={() => setLocale(localeCode)}
            className={[
              'rounded-full px-3 py-2 text-[13px] font-medium leading-[13px]',
              isActive ? 'bg-white text-[rgb(16,_16,_20)]' : 'text-white/82',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {messages.switcher.locales[localeCode]}
          </button>
        );
      })}
    </div>
  );
}
