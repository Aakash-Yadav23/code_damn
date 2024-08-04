"use client";
import React, { useState, useLayoutEffect, useRef } from "react";
import { Terminal as XTerm } from "xterm";
import { AttachAddon } from "@xterm/addon-attach";
import { ClipboardAddon } from "@xterm/addon-clipboard";
import { FitAddon } from "@xterm/addon-fit";
import "xterm/css/xterm.css";

const TerminalComponent = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (typeof window !== "undefined" && isMounted && terminalRef.current) {
      const terminal = new XTerm({
        cursorBlink: true,
        theme: {
          background: "#1e1e1e",
          foreground: "#d4d4d4",
        },
      });

      const fitAddon = new FitAddon();
      terminal.loadAddon(fitAddon);
      terminal.loadAddon(new ClipboardAddon());

      try {
        terminal.loadAddon(
          new AttachAddon(new WebSocket("ws://localhost:3000")),
        );
      } catch (error) {
        console.error("Failed to connect to WebSocket:", error);
      }

      terminal.open(terminalRef.current);
      fitAddon.fit();

      terminal.write("Welcome to the terminal!\r\n");

      terminal.onData((data) => {
        terminal.write(data);
      });

      const handleResize = () => {
        fitAddon.fit();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        terminal.dispose();
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isMounted]);

  return (
    <div
      ref={terminalRef}
      className="h-full w-full overflow-y-auto"
      style={{ minHeight: "300px", minWidth: "100px" }}
    />
  );
};

export default TerminalComponent;
