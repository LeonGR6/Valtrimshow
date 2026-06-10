import { motion } from "framer-motion";
import { companyInitials } from "@/db/faqs";

export interface ChatMsg {
  id: string;
  from: "user" | "bot";
  text: string;
  time?: string;
}

export function ChatMessage({ msg }: { msg: ChatMsg }) {
  const isUser = msg.from === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex items-end gap-2 ${isUser ? "justify-end" : "justify-start"}`}
    >
      {!isUser && (
        <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-slate-900 text-[10px] font-semibold text-white dark:bg-white dark:text-slate-900">
          {companyInitials}
        </div>
      )}
      <div className={`flex max-w-[78%] flex-col ${isUser ? "items-end" : "items-start"}`}>
        <div
          className={
            isUser
              ? "rounded-2xl rounded-br-sm bg-slate-900 px-4 py-2.5 text-sm text-white dark:bg-white dark:text-slate-900"
              : "rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-2.5 text-sm text-slate-800 dark:bg-white/10 dark:text-white"
          }
        >
          {msg.text}
        </div>
        {msg.time && (
          <span className="mt-1 px-1 text-[10px] text-slate-400 dark:text-white/40">
            {msg.time}
          </span>
        )}
      </div>
    </motion.div>
  );
}
