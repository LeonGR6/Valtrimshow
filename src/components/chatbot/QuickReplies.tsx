import { motion } from "framer-motion";
import type { Faq } from "@/db/faqs";
import type { Lang } from "@/data/content";

interface Props {
  faqs: Faq[];
  lang: Lang;
  onSelect: (faq: Faq) => void;
}

export function QuickReplies({ faqs, lang, onSelect }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      className="flex flex-wrap gap-2"
    >
      {faqs.map((f) => (
        <button
          key={f.id}
          onClick={() => onSelect(f)}
          className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-white/15 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white dark:hover:text-slate-900"
        >
          {f.question[lang]}
        </button>
      ))}
    </motion.div>
  );
}
