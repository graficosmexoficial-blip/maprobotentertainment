import { useSiteContent } from "@/hooks/useSiteContent";

export default function HowItWorks() {
  const { get } = useSiteContent();

  const steps = [
    {
      num: "1",
      title: get("home", "howItWorks", "step1_title", "Contacto y Cotización"),
      desc: get("home", "howItWorks", "step1_desc", "Contáctanos por teléfono, correo o nuestro formulario. Cuéntanos sobre tu tipo de evento, fecha, lugar y el paquete de entretenimiento que deseas. Te enviaremos una cotización detallada rápidamente."),
      icon: "ri-customer-service-2-line",
    },
    {
      num: "2",
      title: get("home", "howItWorks", "step2_title", "Planifica Tu Evento"),
      desc: get("home", "howItWorks", "step2_desc", "Trabajamos contigo para personalizar el show perfecto — seleccionando efectos como CO2, confeti, robots LED, muñecos cabezones y música que combine con tu ambiente y audiencia."),
      icon: "ri-calendar-event-line",
    },
    {
      num: "3",
      title: get("home", "howItWorks", "step3_title", "Performance en Vivo"),
      desc: get("home", "howItWorks", "step3_desc", "Nuestro equipo llega temprano para montar y entrega un show de alta energía, profesionalmente coreografiado con deslumbrantes luces LED, efectos especiales e interacción con la multitud."),
      icon: "ri-lightbulb-flash-line",
    },
    {
      num: "4",
      title: get("home", "howItWorks", "step4_title", "Noche Inolvidable"),
      desc: get("home", "howItWorks", "step4_desc", "Tus invitados se van asombrados. Nosotros desmontamos sin problemas después del show para que tú sigas celebrando. Los recuerdos y las fotos durarán para siempre."),
      icon: "ri-emotion-happy-line",
    },
  ];

  return (
    <section className="py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#4facec] border border-[#4facec]/40 rounded-full px-4 py-1 mb-4">
          {get("home", "howItWorks", "badge", "Cómo Funciona")}
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-14">
          {get("home", "howItWorks", "title", "Tu Viaje de Entretenimiento en Cuatro Simples Pasos")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group relative bg-[#1a1a1a] border border-white/5 hover:border-[#4facec]/30 rounded-2xl px-6 py-8 text-center flex flex-col items-center cursor-pointer transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full mb-4 mt-2 bg-[#4facec]/15 group-hover:bg-[#4facec]/25 transition-colors">
                <i className={`${step.icon} text-[#4facec] text-2xl`}></i>
              </div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4facec] text-white text-xs font-extrabold w-6 h-6 rounded-full flex items-center justify-center">
                {step.num}
              </div>
              <h3 className="font-bold text-base mb-2 text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}