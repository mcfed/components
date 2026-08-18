import {
  CONDITION_FIELD_APP_NAME,
  CONDITION_FIELD_APP_USER,
  CONDITION_FIELD_ASSET_NAME,
  CONDITION_FIELD_AUDIT_LEVEL,
  CONDITION_FIELD_DATABASE_TYPE,
  CONDITION_FIELD_RESULT,
  CONDITION_FIELD_TIME_DOMAIN,
  CONDITION_VALUE_FAILURE,
  CONDITION_VALUE_HIGH,
  CONDITION_VALUE_LOW,
  CONDITION_VALUE_MIDDLE,
  CONDITION_VALUE_OFF_HOURS,
  CONDITION_VALUE_SUCCESS,
  CONDITION_VALUE_WORKDAY,
  CONDITION_VALUE_WEEKEND,
} from '../constants/chineseContracts';

export const downList = [
  {
    label: CONDITION_FIELD_APP_NAME,
    labelKey: 'conditionForm.appName',
    value: [
      'IMP',
      'EXP',
      'DBLINK',
      'JOB',
      'PLSQLDEV',
      'SQL DEVELOPER',
      'TOAD',
      'SQLPLUS',
    ],
  },
  {
    label: CONDITION_FIELD_RESULT,
    labelKey: 'conditionForm.result',
    value: [CONDITION_VALUE_SUCCESS, CONDITION_VALUE_FAILURE],
    valueLocaleKeys: {
      [CONDITION_VALUE_SUCCESS]: 'conditionForm.success',
      [CONDITION_VALUE_FAILURE]: 'conditionForm.failure',
    },
  },
  {
    label: CONDITION_FIELD_TIME_DOMAIN,
    labelKey: 'conditionForm.timeDomain',
    value: [
      CONDITION_VALUE_WEEKEND,
      CONDITION_VALUE_OFF_HOURS,
      CONDITION_VALUE_WORKDAY,
    ],
    valueLocaleKeys: {
      [CONDITION_VALUE_WEEKEND]: 'conditionForm.weekend',
      [CONDITION_VALUE_OFF_HOURS]: 'conditionForm.offHours',
      [CONDITION_VALUE_WORKDAY]: 'conditionForm.workday',
    },
  },
  {
    label: CONDITION_FIELD_AUDIT_LEVEL,
    labelKey: 'conditionForm.auditLevel',
    value: [CONDITION_VALUE_HIGH, CONDITION_VALUE_MIDDLE, CONDITION_VALUE_LOW],
    valueLocaleKeys: {
      [CONDITION_VALUE_HIGH]: 'conditionForm.high',
      [CONDITION_VALUE_MIDDLE]: 'conditionForm.middle',
      [CONDITION_VALUE_LOW]: 'conditionForm.low',
    },
  },
  {
    label: CONDITION_FIELD_DATABASE_TYPE,
    labelKey: 'conditionForm.databaseType',
    value: [
      'Oracle',
      'MySQL',
      'SQL Server',
      'DB2',
      'Sybase',
      'PostgreSQL',
      'Hive',
      'DaMeng',
      'KingBase',
      'Informix',
      'Mariadb',
      'GBase',
      'GBase 8s 8.3',
    ],
  },
];

export const conditionSelect = [
  {
    label: CONDITION_FIELD_ASSET_NAME,
    labelKey: 'conditionForm.assetName',
    value: CONDITION_FIELD_ASSET_NAME,
    factorOperate: '=,<>,in,not in,like,not like,is null,is not null',
  },
  {
    label: CONDITION_FIELD_APP_USER,
    labelKey: 'conditionForm.appUser',
    value: CONDITION_FIELD_APP_USER,
    factorOperate: '=,<>,in,not in,like,not like,is null,is not null',
  },
];
