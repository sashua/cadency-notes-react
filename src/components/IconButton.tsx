import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import sprite from "../assets/icons.svg";
import { IconName } from "../interfaces";

interface IconButtonProps extends ComponentPropsWithoutRef<"button"> {
  icon: IconName;
}

export function IconButton({ className, icon, ...props }: IconButtonProps) {
  return (
    <button
      className={clsx(
        "block w-8 h-8 p-0.5 transition-transform hover:scale-110 active:scale-105",
        className
      )}
      {...props}
    >
      <svg>
        <use href={sprite + "#" + icon}></use>
      </svg>
    </button>
  );
}
