import { Link } from "react-router-dom";
import { useSiteMedia } from "@/hooks/useSiteMedia";

export default function Footer() {
  const { getMedia } = useSiteMedia("INICIO");

  const logoUrl = getMedia(
    "footer-logo",
    "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/a27ac3c3-dbf9-4849-83e5-4957e5e94ab3_aff17f747b134ccb95b0c51344fcc99e-1.png?v=560df2c84d57cceb4d73c1fa15a21893"
  );

  return (
    <footer className="bg-[#0d0d0d] text-white border-t border-[#4facec]/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <img
              alt="MAP Robot Entertainment"
              className="h-16 w-auto object-contain mb-4 rounded-lg"
              src={logoUrl}
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Entretenimiento premium con robot LED en Port Chester, Nueva York.
              Servimos bodas, clubs, eventos privados y fiestas corporativas
              en todo el área Tri-State.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.tiktok.com/@m.a.p.robot"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FACC15] hover:bg-[#E5B314] transition-colors cursor-pointer"
              >
                <i className="ri-tiktok-fill text-base text-[#111111]"></i>
              </a>
              <a
                href="https://www.instagram.com/map_robot_entertaimen/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FACC15] hover:bg-[#E5B314] transition-colors cursor-pointer"
              >
                <i className="ri-instagram-line text-base text-[#111111]"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100085300897269"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FACC15] hover:bg-[#E5B314] transition-colors cursor-pointer"
              >
                <i className="ri-facebook-fill text-base text-[#111111]"></i>
              </a>
              <a
                href="https://wa.me/19145272616"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FACC15] hover:bg-[#E5B314] transition-colors cursor-pointer"
              >
                <i className="ri-phone-line text-base text-[#111111]"></i>
              </a>
            </div>
            <div className="mt-6 rounded-xl overflow-hidden border border-white/10">
              <iframe
                title="MAP Robot Entertainment - Port Chester, NY 10573"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.3!2d-73.6656!3d41.0018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c296e3e3e3e3e3%3A0x1!2sPort+Chester%2C+NY+10573!5e0!3m2!1ses!2sus!4v1"
                width="100%"
                height="160"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div>
            <h4 className="text-[#4facec] font-semibold uppercase text-xs tracking-widest mb-5">
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/" className="text-gray-400 text-sm hover:text-[#4facec] transition-colors cursor-pointer">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 text-sm hover:text-[#4facec] transition-colors cursor-pointer">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 text-sm hover:text-[#4facec] transition-colors cursor-pointer">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 text-sm hover:text-[#4facec] transition-colors cursor-pointer">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#4facec] font-semibold uppercase text-xs tracking-widest mb-5">
              Servicios
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-[#4facec] transition-colors cursor-pointer">Show de Robot LED</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-[#4facec] transition-colors cursor-pointer">Hora Loca</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-[#4facec] transition-colors cursor-pointer">Bazuca de CO2</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-[#4facec] transition-colors cursor-pointer">Confeti</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-[#4facec] transition-colors cursor-pointer">Party Poppers</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-[#4facec] transition-colors cursor-pointer">Muñecos Cabezones</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-[#4facec] transition-colors cursor-pointer">DJ Privado</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-[#4facec] transition-colors cursor-pointer">Dry Ice & Niebla Baja</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-[#4facec] transition-colors cursor-pointer">Chispas Frías</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-[#4facec] transition-colors cursor-pointer">Photobooth 360</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-[#4facec] transition-colors cursor-pointer">Bodas</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-[#4facec] transition-colors cursor-pointer">Quinceañeras</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-[#4facec] transition-colors cursor-pointer">Eventos Corporativos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#4facec] font-semibold uppercase text-xs tracking-widest mb-5">
              Contacto
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <i className="ri-map-pin-line text-[#4facec]"></i>
                </div>
                <span className="text-gray-400 text-sm">Port Chester, NY, Estados Unidos, 10573</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <i className="ri-phone-line text-[#4facec]"></i>
                </div>
                <div className="flex flex-col gap-1">
                  <a href="tel:+19145272616" className="text-gray-400 text-sm hover:text-[#4facec] transition-colors cursor-pointer block">
                    (914) 527-2616
                  </a>
                  <a href="tel:+19144260484" className="text-gray-400 text-sm hover:text-[#4facec] transition-colors cursor-pointer block">
                    (914) 426-0484
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <i className="ri-mail-line text-[#4facec]"></i>
                </div>
                <a href="mailto:mandonaire6238@gmail.com" className="text-gray-400 text-sm hover:text-[#4facec] transition-colors cursor-pointer block">
                  mandonaire6238@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <i className="ri-instagram-line text-[#4facec]"></i>
                </div>
                <a
                  href="https://www.instagram.com/map_robot_entertaimen/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-[#4facec] transition-colors cursor-pointer"
                >
                  @map_robot_entertaimen
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <i className="ri-facebook-fill text-[#4facec]"></i>
                </div>
                <a
                  href="https://www.facebook.com/profile.php?id=100085300897269"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-[#4facec] transition-colors cursor-pointer"
                >
                  MAP Robot Entertainment
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <i className="ri-tiktok-line text-[#4facec]"></i>
                </div>
                <a
                  href="https://www.tiktok.com/@m.a.p.robot"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-[#4facec] transition-colors cursor-pointer"
                >
                  @m.a.p.robot
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <i className="ri-time-line text-[#4facec]"></i>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Siempre Abierto</p>
                  <p className="text-[#4facec] text-xs mt-1">Disponibilidad 24/7 para Eventos</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs font-medium">
            © 2026 MAP Robot Entertainment. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="/site-manager"
              className="text-white/30 text-[10px] hover:text-white/50 transition-colors cursor-pointer"
            >
              Administrador del Sitio
            </a>
            <p className="text-white/50 text-xs font-medium">
              Port Chester, Nueva York — Sirviendo NY, CT, NJ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}