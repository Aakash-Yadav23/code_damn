"use client";
import React from "react";
import Editor from "@monaco-editor/react";
import { useEffect } from "react";

const EditorComponent = () => {
  useEffect(() => {
    // Adding VS Code like styles
    document.body.style.backgroundColor = "#1e1e1e";
    document.body.style.color = "#d4d4d4";
    document.body.style.fontFamily = "Consolas, 'Courier New', monospace";
  }, []);

  return (
    <section
   className={'h-full flex flex-col'}
    >
      <div style={{ flexGrow: 1 }}>
        <Editor
          height="100%"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          options={{
            fontSize: 14,
            fontFamily: "Consolas, 'Courier New', monospace",
            minimap: { enabled: true },
            scrollbar: {
              verticalScrollbarSize: 10,
              horizontalScrollbarSize: 10,
            },
            wordWrap: "on",
            cursorStyle: "line",
            cursorBlinking: "blink",
          }}
        />
      </div>
    </section>
  );
};

export default EditorComponent;
