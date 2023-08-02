import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

interface TextAreaProps extends ComponentPropsWithoutRef<"textarea"> {}

export function TextArea({ className, placeholder, ...props }: TextAreaProps) {
  return (
    <label className={clsx("relative block", className)}>
      <textarea
        className="w-full px-4 py-4 leading-tight transition-colors border-2 rounded-md outline-none resize-none peer border-slate-400 focus:border-slate-600"
        placeholder=" "
        {...props}
      ></textarea>
      <span className="absolute top-0 px-1 text-sm transition-all -translate-y-1/2 bg-white peer-focus:text-sm left-4 text-slate-400 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-slate-600">
        {placeholder}
      </span>
    </label>
  );
}
