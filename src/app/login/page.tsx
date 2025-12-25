"use client";
import { useState, useEffect } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Validation logic [cite: 11, 12]
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 6;
  const isFormValid = isEmailValid && isPasswordValid;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    // Giả lập lưu token sau khi auth thành công [cite: 15]
    setCookie("access_token", "mock_token_lms", { maxAge: 60 * 60 * 24 });
    router.push("/courses");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-50 dark:bg-slate-950">
      <form onSubmit={handleLogin} className="w-full max-w-sm p-8 bg-white dark:bg-slate-800 rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold dark:text-white">Đăng nhập</h2>
        
        <div className="mb-4">
          <label className="block mb-1 dark:text-gray-300 text-sm">Email [cite: 11]</label>
          <input 
            type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-2 border rounded ${email && !isEmailValid ? 'border-red-500' : ''}`}
            placeholder="intern@example.com"
          />
          {email && !isEmailValid && <p className="text-red-500 text-xs mt-1">Email không hợp lệ</p>}
        </div>

        <div className="mb-6">
          <label className="block mb-1 dark:text-gray-300 text-sm">Mật khẩu [cite: 12]</label>
          <input 
            type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-2 border rounded ${password && !isPasswordValid ? 'border-red-500' : ''}`}
          />
          {password && !isPasswordValid && <p className="text-red-500 text-xs mt-1">Tối thiểu 6 ký tự</p>}
        </div>

        <button 
          disabled={!isFormValid} // Disable khi form invalid [cite: 14]
          className="w-full py-2 bg-blue-600 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
}