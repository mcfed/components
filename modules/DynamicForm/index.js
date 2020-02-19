import React from 'react';
import PropTypes from 'prop-types';
import FormItem from '../FormItem';
import BaseForm from '../BaseForm';
// import {
//   InputForm,
//   SelectForm,
//   CheckboxForm,
//   CheckboxGroupForm
// } from "./components";

export default class DynamicForm extends React.Component {
  // renderForm(item) {
  //   let map = {
  //     input: <InputForm {...item} />,
  //     select: <SelectForm {...item} />,
  //     checkbox: <CheckboxForm {...item} />,
  //     checkboxgroup: <CheckboxGroupForm {...item} />
  //   };
  //   return map[item.component];
  // }
  render() {
    const {formData, className, ...otherProp} = this.props;
    return (
      <BaseForm {...otherProp} className={className}>
        {formData.map(item => {
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

DynamicForm.propTypes = {
  /**
  tab 配置
  **/
  formData: PropTypes.array
};
