import React from 'react';
import  Droppable  from '../../Interface/Droppable';
import  Draggable  from '../../Interface/Draggable';
import horizontalLineImage from '../../Assets/horizontal_line.png';

const DroppableContainer = ({
  droppedItems,
  setDroppedItems,
  handleCreateScenario,
}) => {
  return (
    <div className="droppable-container">
      <h3 className="droppable-container-heading">Story Suggestions</h3>
      <img className="horz-line" src={horizontalLineImage} alt="horizontal line" />
      <Droppable id="droppable-box">
        <div className="droppableTargetBox">
          {droppedItems.map((item) => (
            <Draggable
              key={item.id}
              id={item.id}
              payload={item.payload}
            >
              <div className="draggable-item">
                <div className="draggable-item-header">
                  <div className="draggable-item-title">
                    <h4>{item.content}</h4>

                    <div className="hover-box">
                      <p>{item.payload}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Draggable>
          ))}
        </div>
      </Droppable>
      <div
        role="button"
        className="create-scenario-button"
        onClick={handleCreateScenario}
      >
        <h4>Create Scenario</h4>
      </div>
    </div>
  );
};

export default DroppableContainer;