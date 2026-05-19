import { useState } from "react";
import { Link } from "react-router-dom";
import { useSiteContent } from "@/hooks/useSiteContent";
import { useSiteMedia } from "@/hooks/useSiteMedia";

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);
  const { get } = useSiteContent();
  const { getMedia } = useSiteMedia("INICIO");

  const heroVideo = getMedia(
    "hero-video",
    "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/5a12f5b9-68b7-47e6-b661-8055d89bfec0_423423.mp4?v=2c7ee5cbe95f9426dfeecd4aea39862f"
  );

  return (
    <section className="relative w-full min-h-[100vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/95 via-[#0d0d0d]/75 to-[#0d0d0d]/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 w-full">
            <span className="inline-flex items-center gap-2 bg-[#4facec]/15 border border-[#4facec]/40 text-[#4facec] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <i className="ri-map-pin-line"></i> {get("home", "hero", "badge_text", "Port Chester, Nueva York")}
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              {get("home", "hero", "main_title", "Shows de Robot LED y Entretenimiento.")}
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              {get("home", "hero", "subtitle", "Show de robot con luces LED, hora loca, fiestas para toda ocasión, clubs, eventos privados, bazuca de CO2, confeti, party poppers, muñecos cabezones de los artistas del momento, DJ privado y más.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/contact"
                className="whitespace-nowrap bg-[#4facec] hover:bg-[#3d9ce6] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 cursor-pointer text-center"
              >
                {get("home", "hero", "primary_button", "Reserva Tu Show Hoy")}
              </Link>
              <Link
                to="/services"
                className="whitespace-nowrap bg-[#FACC15] hover:bg-[#E5B314] text-[#111111] font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 cursor-pointer text-center"
              >
                {get("home", "hero", "secondary_button", "Ver Nuestros Servicios")}
              </Link>
            </div>
            <div className="flex flex-wrap gap-8">
              <div className="bg-[#1a1a1a]/80 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-3xl font-extrabold text-[#FACC15]">5+</p>
                <p className="text-gray-400 text-sm mt-0.5">Años de Experiencia</p>
              </div>
              <div className="bg-[#1a1a1a]/80 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-3xl font-extrabold text-[#FACC15]">500+</p>
                <p className="text-gray-400 text-sm mt-0.5">Eventos Realizados</p>
              </div>
              <div className="bg-[#1a1a1a]/80 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-3xl font-extrabold text-[#FACC15]">100%</p>
                <p className="text-gray-400 text-sm mt-0.5">Satisfacción</p>
              </div>
              <div className="bg-[#1a1a1a]/80 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-3xl font-extrabold text-[#FACC15]">4.9</p>
                <p className="text-gray-400 text-sm mt-0.5">Calificación</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[420px] shrink-0">
            <div className="bg-[#0d0d0d]/90 backdrop-blur-sm border border-[#4facec]/30 rounded-2xl p-8">
              <div className="mb-6 pb-5 border-b border-white/10">
                <h2 className="text-white text-2xl font-extrabold leading-snug">
                  {get("home", "hero", "form_title", "Reserva Tu Show Hoy 👇")}
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  {get("home", "hero", "form_subtitle", "Sin compromiso — te llamamos rápido")}
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 flex items-center justify-center bg-[#4facec]/20 rounded-full mx-auto mb-4">
                    <i className="ri-check-line text-[#4facec] text-2xl"></i>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">¡Solicitud Recibida!</h3>
                  <p className="text-gray-400 text-sm">Te llamaremos pronto.</p>
                </div>
              ) : (
                <form
                  data-readdy-form="true"
                  id="hero-estimate-form"
                  className="flex flex-col gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const formData = new FormData(form);
                    fetch(form.action, {
                      method: form.method,
                      body: new URLSearchParams(formData as any),
                      headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                      },
                    })
                      .then(() => setSubmitted(true))
                      .catch(() => setSubmitted(true));
                  }}
                  action="https://readdy.ai/api/form/d85pjfru8to27s7pbl3g"
                  method="POST"
                >
                  <div>
                    <label className="block text-white text-sm font-semibold mb-1.5">
                      Nombre Completo
                    </label>
                    <input
                      placeholder="Escribe tu nombre completo"
                      className="w-full bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm rounded-lg px-4 py-3 outline-none focus:border-[#4facec] focus:bg-white/10 transition-all"
                      required
                      name="fullName"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-1.5">
                      Número de Teléfono
                    </label>
                    <input
                      placeholder="Escribe tu número de teléfono"
                      className="w-full bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm rounded-lg px-4 py-3 outline-none focus:border-[#4facec] focus:bg-white/10 transition-all"
                      required
                      type="tel"
                      name="phone"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-1.5">
                      Correo Electrónico
                    </label>
                    <input
                      placeholder="Escribe tu correo electrónico"
                      className="w-full bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm rounded-lg px-4 py-3 outline-none focus:border-[#4facec] focus:bg-white/10 transition-all"
                      required
                      type="email"
                      name="email"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-1.5">
                      Servicio Requerido
                    </label>
                    <select
                      name="serviceNeeded"
                      className="w-full bg-[#1a1a1a] border border-white/20 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#4facec] transition-all cursor-pointer"
                      required
                    >
                      <option value="" disabled selected>
                        Selecciona un Servicio
                      </option>
                      <option value="Show de Robot LED">Show de Robot con Luces LED</option>
                      <option value="Hora Loca">Hora Loca</option>
                      <option value="Bazuca de CO2">Bazuca de CO2</option>
                      <option value="Confeti">Confeti</option>
                      <option value="Party Poppers">Party Poppers</option>
                      <option value="Muñecos Cabezones">Muñecos Cabezones de Artistas</option>
                      <option value="DJ Privado">DJ Privado</option>
                      <option value="Evento Privado">Evento Privado</option>
                      <option value="Club">Club</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="whitespace-nowrap w-full bg-[#4facec] hover:bg-[#3d9ce6] disabled:opacity-60 text-white font-bold py-4 rounded-lg text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer mt-1"
                  >
                    <i className="ri-send-plane-line text-base"></i>Solicitar Tu Show
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 opacity-50">
        <span className="text-white text-xs tracking-widest uppercase">Desplazar</span>
        <i className="ri-arrow-down-line text-white text-lg animate-bounce"></i>
      </div>
    </section>
  );
}