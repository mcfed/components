import React from 'react';
import {shallow} from 'enzyme';
import {Dropdown} from 'antd';
import TableToolbar from '../TableToolbar';

jest.mock(
  'react-beautiful-dnd',
  () => {
    const React = require('react');

    return {
      DragDropContext: ({children}) => (
        <div className='drag-drop-context'>{children}</div>
      ),
      Droppable: ({children}) => (
        <div className='droppable'>
          {children({
            droppableProps: {},
            innerRef: jest.fn(),
            placeholder: null,
          })}
        </div>
      ),
      Draggable: ({children}) => (
        <div className='draggable'>
          {children({
            draggableProps: {},
            dragHandleProps: {},
            innerRef: jest.fn(),
          })}
        </div>
      ),
    };
  },
  {virtual: true},
);

const {DragDropContext} = require('react-beautiful-dnd');

const makeColumn = (dataIndex) => ({
  dataIndex,
  title: dataIndex,
});

const setup = (props = {}) => {
  const columns = ['a', 'b', 'c', '操作'].map(makeColumn);
  const defaultProps = {
    onRefresh: jest.fn(),
    onDensityChange: jest.fn(),
    columns,
    visibleColumns: columns.map((col) => col.dataIndex),
    onColumnVisibilityChange: jest.fn(),
    onColumnOrderChange: jest.fn(),
    onColumnFixedChange: jest.fn(),
    updateVisibleColumns: jest.fn(),
    disabledColumns: [],
    resetSettings: jest.fn(),
    density: 'small',
    loading: false,
  };

  const wrapper = shallow(<TableToolbar {...defaultProps} {...props} />);
  return {
    columns,
    props: defaultProps,
    wrapper,
  };
};

const getColumnOrderDragEnd = (wrapper) => {
  const overlay = wrapper.find(Dropdown).at(1).prop('overlay');
  return shallow(overlay).find(DragDropContext).prop('onDragEnd');
};

describe('DataTableV2 TableToolbar', () => {
  it('reorders from the latest columns after a previous drag', () => {
    const {wrapper, props} = setup();
    const dragEndFromOpenedDropdown = getColumnOrderDragEnd(wrapper);

    dragEndFromOpenedDropdown({
      source: {index: 0},
      destination: {index: 2},
    });

    const columnsAfterFirstDrag = props.onColumnOrderChange.mock.calls[0][0];
    wrapper.setProps({columns: columnsAfterFirstDrag});

    dragEndFromOpenedDropdown({
      source: {index: 0},
      destination: {index: 3},
    });

    expect(
      props.onColumnOrderChange.mock.calls[1][0].map((col) => col.dataIndex),
    ).toEqual(['c', 'a', '操作', 'b']);
  });
});
