import React, {useEffect} from 'react';

interface TdProps<T = any> {
  dataSource: T[] | T;
  labelKey: string;
  valueKey: string;
}

const Td = ({dataSource, labelKey, valueKey}: TdProps) => {
  useEffect(() => {}, [dataSource, labelKey, labelKey]);

  labelKey = dataSource[labelKey];
  valueKey = dataSource[valueKey];
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
Td.defaultProps = {
  dataSource: [],
  labelKey: '',
  valueKey: ''
};
export default Td;