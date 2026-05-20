import { useState, useEffect, useRef, useCallback } from "react";
import { supabase } from "@/lib/supabase";

interface MediaItem {
  id: number;
  section: string;
  media_type: string;
  url: string;
  filename: string;
  sort_order: number;
  media_key: string | null;
  created_at: string;
}

const SECTIONS = ["INICIO", "NOSOTROS", "SERVICIOS", "CONTACTO"];

const KEY_LABELS: Record<string, string> = {
  "hero-video": "Video Principal (Hero)",
  "about-image": "Imagen Sección Nosotros",
  "services-featured": "Imagen Destacada Servicios",
  "services-card-1": "Tarjeta Servicio: Show Robot LED",
  "services-card-2": "Tarjeta Servicio: Hora Loca",
  "services-card-3": "Tarjeta Servicio: CO2 y Confeti",
  "why-choose-video": "Video ¿Por Qué Elegirnos?",
  "cta-background": "Fondo CTA Principal",
  "final-cta-background": "Fondo CTA Final",
  "footer-logo": "Logo del Footer",
  "about-hero": "Hero Página Nosotros",
  "story-video": "Video Nuestra Historia",
  "cta-banner": "Banner CTA Nosotros",
  "faq-image": "Imagen Sección FAQ",
  "values-image": "Imagen Nuestros Valores",
  "service-robot-led": "Servicio: Show Robot LED",
  "service-hora-loca": "Servicio: Hora Loca",
  "service-quince": "Servicio: 15's Años",
  "service-co2": "Servicio: Bazuca CO2",
  "service-confeti": "Servicio: Confeti",
  "service-party-poppers": "Servicio: Party Poppers",
  "service-bodas": "Servicio: Bodas",
  "service-munecos": "Servicio: Muñecos Cabezones",
  "service-dj": "Servicio: DJ Privado",
  "service-dry-ice": "Servicio: Dry Ice & Niebla Baja",
  "service-chispas": "Servicio: Chispas Frías",
  "service-fotobooth": "Servicio: Photobooth 360",
  "final-cta": "CTA Final Servicios",
  "contact-bg": "Fondo Página Contacto",
  "logo": "Logo Página Contacto",
};

export default function AdminMediaManager() {
  const [activeTab, setActiveTab] = useState("INICIO");
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [previewType, setPreviewType] = useState<string>("image");
  const [replaceId, setReplaceId] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const replaceInputRef = useRef<HTMLInputElement>(null);

  const fetchMedia = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase
      .from("site_media")
      .select("*")
      .eq("section", activeTab)
      .order("sort_order", { ascending: true });
    setItems((data as MediaItem[]) || []);
    setLoading(false);
  }, [activeTab]);

  useEffect(() => {
    fetchMedia();
  }, [fetchMedia]);

  const doUpload = async (file: File, targetId?: number) => {
    setUploading(true);
    const ext = file.name.split(".").pop() || "";
    const mediaType = file.type.startsWith("video") ? "video" : "image";
    const uniqueName = `${activeTab.toLowerCase()}_${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`;

    try {
      const { error: uploadError } = await supabase.storage
        .from("site-media")
        .upload(uniqueName, file, { upsert: true });

      if (uploadError) {
        const objectUrl = URL.createObjectURL(file);
        if (targetId) {
          await supabase
            .from("site_media")
            .update({ url: objectUrl, filename: file.name, media_type: mediaType })
            .eq("id", targetId);
        } else {
          await supabase.from("site_media").insert({
            section: activeTab,
            media_type: mediaType,
            url: objectUrl,
            filename: file.name,
            sort_order: items.length,
          });
        }
      } else {
        const { data: urlData } = supabase.storage
          .from("site-media")
          .getPublicUrl(uniqueName);
        if (targetId) {
          await supabase
            .from("site_media")
            .update({ url: urlData.publicUrl, filename: file.name, media_type: mediaType })
            .eq("id", targetId);
        } else {
          await supabase.from("site_media").insert({
            section: activeTab,
            media_type: mediaType,
            url: urlData.publicUrl,
            filename: file.name,
            sort_order: items.length,
          });
        }
      }
      await fetchMedia();
    } catch (e) {
      console.error("Upload error:", e);
    } finally {
      setUploading(false);
      setReplaceId(null);
    }
  };

  const handleUpload = async (file: File) => {
    await doUpload(file);
  };

  const handleReplaceUpload = async (file: File) => {
    if (replaceId) {
      await doUpload(file, replaceId);
    }
  };

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const files = Array.from(e.dataTransfer.files);
      files.forEach((file) => {
        if (file.type.startsWith("image/") || file.type.startsWith("video/")) {
          handleUpload(file);
        }
      });
    },
    [activeTab, items.length]
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => setDragOver(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      if (file.type.startsWith("image/") || file.type.startsWith("video/")) {
        handleUpload(file);
      }
    });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleReplaceFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      if (file.type.startsWith("image/") || file.type.startsWith("video/")) {
        handleReplaceUpload(file);
      }
    });
    if (replaceInputRef.current) replaceInputRef.current.value = "";
  };

  const triggerReplace = (id: number) => {
    setReplaceId(id);
    setTimeout(() => replaceInputRef.current?.click(), 0);
  };

  const handleDelete = async (id: number) => {
    await supabase.from("site_media").delete().eq("id", id);
    await fetchMedia();
  };

  const handleUpdateUrl = async (id: number, newUrl: string) => {
    await supabase.from("site_media").update({ url: newUrl }).eq("id", id);
    await fetchMedia();
  };

  const openPreview = (url: string, type: string) => {
    setPreviewUrl(url);
    setPreviewType(type);
  };

  const closePreview = () => {
    setPreviewUrl(null);
  };

  const getLabel = (item: MediaItem) => {
    if (item.media_key && KEY_LABELS[item.media_key]) {
      return KEY_LABELS[item.media_key];
    }
    return item.filename || "Sin nombre";
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#0d0d0d]">
      <input
        ref={replaceInputRef}
        type="file"
        accept="image/*,video/*"
        className="hidden"
        onChange={handleReplaceFileSelect}
      />
      <div className="flex items-center gap-3 px-6 pt-6 pb-2">
        <div className="w-8 h-8 flex items-center justify-center bg-[#FACC15]/15 rounded-lg">
          <i className="ri-image-line text-[#FACC15] text-lg"></i>
        </div>
        <div>
          <h2 className="text-white font-bold text-base leading-tight">Media Manager</h2>
          <p className="text-gray-500 text-xs">Sube y gestiona imágenes y videos por sección</p>
        </div>
      </div>

      {/* Section Tabs */}
      <div className="px-6 py-3 flex gap-2 overflow-x-auto">
        {SECTIONS.map((sec) => (
          <button
            key={sec}
            onClick={() => setActiveTab(sec)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
              activeTab === sec
                ? "bg-[#FACC15] text-[#111111]"
                : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
            }`}
          >
            {sec}
          </button>
        ))}
      </div>

      {/* Drop Zone */}
      <div className="px-6 pb-3">
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
          className={`w-full border-2 border-dashed rounded-xl px-6 py-8 flex flex-col items-center justify-center cursor-pointer transition-all ${
            dragOver
              ? "border-[#FACC15] bg-[#FACC15]/5"
              : "border-white/15 bg-[#111111] hover:border-white/30"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,video/*"
            className="hidden"
            onChange={handleFileSelect}
          />
          <div className="w-12 h-12 flex items-center justify-center bg-[#FACC15]/15 rounded-full mb-3">
            <i className="ri-upload-cloud-2-line text-[#FACC15] text-xl"></i>
          </div>
          <p className="text-white text-sm font-medium">
            {uploading ? "Subiendo..." : "Arrastra imágenes o videos aquí, o haz click para seleccionar"}
          </p>
          <p className="text-gray-500 text-xs mt-1">Soporta JPG, PNG, GIF, MP4, WebM</p>
        </div>
      </div>

      {/* Media Grid */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {loading ? (
          <div className="flex items-center justify-center h-full text-gray-500 text-sm">
            <i className="ri-loader-4-line animate-spin mr-2"></i> Cargando...
          </div>
        ) : items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <i className="ri-image-line text-4xl mb-2 opacity-30"></i>
            <p className="text-sm">No hay archivos en esta sección</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-[#161616] border border-white/10 rounded-xl overflow-hidden group hover:border-[#FACC15]/30 transition-all"
              >
                <div className="relative w-full h-40 bg-black/50">
                  {item.media_type === "video" ? (
                    <video
                      src={item.url}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img
                      src={item.url}
                      alt={getLabel(item)}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      onClick={() => openPreview(item.url, item.media_type)}
                      className="w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors cursor-pointer"
                      title="Ver tamaño completo"
                    >
                      <i className="ri-fullscreen-line text-sm"></i>
                    </button>
                    <a
                      href={item.url}
                      download={item.filename}
                      className="w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors cursor-pointer"
                      title="Descargar"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-download-line text-sm"></i>
                    </a>
                  </div>
                  {item.media_type === "video" && (
                    <div className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      VIDEO
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <p className="text-white text-xs font-semibold truncate mb-0.5" title={getLabel(item)}>
                    {getLabel(item)}
                  </p>
                  {item.media_key && (
                    <p className="text-[#4facec] text-[10px] font-mono mb-2 truncate" title={item.media_key}>
                      key: {item.media_key}
                    </p>
                  )}
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      defaultValue={item.url}
                      onBlur={(e) => {
                        if (e.target.value !== item.url) {
                          handleUpdateUrl(item.id, e.target.value);
                        }
                      }}
                      className="flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-gray-400 text-[11px] outline-none focus:border-[#FACC15]/40 transition-all"
                      placeholder="URL del archivo..."
                    />
                    <button
                      onClick={() => triggerReplace(item.id)}
                      className="w-7 h-7 flex items-center justify-center bg-[#FACC15]/15 hover:bg-[#FACC15]/30 rounded-lg text-[#FACC15] transition-colors cursor-pointer shrink-0"
                      title="Cambiar archivo"
                    >
                      <i className="ri-exchange-line text-xs"></i>
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="w-7 h-7 flex items-center justify-center bg-red-500/15 hover:bg-red-500/30 rounded-lg text-red-400 transition-colors cursor-pointer shrink-0"
                      title="Eliminar"
                    >
                      <i className="ri-delete-bin-line text-xs"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Preview Modal */}
      {previewUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closePreview}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center">
            <button
              onClick={closePreview}
              className="absolute -top-10 right-0 w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white cursor-pointer"
            >
              <i className="ri-close-line"></i>
            </button>
            {previewType === "video" ? (
              <video
                src={previewUrl}
                controls
                autoPlay
                className="max-w-full max-h-[80vh] rounded-lg"
              />
            ) : (
              <img
                src={previewUrl}
                alt="Preview"
                className="max-w-full max-h-[80vh] rounded-lg object-contain"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}