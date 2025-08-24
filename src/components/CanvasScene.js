// CanvasScene.js 
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import HumanModel from "./HumanModel";
import Loader from "./Loader";

export default function CanvasScene() {
  return (
    <Canvas camera={{ position: [0, 1.5, 3] }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <Suspense fallback={<Loader />}>
        <HumanModel />
        <Environment preset="studio" />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
