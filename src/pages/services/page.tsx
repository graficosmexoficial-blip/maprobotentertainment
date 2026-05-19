import { Link } from "react-router-dom";
import Header from "../home/components/Header";
import Footer from "../home/components/Footer";

const servicesFirst = [
  {
    title: "Show de Robot LED",
    desc: "Performers robots de alta energía cubiertos de luces LED deslumbrantes que bailan, interactúan y electrizan a la multitud. Nuestro show insignia trae energía futurista a cualquier evento — bodas, clubs y eventos corporativos.",
    img: "https://static.readdy.ai/image/3ce9d24c92e6c33dbaca65a0380531ab/d588e5ab54f9c0ab3017c9e08a1bcce8.png",
    icon: "ri-lightbulb-flash-line",
  },
  {
    title: "Hora Loca",
    desc: "¡La explosión de la hora de fiesta definitiva! Performers de alta energía, locos accesorios, acción sin parar, efectos LED e interacción con la multitud que convierten la pista en un carnaval de diversión inolvidable.",
    img: "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/03ce3bf9-bd5c-4f26-9585-c91c72f0252c_IMG_0629.jpg?v=fcd672a7ce915086a643c785a64a0648",
    icon: "ri-fire-line",
  },
  {
    title: "15's Años",
    desc: "Celebraciones de quinceañeras llenas de magia y energía con shows de robot LED, bazuca de CO2, confeti y hora loca. Convierte la entrada de la quinceañera en un momento épico e inolvidable que ella y sus invitados nunca olvidarán.",
    img: "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/4e58eb80-f950-4a99-b00a-0d31462e6265_IMG_0248.jpg?v=fa1f93661f5df6b6b9c58559c3d00777",
    icon: "ri-cake-3-line",
  },
  {
    title: "Bazuca de CO2",
    desc: "Explosiones dramáticas de jets de CO2 frío que atraviesan la pista de baile. Perfecto para drops, momentos climáticos y crear un factor sorpresa instantáneo que hace que todos saquen sus celulares.",
    img: "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/250602d4-be15-46f1-b828-71cc7c4e89f9_magnific_creame-una-foto-en-donde-_3004892059-2.png?v=ec97826a62581d568be1d8f82a8d091a",
    icon: "ri-windy-line",
  },
  {
    title: "Confeti",
    desc: "Lluvias de confeti colorido que explotan sobre la multitud en el momento perfecto — creando visuales impresionantes y escenas dignas de Instagram. Colores personalizables para combinar con la temática de tu evento.",
    img: "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/3262ffbb-4118-4113-b07f-23fafeca12a2_484407683_622784440555400_1975758362729952323_n-1.jpg?v=ef56c01f6b547b47c41dd411b0bcb258",
    icon: "ri-vip-diamond-line",
  },
  {
    title: "Party Poppers",
    desc: "Vibrantes explosiones de party poppers que cubren a los invitados con serpentinas y confeti colorido. El efecto sorpresa perfecto para cumpleaños, bodas y celebraciones de hitos especiales.",
    img: "https://readdy.ai/api/search-image?query=Colorful%20party%20poppers%20exploding%20with%20confetti%20streamers%20at%20a%20lively%20nightclub%20celebration%20with%20dramatic%20blue%20and%20yellow%20neon%20lighting%20and%20energetic%20crowd%20having%20fun&width=640&height=360&seq=map14&orientation=landscape",
    icon: "ri-flashlight-line",
  },
];

const servicesSecond = [
  {
    title: "Bodas",
    desc: "Entretenimiento de lujo para el día más importante de tu vida. Shows de robot LED, CO2, confeti, DJ privado y muñecos cabezones para que tu boda sea la celebración que todos recuerden para siempre.",
    img: "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/aceddab2-b7d8-4d00-8469-2b0020f0cd28_magnific_hazme-una-foto-realistas-_3004925656.png?v=8e6d104f1c26286d5683440d6a7cbb68",
    icon: "ri-heart-3-line",
  },
  {
    title: "Muñecos Cabezones",
    desc: "Divertidos personajes con cabezas gigantes de artistas famosos e iconos pop que recorren tu evento, bailan con los invitados y crean los momentos más compartidos en fotos de toda la noche.",
    img: "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/29295c48-a9ff-4b25-ae66-12a6b5e33085_magnific_me-puedes-dar-exactamente_3010333418-3.png?v=ce1237072a1d7806122d911e0b83c1af",
    icon: "ri-emotion-laugh-line",
  },
  {
    title: "DJ Privado",
    desc: "DJ profesional privado que transforma tu evento con música mezclada en vivo, luces LED sincronizadas y la energía perfecta para mantener a la pista de baile llena toda la noche. Ideal para cualquier celebración.",
    img: "https://static.readdy.ai/image/3ce9d24c92e6c33dbaca65a0380531ab/e8b998673d2c6d02e5307b7a12a4c0f7.png",
    icon: "ri-music-2-line",
  },
  {
    title: "Fiestas para Toda Ocasión",
    desc: "Paquetes de entretenimiento personalizados para cualquier tipo de celebración — ya sea un cumpleaños, aniversario, graduación o reunión familiar. Traemos la energía que se ajusta a tu ambiente.",
    img: "https://readdy.ai/api/search-image?query=Elegant%20private%20party%20celebration%20in%20a%20beautifully%20decorated%20venue%20with%20ambient%20blue%20LED%20lighting%20and%20guests%20dancing%20and%20enjoying%20themselves%20with%20festive%20atmosphere%20colorful%20confetti%20and%20balloons&width=640&height=360&seq=map17&orientation=landscape",
    icon: "ri-home-smile-line",
  },
  {
    title: "Eventos Privados",
    desc: "Entretenimiento exclusivo para tu evento privado con performers robots LED, efectos especiales y servicio personalizado. Trabajamos contigo para crear un show único que tus invitados nunca olvidarán.",
    img: "https://readdy.ai/api/search-image?query=Exclusive%20private%20event%20celebration%20in%20a%20luxury%20venue%20with%20dramatic%20blue%20LED%20uplighting%20and%20professional%20performers%20entertaining%20guests%20confetti%20falling%20and%20energetic%20atmosphere&width=640&height=360&seq=map18&orientation=landscape",
    icon: "ri-shield-star-line",
  },
  {
    title: "Clubs",
    desc: "Transforma la noche de tu nightclub con shows completos de robot LED, bazucas de CO2 y efectos de alto impacto. Sabemos cómo leer a la multitud y soltar el momento perfecto para mantener la energía al máximo.",
    img: "https://readdy.ai/api/search-image?query=High%20energy%20nightclub%20scene%20with%20DJ%20booth%20and%20colorful%20LED%20light%20beams%20cutting%20through%20fog%20with%20crowd%20celebrating%20and%20hands%20in%20the%20air%20under%20blue%20neon%20lights%20and%20confetti%20explosions&width=640&height=360&seq=map19&orientation=landscape",
    icon: "ri-vip-crown-line",
  },
];

function ServiceCard({ s }: { s: (typeof servicesFirst)[0] }) {
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
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            className="whitespace-nowrap bg-[#4facec] text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5"
            to="/contact"
          >
            <i className="ri-arrow-right-circle-line" /> Cotizar
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
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative pt-36 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              playsInline
              muted
              aria-label="MAP Robot Entertainment servicios show de robot LED Nueva York"
              className="w-full h-full object-cover object-center"
              src="https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/5a12f5b9-68b7-47e6-b661-8055d89bfec0_423423.mp4?v=2c7ee5cbe95f9426dfeecd4aea39862f"
            />
            <div className="absolute inset-0 bg-[#111111]/75" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 flex justify-center">
            <div className="bg-[#0d0d0d] border border-[#4facec]/40 rounded-2xl px-16 py-7 inline-block text-center border-b-4 border-[#4facec]">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-widest uppercase">
                Nuestros Servicios
              </h1>
            </div>
          </div>
        </section>

        {/* What We Offer Header */}
        <section className="bg-[#111111] py-10 text-center">
          <p className="text-[#4facec] text-xs font-semibold uppercase tracking-widest mb-2">
            Lo Que Ofrecemos
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Servicios Completos de Entretenimiento Para Todo Evento
          </h2>
          <div className="w-14 h-1 bg-[#4facec] rounded-full mx-auto mt-4" />
        </section>

        {/* First Grid */}
        <section className="pt-16 pb-10 bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesFirst.map((s) => (
                <ServiceCard key={s.title} s={s} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="Reserva MAP Robot Entertainment show de robot LED para tu próximo evento"
              className="w-full h-full object-cover object-top"
              src="https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/46454922-26f6-41a4-8ed8-11dcb4e51d37_472366821_571862878980890_353559173388661885_n.jpg?v=668f06be35cbc91052be1dd38d91bc21"
            />
            <div className="absolute inset-0 bg-[#111111]/80" />
          </div>
          <div className="relative z-10 max-w-xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-snug">
              Reserva Tu Show de Robot LED Hoy
            </h2>
            <p className="text-gray-300 mt-4 text-sm leading-relaxed">
              Obtén planificación de entretenimiento personalizada sin compromiso. Hablemos de
              tu próximo evento y hagámoslo inolvidable.
            </p>
            <Link
              className="whitespace-nowrap inline-flex items-center gap-2 bg-[#4facec] hover:bg-[#3d9ce6] text-white font-bold px-8 py-3.5 rounded-full mt-7 transition-all cursor-pointer text-sm"
              to="/contact"
            >
              Habla Con Nuestro Equipo <i className="ri-arrow-right-line" />
            </Link>
          </div>
        </section>

        {/* Second Grid */}
        <section className="pt-10 pb-16 bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesSecond.map((s) => (
                <ServiceCard key={s.title} s={s} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-28 overflow-hidden flex items-center justify-center mb-16">
          <div className="absolute inset-0">
            <img
              alt="MAP Robot Entertainment listo para iluminar tu próximo evento"
              className="w-full h-full object-cover object-top"
              src="https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/34fe7ad5-7308-499d-817c-ed43fd8924b9_magnific_hazme-una-foto-realistas-_3004906578.png?v=4fef05408125de5cf5472996c084eba6"
            />
            <div className="absolute inset-0 bg-[#111111]/75" />
          </div>
          <div className="relative z-10 flex justify-center w-full px-4 md:px-6">
            <div className="bg-[#111111] border border-[#FACC15]/40 rounded-2xl px-10 py-10 max-w-lg w-full text-center">
              <p className="text-[#4facec] text-xs font-semibold uppercase tracking-widest mb-3">
                Port Chester, Nueva York
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
                ¿Listo para Iluminar Tu Evento?
                <br />
                <span className="text-[#FACC15]">Empecemos.</span>
              </h2>
              <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                Tu evento merece ser inolvidable. Ya sea que necesites un show de robot LED,
                efectos de CO2 o la hora loca definitiva — nuestro equipo está listo. Reserva tu show hoy.
              </p>
              <Link
                className="whitespace-nowrap inline-flex items-center gap-2 bg-[#4facec] hover:bg-[#3d9ce6] text-white font-bold px-8 py-3.5 rounded-full mt-7 transition-all cursor-pointer text-sm"
                to="/contact"
              >
                Reserva Tu Show Hoy <i className="ri-arrow-right-line" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}