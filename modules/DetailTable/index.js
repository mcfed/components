import React from 'react'
import Td from './td'
import propTypes from 'prop-types'
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
    let trLength = Math.ceil(Data.length / columnNumber)
    let remainder = Data.length % columnNumber
    // 数据不足进行补充
    if(remainder > 0) {
      for(let b = 0;b<remainder;b++) {
        Data.push({name:'',value:''})
      }
    }
    for (let i = 0;i < trLength; i++) {
      array.push(Data.slice(columnNumber*i, columnNumber*i + columnNumber))
    }
    return array.map((d,k) => <tr key = {k}>{d.map((c,v)=><Td key={v} dataSource={c} labelKey={this.props.labelKey} valueKey={this.props.valueKey} />)}</tr>)
  }
  render () {
    const {dataSource} = this.props
    return (
      <table style={{width:'100%'}} className={this.props.tableClass}>
        <tbody>
          {this.showDom(dataSource)}
        </tbody>
      </table>
    )
  }
}
DetailTable.propTypes ={
  mode: propTypes.oneOf(['object', 'array']),
  columnNumber: propTypes.number,
  dataSource: propTypes.oneOfType([
    propTypes.array,
    propTypes.object,
  ]),
  tableClass: propTypes.string
}
export default DetailTable
