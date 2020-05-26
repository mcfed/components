import * as React from 'react';
import Form from 'antd/es/form';
import {FormComponentProps} from 'antd/lib/form';

export interface CustomFormComponentProps extends FormComponentProps {
  itemLayout?: object;
}

export const FormRefContext = React.createContext(undefined);
export const LayoutRefContext = React.createContext(undefined);

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
    const {
      form,
      itemLayout,
      wrappedComponentRef, //fixed check
      children,
      ...otherProps
    } = this.props;

    return (
      <FormRefContext.Provider value={form}>
        <LayoutRefContext.Provider value={itemLayout}>
          {React.createElement(Form, otherProps, children)}
        </LayoutRefContext.Provider>
      </FormRefContext.Provider>
    );
  }
}

const SubmitForm = FormCreate()(BaseForm);

class AdvancedFormClass extends BaseForm {}

export const AdvancedForm = FormCreate()(AdvancedFormClass);

export default SubmitForm;
