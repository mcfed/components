import {
  CONDITION_FIELD_APP_NAME,
  CONDITION_FIELD_APP_USER,
  CONDITION_FIELD_ASSET_NAME,
  CONDITION_FIELD_AUDIT_LEVEL,
  CONDITION_FIELD_DATABASE_TYPE,
  CONDITION_FIELD_RESULT,
  CONDITION_FIELD_TIME_DOMAIN,
  CONDITION_VALUE_FAILURE,
  CONDITION_VALUE_SUCCESS,
  TABLE_OPERATION_COLUMN,
} from '../chineseContracts';
import {conditionSelect, downList} from '../../ConditionForm/data';

describe('chinese business contracts', () => {
  it('keeps exact ConditionForm values used for sql and legacy conversion', () => {
    expect(CONDITION_FIELD_APP_NAME).toBe('应用程序名');
    expect(CONDITION_FIELD_RESULT).toBe('执行结果');
    expect(CONDITION_FIELD_TIME_DOMAIN).toBe('时间域');
    expect(CONDITION_FIELD_AUDIT_LEVEL).toBe('审计级别');
    expect(CONDITION_FIELD_DATABASE_TYPE).toBe('数据库类型');
    expect(CONDITION_FIELD_ASSET_NAME).toBe('资产名');
    expect(CONDITION_FIELD_APP_USER).toBe('应用用户');
    expect(CONDITION_VALUE_SUCCESS).toBe('成功');
    expect(CONDITION_VALUE_FAILURE).toBe('失败');
  });

  it('keeps ConditionForm option values separate from display locale keys', () => {
    expect(conditionSelect[0]).toMatchObject({
      value: CONDITION_FIELD_ASSET_NAME,
      labelKey: 'conditionForm.assetName',
    });
    expect(downList[1]).toMatchObject({
      label: CONDITION_FIELD_RESULT,
      labelKey: 'conditionForm.result',
      value: [CONDITION_VALUE_SUCCESS, CONDITION_VALUE_FAILURE],
    });
  });

  it('keeps the legacy operation column identifier unchanged', () => {
    expect(TABLE_OPERATION_COLUMN).toBe('操作');
  });
});
