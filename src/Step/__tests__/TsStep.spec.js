import React from 'react';
import {shallow, mount} from 'enzyme';
import Step from '../index';

const setup = props => {
  const wrapper = shallow(<Step {...props} />);
  return {
    wrapper,
    props
  };
};

describe('快照测试', () => {
  it('Step', () => {
    const steps = [
      {
        text: 'firstStep',
        description: 'firstStep',
        path: 'first',
        component: <div>Test</div>
      }
    ];
    const {wrapper} = setup({steps});

    expect(wrapper).toMatchSnapshot();
  });
});
