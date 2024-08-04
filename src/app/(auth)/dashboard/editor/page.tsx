"use client";
import EditorComponent from "@/components/editor/Editor";
import React, { useEffect, useState } from "react";
import Explorer from "@/components/editor/Explorer";
import Terminal from "@/components/editor/Terminal";
import Web from "@/components/editor/Web";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [terminalOpen, setTerminalOpen] = useState("terminal")
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
      <div className="col-span-1 h-full relative  overflow-y-auto">
        <div className="flex border-b m-0 items-center absolute top-0 w-full z-10 ">
          <Button onClick={() => setTerminalOpen("terminal")} className={`w-full m-0 ${terminalOpen === "terminal" ? "bg-[#111827]" : ""}`} variant={"ghost"}>

            Terminal
          </Button>
          <Button onClick={() => setTerminalOpen("nope")} className={`w-full m-0 ${terminalOpen !== "terminal" ? "bg-[#111827]" : ""}`} variant={"ghost"}>
            Web
          </Button>
        </div>

        <div className="term h-[calc(100vh-125px)] bg-[#111827] relative
        top-11">

          {
            terminalOpen === "terminal" ?
              <Terminal />
              :
              <Web />
          }
        </div>
      </div>
    </section>
  );
};

export default Page;
