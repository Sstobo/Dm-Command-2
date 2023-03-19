import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DndContext } from "@dnd-kit/core";
import Droppable from "./Interface/Droppable";
import Draggable from "./Interface/Draggable";
import { handleDragStart, handleDragEnd } from "./Interface/Handlers";
import { handleSubmit, handleImage } from "./Interface/AiGetters";
import horizontalLineImage from './Assets/horizontal_line.png';
import verticalLineImage from './Assets/vertical_line.png';
import logo from "./Assets/logo.svg";
import creature from "./Assets/creature.svg";
import npc from "./Assets/npc.svg";
import encounter from "./Assets/encounter.svg";

import "./App.css";

function App() {
  const [droppedItems, setDroppedItems] = useState([]);
  const encounters = useSelector((state) => state.encounters);
  const monsters = useSelector((state) => state.monsters);
  const npcs = useSelector((state) => state.npcs);
  const dispatch = useDispatch();
  const [activeId, setActiveId] = useState(null);
  const [response, setResponse] = useState("Response will appear here.");
  const [selectedMenu, setSelectedMenu] = useState("encounters");
  const [image, setImage] = useState("");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} alt="logo" />
      DM Command Centre is an open source GPT AI program. This is some information about the creator and how its to be used. Fusce nunc nisi, tincidunt eu interdum eu, vulputate elementum dui. Quisque rutrum semper rutrum. Sed a mattis turpis. Mauris tempor enim eget cursus convallis. Sed sit amet erat id turpis tempor porta. 
   
      </header>
      <img className="horz-line" src={horizontalLineImage} alt="horizontal line" />
      <div className="body-container">
        
        <div className="left-menu">
          <div
            className="left-menu-selection"
            onClick={() => handleMenuClick("encounters")}
            style={{
              backgroundColor: selectedMenu === "encounters" ? " #EBBE7A" : "",
              color: selectedMenu === "encounters" ? "black" : "",
            }}
          >
            <img className="left-menu-selection-icon" src={encounter} alt="encounter" />
            <div className="left-menu-selection-title">Encounters</div>
          </div>
          <div
            className="left-menu-selection"
            onClick={() => handleMenuClick("monsters")}
            style={{
              backgroundColor: selectedMenu === "monsters" ? " #EBBE7A" : "",
              color: selectedMenu === "monsters" ? "black" : "",
            }}
          >
            <img className="left-menu-selection-icon" src={creature} alt="creature" />
            <div className="left-menu-selection-title">Monsters</div>
          </div>
          <div
            className="left-menu-selection"
            onClick={() => handleMenuClick("npcs")}
            style={{
              backgroundColor: selectedMenu === "npcs" ? " #EBBE7A" : "",
              color: selectedMenu === "npcs" ? "black" : "",
            }}
          >
            <img className="left-menu-selection-icon" src={npc} alt="npc" />
            <div className="left-menu-selection-title">NPCs</div>
          </div>

          <img className="vert-line" src={verticalLineImage} alt="horizontal line" />
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
            {selectedMenu === "encounters" && (
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
            {selectedMenu === "monsters" && (
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
            {selectedMenu === "npcs" && (
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
                onClick={() => {
                  let prompt = droppedItems
                    .map((item) => item.payload)
                    .join(", ");
                    setImage("");
                  handleSubmit(prompt, setResponse);
                }}
              >
                <h4>Create Scenario</h4>
              </div>
            </div>
          </DndContext>

          <div className="results-container">
            {image.length > 0 ? (
              <img className="result-image" src={image} alt="result" />
            ) : (
              <div className="result-image"></div>
            )}
            <h3>Scenario</h3>
            <p>{response}</p>

            {response.length > 50 && (
              <div
                role="button"
                className="create-scenario-button"
                onClick={(e) => {
                  setImage("");
                  handleImage(e, response, setImage);
                }}
              >
                Confirm Image
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;