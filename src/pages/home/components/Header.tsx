import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import UserAuthMenu from "@/components/feature/UserAuthMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";

  const scrollToSection = (id: string) => {
    if (!isHome) return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const navLinkClass = (active?: boolean) =>
    `text-lg font-bold tracking-wider whitespace-nowrap transition-colors duration-200 cursor-pointer ${
      active ? "text-[#4facec]" : "text-white hover:text-[#4facec]"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#0d0d0d] shadow-lg`}
    >
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-28">
          <Link to="/" className="flex items-center cursor-pointer">
            <img
              alt="MAP Robot Entertainment"
              className="h-20 w-auto object-contain rounded-lg"
              src="https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/a27ac3c3-dbf9-4849-83e5-4957e5e94ab3_aff17f747b134ccb95b0c51344fcc99e-1.png?v=560df2c84d57cceb4d73c1fa15a21893"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            <Link to="/" className={navLinkClass(location.pathname === "/")}>
              INICIO
            </Link>
            <Link
              to="/about"
              className={navLinkClass(location.pathname === "/about")}
            >
              NOSOTROS
            </Link>
            <Link
              to="/services"
              className={navLinkClass(location.pathname === "/services")}
            >
              SERVICIOS
            </Link>
            <Link
              to="/contact"
              className={navLinkClass(location.pathname === "/contact")}
            >
              CONTACTO
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/19145272616"
              className="flex items-center gap-2 whitespace-nowrap bg-[#4facec] hover:bg-[#3d9ce6] text-white text-lg font-bold px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer"
            >
              <i className="ri-phone-line"></i> (914) 527-2616
            </a>
            <UserAuthMenu />
          </div>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer text-white"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <i className="text-2xl ri-menu-line"></i>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-white/10 px-4 pb-6 pt-4">
          <nav className="flex flex-col gap-4">
            <Link to="/" className="text-white text-base font-semibold" onClick={() => setMobileOpen(false)}>Inicio</Link>
            <Link to="/about" className="text-white text-base font-semibold" onClick={() => setMobileOpen(false)}>Nosotros</Link>
            <Link to="/services" className="text-white text-base font-semibold" onClick={() => setMobileOpen(false)}>Servicios</Link>
            <Link to="/contact" className="text-white text-base font-semibold" onClick={() => setMobileOpen(false)}>Contacto</Link>
            <a href="tel:+19145272616" className="flex items-center gap-2 whitespace-nowrap bg-[#4facec] text-white font-bold px-5 py-3 rounded-full cursor-pointer w-fit">
              <i className="ri-phone-line"></i> (914) 527-2616
            </a>
            <div className="mt-2">
              <UserAuthMenu />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}