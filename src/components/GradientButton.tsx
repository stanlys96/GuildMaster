import React from "react";

type Variant = "primary" | "secondary" | "danger" | "ghost" | "green";
type Size = "sm" | "md" | "lg";

interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: (e: any) => void;
}

/**
 * GradientButton
 * - React + TypeScript single-file component
 * - TailwindCSS for styling (no external libs required)
 * - Accessible (aria-busy while loading)
 * - Variants, sizes, optional icons, and loading state
 *
 * Usage:
 * <GradientButton variant="primary" size="md" onClick={() => {}}>Click me</GradientButton>
 */

const VARIANT_GRADIENTS: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600",
  secondary:
    "bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 hover:from-green-500 hover:via-teal-500 hover:to-cyan-500",
  danger:
    "bg-gradient-to-r from-red-500 via-amber-500 to-rose-500 hover:from-red-600 hover:via-amber-600 hover:to-rose-600",
  ghost: "bg-transparent",
  green:
    "bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 hover:from-green-600 hover:via-emerald-600 hover:to-lime-600",
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm rounded-md",
  md: "px-4 py-2 text-base rounded-lg",
  lg: "px-6 py-3 text-lg rounded-xl",
};

export default function GradientButton({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  onClick,
  ...rest
}: GradientButtonProps) {
  const isGhost = variant === "ghost";
  const base = `items-center focus-visible:outline-none justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-opacity-30`;

  const gradient = isGhost ? "" : VARIANT_GRADIENTS[variant];
  const sizeCls = SIZE_CLASSES[size];
  const widthCls = fullWidth ? "w-full" : "max-w-fit";
  const opacityDisabled =
    disabled || loading ? "opacity-70 cursor-not-allowed" : "hover:shadow-lg";

  // Combine classes, keep it readable and Tailwind-friendly
  const classes =
    `${base} ${sizeCls} ${widthCls} ${gradient} ${className}`.trim();

  return (
    <button
      onClick={onClick}
      type="button"
      className={classes}
      aria-busy={loading}
      aria-disabled={disabled || loading}
      disabled={disabled || loading}
      {...rest}
    >
      {/* subtle inner glass effect for non-ghost buttons */}
      {!isGhost && (
        <span
          className="absolute inset-0 -z-10 rounded-2xl blur-xl opacity-30"
          aria-hidden
        />
      )}

      {/* Left icon slot */}
      {leftIcon && (
        <span className="flex items-center" aria-hidden>
          {leftIcon}
        </span>
      )}

      {/* Content & loading spinner */}
      <span className="relative flex items-center">
        {loading ? (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        ) : (
          children
        )}
      </span>

      {/* Right icon slot */}
      {rightIcon && (
        <span className="flex items-center" aria-hidden>
          {rightIcon}
        </span>
      )}
    </button>
  );
}
