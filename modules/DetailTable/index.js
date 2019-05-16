import React from 'react'
import Td from './td'
import propTypes from 'prop-types'

import './index.less'

class DetailTable extends React.Component {
  showDom = (dataSource) => {
    let Data = []
    if(this.props.mode === 'object' && Array.isArray(dataSource)) {
      throw Error('使用对象模式，数据必须为object')
    }
    if(!Array.isArray(dataSource) && this.props.mode !== 'object') {
      throw Error('数据为对象时，mode需要为object')
    }
    if(this.props.mode && this.props.mode === 'object'){
      for(let a in dataSource) {
        Data.push({label:a,value: dataSource[a]})
      }
    }else{
      Data = [...dataSource]
    }
    let columnNumber = this.props.columnNumber === undefined? 1 : this.props.columnNumber
    if(columnNumber <=0 ){
      throw Error('列数必须大于0')
    }
    let array = []
    while (Data.length > 0) {
      let ar = []
      for (let i = 0; i< columnNumber;i++) {
        let obj = Data.shift()
        if(obj === undefined) {
          obj = {label:'',value:''}
        }
        if(obj.colspan && obj.colspan > 0) {
          ar.push(obj)
          i = i + obj.colspan - 1
        }else{
          ar.push(obj)
        }
      }
      array.push(ar)
    }
    return array.map((d,k) => <tr key = {k}>{d.map((c,v)=><Td key={v} dataSource={c} labelKey={this.props.labelKey} valueKey={this.props.valueKey} />)}</tr>)
  }
  render () {
    const {dataSource,title,tableClass} = this.props
    return (
      <div className={tableClass}>
      <div className="ant-table-title">{title}</div>
        <div className="ant-table-content">
          <div className="ant-table-body">
          <table  style={{width:'100%'}}>
            <tbody className="ant-table-tbody">
              {this.showDom(dataSource)}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    )
  }
}
DetailTable.propTypes ={
  mode: propTypes.oneOf(['object', 'array']),
  columnNumber: propTypes.number,
  dataSource: propTypes.array,
  tableClass: propTypes.string,
  title: propTypes.string,
  labelKey: propTypes.string,
  valueKey: propTypes.string,
}

DetailTable.defaultProps={
  columnNumber:2,
  title:"datailtable",
  tableClass:"ant-table ant-table-bordered ant-table-detail"
}
export default DetailTable
