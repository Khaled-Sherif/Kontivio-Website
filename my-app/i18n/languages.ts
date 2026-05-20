export type Language = 'en' | 'de' | 'fr' | 'nl' | 'es' | 'it';

// Display order requested by user: EN, DE, FR, NL, ES, IT
export const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'fr', label: 'FR' },
  { code: 'nl', label: 'NL' },
  { code: 'es', label: 'ES' },
  { code: 'it', label: 'IT' },
];

// Map ISO country codes to our supported languages
export const COUNTRY_TO_LANG: Record<string, Language> = {
  // German
  DE: 'de', AT: 'de', CH: 'de', LI: 'de',
  // French
  FR: 'fr', BE: 'fr', LU: 'fr', MC: 'fr',
  // Dutch
  NL: 'nl',
  // Spanish
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es', VE: 'es',
  CR: 'es', CU: 'es', DO: 'es', EC: 'es', GT: 'es', HN: 'es', NI: 'es',
  PA: 'es', PY: 'es', SV: 'es', UY: 'es', BO: 'es', PR: 'es',
  // Italian
  IT: 'it', SM: 'it', VA: 'it',
};
