import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { contactEmail } from "@/data/content";
import { useI18n } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/ButtonLink";
import logo from "@/assets/logo.png";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const closeMenu = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 border-b border-white/10 backdrop-blur"
      style={{ backgroundColor: "rgba(15,23,42,0.90)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
          <img
            src={logo}
            alt="ValTrim Inc."
            className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
            style={{
              filter:
                "drop-shadow(0 2px 6px rgba(255,255,255,0.35)) drop-shadow(0 1px 2px rgba(0,0,0,0.4))",
            }}
          />
          <span className="hidden text-lg font-semibold tracking-wide text-white sm:inline">
            ValTrim Inc.
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {t.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <ButtonLink href="#contact" dark onClick={closeMenu}>
              {t.nav.contactCta}
            </ButtonLink>
          </div>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.nav.menu}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            id="mobile-navigation"
            className="absolute left-0 right-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/10 bg-[#0f172a] lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-3 px-4 py-4 sm:px-6">
              {t.nav.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/85"
                >
                  {item.label}
                </a>
              ))}
              <ButtonLink href={`mailto:${contactEmail}`} dark onClick={() => setOpen(false)}>
                {t.nav.tapEmail}
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
