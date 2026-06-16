import React from 'react';

export function DragDropContext({children}) {
  return <>{children}</>;
}

export function Droppable({children}) {
  return children({
    droppableProps: {},
    innerRef: () => {},
    placeholder: null,
  });
}

export function Draggable({children}) {
  return children({
    draggableProps: {},
    dragHandleProps: {},
    innerRef: () => {},
  });
}
