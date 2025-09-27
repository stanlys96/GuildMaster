import React, { useState } from "react";
import { motion } from "framer-motion";

type CoolSliderProps = {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  label?: string;
  className?: string;
};

export default function CoolSlider({
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue,
  onChange,
  label,
  className,
}: CoolSliderProps) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue ?? min);
  const current = isControlled ? value! : internal;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (!isControlled) setInternal(val);
    onChange?.(val);
  };

  const percentage = (current / max) * 100;

  return (
    <div className={`w-full ${className ?? ""}`}>
      <div className="px-3 py-3 flex rounded-xl w-full bg-[#2C2E32] mb-2 justify-between items-center">
        <p>{current}</p>
        <p>%</p>
      </div>
      <div className="flex justify-between items-center">
        <label className="block mb-2 font-medium text-[#787988]">
          <span className="font-semibold text-[#787988]">0</span>%
        </label>
        <label className="block mb-2 font-medium text-[#787988]">
          <span className="font-semibold text-[#787988]">100</span>%
        </label>
      </div>
      <div className="relative w-full h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full">
        <motion.div
          className="absolute h-2 bg-gradient-to-r  from-blue-500 to-indigo-500 rounded-full"
          initial={false}
          animate={{ width: `${percentage}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={current}
          onChange={handleChange}
          className="absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer"
        />
        {/* <motion.div
          className="absolute top-0 -translate-y-1/2 h-5 w-5 rounded-full border-2 border-white shadow-md bg-blue-500"
          style={{ left: `${percentage}%`, transform: "translate(-50%, -50%)" }}
          layout
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
        /> */}
      </div>
    </div>
  );
}
