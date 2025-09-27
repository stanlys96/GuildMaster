import React, { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

/**
 * Fancy, accessible Radio Group (React + TypeScript)
 * - Keyboard accessible (uses native <input type="radio"/>)
 * - Smooth Framer Motion micro‑interactions
 * - TailwindCSS styling
 * - Vertical or horizontal layout
 * - Works as controlled or uncontrolled component
 */

export type RadioOption = {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
};

export type CoolRadioGroupProps = {
  name?: string;
  options: RadioOption[];
  value?: string; // for controlled usage
  defaultValue?: string; // for uncontrolled usage
  onChange?: (value: string) => void;
  orientation?: "vertical" | "horizontal";
  size?: "sm" | "md" | "lg";
  className?: string;
};

function classNames(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

const sizeMap = {
  sm: { ring: "h-4 w-4", dot: 6, gap: "gap-2", text: "text-sm" },
  md: { ring: "h-5 w-5", dot: 8, gap: "gap-3", text: "text-base" },
  lg: { ring: "h-6 w-6", dot: 10, gap: "gap-3", text: "text-lg" },
} as const;

export function CoolRadioGroup({
  name,
  options,
  value,
  defaultValue,
  onChange,
  orientation = "vertical",
  size = "md",
  className,
}: CoolRadioGroupProps) {
  const autoName = useId();
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState<string | undefined>(defaultValue);

  const current = isControlled ? value : internal;

  const handleChange = (v: string) => {
    if (!isControlled) setInternal(v);
    onChange?.(v);
  };

  const sizes = sizeMap[size];

  return (
    <div
      role="radiogroup"
      aria-orientation={orientation}
      className={classNames(
        "flex",
        orientation === "horizontal"
          ? "flex-row flex-wrap"
          : "flex-col gap-y-5",
        sizes.gap,
        className
      )}
    >
      {options.map((opt) => {
        const checked = current === opt.value;
        const disabled = !!opt.disabled;
        const baseId = `${(name || autoName).replace(/:/g, "")}-${opt.value}`;
        return (
          <label
            key={opt.value}
            htmlFor={baseId}
            className={classNames(
              "group relative cursor-pointer select-none",
              "rounded-2xl border border-zinc-300/60  backdrop-blur",
              "bg-[#2C2E32]",
              "shadow-sm hover:shadow transition-all",
              "px-4 py-3",
              "flex items-start",
              orientation === "horizontal" ? "min-w-[220px]" : "w-full",
              disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            {/* Hidden native input for a11y */}
            <input
              id={baseId}
              type="radio"
              name={name || autoName}
              value={opt.value}
              checked={checked}
              disabled={disabled}
              onChange={() => handleChange(opt.value)}
              className="sr-only"
            />

            {/* Visual radio ring */}
            <motion.span
              aria-hidden
              className={classNames(
                "relative mt-0.5 mr-3 inline-flex items-center justify-center",
                "rounded-full border border-zinc-400/70 dark:border-zinc-600/70",
                "bg-white dark:bg-zinc-900",
                sizes.ring
              )}
              initial={false}
              animate={{
                boxShadow: checked
                  ? "0 0 0 4px rgb(59 130 246 / 0.20), 0 8px 20px rgba(0,0,0,0.12)"
                  : "0 0 0 0 rgba(0,0,0,0)",
                scale: checked ? 1.02 : 1,
              }}
              whileHover={{ scale: disabled ? 1 : 1.04 }}
              whileTap={{ scale: disabled ? 1 : 0.98 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
            >
              <AnimatePresence>
                {checked && (
                  <motion.span
                    key="dot"
                    className="rounded-full bg-gradient-to-br from-blue-500 to-indigo-500"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    style={{ width: sizes.dot, height: sizes.dot }}
                  />
                )}
              </AnimatePresence>
            </motion.span>

            {/* Text content */}
            <div className="flex-1">
              <div
                className={classNames(
                  "font-semibold tracking-tight",
                  sizes.text
                )}
              >
                {opt.label}
                {checked && (
                  <motion.span
                    aria-hidden
                    className="ml-2 inline-flex align-middle"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Sparkles className="h-4 w-4" />
                  </motion.span>
                )}
              </div>
              {opt.description && (
                <p className="text-sm text-[#8B8CA0] mt-0.5">
                  {opt.description}
                </p>
              )}
            </div>

            {/* Active glow border */}
            <AnimatePresence>
              {checked && (
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-blue-500/40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </AnimatePresence>
          </label>
        );
      })}
    </div>
  );
}
