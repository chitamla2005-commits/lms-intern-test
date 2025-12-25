import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes"; // Import này

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Bọc ThemeProvider để xử lý Dark/Light mode */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
           <main className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
              {children}
           </main>
        </ThemeProvider>
      </body>
    </html>
  );
}