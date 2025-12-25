import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ThemeProvider } from "next-themes";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AntdRegistry>
          <ThemeProvider attribute="class">
            {children}
          </ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}