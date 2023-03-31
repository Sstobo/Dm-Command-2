import React from 'react';
// import './CharacterCreator.css';

const CharacterCreator = ({ playerCharacter, setPlayerCharacter }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlayerCharacter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStatsChange = (e) => {
    const { name, value } = e.target;
    setPlayerCharacter((prev) => ({
      ...prev,
      stats: {
        ...prev.stats,
        [name]: value,
      },
    }));
  };

  return (
    <div className="character-creator">
      <h3>Create your character</h3>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={playerCharacter.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Class:
          <input
            type="text"
            name="class"
            value={playerCharacter.class}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Race:
          <input
            type="text"
            name="race"
            value={playerCharacter.race}
            onChange={handleInputChange}
          />
        </label>
        <h4>Stats</h4>
        <label>
          Strength:
          <input
            type="number"
            name="strength"
            value={playerCharacter.stats.strength}
            onChange={handleStatsChange}
          />
        </label>
        {/* Add other stats input fields (Dexterity, Constitution, Intelligence, Wisdom, Charisma) */}
      </form>
    </div>
  );
};

export default CharacterCreator;