import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DndContext } from "@dnd-kit/core";
import Droppable from "./Interface/Droppable";
import Draggable from "./Interface/Draggable";
import { handleDragStart, handleDragEnd } from "./Interface/Handlers";
import { handleSubmit, handleImage, handleSubmitChoice } from "./Interface/AiGetters";
import horizontalLineImage from './Assets/horizontal_line.png';
import verticalLineImage from './Assets/vertical_line.png';
import logo from "./Assets/logo.svg";
import creature from "./Assets/creature.svg";
import npc from "./Assets/npc.svg";
import encounter from "./Assets/encounter.svg";
import Dice from "./Effects/D20";
import "./App.css";
import { Canvas } from '@react-three/fiber'
import { motion } from "framer-motion"



const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100
}


const dropAnimation = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {spring}
};




function App() {
  const dispatch = useDispatch();
 
  // Global States
  const encounters = useSelector((state) => state.encounters);
  const monsters = useSelector((state) => state.monsters);
  const npcs = useSelector((state) => state.npcs);
  const locations = useSelector((state) => state.locations);

  // Local States
  const [droppedItems, setDroppedItems] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [showDice , setShowDice] = useState(false);
  const [response, setResponse] = useState("Response will appear here.");
  const [selectedMenu, setSelectedMenu] = useState("encounters");
  const [image, setImage] = useState("");
  const [formattedResponse, setFormattedResponse] = useState();

  const setNextScene = (nextScene) => {
    handleSubmitChoice(nextScene);
  };

  useEffect(() => {
    if (response.length > 50) {
      const formatted = JSON.parse(response);
      setFormattedResponse(formatted);
      console.log(formattedResponse);
    }
  }, [response]);

  
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
            }}
          >
            <img className="left-menu-selection-icon" src={npc} alt="npc" />
            <div className="left-menu-selection-title">NPCs</div>
          </div>
          <div
            className="left-menu-selection"
            onClick={() => handleMenuClick("locations")}
            style={{
              backgroundColor: selectedMenu === "locations" ? " #EBBE7A" : "",
            }}
          >
            <img className="left-menu-selection-icon" src={npc} alt="npc" />
            <div className="left-menu-selection-title">Locations</div>
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
            {/* Encounters */}
            {selectedMenu === "encounters" && (
              <motion.div className="draggable-container" variants={dropAnimation} initial="initial" animate="animate">
              
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
          
              </motion.div>
            )}

            {/* Locations */}
            {selectedMenu === "locations" && (
              <motion.div className="draggable-container" variants={dropAnimation} initial="initial" animate="animate">
                {locations.map((location) => (
                  <Draggable
                    key={location.id}
                    id={location.id}
                    payload={location.payload}
                  >
                    <div className="draggable-item">
                      <div className="draggable-item-header">
                        <div className="draggable-item-title">
                          <h4>{location.content}</h4>
                          <div className="hover-box">
                            <p>{location.payload}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Draggable>
                ))}
              </motion.div>
            )}
               {/* Monsters */}
               {selectedMenu === "monsters" && (
               <motion.div className="draggable-container" variants={dropAnimation} initial="initial" animate="animate">
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
             </motion.div>
           )}

           {/* NPCs */}
           {selectedMenu === "npcs" && (
              <motion.div className="draggable-container" variants={dropAnimation} initial="initial" animate="animate">
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
             </motion.div>
           )}
          
         <motion.div className="draggable-container" variants={dropAnimation} initial="initial" animate="animate"></motion.div>
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
                 handleSubmit(prompt, setResponse, setShowDice, setFormattedResponse);
                 setShowDice( true);
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
               {showDice && response.length < 50 && (
                 <div className="dice-container">
             <Canvas 
               camera={{ position: [0, 0, 10], fov: 50 }}
             >
               <ambientLight />
               <pointLight position={[10, 10, 10]} />
               <Dice />
             </Canvas>
           </div>
           )}

        
      
              {formattedResponse ? (
                <div>
                <h2>{formattedResponse.title}</h2>
                <p>{formattedResponse.body}</p>
                <ul>
                  {formattedResponse.options.map((option, index) => (
                    <li role="button" id={"choice-" + index}  className="adventure-choice" key={index}
                      onClick={(e) => {
                        setNextScene()
                      }
                      }

                      >
                      <h5>{option.title}</h5>
                      <p>{option.read}</p>
                      <p><em>DM Notes: {option.dm_notes}</em></p>
                    </li>
                  ))}
                </ul>
              </div>
              ) : (
                <>{response}</>
              )}

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
