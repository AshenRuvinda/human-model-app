// App.js 
import React from "react";
import CanvasScene from "./components/CanvasScene";
import UIControls from "./components/UIControls";
import { ModelParamsProvider } from "./hooks/useModelParams";

function App() {
  return (
    <ModelParamsProvider>
      <div className="flex h-screen">
        <div className="flex-1 bg-black">
          <CanvasScene />
        </div>
        <div className="w-80 bg-gray-800 p-4 overflow-y-auto">
          <UIControls />
        </div>
      </div>
    </ModelParamsProvider>
  );
}

export default App;
