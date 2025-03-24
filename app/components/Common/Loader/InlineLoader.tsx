import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { ThemeProvider } from "@emotion/react";
import { muiConfig } from "../Mui/muiConfig";

const InlineLoader: React.FC = () => {
  return (
    <ThemeProvider theme={muiConfig}>
      <section className="fixed xl:top-[72px] top-[56px] left-0 w-full z-10">
        <LinearProgress />
      </section>
    </ThemeProvider>
  );
};

export default InlineLoader;
