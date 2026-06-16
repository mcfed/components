import {
  SCENARIO_KEYS,
  getScenarioConfig,
  getSelectableRowKeys,
  getSelectedCount,
} from '../scenarios';

describe('DataTableV2 demo scenarios', () => {
  it('exposes focused scenarios for display and interaction testing', () => {
    expect(SCENARIO_KEYS).toEqual([
      'standard',
      'dense',
      'wide',
      'longText',
      'empty',
      'loading',
    ]);
  });

  it('returns an isolated default scenario config', () => {
    const first = getScenarioConfig('standard');
    const second = getScenarioConfig('standard');

    expect(first.title).toBe('标准数据');
    expect(first.dataSource.length).toBeGreaterThan(20);
    expect(first.columns.length).toBeGreaterThan(8);

    first.dataSource[0].customer = 'mutated';
    expect(second.dataSource[0].customer).not.toBe('mutated');
  });

  it('calculates selectable and selected row counts with disabled rows', () => {
    const dataSource = [{id: 1}, {id: 2, disabled: true}, {id: 3}];

    expect(getSelectableRowKeys(dataSource)).toEqual([1, 3]);
    expect(getSelectedCount('checkAll', dataSource, [1], 100)).toBe(99);
    expect(getSelectedCount('checkOne', dataSource, [1, 3], 100)).toBe(2);
  });
});
