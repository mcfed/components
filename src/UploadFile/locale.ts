import {t} from '../i18n';

const locale = {};

Object.defineProperties(locale, {
  uploadText: {
    enumerable: true,
    get: () => t('uploadFile.uploadText'),
  },
});

export default locale;
