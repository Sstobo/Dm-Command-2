import React from 'react';
import encounter from '../../Assets/encounter.svg';
import creature from '../../Assets/creature.svg';
import npc from '../../Assets/npc.svg';
// import './LeftMenu.css';

const LeftMenu = ({ selectedMenu, handleMenuClick }) => {
  return (
    <div className="left-menu">
      <div
        className="left-menu-selection"
        onClick={() => handleMenuClick("encounters")}
        style={{
          backgroundColor: selectedMenu === "encounters" ? " #EBBE7A" : "",
          color: selectedMenu === "encounters" ? "black" : "",
        }}
      >
        <img
          className="left-menu-selection-icon"
          src={encounter}
          alt="encounter"
        />
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
        <img
          className="left-menu-selection-icon"
          src={creature}
          alt="creature"
        />
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

      <div
        className="left-menu-selection"
        onClick={() => handleMenuClick("createPlayer")}
        style={{
          backgroundColor:
            selectedMenu === "createPlayer" ? " #EBBE7A" : "",
        }}
      >
        <img className="left-menu-selection-icon" src={npc} alt="npc" />
        <div className="left-menu-selection-title">Create Character</div>
      </div>
    </div>
  );
};

export default LeftMenu;