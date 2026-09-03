import clsx from "clsx";
import { ReactNode } from "react";

export interface IChip {
  title?: ReactNode;
  children?: ReactNode;
  icon?: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "surface"
    | "surface-variant"
    | "glass"
    | "glass-primary"
    | "glass-secondary"
    | "glass-tertiary"
    | "brand-badge";
  size?: "xs" | "sm" | "md" | "lg";
  font?: "sans" | "display";
  className?: string;
  onClick?: () => void;
}

const variantClasses = {
  primary: "bg-primary-fixed text-on-primary-fixed-variant",
  secondary: "bg-secondary-fixed text-on-secondary-fixed",
  tertiary: "bg-tertiary-fixed text-on-tertiary-fixed",
  surface: "bg-surface-container text-on-surface",
  "surface-variant": "bg-surface-variant text-on-surface",
  glass: "bg-surface-container-lowest/90 text-on-surface backdrop-blur-md shadow-sm",
  "glass-primary": "bg-surface-container-lowest/90 text-primary backdrop-blur-md shadow-sm",
  "glass-secondary": "bg-surface-container-lowest/90 text-secondary backdrop-blur-md shadow-sm",
  "glass-tertiary": "bg-surface-container-lowest/90 text-tertiary backdrop-blur-md shadow-sm",
  "brand-badge": "bg-primary-fixed text-primary shadow-xs",
};

const sizeClasses = {
  xs: "px-2.5 py-0.5 text-[10px]",
  sm: "px-3 py-1 text-xs",
  md: "px-3.5 py-1 text-xs",
  lg: "px-4 py-1.5 text-sm",
};

const Chip = ({
  title,
  children,
  icon,
  variant = "primary",
  size = "sm",
  font = "display",
  className,
  onClick,
}: IChip) => {
  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full font-bold uppercase tracking-wider select-none shrink-0",
        font === "display" ? "font-display" : "font-sans",
        variantClasses[variant],
        sizeClasses[size],
        onClick && "cursor-pointer active:scale-95 transition-transform",
        className
      )}
    >
      {icon}
      {title}
      {children}
    </div>
  );
};

export default Chip;
