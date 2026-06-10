import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useI18n } from "@/lib/i18n";

export function WhyUs() {
  const { t } = useI18n();
  return (
    <section className="bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={t.whyus.eyebrow}
          title={t.whyus.title}
          description={t.whyus.description}
          dark
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {t.whyus.reasons.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-[24px] border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-lg"
            >
              <div className="flex gap-3">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: i * 0.08 + 0.15 }}
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#34d399]" />
                </motion.div>
                <p className="text-sm leading-8 text-white/85">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
