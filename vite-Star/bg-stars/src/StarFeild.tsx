// StarField.jsx
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function StarField({ count = 1000 }) {
  const mesh = useRef(0);

  // Generate random star positions
  const stars = useMemo(() => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = -Math.random() * 2000;
      positions.push(x, y, z);
    }
    return new Float32Array(positions);
  }, [count]);

  // Rotation animation
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.00001;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={stars}
          count={stars.length / 3}
          itemSize={3}
          args={[stars, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={1.5}
        color="white"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}
