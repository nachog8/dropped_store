import type { Metadata } from "next"; // Importa el tipo Metadata para definir los metadatos de la página
import { Inter } from "next/font/google"; // Importa la fuente Inter desde Google Fonts
import { ClerkProvider } from "@clerk/nextjs"; // Importa el proveedor Clerk para la autenticación

import "../globals.css";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import Footer from "@/components/Footer";

// Crea una instancia de la fuente Inter
const inter = Inter({ subsets: ["latin"] });

// Define los metadatos de la página
export const metadata: Metadata = {
  title: "Dropped Store",
  description: "Dropped Ecommerce Store",
};

// Componente principal que envuelve toda la aplicación
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <ToasterProvider />
          <Navbar />
          {children}
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
