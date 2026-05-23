import { Link } from "react-router-dom";
import { useSiteContent } from "@/hooks/useSiteContent";
import { useSiteMedia } from "@/hooks/useSiteMedia";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CTA() {
  const { get } = useSiteContent();
  const { getMedia } = useSiteMedia("INICIO");
  const { t, language } = useLanguage();

  const bgImage = getMedia(
    "cta-background",
    "https://static.readdy.ai/image/3ce9d24c92e6c33dbaca65a0380531ab/c064f3abd7f7d2172500e7fcf75e5075.jpeg"
  );

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt="Reserva MAP Robot Entertainment para tu próximo evento en Nueva York"
          className="w-full h-full object-cover object-[center_40%]"
          src={bgImage}
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
        <span className="inline-block text-[#FACC15] text-xs font-semibold uppercase tracking-widest border border-[#FACC15]/40 rounded-full px-4 py-1 mb-4">
          {get("home", "cta", "badge", t("cta_badge"), language)}
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 leading-tight">
          {get("home", "cta", "title", t("cta_title"), language)}
        </h2>
        <p className="text-white/60 mt-5 text-base leading-relaxed max-w-xl mx-auto">
          {get("home", "cta", "subtitle", t("cta_subtitle"), language)}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="whitespace-nowrap bg-[#4facec] hover:bg-[#3d9ce6] text-white font-bold px-10 py-4 rounded-full text-sm transition-all cursor-pointer flex items-center gap-2"
          >
            <i className="ri-message-3-line"></i>{get("home", "cta", "primary_button", t("cta_primary_button"), language)}
          </Link>
          <a
            href="https://wa.me/19145272616"
            className="whitespace-nowrap bg-[#FACC15] hover:bg-[#E5B314] text-[#111111] font-bold px-8 py-4 rounded-full text-sm transition-all cursor-pointer flex items-center gap-2"
          >
            <i className="ri-phone-line"></i>{get("home", "cta", "phone_button", t("cta_phone_button"), language)}
          </a>
        </div>
      </div>
    </section>
  );
}