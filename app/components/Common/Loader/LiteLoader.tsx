"use client";

import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

interface LoaderProps {
  size?: number;
  thickness?: number;
  extraProps?: any;
}

const LiteLoader: React.FC<LoaderProps> = ({
  size = 64,
  thickness = 3,
  extraProps = {},
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
    <CircularProgress
      size={size}
      thickness={thickness}
      sx={{ ...extraProps, color: colors[colorIndex] }}
    />
  );
};

export default LiteLoader;
