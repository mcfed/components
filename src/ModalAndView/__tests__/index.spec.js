import React from 'react';
import {shallow, mount, render} from 'enzyme';
import ModalAndView from '../index';
import Input from 'antd/lib/input';
import {Modal} from 'antd';

const setup = (children, props) => {
  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const wrapper = shallow(<ModalAndView {...props}>{children}</ModalAndView>);
  return {
    props,
    wrapper
  };
};

describe('modal render with props ', () => {
  it('modal title是否为prop传入值', () => {
    const {wrapper, props} = setup(<Input />, {
      title: 'modalTitle'
    });
    expect(wrapper.prop('title')).toBe('modalTitle');
  });

  it('modal visible default tobe true', () => {
    const {wrapper, props} = setup(<Input />, {});
    // console.log(wrapper.find('Modal').prop("visible"))
    expect(wrapper.find(Modal).prop('visible')).toBe(true);
  });

  it('modal maskClosable default tobe false', () => {
    const {wrapper, props} = setup(<Input />, {});

    expect(wrapper.find(Modal).prop('maskClosable')).toBe(false);
  });
});

describe('modal method tobe called', () => {
  it('handleBackRoute 方法测试', () => {
    const {wrapper, props} = setup(<Input />, {
      actions: {
        backRoute: jest.fn()
      },
      history: '111',
      router: '222'
    });
    const instance = wrapper.instance();
    instance.handleBackRoute();
    expect(props.actions.backRoute).toHaveBeenCalled();
  });

  it('handleSaveRoute 方法测试', () => {
    const {wrapper, props} = setup(<Input />, {});
    const instance = wrapper.instance();
    instance.refs = {
      formView: {
        onSubmit: jest.fn()
      }
    };
    instance.handleSaveRoute();
    expect(instance.refs.formView.onSubmit).toHaveBeenCalled();
  });
});
