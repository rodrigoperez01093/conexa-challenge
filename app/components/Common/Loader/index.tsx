"use client";

import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

interface LoaderProps {
  size?: number;
  thickness?: number;
  loadingMessage?: string;
}

const Loader: React.FC<LoaderProps> = ({
  size = 64,
  thickness = 3,
  loadingMessage = "Loading data...",
}) => {
  const colors = [
    "#00D89D",
    "#D8D8D8",
    "#272727",
    "#E62DF6",
    "#EDF037",
    "#805AFF",
    "#F45757",
    "#0070D8",
  ];
  const [colorIndex, setColorIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevColorIndex) => (prevColorIndex + 1) % colors.length);
    }, 1400);
    return () => {
      clearInterval(interval);
    };
  }, []); // eslint-disable-line
  return (
    <div className="w-full flex flex-col h-full justify-center items-center">
      <CircularProgress
        size={size}
        thickness={thickness}
        sx={{ color: colors[colorIndex] }}
      />
      <p className="text-center mt-5 text-stamm-black">{loadingMessage}</p>
    </div>
  );
};

export default Loader;
