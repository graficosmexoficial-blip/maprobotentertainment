import { useState } from "react";
import { STORAGE_BASE } from "@/lib/storage";

interface LoginFormProps {
  onLogin: () => void;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "maprobot2024") {
      localStorage.setItem("site_manager_auth", "1");
      onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-4">
      <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <img
            alt="MAP Robot Entertainment"
            className="h-16 w-auto object-contain"
            src={`${STORAGE_BASE}/logo.png`}
          />
        </div>
        <h3 className="text-xl font-extrabold text-white text-center mb-1">
          Owner Portal
        </h3>
        <p className="text-gray-400 text-sm text-center mb-6">
          Sign in to manage your website content
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <button
            type="submit"
            className="w-full bg-[#FACC15] hover:bg-[#E5B314] text-[#111111] font-bold py-3 rounded-full transition-colors cursor-pointer"
          >
            Sign In with Email
          </button>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-white/10"></div>
            <span className="flex-shrink-0 mx-4 text-gray-500 text-xs">or</span>
            <div className="flex-grow border-t border-white/10"></div>
          </div>

          <input
            type="text"
            placeholder="Username"
            className="w-full bg-[#0d0d0d] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FACC15] transition-colors"
          />
          <input
            type={showPass ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            onPaste={(e) => {
              const pasted = e.clipboardData.getData("text");
              setPassword((prev) => prev + pasted);
              setError(false);
              e.preventDefault();
            }}
            placeholder="Password"
            className="w-full bg-[#0d0d0d] border border-white/10 rounded-lg px-4 py-3 pr-12 text-white text-sm focus:outline-none focus:border-[#FACC15] transition-colors"
          />
          <button
            type="button"
            onClick={() => setShowPass((s) => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors cursor-pointer"
            tabIndex={-1}
          >
            <i className={showPass ? "ri-eye-off-line" : "ri-eye-line"}></i>
          </button>
          {error && (
            <p className="text-red-400 text-xs text-center">
              Incorrect password. Try again.
            </p>
          )}
          <button
            type="submit"
            className="w-full border border-white/20 hover:border-white/40 text-gray-300 hover:text-white font-semibold py-3 rounded-full transition-colors cursor-pointer text-sm"
          >
            Sign In with Password
          </button>
        </form>

        <p className="text-gray-600 text-xs text-center mt-4">
          CMS powered by your database
        </p>
      </div>
    </div>
  );
}