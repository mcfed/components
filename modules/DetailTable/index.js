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
    const {dataSource} = this.props
    return (
      <table className={this.props.tableClass}>
        <tbody>
          {this.showDom(dataSource)}
        </tbody>
      </table>
    )
  }
}
DetailTable.propTypes ={
  columnNumber: propTypes.number,
  dataSource: propTypes.array,
  tableClass: propTypes.string
}
export default DetailTable
