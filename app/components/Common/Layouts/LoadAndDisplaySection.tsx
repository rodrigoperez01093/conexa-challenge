"use client";

import React, { type ReactNode } from "react";
import Loader from "../Loader";
import Error from "../Error";
import { AnimatePresence, motion } from "framer-motion";

interface LoadAndDisplaySectionProps {
  loading: boolean;
  error: boolean;
  children: ReactNode;
  errorMessage?: string;
  loadingMessage?: string;
}

const LoadAndDisplaySection: React.FC<LoadAndDisplaySectionProps> = ({
  loading = false,
  error = false,
  children,
  errorMessage = "No characters founded",
  loadingMessage = "Searching characters...",
}) => {
  return (
    <AnimatePresence>
      {loading ? (
        <Loader loadingMessage={loadingMessage} />
      ) : error ? (
        <Error errorMessage={errorMessage} />
      ) : (
        // : children
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          exit={{ opacity: 0 }}
          className="flex flex-col flex-auto"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadAndDisplaySection;
