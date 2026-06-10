import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { stepIcons } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export function HowWeWork() {
  const { t } = useI18n();
  return (
    <section id="process" className="bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          description={t.process.description}
          dark
        />

        <div className="relative mt-14 grid gap-8 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-white/10 lg:block" />
          {t.process.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl p-1 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#0f172a] text-white transition-all duration-300 group-hover:border-emerald-400/40 group-hover:bg-white/5">
                  <Icon className="h-6 w-6" />
                  <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400 text-[11px] font-bold text-[#0f172a]">
                    {i + 1}
                  </div>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{step.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
