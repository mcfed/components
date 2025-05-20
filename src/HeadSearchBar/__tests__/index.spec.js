import React from 'react';
import {shallow} from 'enzyme';
import HeadSearchBar from '../index';

// 模拟 window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const setup = (props) => {
  const fn = jest.fn();
  const form = {
    validateFieldsAndScroll: jest.fn((callback) => callback(null, {})),
  };
  const wrapper = shallow(
    <HeadSearchBar filterSubmitHandler={fn}>
      <div>123</div>
    </HeadSearchBar>,
  );
  wrapper.instance().saveFormRef({props: {form}});
  return {
    props,
    wrapper,
    fn,
  };
};

describe('headsearchbar', () => {
  //   it('deafault test ', () => {
  //     const wrapper = render(
  //       <HeadSearchBar filterSubmitHandler={() => {}}>
  //         <div></div>
  //       </HeadSearchBar>
  //     );
  //     expect(wrapper).toMatchSnapshot();
  //   });

  it('method handlesearch', () => {
    const {wrapper, fn} = setup();
    wrapper.instance().handleSearch({preventDefault: jest.fn()});
    expect(fn).toBeCalled();
  });

  it('method saveformref test', () => {
    const {wrapper} = setup();
    const formRef = {props: {form: {}}};
    wrapper.instance().saveFormRef(formRef);
    expect(wrapper.instance().form).toBe(formRef.props.form);
  });

  it('method renderFields test', () => {});
});
