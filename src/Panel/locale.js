import {t} from '../i18n';

const locale = {};

Object.defineProperties(locale, {
  okText: {
    enumerable: true,
    get: () => t('common.confirm'),
  },
  cancelText: {
    enumerable: true,
    get: () => t('common.cancel'),
  },
});

export default locale;
