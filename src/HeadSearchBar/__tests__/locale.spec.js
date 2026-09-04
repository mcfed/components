import locale from '../locale';
import {setMcfedLocale} from '../../i18n';
import zhCN from '../../locales/zh-CN';
import enUS from '../../locales/en-US';

describe('HeadSearchBar locale', () => {
  afterEach(() => {
    setMcfedLocale('zh-CN');
  });

  it('provides the button labels consumed by HeadSearchBar', () => {
    setMcfedLocale('zh-CN');
    expect(locale.searchText).toBe(zhCN['advancedSearch.searchText']);
    expect(locale.resetBtnText).toBe(zhCN['advancedSearch.resetText']);
    expect(locale.collapseText).toBe(zhCN['advancedSearch.upText']);
    expect(locale.openCollapseText).toBe(zhCN['advancedSearch.downText']);

    setMcfedLocale('en-US');
    expect(locale.searchText).toBe(enUS['advancedSearch.searchText']);
    expect(locale.resetBtnText).toBe(enUS['advancedSearch.resetText']);
    expect(locale.collapseText).toBe(enUS['advancedSearch.upText']);
    expect(locale.openCollapseText).toBe(enUS['advancedSearch.downText']);
  });
});
