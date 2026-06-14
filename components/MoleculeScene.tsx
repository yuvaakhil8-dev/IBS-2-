"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

function Backbone({ offset, color }: { offset: number; color: string }) {
  const beads = Array.from({ length: 42 }, (_, i) => {
    const angle = i * 0.65;
    return [offset + Math.cos(angle) * 1.6, Math.sin(angle) * 1.6, i * 0.08 - 1.6] as const;
  });
  return (
    <group>
      {beads.map((point, index) => (
        <mesh position={point} key={`${offset}-${index}`}>
          <sphereGeometry args={[index % 7 === 0 ? 0.13 : 0.08, 20, 20]} />
          <meshStandardMaterial color={index % 7 === 0 ? "#ff4d6d" : color} emissive={index % 7 === 0 ? "#661122" : "#001111"} />
        </mesh>
      ))}
    </group>
  );
}

export function MoleculeScene() {
  return (
    <div className="h-[360px] overflow-hidden rounded-lg border border-lab-cyan/20 bg-black/30">
      <Canvas camera={{ position: [0, 0, 7], fov: 52 }}>
        <ambientLight intensity={0.65} />
        <pointLight position={[3, 4, 5]} intensity={1.8} />
        <Stars radius={30} depth={30} count={1200} factor={2} fade speed={0.4} />
        <Backbone offset={-1.7} color="#55e6ff" />
        <Backbone offset={1.7} color="#6ef5b3" />
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}
