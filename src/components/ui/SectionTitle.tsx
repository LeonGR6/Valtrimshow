import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
}

export function SectionTitle({ eyebrow, title, description, dark = false, align = "left" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl space-y-4 ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div
        className={
          "inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors " +
          (dark
            ? "border-white/15 bg-white/10 text-white/75"
            : "border-slate-200 bg-white text-slate-500 dark:border-white/15 dark:bg-white/10 dark:text-white/75")
        }
      >
        {eyebrow}
      </div>
      <h2
        className={
          "text-3xl font-semibold tracking-tight sm:text-4xl transition-colors " +
          (dark ? "text-[#f1f5f9]" : "text-[#020617] dark:text-[#f1f5f9]")
        }
      >
        {title}
      </h2>
      {description && (
        <p
          className={
            "text-base leading-8 sm:text-lg transition-colors " +
            (dark ? "text-white/60" : "text-[#475569] dark:text-white/60")
          }
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
