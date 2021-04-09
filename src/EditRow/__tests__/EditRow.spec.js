import React from 'react';
import {render, mount, shallow} from 'enzyme';
import EditRow from '../index';

function setup(props) {
  const wrapper = shallow(
    <EditRow
      renderItem={(it, idx, calbak) => {
        return <div>it</div>;
      }}
      {...props}></EditRow>
  );
  return {
    wrapper
  };
}

describe('edit-row-test', () => {
  it('components init', () => {
    const {wrapper} = setup({
      value: [1, 2, 3]
    });

    expect(wrapper.state()).toEqual({ranges: [1, 2, 3]});
  });
  it('del-method-test', () => {
    const {wrapper} = setup({
      value: [1, 2, 3]
    });

    const instance = wrapper.instance();
    instance.handleSetRanges = jest.fn();
    instance.handleDelItem(1);
    expect(instance.handleSetRanges).toHaveBeenCalled();
    expect(instance.handleSetRanges.mock.calls[0][0]).toEqual([1, 3]);
  });
  it('add-method-test', () => {
    const {wrapper} = setup({
      value: [1, 2, 3]
    });

    const instance = wrapper.instance();
    instance.handleSetRanges = jest.fn();
    instance.handleAddRange();
    expect(instance.handleSetRanges).toHaveBeenCalled();
    expect(instance.handleSetRanges.mock.calls[0][0]).toEqual([1, 2, 3, {}]);
  });
  it('change-method-test', () => {
    const {wrapper} = setup({
      value: [{a: 1}, {a: 2}, {a: 3}]
    });

    const instance = wrapper.instance();
    instance.handleSetRanges = jest.fn();
    instance.handleChangeItem(1, {a: 3});
    expect(instance.handleSetRanges).toHaveBeenCalled();
    expect(instance.handleSetRanges.mock.calls[0][0]).toEqual([
      {a: 1},
      {a: 3},
      {a: 3}
    ]);
  });
  it('change-method-test', () => {
    const fn = jest.fn();
    const {wrapper} = setup({
      value: [{a: 1}, {a: 2}, {a: 3}],
      onChange: fn
    });

    const instance = wrapper.instance();
    instance.handleSetRanges([]);
    expect(fn).toHaveBeenCalled();
    expect(fn.mock.calls[0][0]).toEqual([]);
  });
});
