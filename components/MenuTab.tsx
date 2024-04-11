"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const MenuTab = () => {
  const [index, setIndex] = useState(0);

  return (
    <nav className="flex flex-col overflow-clip">
      <div className="grid grid-cols-3 relative cursor-pointer">
        <div
          className={"px-4 py-2 min-w-24 flex justify-center"}
          onClick={() => {
            setIndex(0);
          }}
        >
          <h1 className="font-bold text-lg">First</h1>
        </div>
        <div
          className={"px-4 py-2 min-w-24 flex justify-center"}
          onClick={() => {
            setIndex(1);
          }}
        >
          <h1 className="font-bold text-lg">Second</h1>
        </div>
        <div
          className={"px-4 py-2 min-w-24 flex justify-center"}
          onClick={() => {
            setIndex(2);
          }}
        >
          <h1 className="font-bold text-lg">Third</h1>
        </div>
        <div
          className={cn(
            "absolute bg-primary rounded-t-2xl w-1/3 h-16 -z-10 transition-transform duration-300",
            "before:bg-opacity-0 before:absolute before:-left-3 before:bottom-5 before:w-3 before:h-3 before:rounded-br-3xl before:shadow-[3px_3px_rgb(255,196,69)]",
            "after:bg-opacity-0 after:absolute after:-right-3 after:bottom-5 after:w-3 after:h-3 after:rounded-bl-3xl after:shadow-[-3px_3px_rgb(255,196,69)]",
            {
              "translate-x-[0%]": index === 0,
              "translate-x-[100%]": index === 1,
              "translate-x-[200%]": index === 2,
            }
          )}
        />
      </div>
      <div className="h-8 bg-primary rounded-t-2xl"></div>
    </nav>
  );
};

export default MenuTab;
