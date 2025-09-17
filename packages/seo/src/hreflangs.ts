export interface HreflangConfig {
  locale: string;
  country: string;
  url: string;
  default?: boolean;
}

export const supportedLocales = {
  'en-US': { locale: 'en', country: 'US', name: 'English (US)' },
  'en-GB': { locale: 'en', country: 'GB', name: 'English (UK)' },
  'de-DE': { locale: 'de', country: 'DE', name: 'Deutsch (Germany)' },
  'fr-FR': { locale: 'fr', country: 'FR', name: 'Français (France)' },
  'es-ES': { locale: 'es', country: 'ES', name: 'Español (Spain)' },
  'it-IT': { locale: 'it', country: 'IT', name: 'Italiano (Italy)' },
  'pt-BR': { locale: 'pt', country: 'BR', name: 'Português (Brazil)' },
  'ru-RU': { locale: 'ru', country: 'RU', name: 'Русский (Russia)' },
  'ja-JP': { locale: 'ja', country: 'JP', name: '日本語 (Japan)' },
  'ko-KR': { locale: 'ko', country: 'KR', name: '한국어 (Korea)' },
  'zh-CN': { locale: 'zh', country: 'CN', name: '中文 (China)' },
} as const;

export type SupportedLocale = keyof typeof supportedLocales;

export function generateHreflangs(
  baseUrl: string,
  currentPath: string,
  locales: SupportedLocale[] = ['en-US']
): HreflangConfig[] {
  return locales.map((locale, index) => ({
    locale,
    country: supportedLocales[locale].country,
    url: `${baseUrl}/${locale}${currentPath}`,
    default: index === 0,
  }));
}

export function getAlternateUrls(
  baseUrl: string,
  currentPath: string,
  currentLocale: SupportedLocale,
  locales: SupportedLocale[]
): Record<SupportedLocale, string> {
  const alternates: Partial<Record<SupportedLocale, string>> = {};
  
  locales.forEach(locale => {
    if (locale !== currentLocale) {
      alternates[locale] = `${baseUrl}/${locale}${currentPath}`;
    }
  });
  
  return alternates as Record<SupportedLocale, string>;
}