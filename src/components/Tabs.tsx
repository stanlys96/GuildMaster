import { useState } from "react";

interface Props {
  tabs: any;
  activeIndex: number;
  setActiveIndex: (value: number) => void;
  className: string;
}

export const Tabs = ({
  tabs,
  activeIndex,
  setActiveIndex,
  className,
}: Props) => {
  return (
    <div className={`w-full max-w-lg font-sans ${className}`}>
      <div className="flex bg-[#1C1E22] max-w-lg border border-[#88888820] rounded-md">
        {tabs.map((tab: any, index: number) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative rounded-md p-2 flex-1 py-2 text-center text-sm font-medium transition-colors duration-300 ${
              activeIndex === index ? "bg-[#393A3D] text-white" : "text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};
