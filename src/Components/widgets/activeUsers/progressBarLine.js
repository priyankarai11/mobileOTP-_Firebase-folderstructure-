/** @format */

import React from "react";
import { ProgressBarLine } from "react-progressbar-line";

function ProgressBarLineComp({ value, max }) {
  return (
    <ProgressBarLine
      value={value}
      min={0}
      max={max}
      strokeWidth={5}
      trailWidth={5}
      styles={{
        path: {
          stroke: "#000000",
        },
        trail: {
          stroke: "#F0F0F0",
        },
        text: {
          fill: "#000000",
          textAlign: "center",
          fontSize: "32px",
        },
      }}
    />
  );
}

export { ProgressBarLineComp };
