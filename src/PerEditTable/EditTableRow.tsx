import React from 'react';
import {WrappedFormUtils} from 'antd/es/form/Form';

export const EditTableContext = React.createContext({});

const EditTableRow = (form: WrappedFormUtils, index: any, ...props: any) => (
  <EditTableContext.Provider value={form}>
    <tr {...props}></tr>
  </EditTableContext.Provider>
);
export default EditTableRow;
