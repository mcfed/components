import React from 'react';
import {shallow} from 'enzyme';
import DynamicForm from '../index';

const setup = (props = {}) => {
  const defaultProps = {
    formItems: [
      {
        name: 'input1',
        label: 'input1',
        type: 'input',
        defaultValue: 'input1',
        rules: [
          {
            required: true,
            message: '必填input1',
          },
        ],
      },
    ],
  };
  const wrapper = shallow(<DynamicForm {...defaultProps} {...props} />);
  return {
    props: {...defaultProps, ...props},
    wrapper,
  };
};

describe('快照测试', () => {
  it('全页快照', () => {
    const props = {
      formItems: [
        {
          name: 'input1',
          label: 'input1',
          type: 'input',
          defaultValue: 'input1',
          rules: [
            {
              required: true,
              message: '必填input1',
            },
          ],
        },
      ],
    };
    const {wrapper} = setup(props);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('全方法测试', () => {
  const props = {
    formItems: [
      {
        name: 'input1',
        label: 'input1',
        type: 'input',
        defaultValue: 'input1',
        rules: [
          {
            required: true,
            message: '必填input1',
          },
        ],
      },
    ],
  };
  it('saveFormRef 方法测试', () => {
    const {wrapper} = setup(props);
    const instance = wrapper.instance();
    instance.saveFormRef('123');
    expect(instance.form).toBe('123');
  });
});
