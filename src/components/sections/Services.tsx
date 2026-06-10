import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/section-card";
import { serviceIcons } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export function Services() {
  const { t } = useI18n();
  return (
    <section
      id="services"
      className="bg-[#f5f1ea] transition-colors duration-300 dark:bg-[#0b1220]"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {t.services.items.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="h-full">
                  <div className="p-7">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f172a] text-white transition-transform duration-300 group-hover:scale-105 dark:bg-white/10">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[#020617] dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-8 text-[#475569] dark:text-white/70">
                      {service.text}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
