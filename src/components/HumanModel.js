// HumanModel.js 
import React from "react";
import { useGLTF } from "@react-three/drei";
import { useModelParams } from "../hooks/useModelParams";

export default function HumanModel() {
  const { scene } = useGLTF("/models/human.glb");
  const { armScale, legScale, headScale } = useModelParams();

  // Adjust bones if they exist
  scene.traverse((obj) => {
    if (obj.isBone) {
      if (obj.name.includes("Arm")) obj.scale.set(armScale, armScale, armScale);
      if (obj.name.includes("Leg")) obj.scale.set(legScale, legScale, legScale);
      if (obj.name.includes("Head")) obj.scale.set(headScale, headScale, headScale);
    }
  });

  return <primitive object={scene} scale={[1, 1, 1]} />;
}
