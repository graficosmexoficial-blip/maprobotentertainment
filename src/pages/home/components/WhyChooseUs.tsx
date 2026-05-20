import { useState, useEffect, useRef } from "react";
import { useSiteContent } from "@/hooks/useSiteContent";
import { useSiteMedia } from "@/hooks/useSiteMedia";

export default function WhyChooseUs() {
  const { get } = useSiteContent();
  const { getMedia } = useSiteMedia("INICIO");
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const bars = [
    { label: "Tasa de Satisfacción del Cliente", value: 99 },
    { label: "Tasa de Éxito en Eventos", value: 100 },
    { label: "Puntualidad", value: 98 },
    { label: "Tasa de Recomendación", value: 96 },
  ];

  const videoUrl = getMedia(
    "why-choose-video",
    "https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/7e655407-9d60-49fb-8cdb-c1ecc057ad71_42324-1.mp4?v=3aac3733b68bbf4690f0bb3c9c50c3db"
  );

  return (
    <section className="overflow-hidden" ref={ref}>
      <div className="flex flex-col lg:flex-row min-h-[520px]">
        <div className="relative w-full lg:w-1/2 min-h-[340px] lg:min-h-[520px] bg-black flex items-center justify-center cursor-pointer group" onClick={handlePlayPause}>
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full h-full object-cover object-center"
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          />
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
            <div className="absolute inset-0 bg-black/30"></div>
            <button
              className="relative z-10 w-20 h-20 flex items-center justify-center bg-[#4facec] hover:bg-[#3d9ce6] rounded-full transition-all duration-200 cursor-pointer"
              aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
            >
              <i className={`${isPlaying ? 'ri-pause-fill' : 'ri-play-fill'} text-white text-4xl ml-1`}></i>
            </button>
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
            <span className="bg-black/60 text-white text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
              Performance Real — MAP Robot Entertainment
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-[#1a1a1a] border border-white/10 rounded-2xl flex flex-col justify-center px-8 md:px-10 py-10 m-4 lg:m-0">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#4facec] border border-[#4facec]/40 rounded-full px-4 py-1 mb-5 w-fit">
            {get("home", "whyChooseUs", "badge", "¿Por Qué Elegirnos?")}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-snug mb-4">
            {get("home", "whyChooseUs", "title", "Excelencia en Entretenimiento Respaldada Por Performance Real")}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
            {get("home", "whyChooseUs", "subtitle", "Nuestros resultados hablan por sí solos. En MAP Robot Entertainment nos exigimos los más altos estándares en cada evento — desde los efectos LED que traemos hasta la reacción final de la multitud.")}
          </p>
          <div className="space-y-5">
            {bars.map((bar) => (
              <div key={bar.label}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-300">
                    {bar.label}
                  </span>
                  <span className="text-sm font-extrabold text-[#FACC15]">{bar.value}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-[#0044CC] to-[#4facec] transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${bar.value}%` : "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}