import React, { ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { backdrop, modal } from "../utils/uiHelper";

interface AnimatedModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  widthFitContainer?: boolean;
  showCrossIcon?: boolean;
  className?: string;
  customWidth?: string;
}

export const AnimatedModal = ({
  isOpen,
  onClose,
  children,
  widthFitContainer = false,
  showCrossIcon = true,
  className,
  customWidth = "",
}: AnimatedModalProps) => {
  useEffect(() => {
    const handleEsc = (e: any) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/30 overflow-hidden backdrop-blur-sm z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdrop}
          onClick={onClose}
        >
          <motion.div
            className={`${className} border border-[#88888850] absolute top-1/2 left-1/2 bg-[#282A2E] dark:bg-[#101213] rounded-2xl shadow-xl p-6 ${
              customWidth
                ? customWidth
                : widthFitContainer
                ? "w-full md:w-fit"
                : "w-full lg:w-[80%]"
            }`}
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {showCrossIcon && (
              <button
                type="button"
                onClick={onClose}
                className="absolute cursor-pointer top-3 right-3 text-gray-500 dark:hover:text-white hover:text-white"
              >
                ✕
              </button>
            )}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
