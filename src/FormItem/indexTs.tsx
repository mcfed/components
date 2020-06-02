import * as React from 'react';
import PropTypes from 'prop-types';
import Form, {FormItemProps} from 'antd/es/form';

import {FormRefContext, LayoutRefContext} from '../BaseForm/indexTs';

type fnOrBoolType = ((form: any) => boolean) | boolean | undefined;

interface CustFormItemProps extends FormItemProps {
  name: string;
  children: React.ReactElement;
  disabled?: fnOrBoolType;
  renderable?: fnOrBoolType;
  formLayout?: object;
  formRef?: any;
  rules?: object[];
}

//feature todo
//1 fetchdata ｜ select options
//2  disabled  finish
//3  renderable  finish
//hidden  style

class FormItem extends React.Component<CustFormItemProps, any> {
  isPropsTrue(prop: fnOrBoolType) {
    const {formRef} = this.context;
    if (typeof prop === 'function') {
      return prop.call(this, formRef);
    }
    if (typeof prop === 'boolean') {
      return prop;
    }
    return true;
  }

  fieldDisabledProp(disabled: fnOrBoolType) {
    if (disabled === undefined) {
      return {};
    }
    return {disabled: this.isPropsTrue(disabled)};
  }

  fieldRenderableProp(renderable: fnOrBoolType) {
    if (renderable === undefined) {
      return true;
    }
    return this.isPropsTrue(renderable);
  }

  renderFields(element: React.ReactElement) {
    const _this = this;
    const {disabled} = this.props;
    const {defaultValue, ...otherProps} = element.props;
    return React.createElement(
      element.type,
      Object.assign({}, otherProps, _this.fieldDisabledProp(disabled)),
      element.props.children
    );
  }

  render() {
    const {
      name,
      label,
      renderable,
      formRef,
      formLayout,
      children,
      ...otherProps
    } = this.props;
    const {getFieldDecorator} = formRef;
    const element = this.props.children;
    const {defaultValue} = element.props;
    const isFormContextComing = getFieldDecorator !== undefined;
    return this.fieldRenderableProp(renderable) && isFormContextComing ? (
      <Form.Item label={label} {...formLayout}>
        {getFieldDecorator(name, {
          ...otherProps,
          initialValue: defaultValue
        })(this.renderFields(element))}
      </Form.Item>
    ) : null;
  }
}

export default function FormItemRender(props: CustFormItemProps) {
  return (
    <FormRefContext.Consumer>
      {formRef => (
        <LayoutRefContext.Consumer>
          {formLayout => (
            <FormItem {...props} formLayout={formLayout} formRef={formRef}>
              {props.children}
            </FormItem>
          )}
        </LayoutRefContext.Consumer>
      )}
    </FormRefContext.Consumer>
  );
}
