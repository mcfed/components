import React from 'react'
import Td from './td'
import propTypes from 'prop-types'
class DetailTable extends React.Component {
  showDom = (dataSource) => {
    let columnNumber = this.props.columnNumber === undefined? 1 : this.props.columnNumber
    if(columnNumber <=0 ){
      throw Error('列数必须大于0')
    }
    let trLength = Math.ceil(dataSource.length / columnNumber)
    let dom = []
    for (let i = 0;i < trLength; i++) {
      dom.push(<tr key = {'tr' + i}>
      {dataSource.map((v, k) => (k >= columnNumber*i && k< columnNumber*i + columnNumber) && <Td {...this.props} key={'td'+ k} name={v.name} value={v.value} />)}
      </tr>)
    }
    return dom
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
  columnNumber: propTypes.number,
  dataSource: propTypes.array,
  tableClass: propTypes.string,
  title: propTypes.string
}

DetailTable.defaultProps={
  columnNumber:2,
  tableClass:"ant-table ant-table-bordered ant-table-detail"
}
export default DetailTable
