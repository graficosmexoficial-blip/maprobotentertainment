import { Link } from "react-router-dom";
import { useSiteContent } from "@/hooks/useSiteContent";
import { useSiteMedia } from "@/hooks/useSiteMedia";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { get } = useSiteContent();
  const { getMedia } = useSiteMedia("INICIO");
  const { t, language } = useLanguage();

  const aboutImage = getMedia(
    "about-image",
    "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/29295c48-a9ff-4b25-ae66-12a6b5e33085_magnific_me-puedes-dar-exactamente_3010333418-3.png?v=ce1237072a1d7806122d911e0b83c1af"
  );

  return (
    <section className="py-20 bg-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-14">
          <div className="w-full lg:w-[48%] flex justify-center">
            <div className="relative w-full max-w-[520px]">
              <img
                alt="MAP Robot Entertainment show de robot LED"
                className="w-full h-auto object-contain object-top"
                src={aboutImage}
              />
              <div className="absolute bottom-6 left-6 bg-[#0d0d0d] border border-[#4facec]/40 text-white px-5 py-4 rounded-xl">
                <p className="text-3xl font-extrabold text-[#FACC15]">{get("home", "about", "years_badge_value", "5+")}</p>
                <p className="text-xs text-white/70 mt-0.5">{get("home", "about", "years_badge_label", t("home_about_badge"), language)}</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[52%] bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 md:p-10">
            <span className="text-[#4facec] text-xs font-semibold uppercase tracking-widest">
              {get("home", "about", "badge", t("home_about_badge"), language)}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 leading-tight">
              {get("home", "about", "title", t("home_about_title"), language)}
            </h2>
            <p className="text-gray-400 mt-5 text-base leading-relaxed">
              {get("home", "about", "paragraph1", t("home_about_p1"), language)}
            </p>
            <p className="text-gray-400 mt-3 text-base leading-relaxed">
              {get("home", "about", "paragraph2", t("home_about_p2"), language)}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-[#4facec]/15 rounded-lg shrink-0">
                  <i className="ri-lightbulb-flash-line text-[#4facec] text-base"></i>
                </div>
                <span className="text-gray-300 text-sm font-medium">{t("home_about_feature1")}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-[#4facec]/15 rounded-lg shrink-0">
                  <i className="ri-vip-diamond-line text-[#4facec] text-base"></i>
                </div>
                <span className="text-gray-300 text-sm font-medium">{t("home_about_feature2")}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-[#4facec]/15 rounded-lg shrink-0">
                  <i className="ri-emotion-laugh-line text-[#4facec] text-base"></i>
                </div>
                <span className="text-gray-300 text-sm font-medium">{t("home_about_feature3")}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-[#4facec]/15 rounded-lg shrink-0">
                  <i className="ri-music-2-line text-[#4facec] text-base"></i>
                </div>
                <span className="text-gray-300 text-sm font-medium">{t("home_about_feature4")}</span>
              </div>
            </div>
            <Link
              to="/about"
              className="whitespace-nowrap inline-flex items-center gap-2 bg-[#4facec] hover:bg-[#3d9ce6] text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-colors cursor-pointer mt-8"
            >
              {get("home", "about", "button_text", t("home_about_button"), language)} <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}