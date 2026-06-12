import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import Sidebar from "./components/Sidebar";
import EditorPanel from "./components/EditorPanel";
import { STORAGE_BASE } from "@/lib/storage";

export default function SiteManager() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState("hero-stats");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const auth = localStorage.getItem("site_manager_auth");
      if (auth === "1") {
        setLoggedIn(true);
      }
    } catch (e) {
      // localStorage not available
    }
    setReady(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("site_manager_auth");
    setLoggedIn(false);
  };

  const goToSite = () => {
    window.location.href = window.location.origin + window.location.pathname;
  };

  if (!ready) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center text-white">
        <p>Cargando panel de administración...</p>
      </div>
    );
  }

  if (!loggedIn) {
    return <LoginForm onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div className="h-screen bg-[#0d0d0d] text-white flex flex-col overflow-hidden">
      {/* Top bar with logo */}
      <header className="h-14 bg-[#111111] border-b border-white/10 flex items-center justify-between px-5 shrink-0">
        <div className="flex items-center gap-3">
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

      {/* Main */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeSection={activeSection} onSelect={setActiveSection} />
        <EditorPanel activeSection={activeSection} />
      </div>
    </div>
  );
}