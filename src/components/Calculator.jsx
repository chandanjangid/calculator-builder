import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import useCalculatorStore from '../store/useCalculatorStore';

const Calculator = () => {
  const { components } = useCalculatorStore();
  console.log('Components:', components);
  return (
    <div className="p-4">
      <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId="calculator">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid grid-cols-3 gap-2"
            >
              {components.map((comp, index) => (
                <Draggable key={comp.id} draggableId={comp.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {comp.label}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Calculator;