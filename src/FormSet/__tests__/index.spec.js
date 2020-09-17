import React from 'react';
import {shallow, render} from 'enzyme';
import {Input} from 'antd';
import {FormItem} from '../../FormItem';
import FormSet from '../index';

const setup = (children, props) => {
  const defaultProps = {};
  const wrapper = shallow(
    <FormSet {...Object.assign({}, defaultProps, props)}>{children}</FormSet>
  );

  return {
    props,
    wrapper
  };
};

describe('formset base test', () => {
  it('test render', () => {
    const formItemProps = {
      formRef: {
        getFieldDecorator(name, item) {
          return function(component) {
            return component;
          };
        }
      },
      formLayout: {
        labelCol: {
          span: 3
        },
        wrapperCol: {
          span: 18
        }
      }
    };
    const wrapper = render(
      <FormSet>
        <FormItem {...formItemProps} name='aaa' label='bbb'>
          <Input defaultValue='ccc' />
        </FormItem>
      </FormSet>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
