import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

export default function UserAuthMenu() {
  const [open, setOpen] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authTab, setAuthTab] = useState<"login" | "signup">("login");
  const [user, setUser] = useState<any>(null);
  const [adminUser, setAdminUser] = useState("");
  const [adminPass, setAdminPass] = useState("");
  const [adminErr, setAdminErr] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [authErr, setAuthErr] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [authSuccess, setAuthSuccess] = useState("");

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

  const getRedirectUrl = () => {
    const base = __BASE_PATH__ || "";
    const origin = window.location.origin;
    return `${origin}${base}/`;
  };

  const handleGoogleSignIn = async () => {
    setOpen(false);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: getRedirectUrl() },
    });
    if (error) {
      setAuthErr("Error al conectar con Google. Verifica la configuración de Supabase.");
      setShowAuthModal(true);
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthErr("");
    setAuthSuccess("");
    setAuthLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setAuthLoading(false);

    if (error) {
      setAuthErr(error.message === "Invalid login credentials"
        ? "Correo o contraseña incorrectos"
        : error.message);
    } else {
      setShowAuthModal(false);
      setEmail("");
      setPassword("");
    }
  };

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthErr("");
    setAuthSuccess("");
    setAuthLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    });
    setAuthLoading(false);

    if (error) {
      setAuthErr(error.message);
    } else {
      setAuthSuccess("¡Cuenta creada! Revisa tu correo para confirmar tu cuenta.");
      setEmail("");
      setPassword("");
      setFullName("");
    }
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

  const openAuth = (tab: "login" | "signup") => {
    setOpen(false);
    setAuthTab(tab);
    setAuthErr("");
    setAuthSuccess("");
    setEmail("");
    setPassword("");
    setFullName("");
    setShowAuthModal(true);
  };

  return (
    <>
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setOpen(!open)}
          className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-[#4facec]/50 text-white transition-all cursor-pointer"
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
          <div className="absolute right-0 top-12 w-64 bg-[#141414] border border-white/15 rounded-xl shadow-2xl py-2 z-50 overflow-hidden">
            {user ? (
              <>
                <div className="px-4 py-3 border-b border-white/10">
                  <p className="text-white text-sm font-semibold truncate">
                    {user.user_metadata?.full_name || user.email || "Usuario"}
                  </p>
                  <p className="text-gray-500 text-xs truncate">{user.email}</p>
                </div>
                <div className="px-3 py-2">
                  <button
                    onClick={handleSignOut}
                    className="w-full group flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[#1a1a1a] to-[#1a1a1a] border border-white/10 hover:border-red-500/40 hover:from-red-500/10 hover:to-red-500/5 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-red-500/15 group-hover:bg-red-500/25 transition-colors">
                      <i className="ri-logout-box-r-line text-red-400 text-lg group-hover:text-red-500 transition-colors"></i>
                    </div>
                    <div className="text-left">
                      <p className="text-white text-sm font-semibold">Cerrar sesión</p>
                      <p className="text-gray-500 text-[11px]">Salir de tu cuenta</p>
                    </div>
                    <i className="ri-arrow-right-s-line text-gray-600 group-hover:text-red-400 ml-auto transition-colors"></i>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="border-t border-white/10 my-1"></div>
                <div className="px-3 pb-2 space-y-2">
                  <button
                    onClick={handleGoogleSignIn}
                    className="w-full group flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[#1a1a1a] to-[#1a1a1a] border border-white/10 hover:border-[#DB4437]/40 hover:from-[#DB4437]/10 hover:to-[#DB4437]/5 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#DB4437]/15 group-hover:bg-[#DB4437]/25 transition-colors">
                      <i className="ri-google-fill text-[#DB4437] text-lg"></i>
                    </div>
                    <div className="text-left">
                      <p className="text-white text-sm font-semibold">Iniciar con Google</p>
                      <p className="text-gray-500 text-[11px]">Accede con tu cuenta Google</p>
                    </div>
                    <i className="ri-arrow-right-s-line text-gray-600 group-hover:text-[#DB4437] ml-auto transition-colors"></i>
                  </button>

                  <button
                    onClick={() => openAuth("login")}
                    className="w-full group flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[#1a1a1a] to-[#1a1a1a] border border-white/10 hover:border-[#4facec]/40 hover:from-[#4facec]/10 hover:to-[#4facec]/5 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#4facec]/15 group-hover:bg-[#4facec]/25 transition-colors">
                      <i className="ri-mail-line text-[#4facec] text-lg"></i>
                    </div>
                    <div className="text-left">
                      <p className="text-white text-sm font-semibold">Entrar con correo</p>
                      <p className="text-gray-500 text-[11px]">Email y contraseña</p>
                    </div>
                    <i className="ri-arrow-right-s-line text-gray-600 group-hover:text-[#4facec] ml-auto transition-colors"></i>
                  </button>

                  <button
                    onClick={() => {
                      setOpen(false);
                      setShowAdminModal(true);
                      setAdminErr("");
                    }}
                    className="w-full group flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[#1a1a1a] to-[#1a1a1a] border border-white/10 hover:border-[#FACC15]/40 hover:from-[#FACC15]/10 hover:to-[#FACC15]/5 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#FACC15]/15 group-hover:bg-[#FACC15]/25 transition-colors">
                      <i className="ri-shield-user-line text-[#FACC15] text-lg"></i>
                    </div>
                    <div className="text-left">
                      <p className="text-white text-sm font-semibold">Panel de Administrador</p>
                      <p className="text-gray-500 text-[11px]">Gestión del sitio web</p>
                    </div>
                    <i className="ri-arrow-right-s-line text-gray-600 group-hover:text-[#FACC15] ml-auto transition-colors"></i>
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Email/Password Auth Modal */}
      {showAuthModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowAuthModal(false);
          }}
        >
          <div className="w-full max-w-sm bg-[#141414] border border-white/10 rounded-2xl p-8 relative">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/5"
            >
              <i className="ri-close-line text-lg"></i>
            </button>

            <div className="flex items-center justify-center mb-5">
              <img
                alt="MAP Robot Entertainment"
                className="h-12 w-auto object-contain"
                src="https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/a27ac3c3-dbf9-4849-83e5-4957e5e94ab3_aff17f747b134ccb95b0c51344fcc99e-1.png?v=560df2c84d57cceb4d73c1fa15a21893"
              />
            </div>

            <h2 className="text-center text-white text-xl font-bold mb-1">
              {authTab === "login" ? "Bienvenido de Vuelta" : "Crear Cuenta"}
            </h2>
            <p className="text-center text-gray-500 text-sm mb-6">
              {authTab === "login"
                ? "Ingresa tu correo y contraseña para continuar"
                : "Regístrate para acceder a tu cuenta"}
            </p>

            {/* Tabs */}
            <div className="flex bg-[#1a1a1a] rounded-xl p-1 mb-6">
              <button
                onClick={() => { setAuthTab("login"); setAuthErr(""); setAuthSuccess(""); }}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                  authTab === "login"
                    ? "bg-[#4facec] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Entrar
              </button>
              <button
                onClick={() => { setAuthTab("signup"); setAuthErr(""); setAuthSuccess(""); }}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                  authTab === "signup"
                    ? "bg-[#4facec] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Registrarse
              </button>
            </div>

            <form
              onSubmit={authTab === "login" ? handleEmailSignIn : handleEmailSignUp}
              className="flex flex-col gap-4"
            >
              {authTab === "signup" && (
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-wider mb-1.5">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => { setFullName(e.target.value); setAuthErr(""); }}
                    className="w-full bg-[#1a1a1a] border border-white/15 text-white rounded-lg px-4 py-3 outline-none focus:border-[#4facec] transition-all text-sm"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
              )}
              <div>
                <label className="block text-gray-500 text-xs uppercase tracking-wider mb-1.5">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setAuthErr(""); }}
                  className="w-full bg-[#1a1a1a] border border-white/15 text-white rounded-lg px-4 py-3 outline-none focus:border-[#4facec] transition-all text-sm"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-500 text-xs uppercase tracking-wider mb-1.5">
                  Contraseña
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setAuthErr(""); }}
                  className="w-full bg-[#1a1a1a] border border-white/15 text-white rounded-lg px-4 py-3 outline-none focus:border-[#4facec] transition-all text-sm"
                  placeholder="Mínimo 6 caracteres"
                  minLength={6}
                  required
                />
              </div>

              {authErr && (
                <p className="text-red-400 text-xs flex items-center gap-1">
                  <i className="ri-error-warning-line"></i>
                  {authErr}
                </p>
              )}
              {authSuccess && (
                <p className="text-green-400 text-xs flex items-center gap-1">
                  <i className="ri-check-line"></i>
                  {authSuccess}
                </p>
              )}

              <button
                type="submit"
                disabled={authLoading}
                className="w-full bg-[#4facec] hover:bg-[#3d9ce6] disabled:opacity-60 text-white font-bold py-3 rounded-lg transition-all cursor-pointer text-sm flex items-center justify-center gap-2"
              >
                {authLoading ? (
                  <>
                    <i className="ri-loader-4-line animate-spin"></i>
                    Procesando...
                  </>
                ) : authTab === "login" ? (
                  <>
                    <i className="ri-login-box-line"></i>
                    Entrar a Mi Cuenta
                  </>
                ) : (
                  <>
                    <i className="ri-user-add-line"></i>
                    Crear Mi Cuenta
                  </>
                )}
              </button>
            </form>

            <div className="mt-5 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setShowAuthModal(false);
                  handleGoogleSignIn();
                }}
                className="w-full group flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[#1a1a1a] to-[#1a1a1a] border border-white/10 hover:border-[#DB4437]/40 hover:from-[#DB4437]/10 hover:to-[#DB4437]/5 transition-all duration-300 cursor-pointer"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#DB4437]/15 group-hover:bg-[#DB4437]/25 transition-colors">
                  <i className="ri-google-fill text-[#DB4437] text-lg"></i>
                </div>
                <div className="text-left">
                  <p className="text-white text-sm font-semibold">Continuar con Google</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

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