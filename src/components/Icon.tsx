import clsx from "clsx";
import sprite from "../assets/icons.svg";
import { IconName } from "../interfaces";

interface IconProps {
  className?: string;
  icon: IconName;
  variant?: "light" | "dark";
}

export function Icon({ className, icon, variant = "dark" }: IconProps) {
  return (
    <div
      className={clsx(
        "inline-block w-10 h-10 p-2 rounded-full",
        {
          "text-slate-600 rounded-full bg-white": variant === "light",
          "text-white rounded-full bg-slate-500": variant === "dark",
        },
        className
      )}
    >
      <svg>
        <use href={sprite + "#" + icon}></use>
      </svg>
    </div>
  );
}
