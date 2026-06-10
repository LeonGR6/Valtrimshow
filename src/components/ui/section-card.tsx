import type { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
  interactive?: boolean;
}

export function Card({ className = "", children, interactive = true }: Props) {
  const hover = interactive
    ? "hover:-translate-y-1 hover:shadow-xl hover:border-slate-300 dark:hover:border-white/20"
    : "";
  return (
    <div
      className={`rounded-[24px] border border-slate-200 bg-white shadow-sm transition-all duration-300 ease-out dark:bg-white/[0.04] dark:border-white/10 ${hover} ${className}`}
    >
      {children}
    </div>
  );
}
