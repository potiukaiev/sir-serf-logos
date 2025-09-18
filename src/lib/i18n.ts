import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all translation files
import enTranslations from '../locales/en.json';
import itTranslations from '../locales/it.json';
import frTranslations from '../locales/fr.json';
import deTranslations from '../locales/de.json';
import plTranslations from '../locales/pl.json';
import uaTranslations from '../locales/ua.json';
import ruTranslations from '../locales/ru.json';
import esTranslations from '../locales/es.json';
import ptTranslations from '../locales/pt.json';
import trTranslations from '../locales/tr.json';

const resources = {
  en: { translation: enTranslations },
  it: { translation: itTranslations },
  fr: { translation: frTranslations },
  de: { translation: deTranslations },
  pl: { translation: plTranslations },
  ua: { translation: uaTranslations },
  ru: { translation: ruTranslations },
  es: { translation: esTranslations },
  pt: { translation: ptTranslations },
  tr: { translation: trTranslations }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;