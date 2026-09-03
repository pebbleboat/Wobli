import clsx from "clsx";
import { ComponentProps, FC, PropsWithChildren } from "react";

export interface ICardWrapper extends ComponentProps<"div"> {
  variant?: "default" | "interactive" | "flat" | "gradient";
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const variantClasses = {
  default:
    "rounded-3xl bg-surface-container-lowest p-4 sm:p-5 shadow-[0_8px_24px_-4px_rgba(30,41,59,0.06)] border border-surface-container-low transition-all duration-300",
  interactive:
    "rounded-3xl bg-surface-container-lowest p-4 sm:p-5 shadow-[0_8px_24px_-4px_rgba(30,41,59,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(182,0,88,0.16)] hover:-translate-y-1.5 transition-all duration-300 ease-out border border-surface-container-low group",
  flat: "rounded-2xl bg-surface-container-low p-4 sm:p-5 border border-surface-container-high/40 transition-colors duration-200",
  gradient:
    "rounded-3xl bg-gradient-to-r from-primary-fixed via-surface-container-high to-secondary-fixed p-6 lg:p-10 shadow-[0_12px_32px_rgba(182,0,88,0.08)] border border-primary-fixed/40 transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(182,0,88,0.14)]",
};

const CardWrapper: FC<PropsWithChildren<ICardWrapper>> = ({
  children,
  variant = "default",
  className,
  onClick,
  style,
  ...props
}) => {
  return (
    <div
      className={clsx(
        variantClasses[variant],
        onClick && "cursor-pointer active:scale-[0.99]",
        className
      )}
      style={style}
      role={onClick ? "button" : undefined}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
