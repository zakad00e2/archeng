import {
  createContext,
  type PropsWithChildren,
  useContext,
  useLayoutEffect,
} from 'react';

import { directionByLocale, translations } from '.';
import type { Locale, TranslationDictionary } from './types';

const STORAGE_KEY = 'sireen.locale';
const LOCALE_QUERY_PARAM = 'lang';

type I18nContextValue = {
  locale: Locale;
  direction: 'ltr' | 'rtl';
  isRTL: boolean;
  messages: TranslationDictionary;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function clearLocaleFromUrl() {
  const url = new URL(window.location.href);
  if (!url.searchParams.has(LOCALE_QUERY_PARAM)) {
    return;
  }

  url.searchParams.delete(LOCALE_QUERY_PARAM);
  window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
}

function upsertMetaDescription(content: string) {
  let descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');

  if (!descriptionMeta) {
    descriptionMeta = document.createElement('meta');
    descriptionMeta.name = 'description';
    document.head.appendChild(descriptionMeta);
  }

  descriptionMeta.content = content;
}

export function I18nProvider({ children }: PropsWithChildren) {
  const locale: Locale = 'ar';
  const direction = directionByLocale[locale];
  const messages = translations[locale];
  const setLocale = () => undefined;

  useLayoutEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
    document.title = messages.metadata.title;
    upsertMetaDescription(messages.metadata.description);

    window.localStorage.setItem(STORAGE_KEY, locale);
    clearLocaleFromUrl();
  }, [direction, locale, messages]);

  const value: I18nContextValue = {
    locale,
    direction,
    isRTL: direction === 'rtl',
    messages,
    setLocale,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider.');
  }

  return context;
}
