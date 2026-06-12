import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import AdminSidebar from "./components/AdminSidebar";
import AdminEditor from "./components/AdminEditor";
import AdminMediaManager from "./components/AdminMediaManager";
import { STORAGE_BASE } from "@/lib/storage";

export default function AdminPage() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState("hero-stats");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const auth = localStorage.getItem("admin_auth");
      if (auth === "1") {
        setLoggedIn(true);
      }
    } catch (e) {
      // localStorage not available
    }
    setReady(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    setLoggedIn(false);
    navigate("/");
  };

  const goToSite = () => {
    navigate("/");
  };

  if (!ready) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center text-white">
        <p>Cargando panel de administración...</p>
      </div>
    );
  }

  if (!loggedIn) {
    return <AdminLogin />;
  }

  return (
    <div className="h-screen bg-[#0d0d0d] text-white flex flex-col overflow-hidden">
      <header className="h-14 bg-[#111111] border-b border-white/10 flex items-center justify-between px-5 shrink-0">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            alt="MAP Robot Entertainment"
            className="h-8 w-auto object-contain"
            src={`${STORAGE_BASE}/logo.png`}
          />
          <span className="font-bold text-sm tracking-wide text-white">Website Manager</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={goToSite}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-xs font-medium transition-colors cursor-pointer px-4 py-2 rounded-full border border-white/20 hover:border-white/40"
          >
            <i className="ri-external-link-line"></i> View Site
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-xs font-medium transition-colors cursor-pointer px-4 py-2 rounded-full border border-white/20 hover:border-white/40"
          >
            <i className="ri-logout-box-r-line"></i> Sign Out
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <AdminSidebar activeSection={activeSection} onSelect={setActiveSection} />
        {activeSection === "media" ? (
          <AdminMediaManager />
        ) : (
          <AdminEditor activeSection={activeSection} />
        )}
      </div>
    </div>
  );
}