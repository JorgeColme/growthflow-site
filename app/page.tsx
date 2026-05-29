import Image from "next/image";

export default function Home() {
  const calendly = process.env.NEXT_PUBLIC_CALENDLY_URL || "#"; // ej. https://calendly.com/tu-usuario/estrategia

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(255,102,0,0.25),transparent_60%)]" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl bg-orange-500/30" />
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 text-xs text-white/70 mb-6">
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" /> Marketing · Software · Automatización
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-orange-500">
              Escala tu negocio con tecnología y marketing estratégico
            </span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Soluciones integrales de marketing digital, desarrollo de software a la medida, automatización de procesos y consultoría experta.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#cta" className="px-8 py-4 rounded-2xl bg-orange-500 text-black font-bold shadow-xl shadow-orange-500/40 hover:bg-orange-600 transition">
              Reserva tu estrategia gratis
            </a>
            <a href="#casos" className="px-8 py-4 rounded-2xl border border-white/20 text-white/90 hover:bg-white/5 transition">
              Ver casos de éxito
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl mx-auto">
            {[
              ['+312%', 'ROI medio'],
              ['100%', 'A medida'],
              ['24/7', 'Automatización'],
              ['360°', 'Consultoría']
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
          {['Meta & Google Ads', 'Next.js & React', 'Desarrollo Mobile', 'Make & Zapier', 'Consultoría Estratégica'].map(x => (
            <div key={x} className="text-center text-xs tracking-widest text-white/60 font-medium">{x}</div>
          ))}
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Nuestros <span className="text-orange-400">Servicios</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ['Agencia de Marketing', 'Funnels · Tráfico Pagado · SEO', 'Atrae clientes calificados con campañas científicas y embudos de alta conversión.'],
              ['Desarrollo de Software', 'Apps · Web · Sistemas', 'Creamos aplicaciones móviles y plataformas web a la medida de tus necesidades.'],
              ['Automatización', 'Zapier · Make · IA', 'Optimiza procesos, ahorra horas de trabajo y cierra ventas 24/7 de forma automática.'],
              ['Consultoría', 'Estrategia · Negocios', 'Asesoramiento experto para escalar tu modelo de negocio y dominar el mercado.']
            ].map(([title, stack, desc]) => (
              <div key={title} className="group p-6 rounded-2xl border border-orange-500/30 bg-gradient-to-br from-white/5 to-transparent hover:border-orange-500/60 hover:shadow-[0_0_30px_rgba(255,102,0,0.35)] transition flex flex-col">
                <div className="text-xl font-bold mb-1">{title}</div>
                <div className="text-xs tracking-wider text-orange-200/80 mb-3">{stack}</div>
                <p className="text-white/80 flex-grow">{desc}</p>
                <a href="#cta" className="mt-5 inline-block text-orange-400 hover:text-orange-300 font-semibold transition">Quiero este servicio →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="py-16 px-6 bg-gradient-to-b from-[#0f0f0f] to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">¿Por qué elegir <span className="text-orange-400">GrowthFlow</span>?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ['Soluciones 360°', 'Marketing + Tecnología + Automatización bajo el mismo techo para sincronizar tus resultados.'],
              ['Basado en Datos', 'Decisiones respaldadas por analíticas reales, dashboards interactivos y pruebas A/B contínuas.'],
              ['Desarrollo a Medida', 'No usamos plantillas genéricas. Creamos arquitecturas de software y marketing que tu negocio exige.']
            ].map(([pain, sol]) => (
              <div key={pain} className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 transition">
                <div className="text-sm uppercase tracking-wider text-orange-400/80 font-bold">{pain}</div>
                <div className="mt-3 text-lg text-white/90 leading-relaxed">{sol}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Método */}
      <section id="metodo" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center md:text-left">Nuestro Método</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ['Diagnóstico y Estrategia', 'Auditamos tu negocio, mercado y procesos para trazar un plan de acción a medida.'],
              ['Desarrollo e Implementación', 'Lanzamos tus campañas, construimos tu software y configuramos tus automatizaciones.'],
              ['Escalamiento y Optimización', 'Medimos resultados, iteramos rápidamente y escalamos para maximizar tu ROI.']
            ].map(([title, desc], i) => (
              <div key={title} className="relative p-8 pt-10 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition">
                <div className="absolute -top-4 -left-4 h-10 w-10 flex items-center justify-center rounded-full bg-orange-500 text-black font-extrabold text-lg shadow-lg">
                  {i + 1}
                </div>
                <div className="text-xl font-bold mb-3">{title}</div>
                <p className="text-white/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de éxito */}
      <section id="casos" className="py-20 px-6 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-10 text-center md:text-left">Casos de Éxito Destacados</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* CEDIC SOUC */}
            <div className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between group hover:border-orange-500/50 transition duration-500 shadow-xl">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="text-xs font-bold tracking-wider text-emerald-400 bg-emerald-400/10 px-4 py-1.5 rounded-full uppercase">App Móvil & Web</div>
                  <a href="https://landingpage-souc.vercel.app/" target="_blank" rel="noreferrer" className="text-white/40 group-hover:text-white transition flex items-center gap-1 text-sm font-medium">Visitar Proyecto <span>↗</span></a>
                </div>
                <h3 className="text-3xl font-extrabold mb-3">CEDIC SOUC 2026 | México</h3>
                <p className="text-white/70 mb-6 text-lg leading-relaxed">
                  Desarrollo integral de la aplicación oficial para la Conferencia del Episcopado Mexicano. Diseñada para acompañar a los fieles en el Octavario por la unidad de los cristianos, con una experiencia inmersiva y herramientas litúrgicas.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-white/90">
                    <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-orange-500/20 text-orange-400">✓</span> 
                    Reflexiones Diarias y Modo Audio integrado
                  </li>
                  <li className="flex items-center gap-3 text-white/90">
                    <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-orange-500/20 text-orange-400">✓</span> 
                    Interfaz inmersiva diseñada para la oración
                  </li>
                  <li className="flex items-center gap-3 text-white/90">
                    <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-orange-500/20 text-orange-400">✓</span> 
                    Despliegue exitoso en App Store y Google Play
                  </li>
                </ul>
              </div>
              <a href="https://landingpage-souc.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 text-base font-bold text-black bg-white px-6 py-3 rounded-xl hover:bg-orange-500 transition duration-300">
                Ver Landing Page del Proyecto
              </a>
            </div>

            {/* Placeholder for future case */}
            <div className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-center items-center text-center border-dashed group hover:bg-white/10 transition duration-300">
               <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-500">
                  <span className="text-4xl text-white/40 group-hover:text-orange-400 transition">+</span>
               </div>
               <h3 className="text-2xl font-bold text-white/80 mb-2">Tu proyecto puede ser el próximo</h3>
               <p className="text-white/50 mt-2 max-w-sm text-lg">Agenda una llamada y descubramos cómo podemos llevar tus resultados comerciales o tecnológicos al siguiente nivel.</p>
               <span className="mt-8 px-8 py-3 rounded-xl border border-white/20 text-white/90 group-hover:border-orange-500 group-hover:text-orange-400 transition font-medium">Empezar ahora</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Block */}
      <section id="cta" className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto rounded-[2.5rem] p-8 md:p-14 bg-gradient-to-r from-orange-600 to-amber-500 text-black shadow-[0_20px_80px_rgba(255,102,0,0.3)]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/10 text-black font-semibold text-sm mb-6">
                Consultoría Gratuita
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">¿Listo para escalar tu negocio?</h3>
              <p className="mt-4 text-black/80 text-lg font-medium">Agenda una llamada y te mostraremos un plan de acción para marketing o desarrollo de software en solo 20 minutos.</p>
              <a href={calendly} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center px-8 py-4 rounded-2xl bg-black text-white font-bold text-lg hover:bg-neutral-900 hover:scale-105 transition-all shadow-xl">
                Reservar en Calendly ↗
              </a>
            </div>
            <div className="bg-white/90 p-8 rounded-3xl shadow-xl">
              <h4 className="text-xl font-bold mb-6 text-black">O déjanos tus datos</h4>
              <form className="space-y-4" action={process.env.NEXT_PUBLIC_LEAD_HOOK_URL} method="POST">
                <div>
                  <label className="sr-only" htmlFor="name">Nombre</label>
                  <input id="name" name="name" placeholder="Tu Nombre" className="w-full px-5 py-4 rounded-xl bg-white border border-black/10 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-orange-500 transition shadow-sm" required/>
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="Correo Electrónico" className="w-full px-5 py-4 rounded-xl bg-white border border-black/10 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-orange-500 transition shadow-sm" required/>
                </div>
                <div>
                  <label className="sr-only" htmlFor="whatsapp">WhatsApp</label>
                  <input id="whatsapp" name="whatsapp" placeholder="Número de WhatsApp" className="w-full px-5 py-4 rounded-xl bg-white border border-black/10 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-orange-500 transition shadow-sm" required/>
                </div>
                <button type="submit" className="w-full px-5 py-4 rounded-xl bg-orange-500 text-black font-bold text-lg hover:bg-orange-600 transition shadow-md mt-2">Quiero mi estrategia</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-white/60 text-lg">Todo lo que necesitas saber sobre cómo trabajamos.</p>
          </div>
          <div className="space-y-4">
            {[
              ['¿Desarrollan software o hacen marketing?', 'Hacemos ambos. GrowthFlow nació de la necesidad de integrar marketing efectivo con tecnología robusta, ofreciendo soluciones 360° para escalar negocios digitales sin fricciones entre agencias y desarrolladores.'],
              ['¿Cuánto cuesta un proyecto con ustedes?', 'Depende del alcance, ya sea una campaña de Ads, automatización o una App móvil. Trabajamos con paquetes personalizados y modelos de revenue share (compartir beneficios). Cotizamos a la medida tras el diagnóstico inicial.'],
              ['¿Cuándo empezaré a ver resultados?', 'En servicios de marketing, típicamente la fase de estabilización toma 30 días y la rentabilidad 60-90 días. En desarrollo de software, establecemos milestones (entregables) claros desde las primeras semanas para que veas progreso constante.'],
              ['¿Qué necesito para empezar a trabajar con GrowthFlow?', 'Tener claridad en tu oferta de valor, disposición para invertir en el crecimiento de tu marca, y decisión firme para escalar a nivel técnico o comercial. Nosotros nos encargamos de la ejecución tecnológica y estratégica.']
            ].map(([q, a]) => (
              <details key={q} className="group p-6 rounded-2xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition">
                <summary className="font-bold text-white outline-none list-none flex justify-between items-center text-lg">
                  {q}
                  <span className="text-orange-500 group-open:rotate-45 transition-transform duration-300 text-2xl leading-none flex-shrink-0 ml-4">+</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed text-base">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
