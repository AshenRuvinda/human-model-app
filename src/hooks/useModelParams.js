// useModelParams.js 
import React, { createContext, useContext, useState } from "react";

const ModelParamsContext = createContext();

export function ModelParamsProvider({ children }) {
  const [armScale, setArmScale] = useState(1);
  const [legScale, setLegScale] = useState(1);
  const [headScale, setHeadScale] = useState(1);

  return (
    <ModelParamsContext.Provider value={{ armScale, setArmScale, legScale, setLegScale, headScale, setHeadScale }}>
      {children}
    </ModelParamsContext.Provider>
  );
}

export function useModelParams() {
  return useContext(ModelParamsContext);
}
