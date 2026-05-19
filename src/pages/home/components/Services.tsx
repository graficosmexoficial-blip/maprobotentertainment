import { Link } from "react-router-dom";
import { useSiteContent } from "@/hooks/useSiteContent";
import { useSiteMedia } from "@/hooks/useSiteMedia";

export default function Services() {
  const { get } = useSiteContent();
  const { getMedia } = useSiteMedia("INICIO");

  const servicesFeatured = getMedia(
    "services-featured",
    "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/46454922-26f6-41a4-8ed8-11dcb4e51d37_472366821_571862878980890_353559173388661885_n.jpg?v=668f06be35cbc91052be1dd38d91bc21"
  );

  const services = [
    {
      title: get("home", "services", "card1_title", "Show de Robot LED"),
      desc: get("home", "services", "card1_desc", "Performers robots de alta energía cubiertos de luces LED deslumbrantes que bailan, interactúan y electrizan a la multitud. Perfecto para clubs, bodas y eventos corporativos."),
      img: getMedia(
        "services-card-1",
        "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/f20d1c73-1b3c-4908-84fe-88ea081a8666_677149541_928146753372013_7091196280485826080_n.jpg?v=c83fc433256257c5c53af1374d2d15f4"
      ),
      icon: "ri-lightbulb-flash-line",
    },
    {
      title: get("home", "services", "card2_title", "Hora Loca"),
      desc: get("home", "services", "card2_desc", "¡La hora de fiesta definitiva! Performers de alta energía, locos accesorios y acción sin parar que convierten la pista en un carnaval de diversión inolvidable."),
      img: getMedia(
        "services-card-2",
        "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/ad4c1e98-5c5b-4273-9aac-6829e12c5afa_474682414_578610134992345_9182123045525748269_n.jpg?v=a41920e8eab7525a3d1d17adf96a1078"
      ),
      icon: "ri-fire-line",
    },
    {
      title: get("home", "services", "card3_title", "Bazuca de CO2 y Confeti"),
      desc: get("home", "services", "card3_desc", "Explosiones dramáticas de CO2 y lluvias de confeti colorido sobre la multitud. Crea momentos impresionantes que asombran a tus invitados y iluminan las redes sociales."),
      img: getMedia(
        "services-card-3",
        "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/3262ffbb-4118-4113-b07f-23fafeca12a2_484407683_622784440555400_1975758362729952323_n-1.jpg?v=ef56c01f6b547b47c41dd411b0bcb258"
      ),
      icon: "ri-vip-diamond-line",
    },
  ];

  return (
    <section className="py-20 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-center mb-14">
          <div className="flex-1">
            <span className="text-[#4facec] text-xs font-semibold uppercase tracking-widest">
              {get("home", "services", "badge", "Nuestros Servicios")}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 leading-tight max-w-md">
              {get("home", "services", "title", "Servicios Premium de Entretenimiento Para Todo Evento")}
            </h2>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-sm">
              {get("home", "services", "subtitle", "Desde shows de robot LED hasta bazucas de CO2 y lluvias de confeti, ofrecemos entretenimiento de impacto que hace de tu evento el tema de conversación de la ciudad.")}
            </p>
            <div className="inline-flex items-center gap-3 bg-[#1a1a1a] border border-[#4facec]/30 text-white px-6 py-3.5 rounded-xl mt-7">
              <i className="ri-emotion-happy-line text-[#FACC15] text-xl"></i>
              <div>
                <span className="text-2xl font-extrabold text-[#FACC15]">{get("home", "services", "stat_value", "500+")}</span>
                <span className="text-white font-semibold text-sm ml-2">{get("home", "services", "stat_label", "Clientes Felices")}</span>
                <p className="text-white/50 text-xs mt-0.5">{get("home", "services", "stat_desc", "Eventos transformados en experiencias inolvidables")}</p>
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
                  <h4 className="text-white font-bold text-xs leading-tight">Servicio Tri-State</h4>
                  <p className="text-gray-400 text-[11px] mt-0.5 leading-relaxed">
                    Cubrimos Nueva York, Connecticut y Nueva Jersey para todo tipo de eventos.
                  </p>
                </div>
              </div>
              <div className="bg-[#111111]/95 backdrop-blur-sm rounded-xl px-4 py-3 flex items-start gap-3 border border-[#4facec]/20">
                <div className="w-9 h-9 flex items-center justify-center bg-[#4facec]/15 rounded-lg shrink-0 mt-0.5">
                  <i className="ri-file-list-3-line text-[#4facec] text-base"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs leading-tight">Reserva Tu Show</h4>
                  <p className="text-gray-400 text-[11px] mt-0.5 leading-relaxed">
                    Obtén una cotización detallada sin compromiso para tu evento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h3 className="text-xl font-bold text-white">{get("home", "services", "bottom_title", "Entretenimiento Diseñado para Impresionar")}</h3>
          <p className="text-gray-400 text-sm max-w-md">
            {get("home", "services", "bottom_desc", "Desde performers robots LED hasta bazucas de CO2 y muñecos cabezones, nuestros servicios cubren toda necesidad de entretenimiento con energía y visuales de alto impacto.")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-product-shop="true">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-[#4facec]/40 transition-all duration-700 hover:-translate-y-1"
            >
              <div className="w-full h-52 overflow-hidden">
                <img
                  alt={s.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  src={s.img}
                />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 flex items-center justify-center bg-[#4facec]/15 rounded-xl mb-4">
                  <i className={`${s.icon} text-[#4facec] text-lg`}></i>
                </div>
                <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="whitespace-nowrap inline-flex items-center gap-2 bg-[#4facec] hover:bg-[#3d9ce6] text-white font-semibold px-10 py-4 rounded-full text-sm transition-colors cursor-pointer"
          >
            Ver Todos Los Servicios <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}