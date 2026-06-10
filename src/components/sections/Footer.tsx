import { contactEmail } from "@/data/content";
import { useI18n } from "@/lib/i18n";
import logo from "@/assets/logo.png";



export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useI18n();
  return (
    <footer className="bg-[#0b1220] text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="ValTrim Inc."
                className="h-16 w-16 shrink-0 object-contain"
                style={{ filter: "drop-shadow(0 2px 6px rgba(255,255,255,0.35)) drop-shadow(0 1px 2px rgba(0,0,0,0.4))" }}
              />
              <div className="text-lg font-semibold text-white">ValTrim Inc.</div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7">{t.footer.tagline}</p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
              {t.footer.navigate}
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {t.nav.items.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
              {t.footer.contact}
            </div>
            <div className="mt-4 text-sm leading-7">
              {t.contact.areaLine1}
              <br />
              <a href={`mailto:${contactEmail}`} className="transition-colors hover:text-white">
                {t.contact.emailTitle}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <div>© {year} ValTrim Inc. {t.footer.rights}</div>
          <div>{t.footer.descriptor}</div>
        </div>
      </div>
    </footer>
  );
}
