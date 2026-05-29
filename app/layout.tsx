import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import logo from "@/public/brand/isotipo3.png"
import "./globals.css";

import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "GrowthFlow - Escala tu marca y atrae clientes",
  description: "Agencia de Marketing Digital, Desarrollo de Software a la medida, Consultoría y Automatización.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>
        <main className="min-h-screen bg-gradient-to-b from-black via-[#0b0b0b] to-black text-white flex flex-col">
          {/* Navbar */}
          <header className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image src={logo} alt="GrowthFlow" className="h-8 w-auto" />
                <span className="text-sm tracking-widest text-white/70">GROWTHFLOW</span>
              </div>
              <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
                <a href="#servicios" className="hover:text-white transition">Servicios</a>
                <a href="#metodo" className="hover:text-white transition">Método</a>
                <a href="#casos" className="hover:text-white transition">Casos</a>
                <a href="#faq" className="hover:text-white transition">FAQ</a>
              </nav>
              <a href="#cta" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-4 py-2 rounded-xl shadow-lg shadow-orange-500/30 transition">
                Agenda tu llamada
              </a>
            </div>
          </header>

          {children}

          {/* Footer */}
          <footer className="py-10 px-6 border-t border-white/10 text-white/60 text-sm mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Image src={logo} alt="GrowthFlow" className="h-6 w-auto" />
                <span>© {new Date().getFullYear()} GrowthFlow</span>
              </div>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-white transition">Aviso de privacidad</a>
                <a href="#" className="hover:text-white transition">Términos</a>
              </div>
            </div>
          </footer>
        </main>
      </body>
      <Analytics/>
    </html>
  );
}
