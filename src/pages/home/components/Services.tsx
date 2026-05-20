import { Link } from "react-router-dom";
import { useSiteContent } from "@/hooks/useSiteContent";
import { useSiteMedia } from "@/hooks/useSiteMedia";

export default function Services() {
  const { get } = useSiteContent();
  const { getMedia } = useSiteMedia("INICIO");

  const servicesFeatured = getMedia(
    "services-featured",
    "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/0f15a774-36ab-42eb-aec3-067b8298c551_IMG_0657.jpg?v=b2b0b1c6477344d216101eafc86a43e1"
  );

  const services = [
    {
      title: get("home", "services", "card1_title", "Show de Robot LED"),
      desc: get("home", "services", "card1_desc", "Performers robots de alta energía cubiertos de luces LED deslumbrantes que bailan, interactúan y electrizan a la multitud. Perfecto para clubs, bodas y eventos corporativos."),
      img: getMedia(
        "services-card-1",
        "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/c65a3c04-2665-4289-8f3c-73f44d3fe145_magnific_creame-una-foto-en-donde-_3004827050-1.jpg?v=e4879d4e6c67d0483305c74924748f13"
      ),
      icon: "ri-lightbulb-flash-line",
    },
    {
      title: get("home", "services", "card2_title", "Hora Loca"),
      desc: get("home", "services", "card2_desc", "¡La hora de fiesta definitiva! Performers de alta energía, locos accesorios y acción sin parar que convierten la pista en un carnaval de diversión inolvidable."),
      img: getMedia(
        "services-card-2",
        "https://static.readdy.ai/image/3ce9d24c92e6c33dbaca65a0380531ab/70503375736b6ace7fe0112e684a5146.png"
      ),
      icon: "ri-fire-line",
    },
    {
      title: get("home", "services", "card3_title", "Bazuca de CO2 y Confeti"),
      desc: get("home", "services", "card3_desc", "Explosiones dramáticas de CO2 y lluvias de confeti colorido sobre la multitud. Crea momentos impresionantes que asombran a tus invitados y iluminan las redes sociales."),
      img: getMedia(
        "services-card-3",
        "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/dc7c6321-cd9a-40b2-8cfe-d5d94b9d4c2a_magnific_me-encanta-esta-foto-pero_xgeEqCujfW.png?v=a3906bdabfaf8f8758ab756895856eaa"
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