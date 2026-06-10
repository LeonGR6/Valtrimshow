import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { widgetLabels } from "@/db/faqs";
import { ChatWindow } from "./ChatWindow";

export function ChatWidget() {
  const { lang } = useI18n();
  const [open, setOpen] = useState(false);
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setBounce(true), 2000);
    const t2 = window.setTimeout(() => setBounce(false), 3200);
    return () => {
      window.clearTimeout(t);
      window.clearTimeout(t2);
    };
  }, []);

  return (
    <>
      <AnimatePresence>{open && <ChatWindow onClose={() => setOpen(false)} />}</AnimatePresence>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={
          bounce
            ? { scale: 1, opacity: 1, y: [0, -10, 0, -5, 0] }
            : { scale: 1, opacity: 1, y: 0 }
        }
        transition={
          bounce
            ? { duration: 0.9, ease: "easeOut" }
            : { type: "spring", stiffness: 260, damping: 18 }
        }
        className="fixed bottom-5 right-4 z-[55] sm:bottom-6 sm:right-6"
      >
        <div className="group relative">
          {/* Tooltip */}
          {!open && (
            <div className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition group-hover:opacity-100 dark:bg-white dark:text-slate-900">
              {widgetLabels.tooltip[lang]}
            </div>
          )}

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? widgetLabels.close[lang] : widgetLabels.open[lang]}
            className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0f172a] text-white shadow-xl ring-1 ring-white/10 transition hover:scale-105 hover:bg-[#1e293b] dark:bg-white dark:text-slate-900 dark:hover:bg-white/90"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="msg"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <MessageCircle className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>

            {!open && (
              <span className="absolute right-1 top-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-[#0f172a] dark:ring-white" />
              </span>
            )}
          </button>
        </div>
      </motion.div>
    </>
  );
}
