import React from 'react';

import Td from './td';
import {t} from '../i18n';

interface DetailProps<T = any> {
  mode: 'array' | 'object';
  columnNumber: number;
  dataSource: T[] | object;
  tableClass: string;
  title: string;
  labelKey: string;
  valueKey: string;
}

export default class DetailTable extends React.Component<DetailProps, {}> {
  static defaultProps = {
    columnNumber: 2,
    tableClass: 'ant-table ant-table-bordered ant-table-detail',
    labelKey: 'name',
    valueKey: 'value',
  };
  showDom(dataSource: any) {
    let Data = [];
    if (this.props.mode === 'object' && Array.isArray(dataSource)) {
      throw Error(t('detailTable.objectModeRequired'));
    }
    if (!Array.isArray(dataSource) && this.props.mode !== 'object') {
      throw Error(t('detailTable.objectDataModeRequired'));
    }
    if (this.props.mode && this.props.mode === 'object') {
      for (let a in dataSource) {
        Data.push({
          [this.props.labelKey]: a,
          [this.props.valueKey]: dataSource[a],
        });
      }
    } else {
      Data = [...dataSource];
    }
    let columnNumber =
      this.props.columnNumber === undefined ? 1 : this.props.columnNumber;
    if (columnNumber <= 0) {
      throw Error(t('detailTable.columnNumberRequired'));
    }
    let array: any[] = [];
    while (Data.length > 0) {
      let ar = [];
      for (let i = 0; i < columnNumber; i++) {
        let obj = Data.shift();
        if (obj === undefined) {
          obj = {[this.props.labelKey]: '', [this.props.valueKey]: ''};
        }
        if (obj.colspan && obj.colspan > 0) {
          ar.push(obj);
          i = i + obj.colspan - 1;
        } else {
          ar.push(obj);
        }
      }
      array.push(ar);
    }
    return array.map((d: any[], k: any) => (
      <tr key={k}>
        {d.map((c: any[], v: any) => (
          <Td
            key={v}
            dataSource={c}
            labelKey={this.props.labelKey}
            valueKey={this.props.valueKey}
          />
        ))}
      </tr>
    ));
  }

  render() {
    const {dataSource, title, tableClass} = this.props;
    const tableTitle = title || t('detailTable.title');
    return (
      <div className={tableClass}>
        <div className='ant-table-title'>{tableTitle}</div>
        <div className='ant-table-content'>
          <div className='ant-table-body'>
            <table style={{width: '100%'}}>
              <tbody className='ant-table-tbody'>
                {this.showDom(dataSource)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
