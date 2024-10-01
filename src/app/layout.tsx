import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Amania Bio Arquitectura",
  description: "Página del estudio de arquitectura de la Arquitecta Ana Maria Zienka Hogan",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
