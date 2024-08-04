"use client";
import EditorComponent from "@/components/editor/Editor";
import React, { useEffect } from "react";
import Explorer from "@/components/editor/Explorer";
import Terminal from "@/components/editor/Terminal";

const Page = () => {
  useEffect(() => {
    // Adding VS Code-like styles
    document.body.style.backgroundColor = "#1e1e1e";
    document.body.style.color = "#d4d4d4";
    document.body.style.fontFamily = "Consolas, 'Courier New', monospace";
  }, []);

  return (
    <section className="grid h-full grid-cols-6 gap-0">
      <div className="col-span-1 overflow-y-auto border-r">
        <Explorer />
      </div>
      <div className="col-span-4">
        <EditorComponent />
      </div>
      <div className="col-span-1 h-full overflow-y-auto">
        <Terminal />
      </div>
    </section>
  );
};

export default Page;
