import React from 'react'
import propTypes from 'prop-types'

const Td = ({name, value, nameClass = '', valueClass = ''}) => [
  <td className={nameClass} key={'td' + name}>{typeof name === 'function' ? name() : name}</td>,
  <td className={valueClass} key={'td1' + name}>{typeof value === 'function' ? value() : value}</td>
]
Td.propTypes = {
  nameClass: propTypes.string,
  valueClass: propTypes.string
}
export default Td
