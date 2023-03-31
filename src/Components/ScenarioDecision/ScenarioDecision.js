import React, { useState } from "react";
// import "./ScenarioDecision.css";

const ScenarioDecision = ({
  scenario,
  setScenario,
  story,
  playerCharacter,
  handleDecision,
  setImage,
  sceneNumber,
}) => {
  const [decision, setDecision] = useState("");

  return (
    <div className="scenario-decision-container">
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
            onChange={(e) => setDecision(e.target.value)}
          />

          <div
            role="button"
            className="create-scenario-button"
            onClick={() => {
              handleDecision(
                decision,
                story,
                scenario,
                setScenario,
                sceneNumber,
                playerCharacter,
      
                setImage
              );
              setDecision("");
            }}
          >
            <h4>What do you do?</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScenarioDecision;