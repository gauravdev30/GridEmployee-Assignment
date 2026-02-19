import React from "react";

type ActionButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const ActionButton = ({
  children,
  variant = "secondary",
  onClick,
  className = "",
  type = "button",
}: ActionButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        w-10 h-10 flex items-center justify-center rounded-xl border transition duration-200
        ${
          variant === "primary"
            ? "bg-primary text-white border-primary hover:opacity-90"
            : "bg-white border-gray-200 text-gray-600 hover:bg-gray-100"
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default ActionButton;
