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

const initialState = {};

type State = typeof initialState;

export default class DynamicForm extends React.Component<
  DynamicFormProps,
  State
> {
  render() {
    const {formData, className, ...otherProp} = this.props;
    return (
      <BaseForm {...otherProp} className={className}>
        {formData.map((item: {component: string}) => {
          const {component, ...others} = item;
          // return <FormItem>{this.renderForm(item)}</FormItem>;
          return React.createElement(
            FormItem,
            {},
            React.createElement(component, others)
          );
        })}
      </BaseForm>
    );
  }
}
