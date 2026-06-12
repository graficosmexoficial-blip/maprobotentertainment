import { Link } from "react-router-dom";
import Header from "../home/components/Header";
import Footer from "../home/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useQuote } from "@/contexts/QuoteContext";
import { useSiteMedia } from "@/hooks/useSiteMedia";

function ServiceCard({ s }: { s: { title: string; desc: string; img: string; icon: string; serviceId: string } }) {
  const { t } = useLanguage();
  const { addItem, hasItem } = useQuote();
  const added = hasItem(s.serviceId);

  return (
    <div className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#4facec]/50 transition-all duration-300">
      <div className="w-full h-52 overflow-hidden relative">
        <img
          alt={s.title}
          src={s.img}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center bg-[#4facec] rounded-xl">
          <i className={`${s.icon} text-white text-base`} />
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(s.serviceId, s.img, s.icon);
            }}
            className={`whitespace-nowrap text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer ${
              added
                ? "bg-green-600 hover:bg-green-500"
                : "bg-[#4facec] hover:bg-[#3d9ce6]"
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
          <Link
            className="whitespace-nowrap bg-[#111111]/90 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1"
            to="/contact"
          >
            {t("services_get_quote")}
          </Link>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-extrabold text-white text-base mb-2">{s.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
      </div>
      <div className="h-0.5 bg-[#FACC15] mx-5 mb-4 rounded-full" />
    </div>
  );
}

export default function ServicesPage() {
  const { t } = useLanguage();
  const { getMedia: getServiciosMedia } = useSiteMedia("SERVICIOS");
  const { getMedia: getInicioMedia } = useSiteMedia("INICIO");

  const heroVideo = getInicioMedia("hero-video", "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/5a12f5b9-68b7-47e6-b661-8055d89bfec0_423423.mp4?v=2c7ee5cbe95f9426dfeecd4aea39862f");
  const ctaBannerBg = getServiciosMedia("service-hora-loca", "https://static.readdy.ai/image/3ce9d24c92e6c33dbaca65a0380531ab/70503375736b6ace7fe0112e684a5146.png");
  const finalCtaBg = getServiciosMedia("final-cta", "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/34fe7ad5-7308-499d-817c-ed43fd8924b9_magnific_hazme-una-foto-realistas-_3004906578.png?v=4fef05408125de5cf5472996c084eba6");

  const servicesFirst = [
    {
      title: t("service_robot_title"),
      desc: t("service_robot_desc"),
      img: getServiciosMedia("service-robot-led", "https://static.readdy.ai/image/3ce9d24c92e6c33dbaca65a0380531ab/d588e5ab54f9c0ab3017c9e08a1bcce8.png"),
      icon: "ri-lightbulb-flash-line",
      serviceId: "robot",
    },
    {
      title: t("service_hora_title"),
      desc: t("service_hora_desc"),
      img: getServiciosMedia("service-hora-loca", "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/03ce3bf9-bd5c-4f26-9585-c91c72f0252c_IMG_0629.jpg?v=fcd672a7ce915086a643c785a64a0648"),
      icon: "ri-fire-line",
      serviceId: "hora",
    },
    {
      title: t("service_15_title"),
      desc: t("service_15_desc"),
      img: getServiciosMedia("service-quince", "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/4e58eb80-f950-4a99-b00a-0d31462e6265_IMG_0248.jpg?v=fa1f93661f5df6b6b9c58559c3d00777"),
      icon: "ri-cake-3-line",
      serviceId: "quince",
    },
    {
      title: t("service_co2_title"),
      desc: t("service_co2_desc"),
      img: getServiciosMedia("service-co2", "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/250602d4-be15-46f1-b828-71cc7c4e89f9_magnific_creame-una-foto-en-donde-_3004892059-2.png?v=ec97826a62581d568be1d8f82a8d091a"),
      icon: "ri-windy-line",
      serviceId: "co2",
    },
    {
      title: t("service_confeti_title"),
      desc: t("service_confeti_desc"),
      img: getServiciosMedia("service-confeti", "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/3262ffbb-4118-4113-b07f-23fafeca12a2_484407683_622784440555400_1975758362729952323_n-1.jpg?v=ef56c01f6b547b47c41dd411b0bcb258"),
      icon: "ri-vip-diamond-line",
      serviceId: "confeti",
    },
    {
      title: t("service_poppers_title"),
      desc: t("service_poppers_desc"),
      img: getServiciosMedia("service-party-poppers", "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/f8bb8b95-555a-46a9-8934-1857771ebcb4_magnific_me-puedes-crear-una-image_e8JY3vsdqL.png?v=b84df48dfff75e4430b685d6950859d7"),
      icon: "ri-flashlight-line",
      serviceId: "poppers",
    },
  ];

  const servicesSecond = [
    {
      title: t("service_bodas_title"),
      desc: t("service_bodas_desc"),
      img: getServiciosMedia("service-bodas", "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/aceddab2-b7d8-4d00-8469-2b0020f0cd28_magnific_hazme-una-foto-realistas-_3004925656.png?v=8e6d104f1c26286d5683440d6a7cbb68"),
      icon: "ri-heart-3-line",
      serviceId: "bodas",
    },
    {
      title: t("service_cabezones_title"),
      desc: t("service_cabezones_desc"),
      img: getServiciosMedia("service-munecos", "https://static.readdy.ai/image/3ce9d24c92e6c33dbaca65a0380531ab/fb829ade6fe8b7beba9d3a565945ab04.png"),
      icon: "ri-emotion-laugh-line",
      serviceId: "cabezones",
    },
    {
      title: t("service_dj_title"),
      desc: t("service_dj_desc"),
      img: getServiciosMedia("service-dj", "https://static.readdy.ai/image/3ce9d24c92e6c33dbaca65a0380531ab/e8b998673d2c6d02e5307b7a12a4c0f7.png"),
      icon: "ri-music-2-line",
      serviceId: "dj",
    },
    {
      title: t("service_dryice_title"),
      desc: t("service_dryice_desc"),
      img: getServiciosMedia("service-dry-ice", "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/36f49c15-3452-4037-ab2e-db86ee7b2638_magnific_quisiera-que-esta-foto-se_5xTa9V4Kxe.png?v=ef383b2681e6988529723c79fe5b18ef"),
      icon: "ri-cloud-line",
      serviceId: "dryice",
    },
    {
      title: t("service_chispas_title"),
      desc: t("service_chispas_desc"),
      img: getServiciosMedia("service-chispas", "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/e3410fe6-47ad-4df3-870a-4a112ed6a144_WhatsApp-Image-2026-05-20-at-8.59.58-AM.jpeg?v=5b5b3a544d12480261a087b1ef4b0889"),
      icon: "ri-fire-line",
      serviceId: "chispas",
    },
    {
      title: t("service_photobooth_title"),
      desc: t("service_photobooth_desc"),
      img: getServiciosMedia("service-fotobooth", "https://static.readdy.ai/image/3ce9d24c92e6c33dbaca65a0380531ab/8b8a33dd513fcdab1ae219722d0e5e4e.png"),
      icon: "ri-camera-lens-line",
      serviceId: "photobooth",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Header />
      <main>
        <section className="relative pt-36 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            {heroVideo ? (
              <video
                autoPlay
                loop
                playsInline
                muted
                aria-label="MAP Robot Entertainment servicios show de robot LED Nueva York"
                className="w-full h-full object-cover object-center"
                src={heroVideo}
              />
            ) : (
              <div className="w-full h-full bg-[#111111]" />
            )}
            <div className="absolute inset-0 bg-[#111111]/75" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 flex justify-center">
            <div className="bg-[#0d0d0d] border border-[#4facec]/40 rounded-2xl px-16 py-7 inline-block text-center border-b-4 border-[#4facec]">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-widest uppercase">
                {t("services_hero_title")}
              </h1>
            </div>
          </div>
        </section>

        <section className="bg-[#111111] py-10 text-center">
          <p className="text-[#4facec] text-xs font-semibold uppercase tracking-widest mb-2">
            {t("services_header_badge")}
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            {t("services_header_title")}
          </h2>
          <div className="w-14 h-1 bg-[#4facec] rounded-full mx-auto mt-4" />
        </section>

        <section className="pt-16 pb-10 bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesFirst.map((s) => (
                <ServiceCard key={s.serviceId} s={s} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            {ctaBannerBg ? (
              <img
                alt="Reserva MAP Robot Entertainment show de robot LED para tu próximo evento"
                className="w-full h-full object-cover object-[center_20%]"
                src={ctaBannerBg}
              />
            ) : (
              <div className="w-full h-full bg-[#111111]" />
            )}
            <div className="absolute inset-0 bg-[#111111]/80" />
          </div>
          <div className="relative z-10 max-w-xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-snug">
              {t("services_cta_title")}
            </h2>
            <p className="text-gray-300 mt-4 text-sm leading-relaxed">
              {t("services_cta_subtitle")}
            </p>
            <Link
              className="whitespace-nowrap inline-flex items-center gap-2 bg-[#4facec] hover:bg-[#3d9ce6] text-white font-bold px-8 py-3.5 rounded-full mt-7 transition-all cursor-pointer text-sm"
              to="/contact"
            >
              {t("services_cta_button")} <i className="ri-arrow-right-line" />
            </Link>
          </div>
        </section>

        <section className="pt-10 pb-16 bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesSecond.map((s) => (
                <ServiceCard key={s.serviceId} s={s} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-28 overflow-hidden flex items-center justify-center mb-16">
          <div className="absolute inset-0">
            {finalCtaBg ? (
              <img
                alt="MAP Robot Entertainment listo para iluminar tu próximo evento"
                className="w-full h-full object-cover object-top"
                src={finalCtaBg}
              />
            ) : (
              <div className="w-full h-full bg-[#111111]" />
            )}
            <div className="absolute inset-0 bg-[#111111]/75" />
          </div>
          <div className="relative z-10 flex justify-center w-full px-4 md:px-6">
            <div className="bg-[#111111] border border-[#FACC15]/40 rounded-2xl px-10 py-10 max-w-lg w-full text-center">
              <p className="text-[#4facec] text-xs font-semibold uppercase tracking-widest mb-3">
                {t("services_location")}
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
                {t("services_final_title")}
                <br />
                <span className="text-[#FACC15]">{t("services_final_title")}</span>
              </h2>
              <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                {t("services_final_subtitle")}
              </p>
              <Link
                className="whitespace-nowrap inline-flex items-center gap-2 bg-[#4facec] hover:bg-[#3d9ce6] text-white font-bold px-8 py-3.5 rounded-full mt-7 transition-all cursor-pointer text-sm"
                to="/contact"
              >
                {t("services_final_button")} <i className="ri-arrow-right-line" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}