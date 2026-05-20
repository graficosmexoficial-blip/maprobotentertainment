import { useState } from "react";
import { useSiteContent } from "@/hooks/useSiteContent";

const allReviews = [
  {
    text: "¡MAP Robot hizo de nuestra recepción de boda algo absolutamente inolvidable! Los robots LED salieron durante la hora loca y la multitud se volvió loca. Todo el mundo sigue hablando de ello. ¡Altamente recomendado para cualquier evento!",
    name: "Maria G.",
    initials: "MG",
    date: "12 Mayo, 2024",
  },
  {
    text: "Los contratamos para un evento de club en NYC y los cañones de CO2 más la explosión de confeti fueron una locura. La energía se fue por las nubes. Montaje profesional, a tiempo, y los muñecos cabezones fueron hilarantes. 10/10.",
    name: "Jose R.",
    initials: "JR",
    date: "3 Agosto, 2024",
  },
  {
    text: "La quinceañera de mi hija fue legendaria gracias a MAP Robot. El show de robot LED fue lo más destacado de la noche. A los chicos les encantaron los muñecos cabezones y los party poppers. ¡Cada centavo valió la pena!",
    name: "Jennifer M.",
    initials: "JM",
    date: "17 Nov, 2024",
  },
  {
    text: "Rápidos, amables y absolutamente eléctricos. Los contratamos para una fiesta corporativa de fin de año y el show de robot con luces LED dejó a nuestros empleados asombrados. Profesionales de principio a fin.",
    name: "Carlos T.",
    initials: "CT",
    date: "8 Feb, 2025",
  },
  {
    text: "La mejor empresa de entretenimiento del área Tri-State sin duda. Precios honestos, gran comunicación, y el show final superó todas las expectativas. Los contrataremos de nuevo para nuestro próximo evento sin dudarlo.",
    name: "Angela W.",
    initials: "AW",
    date: "15 Jun, 2024",
  },
  {
    text: "Reservamos el paquete de bazuca de CO2 y confeti para el aniversario de nuestro nightclub. La reacción de la multitud fue increíble — todos con el celular en mano. MAP Robot sabe cómo crear momentos que se hacen virales.",
    name: "Robert K.",
    initials: "RK",
    date: "22 Oct, 2024",
  },
  {
    text: "Servicio profesional de principio a fin. Obtuve mi cotización el mismo día, nos ayudaron a planificar toda la línea de tiempo, y el show en nuestra fiesta privada fue impecable. ¡Gracias MAP Robot Entertainment!",
    name: "Lisa P.",
    initials: "LP",
    date: "30 Mar, 2024",
  },
  {
    text: "He contratado a MAP Robot para mis eventos de club por más de 2 años. Ya sea una fiesta privada pequeña o una noche masiva de club, siempre entregan entretenimiento de primer nivel. Los robots LED son insuperables.",
    name: "David S.",
    initials: "DS",
    date: "5 Ene, 2025",
  },
  {
    text: "Los muñecos cabezones en nuestra fiesta de cumpleaños hicieron que todos se rieran y bailaran. Combinado con la explosión de confeti a medianoche — el mejor cumpleaños de todos. Precio justo y montaje rápido. ¡Recomendadísimos!",
    name: "Michelle B.",
    initials: "MB",
    date: "14 Sep, 2024",
  },
  {
    text: "Después de un aburrido evento corporativo el año pasado, decidimos ir a lo grande. El show LED + efectos de CO2 de MAP Robot convirtieron nuestra fiesta de empresa en una experiencia nivel concierto. El CEO los quiere de vuelta el año que viene.",
    name: "James L.",
    initials: "JL",
    date: "19 Jul, 2024",
  },
  {
    text: "Paquete completo de boda con show de robot, hora loca y party poppers. Lo hicieron realidad con luces hermosas y energía increíble. Verdaderos performers que se preocupan por hacer tu noche especial.",
    name: "Tom H.",
    initials: "TH",
    date: "2 Abr, 2024",
  },
  {
    text: "Respuesta rápida para una reserva de último minuto en el club. El equipo llegó, montó rápido y entregó un show que parecía planeado hace meses. Colorido, ruidoso y absolutamente perfecto.",
    name: "Sandra N.",
    initials: "SN",
    date: "11 Dic, 2024",
  },
];

const PER_PAGE = 3;

export default function Reviews() {
  const { get } = useSiteContent();
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(allReviews.length / PER_PAGE);
  const current = allReviews.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <section className="bg-[#0d0d0d] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-5">
            <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-white/70 text-sm font-medium">Reseñas de Google</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 flex items-center justify-center gap-3 flex-wrap">
            <span>{get("home", "reviews", "title", "Lo Que Dicen Nuestros Clientes")}</span>
            <svg className="w-10 h-10 md:w-12 md:h-12 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-6">
            {get("home", "reviews", "subtitle", "Reseñas reales de clientes reales en Nueva York, Connecticut y Nueva Jersey. Estamos orgullosos de nuestra reputación.")}
          </p>
          <div className="inline-flex items-center gap-4 bg-[#111111] border border-white/10 rounded-2xl px-6 py-4">
            <div className="flex items-center gap-1">
              <i className="text-xl ri-star-fill text-[#FACC15]"></i>
              <i className="text-xl ri-star-fill text-[#FACC15]"></i>
              <i className="text-xl ri-star-fill text-[#FACC15]"></i>
              <i className="text-xl ri-star-fill text-[#FACC15]"></i>
              <i className="text-xl ri-star-half-fill text-[#FACC15]"></i>
            </div>
            <div className="text-left">
              <p className="text-white font-extrabold text-2xl">{get("home", "reviews", "rating_value", "4.9")}</p>
              <p className="text-gray-500 text-xs">de 5 estrellas</p>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="text-left">
              <p className="text-white font-bold text-lg">{get("home", "reviews", "reviews_count", "40+")}</p>
              <p className="text-gray-500 text-xs">reseñas verificadas</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {current.map((r) => (
            <div
              key={r.name + r.date}
              className="bg-[#111111] border border-white/10 rounded-xl p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-0.5">
                  <i className="text-sm ri-star-fill text-[#FACC15]"></i>
                  <i className="text-sm ri-star-fill text-[#FACC15]"></i>
                  <i className="text-sm ri-star-fill text-[#FACC15]"></i>
                  <i className="text-sm ri-star-fill text-[#FACC15]"></i>
                  <i className="text-sm ri-star-fill text-[#FACC15]"></i>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded-full">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-gray-400 text-[10px] font-medium uppercase tracking-wide">Google</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-4">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 flex items-center justify-center bg-[#4facec]/15 rounded-full shrink-0">
                  <span className="text-[#4facec] text-sm font-bold">{r.initials}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-white text-sm font-semibold">{r.name}</p>
                  <p className="text-gray-500 text-xs">Cliente Verificado · {r.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4 mb-10">
          <a
            href="https://www.facebook.com/profile.php?id=100085300897269&sk=reviews"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-2.5 whitespace-nowrap bg-[#4facec] hover:bg-[#3d9ce6] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 cursor-pointer"
          >
            Déjanos una Reseña de 5 Estrellas en Facebook
          </a>
          <p className="text-gray-500 text-xs mt-3">
            Tu opinión nos ayuda a crecer y a servirte mejor.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FACC15] hover:bg-[#E5B314] disabled:opacity-30 disabled:cursor-not-allowed text-[#111111] transition-colors cursor-pointer"
          >
            <i className="ri-arrow-left-s-line"></i>
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                p === page
                  ? "bg-[#4facec] text-white"
                  : "bg-[#FACC15] hover:bg-[#E5B314] text-[#111111]"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FACC15] hover:bg-[#E5B314] disabled:opacity-30 disabled:cursor-not-allowed text-[#111111] transition-colors cursor-pointer"
          >
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </div>
    </section>
  );
}