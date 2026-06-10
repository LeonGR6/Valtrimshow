import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/section-card";
import { contactEmail } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export function Contact() {
  const [sent, setSent] = useState(false);
  const { t } = useI18n();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const company = String(data.get("company") || "");
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const projectType = String(data.get("projectType") || "");
    const details = String(data.get("details") || "");

    const subject = `[Contacto] ${projectType || "Nuevo mensaje"} — ${company || name}`;
    const body = [
      `Empresa: ${company}`,
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Teléfono: ${phone}`,
      `Tipo de proyecto: ${projectType}`,
      "",
      "Detalles:",
      details,
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const inputCls =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#020617] placeholder:text-[#94a3b8] transition focus:border-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0f172a]/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-white/40 dark:focus:border-white/30 dark:focus:ring-white/10";

  return (
    <section
      id="contact"
      className="bg-white transition-colors duration-300 dark:bg-[#0f172a]"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="space-y-8">
            <SectionTitle
              eyebrow={t.contact.eyebrow}
              title={t.contact.title}
              description={t.contact.description}
            />

            <div className="grid gap-4">
              <Card>
                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-[#0f172a] dark:text-white/80" />
                    <div>
                      <div className="font-semibold text-[#020617] dark:text-white">
                        {t.contact.areaTitle}
                      </div>
                      <div className="mt-2 text-sm leading-8 text-[#475569] dark:text-white/70">
                        {t.contact.areaLine1}
                        <br />
                        {t.contact.areaLine2}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <div className="p-6">
                    <div className="flex items-start gap-3">
                      <Phone className="mt-1 h-5 w-5 text-[#0f172a] dark:text-white/80" />
                      <div>
                        <div className="font-semibold text-[#020617] dark:text-white">
                          {t.contact.phoneTitle}
                        </div>
                        <div className="mt-2 text-sm leading-8 text-[#475569] dark:text-white/70">
                          {t.contact.phoneText}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <a href={`mailto:${contactEmail}`} className="block">
                  <Card>
                    <div className="p-6">
                      <div className="flex items-start gap-3">
                        <Mail className="mt-1 h-5 w-5 text-[#0f172a] dark:text-white/80" />
                        <div>
                          <div className="font-semibold text-[#020617] dark:text-white">
                            {t.contact.emailTitle}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl transition-colors duration-300 sm:p-10 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <div className="mb-8">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#475569] dark:text-white/60">
                {t.contact.formEyebrow}
              </div>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#020617] sm:text-4xl dark:text-white">
                {t.contact.formTitle}
              </h3>
              <p className="mt-3 text-sm leading-8 text-[#475569] dark:text-white/70">
                {t.contact.formText}
              </p>
            </div>

            {sent ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-sm text-emerald-900 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-200">
                {t.contact.fields.sent}
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
                <input name="company" className={inputCls} placeholder={t.contact.fields.company} required />
                <input name="name" className={inputCls} placeholder={t.contact.fields.name} required />
                <input name="email" type="email" className={inputCls} placeholder={t.contact.fields.email} required />
                <input name="phone" className={inputCls} placeholder={t.contact.fields.phone} />
                <input name="projectType" className={inputCls} placeholder={t.contact.fields.projectType} />
                <textarea
                  name="details"
                  className={`${inputCls} sm:col-span-2`}
                  placeholder={t.contact.fields.details}
                  rows={5}
                />
                <button
                  type="submit"
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f172a] px-6 py-4 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg dark:bg-white dark:text-[#0f172a] dark:hover:bg-slate-100"
                >
                  {t.contact.fields.submit} <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
