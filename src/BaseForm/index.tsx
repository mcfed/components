import * as React from 'react';
// import Form from 'antd/es/form';
import {FormProps} from 'antd/lib/form';
import {Form} from 'antd';

export interface CustomFormComponentProps extends FormProps {
  /**
   * 统一设定子组件 FromItem 的布局
   */
  itemLayout?: object;
  /**
   * 统一设置样式前缀
   */
  prefixCls?: string;
  /**
   * 表单自动提交
   */
  autoSubmitForm?: boolean;
  /**
   * 任一表单域的值发生改变时调用的方法
   */
  onSearch?: any;
}

export const FormRefContext = React.createContext({});
export const LayoutRefContext = React.createContext({});

const FormCreate = Form.create;

class BaseForm extends React.Component<CustomFormComponentProps> {
  static defaultProps: CustomFormComponentProps = {
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
      itemLayout = {},
      children,
      autoSubmitForm,
      onSearch,
      ...otherProps
    } = this.props;
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

export const AdvancedForm = FormCreate({
  onValuesChange(props: any, values, allValues) {
    if (props.autoSubmitForm) {
      props.onSearch && props.onSearch(allValues);
    }
  }
  //@ts-ignore
})(AdvancedFormClass);

export default SubmitForm;
