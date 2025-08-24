// Loader.js 
import React from "react";
import { Text } from "@react-three/drei";

export default function Loader() {
  return (
    <Text
      position={[0, 0, 0]}
      fontSize={0.5}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      Loading...
    </Text>
  );
}