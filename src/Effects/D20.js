import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import {
  IcosahedronGeometry,
  Vector3,
  CanvasTexture,
  Float32BufferAttribute,
  MeshStandardMaterial,
} from 'three';

// Dice component
const Dice = () => {
  // Reference to the mesh object
  const meshRef = useRef();
  // State for rotation speed
  const [rotationSpeed, setRotationSpeed] = useState(1.5);

  // Create an icosahedron geometry with a radius of 2
  const geometry = new IcosahedronGeometry(2);

  // Arrays to store colors and UV coordinates
  const colors = [];
  const uv = [];
  const c = new Vector3();

  // Loop through each face of the icosahedron and assign random colors and UV coordinates
  for (let i = 0; i < 20; i++) {
    c.random().multiplyScalar(0.5).addScalar(0.5);
    colors.push(c.x, c.y, c.z, c.x, c.y, c.z, c.x, c.y, c.z);
    uv.push(
      (0.067 + i) / 20, 0.25,
      (0.933 + i) / 20, 0.25,
      (0.5 + i) / 20, 1
    );
  }

  // Set the geometry attributes for colors and UV coordinates
  geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
  geometry.setAttribute('uv', new Float32BufferAttribute(uv, 2));

  // Function to create a texture with numbers for the dice
  const makeNumbers = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 64;

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#a82315';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'white';
    ctx.font = '14px Arial';
    const step = 1024 / 20;
    const start = step * 0.5;

    for (let i = 0; i < 20; i++) {
      ctx.fillText(i + 1, start + step * i, 32);
    }

    return new CanvasTexture(canvas);
  };

  // Create a texture with numbers
  const texture = makeNumbers();

  // Animate the mesh rotation on each frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed;
      meshRef.current.rotation.y += delta * rotationSpeed;
    }
  });

  // Handle click event to increase rotation speed
  const handleClick = () => {
    setRotationSpeed(rotationSpeed + 1);
  };

  // Render the dice mesh
  return (
    <group>
      <mesh
        ref={meshRef}
        geometry={geometry}
        onClick={handleClick}
      >
        <meshStandardMaterial
          vertexColors
          map={texture}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
};

export default Dice;