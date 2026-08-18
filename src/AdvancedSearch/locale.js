import {t} from '../i18n';

const locale = {};

Object.defineProperties(locale, {
  searchText: {
    enumerable: true,
    get: () => t('advancedSearch.searchText'),
  },
  resetText: {
    enumerable: true,
    get: () => t('advancedSearch.resetText'),
  },
  upText: {
    enumerable: true,
    get: () => t('advancedSearch.upText'),
  },
  downText: {
    enumerable: true,
    get: () => t('advancedSearch.downText'),
  },
});

export default locale;
