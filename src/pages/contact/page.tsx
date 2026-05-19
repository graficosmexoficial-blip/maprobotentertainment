import { useState } from "react";
import { Link } from "react-router-dom";
import { useSiteContent } from "@/hooks/useSiteContent";
import Header from "../home/components/Header";
import Footer from "../home/components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const { get } = useSiteContent();

  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Header />
      <main className="pt-[80px]">
        {/* Hero Banner */}
        <section className="relative w-full overflow-hidden">
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              playsInline
              muted
              aria-label="Contacta a MAP Robot Entertainment Port Chester Nueva York"
              className="w-full h-full object-cover object-center"
              src="https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/5a12f5b9-68b7-47e6-b661-8055d89bfec0_423423.mp4?v=2c7ee5cbe95f9426dfeecd4aea39862f"
            />
            <div className="absolute inset-0 bg-[#111111]/75" />
          </div>
          <div className="relative z-10 py-16 text-center">
            <div className="inline-block bg-[#0d0d0d] border border-[#4facec]/40 px-16 py-6 rounded-lg border-b-4 border-[#4facec]">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-widest uppercase">
                {get("contact", "hero", "title", "Contáctanos")}
              </h1>
            </div>
          </div>
        </section>

        {/* Contact Info Bar */}
        <section className="w-full bg-[#1a1a1a] border-t-4 border-[#4facec]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
            <a
              href={`tel:${get("contact", "info", "phone", "+19145272616").replace(/\D/g, "")}`}
              className="group flex items-center gap-5 px-8 py-7 cursor-pointer hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full shrink-0 group-hover:bg-[#FACC15] transition-all duration-300">
                <i className="ri-phone-fill text-white group-hover:text-[#111111] text-xl transition-colors duration-300" />
              </div>
              <div>
                <p className="text-[#4facec] text-xs font-semibold uppercase tracking-widest">
                  {get("contact", "info", "phone_label", "Llámanos Directo")}
                </p>
                <p className="text-white font-bold text-base mt-0.5">{get("contact", "info", "phone", "(914) 527-2616")}</p>
                <p className="text-white/70 text-xs mt-0.5">{get("contact", "info", "phone_sub", "Siempre Disponible")}</p>
              </div>
            </a>
            <a
              href={`mailto:${get("contact", "info", "email", "mandonaire6238@gmail.com")}`}
              className="group flex items-center gap-5 px-8 py-7 cursor-pointer hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full shrink-0 group-hover:bg-[#FACC15] transition-all duration-300">
                <i className="ri-mail-line text-white group-hover:text-[#111111] text-xl transition-colors duration-300" />
              </div>
              <div>
                <p className="text-[#4facec] text-xs font-semibold uppercase tracking-widest">
                  {get("contact", "info", "email_label", "Escríbenos")}
                </p>
                <p className="text-white font-bold text-sm mt-0.5">{get("contact", "info", "email", "mandonaire6238@gmail.com")}</p>
              </div>
            </a>
            <a
              href="https://www.tiktok.com/@maprobot?t=8jjMfsFBnDf&r=1"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="group flex items-center gap-5 px-8 py-7 cursor-pointer hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full shrink-0 group-hover:bg-[#FACC15] transition-all duration-300">
                <i className="ri-tiktok-line text-white group-hover:text-[#111111] text-xl transition-colors duration-300" />
              </div>
              <div>
                <p className="text-[#4facec] text-xs font-semibold uppercase tracking-widest">
                  {get("contact", "info", "social_label", "Síguenos")}
                </p>
                <p className="text-white font-bold text-sm mt-0.5">{get("contact", "info", "social_handle", "@m.a.p.robot")}</p>
              </div>
            </a>
            <div className="group flex items-center gap-5 px-8 py-7">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full shrink-0">
                <i className="ri-map-pin-fill text-white text-xl" />
              </div>
              <div>
                <p className="text-[#4facec] text-xs font-semibold uppercase tracking-widest">
                  {get("contact", "info", "location_label", "Nuestra Ubicación")}
                </p>
                <p className="text-white font-bold text-sm mt-0.5">
                  {get("contact", "info", "location", "Port Chester, NY, Estados Unidos, 10573")}
                </p>
                <p className="text-white/70 text-xs">NY · CT · NJ</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-[#0d0d0d] py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-stretch gap-8">
              {/* Left Info */}
              <div className="w-full lg:w-[38%]">
                <div className="h-full rounded-2xl overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-[#111111] to-[#1a0a00] p-10 text-center min-h-[420px] border border-[#FACC15]/30">
                  <img
                    alt="MAP Robot Entertainment Logo"
                    className="w-36 h-auto object-contain mb-6 rounded-xl"
                    src="https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/a27ac3c3-dbf9-4849-83e5-4957e5e94ab3_aff17f747b134ccb95b0c51344fcc99e-1.png?v=560df2c84d57cceb4d73c1fa15a21893"
                  />
                  <h2 className="text-white text-xl font-extrabold leading-snug">
                    MAP Robot<br />
                    <span className="text-[#FACC15]">Entertainment</span>
                  </h2>
                  <p className="text-white/60 text-sm mt-3 leading-relaxed max-w-xs">
                    Entretenimiento premium con robot LED en Port Chester, Nueva York. Sirviendo
                    el área Tri-State para eventos inolvidables.
                  </p>
                  <div className="mt-6 w-full bg-white/5 rounded-xl px-5 py-4 text-left">
                    <p className="text-[#4facec] text-xs font-semibold uppercase tracking-widest mb-2">
                      Horario de Atención
                    </p>
                    <div className="flex justify-between text-white text-xs mb-1">
                      <span>Siempre Abierto</span>
                      <span className="font-semibold">Disponibilidad 24/7 para Eventos</span>
                    </div>
                    <div className="flex justify-between text-white/50 text-xs mb-1">
                      <span>Lunes – Domingo</span>
                      <span>Con Cita Previa</span>
                    </div>
                    <p className="text-[#FACC15] text-xs mt-3 flex items-center gap-1.5">
                      <i className="ri-lightbulb-flash-line" />
                      Shows LED y Efectos Especiales
                    </p>
                  </div>
                  <div className="mt-5 w-full bg-white/5 rounded-xl px-5 py-4 text-left">
                    <p className="text-[#4facec] text-xs font-semibold uppercase tracking-widest mb-3">
                      Áreas de Servicio
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Nueva York", "Connecticut", "Nueva Jersey", "Manhattan", "Brooklyn", "Bronx", "Westchester"].map((a) => (
                        <span
                          key={a}
                          className="text-white/70 text-xs bg-white/10 px-2 py-1 rounded-full"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="w-full lg:w-[62%]">
                <div className="bg-white rounded-2xl p-8 md:p-10 h-full">
                  <span className="text-[#4facec] text-xs font-semibold uppercase tracking-widest">
                    Envíanos un Mensaje
                  </span>
                  <h2 className="text-2xl font-extrabold text-[#111111] mt-2 mb-1 leading-snug">
                    Planeemos Tu Próximo Evento
                  </h2>
                  <div className="w-12 h-1 bg-[#4facec] rounded-full mb-7 mt-3" />

                  {submitted ? (
                    <div className="text-center py-10">
                      <div className="w-16 h-16 flex items-center justify-center bg-[#4facec]/20 rounded-full mx-auto mb-4">
                        <i className="ri-check-line text-[#4facec] text-3xl" />
                      </div>
                      <h3 className="text-[#111111] font-bold text-xl mb-2">¡Mensaje Enviado!</h3>
                      <p className="text-gray-500 text-sm">Te llamaremos pronto.</p>
                    </div>
                  ) : (
                    <form
                      data-readdy-form={true}
                      id="contact-page-form"
                      className="flex flex-col gap-5"
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-gray-700 text-sm font-semibold mb-1.5">
                            Tu Nombre <span className="text-[#FACC15]">*</span>
                          </label>
                          <input
                            name="name"
                            placeholder="Escribe tu nombre completo"
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#4facec] transition-colors"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 text-sm font-semibold mb-1.5">
                            Teléfono
                          </label>
                          <input
                            name="phone"
                            type="tel"
                            placeholder="Escribe tu número de teléfono"
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#4facec] transition-colors"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-gray-700 text-sm font-semibold mb-1.5">
                            Correo <span className="text-[#FACC15]">*</span>
                          </label>
                          <input
                            name="email"
                            type="email"
                            placeholder="Escribe tu correo electrónico"
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#4facec] transition-colors"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 text-sm font-semibold mb-1.5">
                            Servicio Requerido
                          </label>
                          <select
                            name="serviceNeeded"
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#4facec] transition-colors cursor-pointer"
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
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-1.5">
                          Detalles del Evento y Mensaje{" "}
                          <span className="text-[#FACC15]">*</span>
                          <span className="text-gray-400 font-normal ml-1 text-xs">
                            ({charCount}/500)
                          </span>
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          maxLength={500}
                          placeholder="Describe tu evento (tipo, fecha, lugar, número de invitados), el entretenimiento que deseas, y cualquier detalle específico..."
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#4facec] transition-colors resize-none"
                          onChange={(e) => setCharCount(e.target.value.length)}
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="whitespace-nowrap w-full bg-[#4facec] hover:bg-[#3d9ce6] disabled:opacity-60 text-white font-bold py-4 rounded-lg text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <i className="ri-send-plane-line" />
                        Enviar Mensaje
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="w-full h-[420px] mt-10">
          <iframe
            title="MAP Robot Entertainment - Port Chester, NY 10573"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.3!2d-73.6656!3d41.0018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c296e3e3e3e3e3%3A0x1!2sPort+Chester%2C+NY+10573!5e0!3m2!1ses!2sus!4v1"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}