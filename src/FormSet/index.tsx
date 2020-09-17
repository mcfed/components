import React, {FunctionComponent} from 'react';
import {Card} from 'antd';
import {CardProps} from 'antd/lib/card';

interface FormSetProps extends CardProps {}

const FormSet: FunctionComponent<FormSetProps> = props => {
  const {children, ...otherProps} = props;
  return (
    <Card bordered={false} className='form-set' {...otherProps}>
      {children}
    </Card>
  );
};

export default FormSet;
