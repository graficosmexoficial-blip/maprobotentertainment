import { useSiteContent } from "@/hooks/useSiteContent";
import { useLanguage } from "@/contexts/LanguageContext";

export default function StatsBar() {
  const { get } = useSiteContent();
  const { t, language } = useLanguage();

  return (
    <div className="w-full bg-[#1a1a1a] border-t-4 border-[#4facec]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
          <div className="flex items-end gap-0.5">
            <span className="text-4xl md:text-5xl font-extrabold text-white">{get("home", "stats", "stat1_value", "5")}</span>
            <span className="text-2xl font-extrabold text-[#FACC15] mb-1">+</span>
          </div>
          <p className="text-[#4facec] font-semibold text-sm mt-1">{get("home", "stats", "stat1_label", t("stat1_label"), language)}</p>
          <p className="text-white/50 text-xs mt-1 leading-snug max-w-[160px]">
            {get("home", "stats", "stat1_desc", t("stat1_desc"), language)}
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
          <div className="flex items-end gap-0.5">
            <span className="text-4xl md:text-5xl font-extrabold text-white">{get("home", "stats", "stat2_value", "500")}</span>
            <span className="text-2xl font-extrabold text-[#FACC15] mb-1">+</span>
          </div>
          <p className="text-[#4facec] font-semibold text-sm mt-1">{get("home", "stats", "stat2_label", t("stat2_label"), language)}</p>
          <p className="text-white/50 text-xs mt-1 leading-snug max-w-[160px]">
            {get("home", "stats", "stat2_desc", t("stat2_desc"), language)}
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
          <div className="flex items-end gap-0.5">
            <span className="text-4xl md:text-5xl font-extrabold text-white">{get("home", "stats", "stat3_value", "100")}</span>
            <span className="text-2xl font-extrabold text-[#FACC15] mb-1">%</span>
          </div>
          <p className="text-[#4facec] font-semibold text-sm mt-1">{get("home", "stats", "stat3_label", t("stat3_label"), language)}</p>
          <p className="text-white/50 text-xs mt-1 leading-snug max-w-[160px]">
            {get("home", "stats", "stat3_desc", t("stat3_desc"), language)}
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
          <div className="flex items-end gap-0.5">
            <span className="text-4xl md:text-5xl font-extrabold text-white">{get("home", "stats", "stat4_value", "4.9")}</span>
          </div>
          <p className="text-[#4facec] font-semibold text-sm mt-1">{get("home", "stats", "stat4_label", t("stat4_label"), language)}</p>
          <p className="text-white/50 text-xs mt-1 leading-snug max-w-[160px]">
            {get("home", "stats", "stat4_desc", t("stat4_desc"), language)}
          </p>
        </div>
      </div>
    </div>
  );
}