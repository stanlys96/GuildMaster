import React, { useState } from "react";

interface Props {
  options: any;
  value: any;
  onChange: any;
  name: any;
}

const optionsSample = [
  {
    id: "design",
    title: "Design",
    subtitle: "Creative UI & visuals",
  },
  {
    id: "dev",
    title: "Development",
    subtitle: "Frontend & backend",
  },
  {
    id: "data",
    title: "Data",
    subtitle: "Analytics & ML",
  },
];

function IconCheck({ className = "w-4 h-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M4.5 10.5l3 3L15.5 5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SecondCoolRadioButtons({
  options = optionsSample,
  value,
  onChange,
  name = "cool-radio",
}: Props) {
  const [currentValue, setCurrentValue] = useState(value ?? options[0]?.id);
  const selectedValue = currentValue ?? value;

  function handleSelect(id: any) {
    if (!value) setCurrentValue(id);
    onChange?.(id);
  }

  return (
    <div className="w-full max-w-md">
      <fieldset className="space-y-3">
        <legend className="sr-only">Choose a category</legend>
        <div className="flex gap-x-2">
          {options.map((opt: any) => {
            const checked = opt.id === selectedValue;
            return (
              <label
                key={opt.id}
                className={`relative flex items-center gap-4 p-3 rounded-2xl cursor-pointer transition-shadow focus-within:shadow-[0_6px_18px_rgba(0,0,0,0.12)] ${
                  checked
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg"
                    : "bg-white dark:bg-slate-800 text-slate-900"
                }`}
              >
                <input
                  type="radio"
                  name={name}
                  value={opt.id}
                  checked={checked}
                  onChange={() => handleSelect(opt.id)}
                  className="sr-only"
                />

                {/* Custom radio visual */}
                <div
                  aria-hidden
                  className={`flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0 transition-transform ${
                    checked ? "scale-105 bg-white/20" : "bg-slate-100"
                  }`}
                >
                  {checked ? (
                    <div className="flex items-center gap-2">
                      <IconCheck className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                  )}
                </div>

                {/* Text */}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold leading-tight">
                      {opt.title}
                    </div>
                    <div
                      className={`text-xs font-medium ml-2 ${
                        checked ? "opacity-90" : "text-slate-500"
                      }`}
                    >
                      {checked ? "Selected" : ""}
                    </div>
                  </div>
                  <div
                    className={`${
                      checked ? "opacity-90" : "text-slate-500"
                    } text-xs mt-1`}
                  >
                    {opt.subtitle}
                  </div>
                </div>

                {/* Accent ring when checked */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute -inset-px rounded-2xl transition-opacity ${
                    checked ? "opacity-100" : "opacity-0"
                  }`}
                />
              </label>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}
