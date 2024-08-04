"use client";
import React from "react";
import dynamic from "next/dynamic";

const TerminalComponent = dynamic(() => import("./TerminalComponent"), {
  ssr: false,
});

const Terminal = () => {
  return <TerminalComponent />;
};

export default Terminal;
