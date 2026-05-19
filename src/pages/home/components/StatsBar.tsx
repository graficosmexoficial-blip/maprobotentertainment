import { useSiteContent } from "@/hooks/useSiteContent";

export default function StatsBar() {
  const { get } = useSiteContent();

  return (
    <div className="w-full bg-[#1a1a1a] border-t-4 border-[#4facec]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
          <div className="flex items-end gap-0.5">
            <span className="text-4xl md:text-5xl font-extrabold text-white">{get("home", "stats", "stat1_value", "5")}</span>
            <span className="text-2xl font-extrabold text-[#FACC15] mb-1">+</span>
          </div>
          <p className="text-[#4facec] font-semibold text-sm mt-1">{get("home", "stats", "stat1_label", "Años de Experiencia")}</p>
          <p className="text-white/50 text-xs mt-1 leading-snug max-w-[160px]">
            {get("home", "stats", "stat1_desc", "Más de 5 años de entretenimiento con robot LED en el área Tri-State")}
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
          <div className="flex items-end gap-0.5">
            <span className="text-4xl md:text-5xl font-extrabold text-white">{get("home", "stats", "stat2_value", "500")}</span>
            <span className="text-2xl font-extrabold text-[#FACC15] mb-1">+</span>
          </div>
          <p className="text-[#4facec] font-semibold text-sm mt-1">{get("home", "stats", "stat2_label", "Eventos Realizados")}</p>
          <p className="text-white/50 text-xs mt-1 leading-snug max-w-[160px]">
            {get("home", "stats", "stat2_desc", "Bodas, clubs, fiestas privadas, eventos corporativos y más")}
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
          <div className="flex items-end gap-0.5">
            <span className="text-4xl md:text-5xl font-extrabold text-white">{get("home", "stats", "stat3_value", "100")}</span>
            <span className="text-2xl font-extrabold text-[#FACC15] mb-1">%</span>
          </div>
          <p className="text-[#4facec] font-semibold text-sm mt-1">{get("home", "stats", "stat3_label", "Satisfacción Garantizada")}</p>
          <p className="text-white/50 text-xs mt-1 leading-snug max-w-[160px]">
            {get("home", "stats", "stat3_desc", "No paramos hasta que tu evento sea inolvidable")}
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
          <div className="flex items-end gap-0.5">
            <span className="text-4xl md:text-5xl font-extrabold text-white">{get("home", "stats", "stat4_value", "4.9")}</span>
          </div>
          <p className="text-[#4facec] font-semibold text-sm mt-1">{get("home", "stats", "stat4_label", "Calificación")}</p>
          <p className="text-white/50 text-xs mt-1 leading-snug max-w-[160px]">
            {get("home", "stats", "stat4_desc", "Basado en reseñas verificadas de clientes en todas las plataformas")}
          </p>
        </div>
      </div>
    </div>
  );
}