import { useState, useEffect } from "react";
import i18n from "@/i18n";

const STORAGE_KEY = "map_language_selected";

export function hasLanguageBeenSelected(): boolean {
  return localStorage.getItem(STORAGE_KEY) === "true";
}

export function markLanguageSelected(): void {
  localStorage.setItem(STORAGE_KEY, "true");
}

export function getStoredLanguage(): string | null {
  return localStorage.getItem("i18nextLng");
}

export async function setLanguage(lang: string): Promise<void> {
  await i18n.changeLanguage(lang);
  localStorage.setItem("i18nextLng", lang);
  markLanguageSelected();
}

export function useLanguageRerender() {
  const [, forceRender] = useState(0);

  useEffect(() => {
    const handler = () => forceRender((x) => x + 1);
    i18n.on("languageChanged", handler);
    return () => {
      i18n.off("languageChanged", handler);
    };
  }, []);
}