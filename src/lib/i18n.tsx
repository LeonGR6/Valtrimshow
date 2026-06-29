import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Dict, type Lang } from "@/data/content";

interface Ctx {
  lang: Lang;
  t: Dict;
}

const I18nContext = createContext<Ctx>({
  lang: "en",
  t: translations.en,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang] = useState<Lang>("en");

  useEffect(() => {
    try {
      if (typeof document !== "undefined") document.documentElement.lang = "en";
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <I18nContext.Provider value={{ lang, t: translations.en }}>{children}</I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
