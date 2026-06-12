import { useState } from "react";
import { Link } from "react-router-dom";
import { useSiteContent } from "@/hooks/useSiteContent";
import { useSiteMedia } from "@/hooks/useSiteMedia";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "../home/components/Header";
import Footer from "../home/components/Footer";

export default function About() {
  const [openFaq, setOpenFaq] = useState(0);
  const { get } = useSiteContent();
  const { getMedia } = useSiteMedia("NOSOTROS");
  const { getMedia: getInitioMedia } = useSiteMedia("INICIO");
  const { t, language } = useLanguage();

  const faqs = [
    {
      q: t("about_faq1_q"),
      a: t("about_faq1_a"),
    },
    {
      q: t("about_faq2_q"),
      a: t("about_faq2_a"),
    },
    {
      q: t("about_faq3_q"),
      a: t("about_faq3_a"),
    },
    {
      q: t("about_faq4_q"),
      a: t("about_faq4_a"),
    },
    {
      q: t("about_faq5_q"),
      a: t("about_faq5_a"),
    },
    {
      q: t("about_faq6_q"),
      a: t("about_faq6_a"),
    },
  ];

  const values = [
    { icon: "ri-lightbulb-flash-line", label: t("about_value1") },
    { icon: "ri-fire-line", label: t("about_value2") },
    { icon: "ri-shield-check-line", label: t("about_value3") },
    { icon: "ri-user-heart-line", label: t("about_value4") },
    { icon: "ri-map-pin-line", label: t("about_value5") },
    { icon: "ri-time-line", label: t("about_value6") },
  ];

  const faqImage = getMedia("faq-image", "https://static.readdy.ai/image/3ce9d24c92e6c33dbaca65a0380531ab/bd4ecea6cec6055361e87941d236b84c.jpeg");
  const storyImage = getMedia("story-image", "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/976d153f-253a-4ff7-ad66-33b4f80239b2_IMG_0358.jpg?v=30d054eae7a9c8353fae3ac5284f7817");
  const ctaBannerBg = getMedia("cta-banner", "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/f20d1c73-1b3c-4908-84fe-88ea081a8666_677149541_928146753372013_7091196280485826080_n.jpg?v=c83fc433256257c5c53af1374d2d15f4");
  const valuesImage = getMedia("values-image", "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/021cd063-63d8-49b6-8e47-8f6aec5d2883_WhatsApp-Image-2026-05-19-at-2.19.13-PM-1.jpeg?v=52b90b969a73e43300cb9e06af8e63b9");
  const heroVideo = getInitioMedia("hero-video", "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/5a12f5b9-68b7-47e6-b661-8055d89bfec0_423423.mp4?v=2c7ee5cbe95f9426dfeecd4aea39862f");

  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative pt-36 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              playsInline
              muted
              aria-label="MAP Robot Entertainment show de robot LED performance"
              className="w-full h-full object-cover object-center"
              src={heroVideo}
            />
            <div className="absolute inset-0 bg-[#111111]/75" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 md:px-6 flex justify-center">
            <div className="bg-[#0d0d0d] border border-[#4facec]/40 rounded-2xl px-16 py-7 inline-block text-center border-b-4 border-[#4facec]">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-widest uppercase">
                {get("about", "hero", "title", t("about_hero_title"), language)}
              </h1>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <span className="text-[#4facec] text-xs font-bold uppercase tracking-widest">
                  {get("about", "story", "badge", t("about_story_badge"), language)}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 leading-tight">
                  {get("about", "story", "title", t("about_story_title"), language)}
                </h2>
                <p className="text-gray-400 mt-5 text-sm leading-relaxed">
                  {get("about", "story", "paragraph1", t("about_story_p1"), language)}
                </p>
                <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                  {get("about", "story", "paragraph2", t("about_story_p2"), language)}
                </p>
                <div className="mt-8 flex items-center gap-6">
                  <div>
                    <p className="text-xl italic text-white font-semibold">
                      {t("about_story_signature")}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 font-semibold uppercase tracking-widest">
                      {t("about_story_role")}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-10">
                  <div className="flex flex-col items-center justify-center gap-2 bg-[#111111] rounded-2xl px-4 py-6 text-center cursor-default hover:bg-[#4facec]/20 transition-colors">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#FACC15]/20 rounded-full mb-1">
                      <i className="ri-calendar-check-line text-[#4facec] text-xl" />
                    </div>
                    <p className="text-3xl font-extrabold text-white leading-none">5+</p>
                    <p className="text-[#4facec] text-xs font-semibold uppercase tracking-widest mt-1">
                      {t("about_story_stat1")}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 bg-[#111111] rounded-2xl px-4 py-6 text-center cursor-default hover:bg-[#4facec]/20 transition-colors">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#FACC15]/20 rounded-full mb-1">
                      <i className="ri-lightbulb-flash-line text-[#4facec] text-xl" />
                    </div>
                    <p className="text-3xl font-extrabold text-white leading-none">500+</p>
                    <p className="text-[#4facec] text-xs font-semibold uppercase tracking-widest mt-1">
                      {t("about_story_stat2")}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 bg-[#111111] rounded-2xl px-4 py-6 text-center cursor-default hover:bg-[#4facec]/20 transition-colors">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#FACC15]/20 rounded-full mb-1">
                      <i className="ri-medal-line text-[#4facec] text-xl" />
                    </div>
                    <p className="text-3xl font-extrabold text-white leading-none">100%</p>
                    <p className="text-[#4facec] text-xs font-semibold uppercase tracking-widest mt-1">
                      {t("about_story_stat3")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-full h-full bg-[#4facec]/10 rounded-2xl" />
                  <div className="relative w-[380px] h-[480px] rounded-2xl overflow-hidden">
                    <img
                        alt="MAP Robot Entertainment performance en vivo"
                        className="w-full h-full object-cover object-top"
                        src={storyImage}
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-[#4facec] text-white rounded-xl px-5 py-3 text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/80">{t("about_est")}</p>
                    <p className="text-2xl font-extrabold">2020</p>
                    <p className="text-xs text-white/80">{t("about_location")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="Reserva MAP Robot Entertainment show de robot LED para tu próximo evento"
              className="w-full h-full object-cover object-center"
              src={ctaBannerBg}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/60 to-black/65" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              {get("about", "ctaBanner", "title", t("about_cta_title"), language)}
            </h2>
            <p className="text-gray-300 mt-4 text-base max-w-xl mx-auto">
              {get("about", "ctaBanner", "subtitle", t("about_cta_subtitle"), language)}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                className="inline-flex items-center gap-2 whitespace-nowrap bg-[#4facec] hover:bg-[#3d9ce6] text-white font-bold px-10 py-4 rounded-full transition-all cursor-pointer hover:scale-105"
                to="/contact"
              >
                {get("about", "ctaBanner", "primary_button", t("about_cta_button"), language)} <i className="ri-arrow-right-line" />
              </Link>
              <a
                href="https://wa.me/19145272616"
                className="inline-flex items-center gap-2 whitespace-nowrap bg-[#FACC15] hover:bg-[#E5B314] text-[#111111] font-bold px-10 py-4 rounded-full transition-all cursor-pointer hover:scale-105"
              >
                <i className="ri-phone-line" />{get("about", "ctaBanner", "phone_button", "(914) 527-2616", language)}
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-12 items-stretch">
            <div className="flex-1">
              <span className="text-[#4facec] text-xs font-bold uppercase tracking-widest">
                {get("about", "faqs", "badge", t("about_faqs_badge"), language)}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-3 leading-snug">
                {get("about", "faqs", "title", t("about_faqs_title"), language)}
              </h2>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                {get("about", "faqs", "subtitle", t("about_faqs_subtitle"), language)}
              </p>
              <div className="mt-8 space-y-3">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden border border-white/10 transition-all duration-300 cursor-pointer"
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  >
                    <button
                      className={`w-full text-left flex items-center justify-between px-5 py-4 cursor-pointer transition-colors group ${
                        openFaq === i ? "bg-[#4facec]" : "bg-[#1a1a1a] hover:bg-[#222]"
                      }`}
                    >
                      <span className="font-semibold text-sm transition-colors duration-200 text-white">
                        {faq.q}
                      </span>
                      <span className="w-6 h-6 flex items-center justify-center ml-3 flex-shrink-0">
                        <i
                          className={`text-lg transition-transform duration-300 ${
                            openFaq === i
                              ? "ri-subtract-line text-white"
                              : "ri-add-line text-[#4facec]"
                          }`}
                        />
                      </span>
                    </button>
                    {openFaq === i && (
                      <div className="px-5 py-4 bg-[#1a1a1a] border-t border-white/5">
                        <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-[420px] w-full flex-shrink-0">
              <div className="w-full h-full min-h-[480px] rounded-2xl overflow-hidden">
                <img
                  alt="MAP Robot Entertainment performance en vivo en un evento de Nueva York"
                  className="w-full h-full object-cover object-top"
                  src={faqImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-12 items-stretch">
            <div className="lg:w-[460px] w-full flex-shrink-0">
              <div className="w-full h-full min-h-[460px] rounded-2xl overflow-hidden relative">
                <img
                  alt="MAP Robot Entertainment performance con luces LED y efectos especiales"
                  className="w-full h-full object-cover object-center"
                  src={valuesImage}
                />
                <div className="absolute bottom-5 left-5 bg-[#111111]/90 text-white rounded-xl px-5 py-3 backdrop-blur-sm">
                  <p className="text-[#4facec] text-xs font-bold uppercase tracking-widest">
                    {t("about_event_real")}
                  </p>
                  <p className="text-sm font-bold mt-0.5">{t("about_event_location")}</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <span className="text-[#4facec] text-xs font-bold uppercase tracking-widest">
                {get("about", "values", "badge", t("about_values_badge"), language)}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-3 leading-snug">
                {get("about", "values", "title", t("about_values_title"), language)}
              </h2>
              <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                {get("about", "values", "subtitle", t("about_values_subtitle"), language)}
              </p>
              <ul className="mt-7 space-y-2">
                {values.map((v) => (
                  <li key={v.label} className="cursor-default">
                    <div className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#FACC15]/10 transition-colors">
                      <div className="w-9 h-9 flex items-center justify-center bg-[#FACC15]/20 rounded-lg flex-shrink-0">
                        <i className={`${v.icon} text-[#4facec] text-base`} />
                      </div>
                      <span className="font-semibold text-sm text-gray-200">{v.label}</span>
                      <div className="ml-auto">
                        <i className="ri-arrow-right-line text-[#4facec]" />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex gap-4 flex-wrap">
                <Link
                  className="inline-flex items-center gap-2 whitespace-nowrap bg-[#4facec] hover:bg-[#3d9ce6] text-white font-bold px-7 py-3 rounded-full transition-all cursor-pointer hover:scale-105"
                  to="/contact"
                >
                  {t("about_values_cta1")} <i className="ri-arrow-right-line" />
                </Link>
                <Link
                  className="inline-flex items-center gap-2 whitespace-nowrap bg-[#FACC15] hover:bg-[#E5B314] text-[#111111] font-bold px-7 py-3 rounded-full transition-all cursor-pointer hover:scale-105"
                  to="/services"
                >
                  {t("about_values_cta2")} <i className="ri-eye-line" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}