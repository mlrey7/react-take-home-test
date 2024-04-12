"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const MenuTab = () => {
  const [index, setIndex] = useState(0);
  const handleClickTab = (idx: number) => () => {
    setIndex(idx);
  };

  return (
    <nav className="flex flex-col overflow-clip">
      <div className="relative grid cursor-pointer grid-cols-3">
        <div
          className={"flex min-w-24 justify-center px-4 py-2"}
          onClick={handleClickTab(0)}
        >
          <h1 className="text-lg font-bold">First</h1>
        </div>
        <div
          className={"flex min-w-24 justify-center px-4 py-2"}
          onClick={handleClickTab(1)}
        >
          <h1 className="text-lg font-bold">Second</h1>
        </div>
        <div
          className={"flex min-w-24 justify-center px-4 py-2"}
          onClick={handleClickTab(2)}
        >
          <h1 className="text-lg font-bold">Third</h1>
        </div>
        <div
          className={cn(
            "absolute -z-10 h-16 w-1/3 rounded-t-2xl bg-primary transition-transform duration-300",
            "before:absolute before:-left-3 before:bottom-5 before:h-3 before:w-3 before:rounded-br-3xl before:bg-opacity-0 before:shadow-[3px_3px_rgb(255,196,69)]",
            "after:absolute after:-right-3 after:bottom-5 after:h-3 after:w-3 after:rounded-bl-3xl after:bg-opacity-0 after:shadow-[-3px_3px_rgb(255,196,69)]",
            {
              "translate-x-[0%]": index === 0,
              "translate-x-[100%]": index === 1,
              "translate-x-[200%]": index === 2,
            },
          )}
        />
      </div>
      <div className="h-8 rounded-t-2xl bg-primary"></div>
    </nav>
  );
};

export default MenuTab;
