import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/section-card";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { t } = useI18n();
  return (
    <section
      id="about"
      className="bg-white transition-colors duration-300 dark:bg-[#0f172a]"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-8">
            <SectionTitle
              eyebrow={t.about.eyebrow}
              title={t.about.title}
              description={t.about.description}
            />
            <ButtonLink href="#contact">
              {t.about.cta} <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {t.about.cards.map((c, i) => (
              <Card key={i} className={i === 2 ? "sm:col-span-2" : ""}>
                <div className="p-6">
                  <div className="text-xl font-semibold tracking-tight text-[#020617] dark:text-white">
                    {c.title}
                  </div>
                  <p className="mt-3 leading-7 text-[#475569] dark:text-white/70 text-sm">
                    {c.text}
                  </p>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
