import { ComponentProps, ReactNode } from "react";
import clsx from "clsx";

export interface TextProps extends ComponentProps<"p"> {
  children?: ReactNode;
  className?: string;
  as?: React.ElementType;
  font?: "sans" | "display";
  size?:
    | "5xl"
    | "4xl"
    | "3xl"
    | "2xl"
    | "xl"
    | "lg"
    | "base"
    | "sm"
    | "xs"
    | "xxs";
  type?: "normal" | "medium" | "semibold" | "bold";
  variant?:
    | "primary"
    | "brand"
    | "secondary"
    | "tertiary"
    | "amber"
    | "white"
    | "white-muted"
    | "outline"
    | string;
}

const sizeClasses = {
  "5xl": "text-4xl sm:text-5xl lg:text-[52px] leading-tight lg:leading-[60px]",
  "4xl": "text-3xl sm:text-4xl lg:text-[40px] leading-tight",
  "3xl": "text-2xl sm:text-3xl leading-snug",
  "2xl": "text-xl sm:text-2xl leading-snug",
  xl: "text-lg sm:text-xl leading-normal",
  lg: "text-base sm:text-lg leading-relaxed",
  base: "text-sm sm:text-base leading-normal",
  sm: "text-xs sm:text-sm leading-normal",
  xs: "text-xs leading-normal",
  xxs: "text-[10px] leading-tight",
};

const typeClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const fontClasses = {
  sans: "font-sans",
  display: "font-display",
};

const variantClasses: Record<string, string> = {
  primary: "text-on-surface",
  brand: "text-primary",
  secondary: "text-on-surface-variant",
  tertiary: "text-tertiary",
  amber: "text-secondary",
  white: "text-white",
  "white-muted": "text-white/90",
  outline: "text-outline",
};

const Text = ({
  children,
  className,
  as: Component = "div",
  font = "sans",
  size = "base",
  variant = "primary",
  type = "normal",
  ...props
}: TextProps) => {
  return (
    <Component
      className={clsx(
        fontClasses[font],
        sizeClasses[size],
        typeClasses[type],
        variantClasses[variant] ?? variant,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
