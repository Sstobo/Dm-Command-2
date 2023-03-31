import React from 'react';
import { useDraggable } from '@dnd-kit/core';

function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: props.id, // Use the prop `id` instead of the hardcoded 'draggable'
  });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    color: isDragging ? 'black' : undefined, // Add this line to change the text color when isDragging is true
    backgroundColor:  isDragging ? '#EBBE7A' : undefined,
    zIndex: isDragging ? 10000 : undefined,
  };

  return (
    <div
      role="button"
      className="draggable-button"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {props.children}
    </div>
  );
}

export default Draggable;