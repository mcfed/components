import zhCN from '../locales/zh-CN';
import enUS from '../locales/en-US';

const messages = {
  'zh-CN': zhCN,
  'en-US': enUS,
};

const aliases = {
  zh: 'zh-CN',
  cn: 'zh-CN',
  'zh-cn': 'zh-CN',
  zh_cn: 'zh-CN',
  'zh-hans': 'zh-CN',
  en: 'en-US',
  'en-us': 'en-US',
  en_us: 'en-US',
};

const listeners = [];
const overrideMessages = {
  host: {},
  user: {},
};
let messagesVersion = 0;
let currentLocale = 'zh-CN';

export function normalizeMcfedLocale(locale) {
  if (!locale) return 'zh-CN';
  return aliases[String(locale).trim().toLowerCase()] || 'zh-CN';
}

export function getMcfedLocale() {
  if (typeof window === 'undefined') return currentLocale;
  const win = window;
  return normalizeMcfedLocale(
    win.__MCFED_COMPONENTS_LOCALE__ ||
      win.__USERCENTER_LOCALE__ ||
      win.__MC_LOCALE__ ||
      document.documentElement.lang ||
      localStorage.getItem('locale') ||
      localStorage.getItem('lang') ||
      localStorage.getItem('language') ||
      localStorage.getItem('i18nextLng'),
  );
}

function notifyLocaleChange(locale) {
  listeners.slice().forEach((listener) => listener(locale));
}

export function setMcfedLocale(locale) {
  const nextLocale = normalizeMcfedLocale(locale);
  currentLocale = nextLocale;
  if (typeof window !== 'undefined') {
    window.__MCFED_COMPONENTS_LOCALE__ = nextLocale;
    window.dispatchEvent(
      new CustomEvent('mcfed-components:locale-change', {
        detail: {locale: nextLocale},
      }),
    );
  }
  notifyLocaleChange(nextLocale);
  return nextLocale;
}

export function subscribe(listener) {
  listeners.push(listener);
  return () => {
    const index = listeners.indexOf(listener);
    if (index > -1) {
      listeners.splice(index, 1);
    }
  };
}

export function mergeMessages(locale, nextMessages, source = 'host') {
  const nextLocale = normalizeMcfedLocale(locale);
  const layer = source === 'user' ? 'user' : 'host';
  overrideMessages[layer][nextLocale] = {
    ...(overrideMessages[layer][nextLocale] || {}),
    ...(nextMessages || {}),
  };
  messagesVersion += 1;
  notifyLocaleChange(nextLocale);
  return messagesVersion;
}

export function getMessagesVersion() {
  return String(messagesVersion);
}

if (typeof window !== 'undefined') {
  window.addEventListener('usercenter:locale-change', (event) => {
    setMcfedLocale(event && event.detail && event.detail.locale);
  });
  window.addEventListener('storage', () => {
    setMcfedLocale(getMcfedLocale());
  });

  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(() => {
      setMcfedLocale(document.documentElement.lang);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang'],
    });
  }
}

export function t(id, values) {
  const locale =
    typeof window !== 'undefined' && window.__MCFED_COMPONENTS_LOCALE__
      ? normalizeMcfedLocale(window.__MCFED_COMPONENTS_LOCALE__)
      : getMcfedLocale();
  const template =
    (overrideMessages.user[locale] && overrideMessages.user[locale][id]) ||
    (overrideMessages.host[locale] && overrideMessages.host[locale][id]) ||
    (messages[locale] && messages[locale][id]) ||
    (overrideMessages.user['zh-CN'] && overrideMessages.user['zh-CN'][id]) ||
    (overrideMessages.host['zh-CN'] && overrideMessages.host['zh-CN'][id]) ||
    messages['zh-CN'][id] ||
    id;
  if (!values) return template;
  return template.replace(/\{(\w+)\}/g, (_, key) =>
    values[key] === undefined ? `{${key}}` : String(values[key]),
  );
}

export function withLocaleRender(Component) {
  return Component;
}

export default {
  messages,
  normalizeLocale: normalizeMcfedLocale,
  getLocale: getMcfedLocale,
  setLocale: setMcfedLocale,
  mergeMessages,
  subscribe,
  getMessagesVersion,
  t,
};
