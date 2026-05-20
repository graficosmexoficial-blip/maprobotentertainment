import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";

export default function AuthCallbackPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const code = searchParams.get("code");

    if (!code) {
      setError("No se recibió el código de autorización. Intenta iniciar sesión de nuevo.");
      setLoading(false);
      return;
    }

    supabase.auth
      .exchangeCodeForSession(code)
      .then(({ error: exchangeError }) => {
        setLoading(false);
        if (exchangeError) {
          setError(
            exchangeError.message ||
              "Error al completar el inicio de sesión. Por favor intenta de nuevo."
          );
        } else {
          navigate("/", { replace: true });
        }
      })
      .catch(() => {
        setLoading(false);
        setError("Ocurrió un error inesperado. Intenta de nuevo.");
      });
  }, [searchParams, navigate]);

  if (error) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
        <div className="bg-[#141414] border border-white/10 rounded-2xl p-8 max-w-sm w-full text-center">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-500/15 mx-auto mb-4">
            <i className="ri-error-warning-line text-red-400 text-2xl"></i>
          </div>
          <h2 className="text-white text-lg font-bold mb-2">Algo salió mal</h2>
          <p className="text-gray-400 text-sm mb-6">{error}</p>
          <button
            onClick={() => navigate("/")}
            className="w-full bg-[#4facec] hover:bg-[#3d9ce6] text-white font-bold py-3 rounded-lg transition-all cursor-pointer text-sm"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#4facec]/15 mx-auto mb-4">
          <i className="ri-loader-4-line text-[#4facec] text-2xl animate-spin"></i>
        </div>
        <h2 className="text-white text-lg font-bold mb-1">Completando inicio de sesión...</h2>
        <p className="text-gray-400 text-sm">Estamos conectando tu cuenta de Google</p>
      </div>
    </div>
  );
}