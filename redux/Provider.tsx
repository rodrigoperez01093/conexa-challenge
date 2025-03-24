"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Providers: React.FC<LayoutProps> = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
