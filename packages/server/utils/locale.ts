import i18next from 'i18next';
import { LanguageDetector } from 'i18next-express-middleware';
import en from '../../locales/en/translation.json';
import ja from '../../locales/ja/translation.json';

export const createI18n = () => {
  i18next.use(LanguageDetector).init({
    resources: {
      en: { translation: en },
      ja: { translation: ja },
    },
    ns: ['translation'],
    defaultNS: 'translation',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: true,
    },
  });

  return i18next;
};
