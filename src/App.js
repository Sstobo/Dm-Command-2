import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DndContext } from "@dnd-kit/core";
import Droppable from "./Interface/Droppable";
import Draggable from "./Interface/Draggable";
import { handleDragStart, handleDragEnd } from "./Interface/Handlers";
import { handleSubmit } from "./Interface/AiGetters";
import "./App.css"; // Import the CSS file

function App() {
  const [droppedItems, setDroppedItems] = useState([]);
  const encounters = useSelector((state) => state.encounters);
  const monsters = useSelector((state) => state.monsters);
  const npcs = useSelector((state) => state.npcs);
  const dispatch = useDispatch();
  const [activeId, setActiveId] = useState(null);
  const [response, setResponse] = useState("Response will appear here.");
  const [encountersVisible, setEncountersVisible] = useState(true);
  const [monstersVisible, setMonstersVisible] = useState(false);
  const [npcsVisible, setNpcsVisible] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        DM Command Centre is an open source GPT AI program. This is some
        information about the creator and how its to be used. Fusce nunc nisi,
        tincidunt eu interdum eu, vulputate elementum dui. Quisque rutrum semper
        rutrum. Sed a mattis turpis. Mauris tempor enim eget cursus convallis.
        Sed sit amet erat id turpis tempor porta.
      </header>

      <div className="body-container">
        <div className="left-menu">
          <div
            className="left-menu-selection"
            onClick={() => {
              setEncountersVisible(true);
              setMonstersVisible(false);
              setNpcsVisible(false);
            }}
          >
            <div className="left-menu-selection-title">Encounters</div>
          </div>
          <div
            className="left-menu-selection"
            onClick={() => {
              setEncountersVisible(false);
              setMonstersVisible(true);
              setNpcsVisible(false);
            }}
          >
            <div className="left-menu-selection-title">Monsters</div>
          </div>
          <div
            className="left-menu-selection"
            onClick={() => {
              setEncountersVisible(false);
              setMonstersVisible(false);
              setNpcsVisible(true);
            }}
          >
            <div className="left-menu-selection-title">NPCs</div>
          </div>
        </div>

        <div className="workspace">
          <DndContext
            onDragStart={(event) =>
              handleDragStart(
                event,
                encounters,
                monsters,
                npcs,
                droppedItems,
                setActiveId
              )
            }
            onDragEnd={(event) =>
              handleDragEnd(
                event,
                encounters,
                monsters,
                npcs,
                droppedItems,
                setDroppedItems,
                dispatch
              )
            }
          >
            {/* Encounters */}
            {encountersVisible && (
              <div className="draggable-container">
                {encounters.map((encounter) => (
                  <Draggable
                    key={encounter.id}
                    id={encounter.id}
                    payload={encounter.payload}
                  >
                    <div className="draggable-item">
                      <div className="draggable-item-header">
                        <div className="draggable-item-title">
                          <h4> {encounter.content}</h4>
                          <div className="hover-box">
                            <p>{encounter.payload}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Draggable>
                ))}
              </div>
            )}

            {/* Monsters */}
            {monstersVisible && (
              <div className="draggable-container">
                {monsters.map((monster) => (
                  <Draggable
                    key={monster.id}
                    id={monster.id}
                    payload={monster.payload}
                  >
                    <div className="draggable-item">
                      <div className="draggable-item-header">
                        <div className="draggable-item-title">
                          <h4>{monster.content}</h4>
                          <div className="hover-box">
                            <p>{monster.payload}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Draggable>
                ))}
              </div>
            )}

            {/* NPCs */}
            {npcsVisible && (
              <div className="draggable-container">
                {npcs.map((npc) => (
                  <Draggable key={npc.id} id={npc.id} payload={npc.payload}>
                    <div className="draggable-item">
                      <div className="draggable-item-header">
                        <div className="draggable-item-title">
                          <h4>{npc.content}</h4>
                          <div className="hover-box">
                            <p>{npc.payload}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Draggable>
                ))}
              </div>
            )}

            <div className="droppable-container">
              <h3 className="droppable-container-heading">Instance</h3>
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
                onClick={() => {
                  let prompt = droppedItems
                    .map((item) => item.payload)
                    .join(", ");
                  handleSubmit(prompt, setResponse);
                }}
              >
                <h4>Create Scenario</h4>
              </div>
            </div>
          </DndContext>

          <div className="results-container">
            <h3>Scenario</h3>
            <p>{response}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;