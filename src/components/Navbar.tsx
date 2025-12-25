"use client";
import { useTheme } from "next-themes";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie("access_token");
    router.push("/login");
  };

  return (
    <nav className="flex items-center justify-between p-4 border-b dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm">
      <Link href="/courses" className="text-xl font-bold text-blue-600">LMS Admin</Link>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-sm"
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
        
        <button 
          onClick={handleLogout}
          className="px-4 py-2 text-sm text-white bg-red-500 rounded-md hover:bg-red-600"
        >
          Đăng xuất
        </button>
      </div>
    </nav>
  );
}