import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import messages from "@/i18n/local/index";

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => Promise<void>;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const STORAGE_KEY = "map_language_selected";

function getInitialLanguage(): string {
  const stored = localStorage.getItem("i18nextLng");
  if (stored) return stored.startsWith("en") ? "en" : "es";
  return "es";
}

function getInitialSelected(): boolean {
  return localStorage.getItem(STORAGE_KEY) === "true";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLang] = useState(getInitialLanguage);

  const setLanguage = useCallback(async (lang: string) => {
    localStorage.setItem("i18nextLng", lang);
    setLang(lang);
  }, []);

  const t = useCallback(
    (key: string) => {
      const ns = messages[language]?.common;
      return ns?.[key] || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}