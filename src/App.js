import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DndContext } from "@dnd-kit/core";
import {
  handleSubmit,
  handleBeginStory,
  handleDecision,
} from "./Interface/AiGetters";
import "./App.css";
import { handleDragStart, handleDragEnd } from "./Interface/Handlers";

// Import the new components
import Header from "./Components/Header/Header";
import LeftMenu from "./Components/LeftMenu/LeftMenu";
import DroppableContainer from "./Components/DroppableContainer/DroppableContainer";
import ResultsContainer from "./Components/ResultsContainer/ResultsContainer";
import CharacterCreator from "./Components/CharacterCreator/CharacterCreator";
import DraggableItem from "./Components/DraggableItem/DraggableItem"; // Import DraggableItem


function App() {
  const dispatch = useDispatch();

  // Global States
  const encounters = useSelector((state) => state.encounters);
  const monsters = useSelector((state) => state.monsters);
  const npcs = useSelector((state) => state.npcs);
  const locations = useSelector((state) => state.locations);

  const [playerCharacter, setPlayerCharacter] = useState({
    name: "",
    class: "",
    race: "",
    stats: {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
    },
    equipment: [],
  });

  // Local States
  const [droppedItems, setDroppedItems] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [decision, setDecision] = useState("");
  const [showDice, setShowDice] = useState(false);
  const [story, setStory] = useState("Story will appear here.");
  const [scenario, setScenario] = useState("Scenario will appear here.");
  const [sceneNumber, setSceneNumber] = useState(1);
  const [response, setResponse] = useState("Response will appear here.");
  const [selectedMenu, setSelectedMenu] = useState("encounters");
  const [image, setImage] = useState("");
  const [backstory, setBackstory] = useState("Backstory will appear here.");
  const [apiKey, setApiKey] = useState("");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    console.log(menu);
  };

  return (
    <div className="App">
      <Header apiKey={apiKey} setApiKey={setApiKey} />

      <div className="body-container">
      {story.length < 50 && (
        <LeftMenu
          selectedMenu={selectedMenu}
          handleMenuClick={handleMenuClick}
        />
        )}
        <div className="workspace">
          <DndContext
            onDragStart={(event) =>
              handleDragStart(
                event,
                encounters,
                monsters,
                npcs,
                locations,
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
                locations,
                droppedItems,
                setDroppedItems,
                dispatch
              )
            }
          >
            
            {["encounters", "monsters", "npcs", "locations"].map(
              (category) =>
                selectedMenu === category && story.length < 50 && (
                  
                  <div key={category} className="draggable-container">
                    {[...encounters, ...monsters, ...npcs, ...locations]
                      .filter((item) => item.type === category)
                      .map((item) => (
                        <DraggableItem
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
                        </DraggableItem>
                      ))}
                  </div>
                )
            )}

            {selectedMenu === "createPlayer" && (
              <CharacterCreator
                playerCharacter={playerCharacter}
                setPlayerCharacter={setPlayerCharacter}
              />
            )}

            {story.length < 50 && (
              <DroppableContainer
                droppedItems={droppedItems}
                setDroppedItems={setDroppedItems}
                setShowDice={setShowDice}
                showDice={showDice}
                handleCreateScenario={() => {
                  let prompt = droppedItems
                    .map((item) => item.payload)
                    .join(", ");
                  setImage("");
                  handleSubmit(
                    prompt,
                    setStory,
                    playerCharacter,
                    setImage,
                    setShowDice
                  );
                  handleMenuClick("");
                }}
              />
            )}
          </DndContext>

          <ResultsContainer
            scenario={scenario}
            decision={decision}
            showDice={showDice}
            setShowDice={setShowDice}
            setDecision={setDecision}
            handleBeginStory={handleBeginStory}
            handleDecision={() => {
              handleDecision(
                decision,
                story,
                scenario,
                setScenario,
                sceneNumber,
                playerCharacter,
                setImage,
                setShowDice
              );
              setDecision("");
              setSceneNumber(sceneNumber + 1);
            }}
            story={story}
            sceneNumber={sceneNumber}
            playerCharacter={playerCharacter}
          
            setImage={setImage}
            image={image}
            setScenario={setScenario}
            setSceneNumber={setSceneNumber}
            
          />
        </div>
      </div>
    </div>
  );
}

export default App;
