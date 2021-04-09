import React from 'react';
import {render, mount, shallow} from 'enzyme';
// import ModalSelect from '../index'

function setup(props) {
  const wrapper = shallow(
    <ModalSelect
      trggierELement={(value, changefn) => {
        return <div>123</div>;
      }}
      {...props}
    />
  );
  return {
    wrapper
  };
}

describe.skip('edit-row-test', () => {
  it('components init', () => {
    const {wrapper} = setup({
      value: 123
    });

    expect(wrapper.state()).toEqual({isModalShow: false});
  });
  it('handleChangeModalVisible-method-test', () => {
    const {wrapper} = setup({
      value: 123
    });
    const instance = wrapper.instance();
    instance.handleChangeModalVisible(true);
    expect(wrapper.state()).toEqual({isModalShow: true});
  });
  it('renderTriggerElement-method-test', () => {
    const trggerfn = jest.fn();
    const {wrapper} = setup({
      value: 123,
      trggierELement: trggerfn
    });

    const instance = wrapper.instance();
    instance.renderTriggerElement();
    expect(trggerfn.mock.calls[0][0]).toEqual(123);
  });
  it('renderContent-method-test', () => {
    const {wrapper} = setup({
      value: 123
    });

    const instance = wrapper.instance();
    instance.renderDataTable = jest.fn();
    instance.renderContent();
    expect(instance.renderDataTable).toHaveBeenCalled();
  });
  it('renderContent2-method-test', () => {
    const customRenderContent = jest.fn();
    const {wrapper} = setup({
      value: 123,
      customRenderContent: customRenderContent
    });

    const instance = wrapper.instance();
    instance.renderContent();
    expect(customRenderContent).toHaveBeenCalled();
  });
});
