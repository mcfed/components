import React from 'react';
import Td from './td';
import './index.less';

interface DetailProps {
  mode: Array<any> | object;
  columnNumber: number;
  dataSource: Array<any> | object;
  tableClass: string;
  title: string;
  labelKey: string;
  valueKey: string;
}

export default class DetailTable extends React.Component<DetailProps, {}> {
  static defaultProps = {
    columnNumber: 2,
    title: 'datailtable',
    tableClass: 'ant-table ant-table-bordered ant-table-detail',
    labelKey: 'name',
    valueKey: 'value'
  };
  showDom(dataSource: any) {
    let Data = [];
    if (typeof this.props.mode === 'object' && Array.isArray(dataSource)) {
      throw Error('使用对象模式，数据必须为object');
    }
    if (!Array.isArray(dataSource) && typeof this.props.mode !== 'object') {
      throw Error('数据为对象时，mode需要为object');
    }
    if (this.props.mode && typeof this.props.mode === 'object') {
      for (let a in dataSource) {
        Data.push({
          [this.props.labelKey]: a,
          [this.props.valueKey]: dataSource[a]
        });
      }
    } else {
      Data = [...dataSource];
    }
    let columnNumber =
      this.props.columnNumber === undefined ? 1 : this.props.columnNumber;
    if (columnNumber <= 0) {
      throw Error('列数必须大于0');
    }
    let array: Array<any> = [];
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
    return array.map((d: Array<any>, k: any) => (
      <tr key={k}>
        {d.map((c: Array<any>, v: any) => (
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
    return (
      <div className={tableClass}>
        <div className='ant-table-title'>{title}</div>
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
