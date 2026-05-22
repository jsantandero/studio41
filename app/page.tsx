"use client";

import { Home, Layers3, ImageIcon, History } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F5F5F3] text-[#111111] pb-28">
      
      {/* HERO */}
      <section className="px-6 pt-10">
        <div className="rounded-[32px] bg-white shadow-sm p-6">
          
          <div className="mb-6">
            <p className="text-sm tracking-[0.25em] text-neutral-400 mb-2">
              STUDIO41
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight">
              Producción visual premium para mobiliario.
            </h1>
          </div>

          <div className="rounded-[28px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-[360px] object-cover"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* ACTIONS */}
      <section className="px-6 mt-8">
        <div className="grid grid-cols-1 gap-4">

          <button className="bg-black text-white rounded-[28px] p-6 text-left transition active:scale-[0.98]">
            <p className="text-sm text-neutral-400 mb-2">
              MÓDULO 01
            </p>

            <h2 className="text-2xl font-semibold mb-2">
              Generar Ficha
            </h2>

            <p className="text-neutral-400 text-sm leading-relaxed">
              Crea fichas técnicas visuales premium automáticamente.
            </p>
          </button>

          <button className="bg-white rounded-[28px] p-6 text-left shadow-sm transition active:scale-[0.98]">
            <p className="text-sm text-neutral-400 mb-2">
              MÓDULO 02
            </p>

            <h2 className="text-2xl font-semibold mb-2">
              Ambientar Producto
            </h2>

            <p className="text-neutral-500 text-sm leading-relaxed">
              Inserta productos reales en ambientes editoriales.
            </p>
          </button>

        </div>
      </section>

      {/* RECENTS */}
      <section className="px-6 mt-10">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xl font-semibold">
            Proyectos recientes
          </h3>

          <button className="text-sm text-neutral-500">
            Ver todos
          </button>
        </div>

        <div className="space-y-4">

          <div className="bg-white rounded-[28px] p-4 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-[200px] rounded-[20px] object-cover mb-4"
              alt=""
            />

            <div>
              <h4 className="font-semibold text-lg">
                Mesa Nórdica
              </h4>

              <p className="text-sm text-neutral-500 mt-1">
                Editorial Premium · 4:5
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[28px] p-4 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-[200px] rounded-[20px] object-cover mb-4"
              alt=""
            />

            <div>
              <h4 className="font-semibold text-lg">
                Rack Industrial
              </h4>

              <p className="text-sm text-neutral-500 mt-1">
                Japandi · 9:16
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* BOTTOM NAV */}
      <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[92%] max-w-md">
        <div className="bg-white/90 backdrop-blur-xl border border-black/5 rounded-full px-6 py-4 shadow-xl">
          
          <div className="flex items-center justify-between">

            <button className="flex flex-col items-center gap-1 text-black">
              <Home size={20} />
              <span className="text-[11px]">
                Inicio
              </span>
            </button>

            <button className="flex flex-col items-center gap-1 text-neutral-400">
              <Layers3 size={20} />
              <span className="text-[11px]">
                Fichas
              </span>
            </button>

            <button className="flex flex-col items-center gap-1 text-neutral-400">
              <ImageIcon size={20} />
              <span className="text-[11px]">
                Ambientes
              </span>
            </button>

            <button className="flex flex-col items-center gap-1 text-neutral-400">
              <History size={20} />
              <span className="text-[11px]">
                Historial
              </span>
            </button>

          </div>

        </div>
      </nav>

    </main>
  );
}