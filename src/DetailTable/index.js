import React from 'react';
import Td from './td';
import propTypes from 'prop-types';

import './index.less';

class DetailTable extends React.Component {
  showDom = dataSource => {
    let Data = [];
    if (this.props.mode === 'object' && Array.isArray(dataSource)) {
      throw Error('使用对象模式，数据必须为object');
    }
    if (!Array.isArray(dataSource) && this.props.mode !== 'object') {
      throw Error('数据为对象时，mode需要为object');
    }
    if (this.props.mode && this.props.mode === 'object') {
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
    let array = [];
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
    return array.map((d, k) => (
      <tr key={k}>
        {d.map((c, v) => (
          <Td
            key={v}
            dataSource={c}
            labelKey={this.props.labelKey}
            valueKey={this.props.valueKey}
          />
        ))}
      </tr>
    ));
  };
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
DetailTable.propTypes = {
  /**
  支持数组模式和对象模式（'array',object）默认数组模式
  **/
  mode: propTypes.oneOf(['object', 'array']),
  /**
  定义列数，不得小于0
  **/
  columnNumber: propTypes.number,
  /**
  传递数据，根据类型传递相应的数据
  **/
  dataSource: propTypes.oneOfType([propTypes.array, propTypes.object]),
  /**
  表格外包div类名
  **/
  tableClass: propTypes.string,
  /**
  表格title
  **/
  title: propTypes.string,
  /**
  组模式下配置显示名称key值，默认label
  **/
  labelKey: propTypes.string,
  /**
  数组模式下配置显示名称value值，默认value
  **/
  valueKey: propTypes.string
};

DetailTable.defaultProps = {
  columnNumber: 2,
  title: 'datailtable',
  tableClass: 'ant-table ant-table-bordered ant-table-detail',
  labelKey: 'name',
  valueKey: 'value'
};
export default DetailTable;
