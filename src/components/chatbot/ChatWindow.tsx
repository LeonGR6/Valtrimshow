import { useEffect, useRef, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import {
  companyInitials,
  companyName,
  faqs,
  fallbackResponse,
  inputPlaceholder,
  welcomeMessage,
  widgetLabels,
  type Faq,
} from "@/db/faqs";
import { ChatMessage, type ChatMsg } from "./ChatMessage";
import { TypingIndicator } from "./TypingIndicator";
import { QuickReplies } from "./QuickReplies";

export function ChatWindow({ onClose }: { onClose: () => void }) {
  const { lang } = useI18n();
  const [messages, setMessages] = useState<ChatMsg[]>([
    { id: "welcome", from: "bot", text: welcomeMessage[lang], time: widgetLabels.justNow[lang] },
  ]);
  const [typing, setTyping] = useState(false);
  const [showReplies, setShowReplies] = useState(true);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const respond = (text: string) => {
    setShowReplies(false);
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((m) => [
        ...m,
        {
          id: `bot-${Date.now()}`,
          from: "bot",
          text,
          time: widgetLabels.justNow[lang],
        },
      ]);
      setShowReplies(true);
    }, 1200);
  };

  const handleFaq = (faq: Faq) => {
    setMessages((m) => [
      ...m,
      {
        id: `u-${Date.now()}`,
        from: "user",
        text: faq.question[lang],
        time: widgetLabels.justNow[lang],
      },
    ]);
    respond(faq.answer[lang]);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [
      ...m,
      { id: `u-${Date.now()}`, from: "user", text, time: widgetLabels.justNow[lang] },
    ]);
    setInput("");
    const match = faqs.find((f) =>
      f.question[lang].toLowerCase().includes(text.toLowerCase().slice(0, 6)),
    );
    respond(match ? match.answer[lang] : fallbackResponse[lang]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 24, scale: 0.96 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed bottom-24 right-4 z-[60] flex w-[90vw] max-w-sm flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#0f172a] sm:right-6"
      style={{ height: "min(560px, 80vh)" }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 bg-[#0f172a] px-4 py-3 text-white">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-semibold">
          {companyInitials}
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold">{companyName}</div>
          <div className="flex items-center gap-1.5 text-[11px] text-white/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {widgetLabels.online[lang]}
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label={widgetLabels.close[lang]}
          className="rounded-lg p-1.5 text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Body */}
      <div
        ref={scrollRef}
        className="flex-1 space-y-3 overflow-y-auto bg-slate-50 px-4 py-4 dark:bg-[#0b1220]"
      >
        {messages.map((m) => (
          <ChatMessage key={m.id} msg={m} />
        ))}
        {typing && (
          <div className="flex items-end gap-2">
            <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-slate-900 text-[10px] font-semibold text-white dark:bg-white dark:text-slate-900">
              {companyInitials}
            </div>
            <TypingIndicator />
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 bg-white px-3 py-3 dark:border-white/10 dark:bg-[#0f172a]">
        <AnimatePresence>
          {showReplies && !typing && (
            <div className="mb-3">
              <QuickReplies faqs={faqs} lang={lang} onSelect={handleFaq} />
            </div>
          )}
        </AnimatePresence>
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={inputPlaceholder[lang]}
            className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-800 outline-none transition focus:border-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white/40"
          />
          <button
            type="submit"
            aria-label={widgetLabels.send[lang]}
            className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-white/90"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </motion.div>
  );
}
