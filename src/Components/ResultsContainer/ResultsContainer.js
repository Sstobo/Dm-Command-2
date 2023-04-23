import React, { useEffect, useState } from 'react';
import DiceContainer from '../DiceContainer/DiceContainer';
import { getImageURL}  from "../ImageGenerator/ImageGenerator";
const ResultsContainer = ({
  scenario,
  decision,
  setDecision,
  handleDecision,
  story,
  sceneNumber,
  playerCharacter,
  setShowDice,
  showDice,
  handleBeginStory, // Add handleBeginStory prop
  image,
  setImage,
  setScenario, // Add setScenario prop
  setSceneNumber, // Add setSceneNumber prop
  apiKey, // Add apiKey prop
}) => {




  const handleClick = () => {
    handleDecision(
      decision,
      story,
      scenario,
      setScenario,
      sceneNumber,
      playerCharacter,
      setImage,
      setShowDice,
      apiKey
    );
    setDecision('');
    setSceneNumber(sceneNumber + 1);
    console.log(image);
  };

  const handleConfirm = () => {
    handleBeginStory(
      story,
      setScenario,
      scenario,
      playerCharacter,
      setImage,
      setShowDice,
      apiKey
    );
    console.log(image);
  };

  return (
    <div className="results-container">
      <div className="results-container-text">
        {showDice === true && <DiceContainer />}
        {scenario.length > 40 && (
          <div className="scenario-container">
            <div
              dangerouslySetInnerHTML={{
                __html: scenario,
              }}
            />
            <input
              className="decision-input"
              type="text"
              value={decision}
              autoComplete="off"
              onChange={(e) => setDecision(e.target.value)}
            />
            <div
              role="button"
              className="create-scenario-button"
              onClick={() => handleClick()} // Update the onClick event handler
            >
              <h4>What do you do?</h4>
            </div>
          </div>
        )}

        {story.length > 50 && scenario.length < 30 && (
          <div>
            <h2>We are ready to go!!</h2>
            <div
              role="button"
              className="create-scenario-button"
              onClick={handleConfirm}
            >
              Confirm story and begin
            </div>
          </div>
        )}
      </div>
      <div className="results-container-image">
      {image && (  <img src={image} alt="story image" /> )}
      </div>
    </div>
  );
};

export default ResultsContainer;