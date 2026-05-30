import { useQuote } from "@/contexts/QuoteContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const TITLE_KEYS: Record<string, string> = {
  robot: "service_robot_title",
  hora: "service_hora_title",
  co2: "service_co2_title",
  confeti: "service_confeti_title",
  poppers: "service_poppers_title",
  bodas: "service_bodas_title",
  cabezones: "service_cabezones_title",
  dj: "service_dj_title",
  dryice: "service_dryice_title",
  chispas: "service_chispas_title",
  photobooth: "service_photobooth_title",
  quince: "service_15_title",
};

export default function QuoteCart() {
  const { items, removeItem, itemCount, isPanelOpen, openPanel, closePanel, togglePanel } = useQuote();
  const { t } = useLanguage();
  const navigate = useNavigate();

  if (itemCount === 0 && !isPanelOpen) return null;

  return (
    <>
      {/* Overlay */}
      {isPanelOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300"
          onClick={closePanel}
        />
      )}

      {/* Slide-out Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#111111] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isPanelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <h3 className="text-white font-extrabold text-lg flex items-center gap-2">
            <i className="ri-shopping-cart-2-line text-[#4facec] text-xl" />
            {t("quote_panel_title")} ({itemCount})
          </h3>
          <button
            onClick={closePanel}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-lg" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4" style={{ maxHeight: "calc(100vh - 200px)" }}>
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 flex items-center justify-center bg-white/5 rounded-full mx-auto mb-4">
                <i className="ri-shopping-cart-2-line text-white/30 text-2xl" />
              </div>
              <p className="text-white/50 text-sm">{t("quote_empty")}</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-[#1a1a1a] rounded-xl p-3 border border-white/5 hover:border-[#4facec]/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                    <img
                      src={item.img}
                      alt={t(TITLE_KEYS[item.serviceId] || "") || item.serviceId}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm truncate">
                      {t(TITLE_KEYS[item.serviceId] || "") || item.serviceId}
                    </p>
                    <div className="w-8 h-8 flex items-center justify-center bg-[#4facec]/15 rounded-lg mt-1">
                      <i className={`${item.icon} text-[#4facec] text-sm`} />
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500/15 hover:bg-red-500/30 text-red-400 hover:text-red-300 transition-colors cursor-pointer shrink-0"
                  >
                    <i className="ri-delete-bin-line text-sm" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 px-6 py-4 border-t border-white/10 bg-[#111111]">
            <button
              onClick={() => {
                closePanel();
                navigate("/quote");
              }}
              className="whitespace-nowrap w-full bg-[#4facec] hover:bg-[#3d9ce6] text-white font-bold py-4 rounded-full text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <i className="ri-file-list-3-line" />
              {t("quote_submit_button")}
            </button>
          </div>
        )}
      </div>

      {/* Floating Button */}
      {!isPanelOpen && (
        <button
          onClick={openPanel}
          className="fixed bottom-8 right-6 z-50 w-16 h-16 flex items-center justify-center bg-[#4facec] hover:bg-[#3d9ce6] rounded-full shadow-lg transition-all cursor-pointer hover:scale-110 active:scale-95"
        >
          <i className="ri-shopping-cart-2-line text-white text-2xl" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 w-7 h-7 flex items-center justify-center bg-[#FACC15] text-[#111111] text-xs font-extrabold rounded-full animate-pulse">
              {itemCount}
            </span>
          )}
        </button>
      )}
    </>
  );
}