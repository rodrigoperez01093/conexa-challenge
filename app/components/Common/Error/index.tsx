import React from "react";
import BlockIcon from "@mui/icons-material/Block";

interface ErrorProps {
  errorMessage: string;
}

const Error: React.FC<ErrorProps> = ({
  errorMessage = "Error loading page",
}) => {
  return (
    <section className="w-full flex flex-col h-full items-center justify-center">
      <div className="flex flex-col items-center">
        <BlockIcon fontSize="large" />
        <h1 className="mt-4 text-lg">{errorMessage}</h1>
      </div>
    </section>
  );
};

export default Error;
