import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fran - Developer & Builder",
  description: "Portfolio personal de Fran - Full Stack Developer enfocado en arquitectura, producto y escalabilidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
