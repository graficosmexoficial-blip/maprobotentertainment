import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

export default function UserAuthMenu() {
  const [open, setOpen] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [adminUser, setAdminUser] = useState("");
  const [adminPass, setAdminPass] = useState("");
  const [adminErr, setAdminErr] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session?.user) setUser(data.session.user);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const handleGoogleSignIn = async () => {
    setOpen(false);
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };

  const handleSignOut = async () => {
    setOpen(false);
    await supabase.auth.signOut();
    setUser(null);
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAdminErr("");
    if (adminUser === "admin" && adminPass === "maprobot2026") {
      localStorage.setItem("admin_auth", "1");
      setShowAdminModal(false);
      navigate("/admin");
    } else {
      setAdminErr("Usuario o contraseña incorrectos");
    }
  };

  return (
    <>
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all cursor-pointer"
          aria-label="Menú de usuario"
        >
          {user?.user_metadata?.avatar_url ? (
            <img
              src={user.user_metadata.avatar_url}
              alt="Avatar"
              className="w-9 h-9 rounded-full object-cover"
            />
          ) : (
            <i className="ri-user-3-line text-lg"></i>
          )}
        </button>

        {open && (
          <div className="absolute right-0 top-12 w-56 bg-[#141414] border border-white/15 rounded-xl shadow-2xl py-2 z-50 overflow-hidden">
            {user ? (
              <>
                <div className="px-4 py-3 border-b border-white/10">
                  <p className="text-white text-sm font-semibold truncate">
                    {user.user_metadata?.full_name || user.email || "Usuario"}
                  </p>
                  <p className="text-gray-500 text-xs truncate">{user.email}</p>
                </div>
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 text-sm transition-colors cursor-pointer flex items-center gap-2"
                >
                  <i className="ri-logout-box-r-line"></i>
                  Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleGoogleSignIn}
                  className="w-full text-left px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 text-sm transition-colors cursor-pointer flex items-center gap-2"
                >
                  <i className="ri-google-fill text-[#DB4437]"></i>
                  Iniciar sesión con Google
                </button>
                <div className="border-t border-white/10 my-1"></div>
                <button
                  onClick={() => {
                    setOpen(false);
                    setShowAdminModal(true);
                    setAdminErr("");
                  }}
                  className="w-full text-left px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 text-sm transition-colors cursor-pointer flex items-center gap-2"
                >
                  <i className="ri-shield-user-line text-[#FACC15]"></i>
                  Iniciar como Administrador
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* Admin Login Modal */}
      {showAdminModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowAdminModal(false);
          }}
        >
          <div className="w-full max-w-sm bg-[#141414] border border-white/10 rounded-2xl p-8 relative">
            <button
              onClick={() => setShowAdminModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/5"
            >
              <i className="ri-close-line text-lg"></i>
            </button>

            <div className="flex items-center justify-center mb-6">
              <img
                alt="MAP Robot Entertainment"
                className="h-12 w-auto object-contain"
                src="https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/a27ac3c3-dbf9-4849-83e5-4957e5e94ab3_aff17f747b134ccb95b0c51344fcc99e-1.png?v=560df2c84d57cceb4d73c1fa15a21893"
              />
            </div>

            <h2 className="text-center text-white text-xl font-bold mb-1">
              Acceso de Administrador
            </h2>
            <p className="text-center text-gray-500 text-sm mb-6">
              Ingresa tus credenciales para continuar
            </p>

            <form onSubmit={handleAdminLogin} className="flex flex-col gap-4">
              <div>
                <label className="block text-gray-500 text-xs uppercase tracking-wider mb-1.5">
                  Usuario
                </label>
                <input
                  type="text"
                  value={adminUser}
                  onChange={(e) => {
                    setAdminUser(e.target.value);
                    setAdminErr("");
                  }}
                  className="w-full bg-[#1a1a1a] border border-white/15 text-white rounded-lg px-4 py-3 outline-none focus:border-[#FACC15] transition-all text-sm"
                  placeholder="admin"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-500 text-xs uppercase tracking-wider mb-1.5">
                  Contraseña
                </label>
                <input
                  type="password"
                  value={adminPass}
                  onChange={(e) => {
                    setAdminPass(e.target.value);
                    setAdminErr("");
                  }}
                  className="w-full bg-[#1a1a1a] border border-white/15 text-white rounded-lg px-4 py-3 outline-none focus:border-[#FACC15] transition-all text-sm"
                  placeholder="••••••••"
                  required
                />
              </div>

              {adminErr && (
                <p className="text-red-400 text-xs flex items-center gap-1">
                  <i className="ri-error-warning-line"></i>
                  {adminErr}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-[#FACC15] hover:bg-[#E5B314] text-[#111111] font-bold py-3 rounded-lg transition-all cursor-pointer text-sm"
              >
                Entrar al Panel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}