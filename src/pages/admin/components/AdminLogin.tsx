import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AdminLogin() {
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    if (pass === "maprobot2026") {
      localStorage.setItem("admin_auth", "1");
      window.location.reload();
    } else {
      setErr("Contraseña incorrecta");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4">
      <form onSubmit={handle} className="w-full max-w-sm bg-[#141414] border border-white/10 rounded-2xl p-8">
        <div className="flex items-center justify-center mb-6">
          <img
            alt="MAP Robot"
            className="h-12 w-auto object-contain"
            src="https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/a27ac3c3-dbf9-4849-83e5-4957e5e94ab3_aff17f747b134ccb95b0c51344fcc99e-1.png?v=560df2c84d57cceb4d73c1fa15a21893"
          />
        </div>
        <h1 className="text-center text-xl font-bold mb-6">Panel de Administración</h1>
        <div className="mb-4">
          <label className="block text-gray-400 text-xs uppercase tracking-wider mb-1.5">Contraseña</label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              value={pass}
              onChange={(e) => { setPass(e.target.value); setErr(""); }}
              onPaste={(e) => {
                const pasted = e.clipboardData.getData("text");
                setPass((prev) => prev + pasted);
                setErr("");
                e.preventDefault();
              }}
              className="w-full bg-[#1a1a1a] border border-white/15 text-white rounded-lg px-4 py-3 pr-12 outline-none focus:border-[#FACC15] transition-all"
              placeholder="Ingresa la contraseña"
              required
            />
            <button
              type="button"
              onClick={() => setShowPass((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors cursor-pointer"
              tabIndex={-1}
            >
              <i className={showPass ? "ri-eye-off-line" : "ri-eye-line"}></i>
            </button>
          </div>
        </div>
        {err && <p className="text-red-400 text-xs mb-4">{err}</p>}
        <button
          type="submit"
          className="w-full bg-[#FACC15] hover:bg-[#E5B314] text-[#111111] font-bold py-3 rounded-lg transition-all cursor-pointer"
        >
          Entrar
        </button>
        <div className="mt-4 text-center">
          <Link to="/" className="text-gray-500 text-xs hover:text-white transition-colors">← Volver al sitio</Link>
        </div>
      </form>
    </div>
  );
}