import type { ReactNode, MouseEventHandler } from "react";

interface Props {
  href: string;
  children: ReactNode;
  dark?: boolean;
  outline?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function ButtonLink({ href, children, dark = false, outline = false, className = "", onClick }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]";
  const style = outline
    ? dark
      ? "border border-white/15 bg-white/5 text-white hover:bg-white/10"
      : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
    : dark
      ? "bg-white text-[#0f172a] hover:bg-slate-100"
      : "bg-[#0f172a] text-white hover:bg-slate-800";

  return (
    <a href={href} onClick={onClick} className={`${base} ${style} ${className}`}>
      {children}
    </a>
  );
}
