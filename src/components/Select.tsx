import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  options: { text: string; value: string | number }[];
}

export function Select({
  className,
  options,
  placeholder,
  ...props
}: SelectProps) {
  return (
    <label className={clsx("relative block", className)}>
      <select
        className="w-full px-4 py-3 leading-none transition-colors border-2 rounded-md outline-none peer border-slate-400 focus:border-slate-600"
        {...props}
      >
        {options.map(({ text, value }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
      <span className="absolute top-0 px-1 text-sm transition-colors -translate-y-1/2 bg-white left-4 text-slate-400 peer-focus:text-slate-600">
        {placeholder}
      </span>
    </label>
  );
}
