import { useState } from "react";
import { Link } from "react-router-dom";
import { useSiteContent } from "@/hooks/useSiteContent";
import { useSiteMedia } from "@/hooks/useSiteMedia";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const { get } = useSiteContent();
  const { getMedia } = useSiteMedia("INICIO");
  const { t, language } = useLanguage();

  const heroVideo = getMedia(
    "hero-video",
    "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/5a12f5b9-68b7-47e6-b661-8055d89bfec0_423423.mp4?v=2c7ee5cbe95f9426dfeecd4aea39862f"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");
    const form = e.currentTarget;
    const formData = new FormData(form);

    const { error } = await supabase.from("contact_submissions").insert({
      name: String(formData.get("fullName") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      service_needed: String(formData.get("serviceNeeded") || ""),
      source: "hero-form",
      status: "new",
    });

    setSubmitting(false);
    if (error) {
      setSubmitError(t("hero_form_error"));
    } else {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative w-full min-h-[100vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/95 via-[#0d0d0d]/75 to-[#0d0d0d]/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 w-full">
            <span className="inline-flex items-center gap-2 bg-[#4facec]/15 border border-[#4facec]/40 text-[#4facec] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <i className="ri-map-pin-line"></i> {get("home", "hero", "badge_text", t("hero_badge"), language)}
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              {get("home", "hero", "main_title", t("hero_title"), language)}
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              {get("home", "hero", "subtitle", t("hero_subtitle"), language)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/contact"
                className="whitespace-nowrap bg-[#4facec] hover:bg-[#3d9ce6] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 cursor-pointer text-center"
              >
                {get("home", "hero", "primary_button", t("hero_primary_button"), language)}
              </Link>
              <Link
                to="/services"
                className="whitespace-nowrap bg-[#FACC15] hover:bg-[#E5B314] text-[#111111] font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 cursor-pointer text-center"
              >
                {get("home", "hero", "secondary_button", t("hero_secondary_button"), language)}
              </Link>
            </div>
            <div className="flex flex-wrap gap-8">
              <div className="bg-[#1a1a1a]/80 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-3xl font-extrabold text-[#FACC15]">5+</p>
                <p className="text-gray-400 text-sm mt-0.5">{t("hero_stat_years")}</p>
              </div>
              <div className="bg-[#1a1a1a]/80 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-3xl font-extrabold text-[#FACC15]">500+</p>
                <p className="text-gray-400 text-sm mt-0.5">{t("hero_stat_events")}</p>
              </div>
              <div className="bg-[#1a1a1a]/80 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-3xl font-extrabold text-[#FACC15]">100%</p>
                <p className="text-gray-400 text-sm mt-0.5">{t("hero_stat_satisfaction")}</p>
              </div>
              <div className="bg-[#1a1a1a]/80 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-3xl font-extrabold text-[#FACC15]">4.9</p>
                <p className="text-gray-400 text-sm mt-0.5">{t("hero_stat_rating")}</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[420px] shrink-0">
            <div className="bg-[#0d0d0d]/90 backdrop-blur-sm border border-[#4facec]/30 rounded-2xl p-8">
              <div className="mb-6 pb-5 border-b border-white/10">
                <h2 className="text-white text-2xl font-extrabold leading-snug">
                  {get("home", "hero", "form_title", t("hero_form_title"), language)}
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  {get("home", "hero", "form_subtitle", t("hero_form_subtitle"), language)}
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 flex items-center justify-center bg-[#4facec]/20 rounded-full mx-auto mb-4">
                    <i className="ri-check-line text-[#4facec] text-2xl"></i>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{t("hero_form_success_title")}</h3>
                  <p className="text-gray-400 text-sm">{t("hero_form_success_subtitle")}</p>
                </div>
              ) : (
                <form
                  id="hero-estimate-form"
                  className="flex flex-col gap-4"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label className="block text-white text-sm font-semibold mb-1.5">
                      {t("hero_form_label_name")}
                    </label>
                    <input
                      placeholder={t("hero_form_placeholder_name")}
                      className="w-full bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm rounded-lg px-4 py-3 outline-none focus:border-[#4facec] focus:bg-white/10 transition-all"
                      required
                      name="fullName"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-1.5">
                      {t("hero_form_label_phone")}
                    </label>
                    <input
                      placeholder={t("hero_form_placeholder_phone")}
                      className="w-full bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm rounded-lg px-4 py-3 outline-none focus:border-[#4facec] focus:bg-white/10 transition-all"
                      required
                      type="tel"
                      name="phone"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-1.5">
                      {t("hero_form_label_email")}
                    </label>
                    <input
                      placeholder={t("hero_form_placeholder_email")}
                      className="w-full bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm rounded-lg px-4 py-3 outline-none focus:border-[#4facec] focus:bg-white/10 transition-all"
                      required
                      type="email"
                      name="email"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-1.5">
                      {t("hero_form_label_service")}
                    </label>
                    <select
                      name="serviceNeeded"
                      className="w-full bg-[#1a1a1a] border border-white/20 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#4facec] transition-all cursor-pointer"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        {t("hero_form_select_service")}
                      </option>
                      <option value="Show de Robot LED">{t("hero_form_option_robot")}</option>
                      <option value="Hora Loca">{t("hero_form_option_hora_loca")}</option>
                      <option value="Bazuca de CO2">{t("hero_form_option_co2")}</option>
                      <option value="Confeti">{t("hero_form_option_confeti")}</option>
                      <option value="Party Poppers">{t("hero_form_option_poppers")}</option>
                      <option value="Muñecos Cabezones">{t("hero_form_option_cabezones")}</option>
                      <option value="DJ Privado">{t("hero_form_option_dj")}</option>
                      <option value="Evento Privado">{t("hero_form_option_privado")}</option>
                      <option value="Club">{t("hero_form_option_club")}</option>
                    </select>
                  </div>
                  {submitError && (
                    <p className="text-red-400 text-xs text-center">{submitError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="whitespace-nowrap w-full bg-[#4facec] hover:bg-[#3d9ce6] disabled:opacity-60 text-white font-bold py-4 rounded-lg text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer mt-1"
                  >
                    <i className="ri-send-plane-line text-base"></i>
                    {submitting ? t("hero_form_submitting") : t("hero_form_submit")}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 opacity-50">
        <span className="text-white text-xs tracking-widest uppercase">{t("hero_scroll_text")}</span>
        <i className="ri-arrow-down-line text-white text-lg animate-bounce"></i>
      </div>
    </section>
  );
}