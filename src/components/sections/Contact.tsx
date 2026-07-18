import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Card } from "@/components/ui/section-card";
import { contactEmail } from "@/data/content";
import { useI18n } from "@/lib/i18n";

const projectTypes = ["Residential", "Multifamily", "Light Commercial", "Other"];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [plansAvailable, setPlansAvailable] = useState<"yes" | "no" | "">("");
  const { t } = useI18n();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) || "");

    const name = get("name");
    const company = get("company");
    const email = get("email");
    const phone = get("phone");
    const location = get("location");
    const projectType = get("projectType");
    const scope = get("scope");
    const startDate = get("startDate");
    const plans = plansAvailable || "Not specified";
    const description = get("description");

    const subject = `[Project Inquiry] ${projectType || "New inquiry"} — ${company || name}`;
    const body = [
      "PROJECT INQUIRY",
      "----------------------------------------",
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Project Location: ${location}`,
      `Project Type: ${projectType}`,
      `Scope Needed: ${scope}`,
      `Estimated Start / Bid Due Date: ${startDate}`,
      `Plans / Specs Available: ${plans}`,
      "",
      "Project Description:",
      description,
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const labelCls =
    "flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#475569]";
  const inputCls =
    "w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#020617] placeholder:text-[#94a3b8] transition focus:border-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0f172a]/10";

  return (
    <section id="contact" className="bg-[#f8fafc] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            {t.contact.eyebrow}
          </div>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#020617] sm:text-5xl">
            Connect with our builder support team.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#475569] sm:text-lg">
            {t.contact.description}
          </p>
        </motion.div>

        {/* Contact cards row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14 grid gap-5 sm:grid-cols-3"
        >
          <Card interactive={false} className="h-full">
            <div className="flex h-full items-start gap-4 p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100">
                <MapPin className="h-5 w-5 text-[#0f172a]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#020617]">{t.contact.areaTitle}</div>
                <div className="mt-1.5 text-sm leading-7 text-[#475569]">{t.contact.areaLine1}</div>
              </div>
            </div>
          </Card>

          <Card interactive={false} className="h-full">
            <div className="flex h-full items-start gap-4 p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100">
                <Phone className="h-5 w-5 text-[#0f172a]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#020617]">{t.contact.phoneTitle}</div>
                <div className="mt-1.5 text-sm leading-7 text-[#475569]">{t.contact.phoneText}</div>
              </div>
            </div>
          </Card>

          <a href={`mailto:${contactEmail}`} className="block h-full">
            <Card interactive={false} className="h-full">
              <div className="flex items-start gap-4 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100">
                  <Mail className="h-5 w-5 text-[#0f172a]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#020617]">{t.contact.emailTitle}</div>
                  <div className="mt-1.5 text-sm leading-7 text-[#475569]">
                    Tap to send an email
                  </div>
                </div>
              </div>
            </Card>
          </a>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_8px_40px_-12px_rgba(15,23,42,0.08)] sm:p-12 lg:p-14"
        >
          {sent ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center text-emerald-900">
              <div className="mb-2 text-lg font-semibold">Inquiry Sent</div>
              <div className="text-lg font-semibold">{t.contact.fields.sent}</div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-10">
              {/* Contact info */}
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#0f172a]">Start your project inquiry</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Share a new project details and our team will follow up.
                  </p>
                  <div className="mt-5 h-px w-full bg-slate-100" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-2">
                    <label className={labelCls}>Full Name</label>
                    <input name="name" className={inputCls} placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label className={labelCls}>Company</label>
                    <input
                      name="company"
                      className={inputCls}
                      placeholder="Company name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={labelCls}>Email Address</label>
                    <input
                      name="email"
                      type="email"
                      className={inputCls}
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={labelCls}>Phone Number</label>
                    <input
                      name="phone"
                      className={inputCls}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-100" />

              {/* Project info */}
              <div>
                <div className="mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0f172a]/60">
                    PROJECT DETAILS
                  </span>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                    <label className={labelCls}>Project Location</label>
                    <input
                      name="location"
                      className={inputCls}
                      placeholder="City, State (e.g. Riverside, CA)"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className={labelCls}>Project Type</label>
                    <select name="projectType" className={inputCls} required defaultValue="">
                      <option value="" disabled>
                        Select a type
                      </option>
                      {projectTypes.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className={labelCls}>Start / Bid Due Date</label>
                    <input name="startDate" type="date" className={inputCls} />
                  </div>

                  <div className="space-y-2 sm:col-span-2 lg:col-span-3">
                    <label className={labelCls}>Scope of Work Needed</label>
                    <input
                      name="scope"
                      className={inputCls}
                      placeholder="Doors, frames, hardware, mouldings, shelving, installation…"
                      required
                    />
                  </div>

                  <div className="space-y-3 sm:col-span-2 lg:col-span-3">
                    <label className={labelCls}>Plans / Specifications Available?</label>
                    <div className="flex flex-wrap gap-3">
                      {(["yes", "no"] as const).map((opt) => {
                        const active = plansAvailable === opt;
                        return (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setPlansAvailable(opt)}
                            className={`rounded-full border px-6 py-2.5 text-sm font-medium capitalize transition ${
                              active
                                ? "border-[#0f172a] bg-[#0f172a] text-white"
                                : "border-slate-200 bg-white text-[#475569] hover:border-[#0f172a]/30"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-2 sm:col-span-2 lg:col-span-3">
                    <label className={labelCls}>Project Description</label>
                    <textarea
                      name="description"
                      className={inputCls}
                      placeholder="Tell us about the project — units, square footage, timeline, special requirements…"
                      rows={6}
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#0f172a] px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
              >
                {t.contact.fields.submit} <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
