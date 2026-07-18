import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useI18n } from "@/lib/i18n";

export function Suppliers() {
  const { t } = useI18n();
  return (
    <section
      id="suppliers"
      className="bg-white transition-colors duration-300 dark:bg-[#0f172a]"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={t.suppliers.eyebrow}
          title={t.suppliers.title}
          description={t.suppliers.description}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.suppliers.items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-full border border-slate-200 bg-[#f5f1ea] px-6 py-4 text-sm font-medium text-[#020617] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0f172a]/30 hover:shadow-md dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:border-white/25"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
