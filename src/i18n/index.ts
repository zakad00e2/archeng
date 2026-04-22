import { ar } from './locales/ar';
import { en } from './locales/en';
import type { Direction, Locale, TranslationDictionary } from './types';

export const directionByLocale: Record<Locale, Direction> = {
  en: 'ltr',
  ar: 'rtl',
};

export const translations: Record<Locale, TranslationDictionary> = {
  en,
  ar,
};
