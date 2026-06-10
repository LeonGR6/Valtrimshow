import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { useI18n } from "@/lib/i18n";

function Counter({ to, suffix }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) {
      setVal(0);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);


  return (
    <span ref={ref}>
      {val}
      {suffix ?? ""}
    </span>
  );
}

export function Stats() {
  const { t } = useI18n();
  return (
    <section className="bg-[#f5f1ea] transition-colors duration-300 dark:bg-[#0b1220]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          {t.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-semibold tracking-tight text-[#020617] transition-colors sm:text-6xl dark:text-white">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#475569] transition-colors dark:text-white/60">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
