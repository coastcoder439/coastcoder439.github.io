import { getRequestConfig } from 'next-intl/server';
import { defaultLocale } from './settings';

// Eine Sprache, eine Zeitzone — keine Aushandlung über Cookie oder Accept-Language.
export default getRequestConfig(async () => ({
    locale: defaultLocale,
    messages: (await import(`../../messages/${defaultLocale}.json`)).default,
    timeZone: 'Europe/Berlin',
}));
