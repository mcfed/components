import React from 'react';
import FormItem from '../FormItem';
import BaseForm from '../BaseForm';

/**
 * formData：步骤信息数组，必须
 * className: 样式类名，非必须
 */
interface DynamicFormProps {
  formData: object[];
  className?: string;
}

interface State {}

export default class DynamicForm extends React.Component<
  DynamicFormProps,
  State
> {
  form: any;
  saveFormRef(form: any) {
    this.form = form;
  }
  render() {
    const {formData, className, ...otherProp} = this.props;
    return (
      <BaseForm
        {...otherProp}
        // @ts-ignore
        className={className}
        ref={this.saveFormRef.bind(this)}>
        {formData.map((item: any) => {
          const {component, ...others} = item;
          return React.createElement(
            FormItem,
            {key: others.name},
            React.createElement(component, others)
          );
        })}
      </BaseForm>
    );
  }
}
