import {t} from '../i18n';

const locale = {};

Object.defineProperties(locale, {
  searchText: {
    enumerable: true,
    get: () => t('advancedSearch.searchText'),
  },
  resetBtnText: {
    enumerable: true,
    get: () => t('advancedSearch.resetText'),
  },
  collapseText: {
    enumerable: true,
    get: () => t('advancedSearch.upText'),
  },
  openCollapseText: {
    enumerable: true,
    get: () => t('advancedSearch.downText'),
  },
});

export default locale;
