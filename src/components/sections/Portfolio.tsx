import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { portfolioImages } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export function Portfolio() {
  const { t } = useI18n();
  return (
    <section
      id="portfolio"
      className="bg-white transition-colors duration-300 dark:bg-[#0f172a]"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={t.portfolio.eyebrow}
          title={t.portfolio.title}
          description={t.portfolio.description}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.portfolio.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.04]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={portfolioImages[i]}
                  alt={item.title}
                  loading="lazy"
                  className="h-[260px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[320px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent transition-opacity duration-300 group-hover:from-black/85" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="text-2xl font-semibold tracking-tight text-white">{item.title}</div>
                  <div className="mt-2 text-sm leading-7 text-white/80">{item.subtitle}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
