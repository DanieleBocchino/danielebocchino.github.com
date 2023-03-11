import { Avatar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ReactComponent as MyPY } from "/Users/daniele/Work/DanieleBocchino/src/svg/python.svg";
import { ReactComponent as MySQL } from "/Users/daniele/Work/DanieleBocchino/src/svg/sql.svg";
import { ReactComponent as MyAWS } from "/Users/daniele/Work/DanieleBocchino/src/svg/aws.svg";
import { ReactComponent as MyReact } from "/Users/daniele/Work/DanieleBocchino/src/svg/react.svg";
import { ReactComponent as MyFlutter } from "/Users/daniele/Work/DanieleBocchino/src/svg/flutter.svg";
import { ReactComponent as MyGit } from "/Users/daniele/Work/DanieleBocchino/src/svg/git.svg";
import { ReactComponent as MyCreative } from "/Users/daniele/Work/DanieleBocchino/src/svg/creative.svg";

const DEFAULT_STROKE_COLOR = "#666666"; // colore del tratto di default
const DEFAULT_FILL_COLOR = "#666666"; // colore del tratto di default
const DEFAULT_ORANGE = "#ec912e";

export function PythonSVG({ width = 100, height = 100 }) {
  const [strokeColor, setStrokeColor] = useState(DEFAULT_STROKE_COLOR);
  const [fillColor, setFillColor] = useState(DEFAULT_FILL_COLOR);

  const handleMouseEnter = () => {
    setStrokeColor(DEFAULT_ORANGE);
    setFillColor(DEFAULT_ORANGE);
  };
  const handleMouseLeave = (event) => {
    setStrokeColor(DEFAULT_STROKE_COLOR);
    setFillColor(DEFAULT_FILL_COLOR);
  };

  return (
    <div style={{ maxWidth: 100, maxHeight: 100 }}>
      <MyPY
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          stroke: strokeColor,
          transition: "stroke 0.3s ease-in-out, fill 0.3s ease-in-out",
        }}
        width={width}
        height={height}
      />

      <Typography></Typography>
    </div>
  );
}

export function SqlSVG({ width = 100, height = 100 }) {
  const [strokeColor, setStrokeColor] = useState(DEFAULT_STROKE_COLOR);
  const [fillColor, setFillColor] = useState(DEFAULT_FILL_COLOR);

  const handleMouseEnter = () => {
    setStrokeColor(DEFAULT_ORANGE);
    setFillColor(DEFAULT_ORANGE);
  };
  const handleMouseLeave = (event) => {
    setStrokeColor(DEFAULT_STROKE_COLOR);
    setFillColor(DEFAULT_FILL_COLOR);
  };

  return (
    <div style={{ maxWidth: 100, maxHeight: 100 }}>
      <MySQL
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          fill: fillColor,
          stroke: strokeColor,
          transition: "stroke 0.3s ease-in-out, fill 0.3s ease-in-out",
        }}
        width={width}
        height={height}
      />
      <Typography></Typography>
    </div>
  );
}

export function AwsSVG({ width = 100, height = 100 }) {
  const [strokeColor, setStrokeColor] = useState(DEFAULT_STROKE_COLOR);
  const [fillColor, setFillColor] = useState(DEFAULT_FILL_COLOR);

  const handleMouseEnter = () => {
    setFillColor(DEFAULT_ORANGE);
  };
  const handleMouseLeave = (event) => {
    setFillColor(DEFAULT_FILL_COLOR);
  };

  return (
    <div style={{ maxWidth: 100, maxHeight: 100 }}>
      <MyAWS
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          fill: fillColor,
          transition: "stroke 0.3s ease-in-out, fill 0.3s ease-in-out",
        }}
        width={width}
        height={height}
      />
      <style>{`.mysql-path1 { fill: ${fillColor}; }`}</style>
      <path id="path1" className="mysql-path1" />
      <Typography></Typography>
    </div>
  );
}

export function ReactSVG({ width = 100, height = 100 }) {
  const [strokeColor, setStrokeColor] = useState(DEFAULT_STROKE_COLOR);
  const [fillColor, setFillColor] = useState(DEFAULT_FILL_COLOR);

  const handleMouseEnter = () => {
    setFillColor(DEFAULT_ORANGE);
  };
  const handleMouseLeave = (event) => {
    setFillColor(DEFAULT_FILL_COLOR);
  };

  return (
    <div style={{ maxWidth: 100, maxHeight: 100 }}>
      <MyReact
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          fill: fillColor,
          transition: "stroke 0.3s ease-in-out, fill 0.3s ease-in-out",
        }}
        width={width}
        height={height}
      />

      <Typography></Typography>
    </div>
  );
}

export function FlutterSVG({ width = 100, height = 100 }) {
  const [fillColor, setFillColor] = useState(DEFAULT_FILL_COLOR);

  const handleMouseEnter = () => {
    setFillColor(DEFAULT_ORANGE);
  };
  const handleMouseLeave = (event) => {
    setFillColor(DEFAULT_FILL_COLOR);
  };

  return (
    <div style={{ maxWidth: 100, maxHeight: 100 }}>
      <MyFlutter
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          fill: fillColor,
          transition: "stroke 0.3s ease-in-out, fill 0.3s ease-in-out",
        }}
        width={width}
        height={height}
      />

      <Typography></Typography>
    </div>
  );
}

export function GitSVG({ width = 100, height = 100 }) {
  const [fillColor, setFillColor] = useState(DEFAULT_FILL_COLOR);

  const handleMouseEnter = () => {
    setFillColor(DEFAULT_ORANGE);
  };
  const handleMouseLeave = (event) => {
    setFillColor(DEFAULT_FILL_COLOR);
  };

  return (
    <div style={{ maxWidth: 100, maxHeight: 100 }}>
      <MyGit
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          fill: fillColor,
          transition: "stroke 0.3s ease-in-out, fill 0.3s ease-in-out",
        }}
        width={width}
        height={height}
      />

      <Typography></Typography>
    </div>
  );
}

export function CreativeSVG({ width = 100, height = 100 }) {
  const [fillColor, setFillColor] = useState(DEFAULT_FILL_COLOR);

  const handleMouseEnter = () => {
    setFillColor(DEFAULT_ORANGE);
  };
  const handleMouseLeave = (event) => {
    setFillColor(DEFAULT_FILL_COLOR);
  };

  return (
    <div style={{ maxWidth: 100, maxHeight: 100 }}>
      <MyCreative
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          fill: fillColor,
          transition: "stroke 0.3s ease-in-out, fill 0.3s ease-in-out",
        }}
        width={width}
        height={height}
      />
      <style>{`.mysql-path1 { fill: ${fillColor}; }`}</style>
      <path id="path1" className="mysql-path1" />

      <Typography></Typography>
    </div>
  );
}
