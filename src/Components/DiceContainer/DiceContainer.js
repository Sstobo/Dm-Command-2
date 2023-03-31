import React from 'react';
import { Canvas } from '@react-three/fiber';
import Dice from '../../Effects/D20';
// import './DiceContainer.css';

const DiceContainer = () => {
  return (
    <div className="dice-container">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Dice />
      </Canvas>
    </div>
  );
};

export default DiceContainer;