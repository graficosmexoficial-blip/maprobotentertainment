import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuote } from "@/contexts/QuoteContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/lib/supabase";
import Header from "../home/components/Header";
import Footer from "../home/components/Footer";

const TITLE_KEYS: Record<string, string> = {
  robot: "service_robot_title",
  hora: "service_hora_title",
  co2: "service_co2_title",
  confeti: "service_confeti_title",
  poppers: "service_poppers_title",
  bodas: "service_bodas_title",
  cabezones: "service_cabezones_title",
  dj: "service_dj_title",
  dryice: "service_dryice_title",
  chispas: "service_chispas_title",
  photobooth: "service_photobooth_title",
  quince: "service_15_title",
};

export default function QuotePage() {
  const { items, removeItem, clearItems } = useQuote();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (items.length === 0) return;

    setSubmitting(true);
    setSubmitError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const serviceNames = items
      .map((item) => t(TITLE_KEYS[item.serviceId] || "") || item.serviceId)
      .join(", ");

    const { error } = await supabase.from("contact_submissions").insert({
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      service_needed: serviceNames,
      message: String(formData.get("message") || ""),
      source: "quote-builder",
      status: "new",
    });

    setSubmitting(false);
    if (error) {
      setSubmitError(t("contact_form_error"));
    } else {
      setSubmitted(true);
      clearItems();
    }
  };

  if (items.length === 0 && !submitted) {
    return (
      <div className="min-h-screen bg-[#0d0d0d]">
        <Header />
        <main className="pt-[120px] pb-20">
          <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
            <div className="w-20 h-20 flex items-center justify-center bg-white/5 rounded-full mx-auto mb-6">
              <i className="ri-shopping-cart-2-line text-white/30 text-3xl" />
            </div>
            <h1 className="text-2xl font-extrabold text-white mb-3">{t("quote_empty_title")}</h1>
            <p className="text-gray-400 text-sm mb-8">{t("quote_empty_desc")}</p>
            <Link
              to="/services"
              className="whitespace-nowrap inline-flex items-center gap-2 bg-[#4facec] hover:bg-[#3d9ce6] text-white font-bold px-8 py-3.5 rounded-full text-sm transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line" /> {t("quote_back_to_services")}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Header />
      <main className="pt-[100px] pb-16">
        <section className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-[#4facec] text-xs font-semibold uppercase tracking-widest mb-2">
              {t("quote_hero_badge")}
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">
              {t("quote_hero_title")}
            </h1>
            <p className="text-gray-400 text-sm mt-3">{t("quote_hero_subtitle")}</p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl p-10 text-center max-w-lg mx-auto">
              <div className="w-20 h-20 flex items-center justify-center bg-[#4facec]/20 rounded-full mx-auto mb-5">
                <i className="ri-check-line text-[#4facec] text-4xl" />
              </div>
              <h2 className="text-2xl font-extrabold text-[#111111] mb-2">{t("quote_success_title")}</h2>
              <p className="text-gray-500 text-sm mb-8">{t("quote_success_subtitle")}</p>
              <Link
                to="/"
                className="whitespace-nowrap inline-flex items-center gap-2 bg-[#4facec] hover:bg-[#3d9ce6] text-white font-bold px-8 py-3.5 rounded-full text-sm transition-colors cursor-pointer"
              >
                <i className="ri-home-4-line" /> {t("nav_home")}
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Services Summary */}
              <div className="w-full lg:w-[42%]">
                <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 sticky top-28">
                  <h2 className="text-white font-extrabold text-lg flex items-center gap-2 mb-5">
                    <i className="ri-list-check-2 text-[#4facec] text-xl" />
                    {t("quote_summary_title")} ({items.length})
                  </h2>
                  <div className="flex flex-col gap-3">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 bg-[#111111] rounded-xl p-3 border border-white/5"
                      >
                        <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                          <img
                            src={item.img}
                            alt={t(TITLE_KEYS[item.serviceId] || "") || item.serviceId}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-semibold text-sm truncate">
                            {t(TITLE_KEYS[item.serviceId] || "") || item.serviceId}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500/15 hover:bg-red-500/30 text-red-400 transition-colors cursor-pointer shrink-0"
                        >
                          <i className="ri-close-line text-sm" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/services"
                    className="whitespace-nowrap inline-flex items-center gap-1.5 text-[#4facec] hover:text-[#3d9ce6] text-xs font-semibold mt-5 transition-colors cursor-pointer"
                  >
                    <i className="ri-add-line" /> {t("quote_add_more")}
                  </Link>
                </div>
              </div>

              {/* Contact Form */}
              <div className="w-full lg:w-[58%]">
                <div className="bg-white rounded-2xl p-8 md:p-10">
                  <span className="text-[#4facec] text-xs font-semibold uppercase tracking-widest">
                    {t("quote_form_badge")}
                  </span>
                  <h2 className="text-2xl font-extrabold text-[#111111] mt-2 mb-1 leading-snug">
                    {t("quote_form_title")}
                  </h2>
                  <div className="w-12 h-1 bg-[#4facec] rounded-full mb-7 mt-3" />

                  <form
                    id="quote-form"
                    className="flex flex-col gap-5"
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-1.5">
                          {t("contact_form_name_label")} <span className="text-[#FACC15]">*</span>
                        </label>
                        <input
                          name="name"
                          placeholder={t("contact_form_name_placeholder")}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#4facec] transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-1.5">
                          {t("contact_form_phone_label")}
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          placeholder={t("contact_form_phone_placeholder")}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#4facec] transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-1.5">
                        {t("contact_form_email_label")} <span className="text-[#FACC15]">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder={t("contact_form_email_placeholder")}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#4facec] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-1.5">
                        {t("contact_form_message_label")}{" "}
                        <span className="text-gray-400 font-normal ml-1 text-xs">
                          ({charCount}/500)
                        </span>
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        maxLength={500}
                        placeholder={t("contact_form_message_placeholder")}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#4facec] transition-colors resize-none"
                        onChange={(e) => setCharCount(e.target.value.length)}
                      />
                    </div>
                    {submitError && (
                      <p className="text-red-500 text-xs text-center">{submitError}</p>
                    )}
                    <button
                      type="submit"
                      disabled={submitting || items.length === 0}
                      className="whitespace-nowrap w-full bg-[#4facec] hover:bg-[#3d9ce6] disabled:opacity-60 text-white font-bold py-4 rounded-lg text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <i className="ri-send-plane-line" />
                      {submitting ? t("contact_form_sending") : t("quote_form_submit")}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}