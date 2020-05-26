import React from 'react';
import propTypes from 'prop-types';

const Td = ({
  dataSource,
  labelKey = dataSource[labelKey],
  valueKey = dataSource[valueKey]
}) => {
  return [
    <th key={'td' + dataSource[labelKey]}>
      {typeof dataSource[labelKey] === 'function'
        ? dataSource[labelKey]()
        : dataSource[labelKey]}
    </th>,
    <td
      colSpan={dataSource.colspan ? dataSource.colspan : null}
      key={'td1' + dataSource[valueKey]}>
      {typeof dataSource[valueKey] === 'function'
        ? dataSource[valueKey]()
        : dataSource[valueKey]}
    </td>
  ];
};
Td.propTypes = {
  labelKey: propTypes.string,
  valueKey: propTypes.string
};
export default Td;
