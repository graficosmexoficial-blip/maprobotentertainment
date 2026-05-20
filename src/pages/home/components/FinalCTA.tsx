import { Link } from "react-router-dom";
import { useSiteContent } from "@/hooks/useSiteContent";
import { useSiteMedia } from "@/hooks/useSiteMedia";

export default function FinalCTA() {
  const { get } = useSiteContent();
  const { getMedia } = useSiteMedia("INICIO");

  const bgImage = getMedia(
    "final-cta-background",
    "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/4b1daa0f-661b-488e-a20b-004b498469aa_IMG_1043.jpg?v=c948462af5c891c7eb3044134d3d12db"
  );

  return (
    <section className="relative py-24 overflow-hidden mb-16">
      <div className="absolute inset-0">
        <img
          alt="MAP Robot Entertainment show de robot LED performance"
          className="w-full h-full object-cover object-[center_30%]"
          src={bgImage}
        />
        <div className="absolute inset-0 bg-[#0d0d0d]/85"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
        <span className="text-[#FACC15] text-sm font-semibold uppercase tracking-widest">
          {get("home", "finalCta", "badge", "¿Listo para Iluminar Tu Evento?")}
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 leading-tight">
          {get("home", "finalCta", "title", "Hagámoslo Inolvidable")}
        </h2>
        <p className="text-gray-300 mt-5 text-lg leading-relaxed">
          {get("home", "finalCta", "subtitle", "Desde una fiesta privada hasta una noche masiva de club — estamos aquí para hacerlo realidad. Contáctanos hoy y reserva tu show.")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            to="/contact"
            className="whitespace-nowrap bg-[#4facec] hover:bg-[#3d9ce6] text-white font-bold px-10 py-4 rounded-full text-base transition-colors cursor-pointer"
          >
            {get("home", "finalCta", "primary_button", "Reserva Tu Show Hoy")}
          </Link>
          <a
            href="https://wa.me/19145272616"
            className="whitespace-nowrap bg-[#FACC15] hover:bg-[#E5B314] text-[#111111] font-bold px-10 py-4 rounded-full text-base transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <i className="ri-phone-line"></i>{get("home", "finalCta", "phone_button", "(914) 527-2616")}
          </a>
        </div>
      </div>
    </section>
  );
}