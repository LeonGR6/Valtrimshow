import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { useI18n } from "@/lib/i18n";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="home" className="relative overflow-hidden bg-[#0f172a]">
      <img
        src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=70"
        alt="Modern finish carpentry interior"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-[#0f172a]/70" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div
            variants={item}
            className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/75"
          >
            {t.hero.eyebrow}
          </motion.div>
          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            {t.hero.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#portfolio" dark className="text-base">
              {t.hero.viewWork} <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="#contact" dark outline className="text-base">
              {t.hero.contactCta}
            </ButtonLink>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ y: -6 }}
          className="rounded-[28px] border border-white/10 bg-white/95 p-7 shadow-2xl transition-shadow duration-300 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]"
        >
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            {t.hero.snapshotEyebrow}
          </div>
          <div className="mt-2 text-3xl font-semibold tracking-tight text-[#020617]">
            {t.hero.snapshotTitle}
          </div>
          <div className="mt-6 space-y-4">
            {t.hero.highlights.map((h) => (
              <div
                key={h}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-sm leading-7 text-slate-600">{h}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
