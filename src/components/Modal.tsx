import clsx from "clsx";
import { IconButton } from ".";

interface ModalProps {
  className?: string;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export function Modal({ className, title, children, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-start justify-center px-4 py-10 group bg-black/25">
      <div className={clsx("p-8 bg-white rounded-lg top-20", className)}>
        <div className="flex items-center justify-between gap-4 mb-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <IconButton icon="icon-close" onClick={onClose} />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
