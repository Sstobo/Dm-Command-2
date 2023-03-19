import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import {
  IcosahedronGeometry,
  Vector3,
  CanvasTexture,
  Float32BufferAttribute,
  MeshStandardMaterial,
} from 'three';

const Dice = () => {
  const meshRef = useRef();
  const [rotationSpeed, setRotationSpeed] = useState(0.5);

  const geometry = new IcosahedronGeometry(2);

  const colors = [];
  const uv = [];
  const c = new Vector3();

  for (let i = 0; i < 20; i++) {
    c.random().multiplyScalar(0.5).addScalar(0.5);
    colors.push(c.x, c.y, c.z, c.x, c.y, c.z, c.x, c.y, c.z);
    uv.push(
      (0.067 + i) / 20, 0.25,
      (0.933 + i) / 20, 0.25,
      (0.5 + i) / 20, 1
    );
  }

  geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
  geometry.setAttribute('uv', new Float32BufferAttribute(uv, 2));

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

  const texture = makeNumbers();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed;
      meshRef.current.rotation.y += delta * rotationSpeed;
    }
  });

  const handleClick = () => {
    setRotationSpeed(rotationSpeed + 1);
  };

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