import {
  default as runtime,
  getMcfedLocale,
  getMessagesVersion,
  mergeMessages,
  setMcfedLocale,
  subscribe,
  t,
} from '../index';

describe('mcfed components i18n runtime', () => {
  beforeEach(() => {
    window.__MCFED_COMPONENTS_LOCALE__ = undefined;
    document.documentElement.lang = '';
    localStorage.clear();
  });

  it('normalizes unknown locales to zh-CN and falls back to zh-CN messages', () => {
    setMcfedLocale('fr-FR');

    expect(getMcfedLocale()).toBe('zh-CN');
    expect(t('common.confirm')).toBe('确认');
  });

  it('switches built-in messages and formats interpolation values', () => {
    setMcfedLocale('en-US');

    expect(getMcfedLocale()).toBe('en-US');
    expect(t('dataTable.total', {total: 8})).toBe('8 items');
  });

  it('merges external messages, bumps version, and notifies subscribers', () => {
    const listener = jest.fn();
    const unsubscribe = subscribe(listener);
    const beforeVersion = getMessagesVersion();

    mergeMessages('en-US', {'common.confirm': 'Proceed'}, 'host');
    setMcfedLocale('en-US');

    expect(t('common.confirm')).toBe('Proceed');
    expect(getMessagesVersion()).not.toBe(beforeVersion);
    expect(listener).toHaveBeenCalled();

    unsubscribe();
    listener.mockClear();
    mergeMessages('en-US', {'common.cancel': 'Dismiss'}, 'host');
    expect(listener).not.toHaveBeenCalled();
  });

  it('keeps built-in zh-CN and en-US keys aligned', () => {
    const zhKeys = Object.keys(runtime.messages['zh-CN']).sort();
    const enKeys = Object.keys(runtime.messages['en-US']).sort();

    expect(enKeys).toEqual(zhKeys);
  });
});
