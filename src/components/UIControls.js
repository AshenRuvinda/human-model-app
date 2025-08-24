// UIControls.js 
import React from "react";
import { useModelParams } from "../hooks/useModelParams";

export default function UIControls() {
  const { armScale, setArmScale, legScale, setLegScale, headScale, setHeadScale } = useModelParams();

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Body Adjustments</h2>

      <div>
        <label className="block mb-1">Arm Scale: {armScale.toFixed(1)}</label>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={armScale}
          onChange={(e) => setArmScale(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <label className="block mb-1">Leg Scale: {legScale.toFixed(1)}</label>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={legScale}
          onChange={(e) => setLegScale(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <label className="block mb-1">Head Scale: {headScale.toFixed(1)}</label>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={headScale}
          onChange={(e) => setHeadScale(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
}
