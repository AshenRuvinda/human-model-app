// Loader.js 
import React from "react";

export default function Loader() {
  return (
    <mesh>
      <textGeometry args={["Loading...", { size: 1, height: 0.1 }]} />
    </mesh>
  );
}
