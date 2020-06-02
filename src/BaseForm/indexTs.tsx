import * as React from 'react';
import Form from 'antd/es/form';
import {FormProps} from 'antd/lib/form';

export interface CustomFormComponentProps extends FormProps {
  itemLayout?: object;
  prefixCls?: string;
}

export const FormRefContext = React.createContext({});
export const LayoutRefContext = React.createContext({});

const FormCreate = Form.create;

class BaseForm extends React.Component<CustomFormComponentProps> {
  static defaultProps = {
    prefixCls: 'ant-form',
    layout: 'horizontal',
    itemLayout: {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 18
      }
    }
  };

  render() {
    const {form, itemLayout = {}, children, ...otherProps} = this.props;
    return (
      //@ts-ignore
      <FormRefContext.Provider value={form}>
        <LayoutRefContext.Provider value={itemLayout}>
          <Form {...otherProps}>{children}</Form>
        </LayoutRefContext.Provider>
      </FormRefContext.Provider>
    );
  }
}
//@ts-ignore
const SubmitForm = FormCreate()(BaseForm);

class AdvancedFormClass extends BaseForm {}
//@ts-ignore
export const AdvancedForm = FormCreate()(AdvancedFormClass);

export default SubmitForm;
