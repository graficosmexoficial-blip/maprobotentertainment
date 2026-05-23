import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSelector() {
  const [visible, setVisible] = useState(false);
  const { setLanguage } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleSelect = async (lang: string) => {
    await setLanguage(lang);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-[#111111] border border-white/10 rounded-2xl p-8 md:p-10 max-w-md w-[90%] mx-auto text-center shadow-2xl">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close"
        >
          <i className="ri-close-line text-xl" />
        </button>

        <div className="w-14 h-14 flex items-center justify-center bg-[#FACC15]/20 rounded-full mx-auto mb-5">
          <i className="ri-global-line text-[#4facec] text-2xl" />
        </div>

        <h2 className="text-xl md:text-2xl font-extrabold text-white mb-2">
          Choose Your Language
        </h2>
        <p className="text-gray-400 text-sm mb-8">
          Selecciona tu idioma / Select your language
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => handleSelect("es")}
            className="flex-1 flex items-center justify-center gap-3 bg-[#4facec] hover:bg-[#3d9ce6] text-white font-bold px-6 py-4 rounded-xl transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="text-2xl">🇪🇸</span>
            <div className="text-left">
              <p className="text-sm leading-tight">Versión en Español</p>
              <p className="text-xs text-white/70 font-normal">Spanish Version</p>
            </div>
          </button>

          <button
            onClick={() => handleSelect("en")}
            className="flex-1 flex items-center justify-center gap-3 bg-[#1a1a1a] hover:bg-[#222] border border-white/10 text-white font-bold px-6 py-4 rounded-xl transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="text-2xl">🇺🇸</span>
            <div className="text-left">
              <p className="text-sm leading-tight">English Version</p>
              <p className="text-xs text-white/70 font-normal">Versión en Inglés</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}