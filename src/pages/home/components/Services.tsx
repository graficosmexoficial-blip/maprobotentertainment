import { Link } from "react-router-dom";
import { useSiteContent } from "@/hooks/useSiteContent";
import { useSiteMedia } from "@/hooks/useSiteMedia";
import { useLanguage } from "@/contexts/LanguageContext";
import { useQuote } from "@/contexts/QuoteContext";

function HomeServiceCard({
  title,
  desc,
  img,
  icon,
  serviceId,
}: {
  title: string;
  desc: string;
  img: string;
  icon: string;
  serviceId: string;
}) {
  const { t } = useLanguage();
  const { addItem, hasItem } = useQuote();
  const added = hasItem(serviceId);

  return (
    <div className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-[#4facec]/40 transition-all duration-700 hover:-translate-y-1">
      <div className="w-full h-52 overflow-hidden">
        <img
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          src={img}
        />
      </div>
      <div className="p-6">
        <div className="w-10 h-10 flex items-center justify-center bg-[#4facec]/15 rounded-xl mb-4">
          <i className={`${icon} text-[#4facec] text-lg`}></i>
        </div>
        <h3 className="text-white font-bold text-base mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{desc}</p>
        <button
          onClick={() => addItem(serviceId, img, icon)}
          className={`whitespace-nowrap w-full font-bold py-2.5 rounded-full text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            added
              ? "bg-green-600/20 border border-green-500/30 text-green-400"
              : "bg-[#4facec]/15 border border-[#4facec]/30 text-[#4facec] hover:bg-[#4facec]/25"
          }`}
        >
          {added ? (
            <>
              <i className="ri-check-line" /> {t("quote_added")}
            </>
          ) : (
            <>
              <i className="ri-add-circle-line" /> {t("quote_add")}
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  const { get } = useSiteContent();
  const { getMedia } = useSiteMedia("INICIO");
  const { t, language } = useLanguage();

  const servicesFeatured = getMedia(
    "services-featured",
    "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/0f15a774-36ab-42eb-aec3-067b8298c551_IMG_0657.jpg?v=b2b0b1c6477344d216101eafc86a43e1"
  );

  const services = [
    {
      title: get("home", "services", "card1_title", t("service_robot_title"), language),
      desc: get("home", "services", "card1_desc", t("service_robot_desc"), language),
      img: getMedia(
        "services-card-1",
        "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/c65a3c04-2665-4289-8f3c-73f44d3fe145_magnific_creame-una-foto-en-donde-_3004827050-1.jpg?v=e4879d4e6c67d0483305c74924748f13"
      ),
      icon: "ri-lightbulb-flash-line",
      serviceId: "robot",
    },
    {
      title: get("home", "services", "card2_title", t("service_hora_title"), language),
      desc: get("home", "services", "card2_desc", t("service_hora_desc"), language),
      img: getMedia(
        "services-card-2",
        "https://static.readdy.ai/image/3ce9d24c92e6c33dbaca65a0380531ab/70503375736b6ace7fe0112e684a5146.png"
      ),
      icon: "ri-fire-line",
      serviceId: "hora",
    },
    {
      title: get("home", "services", "card3_title", t("service_co2_title"), language),
      desc: get("home", "services", "card3_desc", t("service_co2_desc"), language),
      img: getMedia(
        "services-card-3",
        "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/dc7c6321-cd9a-40b2-8cfe-d5d94b9d4c2a_magnific_me-encanta-esta-foto-pero_xgeEqCujfW.png?v=a3906bdabfaf8f8758ab756895856eaa"
      ),
      icon: "ri-vip-diamond-line",
      serviceId: "co2",
    },
  ];

  return (
    <section className="py-20 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-center mb-14">
          <div className="flex-1">
            <span className="text-[#4facec] text-xs font-semibold uppercase tracking-widest">
              {get("home", "services", "badge", t("services_badge"), language)}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 leading-tight max-w-md">
              {get("home", "services", "title", t("services_title"), language)}
            </h2>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-sm">
              {get("home", "services", "subtitle", t("services_subtitle"), language)}
            </p>
            <div className="inline-flex items-center gap-3 bg-[#1a1a1a] border border-[#4facec]/30 text-white px-6 py-3.5 rounded-xl mt-7">
              <i className="ri-emotion-happy-line text-[#FACC15] text-xl"></i>
              <div>
                <span className="text-2xl font-extrabold text-[#FACC15]">{get("home", "services", "stat_value", t("services_stat_value"), language)}</span>
                <span className="text-white font-semibold text-sm ml-2">{get("home", "services", "stat_label", t("services_stat_label"), language)}</span>
                <p className="text-white/50 text-xs mt-0.5">{get("home", "services", "stat_desc", t("services_stat_desc"), language)}</p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
              <img
                alt="MAP Robot Entertainment show de robot LED performance"
                className="w-full h-full object-cover object-center"
                src={servicesFeatured}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-5 right-5 flex flex-col gap-3 w-64">
              <div className="bg-[#111111]/95 backdrop-blur-sm rounded-xl px-4 py-3 flex items-start gap-3 border border-[#4facec]/20">
                <div className="w-9 h-9 flex items-center justify-center bg-[#4facec]/15 rounded-lg shrink-0 mt-0.5">
                  <i className="ri-shield-check-line text-[#4facec] text-base"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs leading-tight">{t("services_location")}</h4>
                  <p className="text-gray-400 text-[11px] mt-0.5 leading-relaxed">
                    {t("services_cta_subtitle")}
                  </p>
                </div>
              </div>
              <div className="bg-[#111111]/95 backdrop-blur-sm rounded-xl px-4 py-3 flex items-start gap-3 border border-[#4facec]/20">
                <div className="w-9 h-9 flex items-center justify-center bg-[#4facec]/15 rounded-lg shrink-0 mt-0.5">
                  <i className="ri-file-list-3-line text-[#4facec] text-base"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs leading-tight">{t("cta_primary_button")}</h4>
                  <p className="text-gray-400 text-[11px] mt-0.5 leading-relaxed">
                    {t("services_cta_subtitle")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h3 className="text-xl font-bold text-white">{get("home", "services", "bottom_title", t("services_bottom_title"), language)}</h3>
          <p className="text-gray-400 text-sm max-w-md">
            {get("home", "services", "bottom_desc", t("services_bottom_desc"), language)}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-product-shop="true">
          {services.map((s) => (
            <HomeServiceCard key={s.serviceId} {...s} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="whitespace-nowrap inline-flex items-center gap-2 bg-[#4facec] hover:bg-[#3d9ce6] text-white font-semibold px-10 py-4 rounded-full text-sm transition-colors cursor-pointer"
          >
            {t("services_view_all")} <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}