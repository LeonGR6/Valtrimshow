import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/section-card";
import { useI18n } from "@/lib/i18n";

export function Testimonials() {
  const { t } = useI18n();
  return (
    <section className="bg-[#f5f1ea] transition-colors duration-300 dark:bg-[#0b1220]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          description={t.testimonials.description}
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
          {t.testimonials.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full">
                <div className="flex h-full flex-col p-7">
                  <div className="text-4xl leading-none text-[#0f172a]/30 dark:text-white/30">
                    &ldquo;
                  </div>
                  <p className="mt-3 flex-1 text-base leading-8 text-[#475569] dark:text-white/75">
                    {item.quote}
                  </p>
                  <div className="mt-6 border-t border-slate-200 pt-4 dark:border-white/10">
                    <div className="font-semibold text-[#020617] dark:text-white">{item.name}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[#94a3b8] dark:text-white/50">
                      {item.role}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
