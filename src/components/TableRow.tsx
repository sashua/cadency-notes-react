import clsx from "clsx";
import { IconButton } from ".";
import { IconName } from "../interfaces";
import { Icon } from "./Icon";

export interface TableRowProps {
  className?: string;
  variant?: "head" | "body";
  icon?: IconName;
  data: (string | number | undefined)[];
  actions?: {
    icon: IconName;
    onClick: () => void;
  }[];
}

export function TableRow({
  className,
  variant = "body",
  icon,
  data,
  actions,
}: TableRowProps) {
  return (
    <div
      className={clsx(
        "flex items-center gap-1 p-2 rounded-md",
        {
          "text-white bg-slate-600": variant === "head",
          "text-slate-600 bg-slate-200": variant === "body",
        },
        className
      )}
    >
      <div className="flex justify-center w-1/12">
        {icon && (
          <Icon icon={icon} variant={variant === "body" ? "dark" : "light"} />
        )}
      </div>

      {data.map((content, i) => (
        <p key={i} className="basis-1/12 grow line-clamp-1">
          {content}
        </p>
      ))}

      {actions && (
        <div className="flex justify-end w-1/12">
          {actions.map(({ icon, onClick }) => (
            <IconButton icon={icon} onClick={onClick} />
          ))}
        </div>
      )}
    </div>
  );
}
