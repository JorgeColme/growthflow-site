import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import logo from "@/public/brand/isotipo3.png"
import "./globals.css";

import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({
}: Readonly<{
  children: React.ReactNode;
}>) {
  const calendly = process.env.NEXT_PUBLIC_CALENDLY_URL || "#"; // ej. https://calendly.com/tu-usuario/estrategia
  // const logo = "../";

  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-gradient-to-b from-black via-[#0b0b0b] to-black text-white">

          {/* Navbar */}
          <header className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image src={logo} alt="GrowthFlow" className="h-8 w-auto" />
                <span className="text-sm tracking-widest text-white/70">GROWTHFLOW</span>
              </div>
              <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
                <a href="#servicios" className="hover:text-white">Servicios</a>
                <a href="#metodo" className="hover:text-white">Método</a>
                <a href="#casos" className="hover:text-white">Casos</a>
                <a href="#faq" className="hover:text-white">FAQ</a>
              </nav>
              <a href="#cta" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-4 py-2 rounded-xl shadow-lg shadow-orange-500/30">
                Agenda tu llamada
              </a>
            </div>
          </header>

          {/* Hero */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(255,102,0,0.25),transparent_60%)]" />
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl bg-orange-500/30" />
            <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 text-xs text-white/70 mb-6">
                <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" /> Canal y funnels fantasma · Automatización real
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-orange-500">
                  Escala tu marca, atrae clientes y crea libertad
                </span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
                Tráfico pagado + funnels de alto rendimiento + automatización 24/7. Menos adivinanzas, más pacientes y ventas.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#cta" className="px-8 py-4 rounded-2xl bg-orange-500 text-black font-bold shadow-xl shadow-orange-500/40 hover:bg-orange-600">
                  Reserva tu estrategia gratis
                </a>
                <a href="#casos" className="px-8 py-4 rounded-2xl border border-white/20 text-white/90 hover:bg-white/5">
                  Ver casos de éxito
                </a>
              </div>
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl mx-auto">
                {[
                  ['+312%', 'ROI medio'],
                  ['-38%', 'Costo por lead'],
                  ['90 días', 'Time-to-Impact'],
                  ['24/7', 'Automatización']
                ].map(([stat, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 p-4 bg-white/5">
                    <div className="text-3xl font-extrabold text-white">{stat}</div>
                    <div className="text-sm text-white/60">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Social Proof */}
          <section className="py-6 border-t border-b border-white/10 bg-[#0f0f0f]">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-6 opacity-80">
              {['Meta Ads', 'TikTok Ads', 'Google Ads', 'ClickFunnels', 'Zapier · ManyChat'].map(x => (
                <div key={x} className="text-center text-xs tracking-widest text-white/60">{x}</div>
              ))}
            </div>
          </section>

          {/* Beneficios */}
          <section id="beneficios" className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">El problema no es tu servicio… es tu <span className="text-orange-400">sistema</span></h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  ['Poca captación', 'Implementamos funnels y ofertas irresistibles'],
                  ['Publicidad sin control', 'Dashboards y optimización basada en datos'],
                  ['Tiempo perdido', 'Secuencias y cierres automatizados']
                ].map(([pain, sol]) => (
                  <div key={pain} className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg">
                    <div className="text-sm uppercase tracking-wider text-white/60">{pain}</div>
                    <div className="mt-2 text-lg font-semibold text-white">{sol}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* Método */}
          <section id="metodo" className="py-16 px-6 bg-gradient-to-b from-[#0f0f0f] to-black">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-10">Método GrowthFlow</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  ['1. Diagnóstico', 'Audit + estrategia a medida'],
                  ['2. Tráfico Inteligente', 'Meta, TikTok, Google con testing'],
                  ['3. Automatización + Cierre', 'WhatsApp, ManyChat, CRM y follow-up']
                ].map(([title, desc], i) => (
                  <div key={title} className="relative p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="absolute -top-3 -left-3 px-2 py-1 text-xs rounded-full bg-orange-500 text-black font-bold">Paso {i + 1}</div>
                    <div className="text-xl font-bold">{title}</div>
                    <p className="mt-2 text-white/70">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* Servicios */}
          <section id="servicios" className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Servicios que <span className="text-orange-400">rinden</span></h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  ['Tráfico Pagado', 'Meta · TikTok · Google', 'Escala con campañas científicas'],
                  ['Funnels de Alto Rendimiento', 'ClickFunnels · Next.js', 'Convierte clics en clientes'],
                  ['Automatización de Ventas', 'Zapier · ManyChat · WhatsApp', 'Cierra 24/7 sin aumentar horas']
                ].map(([title, stack, desc]) => (
                  <div key={title} className="group p-6 rounded-2xl border border-orange-500/30 bg-gradient-to-br from-white/5 to-transparent hover:border-orange-500/60 hover:shadow-[0_0_30px_rgba(255,102,0,0.35)] transition">
                    <div className="text-xl font-bold mb-1">{title}</div>
                    <div className="text-xs tracking-wider text-white/60">{stack}</div>
                    <p className="mt-3 text-white/80">{desc}</p>
                    <a href="#cta" className="mt-5 inline-block text-orange-400 hover:text-orange-300 font-semibold">Quiero este servicio →</a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Casos de éxito */}
          <section id="casos" className="py-16 px-6 bg-[#0f0f0f]">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Casos de Éxito</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-sm text-white/60">Clínica #{i}</div>
                    <div className="mt-2 text-2xl font-extrabold">+178% leads</div>
                    <p className="mt-2 text-white/70">Optimización de campañas + funnel con WhatsApp y secuencias.</p>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* CTA / Lead Block */}
          <section id="cta" className="py-20 px-6">
            <div className="max-w-5xl mx-auto rounded-3xl p-10 bg-gradient-to-r from-orange-600 to-amber-500 text-black shadow-[0_20px_80px_rgba(255,102,0,0.4)]">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-extrabold">¿Listo para escalar?</h3>
                  <p className="mt-2 text-black/80">Agenda una llamada y te mostramos un plan en 20 minutos.</p>
                  <a href={calendly} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center px-6 py-3 rounded-xl bg-black text-white font-bold hover:bg-neutral-900">Reservar ahora</a>
                </div>
                <form className="space-y-3" action={process.env.NEXT_PUBLIC_LEAD_HOOK_URL} method="POST">
                  <input name="name" placeholder="Nombre" className="w-full px-4 py-3 rounded-xl bg-white/80 border border-black/10 text-black" />
                  <input name="email" type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/80 border border-black/10 text-black" />
                  <input name="whatsapp" placeholder="WhatsApp" className="w-full px-4 py-3 rounded-xl bg-white/80 border border-black/10 text-black" />
                  <button type="submit" className="w-full px-4 py-3 rounded-xl bg-black text-white font-bold hover:bg-neutral-900">Quiero mi estrategia</button>
                </form>
              </div>
            </div>
          </section>


          {/* FAQ */}
          <section id="faq" className="py-16 px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Preguntas Frecuentes</h2>
              <div className="space-y-4">
                {[
                  ['¿Cuánto cuesta?', 'Trabajamos con paquetes y revenue share. Cotizamos tras el diagnóstico.'],
                  ['¿Cuándo veo resultados?', 'Normalmente en 30–90 días dependiendo del punto de partida.'],
                  ['¿Qué necesito para empezar?', 'Oferta clara, disponibilidad para contenido y decisión para escalar.']
                ].map(([q, a]) => (
                  <details key={q} className="group p-4 rounded-2xl bg-white/5 border border-white/10">
                    <summary className="cursor-pointer font-semibold text-white/90">{q}</summary>
                    <p className="mt-2 text-white/70">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>


          {/* Footer */}
          <footer className="py-10 px-6 border-t border-white/10 text-white/60 text-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Image src={logo} alt="GrowthFlow" className="h-6 w-auto" />
                <span>© 2025 GrowthFlow</span>
              </div>
              <div className="flex items-center gap-6">
                <a href="#">Aviso de privacidad</a>
                <a href="#">Términos</a>
              </div>
            </div>
          </footer>
        </main>
      </body>
      <Analytics/>
    </html >
  );
}
