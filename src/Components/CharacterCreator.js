import React, { useState } from 'react';

const dndClasses = [
  'Barbarian',
  'Bard',
  'Cleric',
  'Druid',
  'Fighter',
  'Monk',
  'Paladin',
  'Ranger',
  'Rogue',
  'Sorcerer',
  'Warlock',
  'Wizard',
];
const dndRaces = [
  'Human',
  'Elf',
  'Dwarf',
  'Halfling',
  'Gnome',
  'Half-Elf',
  'Half-Orc',
  'Tiefling',
  'Dragonborn',
  'Aarakocra',
  'Genasi',
  'Goliath',
];
const weapons = [
  'Sword',
  'Axe',
  'Bow',
  'Dagger',
  'Staff',
  'Mace',
  'Crossbow',
  'Flail',
  'Spear',
  'Hammer',
];

const rollStat = () => {
    return (
      Math.floor(Math.random() * 6) + 1 +
      Math.floor(Math.random() * 6) + 1 +
      Math.floor(Math.random() * 6) + 1
    );
  };


const CharacterCreator = (props) => {
    const playerCharacter = props.playerCharacter;
    const setPlayerCharacter = props.setPlayerCharacter;


  const handleSelectChange = (event, field) => {
    setPlayerCharacter({ ...playerCharacter, [field]: event.target.value });
  };

  const handleInputChange = (event, field) => {
    setPlayerCharacter({ ...playerCharacter, [field]: event.target.value });
  };

  const handleStatReroll = (stat) => {
    const newStats = { ...playerCharacter.stats };
    newStats[stat] = rollStat();
    setPlayerCharacter({ ...playerCharacter, stats: newStats });
  };


  const handleWeaponChange = (event) => {
    const weapon = event.target.name;
    const newEquipment = [...playerCharacter.equipment];

    if (event.target.checked) {
      newEquipment.push(weapon);
    } else {
      const index = newEquipment.indexOf(weapon);
      newEquipment.splice(index, 1);
    }

    setPlayerCharacter({ ...playerCharacter, equipment: newEquipment });
  };

  return (
    <div>
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          onChange={(event) => handleInputChange(event, 'name')}
        />
      </div>

      <div className="input-group">
        <label htmlFor="class">Class</label>
        <select
          id="class"
          value={playerCharacter.class}
          onChange={(event) => handleSelectChange(event, 'class')}
        >
          {dndClasses.map((dndClass) => (
            <option key={dndClass} value={dndClass}>
              {dndClass}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="race">Race</label>
        <select
          id="race"
          value={playerCharacter.race}
          onChange={(event) => handleSelectChange(event, 'race')}
        >
          {dndRaces.map((race) => (
            <option key={race} value={race}>
              {race}
            </option>
          ))}
        </select>
      </div>

      
      <div className="stat-fields">
        {Object.keys(playerCharacter.stats).map((stat) => (
          <div key={stat} className="stat-field">
            <label htmlFor={stat}>{stat}</label>
            <input
              id={stat}
              type="text"
              value={playerCharacter.stats[stat]}
              readOnly
            />
            <button onClick={() => handleStatReroll(stat)}>Reroll {stat}</button>
          </div>
        ))}
      </div>

      <div className="input-group">
        <div className="checkbox-group">
          {weapons.map((weapon) => (
            <div key={weapon}>
              <input
                type="checkbox"
                id={weapon}
                checked={playerCharacter.equipment.includes(weapon)}
                onChange={handleWeaponChange}
                name={weapon}
              />
              <label htmlFor={weapon}>{weapon}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterCreator;