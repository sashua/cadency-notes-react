import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import sprite from "../assets/icons.svg";
import { IconName } from "../interfaces";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary";
  icon: IconName;
}

export function Button({
  className,
  variant = "secondary",
  icon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "group flex items-center gap-1.5 pr-2 pl-1 py-1 rounded-md border-current text-slate-500 hover:text-slate-600 active:text-slate-500 transition-colors",
        {
          "border-2": variant === "primary",
          border: variant === "secondary",
        },
        className
      )}
      {...props}
    >
      <svg className="w-6 h-6 transition group-hover:scale-105 group-active:scale-100">
        <use href={sprite + "#" + icon}></use>
      </svg>
      <span className="font-semibold">{children}</span>
    </button>
  );
}
