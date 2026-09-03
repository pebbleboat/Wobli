import clsx from "clsx";
import React, { ReactNode } from "react";
import Loader from "../Loader";

export interface IButton {
  variant?:
    | "primary"
    | "secondary"
    | "secondary-color"
    | "pastel-primary"
    | "pastel-surface"
    | "tertiary"
    | "tertiary-color"
    | "tertiary-link"
    | "tertiary-color-link"
    | "ghost"
    | "white"
    | "stepper"
    | "error";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  fullWidth?: boolean;
  isLoading?: boolean;
  btnName?: string;
  className?: string;
  onClick?: (
    e?: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
  ) => void;
  icon?: ReactNode;
  secondaryIcon?: ReactNode;
  children?: ReactNode;
  type?: "button" | "submit";
  form?: string;
  styleBtnName?: string;
  font?: "sans" | "display";
}

const Button = ({
  variant = "primary",
  size = "md",
  icon,
  btnName,
  onClick,
  disabled,
  fullWidth,
  className,
  secondaryIcon,
  isLoading,
  type = "button",
  form,
  styleBtnName,
  children,
  font = "sans",
}: IButton) => {
  const variantClasses = {
    primary: disabled
      ? "bg-gray-100 text-gray-400 !cursor-not-allowed border border-gray-200 rounded-full"
      : "bg-primary text-on-primary shadow-[0_3px_10px_rgba(182,0,88,0.2)] hover:bg-primary-container hover:shadow-[0_4px_14px_rgba(182,0,88,0.25)] active:translate-y-0.5 rounded-full",
    secondary: disabled
      ? "bg-gray-100 text-gray-400 !cursor-not-allowed rounded-full"
      : "bg-secondary-fixed text-on-secondary-fixed shadow-[0_3px_10px_rgba(255,186,32,0.25)] hover:bg-secondary-fixed-dim active:translate-y-0.5 rounded-full",
    "secondary-color": disabled
      ? "bg-white text-gray-400 !cursor-not-allowed border border-gray-200 rounded-full"
      : "text-primary border border-primary/30 bg-primary-fixed hover:bg-primary-fixed-dim rounded-full",
    "pastel-primary": disabled
      ? "bg-gray-100 text-gray-400 !cursor-not-allowed rounded-full"
      : "bg-primary-fixed text-on-primary-fixed-variant hover:bg-primary hover:text-on-primary active:scale-95 rounded-full shadow-xs",
    "pastel-surface": disabled
      ? "bg-gray-100 text-gray-400 !cursor-not-allowed rounded-full"
      : "bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-full",
    tertiary: disabled
      ? "text-gray-400 !cursor-not-allowed rounded-full"
      : "text-on-surface-variant hover:bg-surface-container rounded-full",
    "tertiary-color": disabled
      ? "text-gray-400 !cursor-not-allowed rounded-full"
      : "text-primary hover:bg-primary-fixed/50 rounded-full",
    "tertiary-link": disabled
      ? "text-gray-400 !cursor-not-allowed"
      : "text-on-surface-variant hover:text-primary",
    "tertiary-color-link": disabled
      ? "text-gray-400 !cursor-not-allowed"
      : "text-primary hover:underline !p-0",
    ghost: disabled
      ? "text-gray-400 !cursor-not-allowed rounded-full"
      : "bg-surface-container hover:bg-surface-container-high text-on-surface rounded-full shadow-sm",
    white: disabled
      ? "bg-white text-gray-400 !cursor-not-allowed border border-gray-200 rounded-full"
      : "bg-surface-container-lowest text-on-surface hover:bg-surface-container rounded-full border border-surface-container-high/60 shadow-sm",
    stepper: disabled
      ? "bg-gray-100 text-gray-300 !cursor-not-allowed rounded-full"
      : "w-7 h-7 !p-0 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface hover:bg-primary-fixed hover:text-on-primary-fixed-variant transition-colors",
    error: disabled
      ? "bg-gray-100 text-gray-400 !cursor-not-allowed border border-gray-200 rounded-full"
      : "bg-red-600 hover:bg-red-700 text-white rounded-full",
  };

  const sizeClasses = {
    xs: "py-1.5 px-3 text-xs leading-none gap-x-1",
    sm: "py-2 px-3.5 text-xs font-bold leading-normal gap-x-1.5",
    md: "py-2.5 px-5 text-sm font-bold leading-normal gap-x-2",
    lg: "py-3.5 px-7 text-base font-bold leading-normal gap-x-2",
    xl: "py-4 px-8 text-lg font-bold leading-normal gap-x-2.5",
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!disabled && !isLoading && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center cursor-pointer transition-all duration-200 ease-out relative select-none",
        "active:scale-[0.97]",
        font === "display" ? "font-display" : "font-sans",
        variantClasses[variant],
        variant !== "stepper" && sizeClasses[size],
        {
          "!w-full justify-center": fullWidth,
          "[&>*]:opacity-0": isLoading,
        },
        className
      )}
      {...(form ? { form } : {})}
      type={type}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      {isLoading && <Loader wrapperClass="!opacity-100 absolute" />}
      {icon && <span className="transition-transform duration-200 group-hover:scale-110">{icon}</span>}
      {btnName && (
        <span className={clsx("whitespace-nowrap", styleBtnName)}>{btnName}</span>
      )}
      {secondaryIcon && <span className="transition-transform duration-200 group-hover:translate-x-0.5">{secondaryIcon}</span>}
      {children}
    </button>
  );
};

export default Button;
